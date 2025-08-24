import { useState } from "react";
import { NavLink } from "react-router";
import { SearchInput } from "@features/products-list/components/SearchInput";
import { ROUTES } from "@app/routing/routes";
import { NavbarCart } from "@components/navbar-cart/NavbarCart";

export function Navbar() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <nav className="bg-white fixed w-full top-0 left-0 border-b border-gray-200 z-50 min-h-[75px]">
      <div className="relative container p-4 mx-auto lg:max-w-7xl flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <NavLink to={ROUTES.HOME.route}>Sodimac</NavLink>
        </h1>
        <div className="flex items-center gap-4">
          <SearchInput />
          <button
            onClick={() => setOpenMobileMenu((prevState) => !prevState)}
            className="md:hidden flex flex-col gap-1 hover:cursor-pointer"
            aria-label="Toggle Menu"
          >
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>

          <div className="hidden md:flex gap-4">
            <NavLink to={ROUTES.HOME.route}>Productos</NavLink>
            <NavbarCart />
          </div>
        </div>
      </div>
      {openMobileMenu && (
        <div className="border-t border-gray-200 ">
          <div className="container px-4 mx-auto lg:max-w-5xl md:hidden bg-white p-4 space-y-2">
            <NavLink to={ROUTES.HOME.route} onClick={() => setOpenMobileMenu(false)} className="block">
              Productos
            </NavLink>
            <NavLink to={ROUTES.CART.route} onClick={() => setOpenMobileMenu(false)} className="block">
              Carro
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
