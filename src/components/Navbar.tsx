import type { NavbarItemProps } from "../types";
import { Link } from "react-router";

const Navbar = () => {
  const navbarElements: NavbarItemProps[] = [
    { name: "Carrello", link: "cart" },
    { name: "Account", link: "account" },
  ];

  return (
    <nav className="hidden md:flex w-full justify-between px-10 py-5">
      {/* Left side */}
      <NavbarItem name="e-Commerce" link={"/"} />
      {/* middle side */}
      <input
        placeholder="Cerca"
        className="w-1/3 bg-white rounded-4xl py-2 px-4 focus:outline-0"
      />
      {/* right side */}
      <div className="flex justify-between gap-10">
        {navbarElements.map((item, index) => (
          <NavbarItem key={index} name={item.name} link={item.link} />
        ))}
      </div>
    </nav>
  );
};

const NavbarItem = ({ name, link }: NavbarItemProps) => (
  <Link to={`/${link}`} className="hover:underline cursor-pointer">
    {name}
  </Link>
);

export default Navbar;
