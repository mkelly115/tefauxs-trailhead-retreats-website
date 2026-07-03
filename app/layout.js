import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import "@/app/_styles/globals.css"

export const metadata = {
  title: "Tefauxs Trailhead Retreats",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className="bg-colors-primary-950 text-colors-primary-100 min-h-screen"> 
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
