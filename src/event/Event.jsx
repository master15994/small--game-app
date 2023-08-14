import { useState } from 'react'
import e from './event.module.css'

const Event = () => {

    const [output, setOutput] = useState('i see u')
    // let sentences = '.Dont worry'

    function setButton(arg) {
        console.log('click work' + arg)
    }

    function mouseMove() {
        console.log('mouse move')
    }


    let l = event.target.value




    return (
        <div className={e.wrapper}>
            <h1>Event</h1>
            <section>
                <h2>Button</h2>
                <button onClick={() => setButton('-its argument ')}>Push</button>
            </section>
            <section>
                <h2>On Double Click + mouse move </h2>
                <div className={e.test} onDoubleClick={setButton} onMouseMove={mouseMove}></div>
            </section>
            <section>
                <h2>Input</h2>
                <input type="text" onChange={l} />
            </section>
        </div>
    )
}

export default Event