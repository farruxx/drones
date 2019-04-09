import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Post from 'templates/Post'
import Meta from 'components/Meta'
import Layout from 'components/Layout'
import Form from 'components/Form'
import i18n from '../util/i18n'
import './style.scss'
const Index = ({ data, location }) => {
  const posts = get(data, 'remark.posts')
  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />
      <body>
        <div className="container center-kl">
          <section>
            <p>{i18n.title}</p>
            <button className="btn btn-primary">Заказать сейчас</button>

            <h1 className="head">{i18n.decription1}</h1>

            <div className="col-md-10 img">
              <img src={require('../pages/images/s1.jpg')} />
              <p>{i18n.text0}</p>
            </div>

            <h4 />
            <div className="col-md-10 img">
              <img src={require('../pages/images/s4.jpg')} />
              <p>{i18n.text1}</p>
            </div>
            <div className="col-md-10 img">
              <img src={require('../pages/images/s3.jpg')} />
            </div>
            <div className="col-md-10 img">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe
                  class="embed-responsive-item"
                  src={require('../pages/videos/svideo.mp4')}
                  allowfullscreen
                />
              </div>
            </div>
            <div className="col-md-10" style={{ marginTop: 50 }}>
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </section>
        </div>
      </body>
    </Layout>
  )
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
