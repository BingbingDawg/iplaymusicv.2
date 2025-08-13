import Heading from "@/app/components/heading";
import { cookies } from "next/headers";
import Image from "next/image";

export async function MetadataGenerator({ params }) {
    const { albumid } = params;
    cookieStore = await cookies();

    const access_token = cookieStore.get ("iplaymusic_access_token")

    const response = await fetch(`https://api.spotify.com/v1/albums/${albumid}`, {
        headers: {
      "Authorization": `Bearer ${access_token.value}`
    }
    })
    const albumData = await response.json();

    return {
        title: albumData.name
    }
}

export default async function AlbumsDetailPage({ params }){
    const { albumid } = await params;
    const cookieStore = await cookies();

    const access_token = cookieStore.get ("iplaymusic_access_token")

    const response = await fetch(`https://api.spotify.com/v1/albums/${albumid}`, {
        headers: {
      "Authorization": `Bearer ${access_token.value}`
    }
    })
    const albumData = await response.json();

    return (
        <>
        <Heading level={2}>Halløj</Heading>
        
        </>
    )

}