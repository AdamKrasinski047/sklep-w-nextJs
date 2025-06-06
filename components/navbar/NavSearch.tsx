'use client';

import { Input } from '../ui/input';
import { useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useState, useEffect } from 'react';

type NavSearchProps = {
  className?: string;
};

function NavSearch({ className }: NavSearchProps) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const currentSearchParam = searchParams.get('search');
  const [search, setSearch] = useState(currentSearchParam ?? '');

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    replace(`/products?${params.toString()}`);
  }, 300);

  useEffect(() => {
    if (!currentSearchParam) {
      setSearch('');
    }
  }, [currentSearchParam]);

  return (
    <Input
      type='search'
      placeholder='wyszukaj produkt...'
      className={`max-w-xs dark:bg-muted ${className ?? ''}`}
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }}
      value={search}
    />
  );
}

export default NavSearch;
