
import { 
  LayoutDashboard, 
  Plus, 
  List, 
  Calendar, 
  BarChart3, 
  Settings,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "create", label: "Create Workflow", icon: Plus },
    { id: "workflows", label: "Workflows", icon: List },
    { id: "schedule", label: "Schedule", icon: Calendar },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <aside className="w-64 h-screen glass-card-darker border-r border-white/10 fixed left-0 top-16 z-40">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8">
          <Zap className="w-5 h-5 text-cyan-400" />
          <span className="text-sm text-muted-foreground">Workflow Orchestrator</span>
        </div>
        
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <Button
                key={item.id}
                variant="ghost"
                className={cn(
                  "w-full justify-start text-left hover:bg-white/10 transition-all duration-200 relative",
                  isActive 
                    ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400" 
                    : "text-muted-foreground hover:text-white"
                )}
                onClick={() => setActiveTab(item.id)}
              >
                <Icon className="mr-3 h-4 w-4" />
                {item.label}
                {isActive && (
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-cyan-400 rounded-l-sm" />
                )}
              </Button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};
