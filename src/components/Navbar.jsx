import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { CiSearch } from "react-icons/ci";
import {
  GiKnifeFork,
  GiBread,
  GiCupcake,
  GiCookie,
  GiCakeSlice,
  GiDonut,
  GiPieSlice,
} from "react-icons/gi";
import { PiBowlFoodLight } from "react-icons/pi";
import { HashLink } from "react-router-hash-link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const navigation = [
    { name: "All Recipes", href: "/all-recipes", icon: <GiKnifeFork className="text-gray-500" /> },
    { name: "Bread", href: "/BreadN", icon: <GiBread className="text-purple-400" /> },
    { name: "Breakfast", href: "/breakfast", icon: <PiBowlFoodLight className="text-amber-300" /> },
    { name: "Cakes", href: "/cakes", icon: <GiCakeSlice className="text-blue-300" /> },
    { name: "Cookies", href: "/CookiesN", icon: <GiCookie className="text-rose-300" /> },
    { name: "Desserts", href: "/dessert", icon: <GiDonut className="text-pink-300" /> },
    { name: "Pies", href: "/Pies", icon: <GiPieSlice className="text-yellow-500" /> },
  ];

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      {/* ===== Navbar ===== */}
      <Disclosure as="nav" className="bg-white py-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            
            {/* ===== Mobile Menu Button ===== */}
            <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-200 focus:outline-none">
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 text-black group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 text-black group-data-[open]:block"
                />
              </DisclosureButton>
            </div>

            {/* ===== Logo + Navigation ===== */}
            <div className="flex items-center gap-6">
              {/* Logo */}
             <div className="flex justify-center md:justify-center lg:justify-start items-center">
                <img
                  alt="Logo"
                  src="https://sallysbakingaddiction.com/wp-content/themes/sallysbaking/assets/images/logo.svg"
                  className="h-16 w-40 sm:h-14 sm:w-36 md:h-18 md:w-48 lg:h-20 lg:w-56 object-contain"
                />
              </div>
          

              {/* Desktop Navigation Links (with icons) */}
              <div className="hidden lg:block items-center justify-center">
                <div className="flex items-center gap-5">
                  {navigation.map((item) => (
                    <HashLink
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        "flex flex-col items-center text-black hover:text-[#ce7c77]",
                        "rounded-md px-3 py-2 text-sm font-medium transition-all duration-200"
                      )}
                    >
                      <span className="text-2xl mb-1">{item.icon}</span>
                      <span>{item.name}</span>
                    </HashLink>
                  ))}
                </div>
              </div>
            </div>

            {/* ===== Right Side (Search + Bell + Profile) ===== */}
            <div className="flex items-center gap-3">
              <button className="hidden rounded-full border border-gray-900 lg:block p-2 text-gray-900 hover:text-[#ce7c77] focus:outline-none">
                <CiSearch className="h-7 w-7" />
              </button>
              
              <button className="hidden rounded-full border border-gray-900 lg:block p-2 text-gray-900 hover:text-[#ce7c77] focus:outline-none">
                <BellIcon className="h-7 w-7" />
              </button>
              

              <Menu as="div" className="relative">
                <MenuButton className="rounded-full focus:outline-none" />
                <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5">
                  <MenuItem>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Your Profile
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Settings
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Sign out
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>

        {/* ===== Mobile Menu ===== */}
        <DisclosurePanel className="lg:hidden">
  <div className="space-y-1 px-3 pt-2 pb-3">
    {navigation.map((item) => (
      <DisclosureButton
        as={HashLink}
        key={item.name}
        to={item.href}
        smooth
        className="flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-100"
      >
        <span className="text-xl">{item.icon}</span>
        <span>{item.name}</span>
      </DisclosureButton>
    ))}
  </div>
</DisclosurePanel>

      </Disclosure>
    </div>
  );
}






