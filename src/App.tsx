import './App.css';
import FavoriteSubjects from './components/FavoriteSubjects';
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
      <FavoriteSubjects/>
    </div>
  );
}

export default App;
