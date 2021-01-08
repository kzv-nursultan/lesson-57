import React from 'react';

const GroupOrderItem = props => {
    return (
        <div className="p-3 d-flex justify-content-between">
            {props.text}:<input onChange={props.filled}/>
        </div>
    );
};

export default GroupOrderItem;