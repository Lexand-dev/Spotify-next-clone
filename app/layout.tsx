import SideBar from '@/components/SideBar'
import ModalProvider from '@/providers/ModalProvider'
import SupabaseProvider from '@/providers/SupabaseProvider'
import ToasterProvider from '@/providers/ToasterProvider'
import { UserProvider } from '@/providers/UserProvider'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Listen to music code.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider/>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider/>
            <SideBar>
              {children}
            </SideBar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
