/**
 * Created by wangning on 2017/1/20.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';

const Main = props => (
  <div>
    <AppBar
      title="Github Finder"
      showMenuIconButton={false}
    />
    <div>
      {props.children}
    </div>
  </div>
);
/* eslint-disable */
Main.propTypes = {
  children: React.PropTypes.object,
};
/* eslint-disable */
export default Main;
