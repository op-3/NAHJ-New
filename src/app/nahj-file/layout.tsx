import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NAHJ File",
  description: "NAHJ PDF File",
};

export default function NahjFileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
