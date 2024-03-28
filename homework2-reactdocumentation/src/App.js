import './App.css';

//creating a component and nesting
function UserData(){
  return(
    <div className='user_details_wrapper'>
      <h1>User Details</h1>
      <p>Name: John Doe <br/>Jane Doe</p>
      <img className='user_image' src='https://thispersondoesnotexist.com/'/>
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