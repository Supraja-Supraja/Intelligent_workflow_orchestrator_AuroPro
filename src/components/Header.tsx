
import { Search, Bell, User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Header = () => {
  return (
    <header className="h-16 glass-card border-b border-white/10 flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">W</span>
          </div>
          <h1 className="text-xl font-bold gradient-text">WorkflowAI</h1>
        </div>
      </div>

      <div className="flex items-center space-x-4 flex-1 max-w-md mx-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input 
            placeholder="Search workflows..." 
            className="pl-10 glass-card border-white/20 text-white placeholder:text-muted-foreground"
          />
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
          <Bell className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
          <Settings className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
          <User className="w-4 h-4" />
        </Button>
      </div>
    </header>
  );
};
