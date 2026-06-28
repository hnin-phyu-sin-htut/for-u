export default function GlowButton({
                                       children,
                                       onClick,
                                       type = "button",
                                       className = "",
                                   }: {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-5 py-2 rounded-full bg-pink-500 hover:bg-sky-400 transition duration-300 shadow-lg shadow-pink-500/40 text-white font-medium ${className}`}
        >
            {children}
        </button>
    );
}