import React from 'react';
// basic story
const Story = ({verb='fighting',noun='snakes', adjective='god-forsaken'}) => {

    return(
        <>
        <div>
            <p>"There are too many {verb}</p>
            <p>{noun} on this </p>
            <p>{adjective} plane!" he screamed</p>
        </div>

        </>
    )
}
export default Story;
