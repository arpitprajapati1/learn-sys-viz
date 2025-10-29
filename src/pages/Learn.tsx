import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Video, Code, Target } from "lucide-react";

const Learn = () => {
  const topics = [
    {
      id: 1,
      title: "Introduction to System Design",
      description: "Learn the fundamentals of designing scalable systems",
      level: "Beginner",
      duration: "15 min",
      icon: BookOpen,
      videoId: "UzLMhqg3_Wc",
    },
    {
      id: 2,
      title: "Database Scaling",
      description: "Master horizontal and vertical scaling techniques",
      level: "Intermediate",
      duration: "20 min",
      icon: Code,
      videoId: "xpDnVSmNFX0",
    },
    {
      id: 3,
      title: "Load Balancing",
      description: "Understand how to distribute traffic effectively",
      level: "Intermediate",
      duration: "18 min",
      icon: Target,
      videoId: "K0Ta65OqQkY",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground">Interactive Learning</h1>
          <p className="text-lg text-muted-foreground">
            Master System Design through engaging video lessons and interactive examples
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => {
            const Icon = topic.icon;
            return (
              <Card
                key={topic.id}
                className="group overflow-hidden border-border bg-card transition-all hover:shadow-[var(--shadow-card)]"
              >
                <div className="aspect-video w-full overflow-hidden bg-muted">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${topic.videoId}`}
                    title={topic.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                    <Badge variant="secondary">{topic.level}</Badge>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-card-foreground">{topic.title}</h3>
                  <p className="mb-4 text-muted-foreground">{topic.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Video className="h-4 w-4" aria-hidden="true" />
                    <span>{topic.duration}</span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Learn;
