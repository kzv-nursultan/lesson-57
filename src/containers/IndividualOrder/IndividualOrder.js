import React, {useState} from 'react';
import IndividualOrderHandler from '../../components/IndividualOrderHandler/IndividualOrderHandler';

const IndividualOrders = () => {

    const [newPerson, setNewPerson] = useState([{name:'',price:''}]);

    const addPerson = () =>{
        setNewPerson([...newPerson, {name:'',price:''}]);
    }

   

    return (
        <div>
            <div>
                <IndividualOrderHandler 
                newPerson={newPerson}
                setNewPerson={setNewPerson}
                addItem={addPerson}
                />
                
            </div>
        </div>
    );
};

export default IndividualOrders;