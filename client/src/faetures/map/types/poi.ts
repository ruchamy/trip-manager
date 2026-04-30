export type Poi = {
    key: string,
    location: {
        lng: number
        lat: number,
    },
    tyme: string,
    isDistance?: boolean,
    isSearched?: boolean,
}
