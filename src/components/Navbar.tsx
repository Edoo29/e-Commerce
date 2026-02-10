import type { NavbarItemProps } from "../types/NavbarItemProps";

const Navbar = () => {
  const navbarElements: NavbarItemProps[] = [
    { name: "Carrello" },
    { name: "Account" },
  ];

  return (
    <nav className="flex w-full justify-between px-10 py-5">
      {/* Left side */}
      <div>
        <span>e-Commerce</span>
      </div>
      {/* middle side */}
      <input
        placeholder="Cerca"
        className="w-1/3 bg-white rounded-4xl py-2 px-4 focus:outline-0"
      />
      {/* right side */}
      <div className="flex justify-between gap-10">
        {navbarElements.map((item, index) => (
          <NavbarItem key={index} name={item.name} />
        ))}
      </div>
    </nav>
  );
};

const NavbarItem = ({ name }: NavbarItemProps) => (
  <span className="hover:underline cursor-pointer">{name}</span>
);

export default Navbar;
