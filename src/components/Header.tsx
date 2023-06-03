"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import MobileNavBar from "./MobileNavBar";
import DesktopNavBar from "./DesktopNavBar";

type mediaQueryType = {
  children: React.JSX.Element;
};

export default function Header() {
  const isMobile: boolean = useMediaQuery({
    query: "(max-width:767px)",
  });

  const [showMenu, setShowmenu] = useState<boolean>(false);
  const [Mobile, setMobile] = useState<boolean>(true);


  useEffect(() => {
     if (isMobile) {
       setMobile(true);
     } else {
       setMobile(false);
     }
  }, [isMobile]);

  useEffect(() => {
    console.log("showMenu : " + showMenu);
    console.log("isMobile : ", isMobile);
  }, [showMenu, isMobile]);

  return (
    <header className="p-4">
      <nav>
        <div className="flex w-full flex-col md:flex-row md:justify-between md:gap-0 ">
          <div className="flex justify-between md:block">
            <Link href="/">
              <h1 className="m-1 text-2xl font-bold">{"Aiden's Blog"}</h1>
            </Link>
            <AiOutlineMenu
              className="flex items-center justify-center text-4xl hover:cursor-pointer md:hidden"
              onClick={() => setShowmenu(!showMenu)}
            />
          </div>
          {Mobile ? (
            showMenu && <MobileNavBar setShowMenu={setShowmenu} />
          ) : (
            <DesktopNavBar />
          )}
        </div>
      </nav>
    </header>
  );
}
