import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import AboutPage from './pages/AboutPage';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import { Outlet } from '@tanstack/react-router';

// Layout component that wraps all pages
function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

// Define routes
const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const booksRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/books',
  component: BooksPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

// Create the route tree
const routeTree = rootRoute.addChildren([indexRoute, booksRoute, aboutRoute]);

// Create the router
const router = createRouter({ routeTree });

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
