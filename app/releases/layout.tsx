import { Metadata } from "next";
import { env } from "@/env.mjs";

export const metadata: Metadata = {
  title: `Releases | ${env.NEXT_PUBLIC_PAGE_TITLE}`,
};

export default function ReleasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-4xl p-10">
      <h1 className="pb-10 text-4xl">Recent Releases</h1>
      {children}
    </div>
  );
}
