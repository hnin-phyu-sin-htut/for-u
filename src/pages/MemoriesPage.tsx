import {useState} from "react";
import {FaImages, FaSearch} from "react-icons/fa";
import {photo} from "../data/photo.ts";

export default function MemoriesPage() {
    const [search, setSearch] = useState("");

    const filteredMedia = photo.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div
            className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#07070d] via-[#23113f] to-[#0b355d] text-white">

            {/* Background Glow */}
            <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-pink-500/25 blur-[120px]"/>
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-400/25 blur-[120px]"/>

            <div className="relative mx-auto max-w-[1600px] px-8 py-10">

                <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                    <div>
                        <h1 className="flex items-center gap-3 text-5xl font-bold">
                            <FaImages className="text-pink-400"/>
                            Memories
                        </h1>

                        <p className="mt-3 text-lg text-sky-200">
                            Every memory deserves a beautiful place.
                        </p>
                    </div>

                    <div
                        className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-4 backdrop-blur-lg">

                        <FaSearch className="text-sky-300"/>

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search memories..."
                            className="w-72 bg-transparent outline-none placeholder:text-white/60"
                        />

                    </div>

                </div>

                <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">

                    {filteredMedia.length > 0 ? (
                        filteredMedia.map((item) => (
                            <div
                                key={item.id}
                                className="
                                    group
                                    overflow-hidden
                                    rounded-3xl
                                    border border-pink-400/20
                                    bg-white/10
                                    backdrop-blur-xl
                                    transition-all
                                    duration-300
                                    hover:-translate-y-3
                                    hover:border-sky-300/40
                                    hover:shadow-[0_20px_40px_rgba(56,189,248,0.25)]
                                "
                            >
                                <div className="relative overflow-hidden">

                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="
                                            h-[430px]
                                            w-full
                                            object-cover
                                            transition
                                            duration-500
                                            group-hover:scale-110
                                        "
                                    />

                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"/>

                                    <button
                                        className="
                                            absolute
                                            right-4
                                            top-4
                                            flex
                                            h-12
                                            w-12
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-pink-500/20
                                            backdrop-blur-md
                                            transition
                                            hover:bg-pink-500
                                            hover:scale-110
                                        "
                                    >
                                        ❤️
                                    </button>

                                </div>

                                <div className="space-y-3 p-6">

                                    <h2 className="text-xl font-semibold">
                                        {item.title}
                                    </h2>

                                    <div
                                        className="h-1 w-24 rounded-full bg-gradient-to-r from-pink-400 to-sky-400"></div>

                                </div>

                            </div>
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center text-xl text-sky-200">
                            No memories found.
                        </div>
                    )}

                </div>

            </div>
        </div>
    );
}