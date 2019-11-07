import React, { useState } from 'react';

const Comment = (props) => {
    const [comment, setComment] = useState(''); //equlaivant to this.state ... this works with func components 
    const [inputValue, setInputValue] = useState(''); //to get the value from text area
    const handleChange = (e) => {
        // console.log(inputValue);
        setInputValue(e.target.value);

    }
    const handleToggle = () => {
        console.log("hide or show");
        
    }
    return (
<>
<div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="add comment" onChange={handleChange}></textarea>
    <button type="button" className="btn btn-secondary btn-lg" onClick={() => setComment(comment + inputValue)}>add</button>
</div>
<div className="hide">
    <p>{comment}</p>
    <button type="button" className="btn btn-secondary btn-lg" onClick={handleToggle}>edit</button>
</div>
</>
    )
}

export default Comment

