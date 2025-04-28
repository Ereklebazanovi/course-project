import './App.css';
import Layout from './Layout';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import DashboardPage from './pages/DashboardPage';
import InboxPage from './pages/InboxPage';
import LessonPage from './pages/LessonPage';
import TaskPage from './pages/TaskPage';
import GroupPage from './pages/GroupPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="inbox" element={<InboxPage />} />
        <Route path="lesson" element={<LessonPage />} />
        <Route path="task" element={<TaskPage />} />
        <Route path="group" element={<GroupPage />} />
      </Route>
    </Routes>
  );
};

export default App;
