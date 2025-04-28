import { useEffect, useState } from 'react';

export function useFiltersUrl() {
  const [filters, setFilters] = useState({
    name: '',
    status: '',
    species: '',
    gender: '',
    type: ''
  });

  function reset() {
    setFilters({
      name: '',
      status: '',
      species: '',
      gender: '',
      type: ''
    });
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    setFilters({
      name: params.get('name') || '',
      status: params.get('status') || '',
      species: params.get('species') || '',
      gender: params.get('gender') || '',
      type: params.get('type') || ''
    });
  }, []);

  return { filters, setFilters, reset };
}
