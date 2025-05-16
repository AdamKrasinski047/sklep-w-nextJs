'use client';

import { toast } from '@/hooks/use-toast';

export default function AboutPage() {
  return (
    <button
      className="p-4 bg-blue-500 text-white rounded"
      onClick={() =>
        toast({
          title: 'Toast działa!',
          description: 'Jeśli to widzisz, wszystko gra 🍞',
        })
      }
    >
      Testuj toast
    </button>
  );
}
