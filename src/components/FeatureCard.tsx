import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

const FeatureCard = ({ icon: Icon, title, description, link }: FeatureCardProps) => {
  const content = (
    <Card className="p-6 hover:shadow-strong transition-all duration-300 hover:-translate-y-1 cursor-pointer group bg-card border-border">
      <div className="bg-primary-light rounded-lg w-14 h-14 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  );

  if (link) {
    return (
      <a href={link} className="block">
        {content}
      </a>
    );
  }

  return content;
};

export default FeatureCard;
