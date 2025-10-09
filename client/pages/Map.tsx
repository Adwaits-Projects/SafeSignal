import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Compass, MapPin, Navigation, RadioReceiver, ShieldHalf } from "lucide-react";
import { useGoogleMaps } from "@/hooks/use-google-maps";

const campusLocations = [
  {
    name: "Main Gate Security",
    description: "Primary checkpoint with two rapid-response patrol vehicles on standby.",
    coords: { lat: 12.819518, lng: 80.045995 },
    status: "Ready",
  },
  {
    name: "Tech Park Labs",
    description: "24/7 labs monitored for late-night project sessions with volunteer escorts.",
    coords: { lat: 12.822689, lng: 80.043812 },
    status: "Patrol scheduled",
  },
  {
    name: "Medical Centre",
    description: "Emergency care unit integrated with SafeSignal triage workflows.",
    coords: { lat: 12.821836, lng: 80.046917 },
    status: "On call",
  },
  {
    name: "Girls Hostel - J Block",
    description: "Night wardens and student allies coordinate safe walk-backs after curfew.",
    coords: { lat: 12.819748, lng: 80.042673 },
    status: "Guarded",
  },
  {
    name: "Library Plaza",
    description: "Peak-evening safe zone with panic beacons and student volunteer desk.",
    coords: { lat: 12.82091, lng: 80.04603 },
    status: "Active",
  },
];

const defaultIcon = {
  path: 0.5,
  scale: 10,
  fillColor: "#2563EB",
  fillOpacity: 0.9,
  strokeColor: "#ffffff",
  strokeWeight: 2,
};

const activeIcon = {
  ...defaultIcon,
  scale: 13,
  fillColor: "#EA3943",
};

declare global {
  interface Window {
    google: any;
  }
}

