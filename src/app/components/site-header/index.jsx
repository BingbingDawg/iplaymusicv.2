"use client";

import { usePathname, useRouter } from "next/navigation";
import { IoIosArrowBack, IoIosSearch } from "react-icons/io";
import {useEffect, useState } from "react";
import { set } from "zod";
import Heading from "../heading";

export default function SiteHeader({
 
  albumData,
  returnToPage = true,
  className = "",
  }) {
  const router = useRouter();
  const pathname = usePathname();
  const [showSearch, setShowSearch] = useState(false);
  const [title, setTitle] = useState("");
  const [gradientTitle, setGradientTitle] = useState(false);

  useEffect(function() {
    switch(true) {
      case pathname === "/":
        setShowSearch(true);
        setTitle("Featured")
        setGradientTitle("Featured");
        break;
      case pathname === "/categories":
        setShowSearch(true);
        setTitle("Categories")
        setGradientTitle("Categories");
        break;
      case pathname === "/playlists":
        setShowSearch(true);
        setTitle("Playlists")
        setGradientTitle("playlists");
        break;
      case /^\/album\/[A-Za-z0-9_-]+$/.test(pathname):
        setShowSearch(false);
        setTitle(albumData?.album_type || "Album Details");
        break;
      case /^\/music-player\/[A-Za-z0-9_-]+$/.test(pathname):
        setShowSearch(false);
        setTitle("playing");
        break;
      
    }
  }, [pathname]);
   
  return (
    <>
    <header className={"headerMenu " + className}>
      {returnToPage && (
        <button  type="button" onClick={() => router.back()}>
        <IoIosArrowBack
          className="col-1 w-auto text-[18px]"
          />
        </button>
      )}
      {title && (
        <p className="
        
        text-lg uppercase font-light text-[15px]">
          {title}
        </p>
      )}
      {showSearch ? (
        <IoIosSearch className="col-3 justify-self-end text-[18px] w-auto" />
      ) : (<div></div>)}
    </header>
  {gradientTitle && (
     <Heading level={2} className={`col-2 font-bold text-4xl ${pathname==="/playlists" ? "text-white capitalize m-[25px]" : "text-gradient"} mt-[44px] mb-[37px]`}>
       {gradientTitle}
     </Heading>
   )}
   </>
  );
}