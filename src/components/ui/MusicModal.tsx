import {FaTimes} from "react-icons/fa";
import {useEffect} from "react";
import type {SongItem} from "../../data/musics";

interface Props {
    song: SongItem | null;
    songs: SongItem[];
    onSongChange: (song: SongItem) => void;
    onClose: () => void;
}

export default function MusicModal({
                                       song,
                                       songs,
                                       onSongChange,
                                       onClose,
                                   }: Props) {

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [onClose]);

    if (!song) return null;

    const currentIndex = songs.findIndex((s) => s.id === song.id);

    const playNext = () => {
        if (currentIndex < songs.length - 1) {
            onSongChange(songs[currentIndex + 1]);
        } else {
            onClose();
        }
    };

    const playPrev = () => {
        if (currentIndex > 0) {
            onSongChange(songs[currentIndex - 1]);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4">

            <button
                onClick={onClose}
                className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white hover:bg-pink-500"
            >
                <FaTimes/>
            </button>

            <div className="w-full max-w-4xl">

                <div className="aspect-video overflow-hidden rounded-2xl bg-black shadow-2xl">

                    <video
                        key={song.id}
                        src={song.src}
                        controls
                        autoPlay
                        onEnded={playNext}
                        className="h-full w-full object-contain"
                    />
                </div>

                <div className="mt-4 flex items-center justify-center gap-4">

                    <button
                        onClick={playPrev}
                        disabled={currentIndex <= 0}
                        className="px-4 py-2 rounded-full bg-white/10 text-white disabled:opacity-40"
                    >
                        Prev
                    </button>

                    <button
                        onClick={playNext}
                        className="px-4 py-2 rounded-full bg-pink-500 text-white"
                    >
                        Next
                    </button>

                </div>

                <h2 className="mt-4 text-center text-xl font-semibold text-white">
                    {song.title}
                </h2>

            </div>
        </div>
    );
}