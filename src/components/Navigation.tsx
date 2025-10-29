import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, BookOpen, MessageSquare, Trophy } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/learn", label: "Learn", icon: BookOpen },
    { path: "/quiz", label: "Quiz", icon: Trophy },
    { path: "/chat", label: "AI Chat", icon: MessageSquare },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2" aria-label="Home">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <span className="text-xl font-bold">SD</span>
          </div>
          <span className="text-xl font-bold text-foreground">System Design Academy</span>
        </Link>

        <div className="flex items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Button
                key={item.path}
                asChild
                variant={isActive ? "default" : "ghost"}
                size="sm"
                className={isActive ? "bg-primary text-primary-foreground" : ""}
              >
                <Link to={item.path} aria-label={item.label} aria-current={isActive ? "page" : undefined}>
                  <Icon className="mr-2 h-4 w-4" aria-hidden="true" />
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              </Button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
