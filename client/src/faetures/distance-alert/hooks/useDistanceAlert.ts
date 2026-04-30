import { useEffect, useState } from "react";
import { useApp } from "../../../context/AppContext";
import type { Poi } from "../../map/types/poi";
export default function useDistanceAlert(): Poi[] {
    const { teacherId, locations } = useApp();
    const [googleLib, setGoogleLib] = useState<any>(null);
    const teacherLocation = locations.find((location) => location.key === teacherId)?.location;

    useEffect(() => {

        const load = async () => {
            if (!window.google) return;

            const { spherical } = await google.maps.importLibrary("geometry");
            setGoogleLib({ spherical });
        };
        load();
    }, []);
    if (!teacherLocation || !googleLib) return [];


    const farLocations = locations.filter((poi) => {
        if (poi.key === teacherId) return false;
        if (!poi.location) return false;
        const distance = googleLib.spherical.computeDistanceBetween(
            new google.maps.LatLng(teacherLocation.lat, teacherLocation.lng),
            new google.maps.LatLng(poi.location.lat, poi.location.lng)
        );
        if (distance >= 3000) {
            poi.isDistance = true;
            return true;
        }
        return false;
    });
    return farLocations;
}
