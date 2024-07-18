import FooterPlayNowArtist from "./PlayNowArtist";
import FooterPlayerControls from "./PlayerControls";
import FooterOtherActions from "./FooterOthersActions";

export default function Footer() {
  return (
    <footer className="p-2 bg-zinc-900 border-t border-zinc-800 flex items-center justify-between">
      <FooterPlayNowArtist />
      <FooterPlayerControls />
      <FooterOtherActions />
    </footer>
  );
}
