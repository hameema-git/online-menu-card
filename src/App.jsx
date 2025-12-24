import Login from "./Login";

export default function App() {
  const path = window.location.pathname.toLowerCase();

  if (path === "/login") return <Login />;
  if (path === "/create") return <CreateShop />;
  if (path === "/seed") return <Seed />;
  if (path === "/admin") return <Admin />;

  return <Menu />;
}

