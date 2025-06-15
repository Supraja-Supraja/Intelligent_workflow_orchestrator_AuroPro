
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Play } from "lucide-react";

const activities = [
  {
    id: 1,
    workflow: "Data Processing Pipeline",
    status: "completed",
    time: "2 minutes ago",
    icon: CheckCircle,
  },
  {
    id: 2,
    workflow: "Email Campaign Automation",
    status: "running",
    time: "5 minutes ago",
    icon: Play,
  },
  {
    id: 3,
    workflow: "Report Generation",
    status: "scheduled",
    time: "10 minutes ago",
    icon: Clock,
  },
  {
    id: 5,
    workflow: "Customer Onboarding",
    status: "completed",
    time: "1 hour ago",
    icon: CheckCircle,
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "text-green-400 bg-green-400/20";
    case "running":
      return "text-blue-400 bg-blue-400/20";
    case "scheduled":
      return "text-yellow-400 bg-yellow-400/20";
    default:
      return "text-gray-400 bg-gray-400/20";
  }
};

export const RecentActivity = () => {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-white">Recent Activity</CardTitle>
        <p className="text-muted-foreground text-sm">
          Latest workflow executions and updates
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div
                key={activity.id}
                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                <div className={`p-2 rounded-full ${getStatusColor(activity.status)}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">
                    {activity.workflow}
                  </p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge
                      variant="secondary"
                      className={`text-xs ${getStatusColor(activity.status)}`}
                    >
                      {activity.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {activity.time}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
