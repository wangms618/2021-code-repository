import axios from 'axios'
export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('https://www.fastmock.site/mock/d52b4e0e4971b96747d2006154a938ae/jianshu/home-list').then(res => {
      console.log(res);
    })
  }
}