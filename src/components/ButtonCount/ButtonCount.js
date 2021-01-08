import React from 'react';

const ButtonCount = props =>{
    const options = props.options;

    const countInfo = [];
    let tip = 0;


    let totalAmount = tip =>{
        return(
            (options[1]['Сумма Заказа']) + tip + (options[3]['Доставка'])
        )
    };

    const eachCheck = tip => {
        return(
            Math.ceil( ( (options[1]['Сумма Заказа']) + tip + (options[3]['Доставка']) )/(options[0]['Количество Человек']))
        )
    };

    const countBills = options =>{       
        if(options[2]['Процент Чаевых']>0){
            tip = Math.ceil(((options[1]['Сумма Заказа'])*(options[2]['Процент Чаевых']))/100);
            
            let totalPrice = totalAmount(tip);
            let eachShouldPay = eachCheck(tip); 

            countInfo.push(totalPrice,
                eachShouldPay,
                (options[0]['Количество Человек']));

           alert("Oбщая сумма: "+countInfo[0] +'\n'+ 
           "Каждый должен оплатить: "+countInfo[1] +'\n'+
           "Количество людей: "+countInfo[2]); 

               
        } else {
            let totalPrice = totalAmount(tip);
            let eachShouldPay = eachCheck(tip);
            countInfo.push(totalPrice,
                eachShouldPay,
                (options[0]['Количество Человек']));
            
            alert("Oбщая сумма: "+countInfo[0] +'\n'+ 
                "Каждый должен оплатить: "+countInfo[1] +'\n'+
                "Количество людей: "+countInfo[2]);    
         
        }
    }
    return (
        <div>
            <button className="btn btn-primary mb-3 font-weight-bold"
                    onClick={()=>countBills(options)}
                    disabled={(options[0]['Количество Человек']===0) && (options[1]['Сумма Заказа']===0)}>
                Рассчитать
            </button>
        </div>
    )
};

export default ButtonCount;