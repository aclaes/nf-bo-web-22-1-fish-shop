export function useFetch() {
  return async (url, options) => {
    try {
      const result = await fetch(url, options);
      return await result.json();
    } catch (error) {
      console.error(error);
    }
  };
}
