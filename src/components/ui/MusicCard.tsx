import {FaPlay, FaMusic} from "react-icons/fa";
import type {SongItem} from "../../data/musics";

interface Props {
    song: SongItem;
    onOpen: (song: SongItem) => void;
}

export default function MusicCard({song, onOpen}: Props) {
    return (
        <div
            onClick={() => onOpen(song)}
            className="
                cursor-pointer
                rounded-2xl
                border border-pink-400/20
                bg-white/10
                p-5
                backdrop-blur-xl
                transition
                hover:-translate-y-2
                hover:border-sky-400/40
            "
        >
            <div className="flex items-center gap-2 mb-3">
                <FaMusic className="text-pink-400"/>
                <h3 className="font-semibold text-white">
                    {song.title}
                </h3>
            </div>

            <p className="text-xs text-sky-200 mb-2">
                {song.artist}
            </p>

            <div className="flex items-center gap-2 text-sky-200 text-sm">
                <FaPlay/>
                Play MV
            </div>
        </div>
    );
}