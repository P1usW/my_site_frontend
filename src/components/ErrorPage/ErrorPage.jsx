import React, {Component} from 'react';
import '../style/ErrorPage.css'

class ErrorPage extends Component {

    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    // componentDidCatch(error, errorInfo) {
    //
    // }

    render() {
        if (this.state.hasError) {
          return <div className='error-page'><h1 className='error-message'>Что-то пошло не так...</h1></div>;
        }

        return this.props.children;
    }
}

export default ErrorPage