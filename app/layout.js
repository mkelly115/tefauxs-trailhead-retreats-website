import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import { Josefin_Sans } from "next/font/google";
import "@/app/_styles/globals.css";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  // title: "Tefauxs Trailhead Retreats",
  title: {
    template: "%s / Tefauxs Trailhead Retreats",
    default: "Welcome / Tefauxs Trailhead Retreats",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Turkish mountains",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen`}>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>TefauxCorp Copyright</footer>
      </body>
    </html>
  );
}
