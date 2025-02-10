import type { PropsWithChildren } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function PublicLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
