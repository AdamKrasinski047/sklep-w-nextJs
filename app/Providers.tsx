'use client'

import { ThemeProvider } from './theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { useToastListener } from '@/hooks/use-toast-listener'

function Providers({ children }: { children: React.ReactNode }) {
  useToastListener() 

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <Toaster />
    </ThemeProvider>
  )
}

export default Providers
