import './App.css';

//creating an object
const user = {
  male_name:"John Doe",
  female_name: "Jane Doe",
  img_source:"https://thispersondoesnotexist.com/"
}

//creating a component and nesting
function UserData(){
  return(
    <div className='user_details_wrapper'>
      <h1>User Details</h1>
      <p>Name: {user.male_name} <br/> {user.female_name}</p>
      <img className='user_image' src={user.img_source}/>
      <button >Click Me!</button>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <UserData/>
    </div>
  );
}

export default App;