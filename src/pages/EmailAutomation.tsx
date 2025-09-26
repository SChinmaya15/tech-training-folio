import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Mail, Bot, MessageCircle, Sparkles } from "lucide-react";

const features = [
  { icon: Bot, title: "Agentic AI Responses", description: "Intelligent AI agents handle complex customer inquiries automatically" },
  { icon: MessageCircle, title: "Context Understanding", description: "Advanced NLP to understand customer intent and emotional context" },
  { icon: Sparkles, title: "Smart Routing", description: "Automatic ticket classification and routing to appropriate agents" },
];

const technologies = [
  "Python", "OpenAI GPT-4", "LangChain", "FastAPI",
  "Sqlite", "Groq", "React", "TypeScript"
];

export default function EmailAutomation() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary rounded-xl p-8 mb-8 text-primary-foreground">
        <div className="flex items-center mb-4">
          <Mail className="h-12 w-12 mr-4" />
          <div>
            <h1 className="text-4xl font-bold">Email Automation</h1>
            <p className="text-xl opacity-90">Customer Support Email Automation using Agentic AI</p>
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
            Customer support teams are overwhelmed with high email volumes, leading to delayed responses and 
            inconsistent service quality. Our Agentic AI Email Automation system uses intelligent AI agents 
            to automatically handle customer inquiries, providing instant, accurate responses while seamlessly 
            escalating complex issues to human agents. This solution reduces response times from hours to seconds 
            while maintaining personalized, contextual customer interactions.
          </p>
        </CardContent>
      </Card>

      {/* Features */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-gradient-card hover:shadow-card transition-all duration-200">
              <CardHeader className="text-center">
                <feature.icon className="h-12 w-12 mx-auto text-primary mb-2" />
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <Card className="mb-8 bg-gradient-card">
        <CardHeader>
          <CardTitle className="text-2xl text-foreground">Technologies Used</CardTitle>
          <CardDescription>Advanced AI and automation technologies for customer support</CardDescription>
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
      <Card className="mb-8 bg-gradient-card">
        <CardHeader>
          <CardTitle className="text-2xl text-foreground">Technical Implementation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-lg text-foreground mb-2">Agentic AI Architecture</h4>
            <p className="text-muted-foreground">
              The system implements multiple specialized AI agents that work collaboratively to handle customer 
              inquiries. Each agent has specific expertise areas and can reason about when to escalate issues 
              to human agents or other specialized systems.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-foreground mb-2">Key Components</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Intent classification and sentiment analysis pipeline</li>
              <li>Multi-agent orchestration with LangChain framework</li>
              <li>Knowledge base integration for accurate responses</li>
              <li>Real-time escalation triggers and human handoff</li>
              <li>Automated response generation with brand voice consistency</li>
            </ul>
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