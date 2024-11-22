import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DropdownMenu from '../element/DropdownNav';
import NavLink from '../element/NavLink';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faBars,
  faBarsStaggered,
  faCartShopping,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavLinkItem {
  label: string;
  path: string;
}

const navLinks: NavLinkItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Shop', path: '/shop' },
  { label: 'About', path: '/about' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
  { label: 'Pages', path: '/pages' },
];

const dropdownItems: NavLinkItem[] = [
  { label: 'Clothing', path: '/shop/clothing' },
  { label: 'Accessories', path: '/shop/accessories' },
  { label: 'Shoes', path: '/shop/shoes' },
];

const NavbarUser = () => {
  const [menuIsActive, setMenuIsActive] = useState(false); // State untuk menu

  return (
    <div className="h-14 w-full flex items-center justify-center font-monserat border-b">
      <div className="flex container h-full items-center justify-between">
        <div className="flex items-center gap-14">
          <p className="text-2xl font-semibold">Zerivo</p>
          {/* Menu utama, di-hide pada ukuran layar kecil */}
          <div className={`hidden md:flex items-center gap-4 text-sm`}>
            {navLinks.map((link, index) =>
              link.label === 'Shop' ? (
                <DropdownMenu
                  key={index}
                  title={link.label}
                  items={dropdownItems}
                />
              ) : (
                <NavLink key={index} to={link.path} label={link.label} />
              )
            )}
          </div>
        </div>
        {/* Ikon untuk user, search, cart, dan menu hamburger */}
        <div className="flex items-center gap-4 text-primary-color">
          <Link
            to="/sign-in"
            className="flex items-center gap-2 text-xs font-semibold cursor-pointer hover:text-hover-color"
          >
            <FontAwesomeIcon icon={faUser} />
            <p>Login/Register</p>
          </Link>
          <FontAwesomeIcon
            icon={faSearch}
            className="text-xs cursor-pointer hover:text-hover-color"
          />
          <Link
            to="/cart"
            className="flex items-center gap-1 text-xs cursor-pointer hover:text-hover-color"
          >
            <FontAwesomeIcon icon={faCartShopping} />
            <p>1</p>
          </Link>
          {/* Tombol hamburger yang berubah */}
          <FontAwesomeIcon
            icon={menuIsActive ? faBarsStaggered : faBars} // Mengganti ikon berdasarkan state
            onClick={() => setMenuIsActive(!menuIsActive)} // Toggle menu
            className="md:hidden flex text-lg cursor-pointer hover:text-hover-color"
          />
        </div>
      </div>

      {/* Menu yang ditampilkan ketika menu dibuka pada mode mobile */}
      {menuIsActive && (
        <div className="md:hidden absolute top-12 left-0 w-full bg-gray-100 shadow-xl mt-2">
          <div className="flex flex-col items-center gap-4 py-4 text-xs">
            {navLinks.map((link, index) =>
              link.label === 'Shop' ? (
                <DropdownMenu
                  key={index}
                  title={link.label}
                  items={dropdownItems}
                />
              ) : (
                <NavLink key={index} to={link.path} label={link.label} />
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarUser;
