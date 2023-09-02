import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <ModeToggle />
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
        Taxing Laughter: The Joke Tax Chronicles
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-3">
        The king, seeing how much happier his subjects were, realized the error
        of his ways and repealed the joke tax.
      </p>
      <Button className="w-max mt-4">Click me</Button>
    </main>
  );
}
