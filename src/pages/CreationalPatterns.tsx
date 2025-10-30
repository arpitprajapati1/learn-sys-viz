import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Box, Code2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CreationalPatterns = () => {
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
          <Badge variant="secondary" className="mb-4">Object Creation</Badge>
          <h1 className="mb-6 text-5xl font-bold text-foreground">Creational Patterns</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Creational design patterns provide various object creation mechanisms, which increase flexibility 
            and reuse of existing code. These patterns abstract the instantiation process and help make a system 
            independent of how its objects are created, composed, and represented.
          </p>
        </div>

        {/* Singleton Pattern */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">👑</span>
            <h2 className="text-3xl font-bold text-foreground">Singleton</h2>
          </div>
          
          <Card className="p-8 mb-6 border-2 border-border bg-card">
            <h3 className="text-xl font-bold text-card-foreground mb-4">Intent</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Singleton ensures a class has only one instance and provides a global point of access to it.
            </p>

            <h3 className="text-xl font-bold text-card-foreground mb-4">Problem</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The Singleton pattern solves two problems at once (violating Single Responsibility Principle):
            </p>
            <ul className="space-y-2 text-muted-foreground mb-6 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">1.</span>
                <span>Ensure that a class has just a single instance (e.g., database connection, logger)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">2.</span>
                <span>Provide a global access point to that instance</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-card-foreground mb-4">Solution</h3>
            <div className="bg-muted/50 rounded-lg p-6 mb-6">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Make the default constructor private to prevent other objects from using the <code className="bg-muted px-2 py-1 rounded">new</code> operator</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Create a static creation method that acts as a constructor</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>This method calls the private constructor and saves the object in a static field</span>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-card-foreground mb-4">Code Example</h3>
            <div className="bg-slate-900 text-slate-50 rounded-lg p-6 overflow-x-auto">
              <pre className="text-sm"><code>{`class Database {
  private static instance: Database;
  private connection: any;

  private constructor() {
    // Private constructor prevents instantiation
    this.connection = this.createConnection();
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  private createConnection() {
    return { /* connection details */ };
  }

  public query(sql: string) {
    return this.connection.execute(sql);
  }
}

// Usage
const db1 = Database.getInstance();
const db2 = Database.getInstance();
console.log(db1 === db2); // true - same instance`}</code></pre>
            </div>
          </Card>

          <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">⚠️ Use Case:</strong> Use Singleton when you need stricter control over global variables. 
              Common examples include database connections, configuration managers, and logging services.
            </p>
          </div>
        </section>

        {/* Factory Method Pattern */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🏭</span>
            <h2 className="text-3xl font-bold text-foreground">Factory Method</h2>
          </div>
          
          <Card className="p-8 mb-6 border-2 border-border bg-card">
            <h3 className="text-xl font-bold text-card-foreground mb-4">Intent</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Factory Method provides an interface for creating objects in a superclass, but allows subclasses 
              to alter the type of objects that will be created.
            </p>

            <h3 className="text-xl font-bold text-card-foreground mb-4">Problem</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Imagine you're creating a logistics management application. Initially, it only handles truck transport, 
              but later you need to add ships. Adding a new transport type requires changing the entire codebase.
            </p>

            <h3 className="text-xl font-bold text-card-foreground mb-4">Solution</h3>
            <div className="bg-muted/50 rounded-lg p-6 mb-6">
              <p className="text-muted-foreground mb-4">
                Replace direct object construction calls with calls to a special factory method. 
                Objects returned by a factory method are often referred to as products.
              </p>
              <div className="bg-card rounded p-4 border border-border">
                <pre className="text-sm text-muted-foreground overflow-x-auto">{`Creator (abstract)
  └── factoryMethod(): Product
  └── someOperation()
        └── uses factoryMethod()

ConcreteCreatorA            ConcreteCreatorB
  └── factoryMethod()         └── factoryMethod()
        returns ProductA            returns ProductB`}</pre>
              </div>
            </div>

            <h3 className="text-xl font-bold text-card-foreground mb-4">Code Example</h3>
            <div className="bg-slate-900 text-slate-50 rounded-lg p-6 overflow-x-auto">
              <pre className="text-sm"><code>{`interface Transport {
  deliver(): string;
}

class Truck implements Transport {
  deliver() {
    return "Deliver by land in a truck";
  }
}

class Ship implements Transport {
  deliver() {
    return "Deliver by sea in a ship";
  }
}

abstract class Logistics {
  abstract createTransport(): Transport;

  planDelivery(): string {
    const transport = this.createTransport();
    return \`Planning delivery: \${transport.deliver()}\`;
  }
}

class RoadLogistics extends Logistics {
  createTransport(): Transport {
    return new Truck();
  }
}

class SeaLogistics extends Logistics {
  createTransport(): Transport {
    return new Ship();
  }
}

// Usage
const roadLogistics = new RoadLogistics();
console.log(roadLogistics.planDelivery());
// "Planning delivery: Deliver by land in a truck"

const seaLogistics = new SeaLogistics();
console.log(seaLogistics.planDelivery());
// "Planning delivery: Deliver by sea in a ship"`}</code></pre>
            </div>
          </Card>

          <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">✅ Benefits:</strong> Avoids tight coupling between creator and concrete products. 
              Single Responsibility Principle - you can move product creation code into one place. 
              Open/Closed Principle - you can introduce new types without breaking existing code.
            </p>
          </div>
        </section>

        {/* Abstract Factory Pattern */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🏗️</span>
            <h2 className="text-3xl font-bold text-foreground">Abstract Factory</h2>
          </div>
          
          <Card className="p-8 mb-6 border-2 border-border bg-card">
            <h3 className="text-xl font-bold text-card-foreground mb-4">Intent</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Abstract Factory lets you produce families of related objects without specifying their concrete classes.
            </p>

            <h3 className="text-xl font-bold text-card-foreground mb-4">Problem</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              You're creating a furniture shop simulator. Your code consists of classes that represent families of 
              related products (Chair, Sofa, Table) with several variants (Modern, Victorian, ArtDeco). 
              You need a way to create individual furniture objects so they match other objects of the same family.
            </p>

            <h3 className="text-xl font-bold text-card-foreground mb-4">Code Example</h3>
            <div className="bg-slate-900 text-slate-50 rounded-lg p-6 overflow-x-auto">
              <pre className="text-sm"><code>{`interface Button {
  render(): string;
}

interface Checkbox {
  render(): string;
}

class WindowsButton implements Button {
  render() { return "Windows Button"; }
}

class MacButton implements Button {
  render() { return "Mac Button"; }
}

class WindowsCheckbox implements Checkbox {
  render() { return "Windows Checkbox"; }
}

class MacCheckbox implements Checkbox {
  render() { return "Mac Checkbox"; }
}

interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

class WindowsFactory implements GUIFactory {
  createButton() { return new WindowsButton(); }
  createCheckbox() { return new WindowsCheckbox(); }
}

class MacFactory implements GUIFactory {
  createButton() { return new MacButton(); }
  createCheckbox() { return new MacCheckbox(); }
}

// Usage
function renderUI(factory: GUIFactory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();
  return \`\${button.render()}, \${checkbox.render()}\`;
}

const os = "Windows";
const factory = os === "Windows" 
  ? new WindowsFactory() 
  : new MacFactory();

console.log(renderUI(factory));`}</code></pre>
            </div>
          </Card>
        </section>

        {/* Builder Pattern */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🔨</span>
            <h2 className="text-3xl font-bold text-foreground">Builder</h2>
          </div>
          
          <Card className="p-8 mb-6 border-2 border-border bg-card">
            <h3 className="text-xl font-bold text-card-foreground mb-4">Intent</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Builder lets you construct complex objects step by step. The pattern allows you to produce 
              different types and representations of an object using the same construction code.
            </p>

            <h3 className="text-xl font-bold text-card-foreground mb-4">Problem</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Creating a complex object with many optional parameters leads to constructor explosion or 
              telescoping constructors. The Builder pattern suggests extracting the construction code out 
              of the object's own class and moving it to separate objects called builders.
            </p>

            <h3 className="text-xl font-bold text-card-foreground mb-4">Code Example</h3>
            <div className="bg-slate-900 text-slate-50 rounded-lg p-6 overflow-x-auto">
              <pre className="text-sm"><code>{`class House {
  constructor(
    public walls: string,
    public doors: number,
    public windows: number,
    public roof: string,
    public garage?: boolean,
    public pool?: boolean
  ) {}
}

class HouseBuilder {
  private walls!: string;
  private doors!: number;
  private windows!: number;
  private roof!: string;
  private garage?: boolean;
  private pool?: boolean;

  setWalls(walls: string): this {
    this.walls = walls;
    return this;
  }

  setDoors(doors: number): this {
    this.doors = doors;
    return this;
  }

  setWindows(windows: number): this {
    this.windows = windows;
    return this;
  }

  setRoof(roof: string): this {
    this.roof = roof;
    return this;
  }

  addGarage(): this {
    this.garage = true;
    return this;
  }

  addPool(): this {
    this.pool = true;
    return this;
  }

  build(): House {
    return new House(
      this.walls,
      this.doors,
      this.windows,
      this.roof,
      this.garage,
      this.pool
    );
  }
}

// Usage
const house = new HouseBuilder()
  .setWalls("Brick")
  .setDoors(2)
  .setWindows(8)
  .setRoof("Tiles")
  .addGarage()
  .addPool()
  .build();`}</code></pre>
            </div>
          </Card>
        </section>

        {/* Prototype Pattern */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🐑</span>
            <h2 className="text-3xl font-bold text-foreground">Prototype</h2>
          </div>
          
          <Card className="p-8 mb-6 border-2 border-border bg-card">
            <h3 className="text-xl font-bold text-card-foreground mb-4">Intent</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Prototype lets you copy existing objects without making your code dependent on their classes.
            </p>

            <h3 className="text-xl font-bold text-card-foreground mb-4">Problem</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              If you want to create an exact copy of an object, you'd need to create a new object of the same class, 
              then go through all fields and copy their values. However, you might not have access to all fields 
              if some are private. The Prototype pattern delegates the cloning process to the actual objects being cloned.
            </p>

            <h3 className="text-xl font-bold text-card-foreground mb-4">Code Example</h3>
            <div className="bg-slate-900 text-slate-50 rounded-lg p-6 overflow-x-auto">
              <pre className="text-sm"><code>{`interface Prototype {
  clone(): Prototype;
}

class Shape implements Prototype {
  constructor(
    public x: number,
    public y: number,
    public color: string
  ) {}

  clone(): Shape {
    return new Shape(this.x, this.y, this.color);
  }
}

class Circle extends Shape {
  constructor(
    x: number,
    y: number,
    color: string,
    public radius: number
  ) {
    super(x, y, color);
  }

  clone(): Circle {
    return new Circle(this.x, this.y, this.color, this.radius);
  }
}

// Usage
const circle1 = new Circle(10, 20, "red", 5);
const circle2 = circle1.clone();

circle2.x = 30;
circle2.color = "blue";

console.log(circle1); // Circle { x: 10, y: 20, color: "red", radius: 5 }
console.log(circle2); // Circle { x: 30, y: 20, color: "blue", radius: 5 }`}</code></pre>
            </div>
          </Card>

          <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">💡 Use Case:</strong> Use the Prototype pattern when your code 
              shouldn't depend on the concrete classes of objects that you need to copy, or when you want to reduce 
              the number of subclasses that only differ in the way they initialize their respective objects.
            </p>
          </div>
        </section>

        {/* Summary */}
        <section>
          <Card className="p-8 bg-primary/5 border-2 border-primary">
            <h2 className="text-2xl font-bold text-foreground mb-4">Key Takeaways</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong className="text-foreground">Singleton:</strong> One instance, global access</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong className="text-foreground">Factory Method:</strong> Subclasses decide which class to instantiate</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong className="text-foreground">Abstract Factory:</strong> Families of related objects</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong className="text-foreground">Builder:</strong> Step-by-step complex object construction</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong className="text-foreground">Prototype:</strong> Clone objects without coupling to classes</span>
              </li>
            </ul>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default CreationalPatterns;