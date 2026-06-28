import { useRef, useState } from "react";

export function useMediaPlayer() {
    const mediaRef = useRef<HTMLVideoElement | HTMLAudioElement | null>(null);
    const [currentSrc, setCurrentSrc] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const play = (src: string, type: "audio" | "video") => {

        if (mediaRef.current) {
            mediaRef.current.pause();
            mediaRef.current = null;
        }

        setCurrentSrc(src);

        if (type === "audio") {
            const audio = new Audio(src);
            mediaRef.current = audio;

            audio.play();
            setIsPlaying(true);

            audio.onended = () => setIsPlaying(false);
        }
    };

    const pause = () => {
        if (mediaRef.current) {
            mediaRef.current.pause();
            setIsPlaying(false);
        }
    };

    return {
        play,
        pause,
        isPlaying,
        currentSrc,
    };
}