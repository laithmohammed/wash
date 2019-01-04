import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default function withPermit(ComponentToProtect) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false,
      };
    }

    componentDidMount() {
      fetch('http://localhost:8080/checkPermit')
        .then(res => {
          if (res.status === 200) {
            this.setState({ loading: false });
          } else {
            // const error = new Error(res.error);
            // throw error;
          }
        })
        .catch(err => {
        // console.error(err);
          this.setState({ loading: false, redirect: true });
        });
    }


    render() {
      const { loading, redirect } = this.state;
      let view = <img src={require('./assets/icons/loader.svg')} alt='loader' style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:'4em',height:'4em'}}/>
      if (!loading) {
        if (redirect) {
          view = <Redirect to="/login" />
        } else {
          view = <ComponentToProtect {...this.props} />
        }
      }
      return (
        <React.Fragment>
          { view }
        </React.Fragment>
      );
    }
  }
}