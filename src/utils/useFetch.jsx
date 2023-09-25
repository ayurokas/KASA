// Ce code définit un hook personnalisé `useFetch` pour effectuer des requêtes HTTP.
// Il gère trois états  : les données récupérées, le statut de chargement et les éventuelles erreurs.
// Le hook déclenche une récupération de données à chaque changement d'URL fournie.

import { useState, useEffect } from "react";

// Définition d'un hook personnalisé appelé useFetch pour récupérer des données depuis une URL
export function useFetch(url) {
  const [data, setData] = useState({}); 
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false); 

  // Utilisation de useEffect pour déclencher la récupération des données lorsque l'URL change
  useEffect(() => {
    if (!url) return;
    setLoading(true);

    async function fetchData() {
      try {
        // Essayer de récupérer les données depuis l'URL fournie
        const response = await fetch(url);
        const data = await response.json();

        // Mettre à jour l'état avec les données récupérées
        setData(data);
      } catch (err) {
        // En cas d'erreur lors de la récupération, afficher l'erreur dans la console et mettre à jour l'état d'erreur
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    // Appeler la fonction pour démarrer la récupération des données
    fetchData();
  }, [url]);  // La récupération est déclenchée à chaque fois que l'URL change

  return { data, isLoading, error };
}
