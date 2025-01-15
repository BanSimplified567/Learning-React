import { useState } from 'react';

const UseState = () => {
   const [color, setColor] = useState('red');

   const [car, setCar] = useState({
      brand: 'Lamboo',
      model: 'Mustang',
      year: '1964',
      color: 'red',
   });
   const [brand, setBrand] = useState('Ford');
   const [model, setModel] = useState('Mustang');
   const [year, setYear] = useState('1964');

   const updateColor = () => {
      setCar((previousState) => {
         return { ...previousState, color: 'blue' };
      });
   };

   const SetBrand = () => {
      setBrand('Lamboo');
   };

   const UpdateModel = () => {
      setModel('Bugatti');
   };

   const UpdateDate = () => {
      setYear(new Date().getFullYear());
   };

   return (
      <>
         <div>
            <h1>My favorite color is {color}!</h1>
            <button type="button" onClick={() => setColor('blue')}>
               Blue
            </button>
         </div>
         <div>
            <h1>My {brand}</h1>
            <p>
               It is a {color} {model} from {year}.
            </p>
            <button type="button" onClick={SetBrand}>
               Lamboo
            </button>

            <h1>My {car.brand}</h1>
            <p>
               It is a {car.color} {car.model} from {car.year}.
            </p>
            <button type="button" onClick={updateColor}>
               Blue
            </button>
         </div>

         <div>
            <h1>The Model is: {model}</h1>
            <button type="button" onClick={UpdateModel}>
               {' '}
               Bugatti
            </button>
         </div>

         <p>The Year Model Will be Updated to: {year}</p>
         <button type="button" onClick={UpdateDate}>
            {' '}
            DateUpdate
         </button>
      </>
   );
};

export default UseState;
