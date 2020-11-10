import React, { useState } from 'react'

export default function Counter(props) {
    // const [count, setCount] = useState(0);
    const [count, setCount] = useState(props.initVal);
    const [thing, setThing] = useState()
    // const hey = 2 // can't change
    // var hey2 = 3 // weird scoping -- could redefine by accident
    // let hey3 = 4 // what you should use -- Ish
    // // doing "let hey3 = 10000" would not be ok
    // // but "var hey2 = 10000" won't give you an error

    // let obj = {
    //     pancakes: "hi",
    //     wow: "whoo"
    // } // similar to dict in Python 
    // let thingy = obj.pancakes // will be "hi"
    // let blogs = [
    //     {
    //         "title": "hua",
    //         "text": ""
    //     },
    //     {}
    // ]

    // for (let i = 0; i < 10; i++) {
    //     console.log("BUAHAHHAHAHAHA")
    // }

    // for (let [keys, values] in Objects.entries(obj)) {

    // }

    // obj.map(() => { console.log('what') })


    // const saomething = () => {
    //     console.log("what")
    // }

    // function something() {
    //     let thing = new Promise((resolve, reject) =>{
    //         //logic
    //         resolve(value)
    //         reject(err)
    //     })
    //     .then((res) => { console.log(res)})
    //     .catch((err) => {console.log(err)})
    //     // 1. processing
    //     // 2. fail
    //     // 3. resolve (give something back to "thing")

    //     // if original promise OR .then promise fails, will go to line 43 .catch
    // }

    // async function bruh() {
    //     await res = mongodb.getEntry(() => {

    //     }) // until res gets something back, won't move on to next commands
    // }

    return (
        <div>
            the count is : {count}
            <button onClick={() => { setCount(poo => poo + 1) }}>increase</button>
            <button onClick={() => { setCount(st => st - 1) }}>decrease</button>
            {count < 0 && <div style={{ color: 'red' }}>count is less than 0</div>}
            <input></input>
        </div>
    )
}
