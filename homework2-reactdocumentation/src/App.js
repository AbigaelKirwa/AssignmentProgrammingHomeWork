import { useState } from 'react';
import './App.css';

//creating an object
const user = {
  male_name:"John Doe",
  female_name: "Jane Doe",
  img_source:"https://thispersondoesnotexist.com/"
}

//creating a list
const subjects =[
    {name:"English", id:1},
    {name:"Kiswahili", id:2},
    {name:"Science", id:3}
]

const listItems = subjects.map((subject)=>{
  return <li key={subject.id} style={{listStyle:'none'}}>{subject.name}</li>
})

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
      <div className='subject_data'>
        <h1>Subject List</h1>
          {listItems}
      </div>

    </div>
  );
}

export default App;