import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, Pause, Edit, Trash2, Search } from "lucide-react";

const workflowCategories = {
  "Sales & Analytics": [
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
      id: 4,
      name: "Weekly Analytics Dashboard",
      status: "active",
      lastRun: "1 day ago",
      nextRun: "Weekly on Monday",
      success: 96,
      description: "Comprehensive weekly performance analytics"
    }
  ],
  "Customer Management": [
    {
      id: 2,
      name: "Customer Onboarding",
      status: "active",
      lastRun: "1 day ago",
      nextRun: "Continuous",
      success: 95,
      description: "Streamlined customer onboarding process automation"
    },
    {
      id: 6,
      name: "Customer Support Tickets",
      status: "active",
      lastRun: "30 minutes ago",
      nextRun: "Every hour",
      success: 92,
      description: "Automated ticket routing and prioritization"
    }
  ],
  "Operations": [
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
      id: 5,
      name: "Email Campaign Automation",
      status: "active",
      lastRun: "1 hour ago",
      nextRun: "Daily 10:00 AM",
      success: 94,
      description: "Automated email marketing campaign management"
    }
  ]
};

export const WorkflowList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500/20 text-green-400";
      case "paused":
        return "bg-yellow-500/20 text-yellow-400";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  const filterWorkflows = () => {
    let allWorkflows: any[] = [];
    
    if (selectedCategory === "all") {
      Object.values(workflowCategories).forEach(category => {
        allWorkflows = [...allWorkflows, ...category];
      });
    } else {
      allWorkflows = workflowCategories[selectedCategory as keyof typeof workflowCategories] || [];
    }

    return allWorkflows.filter(workflow =>
      workflow.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      workflow.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

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

      {/* Category Filter */}
      <div className="flex space-x-2 mb-6">
        <Button
          variant={selectedCategory === "all" ? "default" : "outline"}
          onClick={() => setSelectedCategory("all")}
          className={selectedCategory === "all" ? "bg-cyan-500 hover:bg-cyan-600" : "border-white/20 text-white hover:bg-white/10"}
        >
          All Workflows
        </Button>
        {Object.keys(workflowCategories).map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "bg-cyan-500 hover:bg-cyan-600" : "border-white/20 text-white hover:bg-white/10"}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Workflows by Category */}
      {selectedCategory === "all" ? (
        Object.entries(workflowCategories).map(([categoryName, workflows]) => (
          <div key={categoryName} className="space-y-4">
            <h2 className="text-xl font-semibold text-white border-b border-white/20 pb-2">
              {categoryName}
            </h2>
            <div className="grid gap-4">
              {workflows
                .filter(workflow =>
                  workflow.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  workflow.description.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((workflow) => (
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
        ))
      ) : (
        <div className="grid gap-4">
          {filterWorkflows().map((workflow) => (
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
      )}
    </div>
  );
};
