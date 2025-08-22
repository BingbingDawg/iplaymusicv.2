import PlayerProvider from "@/providers/player-provider";
import "./globals.css";
import Player from "./components/player";
import PlaylistProvider from "@/providers/playlist-provider";

export const metadata = {
    title: {
        template: "%s | iPlayMusic",
        default: "iPlayMusic"
    },
    description: "A music streaming platform",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
            <PlayerProvider>
            <PlaylistProvider>
                {children}
                <Player />
            </PlaylistProvider>
            </PlayerProvider>
            </body>
        </html>
    )
}