import React, { useState } from 'react';
// set the form to be empty initially so we can clear it after submission
const StoryForm = ({addStory}) => {
    const initialState = {
        verb:"",
        noun:"",
        adjective:"",
    }
    // track our form data using state and we can pass in our initial state value into useState
    const [formData, setFormData] = useState(initialState);
    // when a form field is touched then we want to track those values
    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData(data => ({
            ...data,
            [name]:value
        }));
    }
    // pass this data from the form back up to the parent component by using the method we took here as a prop
    const handleSubmit = (e) => {
        e.preventDefault();
        const { verb, noun, adjective } = formData;
        addStory({verb, noun, adjective})
        // make the fields blank
        setFormData(initialState)
    }
    return(
        <form>
            <label htmlFor="verb">Verb ending in -ing </label>
            <input
                id="verb"
                type='text'
                name="verb"
                placeholder="Verb -ing"
                value={formData.verb}
                onChange={handleChange}
            />
            
            <label htmlFor="noun">Plural Noun </label>
            <input
                type="text"
                name="noun"
                placeholder="Noun"
                id="noun"
                value={formData.noun}
                onChange={handleChange}
            />

            <label htmlFor="adjective"> Adjective </label>
            <input
                type="text"
                name="adjective"
                placeholder="Adjective"
                id="adjective"
                value={formData.adjective}
                onChange={handleChange}
            />
           
            <button onClick={handleSubmit}>Create Story</button>
        </form>
    )
};

export default StoryForm;
