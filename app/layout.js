
import "./globals.css";

export const metadata = {
  title: "Age Calculator",
  description: "A simple age calculator built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className="min-h-screen bg-gradient-to-b from-purple-500 to-indigo-500">

        {children}
      </body>
    </html>
  );
}
