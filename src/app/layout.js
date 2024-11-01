import { Inter } from "next/font/google";
import './globals.css';
import { Toaster } from "react-hot-toast";
import Providers from "@/components/providers";
import { ReactQuery } from "@/Providors/RectQuery";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chef Pannel",
  description: "Order your food",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <Providers>
          <ReactQuery>
            {children}
          </ReactQuery>
        </Providers>
      </body>
    </html>
  );
}
