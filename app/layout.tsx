import './globals.css'
import { Inter } from 'next/font/google'

import Footer from '@components/Footer'
import Header from '@components/Header'
import Provider from '@components/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Arcadia',
  description: 'Tech Homework for Arcadia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className='flex h-full flex-col'>
        <Provider>
          <Header />
          <main className='px-10'>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
