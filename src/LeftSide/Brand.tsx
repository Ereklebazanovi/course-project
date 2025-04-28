import type React from "react"
import { PlusIcon } from "lucide-react"

export interface BrandProps {
  collapsed: boolean
}

const Brand: React.FC<BrandProps> = ({ collapsed }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center">
      <PlusIcon className="text-white" size={20} />
    </div>
    {!collapsed && <span className="text-purple-600 font-bold text-xl">COURSUE</span>}
  </div>
)

export default Brand
