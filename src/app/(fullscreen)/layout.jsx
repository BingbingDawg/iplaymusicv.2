import Footer from "../components/footer";
import SiteHeader from "../components/site-header";
import "../globals.css";

export default function FullscreenLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <SiteHeader>

        </SiteHeader>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
