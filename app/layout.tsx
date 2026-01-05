import './globals.css'
import { Outfit, JetBrains_Mono } from 'next/font/google'

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata = {
  title: 'ScanRty - L\'IA au service de l\'immobilier et de l\'hôtellerie',
  description: 'Détection intelligente de sous-location et optimisation de la rentabilité hôtelière grâce à l\'IA.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: '#38bdf8',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${outfit.variable} ${jetbrainsMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
