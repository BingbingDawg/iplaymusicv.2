import Footer from "../components/footer";
import SiteHeader from "../components/site-header";



export default function RootLayout({ children }) {
  return (
   <>
        <SiteHeader />
        
        <main className="mb-[4rem]">

        {children}
        
        <Footer />
        </main>
   </>
  );
}
