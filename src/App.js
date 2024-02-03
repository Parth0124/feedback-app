import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import Header from './components/Header'
import Aboutpage from './Pages/Aboutpage'
import Abouticonlink from './components/Abouticonlink'
import { FeedbackProvider } from './Context/Feedbackcontext'

function App() {

  return (
    <FeedbackProvider>
    <Router>
      <Routes>
        <Route path='/about' element={<Aboutpage />} />
        <Route path='/' element={
          <div>
            <Header />
            <div className='container'>
              <FeedbackForm />
              <FeedbackStats />
              <FeedbackList />
            </div>
            <Abouticonlink />
          </div>
        } />
      </Routes>
    </Router>
    </FeedbackProvider>
  )
}

export default App
