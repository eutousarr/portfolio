import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import { Provider } from "./components/Provider";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import QueryProvider from "@/components/QueryProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "El Hadji Mama Sarr",
  description: "Portfolio of El Hadji Mama Sarr",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white text-black dark:bg-[#090908] dark:text-white h-full selection:bg-gray-50 dark:selection:bg-gray-800 relative`}
      >
        <AuthProvider>
          <QueryProvider>
            <Provider>
              <p className="w-full mx-auto px-4 sm:px-6 lg:px-8 bg-purple-950 text-center text-white text-sm"> ©Kis@rrW3b </p>
              <Navbar />
              <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
              </main>
              <ToastContainer position="bottom-right" theme="dark" autoClose={3000} />
            </Provider>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
