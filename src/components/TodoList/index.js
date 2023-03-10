import { Col, Row, Input, Button, Select, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../Redux/actions';
import Todo from '../Todo';
import {v4 as uuidv4} from 'uuid'
import { useState } from 'react';
import { todolistSelector } from '../../Redux/selector';

export default function TodoList() {
  const [todoName,setTodoName] =useState('')
  const [priority,setPriority] =useState('Medium')
  const dispatch= useDispatch()

  const handleAddButtonClick=()=>{
  dispatch(addTodo({
    id:uuidv4(),//tự động cho 1 id ngẫu nhiên và duy nhất 
    name:todoName,
    priority: priority,
    completed:false
  }))
  }

  // Khi thêm mới việc cần làm thì ta điền đủ như {} ở trên (cái mìn tự tạo ra ở reducer)
  //  Mỗi việc cần làm cần tạo ra 1 id duy nhất, mình sử dụng thư viện uuid 

  const handleInputChange =(e)=>{
   console.log(e.target.value)
   setTodoName(e.target.value)
  }
  // e ni là 1 event object
  const handlePriorityChange=(value)=>{
    setPriority(value)
  }
  // vì select ni của thư viên antd nên value của nó chính là giá trị value mình lựa chọn lun 
  
  const todolist =useSelector(todolistSelector)
  console.log("todolist :",todolist )
  

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name='Learn React' priority='High' />
        <Todo name='Learn Redux' priority='Medium' />
        <Todo name='Learn JavaScript' priority='Low' /> */}
        {todolist.map((todo)=>(<Todo key={todo.id} name={todo.name} priority={todo.priority} completed={todo.completed}/>))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange}/>
          <Select defaultValue="Medium" value={priority} onChange={handlePriorityChange}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
