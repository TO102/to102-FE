import { useRouter, Outlet, createRootRoute } from "@tanstack/react-router";
import Footer from "../components/common/Footer";
import Error from "../components/common/Error";

function Layout() {
  const router = useRouter();

  const currentPath = router.state.location.pathname;

  const shouldShowHeaderFooter = !(
    currentPath.includes("/login") || currentPath.includes("/post/CreatePost")
  );

  return (
    <>
      <div style={{ padding: '0px 25px'}}>
        <Outlet />
      </div>
      {shouldShowHeaderFooter && <Footer />}
    </>
  );
}

export default Layout;

export const Route = createRootRoute({
  component: Layout,
  notFoundComponent: Error,
});
