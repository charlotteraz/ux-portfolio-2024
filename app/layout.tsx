import Navbar from "./components/Navbar";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/eve6csd.css"></link>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
