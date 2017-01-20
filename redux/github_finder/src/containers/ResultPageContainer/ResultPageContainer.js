/**
 * Created by wangning on 2017/1/20.
 */
import { connect } from 'react-redux';
import ResultPage from '../../components/ResultPage';

export default connect(
  state => ({
    data: state.getIn(['github', 'data']),
  }),
)(ResultPage);
