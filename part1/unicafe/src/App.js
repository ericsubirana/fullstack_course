import { useState } from "react";
import ShowStatistics from "./ShowStatistics";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistics = ({good, bad, neutral, all}) => {
    
  if(all === 0){
    return <div>No feedback given</div>
  }
  return(
    <>
      <table>
        <tbody>
          <ShowStatistics text="good" votes={good} />
          <ShowStatistics text="bad" votes={bad} />
          <ShowStatistics text="neutral" votes={neutral} />
          <ShowStatistics text="all" votes={all} />
          <ShowStatistics text="average" votes={all === 0 ? '0%' : `${((good - bad) / all)}`} />
          <ShowStatistics text="positive" votes={all === 0 ? '0%' : `${(good / all) * 100}%`} />
        </tbody>
      </table>
    </>
  )
};

function App() {
  
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [all, setAll] = useState(0)

  const title = "give feedback"
  const title_statistics = "statistics"

  const handleButton = (but) => {
    if(but === 'good'){
      setGood(good + 1)
      setAll(all + 1)
    } else if(but === 'bad'){
      setBad(bad + 1)
      setAll(all + 1)  
    } else if(but === 'neutral'){
      setNeutral(neutral + 1)
      setAll(all + 1)
    }
  }

  return (
    <>
      <h1>{title}</h1>
      <div>
        <Button onClick={() => handleButton('good')} text={'good'} />
        <Button onClick={() => handleButton('neutral')} text={'neutral'} />
        <Button onClick={() => handleButton('bad')} text={'bad'} />
      </div>
      <h1>{title_statistics}</h1>
      <Statistics good={good} bad={bad} neutral={neutral} all={all} />
    </>
  );
}

export default App;
