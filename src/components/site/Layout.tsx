import { Header } from "./Header";
import { Footer } from "./Footer";
import { MapStrip } from "./MapStrip";

export function Layout({ children, hideMap = false }: { children: React.ReactNode; hideMap?: boolean }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      {!hideMap && <MapStrip />}
      <Footer />
    </div>
  );
}
