import { useCallback, useState } from "react";
import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

type SosButtonProps = {
  className?: string;
  size?: "default" | "compact";
};

export const SosButton = ({ className, size = "default" }: SosButtonProps) => {
  const [isRequestingLocation, setIsRequestingLocation] = useState(false);

  const triggerAlert = useCallback(() => {
    if (!("geolocation" in navigator)) {
      window.alert("Geolocation is not supported on this device. Please call emergency services.");
      return;
    }

    setIsRequestingLocation(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
        const messageLines = [
          "🚨 SafeSignal SOS Activated",
          `Coordinates: ${latitude.toFixed(5)}, ${longitude.toFixed(5)}`,
          "Share this link with trusted contacts:",
          mapsUrl,
        ];

        window.alert(messageLines.join("\n"));
        setIsRequestingLocation(false);
      },
      (error) => {
        const fallbackMessage =
          error.code === error.PERMISSION_DENIED
            ? "Location access denied. Enable location permissions or call emergency services immediately."
            : "Unable to fetch coordinates. Please try again or call emergency services.";

        window.alert(fallbackMessage);
        setIsRequestingLocation(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
      },
    );
  }, []);

  return (
    <button
      type="button"
      onClick={triggerAlert}
      disabled={isRequestingLocation}
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden rounded-full font-semibold text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:ring-offset-background",
        size === "default" ? "px-6 py-3 text-base" : "px-4 py-2 text-sm",
        "safe-gradient shadow-[0_18px_40px_rgba(234,57,67,0.35)]",
        "before:absolute before:-inset-1 before:-z-10 before:rounded-full before:bg-primary/70 before:blur-2xl before:opacity-60 before:transition",
        "after:absolute after:-inset-3 after:-z-20 after:rounded-full after:border-2 after:border-primary/60 after:animate-pulse-ring",
        isRequestingLocation ? "opacity-80" : "hover:scale-[1.02] hover:shadow-[0_22px_50px_rgba(234,57,67,0.4)]",
        className,
      )}
    >
      <span className="relative flex items-center gap-2 text-lg">
        <AlertTriangle className="h-5 w-5" aria-hidden="true" />
        <span>{isRequestingLocation ? "Locating…" : "SOS"}</span>
      </span>
    </button>
  );
};

export default SosButton;
