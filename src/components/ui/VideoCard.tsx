import {FaPlay} from "react-icons/fa";
import type {VideoItem} from "../../data/videos";

interface Props {
    video: VideoItem;
    onOpen: (video: VideoItem) => void;
}

export default function VideoCard({video, onOpen}: Props) {
    return (
        <div
            onClick={() => onOpen(video)}
            className="
                cursor-pointer
                overflow-hidden
                rounded-3xl
                border border-pink-400/20
                bg-white/10
                backdrop-blur-xl
                transition
                hover:-translate-y-2
                hover:border-sky-400/40
            "
        >
            <div className="relative h-52 w-full bg-black">

                <video
                    src={video.src}
                    className="h-full w-full object-cover"
                    muted
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <FaPlay className="text-4xl text-white"/>
                </div>
            </div>

            <div className="p-4 text-white">
                <p className="text-sm text-sky-200">Click to open</p>
            </div>
        </div>
    );
}