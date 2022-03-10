import React from 'react'
import {v4 as uuid} from 'uuid'

export const TaskCardIinput = ({inputText,setInputText,taskList,setTaskList}) => {

  const handleSubmit = (e)=>{
    const taskId = uuid();
    e.preventDefault();
    if(inputText === ""){
      return;
    }
    setTaskList([
      ...taskList,{
        id: taskId,
        draggableId : `task-${taskId}`,
        text:inputText,
      },
    ]);
    setInputText("");
  };

  const handleChange = (e)=>{
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder = "追加する" className='taskAddInput' onChange={handleChange} onSubmit={handleSubmit} value={inputText}></input>
      </form>
    </div>
  )
}
