import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, BarChart3, TrendingUp, PieChart, LineChart } from "lucide-react";

const features = [
  { icon: BarChart3, title: "Sales Analytics", description: "Comprehensive sales performance analysis and trends" },
  { icon: TrendingUp, title: "Revenue Insights", description: "Revenue forecasting and growth pattern analysis" },
  { icon: PieChart, title: "Customer Segmentation", description: "Advanced customer behavior and segmentation analysis" },
  { icon: LineChart, title: "Interactive Dashboards", description: "Dynamic visualizations with drill-down capabilities" },
];

const technologies = [
  "Power BI", "SQL Server", "DAX", "Python", "Pandas", 
  "NumPy", "Matplotlib", "Seaborn", "Jupyter", "Excel"
];

const insights = [
  { metric: "Revenue Growth", value: "+23%", description: "Year-over-year increase" },
  { metric: "Customer Retention", value: "87%", description: "Active customer base" },
  { metric: "Top Product Category", value: "Beverages", description: "Highest revenue generator" },
  { metric: "Market Expansion", value: "5 Countries", description: "New markets identified" },
];

export default function NorthwindAnalysis() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary rounded-xl p-8 mb-8 text-primary-foreground">
        <div className="flex items-center mb-4">
          <BarChart3 className="h-12 w-12 mr-4" />
          <div>
            <h1 className="text-4xl font-bold">Northwind Sales Analysis</h1>
            <p className="text-xl opacity-90">Comprehensive Business Intelligence Dashboard</p>
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
            Business decision-makers need actionable insights from complex sales data to drive strategic decisions. 
            Our Northwind Sales Analysis project transforms raw transactional data into compelling visualizations 
            and actionable business intelligence. The analysis covers sales trends, customer behavior, product 
            performance, and geographical patterns to help businesses optimize their operations and growth strategies.
          </p>
        </CardContent>
      </Card>

      {/* Key Insights */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-6">Key Business Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((insight) => (
            <Card key={insight.metric} className="bg-gradient-card hover:shadow-card transition-all duration-200 text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">{insight.value}</div>
                <div className="font-semibold text-foreground">{insight.metric}</div>
                <div className="text-sm text-muted-foreground">{insight.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-6">Analysis Features</h2>
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
          <CardDescription>Business intelligence and data analysis tools</CardDescription>
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

      {/* Analysis Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card className="bg-gradient-card">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">Data Analysis Process</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-muted-foreground">
              Comprehensive ETL pipeline and statistical analysis workflow.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
              <li>Data cleaning and preprocessing with Python/Pandas</li>
              <li>Exploratory data analysis (EDA) and statistical testing</li>
              <li>Time series analysis for trend identification</li>
              <li>Customer cohort analysis and RFM segmentation</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">Visualization & Reporting</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-muted-foreground">
              Interactive dashboards and automated reporting systems.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
              <li>Power BI dashboards with real-time data connections</li>
              <li>Custom DAX measures and calculated columns</li>
              <li>Automated report generation and distribution</li>
              <li>Mobile-responsive dashboard design</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Business Impact */}
      <Card className="mb-8 bg-gradient-card">
        <CardHeader>
          <CardTitle className="text-2xl text-foreground">Business Impact</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg text-foreground mb-2">Strategic Recommendations</h4>
              <p className="text-muted-foreground">
                Identified top-performing products and underperforming regions, leading to targeted marketing 
                strategies and inventory optimization. Recommended expansion into high-potential markets based 
                on customer behavior analysis.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-foreground mb-2">Operational Improvements</h4>
              <p className="text-muted-foreground">
                Streamlined reporting processes reduced manual analysis time by 80%. Automated alerts for 
                unusual sales patterns enabled proactive business responses and improved decision-making speed.
              </p>
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