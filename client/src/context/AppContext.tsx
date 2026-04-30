import { createContext, useContext, useState, type ReactNode } from "react";
import type { Poi } from "../faetures/map/types/poi";

interface AppState {
    teacherId: string | null;
    setTeacherId: (id: string) => void;

    locations: Poi[];
    setLocations: React.Dispatch<React.SetStateAction<Poi[]>>;

    upsertLocation: (poi: Poi) => void;
}

const AppContext = createContext<AppState | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [teacherId, setTeacherIdState] = useState<string | null>(() => {
        return localStorage.getItem("teacherId");
    });
    const [locations, setLocations] = useState<Poi[]>([]);
    const setTeacherId = (id: string) => {
        localStorage.setItem("teacherId", id);
        setTeacherIdState(id);
    };
    const upsertLocation = (poi: Poi) => {
        setLocations((prev) => {
            const exists = prev.find((p) => p.key === poi.key);
            if (exists) {
                return prev.map((p) => {
                    if (p.key === poi.key) {
                        poi.isSearched = p.isSearched
                        return poi;
                    }
                    return p;
                }
                );
            }
            return [...prev, poi];
        });
    };

    return (
        <AppContext.Provider
            value={{
                teacherId,
                setTeacherId,
                locations,
                setLocations,
                upsertLocation,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error("useApp must be used inside AppProvider");
    return context;
};