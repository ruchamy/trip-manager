
import { useState } from "react";
import { useApp } from "../../../context/AppContext"
import Styles from "./searchPoi.module.css"
import { GoSearch } from "react-icons/go";
export default function SearchPoi() {
    const locations = useApp().locations
    const [value, setValue] = useState<string>("");
    const hundleSearch = () => {
        let found = false
        locations.map((location) => {
            if (location.key === value) {
                location.isSearched = true;
                found = true
            }
            else
                location.isSearched = false
        })
    }
    return (
        <div className={Styles.searchBar}>
            <input
                className={Styles.input}
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="חיפוש לפי מספר זהות"
            />
            <button className={Styles.button} onClick={hundleSearch} ><GoSearch/></button>
        </div>
    )
}