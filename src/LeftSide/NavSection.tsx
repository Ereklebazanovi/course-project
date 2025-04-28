import type React from "react"

export type NavItem = {
  key: string
  label: string
  icon: React.ReactNode
}

export interface NavSectionProps {
  title: string
  items?: NavItem[]
  defaultSelectedKey?: string
  collapsed: boolean
}

const NavSection: React.FC<NavSectionProps> = ({ items = [], defaultSelectedKey, collapsed }) => {
  // pick a safe "first" key if no defaultSelectedKey is provided
  const selectedKey = defaultSelectedKey ?? (items.length > 0 ? items[0].key : "")

  return (
    <div className="mb-8">

      <div className="space-y-1">
        {items.map((item) => (
          <button
            key={item.key}
            className={`flex items-center gap-3 w-full text-left py-2 px-1 rounded-md transition-colors
              ${item.key === selectedKey ? "text-purple-600 font-medium" : "text-gray-700"}`}
          >
            <span className={item.key === selectedKey ? "text-purple-600" : "text-gray-500"}>{item.icon}</span>
            {!collapsed && <span>{item.label}</span>}
          </button>
        ))}
      </div>
    </div>
  )
}

export default NavSection
