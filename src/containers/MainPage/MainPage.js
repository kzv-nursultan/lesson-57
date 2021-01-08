import React,{useState} from 'react';
import GroupOrder from "../GroupOrder/GroupOrder";
import IndividualOrders from "../IndividualOrder/IndividualOrder";


const MainPage = () => {
    const [mode, setMode] = useState('first');

    const onRadioChange = event =>{
        setMode(event.target.value)
    }

    return (
        <div>
            <div className="container p-3 bg-success text-white">
                <input
                    type="radio"
                    name="option"
                    value="first"
                    onChange={onRadioChange}
                    checked={mode==="first"}
                /> Поровну между всеми участниками
            </div>
            <div className="container p-3 bg-success text-white">
                <input
                    type="radio"
                    name="option"
                    value="second"
                    onChange={onRadioChange}
                    checked={mode==="second"}
                /> Каждому индивидуально

            </div>
            <div>
                {mode === "first" && (
                    <div className="container bg-secondary text-white">
                        <GroupOrder/>
                    </div>
                )}
                {mode === "second" && (
                    <div className="container bg-info text-white">
                        <IndividualOrders/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainPage;