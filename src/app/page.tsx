import Greeting from "@/components/Greeting";
import MadeFor from "@/components/MadeFor";
import RecentlyPlayed from "@/components/RecentlyPlayed";

export default function Home() {
  return (
    <>
      <Greeting />
      <RecentlyPlayed />
      <MadeFor />
    </>
  );
}
