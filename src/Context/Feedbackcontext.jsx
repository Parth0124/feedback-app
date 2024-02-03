import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext= createContext()

export const FeedbackProvider = ({children})=> {
const [feedback,setFeedback]= useState([
    {
    id: uuidv4(),
    text:'This item is from context 1.',
    rating:8
    },
    {
    id: uuidv4(),
    text:'This item is from context 2.',
    rating:9
    },
    {
    id: uuidv4(),
    text:'This item is from context 3.',
    rating:10
    }
])

const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      const updatedFeedback = feedback.filter((item) => item.id !== id)
      updatedFeedback.sort((a, b) => a.timestamp - b.timestamp)
      console.log(updatedFeedback)
      setFeedback(updatedFeedback)
    }
  }

const updateFeedback= (id, updItem) => {
    setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item))
}

  const [feedbackEdit, setFeedbackEdit]= useState(
    {item: {},
    edit:false
})

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const editFeedback = (item) =>{
    setFeedbackEdit({
        item,
        edit:true
    })
  }

    return <FeedbackContext.Provider value={{feedback,deleteFeedback, addFeedback, editFeedback,feedbackEdit, updateFeedback}}>
        {children}
    </FeedbackContext.Provider>
}


export default FeedbackContext