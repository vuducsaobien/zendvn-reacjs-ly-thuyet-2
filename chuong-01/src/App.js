// import logo from './logo.svg';
import './App.css';
import Course from './components/Course';

function App() {
  return (
    <div className="row">
        <Course name='React JS' time='30h' free={true} >React JS is very simple</Course>
        <Course name='Angular 4x' time='55h' free={false}/>
        <Course name='Node JS' time='35h' free={false}/>
    </div>

  );
}

export default App;
