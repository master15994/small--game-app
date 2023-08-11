import { useState } from "react"


const Game = () => {
    const [playerCount1, setPlayerCount1] = useState(0)
    const [playerCount2, setPlayerCount2] = useState(0)
    return (
        <div>
            <div className="app">
                <div className='column-1'>
                    <div>Марк Твен</div>
                    <div>
                        <input value={playerCount1} />
                    </div>
                    <button onClick={() => {
                        setPlayerCount1(a => a + 1)
                    }}>+</button>
                </div>
                <div className='column-1'>
                    <div>Жюль Верн</div>
                    <div>
                        <input value={playerCount2} />
                    </div>
                    <button onClick={() => {
                        setPlayerCount2(a => a + 1)
                    }}>+</button>
                </div>
                <div>
                    <button className='button-1' onClick={() => {
                        setPlayerCount1(a => a - 1)
                        setPlayerCount2(a => a - 1)
                    }}>-</button>
                </div>
                <div>
                    <button className='button-1' onClick={() => {
                        setPlayerCount1(0)
                        setPlayerCount2(0)
                    }}>
                        reset
                    </button>
                </div>
            </div>
            );

        </div>
    )
}

export default Game