export default function App() {
  const path = window.location.pathname.toLowerCase();
  const params = new URLSearchParams(window.location.search);
  const shopId = (params.get("shop") || "").toLowerCase();

  if (path === "/admin") {
    const loggedIn = sessionStorage.getItem(`admin_${shopId}`);
    if (!loggedIn) {
      window.location.href = `/login?shop=${shopId}`;
      return null;
    }
    return <Admin />;
  }

  if (path === "/create") return <CreateShop />;
  if (path === "/seed") return <Seed />;

  return <Menu />;
}
