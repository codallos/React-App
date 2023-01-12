import './css/Main.css'
import { useState } from "react";
import data from "./data";
import Summary from "./Sumary";
import MainTitle from "./MainTitle";
import Buttons from './Buttons';

function Main() {
    const [count, setCount] = useState(0);
    let [totalMeters, setTotalMeters] = useState(0);

    const addeRmove = function (e, meters) {
        let itemCount = parseInt(0);

        if (e.target.type === "button" && e.target.innerText === "+") {
            itemCount = parseInt(e.target.previousSibling.value) + parseInt(1);
            e.target.previousSibling.value = itemCount;
            setCount(count + 1);
            setTotalMeters((totalMeters = meters + totalMeters));
            
        } else if (e.target.nextSibling.value > 0) {
            itemCount = parseInt(e.target.nextSibling.value) - parseInt(1);
            e.target.nextSibling.value = itemCount;
            setCount(count - 1);
            setTotalMeters((totalMeters = totalMeters - meters));
        }
    };

    // const reset = function () {
    //     let cards = document.querySelectorAll(".main__count");
    //     cards = [...cards];
    //     cards.forEach((card) => {
    //         card.value = 0;
    //     });

    //     setCount(count - count);
    //     setTotalMeters(totalMeters - totalMeters);
    // };

    return (
        <main className="main">
            <MainTitle />
            <div className="main__items" id="main__items">
                {data.map((item, index) => (
                    <div className="main__card" key={index}>
                        <div className="main__item">
                            <div className="main__item-container">
                                <img src={item.path} className="main_item-logo" alt={item.name}/>
                            </div>
                            <span className="main__item-name">{item.name}</span>
                        </div>
                        <div className="main__barra">
                            <button
                                type="button"
                                className="main__button main__menos"
                                onClick={(e) => {
                                    addeRmove(e, item.meters);
                                }}
                            > - </button>
                            <input
                                className="main__count"
                                type="number"
                                name="number"
                                defaultValue={0}
                                min={0}
                                readOnly
                            />
                            <button type="button" 
                                    className="main__button main__mas" 
                                    onClick={(e) => {addeRmove(e, item.meters);}}
                            >+</button>
                        </div>
                    </div>
                ))}
            </div>
            <Buttons count={count} setCount={setCount} totalMeters={totalMeters} setTotalMeters={setTotalMeters}/>
                {/* <button type='button' className="main__button-clear" onClick={reset}>
                    CLEAR
                </button>
                <button type='button' className="main__button-calculate">CALCULATE</button> */}
            <Summary count={count} totalMeters={totalMeters} />
        </main>
    );
}

export default Main;
