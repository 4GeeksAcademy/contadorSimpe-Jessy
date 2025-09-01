import React, { useEffect, useState } from "react";

const SimpleCounter = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prevSecondsState) => prevSecondsState + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

const formatNumber = (numero) => {
    return Math.max (0,numero).toString().padStart(6,"0")
}

    return (
        <div className="text-center">
            <div className="reloj">
                <i class="fa-regular fa-clock"></i>
            </div>
            <p className="one"><strong>⏲️{formatNumber(seconds)}</strong></p>
        </div>
    )
}

export default SimpleCounter