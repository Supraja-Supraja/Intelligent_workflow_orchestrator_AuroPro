
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "00:00", value: 12, completed: 8, failed: 1 },
  { name: "04:00", value: 15, completed: 12, failed: 0 },
  { name: "08:00", value: 28, completed: 25, failed: 2 },
  { name: "12:00", value: 35, completed: 32, failed: 1 },
  { name: "16:00", value: 42, completed: 38, failed: 3 },
  { name: "20:00", value: 25, completed: 23, failed: 1 },
];

export const WorkflowChart = () => {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-white">Workflow Execution Trends</CardTitle>
        <p className="text-muted-foreground text-sm">
          Real-time workflow execution statistics over the last 24 hours
        </p>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="name" 
                stroke="#9CA3AF"
                fontSize={12}
              />
              <YAxis 
                stroke="#9CA3AF"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '8px',
                  color: 'white'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#00D9FF" 
                strokeWidth={2}
                dot={{ fill: '#00D9FF', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, fill: '#00D9FF' }}
              />
              <Line 
                type="monotone" 
                dataKey="completed" 
                stroke="#10B981" 
                strokeWidth={2}
                dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="failed" 
                stroke="#EF4444" 
                strokeWidth={2}
                dot={{ fill: '#EF4444', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
