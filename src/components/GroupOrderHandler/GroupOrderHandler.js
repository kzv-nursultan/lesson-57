import React from 'react';
import GroupOrderItem from "../GroupOrderItem/GroupOrderItem";

const GroupOrderHandler = props => {
    const options = props.options

    const countBills = options =>{
        
    };
    return (
        <>
            <div>
            {Object.keys(options).map((i)=>(
                <GroupOrderItem
                key={i} 
                text={Object.keys(options[i])}
                filled={(e)=>props.fillForm(e,i)}/>
            ))}
            </div>
            <button className="btn btn-primary mb-3 font-weight-bold"
                    onClick={()=>countBills(options)}>
                Рассчитать
            </button>
        </>
    );
};

export default GroupOrderHandler;