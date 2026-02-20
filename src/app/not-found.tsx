import type { Metadata } from "next";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { BackButton } from "@/components/BackButton/BackButton";

export const metadata: Metadata = {
  title: "404 – Page introuvable",
  description:
    "La page demandée semble avoir disparu ou n'existe pas. Revenez à l'accueil.",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: false,
      follow: true,
      noimageindex: true,
      "max-snippet": -1,
      "max-image-preview": "none",
      "max-video-preview": -1,
    },
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        {/* 404 */}
        <h1 className="text-8xl font-extrabold text-green-light animate-pulse">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-6 text-3xl font-bold dark:text-white">
          Oups… Page introuvable
        </h2>

        {/* Description */}
        <p className="mt-4 dark:text-gray-light">
          La page que vous recherchez semble avoir disparu ou n&apos;existe pas.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="text-black inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-green-light hover:scale-105 duration-300  font-semibold transition  "
          >
            <Home size={18} />
            Retour à l&apos;accueil
          </Link>

          <BackButton className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl border border-slate-600 dark:text-gray-light transition hover:cursor-pointer hover:border-amber-300">
            <ArrowLeft size={18} />
            Page précédente
          </BackButton>
        </div>
      </div>
    </div>
  );
}
