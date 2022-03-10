import React from 'react'
import { useState } from 'react'






export const TaskCardTitlle = () => {
    const [isClick,setIsClick] = useState(false);
    const [inputCardTitle,setinputCardTitle] = useState('今日');


    const handleChange = (e)=>{
        console.log(inputCardTitle);
        setinputCardTitle(e.target.value);
    };

    const handleSubmit = (e)=>{
       e.preventDefault();
       if(inputCardTitle === ""){
        let err = "タイトルはいるよ!";
        setinputCardTitle(err);
        console.log(err);
       }
       setIsClick(false);
    };

    const handleClick = ()=>{
        setIsClick(true);
        console.log(isClick);
    };

    const handleBlur = ()=>{
        console.log('BkurStart');
        setIsClick(false);

    };

  return (
      <div onClick={handleClick} className="taskCardTitleInputArea"> 
          {isClick 
          ?
           <form onSubmit={handleSubmit}>
               <input 
                 className='taskCardTitleInput'
                 type="text" 
                 onChange={handleChange} 
                 onBlur={handleBlur} 
                 value={inputCardTitle} 
                 maxLength = "10"
                 minLength  = "1"
                />
           </form> 
           : 
           <h3>{inputCardTitle}</h3>}
      </div>
  )
}
