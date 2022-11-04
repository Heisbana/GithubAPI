import React from 'react';
// import {ErrorBoundary} from 'react-error-boundary';
import {ErrorBoundary} from './ErorBoundary'
import {Common} from './propswithErrorBoundary';

// function OurFallback(){
//   return (   
//     <div>Something went wrong</div>
//   )
// }

const person = {
  person:'Alaba',
  email:'oladejoalaba15@gmail.com',
}

function App() {

  return (
    <ErrorBoundary>
      <Common username = {person}/>
    </ErrorBoundary>
  )
}
export default App;
