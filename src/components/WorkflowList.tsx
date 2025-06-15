
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, Pause, Edit, Trash2, Search } from "lucide-react";

const workflows = [
  {
    id: 1,
    name: "Daily Sales Report",
    status: "active",
    lastRun: "2 hours ago",
    nextRun: "Tomorrow 9:00 AM",
    success: 98,
    description: "Automated daily sales data processing and reporting"
  },
  {
    id: 2,
    name: "Customer Onboarding",
    status: "paused",
    lastRun: "1 day ago",
    nextRun: "Paused",
    success: 95,
    description: "Streamlined customer onboarding process automation"
  },
  {
    id: 3,
    name: "Inventory Management",
    status: "active",
    lastRun: "30 minutes ago",
    nextRun: "Every 2 hours",
    success: 92,
    description: "Automated inventory tracking and reorder alerts"
  },
  {
    id: 4,
    name: "Email Campaign",
    status: "active",
    lastRun: "1 hour ago",
    nextRun: "Weekly on Monday",
    success: 88,
    description: "Automated email marketing campaign management"
  },
  {
    id: 5,
    name: "Data Backup",
    status: "error",
    lastRun: "Failed 6 hours ago",
    nextRun: "Daily 2:00 AM",
    success: 75,
    description: "Automated database backup and verification"
  },
];

export const WorkflowList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500/20 text-green-400";
      case "paused":
        return "bg-yellow-500/20 text-yellow-400";
      case "error":
        return "bg-red-500/20 text-red-400";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  const filteredWorkflows = workflows.filter(workflow =>
    workflow.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    workflow.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Workflows</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search workflows..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 glass-card border-white/20 text-white w-64"
            />
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        {filteredWorkflows.map((workflow) => (
          <Card key={workflow.id} className="glass-card hover:glow-effect transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-semibold text-white">
                      {workflow.name}
                    </h3>
                    <Badge className={getStatusColor(workflow.status)}>
                      {workflow.status}
                    </Badge>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <span>Success Rate:</span>
                      <span className="text-green-400 font-medium">{workflow.success}%</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-3">
                    {workflow.description}
                  </p>
                  
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <div>
                      <span className="text-white">Last Run:</span> {workflow.lastRun}
                    </div>
                    <div>
                      <span className="text-white">Next Run:</span> {workflow.nextRun}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  {workflow.status === "active" ? (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10"
                    >
                      <Pause className="w-4 h-4 mr-1" />
                      Pause
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-green-400 text-green-400 hover:bg-green-400/10"
                    >
                      <Play className="w-4 h-4 mr-1" />
                      Run
                    </Button>
                  )}
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
                  >
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-red-400 text-red-400 hover:bg-red-400/10"
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
