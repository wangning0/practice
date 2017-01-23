/**
 * Created by wangning on 2017/1/23.
 */
import axios from 'axios';

export default function fetchComponentData(token = 'token') {
  const promises = [
    axios.get('http:localhost:3000/api/recipes'),
    axios.get('http:localhost:3000/api/authenticate?token=' + token),
  ];
  return Promise.all(promises);
}