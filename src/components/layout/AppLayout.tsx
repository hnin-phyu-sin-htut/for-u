import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import type {ReactNode} from "react";

export default function AppLayout({children}: {children: ReactNode}) {
    return (
        <div className="min-h-screen flex bg-gradient-to-br from-black via-[#1a0b2e] to-black text-white">

            <Sidebar/>

            <div className="flex-1">
                <Navbar/>
                <div className="p-4">{children}</div>
            </div>

        </div>
    );
}