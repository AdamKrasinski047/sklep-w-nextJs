'use client'

import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import React from 'react'

function Favpage() {
  const handleClick = () => {
   toast({
  title: 'Sukces!',
  description: 'Produkt został utworzony.',
  variant: 'default',
});

  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Fav</h1>
      <Button onClick={handleClick}>Pokaż toast</Button>
    </div>
  )
}

export default Favpage
