import Image from "next/image";
import Link from "next/link";


export default function FeaturedCard({ item }) {
    return (
        <Link href={`album/${item.id}`}>
          <Image className="thumbnail" src={item.images[0].url} width={item.images[0].width} height={item.images[0].height} 
          alt=""/>
          <div className="overlay"></div>
          <h2 className="albumtitle text-[2em] font-bold">{item.name}</h2>
          <p className="album-type font-light font-xs">{item.album_type} </p>
          </Link>

    )

}