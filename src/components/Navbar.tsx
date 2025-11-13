import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-hero p-2 rounded-lg">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              Excellence University
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link to="/#admissions" className="text-foreground hover:text-primary transition-colors font-medium">
              Admissions
            </Link>
            <Link to="/#academics" className="text-foreground hover:text-primary transition-colors font-medium">
              Academics
            </Link>
            <Link to="/#campus" className="text-foreground hover:text-primary transition-colors font-medium">
              Campus Life
            </Link>
            <Link to="/erp-login">
              <Button variant="hero" size="sm">
                ERP Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-muted"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </Link>
              <Link to="/#about" className="text-foreground hover:text-primary transition-colors font-medium">
                About
              </Link>
              <Link to="/#admissions" className="text-foreground hover:text-primary transition-colors font-medium">
                Admissions
              </Link>
              <Link to="/#academics" className="text-foreground hover:text-primary transition-colors font-medium">
                Academics
              </Link>
              <Link to="/#campus" className="text-foreground hover:text-primary transition-colors font-medium">
                Campus Life
              </Link>
              <Link to="/erp-login">
                <Button variant="hero" size="sm" className="w-full">
                  ERP Login
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
