import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl text-secondary mb-8">Page Not Found</h2>
      <p className="text-lg text-foreground mb-8">Could not find the requested resource</p>
      <Link href="/" className="px-6 py-3 bg-primary text-background rounded-md font-semibold hover:bg-primary/80 transition-colors duration-300">
        Return Home
      </Link>
    </div>
  );
}
