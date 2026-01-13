import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
            <div className="max-w-xl text-center space-y-6">

                <p className="text-sm uppercase tracking-widest text-sky-400">
                    404 Error
                </p>

                <h1 className="text-4xl md:text-5xl font-bold">
                    Page Not Found
                </h1>

                <p className="text-[rgb(var(--muted))] text-lg">
                    The page you’re looking for doesn’t exist or may have been moved.
                </p>

                <div className="flex justify-center gap-4 pt-6">

                    {/* Go Home – safe */}
                    <Link
                        href="/"
                        className="px-6 py-3 rounded-md bg-sky-500 text-black font-medium
                       hover:bg-sky-400 transition"
                    >
                        Go Home
                    </Link>

                    {/* View Projects – force full navigation */}
                    <a
                        href="/#projects"
                        className="px-6 py-3 rounded-md border border-white/20
                       hover:border-sky-400 hover:text-sky-400 transition"
                    >
                        View Projects
                    </a>

                </div>
            </div>
        </div>
    );
}
