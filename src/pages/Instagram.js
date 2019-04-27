import React from 'react'
import './Instagram.css'
class Instagram extends React.Component {
  render() {
    return (
      <div className="col-md-10 mb-4">
        <div className="postHead row">
          <img className="userImage" src={this.props.userImage} />
          <p className="userName">{this.props.name}</p>
        </div>

        <div>
          <img src={this.props.mainImage} className="mainImage" />
        </div>
        <div className="toolbar">
          <div>
            <i class="far fa-heart fa-2x toolbarIcon" />
            <i class="far fa-comment fa-2x toolbarIcon" />
            <i class="far fa-share-square fa-2x toolbarIcon" />
          </div>
          <div>
            <i class="far fa-bookmark fa-2x toolbarIcon" />
          </div>
        </div>

        <div>
          <span className="userName ml-0">{this.props.name}</span>
          <span className="ml-2">{this.props.details}</span>
        </div>
      </div>
    )
  }
}

export default Instagram
