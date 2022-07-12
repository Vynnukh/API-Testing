import { useEffect, useState } from "react";
import "./App.css"

const CatApp = () => {
    const [fact, setFact] = useState("")


const catFact = async () => {
    let response = await fetch("https://meowfacts.herokuapp.com/")
    let array= await response.json()
    setFact(array.data)
}

useEffect(() => {
    catFact()
}, [])

return (
    <div>
        <h1 className="App">Cat Fact</h1>
        {fact.get ?
        <p className="App">{fact.get}</p>
    :
    <p className="App">Loading...</p>
    }
        <div className="buttonPosition">
        <button onClick={catFact}>Cat Fact</button>
        </div>
    </div>
)
}
export default CatApp