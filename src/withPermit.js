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
      fetch('http://localhost:5678/checkPermit')
        .then(res => res.json()).then(data => {
          if (data.valid === true) {
            this.setState({ loading: false, redirect: false });
          } else {
            this.setState({ loading: false, redirect: true });
          }
        })
        .catch(err => {
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