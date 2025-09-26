import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Mail, Zap, Target, BarChart } from "lucide-react";

const features = [
  { icon: Mail, title: "Smart Campaigns", description: "AI-powered email content generation and optimization" },
  { icon: Zap, title: "Automation Workflows", description: "Trigger-based email sequences and drip campaigns" },
  { icon: Target, title: "Personalization", description: "Dynamic content based on user behavior and preferences" },
  { icon: BarChart, title: "Analytics Dashboard", description: "Comprehensive metrics and performance tracking" },
];

const technologies = [
  "Python", "Flask", "Celery", "Redis", "PostgreSQL", 
  "Pandas", "Scikit-learn", "SMTP", "HTML/CSS", "Chart.js"
];

const metrics = [
  { metric: "Open Rate", value: "45.2%", change: "+18%" },
  { metric: "Click Rate", value: "12.8%", change: "+25%" },
  { metric: "Conversion Rate", value: "8.1%", change: "+35%" },
  { metric: "Unsubscribe Rate", value: "0.8%", change: "-60%" },
];

export default function EmailAutomation() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary rounded-xl p-8 mb-8 text-primary-foreground">
        <div className="flex items-center mb-4">
          <Mail className="h-12 w-12 mr-4" />
          <div>
            <h1 className="text-4xl font-bold">Email Automation System</h1>
            <p className="text-xl opacity-90">AI-Powered Marketing Automation Platform</p>
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
            Manual email marketing is time-intensive and often yields poor engagement rates due to generic content. 
            Our Email Automation System leverages machine learning to create personalized, timely email campaigns 
            that adapt to user behavior. The platform automates the entire email lifecycle from content creation 
            to performance analysis, significantly improving engagement rates while reducing manual effort.
          </p>
        </CardContent>
      </Card>

      {/* Performance Metrics */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-6">Performance Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <Card key={metric.metric} className="bg-gradient-card hover:shadow-card transition-all duration-200">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="font-semibold text-foreground">{metric.metric}</div>
                <div className="text-sm font-medium text-green-600">{metric.change} improvement</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

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
          <CardDescription>Full-stack automation and machine learning technologies</CardDescription>
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

      {/* Technical Implementation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card className="bg-gradient-card">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">Machine Learning Engine</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-muted-foreground">
              Advanced ML algorithms for personalization and optimization.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
              <li>Customer segmentation using clustering algorithms</li>
              <li>Send-time optimization based on user behavior</li>
              <li>Content recommendation using collaborative filtering</li>
              <li>A/B testing framework for continuous improvement</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">Automation Workflow</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-muted-foreground">
              Sophisticated trigger-based automation and campaign management.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
              <li>Event-driven triggers and conditional logic</li>
              <li>Drip campaigns with dynamic content insertion</li>
              <li>Real-time email delivery optimization</li>
              <li>Automated list management and segmentation</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Automation Features */}
      <Card className="mb-8 bg-gradient-card">
        <CardHeader>
          <CardTitle className="text-2xl text-foreground">Automation Capabilities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg text-foreground mb-3">Smart Triggers</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-2"></span>Welcome series for new subscribers</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-2"></span>Abandoned cart recovery campaigns</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-2"></span>Birthday and anniversary emails</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-2"></span>Re-engagement campaigns for inactive users</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-foreground mb-3">Personalization Features</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-2"></span>Dynamic product recommendations</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-2"></span>Behavioral-based content adaptation</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-2"></span>Geographic and demographic targeting</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-2"></span>Purchase history-based messaging</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results & ROI */}
      <Card className="mb-8 bg-gradient-card">
        <CardHeader>
          <CardTitle className="text-2xl text-foreground">Business Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">300%</div>
                <div className="text-muted-foreground">ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">75%</div>
                <div className="text-muted-foreground">Time Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50%</div>
                <div className="text-muted-foreground">Higher Engagement</div>
              </div>
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