import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Post from 'templates/Post'
import Meta from 'components/Meta'
import Layout from 'components/Layout'
import Form from 'components/Form'
import i18n from '../util/i18n'
import Feedbacks from './Feedbacks'
import '../scss/style.scss'
class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    var { data, location } = this.props
    const posts = get(data, 'remark.posts')
    return (
      <Layout location={location}>
        <Meta site={get(data, 'site.meta')} />
        <body>
          <div className="container center-kl">
            <section>
              <div className="col-md-10 corr">
                <div className="col-md-6">
                  <h1 className="head">{i18n.decription1}</h1>
                </div>

                <div className="col-md-12 coor">
                  <button className="btn btn-primary contract">
                    {i18n.contract}
                  </button>
                </div>
              </div>
              <div className="col-md-10 img">
                <img src={require('../pages/images/s1.jpg')} />
                <p className="text0">{i18n.text0}</p>
              </div>

              <h4 />
              <div className="col-md-10 img">
                <img src={require('../pages/images/s4.jpg')} />
                <p className="text1">{i18n.text1}</p>
              </div>
              <div className="col-md-10 img">
                <img src={require('../pages/images/s5.jpg')} />
              </div>
              <div className="col-md-10 img">
                <img src={require('../pages/images/s7.jpg')} />
                <p className="text2">{i18n.text2}</p>
              </div>
              <div className="col-md-10 img">
                <p className="rewiev">{i18n.rewiev}</p>
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe
                    class="embed-responsive-item"
                    src={require('../pages/videos/svideo1.mp4')}
                    allowfullscreen
                  />
                </div>
                <p className="advantage">{i18n.advantage}</p>
                <ul>
                  <li>{i18n.adv1}</li>
                  <li>{i18n.adv2}</li>
                  <li>{i18n.adv3}</li>
                  <li>{i18n.adv4}</li>
                  <li>{i18n.adv5}</li>
                  <li>{i18n.adv6}</li>
                  <li>{i18n.adv7}</li>
                  <li>{i18n.adv8}</li>
                  <li>{i18n.adv9}</li>
                </ul>
              </div>
              <div className="col-md-10">
                <img src={require('./images/s2.jpg')} />
              </div>
              <Feedbacks />
              <div className="col-md-10">
                <div className="price">
                  <div class="col-md-8 col-hidden-xs-3 ">
                    <p>Обычная цена</p>
                    <span>900 000</span>
                  </div>
                  <div class="col-md-4 col-hidden-xs-4  ">
                    <p>Цена по акции</p>
                    <span>800 000</span>
                  </div>
                </div>
              </div>
              <div className="col-md-10 forms">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Введите Ф.И.O"
                  value={this.state.name}
                  onChange={e => {
                    this.setState({
                      name: e.target.value,
                    })
                  }}
                />
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  placeholder="Введите телефон"
                  value={this.state.phone}
                  onChange={e => {
                    this.setState({
                      phone: e.target.value,
                    })
                  }}
                />
                <button
                  className="form-button form-control"
                  onClick={() => {
                    var body = 'HELLO' + this.state.name
                    var body = 'phone' + this.state.phone
                    fetch(
                      'https://drones1.netlify.com/.netlify/functions/hello',
                      {
                        body: body,
                        method: 'POST',
                      }
                    )
                  }}
                >
                  <span className="text-button">Заказать сейчас</span>
                </button>

                <footer>
                  <div className="overlay js-overlay-thank-you">
                    <div className="popup js-thank-you">
                      <h2>Cпасибо</h2>
                      <div className="close-popup js-close-thank-you" />
                    </div>
                  </div>
                </footer>
              </div>
            </section>
          </div>
        </body>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
        twitter
        adsense
      }
    }
    remark: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      posts: edges {
        post: node {
          html
          frontmatter {
            layout
            title
            path
            category
            tags
            description
            date(formatString: "YYYY/MM/DD")
            image {
              childImageSharp {
                fixed(width: 500) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
