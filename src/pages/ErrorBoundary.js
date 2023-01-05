import React from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error.message);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-page">
          <h1>Something went wrong.</h1>
          <Link to="/" className='counter-links'>REFRESH PAGE</Link>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
