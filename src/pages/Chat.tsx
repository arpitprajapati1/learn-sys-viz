import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot } from "lucide-react";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your System Design learning assistant. Ask me anything about scalability, databases, caching, or system architecture!",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { role: "user", content: input },
    ];

    // Simulate AI response
    const responses = [
      "Great question! Let me explain that concept...",
      "That's an important topic in system design. Here's what you need to know...",
      "I'd recommend checking out the video lessons on this topic for a visual explanation.",
      "This relates to scalability principles. Would you like me to break it down?",
    ];

    setTimeout(() => {
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: responses[Math.floor(Math.random() * responses.length)],
        },
      ]);
    }, 500);

    setMessages(newMessages);
    setInput("");
  };

  return (
    <div className="flex h-screen flex-col bg-background">
      <div className="border-b border-border bg-card px-6 py-4">
        <div className="container mx-auto flex items-center gap-3">
          <Bot className="h-8 w-8 text-primary" aria-hidden="true" />
          <div>
            <h1 className="text-2xl font-bold text-foreground">AI Learning Assistant</h1>
            <p className="text-sm text-muted-foreground">Ask questions about System Design</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="container mx-auto max-w-3xl space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <Card
                className={`max-w-[80%] border-border p-4 ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-card-foreground"
                }`}
              >
                <p>{message.content}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border bg-card px-4 py-4">
        <div className="container mx-auto max-w-3xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex gap-2"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question about System Design..."
              className="flex-1 border-input bg-background"
              aria-label="Chat message input"
            />
            <Button type="submit" size="icon" aria-label="Send message">
              <Send className="h-4 w-4" aria-hidden="true" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
