import Header from "./components/Header";
import MicrocmsPage from "./components/microcmsPage";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          {children}
          <MicrocmsPage />
        </div>
      </body>
    </html>
  );
}
