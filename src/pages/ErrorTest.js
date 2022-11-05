import React from 'react';
import ErrorBoundary from './ErrorBoundary';

const ErrorTest = () => {
    function Farewell({subject}) {
        return (
            <div>
                Goodbye {subject.toUpperCase()}
            </div>);
      }
  return (  
    <div>
        <ErrorBoundary>
            <Farewell/>
        </ErrorBoundary>
    </div>
  )
}
// const ErrorTest = () => {
//     const [hasError, setError] = useState(false);
//     if (hasError) {throw Error("Something went wrong");}
//     <button onClick={() => setError(true)}>Test ErrorBoundary</button>
// }

export default ErrorTest;