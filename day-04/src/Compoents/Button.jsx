
import arr from "../utils/dummy";
arr.sort();
export function Button(){
    return (
        <button onClick={arr.sort}>
            Sort by price
        </button>
    )
}
