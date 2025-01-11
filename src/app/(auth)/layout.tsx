export default function AuthLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-4 space-y-4">
            {children}
        </div>
    );
}
