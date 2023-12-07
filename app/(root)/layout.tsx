import Bottombar from "@/components/shared/Bottombar";
import Headerbar from "@/components/shared/Headerbar";
import Leftsidebar from "@/components/shared/Leftsidebar";
import Rightsidebar from "@/components/shared/Rightsidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col h-screen bg-black text-white">
      <Headerbar />

      <div className="main-container flex flex-1">
        <Leftsidebar />
        <div className="content flex-1">{children}</div>
        <Rightsidebar />
      </div>

      <Bottombar />
    </main>
  );
}
