import { Outlet, ScrollRestoration } from "react-router";

export function AppLayout() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center w-full overflow-x-hidden">
      <ScrollRestoration />
      <div className="w-full  flex flex-col relative shrink-0">
        <Outlet />
      </div>
    </div>
  );
}
