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
        <ErrorBoundary >
            <Farewell/>
        </ErrorBoundary>
    </div>
  )
}

export default ErrorTest;