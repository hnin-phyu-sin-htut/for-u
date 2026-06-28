import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/layout/Navbar";

import HomePage from "./pages/HomePage";
import MemoriesPage from "./pages/MemoriesPage";
import MusicRoomPage from "./pages/MusicRoomPage.tsx";
import VideoCinemaPage from "./pages/VideoCinemaPage";

export default function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/memories" element={<MemoriesPage/>}/>
                <Route path="/music" element={<MusicRoomPage/>}/>
                <Route path="/videos" element={<VideoCinemaPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}