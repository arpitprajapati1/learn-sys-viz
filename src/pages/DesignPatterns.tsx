import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Code2, Lightbulb, Box, Share2, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

const DesignPatterns = () => {
  const creationalPatterns = [
    { name: "Factory Method", description: "Creates objects without specifying exact classes", icon: "🏭" },
    { name: "Abstract Factory", description: "Produces families of related objects", icon: "🏗️" },
    { name: "Builder", description: "Constructs complex objects step by step", icon: "🔨" },
    { name: "Prototype", description: "Clones existing objects", icon: "🐑" },
    { name: "Singleton", description: "Ensures only one instance exists", icon: "👑" },
  ];

  const structuralPatterns = [
    { name: "Adapter", description: "Allows incompatible interfaces to work together", icon: "🔌" },
    { name: "Bridge", description: "Separates abstraction from implementation", icon: "🌉" },
    { name: "Composite", description: "Composes objects into tree structures", icon: "🌳" },
    { name: "Decorator", description: "Adds new functionality to objects", icon: "🎁" },
    { name: "Facade", description: "Provides simplified interface to complex system", icon: "🎭" },
    { name: "Proxy", description: "Controls access to another object", icon: "🚪" },
  ];

  const behavioralPatterns = [
    { name: "Chain of Responsibility", description: "Passes requests along chain of handlers", icon: "⛓️" },
    { name: "Command", description: "Encapsulates requests as objects", icon: "📝" },
    { name: "Iterator", description: "Traverses elements of collection", icon: "🔄" },
    { name: "Observer", description: "Notifies multiple objects about events", icon: "👀" },
    { name: "Strategy", description: "Defines family of algorithms", icon: "🎯" },
    { name: "Template Method", description: "Defines skeleton of algorithm", icon: "📋" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="mb-12 sm:mb-16">
          <Badge variant="secondary" className="mb-4">Software Design</Badge>
          <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Design Patterns</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Design patterns are typical solutions to commonly occurring problems in software design. 
            They are like pre-made blueprints that you can customize to solve a recurring design problem in your code.
          </p>
        </div>

        {/* What is a Pattern Section */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="h-6 sm:h-8 w-6 sm:w-8 text-primary" />
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">What is a Pattern?</h2>
          </div>
          
          <Card className="p-4 sm:p-8 mb-8 border-2 border-border bg-card">
            <p className="text-base sm:text-lg text-card-foreground mb-6 leading-relaxed">
              A pattern is not a specific piece of code, but a general concept for solving a particular problem. 
              You can follow the pattern details and implement a solution that suits the realities of your own program.
            </p>
            
            <div className="bg-muted/50 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-lg mb-4 text-foreground">Pattern consists of:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-foreground">Intent:</strong> Briefly describes problem and solution</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-foreground">Motivation:</strong> Explains the problem in more detail</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-foreground">Structure:</strong> Shows each part of the pattern and relationships</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-foreground">Code Example:</strong> Makes it easier to grasp the idea</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
              <p className="text-sm text-muted-foreground italic">
                💡 Think of patterns as customizable blueprints - you see what the result and its features are, 
                but the exact order of implementation is up to you.
              </p>
            </div>
          </Card>
        </section>

        {/* Catalog Section */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="h-6 sm:h-8 w-6 sm:w-8 text-primary" />
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Pattern Catalog</h2>
          </div>
          
          <p className="text-base sm:text-lg text-muted-foreground mb-8">
            Design patterns differ by their complexity, level of detail, and scale of applicability. 
            They can be categorized into three main groups:
          </p>

          {/* Creational Patterns */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Box className="h-6 sm:h-7 w-6 sm:w-7 text-primary" />
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Creational Patterns</h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mb-6">
              These patterns provide object creation mechanisms that increase flexibility and reuse of existing code.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {creationalPatterns.map((pattern) => (
                <Link key={pattern.name} to="/creational-patterns">
                  <Card className="p-6 border-2 border-border hover:shadow-[var(--shadow-card)] transition-all cursor-pointer">
                    <div className="flex items-start gap-4">
                      <span className="text-4xl">{pattern.icon}</span>
                      <div>
                        <h4 className="font-bold text-lg text-card-foreground mb-2">{pattern.name}</h4>
                        <p className="text-sm text-muted-foreground">{pattern.description}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
            <Link to="/creational-patterns" className="inline-block mt-4 text-primary hover:underline font-semibold">
              View all Creational Patterns →
            </Link>
          </div>

          {/* Structural Patterns */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Share2 className="h-6 sm:h-7 w-6 sm:w-7 text-primary" />
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Structural Patterns</h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mb-6">
              These patterns explain how to assemble objects and classes into larger structures while keeping them flexible and efficient.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {structuralPatterns.map((pattern) => (
                <Link key={pattern.name} to="/structural-patterns">
                  <Card className="p-6 border-2 border-border hover:shadow-[var(--shadow-card)] transition-all cursor-pointer">
                    <div className="flex items-start gap-4">
                      <span className="text-4xl">{pattern.icon}</span>
                      <div>
                        <h4 className="font-bold text-lg text-card-foreground mb-2">{pattern.name}</h4>
                        <p className="text-sm text-muted-foreground">{pattern.description}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
            <Link to="/structural-patterns" className="inline-block mt-4 text-primary hover:underline font-semibold">
              View all Structural Patterns →
            </Link>
          </div>

          {/* Behavioral Patterns */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Workflow className="h-6 sm:h-7 w-6 sm:w-7 text-primary" />
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Behavioral Patterns</h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mb-6">
              These patterns are concerned with algorithms and the assignment of responsibilities between objects.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {behavioralPatterns.map((pattern) => (
                <Card key={pattern.name} className="p-6 border-2 border-border hover:shadow-[var(--shadow-card)] transition-all">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{pattern.icon}</span>
                    <div>
                      <h4 className="font-bold text-lg text-card-foreground mb-2">{pattern.name}</h4>
                      <p className="text-sm text-muted-foreground">{pattern.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Code Examples Section */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="h-6 sm:h-8 w-6 sm:w-8 text-primary" />
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Code Examples</h2>
          </div>
          
          <Card className="p-4 sm:p-8 border-2 border-border bg-card">
            <p className="text-base sm:text-lg text-muted-foreground mb-6">
              Ready to dive deeper? Explore practical implementations of these patterns in real code.
            </p>
            
            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4 text-foreground">Available Examples:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Badge variant="outline">TypeScript</Badge>
                  <span className="text-muted-foreground">Modern JavaScript/TypeScript implementations</span>
                </li>
                <li className="flex items-center gap-3">
                  <Badge variant="outline">Python</Badge>
                  <span className="text-muted-foreground">Clean Python 3 examples</span>
                </li>
                <li className="flex items-center gap-3">
                  <Badge variant="outline">Java</Badge>
                  <span className="text-muted-foreground">Enterprise-ready Java code</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 p-6 bg-primary/5 rounded-lg border-l-4 border-primary">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Pro tip:</strong> Start with creational patterns like Singleton and Factory, 
                then move to structural patterns, and finally tackle behavioral patterns.
              </p>
            </div>
          </Card>
        </section>

        {/* Relationship Diagram */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Pattern Relationships</h2>
          <Card className="p-4 sm:p-8 border-2 border-border bg-card overflow-auto">
            <div className="bg-muted/30 rounded-lg p-6">
              <svg viewBox="0 0 800 400" className="w-full h-auto">
                {/* Creational Group */}
                <rect x="50" y="50" width="200" height="80" fill="hsl(var(--primary))" opacity="0.1" stroke="hsl(var(--primary))" strokeWidth="2" rx="8"/>
                <text x="150" y="95" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="18" fontWeight="bold">Creational Patterns</text>
                
                {/* Structural Group */}
                <rect x="300" y="50" width="200" height="80" fill="hsl(var(--primary))" opacity="0.1" stroke="hsl(var(--primary))" strokeWidth="2" rx="8"/>
                <text x="400" y="95" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="18" fontWeight="bold">Structural Patterns</text>
                
                {/* Behavioral Group */}
                <rect x="550" y="50" width="200" height="80" fill="hsl(var(--primary))" opacity="0.1" stroke="hsl(var(--primary))" strokeWidth="2" rx="8"/>
                <text x="650" y="95" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="18" fontWeight="bold">Behavioral Patterns</text>
                
                {/* Object Creation Flow */}
                <line x1="150" y1="130" x2="150" y2="200" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                <text x="150" y="165" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="12">Creates</text>
                
                {/* Structure Assembly Flow */}
                <line x1="400" y1="130" x2="400" y2="200" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                <text x="400" y="165" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="12">Assembles</text>
                
                {/* Behavior Definition Flow */}
                <line x1="650" y1="130" x2="650" y2="200" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                <text x="650" y="165" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="12">Defines</text>
                
                {/* Final Output */}
                <rect x="250" y="220" width="300" height="100" fill="hsl(var(--primary))" opacity="0.2" stroke="hsl(var(--primary))" strokeWidth="3" rx="12"/>
                <text x="400" y="260" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="20" fontWeight="bold">Clean, Scalable</text>
                <text x="400" y="290" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="20" fontWeight="bold">Software Architecture</text>
                
                {/* Arrow marker definition */}
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="hsl(var(--primary))" />
                  </marker>
                </defs>
              </svg>
            </div>
          </Card>
        </section>

        {/* Next Steps */}
        <section>
          <Card className="p-6 sm:p-8 bg-primary/5 border-2 border-primary">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6">
              Continue your journey by exploring interactive lessons and practical examples.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/learn" 
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all"
              >
                Start Learning
              </Link>
              <Link 
                to="/quiz" 
                className="px-6 py-3 bg-card border-2 border-border text-card-foreground rounded-lg font-semibold hover:shadow-[var(--shadow-card)] transition-all"
              >
                Test Your Knowledge
              </Link>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default DesignPatterns;
