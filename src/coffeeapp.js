import { useEffect, useState } from "react";
import "./App.css"

const CoffeeApp = () => {
    const [coffee, setCoffee] = useState("")

    const getCoffee = async () => {
        let response = await fetch("https://coffee.alexflipnote.dev/random")
        let data = await response.json()
        setCoffee(data.file)
    }

    useEffect(() => {
        getCoffee()
    }, [])

    return (<div>
        <h1 className="App">Coffee</h1>
        {coffee.get ?
        <img src = {coffee.image_url} alt = "No coffee here"></img>
    :
    <p className="App">Loading...</p>}
    <div className="buttonPosition">
            <button onClick={getCoffee}>Get Coffee</button>
    </div>
    </div>)
}

export default CoffeeApp