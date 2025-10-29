import { Link, useLocation } from "react-router-dom";
import { Home, BookOpen, MessageSquare, Trophy, Code } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/learn", label: "Learn", icon: BookOpen },
    { path: "/quiz", label: "Quiz", icon: Trophy },
    { path: "/chat", label: "AI Chat", icon: MessageSquare },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[hsl(var(--sidebar-bg))] text-[hsl(var(--sidebar-text))] flex flex-col shadow-lg z-50">
      {/* Logo */}
      <Link to="/" className="p-6 border-b border-white/20">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
            <Code className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold leading-tight">SYSTEM DESIGN</h1>
            <p className="text-sm opacity-90">• GURU •</p>
          </div>
        </div>
      </Link>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-white/20 font-semibold"
                      : "hover:bg-white/10"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-6 border-t border-white/20 text-sm opacity-90">
        <p className="mb-2">🌟 Premium Content</p>
        <p className="text-xs opacity-75">
          Learn System Design through interactive examples and AI guidance
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
