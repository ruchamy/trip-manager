import { APIProvider } from '@vis.gl/react-google-maps';
import Map from '../faetures/map/components/map';
import SearchPoi from '../faetures/search-poi/components/searchPoi';
import Styles from './LocationSystemPage.module.css'
const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
export default function LocationSystemPage() {
    console.log(API_KEY);

    return (
        <APIProvider
            apiKey={API_KEY}
            onError={(error) => console.error(error)}
            onLoad={() => console.log("Maps API loaded")}
        >
            <SearchPoi />
            <div className={Styles.border}>
                <Map />

            </div>
        </APIProvider>
    );
}