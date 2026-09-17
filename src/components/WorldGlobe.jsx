import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Globe from 'react-globe.gl';
import * as topojson from 'topojson-client';

// Your location (Kigali, Rwanda)
const RWANDA_COORDINATES = { lat: -1.9441, lng: 30.0619, name: "Kigali, Rwanda" };

// Global tech hubs
const TECH_HUBS = [
  { lat: 37.7749, lng: -122.4194, name: "San Francisco", country: "United States" },
  { lat: 51.5074, lng: -0.1276, name: "London", country: "United Kingdom" },
  { lat: 52.5200, lng: 13.4050, name: "Berlin", country: "Germany" },
  { lat: 25.2048, lng: 55.2708, name: "Dubai", country: "United Arab Emirates" },
  { lat: -1.2921, lng: 36.8219, name: "Nairobi", country: "Kenya" },
  { lat: 6.5244, lng: 3.3792, name: "Lagos", country: "Nigeria" },
  { lat: 12.9716, lng: 77.5946, name: "Bangalore", country: "India" },
  { lat: 35.6895, lng: 139.6917, name: "Tokyo", country: "Japan" },
  { lat: -33.8688, lng: 151.2093, name: "Sydney", country: "Australia" },
  { lat: 48.8566, lng: 2.3522, name: "Paris", country: "France" },
  { lat: 40.7128, lng: -74.0060, name: "New York", country: "United States" },
  { lat: 1.3521, lng: 103.8198, name: "Singapore", country: "Singapore" },
];

// Connection arcs
const ARCS = TECH_HUBS.map((hub) => ({
  startLat: RWANDA_COORDINATES.lat,
  startLng: RWANDA_COORDINATES.lng,
  endLat: hub.lat,
  endLng: hub.lng,
  hubName: hub.name,
  hubCountry: hub.country,
}));

