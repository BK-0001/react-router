import { Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <div>
      <header>header</header>
      <main>
        {/* equivalent to children but it is for React Router */}
        <Outlet />
      </main>
    </div>
  );
}
