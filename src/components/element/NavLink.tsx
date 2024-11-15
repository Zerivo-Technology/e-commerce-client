// NavLink.tsx
import { Link } from "react-router-dom";

interface NavLinkProps {
    to: string;
    label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label }) => {
    return (
        <Link to={to}>
            <p className="font-semibold text-secondary-color-2">{label}</p>
        </Link>
    );
};

export default NavLink;
