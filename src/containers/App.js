import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import withRootTheme from "../theme/withRootTheme";
import TitleBar from '../components/ui/TitleBar';
import SideDrawer from '../components/ui/SideDrawer';
import PageOne from "../pages/PageOne";
import PageTwo from "../pages/PageTwo";
import { Route, BrowserRouter } from "react-router-dom";

const styles = {
  root: {
    paddingTop: 80,
    width: '95%',
    maxWidth: 900,
    margin: "0 auto",
  }
};

const app = ({ classes }) => {
  return (
    <BrowserRouter>
      <Fragment>
        <TitleBar />
        <SideDrawer />
        <div className={classes.root}>
          <Route path="/" exact component={PageOne} />
          <Route path="/page1" component={PageOne} />
          <Route path="/page2" component={PageTwo} />
        </div>
      </Fragment>
    </BrowserRouter>
  )
};

export const LightThemeApp = withRootTheme(withStyles(styles)(app));
export const DarkThemeApp = withRootTheme(withStyles(styles)(app), true);
export default LightThemeApp;