const MapPage = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const googleMapInstance = useRef<any>(null);
  const markersRef = useRef<Record<string, any>>({});
  const { status, error } = useGoogleMaps();
  const [selectedLocation, setSelectedLocation] = useState(campusLocations[0]);

  const bounds = useMemo(() => {
    if (typeof window === "undefined" || !window.google?.maps) {
      return null;
    }
    const mapBounds = new window.google.maps.LatLngBounds();
    campusLocations.forEach((location) => mapBounds.extend(location.coords));
    return mapBounds;
  }, [status]);

  useEffect(() => {
    if (status !== "ready" || !mapRef.current || googleMapInstance.current) {
      return;
    }

    const map = new window.google.maps.Map(mapRef.current, {
      center: selectedLocation.coords,
      zoom: 16,
      disableDefaultUI: true,
      styles: [
        { featureType: "poi", stylers: [{ visibility: "off" }] },
        { featureType: "transit", stylers: [{ visibility: "off" }] },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#ffffff" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#606370" }],
        },
        {
          featureType: "administrative",
          elementType: "labels.text.fill",
          stylers: [{ color: "#374151" }],
        },
      ],
    });

    googleMapInstance.current = map;

    campusLocations.forEach((location) => {
      const marker = new window.google.maps.Marker({
        map,
        position: location.coords,
        title: location.name,
        icon: defaultIcon,
        animation: window.google.maps.Animation.DROP,
      });

      marker.addListener("click", () => {
        setSelectedLocation(location);
        map.panTo(location.coords);
      });

      markersRef.current[location.name] = marker;
    });

    if (bounds) {
      map.fitBounds(bounds);
    }
  }, [status, bounds, selectedLocation.coords]);

  useEffect(() => {
    if (!googleMapInstance.current) {
      return;
    }

    Object.entries(markersRef.current).forEach(([name, marker]) => {
      marker.setIcon(name === selectedLocation.name ? activeIcon : defaultIcon);
      if (name === selectedLocation.name) {
        marker.setZIndex(googleMapInstance.current.getZoom() + 10);
      }
    });

    googleMapInstance.current.panTo(selectedLocation.coords);
  }, [selectedLocation]);

  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Live coverage
            </span>
            <h1 className="text-4xl font-bold sm:text-5xl">Explore SafeSignal responders across SRM campus.</h1>
            <p className="text-lg text-foreground/70">
              Zoom, drag, and tap markers to reveal guard posts, volunteer hotspots, and medical stations that are synced with SafeSignal mission control.
            </p>
            <div className="frosted-card h-[520px] overflow-hidden rounded-[2.5rem] border border-white/70 shadow-[0_24px_70px_rgba(15,23,42,0.18)] dark:border-white/10 dark:bg-slate-900/70">
              {status === "error" ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center text-foreground/70">
                  <ShieldHalf className="h-10 w-10 text-primary" aria-hidden="true" />
                  <p className="text-lg font-semibold text-foreground">
                    Load the map by setting VITE_GOOGLE_MAPS_API_KEY in your environment variables.
                  </p>
                  <p className="text-sm">
                    Visit project settings → Environment variables and add an API key with Maps JavaScript access.
                  </p>
                </div>
              ) : (
                <div className="relative h-full w-full">
                  {status !== "ready" && (
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-white/80 text-sm font-medium text-foreground/70">
                      <Navigation className="h-6 w-6 animate-spin text-primary" aria-hidden="true" />
                      Loading Google Maps…
                    </div>
                  )}
                  <div ref={mapRef} className="h-full w-full" aria-label="SafeSignal campus map" />
                </div>
              )}
            </div>
          </div>
          <aside className="space-y-6">
            <div className="rounded-[2.5rem] border border-white/70 bg-white/80 p-6 shadow-[0_18px_44px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70">
              <h2 className="text-xl font-semibold text-foreground">Response outposts</h2>
              <p className="mt-2 text-sm text-foreground/65">
                Select a point to view active responders, duty status, and the nearest support services.
              </p>
              <div className="mt-5 space-y-3">
                {campusLocations.map((location) => (
                  <button
                    key={location.name}
                    type="button"
                    onClick={() => {
                      setSelectedLocation(location);
                      if (googleMapInstance.current) {
                        googleMapInstance.current.panTo(location.coords);
                        googleMapInstance.current.setZoom(16);
                      }
                    }}
                    className={`flex w-full items-start justify-between rounded-2xl border px-4 py-4 text-left transition ${
                      selectedLocation.name === location.name
                        ? "border-primary/30 bg-primary/10 text-primary"
                        : "border-foreground/10 bg-white/80 text-foreground/75 hover:border-foreground/25"
                    }`}
                  >
                    <div>
                      <p className="font-semibold text-foreground">{location.name}</p>
                      <p className="text-xs text-foreground/60">{location.description}</p>
                    </div>
                    <span className="ml-4 inline-flex items-center rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                      {location.status}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-white/70 bg-white/80 p-6 shadow-[0_18px_44px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70">
              <div className="flex items-center gap-3">
                <RadioReceiver className="h-10 w-10 rounded-2xl bg-primary/10 p-2 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Selected zone</h3>
                  <p className="text-sm text-foreground/60">{selectedLocation.name}</p>
                </div>
              </div>
              <div className="mt-4 space-y-3 text-sm text-foreground/70">
                <p>{selectedLocation.description}</p>
                <p className="flex items-center gap-2 text-foreground/60">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {selectedLocation.coords.lat.toFixed(4)}, {selectedLocation.coords.lng.toFixed(4)}
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-3 text-sm font-semibold text-foreground/70">
                <Link
                  to={`/report?location=${encodeURIComponent(selectedLocation.name)}`}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-white shadow-lg transition hover:bg-primary/90"
                >
                  Report from this zone
                </Link>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${selectedLocation.coords.lat},${selectedLocation.coords.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/15 bg-white/80 px-5 py-3 text-foreground/80 transition hover:border-foreground/30 hover:bg-white"
                >
                  <Compass className="h-4 w-4" aria-hidden="true" />
                  Navigate with Google Maps
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
