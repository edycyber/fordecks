import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto p-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Get Exclusive Access
          </h1>
          
          <div className="bg-card border-2 border-primary rounded-xl p-8 space-y-4 max-w-2xl mx-auto">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              LIMITED TIME OFFER
            </div>
            
            <p className="text-2xl font-semibold text-foreground">
              Get this product by November 30th for
            </p>
            
            <div className="text-6xl font-bold text-primary">
              $9.99
            </div>
            
            <p className="text-muted-foreground">
              Unlock access to 30 pitch decks that raised millions from top Silicon Valley companies
            </p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="p-4 bg-secondary border-b border-border">
            <h2 className="text-lg font-semibold text-foreground">
              Complete Your Purchase
            </h2>
          </div>
          
          <div className="aspect-[16/10] w-full">
            <iframe
              src="https://gumroad.com/"
              className="w-full h-full"
              title="Gumroad Purchase"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
