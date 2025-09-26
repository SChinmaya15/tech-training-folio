import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectCard } from "@/components/ProjectCard";
import { Users, Target, Award, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

const stats = [
  { icon: Users, label: "Students Trained", value: "44" },
  { icon: Target, label: "Projects Completed", value: "4" },
  { icon: Award, label: "Success Rate", value: "95%" },
  { icon: TrendingUp, label: "Client Onboarding", value: "85%" },
];

const projects = [
  {
    title: "RAG Chatbot",
    description: "Intelligent conversational AI using Retrieval-Augmented Generation for accurate, context-aware responses.",
    technologies: ["Python", "LangChain", "Groq", "Vector DB", "Streamlit"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Crew Rostering System",
    description: "Automated scheduling solution for efficient crew management using optimization algorithms.",
    technologies: ["Python", "Genetic Algorithms", "FastAPI", "React"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Northwind Sales Analysis",
    description: "Interactive sales analysis chatbot providing insights, visualizations, and future predictions from your database.",
    technologies: ["Agentic AI", "Sqlite", "Python", "Pandas","React"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Email Automation",
    description: "AI-powered system for automatic customer support responses and workflow automation.",
    technologies: ["Python", "Agentic AI", "Sqlite"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-80 overflow-hidden rounded-xl mb-8">
        <img 
          src={heroImage} 
          alt="AI Training Program" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-glow/60 flex items-center justify-center">
          <div className="text-center text-primary-foreground">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              AI Training Program
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              Empowering the next generation of AI professionals through hands-on project experience
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {stats.map((stat) => (
          <Card key={stat.label} className="text-center bg-gradient-card hover:shadow-card transition-all duration-200">
            <CardContent className="pt-6">
              <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* About Section */}
      <Card className="mb-12 bg-gradient-card">
        <CardHeader>
          <CardTitle className="text-2xl text-foreground">About Our Program</CardTitle>
          <CardDescription className="text-lg">
            Our comprehensive AI training program combines theoretical knowledge with practical application.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            Through intensive hands-on projects, our students develop real-world AI solutions that address 
            actual business challenges. From natural language processing and chatbot development to data 
            analysis and automation systems, our curriculum ensures graduates are job-ready with a portfolio 
            of impressive projects that demonstrate their expertise in artificial intelligence and machine learning.
          </p>
        </CardContent>
      </Card>

      {/* Projects Overview */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}