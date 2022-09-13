import React from "react"
import { ReactDOM } from "react"
import memesData from "./memesData.js"

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("")
    const [dogColor, setDogColor] = React.useState("")
    /**
     * Challenge: Save the random meme URL in state
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */
    
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const memesArrayFBlack = memesArray.filter(function (el) {
            return el.color === 0;
        })
        const randomNumber = Math.floor(Math.random() * memesArrayFBlack.length)
        setMemeImage(memesArrayFBlack[randomNumber].url)
        console.log(memeImage)
        
    }

    function white() {
        const memesArray = memesData.data.memes
        const memesArrayFWhite = memesArray.filter(function (el) {
            return el.color === 1;
        })
        const randomNumber = Math.floor(Math.random() * memesArrayFWhite.length)
        setMemeImage(memesArrayFWhite[randomNumber].url)
    }

    function brown() {
        const memesArray = memesData.data.memes
        const memesArrayFBrown = memesArray.filter(function (el) {
            return el.color === 3;
        })
        const randomNumber = Math.floor(Math.random() * memesArrayFBrown.length)
        setMemeImage(memesArrayFBrown[randomNumber].url)
    }

    
    return (
        <main>
            <div className="form">
                <div className="h2div">
                    <h2>COLOR</h2>
                </div>
                <div className="formbuttons">
                    <button 
                        className="form--button"
                        onClick={getMemeImage}
                    > <img src="dachshund-svgrepo-com.svg" width={"80px"} className="blackcolor"></img>
                    </button>
                    <button
                    className="form--button"
                    onClick={white}
                    > <img src="perroblanco.svg" width={"80px"} className="whitecolor"></img>
                    </button>
                    <button className="form--button"
                    onClick={brown}>
                        <img src="perrom.svg" width={"80px"} className="browncolor"></img>
                    </button>
                </div>
            </div>
            <div className="divImage">
            <img src={memeImage} className="meme--image" />
            </div>
            
        </main>
    )
}