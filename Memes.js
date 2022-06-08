import React from "react";

    const Meme = () => {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    })

    const [allMemes, setAllMemes] = React.useState([]);

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(data => data.json())
        .then(item => setAllMemes(item.data.memes));
    })

    const getMemeImg = (event) => {
        event.preventDefault();
        const randomNumber = Math.floor(Math.random() * allMemes.length);  // random number upto the length of memesArr
        const url = allMemes[randomNumber].url;

        setMeme(prevState => ({  /** "prevState" here is meme from "line7" */
            ...prevState,
            randomImage : url,  /** updating the state of meme(line 7) with value as url */
        }))
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMeme(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return(
        <main className="main">
            <form action="#" className="form">
                <input type="text"
                       className="top-text"
                       placeholder="Top text"
                       name="topText"
                       value={meme.topText}
                       onChange={handleChange}
                />
                <input type="text"
                       className="bottom-text"
                       placeholder="Bottom text"
                       name="bottomText"
                       value={meme.bottomText}
                       onChange={handleChange}
                />
                <button onClick={getMemeImg} id="btn">Get Meme</button>  
            </form>

            <div className="meme-container">
                <img src={meme.randomImage} alt="meme-img" className="meme-img" onClick={getMemeImg} />

                <h2 className="text-top">{meme.topText}</h2>
                <h2 className="text-bottom">{meme.bottomText}</h2>
            </div>

        </main>
    )
    
    }

export default Meme;