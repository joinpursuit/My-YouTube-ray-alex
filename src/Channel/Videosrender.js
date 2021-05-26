import React, { Component } from 'react'
import YouTube from 'react-youtube'



export default class Videosrender extends Component {
    render() {
        const opts = {
            playerVars: {
                autoplay: 1,
            },
        }
        return (
            <div className="playervars">
                <YouTube className='videorend' videoId={this.props.match.params.id} opts={opts}/>
            </div>
        )
    }
}