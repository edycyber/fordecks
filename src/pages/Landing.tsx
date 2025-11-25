import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import logo from "@/assets/logo.png";

const ACCESS_CODE = "apqm153275";

const Landing = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (code.trim().toLowerCase() === ACCESS_CODE.toLowerCase()) {
      localStorage.setItem("access_granted", "true");
      toast({
        title: "Access Granted",
        description: "Welcome to the pitch deck collection!",
      });
      navigate("/decks");
    } else {
      toast({
        title: "Invalid Code",
        description: "Please enter a valid access code.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="flex justify-center mb-8">
          <img 
            src={logo} 
            alt="Open Stanford Logo" 
            className="h-32 w-32 object-contain"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            30 Pitch Decks That Raised Millions in Silicon Valley
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Pitch Decks include companies like Facebook, SpaceX, YouTube, and LinkedIn
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-8 space-y-6 mt-12">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="code" className="text-sm font-medium text-foreground">
                Enter Access Code
              </label>
              <Input
                id="code"
                type="text"
                placeholder="Enter your code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="h-12 text-center text-lg tracking-widest"
              />
            </div>
            
            <Button 
              type="submit" 
              size="lg" 
              className="w-full h-12 text-lg"
            >
              Access Decks
            </Button>
          </form>

          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground mb-3">
              Don't have an access code?
            </p>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate("/pricing")}
              className="w-full"
            >
              Get Your Access Code
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
