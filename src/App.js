import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import Header from './components/Header'

function App()
{

const addFeedback = (newFeedback) => {
    newFeedback.id=uuidv4()
    setFeedback([newFeedback,...feedback])
}

const [feedback, setFeedback]=useState(FeedbackData)

const deleteFeedback =(id)=>{
    if(window.confirm('Are you sure you want to delete?'))
    {
        // setFeedback(feedback.filter((item) => item.id !== id))
        const updatedFeedback = feedback.filter((item) => item.id !== id)
        updatedFeedback.sort((a,b) => a.timestamp-b.timestamp)
        console.log(updatedFeedback)
        setFeedback(updatedFeedback)
    }
    
}

    return( 
        <>
        <Header />
        <div className='container'>
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
        </div>
        </>
    )
}

export default App
