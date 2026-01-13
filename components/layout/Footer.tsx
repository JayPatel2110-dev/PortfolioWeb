import Image from "next/image";

export default function Footer() {
    return (
        <footer className="mt-32 py-12 text-center text-sm text-[rgb(var(--muted))]">
            <div className="flex flex-col items-center gap-4">

                <Image
                    src="/images/jp-logo.png"
                    alt="Jay Patel"
                    width={32}
                    height={32}
                    className="rounded-full opacity-70"
                />

                <p className="max-w-xl">
                    Built with curiosity, systems thinking, and a gamer’s persistence.
                </p>

                <p className="opacity-70">
                    © {new Date().getFullYear()} Jay Patel
                </p>
            </div>
        </footer>
    );
}
