import React, { useState } from 'react';
import Story from './Story';
import StoryForm from './StoryForm';
import {v4 as uuid} from 'uuid';

// parent component
const MadLib = () => {
    // set empty array in state
    const [stories,setStories] = useState([])
    // create a new Story function
    const addStory = (newStory) => {
        // update the stories each time the form is filled
        setStories(story => [...story,{...newStory, id:uuid()}])
    }
    // create a remove story function
    const removeStory = () => {
      setStories([]);
    }
    return(
        <div>
            <h3>MadLibs</h3>
            {/* pass in a prop which is our addStory function to update state */}
            <StoryForm addStory={addStory}/>
            {/* map the props from the form and generate a unique id using uuid */}
            <div>
                {stories.map(story => <Story key={story.id} verb={story.verb} noun={story.noun} adjective={story.adjective}/>)}
                {/* remove button */}
                <button type="button" onClick={removeStory}> Remove Story </button>
            </div>
        </div>
        
    )
}

export default MadLib;
