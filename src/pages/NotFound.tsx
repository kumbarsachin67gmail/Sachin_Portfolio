import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center">
        <p className="font-mono text-sm text-muted-foreground mb-2">404</p>
        <h1 className="text-4xl font-bold mb-4">Page not found</h1>
        <a href="/" className="link-underline font-semibold text-brand">
          Return to home
        </a>
      </div>
    </main>
  );
};

export default NotFound;
