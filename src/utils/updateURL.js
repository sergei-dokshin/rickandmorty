export function updateURL(newFilters) {
  const params = new URLSearchParams();

  for (const key in newFilters) {
    if (newFilters[key]) {
      params.set(key, newFilters[key]);
    }
  }

  const queryString = params.toString();
  const newURL = queryString ? `?${queryString}` : '/';

  window.history.pushState(null, '', newURL);
}
