import {FaTimes} from "react-icons/fa";
import {useEffect} from "react";
import type {VideoItem} from "../../data/videos";

interface Props {
    video: VideoItem | null;
    onClose: () => void;
}

export default function VideoModal({video, onClose}: Props) {
    useEffect(() => {
        if (!video) return;

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [video, onClose]);

    if (!video) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md px-4">

            <button
                onClick={onClose}
                className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white hover:bg-pink-500"
            >
                <FaTimes/>
            </button>

            <div className="w-full max-w-3xl">

                <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-2xl">

                    <video
                        src={video.src}
                        controls
                        autoPlay
                        className="h-full w-full object-contain bg-black"
                    />

                </div>

            </div>
        </div>
    );
}