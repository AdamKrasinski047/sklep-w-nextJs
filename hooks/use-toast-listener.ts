'use client'

import { useEffect } from 'react'
import { toast as useToastImpl } from '@/components/ui/use-toast'

export function useToastListener() {
  useEffect(() => {
    function handler(e: CustomEvent) {
      useToastImpl({ ...e.detail })
    }

    window.addEventListener('shadcn-toast', handler as EventListener)
    return () =>
      window.removeEventListener('shadcn-toast', handler as EventListener)
  }, [])
}
