// Ce code définit un hook personnalisé pour récupérer des données depuis une URL.
// Il inclut également une spécialisation pour obtenir des informations sur les hébergements.

import { useFetch } from "./useFetch";

export function useAccommodation() {
  const { data, isLoading, error } = useFetch(`../../data/accommodations.json`);
  return { data, isLoading, error };
}
