import {FaHeart, FaImages} from "react-icons/fa";
import {Link} from "react-router-dom";

export default function HomePage() {
    return (
        <div
            className="min-h-screen text-white bg-gradient-to-br from-black via-[#1a0b2e] to-black relative overflow-hidden">

            <div
                className="absolute w-72 h-72 bg-pink-500 blur-3xl opacity-30 rounded-full top-10 left-10 animate-pulse"></div>
            <div
                className="absolute w-72 h-72 bg-sky-400 blur-3xl opacity-30 rounded-full bottom-10 right-10 animate-pulse"></div>

            <div className="flex flex-col items-center justify-center h-screen text-center">

                <h1 className="text-5xl flex items-center gap-2">
                    for<span className="text-pink-400">U</span>
                    <FaHeart className="text-pink-400"/>
                </h1>

                <p className="text-sky-300 mt-3">
                    A dreamy memory world
                </p>

                <Link
                    to="/memories"
                    className="mt-6 flex items-center gap-2 px-6 py-3 bg-pink-500 rounded-full"
                >
                    <FaImages/> Enter Memories
                </Link>

            </div>
        </div>
    );
}