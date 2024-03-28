import './App.css';

//creating a component and nesting
function UserData(){
  return(
    <>
      <h1>User Details</h1>
      <p>Name: Abigael Kirwa</p>
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
