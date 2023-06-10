import './globals.css'
import { Jost } from 'next/font/google'

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
      <body className={jfont.className}>{children}</body>
    </html>
  )
}
