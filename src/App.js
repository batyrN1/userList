import './App.css';
import Users from './components/Users/UserList.jsx'

const users = [
  {
    id:1,
    name:'batyr',
    age:15,
    active:true,
    disactive:false
  },
  {
    id:2,
    name:'adil',
    age:16,
    active:true,
    disactive:false
  },
  {
    id:3,
    name:'aziret',
    age:16,
    active:true,
    disactive:false
  },
]

function App() {
  return (
    <div className="App">
         {
        users.map(user =>(
          <Users
            key={user.id}
            name={user.name}
            age={user.age}
            status={user.active}
            second-status={user.disactive}
          />
        )) 
      }
    </div>
  );
}

export default App;
