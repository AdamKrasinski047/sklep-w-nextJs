import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Button } from '../ui/button';
import { LuAlignLeft } from 'react-icons/lu';
import Link from 'next/link';
import { links } from '@/utils/links';
import { log } from 'console';
function LinksDropdown() {
  return (
    
   <DropdownMenu>
      <DropdownMenuTrigger asChild>
          <Button variant='outline'>
              <LuAlignLeft className='w-6 h-6'/>
          </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-40' align='start' sideOffset={10}>
          {links.map((linki)=>{
            return(    
              <DropdownMenuItem key={linki.href}>
                  <Link href={linki.href} className='capitalize w-full'>{linki.label}</Link>
              </DropdownMenuItem>
            )
          })}
      </DropdownMenuContent>
   </DropdownMenu>
  )
}

export default LinksDropdown