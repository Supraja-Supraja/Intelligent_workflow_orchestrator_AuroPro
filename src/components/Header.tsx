
import { Search, Bell, User, Settings, Workflow, ChevronDown, HelpCircle, LogOut, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  return (
    <header className="h-16 glass-card border-b border-white/10 flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
            <Workflow className="text-white w-5 h-5" />
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
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 flex items-center space-x-1">
              <User className="w-4 h-4" />
              <ChevronDown className="w-3 h-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-slate-800 border-slate-700">
            <div className="px-3 py-2 text-sm text-white">
              <div className="font-medium">User ID: #12345</div>
              <div className="text-slate-400">john.doe@example.com</div>
            </div>
            <DropdownMenuSeparator className="bg-slate-700" />
            <DropdownMenuItem className="text-white hover:bg-slate-700 cursor-pointer">
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Upgrade plan</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-white hover:bg-slate-700 cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              <span>Personalize</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-white hover:bg-slate-700 cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-white hover:bg-slate-700 cursor-pointer">
              <HelpCircle className="mr-2 h-4 w-4" />
              <span>Help</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-slate-700" />
            <DropdownMenuItem className="text-red-400 hover:bg-slate-700 cursor-pointer">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
