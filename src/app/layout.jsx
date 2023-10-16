import Footer from '@/components/layout/footer/Footer'
import Menu from '@/components/layout/menu/Menu'
import Separator from '@/components/shared/separator/Separator'
import '@/scss/global.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
