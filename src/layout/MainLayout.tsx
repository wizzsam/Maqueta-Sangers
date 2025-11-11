import React from "react";
import type { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
type MainLayoutProps = {
    children: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <main className="flex-1">
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;
