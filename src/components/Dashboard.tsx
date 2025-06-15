
import { Activity, Clock, CheckCircle, AlertTriangle, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WorkflowChart } from "./WorkflowChart";
import { RecentActivity } from "./RecentActivity";

export const Dashboard = () => {
  const stats = [
    {
      title: "Active Workflows",
      value: "24",
      change: "+12%",
      icon: Activity,
      color: "text-cyan-400",
    },
    {
      title: "Scheduled Tasks",
      value: "156",
      change: "+8%",
      icon: Clock,
      color: "text-green-400",
    },
    {
      title: "Completed Today",
      value: "89",
      change: "+23%",
      icon: CheckCircle,
      color: "text-blue-400",
    },
    {
      title: "Failed Tasks",
      value: "3",
      change: "-45%",
      icon: AlertTriangle,
      color: "text-red-400",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="glass-card hover:glow-effect transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="mr-1 h-3 w-3 text-green-400" />
                  {stat.change} from last month
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <WorkflowChart />
        </div>
        <div>
          <RecentActivity />
        </div>
      </div>
    </div>
  );
};
