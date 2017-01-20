/**
 * Created by wangning on 2017/1/20.
 */
import React from 'react';
import { Link } from 'react-router';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import ActionHome from 'material-ui/svg-icons/action/home';

const GithubBox = props => (
  <div>
    <Card>
      <CardHeader
        title={props.data.get('name')}
        subtitle={props.userId}
        avatar={props.data.get('avatar_url')}
      />
      <CardText>
        Followers : {props.data.get('followers')}
      </CardText>
      <CardActions>
        <Link to="/">
          <RaisedButton
            label="Back"
            icon={<ActionHome />}
            secondary
          />
        </Link>
      </CardActions>
    </Card>
  </div>
);

/* eslint-disable */
GithubBox.propTypes = {
  data: React.PropTypes.object,
  userId: React.PropTypes.string,
};
/* eslint-disable */

export default GithubBox;
