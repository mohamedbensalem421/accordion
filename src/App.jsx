import { useState } from "react"
import questions from "./data"
import Question from "./question"

function App() {
  return (
    <div className="container">
      <h1>Questions</h1>
      <section>{
        questions.map(({id, title, info})=>{
          return <Question key={id} title={title} info={info}/>
        })
      }</section>
    </div>
  )
}

export default App
