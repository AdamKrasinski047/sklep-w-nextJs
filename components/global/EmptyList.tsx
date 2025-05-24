import React from 'react'
import { cn } from '@/lib/utils';
function EmptyList({
  heading = 'nie znaleziono produktu',
  className,
}:{
 heading?: string;
className?: string;
}) {
  return <h2 className={cn('text-xl ', className)}>{heading}</h2>;
}

export default EmptyList
