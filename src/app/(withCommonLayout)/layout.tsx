import Navbar from "@/components/shared/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <div>
                {children}
            </div>
        </>
    );
};

export default CommonLayout;