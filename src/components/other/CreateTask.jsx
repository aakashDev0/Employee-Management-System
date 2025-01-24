import React, { useState } from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
const CreateTask = () => {

  const [userData,setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskData, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');

  const [newTask, setNewTask] = useState({});
  const onSubmitHandler = (e)=>{
    e.preventDefault();
    // console.log("Task Created");
    
    setNewTask({taskTitle, taskDescription, taskData,category, active: true, newTask: true, completed: false, failed: false});
    // console.log(task);
    
     const data = userData;
     
     
     data.forEach(function (elem) {
      if(assignTo == elem.firstName){
        elem.tasks.push(newTask)
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1
        
      }
     })


     setUserData(data)
     console.log(data);
     
    //  console.log(userData);
     
    //  localStorage.setItem('employees', JSON.stringify(data));

     setTaskTitle('');
     setTaskDescription('');
     setTaskDate('');
     setAssignTo('');
     setCategory('');
    
  }
  return (
    <div>
        <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form 
      onSubmit={(e)=>{
        onSubmitHandler(e);
      }}
      className="flex flex-wrap w-full items-start justify-between">
        <div className="w-1/2">
        <div>
          <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
          <input
          value={taskTitle}
          onChange={(e)=>{
            setTaskTitle(e.target.value);
          }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder="Make a design" />
        </div>
        

        <div>
          <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
          <textarea 
          value={taskDescription}
          onChange={(e)=>{
            setTaskDescription(e.target.value);
          }}
          className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>
        </div>
        <div>
          <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
          <input 
          value={taskData} 
          onChange={(e)=>{
            setTaskDate(e.target.value);
          }}
          className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date " placeholder="dd/mm/yyyy" />
        </div>
        <div>
          <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
          <input 
          value={assignTo} 
          onChange={(e)=>{
            setAssignTo(e.target.value);
          }}
          className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" />
        </div>
        <div>
          <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
          <input 
          value={category} 
          onChange={(e)=>{
            setCategory(e.target.value);
          }}
          className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder="Design,Development, etc..." />
        </div>

        <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
        </div>
      </form>

      </div>
    </div>
  )
}

export default CreateTask