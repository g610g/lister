import Header from "../Header";
import { Toaster } from "../ui/toaster";
export default function MainLayout({ children }: any) {
  return (
    <>
      <main>
        <Header />
        {children}
      </main>
      <Toaster />
    </>
  );
}
