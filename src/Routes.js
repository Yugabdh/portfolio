import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
// import NotFound from './pages/NotFound';

const mapStateToProps = store => {
  return store;
}

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={() => <HomePage user={this.props} />} />
        <Route exact path='/about' component={ AboutPage } />
        <Route exact path='/contact' component={ ContactPage } />
        {/* <Route component={ NotFound } /> */}
      </Switch>
    )
  }
}

export default withRouter(connect(mapStateToProps)(Routes));
