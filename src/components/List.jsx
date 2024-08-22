import React from 'react';

const List = () => {
 
    const fruits = [{id: 1, name: "apple",  calories: 95}, 
                  {id: 2,name: "orange", calories: 45},
                  {id: 3,name: "banana", calories : 105}];

                //   fruits.sort((a,b)=> a.name.localeCompare(b.name));  ALPHABETICAL
                // fruits.sort((a,b)=> b.name.localeCompare(a.name));     REVERSE ALPHABETICAL
                // fruits.sort((a,b)=> a.calories- b.calories);  NUMERIC
                // fruits.sort((a,b)=> b.calories- a.calories);  REVERSE NUMERIC

    // const listItems = fruits.map(fruit => 
    //     <li key= {fruit.id}>
    //         {fruit.name} &nbsp;
    //         {fruit.calories}
    //     </li>
    // );   MAP FUNCTION

    const lowCalFruits = fruits.filter(fruit => fruit.calories <50);

    const listItems = lowCalFruits.map(lowCalFruits => 
        <li key= {lowCalFruits.id}>
           {lowCalFruits.name} &nbsp;
             {lowCalFruits.calories}
          </li>
       );

    return (
        <ol>
            {listItems} 
        </ol>
    );
}

export default List;
