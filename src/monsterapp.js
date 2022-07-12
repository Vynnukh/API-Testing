import { useEffect, useState } from "react";
import "./App.css"

const MonsterApp = () => {
    const [monster, setMonster] = useState("")

    const getMonster = async () => {
        let response = await fetch("https://app.pixelencounter.com/api/basic/monsters/random")
        let data = await response.json()
        setMonster(data.pattern)
    }

    useEffect(() => {
        getMonster()
    }, [])

    return(<div>
        <h1 className="App">Monster</h1>
        {monster.get ?
        <img src = {monster.image_url} alt = "This is an image of a monster"></img>
    :
    <p className="App">Loading...</p>
    }
    <div className="buttonPosition">
        <button onClick={getMonster}>Get Monster</button>
    </div>
    </div>)
}

export default MonsterApp