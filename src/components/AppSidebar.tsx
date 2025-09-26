import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  MessageSquare, 
  Users, 
  BarChart3, 
  Mail 
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "RAG Chatbot", href: "/rag-chatbot", icon: MessageSquare },
  { name: "Crew Rostering", href: "/crew-rostering", icon: Users },
  { name: "Northwind Sales Analysis", href: "/northwind-analysis", icon: BarChart3 },
  { name: "Email Automation", href: "/email-automation", icon: Mail },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <div className="flex h-screen w-64 flex-col bg-gradient-card border-r border-border">
      {/* Logo/Header */}
      <div className="flex h-16 items-center px-6 border-b border-border">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <LayoutDashboard className="h-4 w-4 text-primary-foreground" />
          </div>
          <h1 className="text-lg font-semibold bg-gradient-primary bg-clip-text text-transparent">
            AI Training
          </h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <NavLink
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105",
                isActive
                  ? "bg-gradient-primary text-primary-foreground shadow-glow"
                  : "text-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-border">
        <p className="text-xs text-muted-foreground">
          AI Training Program 2024
        </p>
      </div>
    </div>
  );
}