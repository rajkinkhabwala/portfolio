import { cn } from "@/lib/utils";
import "../globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import MaxWidthWapper from "@/components/utilities/MaxWidthWapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Raj Kinkhabwala | Software Engineer",
  description: "Full-Stack Software Developer with 2 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex flex-col min-h-screen">
          
          {/* <div className="flex-grow flex-1"> */}
          <section className="relative isolate w-full h-screen flex justify-center items-center -mt-16">
        <MaxWidthWapper>
            {children}
        </MaxWidthWapper> 
          </section>
          {/* </div> */}
          </main>
        </body>
    </html>
  );
}
