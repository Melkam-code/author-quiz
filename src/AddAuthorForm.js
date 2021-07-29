import React from 'react';
import './AddAuthorForm.css';

function AddAuthorForm({ match }){
    return(
      <div className="AddAuthorForm">
        <h1>Add Author</h1>
        <form>
            <div className="AddAuthorForm_input">
                <lable htmlFor="name">Name</lable>
                <input type="text" name="name" />
            </div>
        </form>
      </div>
    )
  }

export default AddAuthorForm;
  