import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, MessageSquare, Brain, Database } from "lucide-react";

const features = [
  { icon: MessageSquare, title: "Natural Conversations", description: "Human-like dialogue with context awareness" },
  { icon: Brain, title: "AI-Powered Responses", description: "Leveraging OpenAI's GPT models for intelligent answers" },
  { icon: Database, title: "Knowledge Base", description: "Vector database for accurate information retrieval" },
];

const technologies = [
  "Python", "LangChain", "OpenAI GPT-4", "Pinecone", "Streamlit", 
  "FAISS", "Hugging Face", "ChromaDB", "FastAPI"
];

export default function RAGChatbot() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary rounded-xl p-8 mb-8 text-primary-foreground">
        <div className="flex items-center mb-4">
          <MessageSquare className="h-12 w-12 mr-4" />
          <div>
            <h1 className="text-4xl font-bold">RAG Chatbot</h1>
            <p className="text-xl opacity-90">Retrieval-Augmented Generation Conversational AI</p>
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
            Traditional chatbots often provide generic responses and struggle with domain-specific knowledge. 
            Our RAG Chatbot combines the power of large language models with a custom knowledge base to provide 
            accurate, contextual responses. This solution is perfect for customer support, internal documentation 
            queries, and educational assistance where precise information retrieval is crucial.
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
          <CardDescription>Modern AI and ML technologies powering the chatbot</CardDescription>
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
            <h4 className="font-semibold text-lg text-foreground mb-2">Architecture Overview</h4>
            <p className="text-muted-foreground">
              The system implements a retrieval-augmented generation pipeline that combines semantic search 
              with generative AI. Documents are embedded using sentence transformers and stored in a vector 
              database for efficient similarity search.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-foreground mb-2">Key Components</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Document preprocessing and chunking pipeline</li>
              <li>Embedding generation using Hugging Face models</li>
              <li>Vector similarity search with Pinecone/FAISS</li>
              <li>LangChain orchestration for RAG workflow</li>
              <li>Streamlit interface for user interaction</li>
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