import './App.css';
import StudentProfile from './components/StudentProfile';
import StudentContext from './context/StudentContext';

function App() {
  return (
    <div className="App">
      <StudentProfile/>
      <StudentContext/>
    </div>
  );
}

export default App;
