import { useState } from 'react';
import './App.css';

//creating an object
const user = {
  male_name:"John Doe",
  female_name: "Jane Doe",
  img_source:"https://thispersondoesnotexist.com/"
}

function App() {
    //conditional rendering
    const [count, setCount] = useState(0)
    
    //creating a component and nesting
    function UserData(){
      return(
        <div className='user_details_wrapper'>
          <h1>User Details</h1>
          <p>Name: {user.male_name} <br/> {user.female_name}</p>
          <p>Click me to change my photo</p>
          {count>0?
          <img className='user_image' src={user.img_source} alt='person'/>
          : null}
          <button onClick={()=>{setCount(count+1)}}>Click Me! {count}</button>
        </div>
      )
    }

  return (
    <div className="App">
      <UserData/>
    </div>
  );
}

export default App;