
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 border-t border-white/10">
      {/* Email Capture Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          What are you waiting for?
        </h2>
        <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
          Start simplifying your workflows today and sign up now!
        </p>
        
        <div className="glass-card max-w-4xl mx-auto p-8 rounded-xl">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Zap className="text-white w-6 h-6" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">Get early access</h3>
          <p className="text-slate-300 mb-8 max-w-lg mx-auto">
            Join thousands of users who are already automating their workflows. 
            Get started with our intelligent workflow orchestrator today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
            <Input 
              placeholder="Enter email here" 
              className="flex-1 glass-card border-white/20 text-white placeholder:text-slate-400"
            />
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6">
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          
          <p className="text-sm text-slate-400">
            Start automating your processes in minutes
          </p>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded flex items-center justify-center">
                  <Zap className="text-white w-4 h-4" />
                </div>
                <span className="text-lg font-bold gradient-text">WorkflowAI</span>
              </div>
              <p className="text-slate-400 text-sm">
                Intelligent workflow orchestrator that automates your business processes 
                with advanced AI capabilities and seamless integrations.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">COMPANY</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">What is WorkflowAI</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Download</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">What they said</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">SOCIAL MEDIA</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Twitter</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">WORKFLOW STUFF</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Style Guide</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Licensing</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Instructions</a></li>
                <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Change Log</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-400">
            <div>
              CREATED BY <a href="#" className="text-white hover:text-cyan-400 underline transition-colors">OVERSIGHT</a>
            </div>
            <div>
              POWERED BY <a href="#" className="text-white hover:text-cyan-400 underline transition-colors">WEBFLOW</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
