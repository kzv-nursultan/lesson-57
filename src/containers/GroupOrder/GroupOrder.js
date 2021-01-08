import React,{useState} from 'react';
import GroupOrderHandler from "../../components/GroupOrderHandler/GroupOrderHandler";

const GroupOrder = () => {

    const [options, setOptions]=useState([
        {'Количество Человек':0},
        {'Сумма Заказа':0},
        {'Процент Чаевых':0},
        {'Доставка':0}
    ]);


    const fillForms = (e,i) =>{
        const optionsCopy = [...options];
        const optionCopy = {...options[i]};
        const key = (Object.keys(optionCopy));
        optionCopy[key] = parseInt(e.target.value);
        optionsCopy[i] = optionCopy;
        setOptions(optionsCopy);
    }
    return (
        <div>
            <GroupOrderHandler 
            options={options}
            fillForm = {fillForms}/>
        </div>
    );
};

export default GroupOrder;