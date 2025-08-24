"use client";

import { createContext, useEffect, useState } from "react";


export const playlistContext = createContext(null);

export default function PlaylistProvider({children}) {

    const [playlist, setPlaylist] = useState({});
    const [tracks, setTracks] = useState(undefined); // Start as undefined for loading state

    useEffect(() => {
        if (!playlist?.id) {
            setTracks(undefined); // Reset tracks/loading when no playlist selected
            return;
        }

        setTracks(undefined); // Show loading while fetching
        fetch("/api/playlist-tracks/" + playlist.id)
            .then(res => res.json())
            .then(data => {
                console.log("Fetched tracks:", data);
                setTracks(data);
            })
            .catch(err => {
                console.error("Fetch error:", err);
                setTracks([]); // On error, show empty list
            });
    }, [playlist]);

    return (
        <playlistContext.Provider value={{ playlist, setPlaylist, tracks }}>
            {children}
        </playlistContext.Provider>
    );
}