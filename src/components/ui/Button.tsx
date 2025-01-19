import Link from "next/link";

const Button = ({ text, to, className }: { text: string, to: string | URL, className?: string }) => {
    return (
        <Link
            href={to?.toString() || "#"}
            className={` ${className ?? className} relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400`}
        >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 hover:bg-slate-900 px-5 py-1 font-medium text-white backdrop-blur-3xl">
                {text}
            </span>
        </Link>
    );
};

export default Button;