import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppBar from "./components/appbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppBar>{children}</AppBar>
      </body>
    </html>
  );
}
