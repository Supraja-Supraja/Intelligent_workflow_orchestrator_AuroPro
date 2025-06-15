
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Plus, Edit, Trash2 } from "lucide-react";
import { toast } from "sonner";

const schedules = [
  {
    id: 1,
    workflow: "Daily Sales Report",
    type: "daily",
    time: "09:00",
    timezone: "UTC",
    status: "active",
    nextRun: "Tomorrow 09:00 UTC"
  },
  {
    id: 2,
    workflow: "Weekly Analytics",
    type: "weekly",
    time: "10:00",
    day: "monday",
    timezone: "UTC",
    status: "active",
    nextRun: "Monday 10:00 UTC"
  },
  {
    id: 3,
    workflow: "Monthly Backup",
    type: "monthly",
    time: "02:00",
    date: "1st",
    timezone: "UTC",
    status: "paused",
    nextRun: "Paused"
  },
];

export const ScheduleManager = () => {
  const [selectedWorkflow, setSelectedWorkflow] = useState("");
  const [scheduleType, setScheduleType] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const [scheduleDay, setScheduleDay] = useState("");

  const handleCreateSchedule = () => {
    if (!selectedWorkflow || !scheduleType || !scheduleTime) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    toast.success("Schedule created successfully!");
    // Reset form
    setSelectedWorkflow("");
    setScheduleType("");
    setScheduleTime("");
    setScheduleDay("");
  };

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

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Schedule Manager</h1>
        <p className="text-muted-foreground">
          Manage automated workflow schedules and timing
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Plus className="w-5 h-5 text-cyan-400" />
              Create Schedule
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="workflow" className="text-white">
                Select Workflow
              </Label>
              <Select value={selectedWorkflow} onValueChange={setSelectedWorkflow}>
                <SelectTrigger className="glass-card border-white/20 text-white mt-2">
                  <SelectValue placeholder="Choose workflow" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-white/20">
                  <SelectItem value="sales-report">Daily Sales Report</SelectItem>
                  <SelectItem value="customer-onboarding">Customer Onboarding</SelectItem>
                  <SelectItem value="inventory-management">Inventory Management</SelectItem>
                  <SelectItem value="email-campaign">Email Campaign</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="schedule-type" className="text-white">
                Schedule Type
              </Label>
              <Select value={scheduleType} onValueChange={setScheduleType}>
                <SelectTrigger className="glass-card border-white/20 text-white mt-2">
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-white/20">
                  <SelectItem value="once">Run Once</SelectItem>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="custom">Custom Cron</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="time" className="text-white">
                Time
              </Label>
              <Input
                id="time"
                type="time"
                value={scheduleTime}
                onChange={(e) => setScheduleTime(e.target.value)}
                className="glass-card border-white/20 text-white mt-2"
              />
            </div>

            {scheduleType === "weekly" && (
              <div>
                <Label htmlFor="day" className="text-white">
                  Day of Week
                </Label>
                <Select value={scheduleDay} onValueChange={setScheduleDay}>
                  <SelectTrigger className="glass-card border-white/20 text-white mt-2">
                    <SelectValue placeholder="Select day" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-white/20">
                    <SelectItem value="monday">Monday</SelectItem>
                    <SelectItem value="tuesday">Tuesday</SelectItem>
                    <SelectItem value="wednesday">Wednesday</SelectItem>
                    <SelectItem value="thursday">Thursday</SelectItem>
                    <SelectItem value="friday">Friday</SelectItem>
                    <SelectItem value="saturday">Saturday</SelectItem>
                    <SelectItem value="sunday">Sunday</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            <Button
              onClick={handleCreateSchedule}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Create Schedule
            </Button>
          </CardContent>
        </Card>

        <div className="lg:col-span-2">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyan-400" />
                Active Schedules
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {schedules.map((schedule) => (
                  <div
                    key={schedule.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-white font-medium">
                          {schedule.workflow}
                        </h3>
                        <Badge className={getStatusColor(schedule.status)}>
                          {schedule.status}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{schedule.type}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{schedule.time} {schedule.timezone}</span>
                        </div>
                        <div>
                          <span className="text-white">Next:</span> {schedule.nextRun}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-red-400 text-red-400 hover:bg-red-400/10"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
