import { Typography, Divider } from 'antd';
import './App.css';
import TodoList from './components/TodoList';
import Filters from './components/Filters';
import { setupServer } from './Fake_api';
import { useEffect } from 'react';
if(process.env.NODE_ENV==='development'){
  setupServer()
}

const { Title } = Typography;

function App() {
  useEffect(()=>{
    fetch("/api/todos",{
      method:"POST",
      body:JSON.stringify({ id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium' })
      // cover obj sang string
    }).then(res=>{
      fetch("api/todos")
      .then(res=>res.json())
      .then(res=>console.log(res))
    })
    fetch("api/updatetodo",{
      method:"POST",
      body:JSON.stringify({ id: 1, name: 'Learn Javascript', completed: true, priority: 'Medium'})
    })
    .then(res=>
      fetch("api/todos")
      .then(res=>res.json())
      .then(res=>console.log(res))
      )
    })
  // không gọi method là gì thì nó mặc định là GET
  // khi submit lên 1 dữ liệu todos thành công thì dữ liệu trả về 1 array với item tương ứng với todo mà ta submit
  return (
    <div
      style={{
        width: 500,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 20,
        boxShadow: '0 0 10px 4px #bfbfbf',
        borderRadius: 5,
        height: '90vh',
      }}
    >
      <Title style={{ textAlign: 'center' }}>TODO APP with REDUX</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
