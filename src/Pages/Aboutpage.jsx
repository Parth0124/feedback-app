import Card from "../components/shared/card"
import {Link} from 'react-router-dom'

function Aboutpage() {
  return (
   <Card>
    <div className="about">
        <h1>About This Project</h1>
        <p>This is a react based feedback app to leave feedbacks and ratings for a particular product or service.</p>
        <p>Version 1.0.0</p>


        <p>
            <Link to='/'>
              Back To Home
            </Link>
        </p>
    </div>
   </Card>
  )
}

export default Aboutpage
