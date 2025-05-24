import React from 'react'
import { TfiGift } from "react-icons/tfi";
import { Button } from '../ui/button';
import Link from 'next/link';
function Logo() {
  return (
    <Button size='icon' asChild>
     <Link href='/'>
      <TfiGift className='w-6 h-6'/> 
     </Link>
    </Button>
  )
}

export default Logo
