import { Outlet } from 'react-router-dom'; // ✅ needed!
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';

const Layout = () => {
  const mockUser = { id: '1', name: 'John Doe', avatarUrl: undefined };

  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-[250px_1fr_250px] min-h-screen p-4">
      {/* Left Sidebar */}
      <LeftSide user={mockUser} />

      {/* Main content from routes */}
      <main className="bg-white p-4 rounded shadow-sm">
        <Outlet />
      </main>

      {/* Right Sidebar */}
      <RightSide />
    </div>
  );
};

export default Layout;
