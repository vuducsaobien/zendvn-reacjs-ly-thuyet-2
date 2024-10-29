// import logo from './logo.svg';
import './App.css';
import Course from './components/Course';
import State from './hooks/State';


function App() {
  const items = [
        {
            name: 'ReacjJS',
            time: '30h',
            free: true,
            desc: 'ReacjJS is very simple'
        },
        {
            name: 'Angular 4x',
            time: '55h',
            free: false
        },
        {
            name: 'Node JS',
            time: '35h',
            free: true
        }
    ];

    let eleItem = items.map((item, index) => {
        // console.log(item);
        // console.log('items = ');

        return <Course key={index} name={item.name} time={item.time} free={item.free}>{item.desc}</Course>
    });

    eleItem = null;
    // console.log(items);
    // console.log('items = ');

  return (
    <div className="row">
        {/* <Course name='React JS' time='30h' free={true} >React JS is very simple</Course>
        <Course name='Angular 4x' time='55h' free={false}/>
        <Course name='Node JS' time='35h' free={false}/> */}


        {eleItem}
        <State fullName = "Nguyen Van A" age={23}/>
    </div>

  );
}

export default App;
