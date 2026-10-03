import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <p className="label-caps mb-4">404</p>
      <h1 className="text-4xl">This page is not here.</h1>
      <Link href="/" className="btn-primary mt-8">
        Back to home
      </Link>
    </div>
  );
}
