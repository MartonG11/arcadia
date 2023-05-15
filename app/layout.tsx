import './globals.css'
import { Signika } from 'next/font/google'

import Footer from '@components/Footer'
import Header from '@components/Header'
import Provider from '@components/Provider'

const signika = Signika({ subsets: ['latin'] })

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
    <html lang="en" className={`${signika.className} h-full antialiased`}>
      <body className='flex min-h-screen flex-col'>
        <Provider>
          <Header />
          <main className='flex-grow px-10'>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
