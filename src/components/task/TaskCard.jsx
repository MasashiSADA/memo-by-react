import React from 'react'
import { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { TaskCardDeleteButton } from './button/TaskCardDeleteButton'
import { TaskCardIinput } from './input/TaskCardIinput'
import { TaskCardTitlle } from './TaskCardTitlle'
import { Tasks } from './Tasks'

export const TaskCard = ({taskCardsList,setTaskCardsList,taskCard,index}) => {
    const [inputText,setInputText] = useState("");
    const [taskList,setTaskList] = useState([]);
  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided)=>(
        <div className='taskCard' ref={provided.innerRef}  {...provided.draggableProps} >
        <div className='taskCardTitleAndTaskCardDeleteButtonArea' {...provided.dragHandleProps}>
          <TaskCardTitlle/>
          <TaskCardDeleteButton 
          taskCardsList ={taskCardsList}
          setTaskCardsList={setTaskCardsList}
          taskCard={taskCard}
          />
        </div>
          <TaskCardIinput 
          inputText={inputText}
          setInputText={setInputText}
          taskList = {taskList}
          setTaskList = {setTaskList}
          />
          <Tasks
          inputText={inputText}
          setInputText={setInputText}
          taskList = {taskList}
          setTaskList = {setTaskList}
          />
      </div>

      )}
    </Draggable>
  )
}
