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
