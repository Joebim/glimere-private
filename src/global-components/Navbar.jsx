import { useEffect, useState } from "react";
import NavbarDropdown from "./navbarDropdown";
import { ReactComponent as GlimereSweet } from "../assets/glimere.svg"
import { ReactComponent as GlimereLogo } from "../assets/glimerenew.svg"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  const handleOpen = () => setIsOpen((prev) => !prev);

  const handleScrollPos = () => {
    const currentScrollPos = window.scrollY

    if (currentScrollPos > scrollPos) {
      setIsOpen(false)
    }

    setScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPos)

    return () => {
      window.removeEventListener("scroll", handleScrollPos)
    }
  }, [scrollPos]);

  return (
    <nav className="absolute w-full px-[40px] sm:p-0">
      <div className="container mx-auto max-w-[1344px] bg-[#FFE9B8]">
        <div className="h-16 md:h-20 p-5 md:py-6 lg:px-5 flex items-center justify-between z-20 bg-[#FFE9B8]  relative">
          {/* Icon */}
          <div className="flex flex-row items-center">
            <GlimereLogo style={{ color: "#ed7534" }} height="35" className={`w-[40px] block sm:hidden`} />
            <GlimereSweet style={{ color: "#ed7534" }} height="35" className={`w-[120px] hidden sm:block`} />
          </div>


          {/* Hamburger */}
          <div
            onClick={handleOpen}
            className={`${isOpen ? "open" : ""
              } flex flex-col items-center w-fit gap-[7px] cursor-pointer md:hidden z-20`}
          >
            <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-black rounded-full"></span>
            <span className="transition-all duration-500 ease-in-out h-[2px] w-4 bg-black rounded-full"></span>
            <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-black rounded-full"></span>
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center md:gap-4 lg:gap-8 text-black-200 text-sm lg:text-base font-body">
            <a href="#" className="navlink active-navlink">
              Product
            </a>
            <a href="#" className="navlink">
              Solutions
            </a>
            <a className="navlink">Contact</a>

          </div>

          {/* Button */}
          <div className="hidden md:flex md:gap-4 lg:gap-[25px] items-center text-sm lg:text-base font-head font-medium">
            <a href="#">
              <p className="text-black-100 underline cursor-pointer">Login</p>
            </a>
            <a href="#">
              <button className="text-white bg-[#ED7534] md:py-2.5 px-4 py-3.5 px-[25px]">
                Sell on Glimere
              </button>
            </a>
          </div>
        </div>

        {/* Navbar Menu (Mobile) */}
        <NavbarDropdown isOpen={isOpen} />
      </div>
    </nav>
  );
}