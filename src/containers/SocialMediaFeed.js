import React, { Component } from 'react'
import { Box, Media, MediaLeft, Content, Title, MediaContent, Tile } from 'bloomer'
import moment from 'moment'
import 'moment/locale/fi'

import ReactMarkdown from 'react-markdown'
import fbFeed from './SocialMediaFeed.json'
// import { get } from '../api/apiHelper'

class SocialMediaFeed extends Component {
  constructor() {
    super()
    this.state = {
      feed: fbFeed
    }
  }

  componentDidMount() {
    // get('/api/facebook')
    //   .then(res => {
    //     console.log(res)
    //     this.setState({ feed: res })
    //   })
  }

  render() {
    const posts = this.state.feed.posts.data
    // const pagePicture = this.state.feed.page.picture.data

    return (
      <Tile isSize={4} isParent >
        <Tile isChild render={
          props => (
            <Box {...props} className='is-centered' style={{ overflowX: 'auto', height: '550px' }}>
              {posts && (
                posts.map(post => (
                  <Media key={post.id}>
                    <MediaLeft>
                      <figure className='image' />
                    </MediaLeft>
                    <MediaContent>
                      <Content>
                        <strong className='highlight-left-blue'>Digit ry @Facebook</strong>
                        <br />
                        <small>{moment(post.created_time).from(moment())}</small>
                        <Title isSize={5} >{post.name}</Title>
                        <ReactMarkdown
                          className={'markdown-area'}
                          source={decodeURI(post.description)}
                          escapeHtml={false}
                        />
                        {/* <Image isRatio='2:1' src={post.picture} /> */}
                      </Content>
                    </MediaContent>
                  </Media>
                ))
              )}
            </Box>

          )
        } />
      </Tile >
    )
  }
}

export default SocialMediaFeed
