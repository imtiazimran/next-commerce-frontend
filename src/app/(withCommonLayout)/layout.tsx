import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <div>
                {children}
            </div>
            <Footer/>
        </>
    );
};

export default CommonLayout;