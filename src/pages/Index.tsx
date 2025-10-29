import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Sparkles, BookOpen, MessageSquare, Trophy, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-5xl font-bold leading-tight text-foreground md:text-6xl">
            Master System Design
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Through Interactive Learning
            </span>
          </h1>
          <p className="mb-8 text-xl text-muted-foreground">
            Learn complex concepts through engaging videos, interactive quizzes, and AI-powered guidance.
            Built for visual learners and accessible to everyone.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/learn" aria-label="Start learning system design">
                Start Learning <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/chat" aria-label="Chat with AI assistant">
                Chat with AI <MessageSquare className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
          Why Learn With Us?
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elegant)]">
            <Sparkles className="mb-4 h-12 w-12 text-primary" aria-hidden="true" />
            <h3 className="mb-2 text-xl font-bold text-card-foreground">AI-Powered</h3>
            <p className="text-muted-foreground">
              Get personalized recommendations and instant answers to your questions
            </p>
          </Card>

          <Card className="border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elegant)]">
            <BookOpen className="mb-4 h-12 w-12 text-secondary" aria-hidden="true" />
            <h3 className="mb-2 text-xl font-bold text-card-foreground">Video Lessons</h3>
            <p className="text-muted-foreground">
              Learn from curated YouTube content integrated seamlessly
            </p>
          </Card>

          <Card className="border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elegant)]">
            <Trophy className="mb-4 h-12 w-12 text-accent" aria-hidden="true" />
            <h3 className="mb-2 text-xl font-bold text-card-foreground">Interactive Quizzes</h3>
            <p className="text-muted-foreground">
              Test your knowledge with instant feedback and progress tracking
            </p>
          </Card>

          <Card className="border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elegant)]">
            <MessageSquare className="mb-4 h-12 w-12 text-primary" aria-hidden="true" />
            <h3 className="mb-2 text-xl font-bold text-card-foreground">Accessible</h3>
            <p className="text-muted-foreground">
              WCAG compliant with keyboard navigation and screen reader support
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Card className="mx-auto max-w-3xl border-border bg-card p-12 shadow-[var(--shadow-elegant)]">
          <h2 className="mb-4 text-3xl font-bold text-card-foreground">
            Ready to Start Your Journey?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Join thousands of developers mastering system design concepts
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/learn" aria-label="Get started with learning">
              Get Started Now
            </Link>
          </Button>
        </Card>
      </section>
    </div>
  );
};

export default Index;
