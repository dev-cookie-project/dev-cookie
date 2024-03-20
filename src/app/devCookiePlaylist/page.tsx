import PlaylistSearchform from "@/app/devCookiePlaylistComponents/PlaylistSearchform";
import { usePathname } from "next/navigation";
import PlaylistDatabase from "../devCookiePlaylistComponents/PlaylistDatabase";

function page() {
  return (
    <div>
      <PlaylistSearchform />
    </div>
  );
}

export default page;
