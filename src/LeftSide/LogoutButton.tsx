// src/LeftSide/LogoutButton.tsx
import { LogOut } from 'lucide-react';

const LogoutButton = () => (
  <button
    className="flex items-center gap-2 text-red-500 font-semibold hover:underline transition-colors"
    aria-label="Logout"
  >
    <LogOut size={20} aria-hidden />
    <span>Logout</span>
  </button>
);

export default LogoutButton;
