import "./globals.css";

export const metadata = {
    title: {
        template: "%s | iPlayMusic",
        default: "iPlayMusic"
    },
    description: "A music streaming platform",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}