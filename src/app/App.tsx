import { Routes, Route, Link } from "react-router-dom";

import CreateTaskPage from "../pages/CreateTaskPage";
import GamePage from "../pages/GamePage";
import TasksPage from "../pages/TasksPage";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import { Protected } from "./routing/Protected";
import { ConfigProvider } from "antd";

export default function App() {
  return (
    <div style={{ background: '#F37022', height: '100vh' }}>
    <ConfigProvider>
      <header>
        <Link to="/">Home</Link>
        <Link to="/auth">Auth</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/create-task">Create task</Link>
        <Link to="/game">Create task</Link>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route
          path="/tasks"
          element={
            <Protected>
              <TasksPage />
            </Protected>
          }
        />
        <Route
          path="/create-task"
          element={

              <CreateTaskPage />

          }
        />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </ConfigProvider>
    </div>
  );
}
