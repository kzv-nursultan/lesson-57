import React,{useState}from 'react';

const IndividualBottom = props =>{
    const [additionalValues, setAdditionalValues] = useState([{tips:0, delivery:0}])

    const onChangeTip = (e,i) =>{
        const additionalValuesCopy = [...additionalValues];
        const additionalValueCopy = {...additionalValues[i]};
        const key = (Object.keys(additionalValueCopy));
        additionalValueCopy[key[0]] = parseInt(e.target.value);
        additionalValuesCopy[i] = additionalValueCopy;
        setAdditionalValues(additionalValuesCopy);
    }

    const onChangeDelivery = (e,i) =>{
        const additionalValuesCopy = [...additionalValues];
        const additionalValueCopy = {...additionalValues[i]};
        const key = (Object.keys(additionalValueCopy));
        additionalValueCopy[key[1]] = parseInt(e.target.value);
        additionalValuesCopy[i] = additionalValueCopy;
        setAdditionalValues(additionalValuesCopy);
    }

    const countAll = () =>{
        alert('Не хватило времени для последней функции')
    }
    return(
       <div className="p-3 d-flex flex-column justify-content-center">
            {Object.keys(additionalValues).map(i=>(
               <div key={i}>
                    <p>Процент Чаевых:<input  onChange={(e)=>onChangeTip(e,i)}/></p>
                    <p>Доставка: <input  onChange={(e)=>onChangeDelivery(e,i)}/></p>
               </div>
            ))}
            <p>
                <button className="btn btn-primary"
                onClick={countAll}>
                    Рассчитать
                </button>
            </p>
       </div>
    )
};

export default IndividualBottom;