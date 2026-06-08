import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="font-mono text-6xl text-muted-foreground/30 mb-6">404</p>
        <h1 className="font-serif text-3xl font-medium mb-4">
          Page not found.
        </h1>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist — or hasn't been written yet.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to home
        </Link>
      </div>
    </div>
  );
}
