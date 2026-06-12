import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Page() {
  return (
    <div>
      <Navigation />
      <h1>Tefauxs Trailhead Retreats. Welcome to the future of vacation.</h1>
      <Link href='/cabins'>Explore luxury cabins</Link>
    </div>
  );
}
