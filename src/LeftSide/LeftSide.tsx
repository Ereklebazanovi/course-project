import type React from "react"
import { Link, useLocation } from "react-router-dom"
import { Home, Mail, BookOpen, CheckSquare, Users } from "lucide-react"

import Brand from "./Brand"
import NavSection from "./NavSection"

interface LeftSideProps {
  collapsed: boolean
  defaultSelectedKey?: string
}

const LeftSide: React.FC<LeftSideProps> = ({ collapsed, defaultSelectedKey }) => {
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (path: string) => currentPath === path

  return (
    <div
      className={`h-screen border-r border-gray-200 bg-gradient-to-b from-white to-gray-50 ${
        collapsed ? "w-16" : "w-64"
      } transition-all duration-300 shadow-sm flex flex-col`}
    >
      <div className="p-4 mb-2">
        <Brand collapsed={collapsed} />
      </div>

      {/* Navigation buttons */}
      <div className="px-3 py-2">
        <h3 className="text-gray-500 text-xm font-medium uppercase mb-3">{collapsed ? "" : "Navigation"}</h3>
        <div className="space-y-1">
          <Link
            to="/dashboard"
            className={`flex items-center gap-3 w-full text-left py-2.5 px-3 rounded-lg transition-all duration-200 ${
              isActive("/dashboard") ? "bg-purple-100 text-purple-700 font-medium" : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <div className={`${isActive("/dashboard") ? "text-purple-600" : "text-gray-500"}`}>
              <Home size={18} className={`${collapsed ? "mx-auto" : ""}`} />
            </div>
            {!collapsed && <span>Dashboard</span>}
          </Link>

          <Link
            to="/inbox"
            className={`flex items-center gap-3 w-full text-left py-2.5 px-3 rounded-lg transition-all duration-200 ${
              isActive("/inbox") ? "bg-purple-100 text-purple-700 font-medium" : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <div className={`${isActive("/inbox") ? "text-purple-600" : "text-gray-500"}`}>
              <Mail size={18} className={`${collapsed ? "mx-auto" : ""}`} />
            </div>
            {!collapsed && <span>Inbox</span>}
          </Link>

          <Link
            to="/lesson"
            className={`flex items-center gap-3 w-full text-left py-2.5 px-3 rounded-lg transition-all duration-200 ${
              isActive("/lesson") ? "bg-purple-100 text-purple-700 font-medium" : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <div className={`${isActive("/lesson") ? "text-purple-600" : "text-gray-500"}`}>
              <BookOpen size={18} className={`${collapsed ? "mx-auto" : ""}`} />
            </div>
            {!collapsed && <span>Lesson</span>}
          </Link>

          <Link
            to="/task"
            className={`flex items-center gap-3 w-full text-left py-2.5 px-3 rounded-lg transition-all duration-200 ${
              isActive("/task") ? "bg-purple-100 text-purple-700 font-medium" : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <div className={`${isActive("/task") ? "text-purple-600" : "text-gray-500"}`}>
              <CheckSquare size={18} className={`${collapsed ? "mx-auto" : ""}`} />
            </div>
            {!collapsed && <span>Task</span>}
          </Link>

          <Link
            to="/group"
            className={`flex items-center gap-3 w-full text-left py-2.5 px-3 rounded-lg transition-all duration-200 ${
              isActive("/group") ? "bg-purple-100 text-purple-700 font-medium" : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <div className={`${isActive("/group") ? "text-purple-600" : "text-gray-500"}`}>
              <Users size={18} className={`${collapsed ? "mx-auto" : ""}`} />
            </div>
            {!collapsed && <span>Group</span>}
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="my-4 border-t border-gray-200 mx-3"></div>

      {/* Overview section after settings */}
      <div className="px-3 py-2 flex-1">
        <NavSection title="Overview" defaultSelectedKey={defaultSelectedKey} collapsed={collapsed} />
      </div>
    </div>
  )
}

export default LeftSide
