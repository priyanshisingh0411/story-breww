"use client";
import React, { JSX, useEffect, useState } from "react";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";

function NavBar({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
    buttonNo: number;
  }[];
  className?: string;
}) {
  const [menuButton, setMenuButton] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // console.log(navItems.map((item) => item.buttonNo));
  console.log(menuButton);

  // handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  function menuButtonClicked({ num }: { num: number }) {
    setMenuButton(num);
  }

  return (
    <div>
      <div
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-20 w-[90%] backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] px-8 py-4 flex items-center justify-between transition-all duration-500 ${
          showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"
        } ${className}`}
      >
        <div className="text-white font-extrabold text-xl tracking-wider">
          story breww<span className="text-orange-400">..</span>
        </div>

        <div className="space-x-4">
          {navItems.map(
            (
              navItem: {
                name: string;
                link: string;
                buttonNo: number;
                icon?: JSX.Element;
              },
              idx: number
            ) => (
              <a key={`link=${idx}`} href={navItem.link}>
                <button
                  onClick={() => menuButtonClicked({ num: navItem.buttonNo })}
                  className={`${
                    menuButton === navItem.buttonNo
                      ? "border-2 border-white rounded-full w-auto h-10 px-3 font-bold"
                      : "px-4 py-2 text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
                  }  `}
                >
                  {navItem.name}
                </button>
              </a>
            )
          )}

          {/* <button
            onClick={() => menuButtonClicked({ num: 2 })}
            className={`${
              menuButton === 2
                ? "border-2 border-white rounded-full w-auto h-10 px-3 font-bold"
                : "px-4 py-2 text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
            }  `}
          >
            About Us
          </button>
          <button
            onClick={() => menuButtonClicked({ num: 3 })}
            className={`${
              menuButton === 3
                ? "border-2 border-white rounded-full w-auto h-10 px-3 font-bold"
                : "px-4 py-2 text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
            }  `}
          >
            Services
          </button> */}
        </div>
        <div>
          <HoverBorderGradient
            containerClassName="rounded-md"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <span>Get In Touch</span>
          </HoverBorderGradient>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
