import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import FeatureCard from "@/components/FeatureCard";
import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
  Calendar,
  FileText,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";

const Index = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Admissions",
      description: "Explore our admission process, requirements, and application deadlines. Join our community of scholars and innovators.",
      link: "#admissions",
    },
    {
      icon: BookOpen,
      title: "Academic Notes",
      description: "Access comprehensive study materials, lecture notes, and resources for all programs and courses.",
      link: "/student-portal",
    },
    {
      icon: Calendar,
      title: "Academic Calendar",
      description: "Stay updated with semester schedules, exam dates, holidays, and important academic events.",
      link: "#calendar",
    },
    {
      icon: Users,
      title: "Campus Life",
      description: "Experience vibrant student life with clubs, events, sports, and diverse cultural activities.",
      link: "#campus",
    },
    {
      icon: Award,
      title: "Rankings & Awards",
      description: "Nationally recognized for academic excellence, research innovation, and student success.",
      link: "#rankings",
    },
    {
      icon: FileText,
      title: "Student Resources",
      description: "Career services, counseling, library access, and comprehensive support systems.",
      link: "/student-portal",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroCampus})` }}
        >
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>

        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Shape Your Future
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Excellence in Education, Research, and Innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/erp-login">
              <Button variant="hero" size="lg" className="text-lg">
                Student Portal
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg bg-background/90 hover:bg-background">
              Apply Now
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-primary-foreground rounded-full" />
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-scale-in">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">15,000+</div>
              <div className="text-primary-foreground/80 text-sm md:text-base">Students Enrolled</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">500+</div>
              <div className="text-primary-foreground/80 text-sm md:text-base">Expert Faculty</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">50+</div>
              <div className="text-primary-foreground/80 text-sm md:text-base">Programs Offered</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">95%</div>
              <div className="text-primary-foreground/80 text-sm md:text-base">Placement Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30" id="features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Explore Excellence University
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover world-class education, cutting-edge research, and a vibrant campus community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-in">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20" id="about">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                About Excellence University
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Founded in 1950, Excellence University has been a beacon of academic excellence, 
                research innovation, and student success for over seven decades.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Our commitment to providing world-class education, fostering critical thinking, 
                and preparing students for global leadership has earned us recognition as one of 
                the premier institutions in the region.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With state-of-the-art facilities, renowned faculty, and a diverse student body, 
                we create an environment where innovation thrives and dreams become reality.
              </p>
              <Button variant="default" size="lg">
                Learn More About Us
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-light p-6 rounded-lg">
                <Award className="h-10 w-10 text-primary mb-3" />
                <h3 className="font-semibold text-lg mb-2">Top Rankings</h3>
                <p className="text-sm text-muted-foreground">
                  Ranked among top 50 universities nationally
                </p>
              </div>
              <div className="bg-secondary/20 p-6 rounded-lg">
                <Users className="h-10 w-10 text-secondary mb-3" />
                <h3 className="font-semibold text-lg mb-2">Diverse Community</h3>
                <p className="text-sm text-muted-foreground">
                  Students from over 60 countries
                </p>
              </div>
              <div className="bg-secondary/20 p-6 rounded-lg">
                <BookOpen className="h-10 w-10 text-secondary mb-3" />
                <h3 className="font-semibold text-lg mb-2">Research Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  $100M+ in annual research funding
                </p>
              </div>
              <div className="bg-primary-light p-6 rounded-lg">
                <GraduationCap className="h-10 w-10 text-primary mb-3" />
                <h3 className="font-semibold text-lg mb-2">Career Success</h3>
                <p className="text-sm text-muted-foreground">
                  95% job placement within 6 months
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-hero py-20" id="admissions">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are shaping the future. Apply today and 
            become part of our excellence tradition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg">
              Apply for Admission
            </Button>
            <Button variant="outline" size="lg" className="text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Schedule Campus Visit
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-6 w-6" />
                <span className="font-bold text-lg">Excellence University</span>
              </div>
              <p className="text-sm text-background/70">
                Empowering minds, shaping futures since 1950
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="text-background/70 hover:text-background">About Us</a></li>
                <li><a href="#admissions" className="text-background/70 hover:text-background">Admissions</a></li>
                <li><a href="#academics" className="text-background/70 hover:text-background">Academics</a></li>
                <li><Link to="/erp-login" className="text-background/70 hover:text-background">Student Portal</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-background/70 hover:text-background">Library</a></li>
                <li><a href="#" className="text-background/70 hover:text-background">Research</a></li>
                <li><a href="#" className="text-background/70 hover:text-background">Career Services</a></li>
                <li><a href="#" className="text-background/70 hover:text-background">Alumni</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-background/70">123 University Ave, Campus City</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span className="text-background/70">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span className="text-background/70">info@excellence.edu</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
            <p>&copy; 2025 Excellence University. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
