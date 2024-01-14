import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ICON 2K24",
  description: "Generated by create next app",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <LazyLoadedComponent dynamicImport={() => import("./page")} />
        <LazyLoadedComponent
          dynamicImport={() => import("./pages/about/page")}
        />
        <LazyLoadedComponent
          dynamicImport={() => import("./pages/event/page")}
        />
        <LazyLoadedComponent
          dynamicImport={() => import("./pages/contact/page")}
        />

        <Footer />
      </body>
    </html>
  );
}

function LazyLoadedComponent({ dynamicImport }) {
  const Component = dynamic(dynamicImport);
  return <Component />;
}
