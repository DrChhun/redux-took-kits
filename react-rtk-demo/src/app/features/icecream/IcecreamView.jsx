import { useSelector, useDispatch } from "react-redux"
import { ordered, restocked } from "./icecreamSlice"
import { useState } from "react"

export const IcecreamView = () => {
    const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams)
    const [prefer, setPrefer] = useState(1);
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of ice cream - {numOfIcecreams}</h2>
            <input onChange={(e) => setPrefer(e.target.value)} type="number" value={prefer} placeholder="type number you want to restock" />
            <button onClick={() => dispatch(ordered())}>Order ice cream</button>
            <button onClick={() => dispatch(restocked(prefer))}>Restock ice creams</button>
        </div>
    )
}
