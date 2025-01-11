import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";

export default function MainLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            {children}
            <Footer />
        </div>
    );
}
