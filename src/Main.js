import React from 'react'
import list from './list'
const Main = () => {
    
    const [first, setfirst] = React.useState("X")
    const [res, setRes] = React.useState("")

    function checkRows() {
        if ((list[0].value && list[1].value && list[2].value) && (list[0].value === list[1].value && list[0].value === list[2].value)) {
            setfirst(`${list[0].value} won`)
            setRes(`${list[0].value} won`)
        }
        else if ((list[3].value && list[4].value && list[5].value) &&
            (list[3].value === list[4].value &&
                list[3].value === list[5].value)) {
            setfirst(`${list[3].value} won`)
            setRes(`${list[3].value} won`)
        }
        else if ((list[6].value && list[7].value && list[8].value) && (list[6].value === list[7].value && list[6].value === list[8].value)) {
             setfirst(`${list[6].value} won`)
             setRes(`${list[6].value} won`)
        } 
    }
    function checkColumns() {
        if ((list[0].value && list[3].value && list[6].value) && (list[0].value === list[3].value && list[0].value === list[6].value)) {
            setfirst(`${list[0].value} won`)
            setRes(`${list[0].value} won`)
        }
        else if ((list[1].value && list[4].value && list[7].value) &&
            (list[1].value === list[4].value &&
                list[1].value === list[7].value)) {
            setfirst(`${list[1].value} won`)
            setRes(`${list[1].value} won`)
        }
        else if ((list[2].value && list[5].value && list[8].value) && (list[2].value === list[5].value && list[2].value === list[8].value)) {
            setfirst(`${list[2].value} won`)
            setRes(`${list[2].value} won`)
        } 
    }
    function checkDiagonal() {
        if ((list[0].value && list[4].value && list[8].value) && (list[0].value === list[4].value && list[0].value === list[8].value)) {
            setfirst(`${list[0].value} won`)
            setRes(`${list[0].value} won`)
        }
        else if ((list[2].value && list[4].value && list[6].value) && (list[2].value === list[4].value && list[2].value === list[6].value)) {
            setfirst(`${list[2].value} won`)
            setRes(`${list[2].value} won`)
        }
        
    }
    function checkTie() {
        if (list[0].value && list[1].value && list[2].value && list[3].value && list[4].value && list[5].value && list[6].value && list[7].value && list[8].value) {
        setfirst("Tie")
        setRes("Tie")
        }
    }
    
    
    function handleInput(id) {
        for (const elem of list) {
            if (elem.id === id && elem.value === "") {
                elem.value = `${first}`
                if (first === "X") {
                    setfirst("O")    
                }    
                if (first === "O") {
                    setfirst("X")   
                }
            }
            checkRows()
            checkColumns()
            checkDiagonal()
            checkTie()
        }
    }
    return (
        <main>
            <h1 className='TicTacToe__title'>Tic Tic Tac Tac Toe Toe</h1>
            <h2 className={first.includes("X") ? "TicTacToe__description--red" :"TicTacToe__description--blue" }> {first} </h2>
            <div className="TicTacToe__container">
                <div className={res?(res.includes("X") ?'TicTacToe__result--red':"TicTacToe__result--blue"):"TicTacToe__result"} > {res} </div>
                {list.map(item =>
                <div 
                    className={item.value===""? "box": (item.value.includes("X")? "box Xbox":"box Obox") }
                    onClick={()=>handleInput(item.id)} key={item.id} >
                    {item.value}
                </div>
            )}
            </div>
        </main>
    )    
}
export default Main