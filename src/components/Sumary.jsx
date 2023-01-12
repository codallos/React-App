import './css/Summary.css'
const Summary = function ({totalMeters, count}) {
    
    const f = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency:'USD',
        minimumFractionDigits: 2
      });

    return (
        <div className="main__sumary">
            <span className="main__sumary-text">Summary</span>
            <div className="main__calculator">
                <div className="main__left">
                    <span>Total Items</span>
                    <span>Total m²</span>
                    <span>Subtotal</span>
                    <span>Tax</span>
                    <span>Total</span>
                    <span>Due Today 50%</span>
                </div>
                <div className="main__right">
                    <span>{count}</span>
                    <span>{Math.abs(parseFloat(totalMeters).toFixed(2))}</span>
                    <span>{f.format(Math.abs(totalMeters * 200))}</span>
                    <span>{f.format(Math.abs(totalMeters * 200 * 0.16))}</span>
                    <span>
                        {f.format(
                            Math.abs(
                                totalMeters * 200 + totalMeters * 200 * 0.16
                            )
                        )}
                    </span>
                    <span>
                        {f.format(
                            Math.abs(
                                (totalMeters * 200 + totalMeters * 200 * 0.16) * 0.5
                            )
                        )}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Summary