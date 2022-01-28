import './App.css';
import { useState, useEffect } from 'react'
import Ui from './views/ui/ui';
import over from '../src/over.png'

function App() {
  const [count, setCount] = useState(0)
  const [score, setScore] = useState(0)
  const [reset, setReset] = useState(false)
  const [questions, setQuestions] = useState([])
  useEffect(() => {
    getQuestions()
  }, [])

  const getQuestions = async () => {
    const response = await fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple')
    const tempQuestions = await response.json()
    setQuestions(tempQuestions.results)
  }

  console.log('questions -->', questions)
  if (!questions.length) return(<div className='my-5' style={{width: '100%', textAlign: 'center'}}><h1>Loading</h1></div>)

  const nextBtn = () => {
    if (questions.length - 1 == count) {
      setReset(true)
    }
    else {
      const incre = count + 1
      setCount(incre)
      setReset(false)
    }
  }
  const resetBtn = () => {
    setCount(0)
    setScore(0)
    setReset(false)
  }
  const scoreBtn = () => {
    nextBtn()
    const points = score + 1
    setScore(points)
  }
  return (
    <div>
      <br />
      {
        reset ?
          <div className='over'>
            <h1 style={{ fontFamily: 'fantasy' }}>Your Score is {score}</h1>
            <br />
            <img style={{ width: '300px' }} src={over} alt="" />
          </div>
          :
          <Ui title={questions[count].question} list={questions[count].incorrect_answers.map((item) => {
            return (
              <li onClick={nextBtn} className="list-group-item">{item}</li>
            )
          })} correct={questions[count].correct_answer} onClick={scoreBtn} />
      }
      <div className='btn'>
        {
          reset ?
            <button style={{ width: '80px', marginTop: '10px' }} className='btn btn-primary' onClick={resetBtn}>Restart</button>
            :
            null
            // <button style={{ width: '80px', marginTop: '10px' }} className='btn btn-primary' >Next</button>
        }
      </div>
    </div>
  )
}
export default App