// src/LeftSide/NavItem.tsx
import { Link } from 'react-router-dom';

export interface NavItemProps {
  label: string;
  icon: React.ReactNode;
  to: string; // Route path
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  icon,
  label,
  to,
  active = false,
}) => (
  <Link
    to={to}
    className={`flex items-center gap-4 w-full text-left py-2 px-1 ${active ? 'text-purple-600 font-semibold' : 'text-gray-700'} hover:text-purple-500 transition-colors`}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

export default NavItem;
