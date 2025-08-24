import Navigation from "@/app/components/navigation";
import Heading from "@/app/components/heading";
import SiteHeader from "@/app/components/site-header";
import { cookies } from "next/headers";
import Image from "next/image";
import SongCard from "@/app/components/Songcard";



export async function MetadataGenerator({ params }) {
    const { albumid } = params;
    cookieStore = await cookies();

    const access_token = cookieStore.get("iplaymusic_access_token")

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


export default async function AlbumsDetailPage({ params }) {

      
    const { albumid } = await params;
    const cookieStore = await cookies();

    const access_token = cookieStore.get("iplaymusic_access_token")

    const response = await fetch(`https://api.spotify.com/v1/albums/${albumid}`, {
        headers: {
            "Authorization": `Bearer ${access_token.value}`
        }
    })
    const albumData = await response.json();

    console.log("albumData", albumData);

    return (
        <>
            <main>
                <article>
                    <SiteHeader className="fixed w-full text-white" albumData={albumData} />
                    <div className="grid grid-rows-2">
                        <Image className="row-start-1 row-end-3 col-start-1 col-end-2" src={albumData?.images[0].url} alt="" height={albumData.images[0].height} width={albumData.images[0].width} priority />
                        <div className=" row-start-1 row-end-2 col-start-1 col-end-2 flex flex-col place-content-end ml-5">
                            <Heading level={1} className=" text-white text-[36px] mb-3 ">{albumData?.name}</Heading>
                            <p className="text-white font-bold text-[12px]">{albumData?.total_tracks} Songs</p>
                        </div>
                    </div>
                </article>
                        <Heading level={2} className="text-[15px] font-bold ml-[26px] mt-[36px] mb-[28px]">All Songs</Heading>
                <article>
                        {albumData?.tracks?.items?.map(item => 
                        <SongCard key={item.id} item={item} coverImage={albumData.images[0].url} />
                       )}
                </article>
                <Navigation />
            </main>
        </>
    )

}