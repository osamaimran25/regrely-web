import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container flex min-h-[60vh] flex-col items-center justify-center gap-4 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        404
      </p>
      <h1 className="text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="max-w-lg text-muted-foreground">
        The page you are looking for does not exist or may have moved.
      </p>
      <Link href="/" className={buttonVariants()}>
        Back to home
      </Link>
    </section>
  );
}
