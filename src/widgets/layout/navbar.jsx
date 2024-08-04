import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Avatar
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

export function Navbar({ brandName, routes, action }) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const NavOpenable = () => {
    setOpenNav(!openNav);
    var navbar = document.getElementById("mobileNavbar");
    if(openNav) {
      navbar.style.display = "none";
    } else {
      navbar.style.display = "block";
    }
  };

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-end lg:gap-6">
      { routes.map(({ name, path, href, target, isNav }) => (
        isNav == false && (
          <Typography
            key={name}
            as="li"
            className="text-base text-[#2c2c5e] hover:underline-offset-4 focus:underline-offset-4 "
          >
            {href ? (
              <Link
                to={path}
                target={target}
                className="flex items-end gap-1 py-1 px-3 font-normal hover:underline"
              >
                {name}
              </Link>
            ) : (
              <Link
                to={path}
                target={target}
                className="flex items-end gap-1 py-1 px-3 font-normal hover:underline"
              >
                {name}
              </Link>
            )}
          </Typography>
        )
      ))}
    </ul>
  );

  return (
    <MTNavbar color="transparent" className="pt-5 px-[90px] mx-auto text-blue-950 w-full">
      <div className="container mx-auto flex items-end justify-between">
        <Link to="/">
          <Avatar
            src={"/img/logo-filebot.svg"}
            alt={"name"}
            size="xxl"
            className="h-11 w-60 rounded-none"
          />
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          size="sm"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={NavOpenable}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <MobileNav
        id="mobileNavbar"
        className="hidden rounded-xl bg-white px-4 pt-2 pb-4 text-blue-gray-900"
        open={openNav}
      >
        <div className="container mx-auto">
          {navList}
        </div>
      </MobileNav>
    </MTNavbar>
  );
}

Navbar.defaultProps = {
  brandName: "Chatbase",
  action: (
    <a href="/">
      <Button variant="gradient" size="sm" fullWidth>
        free download
      </Button>
    </a>
  ),
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
