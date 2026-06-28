import {useState} from "react";
import {FaMusic} from "react-icons/fa";
import {musics} from "../data/musics";
import MusicCard from "../components/ui/MusicCard";
import MusicModal from "../components/ui/MusicModal";
import type {SongItem} from "../data/musics";

export default function MusicRoomPage() {
    const [selectedSong, setSelectedSong] = useState<SongItem | null>(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#07070d] via-[#23113f] to-[#0b355d] px-6 py-10 text-white">

            <h1 className="mb-8 flex items-center gap-3 text-4xl font-bold">
                <FaMusic className="text-pink-400"/>
                Music Room
            </h1>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {musics.map((song) => (
                    <MusicCard
                        key={song.id}
                        song={song}
                        onOpen={setSelectedSong}
                    />
                ))}
            </div>

            <MusicModal
                song={selectedSong}
                songs={musics}
                onSongChange={setSelectedSong}
                onClose={() => setSelectedSong(null)}
            />
        </div>
    );
}