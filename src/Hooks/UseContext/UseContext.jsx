import { createContext, useContext } from 'react';

const UserContext = createContext();

const UseContext = () => {
   const user = {
      student1: 'Blacklion567',
      student2: 'SoySoy',
      student3: 'BanSimplified567',
      student4: 'Proline',
   };

   return (
      <UserContext.Provider value={user}>
         <Component2 />
      </UserContext.Provider>
   );
};

const Component2 = () => {
   return (
      <>
         <h1>Component 2</h1>
         <Component3 />
      </>
   );
};

const Component3 = () => {
   return (
      <>
         <h1>Component 3</h1>
         <Component4 />
      </>
   );
};

const Component4 = () => {
   return (
      <>
         <h1>Component 4</h1>
         <Component5 />
      </>
   );
};

const Component5 = () => {
   const user = useContext(UserContext);

   return (
      <>
         <h1>Component 5</h1>
         <h2>{`Hello ${user.student1}`}</h2>
         <h2>{`Hello ${user.student2}`}</h2>
         <h2>{`Hello ${user.student3}`}</h2>
         <h2>{`Hello ${user.student4}`}</h2>
      </>
   );
};

export default UseContext;
