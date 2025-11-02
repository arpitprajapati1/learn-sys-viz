import { Link, useLocation } from "react-router-dom";
import { Home, BookOpen, MessageSquare, Trophy, Code, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/refactoring", label: "Refactoring", icon: Code },
    { path: "/design-patterns", label: "Design Patterns", icon: BookOpen },
    { path: "/learn", label: "Interactive Lessons", icon: BookOpen },
    { path: "/quiz", label: "Quiz", icon: Trophy },
    { path: "/chat", label: "AI Chat", icon: MessageSquare },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      
      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-screen w-64 bg-[hsl(var(--sidebar-bg))] text-[hsl(var(--sidebar-text))] flex flex-col shadow-lg z-50 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        {/* Close button - mobile only */}
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Logo */}
        <Link to="/" className="p-6 border-b border-white/20" onClick={onClose}>
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
                  onClick={onClose}
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

      {/* Theme Toggle */}
      <div className="px-6 py-3 border-t border-white/20 flex items-center justify-between">
        <span className="text-sm opacity-90">Theme</span>
        <ThemeToggle />
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-white/20 text-sm opacity-90">
        <p className="mb-2">🌟 Premium Content</p>
        <p className="text-xs opacity-75">
          Learn System Design through interactive examples and AI guidance
        </p>
      </div>
    </aside>
    </>
  );
};

export default Sidebar;
