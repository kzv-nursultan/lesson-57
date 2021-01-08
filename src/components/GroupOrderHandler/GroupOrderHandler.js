import React from 'react';
import ButtonCount from '../ButtonCount/ButtonCount';
import GroupOrderItem from "../GroupOrderItem/GroupOrderItem";

const GroupOrderHandler = props => {
    const options = props.options;

  

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
            <div>
                <ButtonCount options = {options}/>
            </div>
        </>
    );
};

export default GroupOrderHandler;