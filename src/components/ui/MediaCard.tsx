import {FaHeart} from "react-icons/fa";
import type {PhotoItem} from "../../data/photo.ts";

export default function MediaCard({item}: { item: PhotoItem }) {
    return (
        <div
            className="
                group
                overflow-hidden
                rounded-3xl
                border border-pink-400/20
                bg-gradient-to-br
                from-[#2b1138]
                via-[#32215e]
                to-[#0b3b63]
                shadow-xl
                shadow-pink-500/20
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-sky-300/40
                hover:shadow-[0_20px_40px_rgba(236,72,153,0.45)]
            "
        >
            <div className="relative overflow-hidden">

                <img
                    src={item.src}
                    alt={item.title}
                    className="
                        aspect-[4/5]
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-110
                    "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"/>

                <button
                    className="
                        absolute
                        right-4
                        top-4
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/20
                        bg-white/10
                        backdrop-blur-md
                        transition-all
                        hover:scale-110
                        hover:bg-pink-500
                    "
                >
                    <FaHeart className="text-white text-lg"/>
                </button>

            </div>

            <div className="p-5">

                <h2 className="text-lg font-semibold text-white">
                    {item.title}
                </h2>

                <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-pink-400 to-sky-400"></div>

            </div>
        </div>
    );
}