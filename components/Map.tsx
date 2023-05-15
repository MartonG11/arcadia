'use client'

import { Viewer, Entity, Camera, CameraFlyTo, CameraLookAt } from 'resium'
import { Cartesian3, Camera as CCamera, Rectangle } from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css"
import { useEffect, useState } from 'react';

const Map = () => {
  const [location, setLocation] = useState<{ lat: number; long: number } | null>(null);
  const [cameraPosition, setCameraPosition] = useState<Cartesian3 | null>(null);
  const pointGraphics = { pixelSize: 10 };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/location')
      const data = await response.json()
      setLocation(data.location)
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (location) {
      const position = Cartesian3.fromDegrees(location.long, location.lat);
      setCameraPosition(position);
    }
  }, [location]);

  // TODO: Figure out how to center camera properly

  return (
    <Viewer className='w-full'>
      {cameraPosition && (
        <>
          <Camera position={cameraPosition} defaultZoomAmount={0} maximumZoomFactor={10000} />
          <Entity position={cameraPosition} point={pointGraphics} />
        </>
      )}
    </Viewer>
  )
}

export default Map