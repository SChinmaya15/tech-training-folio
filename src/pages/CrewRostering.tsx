import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Users, Calendar, Clock, Target } from "lucide-react";

const features = [
  { icon: Users, title: "Smart Scheduling", description: "AI-optimized crew assignments based on skills and availability" },
  { icon: Calendar, title: "Shift Management", description: "Automated shift planning with conflict resolution" },
  { icon: Clock, title: "Real-time Updates", description: "Dynamic scheduling adjustments for last-minute changes" },
  { icon: Target, title: "Optimization", description: "Minimize costs while ensuring adequate coverage" },
];

const technologies = [
  "Python", "OR-Tools", "FastAPI", "React", "PostgreSQL", 
  "Docker", "Redis", "Celery", "JWT Auth", "Material-UI"
];

export default function CrewRostering() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary rounded-xl p-8 mb-8 text-primary-foreground">
        <div className="flex items-center mb-4">
          <Users className="h-12 w-12 mr-4" />
          <div>
            <h1 className="text-4xl font-bold">Crew Rostering System</h1>
            <p className="text-xl opacity-90">Intelligent Workforce Scheduling & Management</p>
          </div>
        </div>
      </div>

      {/* Use Case */}
      <Card className="mb-8 bg-gradient-card">
        <CardHeader>
          <CardTitle className="text-2xl text-foreground">Use Case & Problem Statement</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Manual crew scheduling is time-consuming, error-prone, and often leads to suboptimal resource allocation. 
            Our intelligent rostering system automates the complex task of crew scheduling by considering multiple 
            constraints including employee availability, skills, labor regulations, and operational requirements. 
            The system is ideal for airlines, hospitals, manufacturing, and any industry requiring complex shift planning.
          </p>
        </CardContent>
      </Card>

      {/* Features */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-gradient-card hover:shadow-card transition-all duration-200">
              <CardHeader className="text-center">
                <feature.icon className="h-10 w-10 mx-auto text-primary mb-2" />
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <Card className="mb-8 bg-gradient-card">
        <CardHeader>
          <CardTitle className="text-2xl text-foreground">Technologies Used</CardTitle>
          <CardDescription>Modern full-stack technologies and optimization libraries</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Technical Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card className="bg-gradient-card">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">Optimization Engine</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-muted-foreground">
              Powered by Google OR-Tools for constraint programming and linear optimization.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
              <li>Multi-objective optimization (cost vs. satisfaction)</li>
              <li>Hard and soft constraint handling</li>
              <li>Real-time schedule adjustments</li>
              <li>Fairness algorithms for equitable shift distribution</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">System Architecture</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-muted-foreground">
              Scalable microservices architecture with real-time capabilities.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
              <li>FastAPI backend with async processing</li>
              <li>React frontend with real-time updates</li>
              <li>PostgreSQL for data persistence</li>
              <li>Redis for caching and session management</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Key Metrics */}
      <Card className="mb-8 bg-gradient-card">
        <CardHeader>
          <CardTitle className="text-2xl text-foreground">Key Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">75%</div>
              <div className="text-muted-foreground">Time Reduction in Scheduling</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">95%</div>
              <div className="text-muted-foreground">Employee Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">30%</div>
              <div className="text-muted-foreground">Cost Savings Achieved</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Button 
          size="lg"
          className="bg-gradient-primary hover:shadow-glow transition-all duration-200"
        >
          <ExternalLink className="mr-2 h-5 w-5" />
          View Live Demo
        </Button>
        <Button variant="outline" size="lg">
          <Github className="mr-2 h-5 w-5" />
          View Source Code
        </Button>
      </div>
    </div>
  );
}