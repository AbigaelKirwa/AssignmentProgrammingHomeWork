import './App.css';

//creating a component and nesting
function UserData(){
  return(
    <>
      <h1>User Details</h1>
      <p>Name: John Doe <br/>Jane Doe</p>
      <img src='https://thispersondoesnotexist.com/'/>
      <button >Click Me!</button>
    </>
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