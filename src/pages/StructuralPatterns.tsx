import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Share2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const StructuralPatterns = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-8 py-12">
        {/* Breadcrumb */}
        <Link to="/design-patterns" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Design Patterns
        </Link>

        {/* Hero Section */}
        <div className="mb-16">
          <Badge variant="secondary" className="mb-4">Object Composition</Badge>
          <h1 className="mb-6 text-5xl font-bold text-foreground">Structural Patterns</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Structural design patterns explain how to assemble objects and classes into larger structures, 
            while keeping these structures flexible and efficient. These patterns are concerned with how 
            classes and objects are composed to form larger structures.
          </p>
        </div>

        {/* Adapter Pattern */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🔌</span>
            <h2 className="text-3xl font-bold text-foreground">Adapter</h2>
          </div>
          
          <Card className="p-8 mb-6 border-2 border-border bg-card">
            <h3 className="text-xl font-bold text-card-foreground mb-4">Intent</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Adapter allows objects with incompatible interfaces to collaborate. It acts as a wrapper 
              between two objects, catching calls for one object and transforming them to format and interface 
              recognizable by the second object.
            </p>

            <h3 className="text-xl font-bold text-card-foreground mb-4">Problem</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              You have a stock market monitoring app that works with XML data. You want to integrate a third-party 
              analytics library, but it only works with JSON. You can't modify the library since it's closed-source 
              or used by other parts of your system.
            </p>

            <h3 className="text-xl font-bold text-card-foreground mb-4">Solution</h3>
            <div className="bg-muted/50 rounded-lg p-6 mb-6">
              <p className="text-muted-foreground mb-4">
                Create an adapter class that wraps the incompatible object and translates calls to the format it expects.
              </p>
            </div>

            <h3 className="text-xl font-bold text-card-foreground mb-4">Code Example</h3>
            <div className="bg-slate-900 text-slate-50 rounded-lg p-6 overflow-x-auto">
              <pre className="text-sm"><code>{`// Legacy interface
class XMLDataProvider {
  getXMLData(): string {
    return "<data><value>123</value></data>";
  }
}

// New interface we want to use
interface JSONDataProvider {
  getJSONData(): object;
}

// Adapter
class XMLToJSONAdapter implements JSONDataProvider {
  constructor(private xmlProvider: XMLDataProvider) {}

  getJSONData(): object {
    const xml = this.xmlProvider.getXMLData();
    // Convert XML to JSON (simplified)
    return { data: { value: 123 } };
  }
}

// Client code
class DataAnalyzer {
  analyze(provider: JSONDataProvider) {
    const data = provider.getJSONData();
    console.log("Analyzing:", data);
  }
}

// Usage
const xmlProvider = new XMLDataProvider();
const adapter = new XMLToJSONAdapter(xmlProvider);
const analyzer = new DataAnalyzer();

analyzer.analyze(adapter); // Works with XML through adapter`}</code></pre>
            </div>
          </Card>

          <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">✅ Benefits:</strong> Single Responsibility Principle - you can separate 
              the interface or data conversion code from the primary business logic. Open/Closed Principle - you can 
              introduce new adapters without breaking existing client code.
            </p>
          </div>
        </section>

        {/* Bridge Pattern */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🌉</span>
            <h2 className="text-3xl font-bold text-foreground">Bridge</h2>
          </div>
          
          <Card className="p-8 mb-6 border-2 border-border bg-card">
            <h3 className="text-xl font-bold text-card-foreground mb-4">Intent</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Bridge lets you split a large class or a set of closely related classes into two separate 
              hierarchies—abstraction and implementation—which can be developed independently of each other.
            </p>

            <h3 className="text-xl font-bold text-card-foreground mb-4">Problem</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              You have a Shape class with Circle and Square subclasses. You want to add colors (Red, Blue), 
              so you'd need RedCircle, BlueCircle, RedSquare, BlueSquare. Adding new shapes or colors creates 
              a combinatorial explosion of classes.
            </p>

            <h3 className="text-xl font-bold text-card-foreground mb-4">Code Example</h3>
            <div className="bg-slate-900 text-slate-50 rounded-lg p-6 overflow-x-auto">
              <pre className="text-sm"><code>{`// Implementation interface
interface Color {
  applyColor(): string;
}

class Red implements Color {
  applyColor() { return "red"; }
}

class Blue implements Color {
  applyColor() { return "blue"; }
}

// Abstraction
abstract class Shape {
  constructor(protected color: Color) {}
  abstract draw(): string;
}

class Circle extends Shape {
  draw() {
    return \`Drawing a \${this.color.applyColor()} circle\`;
  }
}

class Square extends Shape {
  draw() {
    return \`Drawing a \${this.color.applyColor()} square\`;
  }
}

// Usage
const redCircle = new Circle(new Red());
console.log(redCircle.draw()); // "Drawing a red circle"

const blueSquare = new Square(new Blue());
console.log(blueSquare.draw()); // "Drawing a blue square"

// Easy to add new shapes or colors without explosion`}</code></pre>
            </div>
          </Card>

          <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">💡 Use Case:</strong> Use Bridge when you want to divide and organize 
              a monolithic class that has several variants of some functionality (e.g., different database drivers, 
              rendering engines, or device implementations).
            </p>
          </div>
        </section>

        {/* Composite Pattern */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🌳</span>
            <h2 className="text-3xl font-bold text-foreground">Composite</h2>
          </div>
          
          <Card className="p-8 mb-6 border-2 border-border bg-card">
            <h3 className="text-xl font-bold text-card-foreground mb-4">Intent</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Composite lets you compose objects into tree structures to represent part-whole hierarchies. 
              Composite lets clients treat individual objects and compositions of objects uniformly.
            </p>

            <h3 className="text-xl font-bold text-card-foreground mb-4">Problem</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              You need to implement a tree-like object structure (e.g., file system with files and folders, 
              or a UI with nested components). You want to treat both simple elements and containers uniformly.
            </p>

            <h3 className="text-xl font-bold text-card-foreground mb-4">Code Example</h3>
            <div className="bg-slate-900 text-slate-50 rounded-lg p-6 overflow-x-auto">
              <pre className="text-sm"><code>{`interface FileSystemItem {
  getName(): string;
  getSize(): number;
}

class File implements FileSystemItem {
  constructor(private name: string, private size: number) {}

  getName() { return this.name; }
  getSize() { return this.size; }
}

class Folder implements FileSystemItem {
  private items: FileSystemItem[] = [];

  constructor(private name: string) {}

  add(item: FileSystemItem) {
    this.items.push(item);
  }

  getName() { return this.name; }

  getSize(): number {
    return this.items.reduce(
      (total, item) => total + item.getSize(), 
      0
    );
  }
}

// Usage
const file1 = new File("document.txt", 100);
const file2 = new File("image.png", 500);
const file3 = new File("video.mp4", 2000);

const folder1 = new Folder("Documents");
folder1.add(file1);

const folder2 = new Folder("Media");
folder2.add(file2);
folder2.add(file3);

const root = new Folder("Root");
root.add(folder1);
root.add(folder2);

console.log(\`Total size: \${root.getSize()} bytes\`);
// Total size: 2600 bytes`}</code></pre>
            </div>
          </Card>
        </section>

        {/* Decorator Pattern */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🎁</span>
            <h2 className="text-3xl font-bold text-foreground">Decorator</h2>
          </div>
          
          <Card className="p-8 mb-6 border-2 border-border bg-card">
            <h3 className="text-xl font-bold text-card-foreground mb-4">Intent</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Decorator lets you attach new behaviors to objects by placing these objects inside special wrapper 
              objects that contain the behaviors. It's a flexible alternative to subclassing for extending functionality.
            </p>

            <h3 className="text-xl font-bold text-card-foreground mb-4">Problem</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              You have a notification system. Initially you only have email notifications, but users want SMS, 
              Facebook, Slack notifications. You could create subclasses for each combination (EmailNotifier, 
              SMSNotifier, EmailAndSMSNotifier...), but this leads to class explosion.
            </p>

            <h3 className="text-xl font-bold text-card-foreground mb-4">Code Example</h3>
            <div className="bg-slate-900 text-slate-50 rounded-lg p-6 overflow-x-auto">
              <pre className="text-sm"><code>{`interface Notifier {
  send(message: string): string;
}

class EmailNotifier implements Notifier {
  send(message: string) {
    return \`Email: \${message}\`;
  }
}

// Base decorator
abstract class NotifierDecorator implements Notifier {
  constructor(protected notifier: Notifier) {}
  
  send(message: string): string {
    return this.notifier.send(message);
  }
}

class SMSDecorator extends NotifierDecorator {
  send(message: string) {
    return \`\${super.send(message)} + SMS: \${message}\`;
  }
}

class SlackDecorator extends NotifierDecorator {
  send(message: string) {
    return \`\${super.send(message)} + Slack: \${message}\`;
  }
}

// Usage
let notifier: Notifier = new EmailNotifier();
console.log(notifier.send("Hello"));
// "Email: Hello"

notifier = new SMSDecorator(notifier);
console.log(notifier.send("Hello"));
// "Email: Hello + SMS: Hello"

notifier = new SlackDecorator(notifier);
console.log(notifier.send("Hello"));
// "Email: Hello + SMS: Hello + Slack: Hello"`}</code></pre>
            </div>
          </Card>

          <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">✅ Benefits:</strong> You can extend an object's behavior without 
              making a new subclass. You can add or remove responsibilities from an object at runtime. You can combine 
              several behaviors by wrapping an object into multiple decorators.
            </p>
          </div>
        </section>

        {/* Facade Pattern */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🎭</span>
            <h2 className="text-3xl font-bold text-foreground">Facade</h2>
          </div>
          
          <Card className="p-8 mb-6 border-2 border-border bg-card">
            <h3 className="text-xl font-bold text-card-foreground mb-4">Intent</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Facade provides a simplified interface to a library, a framework, or any other complex set of classes. 
              It defines a higher-level interface that makes the subsystem easier to use.
            </p>

            <h3 className="text-xl font-bold text-card-foreground mb-4">Problem</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Your code needs to work with a broad set of objects from a sophisticated library or framework. 
              You need to initialize all objects, keep track of dependencies, execute methods in the right order, etc. 
              Business logic becomes tightly coupled to implementation details.
            </p>

            <h3 className="text-xl font-bold text-card-foreground mb-4">Code Example</h3>
            <div className="bg-slate-900 text-slate-50 rounded-lg p-6 overflow-x-auto">
              <pre className="text-sm"><code>{`// Complex subsystem classes
class VideoFile {
  constructor(public filename: string) {}
}

class CodecFactory {
  extract(file: VideoFile): string {
    return "MPEG codec";
  }
}

class BitrateReader {
  read(filename: string, codec: string): string {
    return "1080p bitrate";
  }
}

class AudioMixer {
  fix(result: string): string {
    return \`Fixed audio: \${result}\`;
  }
}

// Facade
class VideoConverter {
  convert(filename: string, format: string): string {
    const file = new VideoFile(filename);
    const codecFactory = new CodecFactory();
    const codec = codecFactory.extract(file);
    
    const bitrateReader = new BitrateReader();
    const bitrate = bitrateReader.read(filename, codec);
    
    const audioMixer = new AudioMixer();
    const result = audioMixer.fix(bitrate);
    
    return \`Converted \${filename} to \${format}: \${result}\`;
  }
}

// Usage - Simple!
const converter = new VideoConverter();
console.log(converter.convert("video.ogg", "mp4"));
// Instead of manually working with 4+ classes`}</code></pre>
            </div>
          </Card>

          <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">💡 Use Case:</strong> Use Facade when you need a limited but 
              straightforward interface to a complex subsystem. It's especially useful when you want to structure 
              a subsystem into layers.
            </p>
          </div>
        </section>

        {/* Proxy Pattern */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🚪</span>
            <h2 className="text-3xl font-bold text-foreground">Proxy</h2>
          </div>
          
          <Card className="p-8 mb-6 border-2 border-border bg-card">
            <h3 className="text-xl font-bold text-card-foreground mb-4">Intent</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Proxy provides a substitute or placeholder for another object. A proxy controls access to the 
              original object, allowing you to perform something either before or after the request gets through 
              to the original object.
            </p>

            <h3 className="text-xl font-bold text-card-foreground mb-4">Problem</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              You have a massive object that consumes system resources. You need it from time to time, but not always. 
              You could implement lazy initialization, but this would require code duplication. The Proxy pattern lets 
              you postpone creation and initialization until actually needed.
            </p>

            <h3 className="text-xl font-bold text-card-foreground mb-4">Types of Proxies</h3>
            <div className="bg-muted/50 rounded-lg p-6 mb-6">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-foreground">Virtual Proxy:</strong> Lazy initialization (create expensive object on demand)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-foreground">Protection Proxy:</strong> Access control (check permissions before request)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-foreground">Remote Proxy:</strong> Represents object in different address space</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-foreground">Caching Proxy:</strong> Cache results of expensive operations</span>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-card-foreground mb-4">Code Example</h3>
            <div className="bg-slate-900 text-slate-50 rounded-lg p-6 overflow-x-auto">
              <pre className="text-sm"><code>{`interface Image {
  display(): void;
}

class RealImage implements Image {
  constructor(private filename: string) {
    this.loadFromDisk();
  }

  private loadFromDisk() {
    console.log(\`Loading image: \${this.filename}\`);
  }

  display() {
    console.log(\`Displaying: \${this.filename}\`);
  }
}

class ProxyImage implements Image {
  private realImage: RealImage | null = null;

  constructor(private filename: string) {}

  display() {
    // Lazy initialization
    if (!this.realImage) {
      this.realImage = new RealImage(this.filename);
    }
    this.realImage.display();
  }
}

// Usage
const image1 = new ProxyImage("photo1.jpg");
const image2 = new ProxyImage("photo2.jpg");

// Image not loaded yet
console.log("Images created");

// Now it loads and displays
image1.display(); // Loading... then Displaying...
image1.display(); // Just Displaying (cached)

// Only loaded when needed
image2.display();`}</code></pre>
            </div>
          </Card>
        </section>

        {/* Summary */}
        <section>
          <Card className="p-8 bg-primary/5 border-2 border-primary">
            <h2 className="text-2xl font-bold text-foreground mb-4">Key Takeaways</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong className="text-foreground">Adapter:</strong> Convert interface of a class into another interface</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong className="text-foreground">Bridge:</strong> Separate abstraction from implementation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong className="text-foreground">Composite:</strong> Compose objects into tree structures</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong className="text-foreground">Decorator:</strong> Add responsibilities to objects dynamically</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong className="text-foreground">Facade:</strong> Provide unified interface to set of interfaces</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong className="text-foreground">Proxy:</strong> Provide surrogate or placeholder for another object</span>
              </li>
            </ul>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default StructuralPatterns;