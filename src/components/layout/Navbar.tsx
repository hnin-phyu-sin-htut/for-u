import {FaHome, FaImages, FaMusic, FaVideo, FaHeart} from "react-icons/fa";
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <div className="flex justify-between items-center px-6 py-4 bg-black/40 backdrop-blur-lg text-white">

            <h1 className="text-2xl font-bold">
                for<span className="text-pink-400">U</span> <FaHeart className="inline text-pink-400"/>
            </h1>

            <div className="flex gap-6 text-sm items-center">
                <Link to="/" className="flex items-center gap-1 hover:text-pink-400">
                    <FaHome/> Home
                </Link>

                <Link to="/memories" className="flex items-center gap-1 hover:text-sky-400">
                    <FaImages/> Memories
                </Link>

                <Link to="/music" className="flex items-center gap-1 hover:text-pink-300">
                    <FaMusic/> Music
                </Link>

                <Link to="/videos" className="flex items-center gap-1 hover:text-sky-300">
                    <FaVideo/> Videos
                </Link>
            </div>
        </div>
    );
}