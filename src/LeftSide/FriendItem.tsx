import type React from "react"

export interface Friend {
  id: string
  name: string
  role: string
  avatarUrl?: string
}

const FriendItem: React.FC<Friend> = ({ name, role, avatarUrl }) => (
  <div className="flex items-center gap-3 py-2">
    <div className="relative">
      <img
        src={avatarUrl || `/placeholder.svg?height=32&width=32`}
        alt={name}
        className="w-8 h-8 rounded-full object-cover"
      />
      <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-white"></div>
    </div>
    <div>
      <p className="text-sm font-medium">{name}</p>
      <p className="text-xs text-gray-500">{role}</p>
    </div>
  </div>
)

export default FriendItem
