"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import Nav_menu from "./Nav_menu";

export default function Header() {
  const isDesktop: boolean = useMediaQuery({
    query: "(min-width:1024px)",
  });
  const isTablet: boolean = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });
  const isMobile: boolean = useMediaQuery({
    query: "(max-width:767px)",
  });

  const [showMenu, setShowmenu] = useState<boolean>(false);

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

          {!isMobile ? (
            <Nav_menu setShowmenu={setShowmenu} />
          ) : showMenu ? (
            <Nav_menu setShowmenu={setShowmenu} />
          ) : (
            ""
          )}
        </div>
      </nav>
    </header>
  );
}
