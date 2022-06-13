import React, { useEffect, useState } from 'react';
import PreviousTask from '../PreviousTask/PreviousTask';

const PreviousTasks = () => {
    const [previousTasks, setPreviousTasks] = useState([]);
    useEffect( () => {
        fetch('previousTasks.json')
        .then(res => res.json())
        .then(data => setPreviousTasks(data));
    },[])
    return (
        <div id="previousWork" className="container mt-5">
        <h2 className="text-primary">My Previous Work</h2>
        <div className="row mx-auto w-100">{
            previousTasks.map(previousTasks => <PreviousTask previousTasks={previousTasks} key={previousTasks.id}></PreviousTask>)
        }</div>
      </div>
    );
};

export default PreviousTasks;
