"use client";

import { playerContext } from "@/providers/player-provider";
import Image from "next/image";
import { useContext, useEffect, useReducer, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import DurationConverter from "../Durationconverter";

function useDebounce(value, delay = 300) {
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(function () {
        const timer = setTimeout(function () {
            setDebounceValue(value);
        }, delay);

        return () => clearTimeout(timer);
    }, [value, delay])
    return debounceValue;
}

function reducer(state, action) {
    switch (action.type) {
        case "setController":
            return {
                    ...state,
                    controller: action.controller
                }
        case "setDuration":
             return {
        ...state,
        duration: action.duration
    }
        case "setPosition":
             return {
        ...state,
        position: action.position
    }
        case "setLocalPosition":
             return {
        ...state,
        localPosition: action.localPosition
    }
        case "setPaused": 
            return {
            ...state, 
            isPaused: action.isPaused
            }
        case "seekingTrue":
             return{
            ...state,
            isSeeking: true
        }
        case "seekingFalse":
             return{
            ...state,
            isSeeking: false
        }
        case "setDurationAndPosition": 
            return {
            ...state,
			duration: action.duration,
			position: action.position,
		}
    
    }

    throw new Error("Unknown action: " + action.type);

    
}

export default function Player() {
    const { showPlayer, currentTrack, coverImage } = useContext(playerContext);
    const controlRef = useRef();
    const [playerState, dispatch] = useReducer(reducer, {
        controller: null,
        isPaused: false,
        duration: 0,
        position: 0,
        localPosition: 0,
        isSeeking: false,
    });
    /*const [controller, setController] = useState();
    const [isPaused, setIsPaused] = useState();
    const [timing, setTiming] = useState({ duration: 0, postion: 0 });
    const [localPosition, setLocalPosition] = useState(0);
    const [isSeeking, setIsSeeking] = useState(0); */
    const debouncePosition = useDebounce(playerState.localPosition);

    useEffect(function () {
        if (!playerState.isSeeking) {
            dispatch({ type: "setLocalPosition", localPosition: playerState.position})
        }

    }, [playerState.position, playerState.isSeeking])

    useEffect(function () {
        if (playerState.isSeeking && debouncePosition !== playerState.position) {
            playerState.controller.seek(Math.floor(debouncePosition / 1000));
            dispatch({ type: "seekingFalse"});
        }
    }, [debouncePosition, playerState.position])

    useEffect(function () {


        console.log("currentTrack", currentTrack);
        window.onSpotifyIframeApiReady = function (IFrameAPI) {
            const options = {
                uri: currentTrack.uri,
                width: 0,
                height: 0,
            };

            const callback = (EmbedController) => {
                EmbedController.play();
                dispatch({ type: "setController", controller: EmbedController});
                EmbedController.addListener("playback_update", function (event) {

                    dispatch({ type: "setDurationAndPosition", duration: event.data.duration, position: event.data.position })
                    if (event.data.isPaused) dispatch({ type: "setPaused", isPaused: true });
                    else dispatch({type: "setPaused", isPaused: false });
                })
            };
            IFrameAPI.createController(controlRef.current, options, callback)
        }

    }, [currentTrack]);

    function changedInput(event) {
        dispatch ({ type: "seekingTrue"});
        dispatch ({ type: "setLocalPosition", localPosition: event.target.value})
    }



    return showPlayer ? (
        <div>
            <script src="https://open.spotify.com/embed/iframe-api/v1" async></script>
            <div id="embed-iframe" ref={controlRef}></div>
        <section className="bg-linear-to-br from-pink to-orange-500 w-[90%] h-24 z-100 fixed bottom-18 mx-[5%] rounded-md grid grid-cols-4 grid-rows-3">
            <Image src={coverImage} width={100} height={100} alt="" className="rounded-md col-span-1 row-span-3" />
                <p className="row-span-1 col-span-3 px-2">{currentTrack.name}</p>
                <p className="row-span-1 col-span-3 px-2">{currentTrack.artists[0].name}</p>

            <article className="flex col-span-3 row-span-1 justify-between px-2 items-center">
                <button aria-label="Play" onClick={() => playerState.controller.togglePlay()}>
                    {playerState.isPaused ? <FaPlay /> : <FaPause />}
                </button>
                <span className="">{DurationConverter(playerState.position)}</span>
                <input type="range" onChange={changedInput} value={playerState.localPosition} max={playerState.duration} />
                <span className="">{DurationConverter(playerState.duration)}</span>
            </article>
        </section>
        </div>
    ) : null
}