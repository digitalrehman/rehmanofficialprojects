import React from 'react'
import API from '../API/API';

const State = () => {
    
    const channelId = 'UCN2JChIIDbeZbLo5vKvBsQA';
    const apiKey = 'AIzaSyCYicDBmwKWuWfyTxbMVw1tJl1EzyjPnXk';
  return (
    <div>
        <API channelId={channelId} apiKey={apiKey} />
    </div>
  )
}

export default State