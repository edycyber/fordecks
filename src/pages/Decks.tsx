import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, LogOut, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface PitchDeck {
  id: string;
  company: string;
  year: string;
  stage: string;
  amount: string;
  description: string;
  link: string;
}

const Decks = () => {
  const navigate = useNavigate();
  const [pitchDecks, setPitchDecks] = useState<PitchDeck[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasAccess = localStorage.getItem("access_granted");
    if (!hasAccess) {
      toast({
        title: "Access Denied",
        description: "Please enter a valid access code first.",
        variant: "destructive",
      });
      navigate("/");
      return;
    }

    fetchPitchDecks();
  }, [navigate]);

  const fetchPitchDecks = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('pitch_decks')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Error fetching pitch decks:', error);
        toast({
          title: "Error Loading Decks",
          description: "Could not load pitch decks. Please check your Supabase connection.",
          variant: "destructive",
        });
        return;
      }

      setPitchDecks(data || []);
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Connection Error",
        description: "Please ensure Supabase is configured correctly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("access_granted");
    toast({
      title: "Logged Out",
      description: "Your access has been removed.",
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container max-w-7xl mx-auto p-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground">
            Silicon Valley Pitch Decks
          </h1>
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </header>

      <main className="container max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <p className="text-muted-foreground">
            Exclusive collection of pitch decks from companies that raised millions
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : pitchDecks.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No pitch decks available yet.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pitchDecks.map((deck, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl">{deck.company}</CardTitle>
                  <span className="text-sm text-muted-foreground">{deck.year}</span>
                </div>
                <CardDescription className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded text-xs font-semibold">
                      {deck.stage}
                    </span>
                    <span className="text-primary font-bold">{deck.amount}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col justify-between">
                <p className="text-sm text-muted-foreground mb-4">
                  {deck.description}
                </p>
                
                <Button 
                  className="w-full" 
                  asChild
                >
                  <a 
                    href={deck.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Deck
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Decks;
