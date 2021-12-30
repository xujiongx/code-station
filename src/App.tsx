import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import MyEditor from "./pages/Edit";
import SelectAvatar from "./pages/Game/select_avatar";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Hello />} />
        <Route path="edit" element={<MyEditor />} />
        <Route path="game" element={<SelectAvatar />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/edit">Edit</Link>
          </li>
          <li>
            <Link to="/game">Game</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

function Hello() {
  return <div>Hello word</div>;
}
