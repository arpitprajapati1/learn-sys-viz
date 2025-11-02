import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, AlertTriangle, CheckCircle, Code } from "lucide-react";

const Refactoring = () => {
  const refactoringTechniques = [
    { 
      name: "Extract Method", 
      description: "Break down long methods into smaller, focused ones",
      example: "When a method does too many things"
    },
    { 
      name: "Rename Variable", 
      description: "Give variables clear, meaningful names",
      example: "Change 'd' to 'daysSinceCreation'"
    },
    { 
      name: "Move Method", 
      description: "Move methods to more appropriate classes",
      example: "When a method uses more features of another class"
    },
    { 
      name: "Replace Magic Number", 
      description: "Replace hardcoded numbers with named constants",
      example: "Replace '86400' with 'SECONDS_PER_DAY'"
    },
  ];

  const codeSmells = [
    { name: "Long Method", impact: "High", description: "Method that has grown too large" },
    { name: "Duplicate Code", impact: "High", description: "Same code structure in multiple places" },
    { name: "Large Class", impact: "Medium", description: "Class trying to do too much" },
    { name: "Long Parameter List", impact: "Medium", description: "Too many parameters in a method" },
    { name: "Dead Code", impact: "Low", description: "Unused code that should be removed" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="mb-12 sm:mb-16">
          <Badge variant="secondary" className="mb-4">Code Quality</Badge>
          <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Refactoring</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Refactoring is the process of changing a software system in such a way that it does not alter 
            the external behavior of the code yet improves its internal structure. It's a disciplined way 
            to clean up code that minimizes the chances of introducing bugs.
          </p>
        </div>

        {/* What is Refactoring */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <RefreshCw className="h-6 sm:h-8 w-6 sm:w-8 text-primary" />
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">What is Refactoring?</h2>
          </div>

          <Card className="p-4 sm:p-8 mb-8 border-2 border-border bg-card">
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-500/10 border-2 border-red-500/20 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3 text-foreground flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  Before Refactoring
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Long, complex methods</li>
                  <li>• Duplicate code everywhere</li>
                  <li>• Hard to understand logic</li>
                  <li>• Difficult to test</li>
                  <li>• Takes hours to add features</li>
                </ul>
              </div>

              <div className="bg-green-500/10 border-2 border-green-500/20 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3 text-foreground flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  After Refactoring
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Small, focused methods</li>
                  <li>• DRY (Don't Repeat Yourself)</li>
                  <li>• Clear, readable code</li>
                  <li>• Easy to test</li>
                  <li>• Fast feature development</li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Remember:</strong> Refactoring is not rewriting. 
                It's making small, incremental changes that improve code structure without changing behavior.
              </p>
            </div>
          </Card>
        </section>

        {/* Code Smells */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="h-6 sm:h-8 w-6 sm:w-8 text-primary" />
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Code Smells</h2>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground mb-6">
            Code smells are indicators that something might be wrong with your code. They're not bugs—they don't 
            prevent the program from functioning. Instead, they suggest weaknesses in design that may slow down 
            development or increase the risk of bugs.
          </p>

          <div className="space-y-4">
            {codeSmells.map((smell) => (
              <Card key={smell.name} className="p-6 border-2 border-border hover:shadow-[var(--shadow-card)] transition-all">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-card-foreground mb-2">{smell.name}</h3>
                    <p className="text-sm text-muted-foreground">{smell.description}</p>
                  </div>
                  <Badge 
                    variant={smell.impact === "High" ? "destructive" : smell.impact === "Medium" ? "secondary" : "outline"}
                  >
                    {smell.impact} Impact
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Refactoring Techniques */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Code className="h-6 sm:h-8 w-6 sm:w-8 text-primary" />
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Common Refactoring Techniques</h2>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground mb-6">
            These are some of the most commonly used refactoring techniques that can dramatically improve your code quality.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            {refactoringTechniques.map((technique) => (
              <Card key={technique.name} className="p-6 border-2 border-border hover:shadow-[var(--shadow-card)] transition-all">
                <h3 className="font-bold text-xl text-card-foreground mb-3">{technique.name}</h3>
                <p className="text-muted-foreground mb-4">{technique.description}</p>
                <div className="bg-muted/50 rounded p-3 text-sm">
                  <span className="text-muted-foreground italic">Example: {technique.example}</span>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Refactoring Process Diagram */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">The Refactoring Process</h2>
          <Card className="p-4 sm:p-8 border-2 border-border bg-card">
            <div className="bg-muted/30 rounded-lg p-6">
              <svg viewBox="0 0 800 300" className="w-full h-auto">
                {/* Step 1 */}
                <rect x="50" y="100" width="140" height="80" fill="hsl(var(--primary))" opacity="0.2" stroke="hsl(var(--primary))" strokeWidth="2" rx="8"/>
                <text x="120" y="135" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="16" fontWeight="bold">1. Identify</text>
                <text x="120" y="155" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="12">Code Smell</text>
                
                {/* Arrow 1 */}
                <line x1="190" y1="140" x2="240" y2="140" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#arrow)"/>
                
                {/* Step 2 */}
                <rect x="240" y="100" width="140" height="80" fill="hsl(var(--primary))" opacity="0.2" stroke="hsl(var(--primary))" strokeWidth="2" rx="8"/>
                <text x="310" y="135" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="16" fontWeight="bold">2. Write Tests</text>
                <text x="310" y="155" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="12">Ensure Safety</text>
                
                {/* Arrow 2 */}
                <line x1="380" y1="140" x2="430" y2="140" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#arrow)"/>
                
                {/* Step 3 */}
                <rect x="430" y="100" width="140" height="80" fill="hsl(var(--primary))" opacity="0.2" stroke="hsl(var(--primary))" strokeWidth="2" rx="8"/>
                <text x="500" y="135" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="16" fontWeight="bold">3. Refactor</text>
                <text x="500" y="155" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="12">Small Steps</text>
                
                {/* Arrow 3 */}
                <line x1="570" y1="140" x2="620" y2="140" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#arrow)"/>
                
                {/* Step 4 */}
                <rect x="620" y="100" width="140" height="80" fill="hsl(var(--primary))" opacity="0.2" stroke="hsl(var(--primary))" strokeWidth="2" rx="8"/>
                <text x="690" y="135" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="16" fontWeight="bold">4. Verify</text>
                <text x="690" y="155" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="12">Run Tests</text>
                
                {/* Arrow marker definition */}
                <defs>
                  <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="hsl(var(--primary))" />
                  </marker>
                </defs>
              </svg>
            </div>
            
            <div className="mt-6 bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Golden Rule:</strong> Always have tests before refactoring. 
                Tests are your safety net that ensures you haven't broken anything.
              </p>
            </div>
          </Card>
        </section>

        {/* When to Refactor */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">When Should You Refactor?</h2>
          <Card className="p-4 sm:p-8 border-2 border-border bg-card">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <span className="text-2xl">📝</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Rule of Three</h3>
                  <p className="text-muted-foreground">When you do something for the third time, refactor it into a reusable solution.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <span className="text-2xl">🆕</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Before Adding Features</h3>
                  <p className="text-muted-foreground">Clean up the code first to make the new feature easier to add.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <span className="text-2xl">🐛</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">During Bug Fixes</h3>
                  <p className="text-muted-foreground">If code is confusing and causing bugs, refactor it while fixing.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <span className="text-2xl">👀</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">During Code Review</h3>
                  <p className="text-muted-foreground">Review is the perfect time to spot refactoring opportunities.</p>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Refactoring;
