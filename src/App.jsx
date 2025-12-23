import Menu from "./Menu";
import Admin from "./Admin";
import Seed from "./Seed";
import CreateShop from "./CreateShop";

export default function App() {
  const path = window.location.pathname;

  
  if (path === "/create") return <CreateShop />;
  if (path === "/seed") return <Seed />;
  if (path === "/admin") return <Admin />;
  return <Menu />;
}
