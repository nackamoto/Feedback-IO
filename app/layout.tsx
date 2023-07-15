import AppTheme from '@/context/app-theme'
import './globals.css'
import { Jost } from 'next/font/google'
import Script from 'next/script'

const jfont = Jost({ subsets: ['latin'] })

export const metadata = {
  title: 'Feedback Hub',
  description: 'Product feedback application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jfont.className}>
        <Script src='/static/flowbite.min.js' strategy='beforeInteractive'/>
        <AppTheme>
          {children}
        </AppTheme>
      </body>
    </html>
  )
}
