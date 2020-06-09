import React from 'react';
import './meme-picker.styles.css';

export const MemePicker = ({memes}) => (
    <div className='meme-img-picker'>
    {memes.map(meme => <img src={`${meme.url}`} />)}
</div>

)