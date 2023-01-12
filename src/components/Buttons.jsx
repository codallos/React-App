import './css/Buttons.css'


const Buttons = function({count,setCount,totalMeters,setTotalMeters}){

    const reset = function () {
        let cards = document.querySelectorAll(".main__count");
        cards = [...cards];
        cards.forEach((card) => {
            card.value = 0;
        });

        setCount(count - count);
        setTotalMeters(totalMeters - totalMeters);
    };

    return(
        <div className="main__buttons-container">

             <button type='button' className="main__button-clear" onClick={reset}>
                 CLEAR
             </button>
            <button type='button' className="main__button-calculate"
                >CALCULATE
            </button>

        </div>

    )
}

export default Buttons