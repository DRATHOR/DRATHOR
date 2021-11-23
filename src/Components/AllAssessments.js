import React from 'react'
import AssesmentSilds from './AssesmentSilds'
import AssessmentInfo from './AssesmentsInfo'

function AllAssessments() {
    return (
        <>
            {AssessmentInfo.map((item)=>
               {
                   return <AssesmentSilds
                   title={item.title}
                   questions={item.question}
                   description={item.description}
                   />;
               }
            )}
        </>
    )
}

export default AllAssessments
