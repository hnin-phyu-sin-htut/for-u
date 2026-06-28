import {useState} from "react";
import {FaVideo} from "react-icons/fa";
import VideoCard from "../components/ui/VideoCard";
import type {VideoItem} from "../data/videos";
import {videos} from "../data/videos";
import VideoModal from "../components/ui/VideoModal.tsx";

export default function VideoCinemaPage() {
    const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#07070d] via-[#23113f] to-[#0b355d] px-6 py-10 text-white">

            <h1 className="mb-8 flex items-center gap-3 text-4xl font-bold">
                <FaVideo className="text-pink-400"/>
                Videos
            </h1>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {videos.map((video) => (
                    <VideoCard
                        key={video.id}
                        video={video}
                        onOpen={setSelectedVideo}
                    />
                ))}
            </div>

            <VideoModal
                video={selectedVideo}
                onClose={() => setSelectedVideo(null)}
            />
        </div>
    );
}