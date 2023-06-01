import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, 
  demoChannelTitle, demoChannelUrl } from '../utils/constants.';

import {Videos} from './Videos';

const VideoCard = ({ video: {id: {videoId}, snippet} }) => {

  // console.log(videoId, snippet);
  return (
    <Card sx={{ width: { md: '320px', xs: '100%' }, boxShadow: 'none', borderRadius: 0}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia 
          image={snippet?.thumbnails?.high?.url}
          alt={"snippet?.title"}
          sx={{ width: 358, height: 180 }}
          />
      </Link> 
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px'}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}> 
          <Typography variant='subtitle1' fontWeight={'bold'} color={'#fff'}>
            {snippet?.title.slice(0, 35) || demoVideoTitle.slice(0, 35)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}> 
          <Typography variant='subtitle2' fontWeight={'bold'} color={'grey'}>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: 'grey', ml: '5px'}}/>
          </Typography>
        </Link>
      </CardContent>     
    </Card>
  )
}

export default VideoCard