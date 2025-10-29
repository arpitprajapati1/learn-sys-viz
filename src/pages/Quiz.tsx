import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle } from "lucide-react";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "What is the primary purpose of a load balancer?",
      options: [
        "To store data",
        "To distribute traffic across multiple servers",
        "To encrypt data",
        "To compile code",
      ],
      correctAnswer: 1,
    },
    {
      question: "Which database scaling approach involves adding more machines?",
      options: [
        "Vertical scaling",
        "Horizontal scaling",
        "Diagonal scaling",
        "Internal scaling",
      ],
      correctAnswer: 1,
    },
    {
      question: "What does CAP theorem stand for?",
      options: [
        "Consistency, Availability, Partition tolerance",
        "Capacity, Allocation, Performance",
        "Cache, API, Protocol",
        "Connection, Authentication, Permission",
      ],
      correctAnswer: 0,
    },
  ];

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResults(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <Card className="w-full max-w-2xl border-border bg-card p-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-card-foreground">Quiz Complete!</h2>
          <p className="mb-6 text-xl text-muted-foreground">
            You scored {score} out of {questions.length}
          </p>
          <div className="mb-6">
            {score === questions.length ? (
              <Badge className="bg-secondary text-secondary-foreground">Perfect Score! 🎉</Badge>
            ) : score >= questions.length / 2 ? (
              <Badge className="bg-primary text-primary-foreground">Good Job!</Badge>
            ) : (
              <Badge variant="outline">Keep Learning!</Badge>
            )}
          </div>
          <Button onClick={resetQuiz} size="lg">
            Try Again
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background px-4 py-12">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold text-foreground">Test Your Knowledge</h1>
          <p className="text-lg text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        <Card className="border-border bg-card p-8">
          <h2 className="mb-6 text-2xl font-bold text-card-foreground">
            {questions[currentQuestion].question}
          </h2>

          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === questions[currentQuestion].correctAnswer;
              const showFeedback = selectedAnswer !== null;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full rounded-lg border-2 p-4 text-left transition-all ${
                    showFeedback && isCorrect
                      ? "border-secondary bg-secondary/10"
                      : showFeedback && isSelected && !isCorrect
                      ? "border-destructive bg-destructive/10"
                      : "border-border bg-background hover:border-primary hover:bg-primary/5"
                  } ${selectedAnswer !== null ? "cursor-not-allowed" : "cursor-pointer"}`}
                  aria-label={`Option ${index + 1}: ${option}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">{option}</span>
                    {showFeedback && isCorrect && (
                      <CheckCircle className="h-6 w-6 text-secondary" aria-label="Correct answer" />
                    )}
                    {showFeedback && isSelected && !isCorrect && (
                      <XCircle className="h-6 w-6 text-destructive" aria-label="Incorrect answer" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Quiz;
