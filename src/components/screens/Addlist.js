import React from 'react';
import { useNavigate } from "react-router-dom";

const Addlist = () => {
    const [activity, setActivity] = React.useState('');
    const [status, setStatus] = React.useState('');
    const [time, setTime] = React.useState('');
    const [action, setAction] = React.useState('');
    const navigate = useNavigate()


    const handleaddlist = async () => {
        console.log(activity, status, time, action)
        let result = await fetch('https://fullstack-nodejs-projects.herokuapp.com/addlist', {
            method: 'post',
            body: JSON.stringify({ activity, status, time, action }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        result = await result.json()
        console.log(result)
        navigate("/list")
    }


    return (
        <div className='product'>
            <h1>Add list</h1>
            <label><h4>Activity</h4></label>
            <select type="text" placeholder="activity" className='inputBox' value={activity} onChange={(e) => setActivity(e.target.value)}>
                <option>Running</option>
                <option>Drinking</option>
                <option>Sleeping</option>
                <option>Eating</option>
                <option>Washing</option>
            </select>
            <label><h4>status</h4></label>
            <select type="text" placeholder="status" className='inputBox' value={status} onChange={(e) => setStatus(e.target.value)}>
                <option>Pending</option>
                <option>Completed</option>
            </select>
            <label><h4>Action</h4></label>
            <select type="text" placeholder="Action" className='inputBox' value={action} onChange={(e) => setAction(e.target.value)}>
                <option>Start</option>
                <option>End</option>
                <option>Pause</option>
            </select>
            <label><h4>Time</h4></label>
            <input type="text" placeholder="time" className='inputBox' value={time} onChange={(e) => setTime(e.target.value)} />


            <button className='appButton' onClick={handleaddlist}> Add list</button>
        </div>
    )
}

export default Addlist;