
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Wand2, Play, Save } from "lucide-react";
import { toast } from "sonner";

export const WorkflowCreator = () => {
  const [workflowName, setWorkflowName] = useState("");
  const [naturalLanguageInput, setNaturalLanguageInput] = useState("");
  const [generatedSteps, setGeneratedSteps] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateWorkflow = async () => {
    if (!naturalLanguageInput.trim()) {
      toast.error("Please enter a workflow description");
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI processing
    setTimeout(() => {
      const steps = [
        "Initialize data connection",
        "Validate input parameters",
        "Process data transformation",
        "Execute business logic",
        "Generate output report",
        "Send notification to stakeholders",
        "Clean up temporary files"
      ];
      
      setGeneratedSteps(steps);
      setIsGenerating(false);
      toast.success("Workflow generated successfully!");
    }, 2000);
  };

  const handleSaveWorkflow = () => {
    if (!workflowName.trim()) {
      toast.error("Please enter a workflow name");
      return;
    }
    
    toast.success("Workflow saved successfully!");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Create Workflow</h1>
        <p className="text-muted-foreground">
          Describe your workflow in natural language and let AI do the rest
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Wand2 className="w-5 h-5 text-cyan-400" />
              Natural Language Input
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="workflow-name" className="text-white">
                Workflow Name
              </Label>
              <Input
                id="workflow-name"
                placeholder="Enter workflow name..."
                value={workflowName}
                onChange={(e) => setWorkflowName(e.target.value)}
                className="glass-card border-white/20 text-white mt-2"
              />
            </div>
            
            <div>
              <Label htmlFor="description" className="text-white">
                Describe your workflow
              </Label>
              <Textarea
                id="description"
                placeholder="Example: Every morning at 9 AM, download sales data from our CRM, process it to calculate daily metrics, generate a report, and email it to the sales team..."
                value={naturalLanguageInput}
                onChange={(e) => setNaturalLanguageInput(e.target.value)}
                className="glass-card border-white/20 text-white mt-2 min-h-[200px]"
              />
            </div>

            <Button
              onClick={handleGenerateWorkflow}
              disabled={isGenerating}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
            >
              {isGenerating ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Generating...
                </>
              ) : (
                <>
                  <Wand2 className="w-4 h-4 mr-2" />
                  Generate Workflow
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-white">Generated Workflow Steps</CardTitle>
          </CardHeader>
          <CardContent>
            {generatedSteps.length > 0 ? (
              <div className="space-y-4">
                <div className="space-y-3">
                  {generatedSteps.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-white/5 border border-white/10"
                    >
                      <Badge
                        variant="secondary"
                        className="bg-cyan-500/20 text-cyan-400 min-w-[32px] justify-center"
                      >
                        {index + 1}
                      </Badge>
                      <span className="text-white text-sm">{step}</span>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button
                    onClick={handleSaveWorkflow}
                    className="flex-1 bg-green-600 hover:bg-green-700"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save Workflow
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Test Run
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                <Wand2 className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Generate a workflow to see the steps here</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
