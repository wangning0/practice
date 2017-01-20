/**
 * Created by wangning on 2017/1/20.
 */
import React from 'react';
import GitHubBox from '../../components/GithubBox';

const ResultPage = props => (
  <div>
    <GitHubBox data={props.data} userId={props.location.query.userId} />
  </div>
);
/* eslint-disable */
ResultPage.propTypes = {
  data: React.PropTypes.sting,
  location: React.PropTypes.Object,
};
/* eslint-disable */

export default ResultPage;
