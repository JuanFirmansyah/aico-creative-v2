import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Cursor from "@/components/ui/Cursor";
import Social from "@/components/ui/Social";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        <Cursor />

        <Navbar />

        {children}

        <Social />

      </body>
    </html>
  );
}