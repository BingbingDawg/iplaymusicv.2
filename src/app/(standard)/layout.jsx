import Navigation from "../components/navigation";
import SiteHeader from "../components/site-header";



export default function RootLayout({ children }) {
  return (
   <>
        <SiteHeader />
        
        <main className="mb-[4rem]">

        {children}
        
        </main>
        
        <Navigation />
   </>
  );
}
