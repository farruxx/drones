import React from 'react'
import Instagram from './Instagram'
const feedbacks = [
  {
    name: 'testUser',
    userImage:
      'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    mainImage:
      'https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg',
    likeCount: 30,
    details:
      'example text text testexample text text testexample text text testexample text text testexample text text testexample text text testexample text text testexample text text test',
  },
  {
    name: 'testUser',
    userImage:
      'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    mainImage:
      'https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg',
    likeCount: 30,
    details:
      'example text text testexample text text testexample text text testexample text text testexample text text testexample text text testexample text text testexample text text test',
  },
]
export default () => {
  return feedbacks.map(data => (
    <Instagram
      name={data.name}
      userImage={data.userImage}
      mainImage={data.mainImage}
      likeCount={data.likeCount}
      details={data.details}
    />
  ))
}
