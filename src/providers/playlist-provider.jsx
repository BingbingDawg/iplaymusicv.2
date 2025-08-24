"use client";

import { createContext, useEffect, useState } from "react";

export const playlistContext = createContext(null);

export default function PlaylistProvider({children}) {

    const [playlist, setPlaylist] = useState({});
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
  if (!playlist?.id) return;

  fetch("/api/playlist-tracks/" + playlist.id)
    .then(res => res.json())
    .then(data => {
      console.log("Fetched tracks:", data); // ✅ add this
      setTracks(data);
    })
    .catch(err => console.error("Fetch error:", err));
}, [playlist]);

  return (
    <playlistContext.Provider value={{ playlist, setPlaylist, tracks }}>
      {children}
    </playlistContext.Provider>
  );
}