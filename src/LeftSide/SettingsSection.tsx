// src/SettingsSection.tsx
import React from 'react';
import { LogOut, Settings } from 'lucide-react'; // Icons from lucide-react
import { Link } from 'react-router-dom';

interface SettingsSectionProps {
  collapsed: boolean;
  onSettingsClick: () => void;
  onLogout: () => void;
}

const SettingsSection: React.FC<SettingsSectionProps> = ({
  collapsed,
  onSettingsClick,
  onLogout,
}) => {
  return (
    <div className="mt-auto">
      <div className="text-gray-500 text-xs font-medium uppercase mb-3">{!collapsed && 'Settings'}</div>
      <div className="space-y-1">
        {/* Settings Button */}
        <button
          onClick={onSettingsClick}
          className="flex items-center gap-3 w-full text-left py-2 px-3 rounded-lg hover:bg-gray-100 text-gray-700"
        >
          <Settings size={18} />
          {!collapsed && <span>Settings</span>}
        </button>

        {/* Log Out Button */}
        <button
          onClick={onLogout}
          className="flex items-center gap-3 w-full text-left py-2 px-3 rounded-lg hover:bg-gray-100 text-gray-700"
        >
          <LogOut size={18} />
          {!collapsed && <span>Log Out</span>}
        </button>
      </div>
    </div>
  );
};

export default SettingsSection;
