import { useEffect, type JSX } from "react";
import useWebSocketLite from "../hooks/useWebSocket";
import { type Poi } from "../types/poi"
import { AdvancedMarker, Pin } from "@vis.gl/react-google-maps";
import { useApp } from "../../../context/AppContext";
import styles from "./poiMarkers.module.css";

const BASE_URL = import.meta.env.VITE_SERVER_URL

export default function PoiMarkers(): JSX.Element {
    const { locations, upsertLocation } = useApp();

    const ws = useWebSocketLite({
        socketUrl: "ws:" + (BASE_URL || "//localhost:3000"),
    });

    useEffect(() => {
        if (ws.data) {
            const message = ws.data;
            upsertLocation(message);
        }
    }, [ws.data]);

    return (
        <>
            {locations?.map((poi: Poi, index: number) => (
                <AdvancedMarker
                    key={index}
                    title={poi.key}
                    position={poi.location}
                >
                    <div className={styles.title}>
                        <div className={styles.text}>{poi.key}</div>
                        <div style={{ background: "yellow" }}>{poi.key}</div>   {poi.isDistance ? (
                            <Pin background="#ff4d4f" glyphColor="#000000" borderColor="#000000" />
                        ) : poi.isSearched ? (
                            <Pin background="#edaa17" glyphColor="#000000" borderColor="#000000" />
                        ) : (
                            <Pin background="#01a390" glyphColor="#000000" borderColor="#000000" />
                        )}
                    </div>
                </AdvancedMarker>
            ))}
        </>
    );
};