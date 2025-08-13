"use client";

import { usePathname, useRouter } from "next/navigation";
import { IoIosArrowBack, IoIosSearch } from "react-icons/io";
import {useEffect, useState } from "react";
import { set } from "zod";

export default function SiteHeader({
 
  returnToPage = true,
  }) {
  const router = useRouter();
  const pathname = usePathname();
  const [showSearch, setShowSearch] = useState(false);
  const [title, setTitle] = useState("")
  const [gradientTitle, setGradientTitle] = useState(false);

  useEffect(function() {
    switch(pathname) {
      case "/":
        setShowSearch(true);
        setTitle("Featured")
        setGradientTitle("Featured");
        break;
      case "/categories":
        setShowSearch(true);
        setTitle("Categories")
        setGradientTitle("Categories");
        break;
      
    }
  }, [pathname]);
   
  return (
    <>
    <header className="headerMenu">
      {returnToPage && (
        <button  type="button" onClick={() => router.back()}>
        <IoIosArrowBack
          className="col-1 w-auto text-[18px]"
          />
        </button>
      )}
      {title && (
        <p className="col-2 text-lg uppercase font-light text-[15px]">
          {title}
        </p>
      )}
      {showSearch && (
        <IoIosSearch className="col-3 justify-self-end text-[18px] w-auto" />
      )}
    </header>
  {gradientTitle && (
     <p className="col-2 font-bold text-4xl text-gradient mt-[44px] mb-[37px]">
       {gradientTitle}
     </p>
   )}
   </>
  );
}