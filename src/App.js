import Customer from './components/Customer';
import './App.css';

const customers = [{
  'id': 1,
  'image': 'http://placeimg.com/64/64/1',
  'name': "김팝송",
  'birthday': '990101',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'http://placeimg.com/64/64/2',
  'name': "김밥",
  'birthday': '910405',
  'gender': '남자',
  'job': '백수'
},
{
  'id': 3,
  'image': 'http://placeimg.com/64/64/3',
  'name': "이백",
  'birthday': '011205',
  'gender': '여자',
  'job': '교사'
}
]

function App() {
  return (
    <div className="gray-background">
      {customers.map(c => {
        return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />);
      })
      }
    </div>
  );
}

export default App;
