import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { GraduationCap, ArrowLeft, Lock, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ERPLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      if (email && password) {
        toast({
          title: "Login Successful",
          description: "Welcome back to the Student Portal!",
        });
        navigate("/student-portal");
      } else {
        toast({
          title: "Login Failed",
          description: "Please enter valid credentials",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-scale-in">
        <Link
          to="/"
          className="flex items-center gap-2 text-primary-foreground mb-6 hover:opacity-80 transition-opacity"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Home</span>
        </Link>

        <Card className="p-8 shadow-strong">
          <div className="text-center mb-8">
            <div className="bg-gradient-hero p-3 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Student Portal</h1>
            <p className="text-muted-foreground">
              Sign in to access your academic dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Student Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="student@excellence.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-border" />
                <span className="text-muted-foreground">Remember me</span>
              </label>
              <a href="#" className="text-primary hover:underline">
                Forgot Password?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={isLoading}
              variant="hero"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p>
              Need help?{" "}
              <a href="#" className="text-primary hover:underline">
                Contact IT Support
              </a>
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <div className="text-center text-sm text-muted-foreground space-y-2">
              <p className="font-medium">Quick Access</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#" className="text-primary hover:underline">
                  Library
                </a>
                <a href="#" className="text-primary hover:underline">
                  Email
                </a>
                <a href="#" className="text-primary hover:underline">
                  Canvas
                </a>
                <a href="#" className="text-primary hover:underline">
                  Support
                </a>
              </div>
            </div>
          </div>
        </Card>

        <p className="text-center text-sm text-primary-foreground/70 mt-6">
          Secure login powered by Excellence University IT Services
        </p>
      </div>
    </div>
  );
};

export default ERPLogin;
