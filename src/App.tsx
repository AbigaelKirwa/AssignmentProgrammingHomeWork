import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import StudentProfile from './components/StudentProfile';
import StudentContext from './context/StudentContext';

function App() {
  return (
    <div className="App">
      <StudentProfile/>
      <StudentContext/>
      <Login/>
      <Register/>
    </div>
  );
}

export default App;
