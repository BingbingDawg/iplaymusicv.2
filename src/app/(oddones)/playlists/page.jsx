import Navigation from "@/app/components/navigation";
import PlaylistCarousel from "@/app/components/playlist-carousel";
import SiteHeader from "@/app/components/site-header";

import { cookies } from "next/headers";


export default async function PlayLists() {
    

    const cookieStore = await cookies();

    const access_token = cookieStore.get("iplaymusic_access_token")

    const playlistResponse = await fetch(`https://api.spotify.com/v1/me/playlists/`, {
        headers: {
            "Authorization": `Bearer ${access_token.value}`
        }

    })
    const playlistdata = await playlistResponse.json();
    console.log("playlistdata", playlistdata);


    return(
        <>
            <SiteHeader />
            <main>
                <div className="soundwave-bg">
                    <PlaylistCarousel playlistdata={playlistdata}/>
                </div>
                <Navigation />
            </main>
        </>
    )
}