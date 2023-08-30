import { useFetch } from "./useFetch";

export function useAccommodation() {
  const { data, isLoading, error } = useFetch(`../../data/accommodations.json`);
  return { data, isLoading, error };
}
