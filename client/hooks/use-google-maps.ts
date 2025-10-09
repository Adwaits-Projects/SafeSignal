import { useEffect, useState } from "react";

type LoaderStatus = "idle" | "loading" | "ready" | "error";

declare global {
  interface Window {
    google?: any;
  }
}

const SCRIPT_ID = "google-maps-script";

export const useGoogleMaps = () => {
  const [status, setStatus] = useState<LoaderStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.google?.maps) {
      setStatus("ready");
      return;
    }

    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
      setStatus("error");
      setError("Missing Google Maps API key. Set VITE_GOOGLE_MAPS_API_KEY in your env variables.");
      return;
    }

    const existingScript = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

    const handleLoad = () => {
      setStatus("ready");
    };
    const handleError = () => {
      setStatus("error");
      setError("Failed to load Google Maps. Check your API key and network connection.");
    };

    if (existingScript) {
      if (window.google?.maps) {
        setStatus("ready");
      } else {
        setStatus("loading");
        existingScript.addEventListener("load", handleLoad);
        existingScript.addEventListener("error", handleError);
      }

      return () => {
        existingScript.removeEventListener("load", handleLoad);
        existingScript.removeEventListener("error", handleError);
      };
    }

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=geometry,places`;
    script.async = true;
    script.defer = true;
    script.addEventListener("load", handleLoad);
    script.addEventListener("error", handleError);

    document.body.appendChild(script);
    setStatus("loading");

    return () => {
      script.removeEventListener("load", handleLoad);
      script.removeEventListener("error", handleError);
    };
  }, []);

  return { status, error };
};
