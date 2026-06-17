import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "Tefauxs Trailhead Retreats",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
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