const WorldGlobe = () => {
  const globeRef = useRef();
  const containerRef = useRef();
  const [isReady, setIsReady] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 600, height: 600 });
  const [countries, setCountries] = useState([]);
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [hoveredHub, setHoveredHub] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  // Load country polygons from TopoJSON
  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
      .then((res) => res.json())
      .then((topology) => {
        const geojson = topojson.feature(topology, topology.objects.countries);
        setCountries(geojson.features);
      })
      .catch((err) => console.error('Failed to load countries:', err));
  }, []);

  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setDimensions({ width, height: width });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Configure globe controls
  useEffect(() => {
    if (globeRef.current && isReady) {
      const controls = globeRef.current.controls();

      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.35;
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.enableDamping = true;
      controls.dampingFactor = 0.08;
      controls.rotateSpeed = 0.7;
      controls.minPolarAngle = Math.PI / 6;
      controls.maxPolarAngle = (5 * Math.PI) / 6;

      globeRef.current.pointOfView(
        { lat: RWANDA_COORDINATES.lat, lng: RWANDA_COORDINATES.lng, altitude: 2.5 },
        1500
      );

      const renderer = globeRef.current.renderer();
      if (renderer) {
        renderer.setClearColor(0x000000, 0);
        renderer.setClearAlpha(0);
        renderer.domElement.style.background = 'transparent';
        renderer.domElement.style.cursor = 'grab';
      }
    }
  }, [isReady]);

  // Track mouse position
  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div
      className="relative w-full flex items-center justify-center"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-400/15 via-transparent to-primary-600/15 rounded-full blur-3xl scale-90 pointer-events-none"></div>

      {/* Globe */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative globe-wrapper"
        style={{ width: dimensions.width, height: dimensions.height }}
      >
        <Globe
          ref={globeRef}
          width={dimensions.width}
          height={dimensions.height}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          backgroundColor="rgba(0,0,0,0)"

          // ---- COUNTRY POLYGONS ----
          polygonsData={countries}
          polygonAltitude={(d) =>
            hoveredCountry === d ? 0.015 : 0.005
          }
          polygonCapColor={(d) => {
            if (hoveredCountry === d) return 'rgba(59, 130, 246, 0.4)';
            if (d.properties?.name === 'Rwanda') return 'rgba(37, 99, 235, 0.3)';
            return 'rgba(0, 0, 0, 0)';
          }}
          polygonSideColor={() => 'rgba(0, 0, 0, 0)'}
          polygonStrokeColor={(d) =>
            d.properties?.name === 'Rwanda'
              ? 'rgba(37, 99, 235, 1)'
              : 'rgba(255, 255, 255, 0.4)'
          }
          polygonLabel={(d) => d.properties?.name || 'Unknown'}
          onPolygonHover={(polygon) => {
            setHoveredCountry(polygon || null);
            if (polygon) setHoveredHub(null);
          }}
          polygonsTransitionDuration={200}

          // ---- ATMOSPHERE ----
          showAtmosphere={true}
          atmosphereColor="#3b82f6"
          atmosphereAltitude={0.15}

          // ---- ARCS ----
          arcsData={ARCS}
          arcColor={() => ['rgba(59, 130, 246, 0.9)', 'rgba(96, 165, 250, 0.3)']}
          arcDashLength={0.5}
          arcDashGap={0.15}
          arcDashAnimateTime={2000}
          arcStroke={0.5}
          arcAltitude={0.18}
          onArcHover={(arc) => {
            if (arc) {
              setHoveredHub({ name: arc.hubName, country: arc.hubCountry });
              setHoveredCountry(null);
            } else {
              setHoveredHub(null);
            }
          }}

          // ---- POINTS ----
          pointsData={[
            { ...RWANDA_COORDINATES, size: 0.7, color: '#2563eb', isMe: true },
            ...TECH_HUBS.map((hub) => ({ ...hub, size: 0.35, color: '#60a5fa' })),
          ]}
          pointAltitude={0.02}
          pointRadius={(d) => d.size}
          pointColor={(d) => d.color}
          pointResolution={16}
          onPointHover={(point) => {
            if (point) {
              if (point.isMe) {
                setHoveredHub({ name: 'Kigali', country: 'Rwanda', isMe: true });
              } else {
                setHoveredHub({ name: point.name, country: point.country });
              }
              setHoveredCountry(null);
            } else {
              setHoveredHub(null);
            }
          }}

          // ---- RINGS ----
          ringsData={[
            {
              lat: RWANDA_COORDINATES.lat,
              lng: RWANDA_COORDINATES.lng,
              maxR: 6,
              propagationSpeed: 2,
              repeatPeriod: 1200,
            },
          ]}
          ringColor={() => (t) => `rgba(37, 99, 235, ${Math.max(0, 0.7 - t * 0.7)})`}
          ringMaxRadius={6}
          ringPropagationSpeed={2}
          ringRepeatPeriod={1200}
          ringAltitude={0.025}

          onGlobeReady={() => setIsReady(true)}
        />
      </motion.div>

      {/* ---- TOOLTIP ---- */}
      {(hoveredCountry || hoveredHub) && (
        <div
          className="absolute pointer-events-none z-30 transform -translate-x-1/2 -translate-y-full"
          style={{
            left: tooltipPos.x,
            top: tooltipPos.y - 15,
          }}
        >
          <div className="bg-gray-900/95 backdrop-blur-sm text-white rounded-lg px-3 py-2 shadow-2xl border border-gray-700/50 min-w-[120px]">
            {hoveredHub ? (
              <div>
                <p className="font-semibold text-sm flex items-center gap-1.5">
                  {hoveredHub.isMe ? <span>🇷🇼</span> : <span>💼</span>}
                  {hoveredHub.name}
                </p>
                <p className="text-xs text-gray-300">{hoveredHub.country}</p>
                {hoveredHub.isMe && (
                  <p className="text-xs text-primary-400 mt-0.5 font-medium">
                    ● My Location
                  </p>
                )}
              </div>
            ) : (
              <div>
                <p className="font-semibold text-sm flex items-center gap-1.5">
                  <span>🌍</span>
                  {hoveredCountry?.properties?.name || 'Unknown'}
                </p>
                {hoveredCountry?.properties?.name === 'Rwanda' && (
                  <p className="text-xs text-primary-400 mt-0.5 font-medium">
                    ● My Country
                  </p>
                )}
              </div>
            )}
            {/* Arrow */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900/95 rotate-45 border-r border-b border-gray-700/50"></div>
          </div>
        </div>
      )}

      {/* Hint */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-100 text-xs text-gray-600 font-medium pointer-events-none"
      >
        <span className="w-2 h-2 bg-primary-600 rounded-full animate-pulse"></span>
        <span>Drag to rotate · Hover to explore</span>
      </motion.div>
    </div>
  );
};

export default WorldGlobe;