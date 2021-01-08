import React from 'react';
import IndividualBottom from '../IndividualBottom/IndividualBottom';


const IndividualOrderHandler = props =>{

    const onChangeName = (e,i) =>{
        const newPersonCopy = [...props.newPerson];
        const personCopy = {...props.newPerson[i]};
        personCopy.name = e.target.value;
        newPersonCopy[i] = personCopy;
        (props.setNewPerson)(newPersonCopy);
    }

    const onChangePrice = (e,i) =>{
        const newPersonCopy = [...props.newPerson];
        const personCopy = {...props.newPerson[i]};
        personCopy.price = parseInt(e.target.value);
        newPersonCopy[i] = personCopy;
        (props.setNewPerson)(newPersonCopy);
    }

    const removePerson = i =>{
        const newPersonCopy = [...props.newPerson];
        newPersonCopy.splice(i,1);
        (props.setNewPerson)(newPersonCopy);
    }

    return(
            <div>
                {Object.keys(props.newPerson).map((person,i)=>(
                    <div className="p-3 d-flex justify-content-around align-items-center" key={i}>

                    <p> <input type="text" value={person.name} placeholder='Name' onChange={(e)=> onChangeName(e,i)}/></p>
          
                    <p> <input value={person.price} placeholder='Price' onChange={(e)=>onChangePrice(e,i)}/></p>
          
                    <p>
                                
                        <button className="btn btn-danger text-white m-3"
                          onClick={()=>removePerson(i)}>
                        Delete
                        </button>
          
                      </p>
                 </div>
                ))}
                <div>
                    <button className="btn btn-warning text-white m-3 font-weight-bold"
                           onClick={props.addItem}>
                            Add Person
                    </button>
                </div>
                <div><IndividualBottom newPerson={props.newPerson}/></div>
            </div>
       
    )
}

export default IndividualOrderHandler;