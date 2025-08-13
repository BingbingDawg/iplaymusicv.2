import { BiCategory } from "react-icons/bi";
import { HiOutlineStar } from "react-icons/hi";
import { IoAlbumsOutline } from "react-icons/io5";
import { RiPlayListAddFill } from "react-icons/ri";
import { VscColorMode } from "react-icons/vsc";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className=" fixed bottom-0 w-full p-4 z-50 bg-white shadow-[0_-7px_10px_rgba(0,0,0,0.1)]">
            <nav>
                <ul className="flex justify-evenly list-none m-0 p-0">
                    <Link href={"/"}><li><IoAlbumsOutline /></li></Link>
                    <Link href={"/"}><li><RiPlayListAddFill /></li></Link>
                    <Link href={"/"}><li><HiOutlineStar /></li></Link>
                    <Link href={"/"}><li><VscColorMode /></li></Link>
                    <Link href={"/"}><li><BiCategory /></li></Link>
                </ul>
            </nav>
        </footer>
    )
}