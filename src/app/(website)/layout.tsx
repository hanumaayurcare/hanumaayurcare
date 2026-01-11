
import Navbar from "@/src/components/header";
import Footer from "@/src/components/footer";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        {children}
      </main>
      <Footer />
    </>
  );
}
