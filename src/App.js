import React, {Fragment} from 'react'
import './style/slids.scss'
import AllAssessments from './Components/AllAssessments'
import AssessmentSlids from './Components/AssesmentSilds'

function App() {
  const assessmentBody={
    width:'900px',
    height:'100vh',
    backgroundColor:'#d6ebff',
  }
  return (
    
    <div style={assessmentBody}>
    <AllAssessments/>
    </div>

  )
}

export default App
