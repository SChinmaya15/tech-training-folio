import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  className?: string;
}

export function ProjectCard({ 
  title, 
  description, 
  technologies, 
  demoUrl, 
  githubUrl,
  className 
}: ProjectCardProps) {
  return (
    <Card className={cn(
      "group transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 bg-gradient-card",
      className
    )}>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-2 pt-2">
          {demoUrl && (
            <Button 
              variant="default" 
              size="sm" 
              asChild
              className="bg-gradient-primary hover:shadow-glow transition-all duration-200"
            >
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Demo
              </a>
            </Button>
          )}
          
          {githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}