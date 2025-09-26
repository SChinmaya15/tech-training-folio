import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, MessageSquare, BarChart3, TrendingUp } from "lucide-react";

const features = [
  { icon: MessageSquare, title: "Natural Language Queries", description: "Ask questions in plain English and get instant insights" },
  { icon: BarChart3, title: "Dynamic Chart Generation", description: "Automatically creates relevant visualizations for your queries" },
  { icon: TrendingUp, title: "Predictive Analytics", description: "AI-powered forecasting and trend prediction capabilities" },
];

const technologies = [
  "Python", "OpenAI GPT-4", "LangChain", "Groq", "Sqlite", 
  "Pandas", "React"
];

export default function NorthwindAnalysis() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary rounded-xl p-8 mb-8 text-primary-foreground">
        <div className="flex items-center mb-4">
          <MessageSquare className="h-12 w-12 mr-4" />
          <div>
            <h1 className="text-4xl font-bold">Northwind Sales Analysis</h1>
            <p className="text-xl opacity-90">AI-Powered Database Query Chatbot with Predictive Analytics</p>
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
            Business analysts struggle with complex SQL queries and data interpretation when trying to extract 
            insights from sales databases. Our Northwind Sales Analysis Chatbot allows users to ask natural 
            language questions about their sales data and automatically generates relevant charts, tables, and 
            predictive analytics. The system democratizes data access by enabling non-technical users to query 
            databases conversationally while providing AI-powered forecasting for future business trends.
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
          <CardDescription>AI-powered conversational data analysis technologies</CardDescription>
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
            <h4 className="font-semibold text-lg text-foreground mb-2">Conversational AI Architecture</h4>
            <p className="text-muted-foreground">
              The system uses advanced natural language processing to convert user questions into SQL queries, 
              executes them against the Northwind database, and automatically generates appropriate visualizations 
              based on the data type and user intent.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-foreground mb-2">Key Components</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Natural language to SQL conversion using GPT-4</li>
              <li>Dynamic chart generation with Plotly based on query results</li>
              <li>Time series forecasting with machine learning models</li>
              <li>Interactive React interface for seamless user experience</li>
              <li>Context-aware follow-up question suggestions</li>
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
          View Dashboard
        </Button>
        <Button variant="outline" size="lg">
          <Github className="mr-2 h-5 w-5" />
          View Analysis Code
        </Button>
      </div>
    </div>
  );
}