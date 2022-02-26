import React from 'react'
import { useHistory } from 'react-router-dom';

import NewMeetupForm from '../components/layout/meetups/NewMeetupForm'

function NewMeetupsPage() {

    const history = useHistory();
    function addMeetupHandler(meetupData) {
        fetch(
        'https://meetup-react-project-27fa8-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST', 
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then(() => {
            history.replace('/')
        });
    }
 
    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetUp={addMeetupHandler} />
        </section>
    );
      
}

export default NewMeetupsPage;
