import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Sparkles, BookOpen, MessageSquare, Trophy, ArrowRight, Database, Zap, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-4 sm:px-8 py-12 sm:py-16 max-w-5xl mx-auto">
        <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
          Hello, world!
        </h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-foreground leading-relaxed mb-4">
            <strong>System Design Guru</strong> makes it easy for you to discover everything you need to know about 
            scalable architectures, distributed systems, database design, and other essential engineering topics.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            This site shows you the big picture, how all these concepts intersect, work together, and apply to real-world 
            systems. We combine visual learning with interactive examples to make complex topics simple and accessible. 
            Our goal is to bridge the gap between theory and practice for engineers at all levels.
          </p>
          <p className="text-sm text-muted-foreground italic mb-8">
            <strong>P.S.</strong> Track progress via email updates and join our growing community of learners.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-12">
          <Card className="border-2 border-border bg-card p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-primary" />
              Subscribe for updates
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Enter your email to track the project progress. You can expect no more than one email per month. No spam, promise.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="flex-1 px-3 sm:px-4 py-2 border border-input rounded-md bg-background text-sm"
                aria-label="Email address"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm px-3 sm:px-4">
                Subscribe
              </Button>
            </div>
          </Card>

          <Card className="border-2 border-secondary/30 bg-card p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Users className="h-6 w-6 text-secondary" />
              Community
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Join our community of learners and share your journey with others learning system design.
            </p>
            <Button variant="outline" className="w-full" asChild>
              <Link to="/chat">Join Discussion</Link>
            </Button>
          </Card>
        </div>
      </section>

      {/* Topics Section */}
      <section className="px-4 sm:px-8 py-12 sm:py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-border bg-card p-6 sm:p-8 hover:shadow-[var(--shadow-card)] transition-shadow">
              <Database className="h-12 sm:h-16 w-12 sm:w-16 text-primary mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-card-foreground">Database Design</h3>
              <p className="text-muted-foreground mb-6">
                Database design is the foundation of scalable systems. Learn about normalization, indexing, 
                sharding, and how to choose the right database for your use case.
              </p>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link to="/learn">More about Databases →</Link>
              </Button>
            </Card>

            <Card className="border-border bg-card p-6 sm:p-8 hover:shadow-[var(--shadow-card)] transition-shadow">
              <Zap className="h-12 sm:h-16 w-12 sm:w-16 text-secondary mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-card-foreground">System Scalability</h3>
              <p className="text-muted-foreground mb-6">
                Scalability is about handling growth efficiently. Discover load balancing, caching strategies, 
                CDNs, and horizontal vs vertical scaling patterns.
              </p>
              <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90" asChild>
                <Link to="/learn">More about Scalability →</Link>
              </Button>
            </Card>

            <Card className="border-border bg-card p-6 sm:p-8 hover:shadow-[var(--shadow-card)] transition-shadow">
              <Trophy className="h-12 sm:h-16 w-12 sm:w-16 text-accent mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-card-foreground">Design Patterns</h3>
              <p className="text-muted-foreground mb-6">
                Design patterns are proven solutions to common problems. Master microservices, event-driven 
                architectures, and distributed system patterns.
              </p>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <Link to="/learn">More about Patterns →</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="px-4 sm:px-8 py-12 sm:py-16 max-w-5xl mx-auto">
        <Card className="border-2 border-border bg-card p-6 sm:p-12 text-center">
          <BookOpen className="h-16 sm:h-20 w-16 sm:w-20 text-primary mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-card-foreground">
            Start Learning Today
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Begin your journey with interactive video lessons, hands-on quizzes, and AI-powered guidance. 
            Learn at your own pace with content designed for visual learners.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link to="/learn">
                Browse Lessons <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/quiz">
                Take a Quiz <Trophy className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Index;
