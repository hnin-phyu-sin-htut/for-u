import {FaHeart, FaMusic, FaImages, FaVideo} from "react-icons/fa";

export default function Sidebar() {
    return (
        <div className="hidden md:flex flex-col w-56 p-4 bg-white/5 backdrop-blur-lg text-white">

            <h2 className="text-pink-400 flex items-center gap-2 text-lg">
                <FaHeart/> forU
            </h2>

            <p className="text-xs text-sky-300 mt-2">
                your dreamy memory space
            </p>

            <div className="mt-6 flex flex-col gap-4 text-sm">

                <div className="flex items-center gap-2"><FaImages/> Memories</div>
                <div className="flex items-center gap-2"><FaMusic/> Music</div>
                <div className="flex items-center gap-2"><FaVideo/> Videos</div>

            </div>
        </div>
    );
}