import { useState } from "react"
import Button from './shared/Button'
import RatingSelect from "./RatingSelect"
import Card from "./shared/card"
import { useContext, useEffect } from "react"
import FeedbackContext from "../Context/Feedbackcontext"

function FeedbackForm() {

    const[rating, setRating]=useState(10)

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        if(feedbackEdit.edit === true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const [text, setText]=useState('')

    const handleTextChange = (e) => {

        if(text===''){
            setBtnDisabled(true)
            setMsg(null)
        }
        else if(text!== '' && text.trim().length<=10){
            setMsg('Text must atleast be 10 characters.')
            setBtnDisabled(true)
        }
        else
        {
            setBtnDisabled(false)
            setMsg(null)
        }
        setText(e.target.value)
    }

    const[ btnDisabled, setBtnDisabled]= useState(true)
    const[msg, setMsg]=useState('')

    const handleSubmit=(e)=> {
        e.preventDefault()
        if(text.trim().length>10){
            const newFeedback={
                text,
                rating,
            }
            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }else{
            addFeedback(newFeedback)
            }
        }
    }

  return (
   <Card>
    <form onSubmit={handleSubmit}>
        <h2>How would you rate our service?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
    <div className="input-group">
        <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text} />
        <Button type="submit" isDisabled={btnDisabled}>Send</Button>
    </div>
    {msg&&<div className="message">{msg}</div>}
    </form>
   </Card>
  )
}

export default FeedbackForm