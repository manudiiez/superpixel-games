import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@/scss/global.scss';
import Footer from '@/components/layout/footer/Footer'
import Menu from '@/components/layout/menu/Menu'
import { Inter } from 'next/font/google'
import { AuthProvider } from './Providers'
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <Menu />
            <main>
              {children}
            </main>
          </CartProvider>
        </AuthProvider>
        <Footer />

      </body>
    </html>
  )
}
