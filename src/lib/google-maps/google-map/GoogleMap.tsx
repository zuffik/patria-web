import React from 'react';
import { GoogleMap as BaseMap, useJsApiLoader, GoogleMapProps as BaseMapProps } from '@react-google-maps/api';
import {env} from "../../env/Env";

export interface GoogleMapProps extends BaseMapProps {
}

export const GoogleMap: React.FC<GoogleMapProps> = props => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: env.GOOGLE_MAPS_API_KEY,
    mapIds: [env.GOOGLE_MAPS_MAP_ID],
  })
  const containerStyle = React.useMemo(() => ({
    width: '100%',
    height: '100%',
  }), []);
  const [map, setMap] = React.useState<google.maps.Map>(null);

  const onLoad = React.useCallback((map) => {
    setMap(map);
    props.onLoad?.(map);
  }, [])

  const onUnmount = React.useCallback((map) => {
    setMap(null);
    props.onUnmount?.(map);
  }, [])

  return isLoaded ? (
    <BaseMap
      {...props}
      mapContainerStyle={props.mapContainerStyle || containerStyle}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{mapId: env.GOOGLE_MAPS_MAP_ID}}
    >
      {props.children}
    </BaseMap>
  ) : <></>
}
