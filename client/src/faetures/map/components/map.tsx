import { Map as GoogleMap } from '@vis.gl/react-google-maps';
import PoiMarkers from './poiMarkers';
import styles from './map.module.css';
export default function Map() {
    return (
        <div className={styles.container} >
            <GoogleMap
                className={`${styles.map} ${styles.shadow}`}
                defaultCenter={{ lat: 32.0853, lng: 34.7818 }}
                defaultZoom={8}
                mapId='DEMO_MAP_ID'
                gestureHandling="greedy"
                disableDefaultUI={true}
            >
                <PoiMarkers />
            </GoogleMap>
        </div>
    );
}