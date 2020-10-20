import { Avatar, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './Tweetbox.css';
import db from '../firebase';
import { firestore } from 'firebase';

function Tweetbox() {
    const [tweetText, setTweetText] = useState('');
    const [tweetImage, setTweetImage] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [userName, setUserName] = useState('');

    useEffect(() => {
        setDisplayName(prompt('Enter Your Display Name'));
        setUserName(prompt('Enter Your User Name'));
    }, [])

    const sendTweet = (event) => {
        event.preventDefault();
        db.collection('posts').add({
            displayName,
            userName,
            tweetText,
            tweetImage,
            verified: true,
            avatar: "",
            timestamp: firestore.FieldValue.serverTimestamp()
        });
        setTweetImage("");
        setTweetText("");
    }
    return (
        <div className="tweetbox">
            <form>
                <div className="tweetbox__input">
                    <Avatar />
                    <input value={tweetText} onChange={e => setTweetText(e.target.value)} type="text" placeholder="What's happening?" />
                </div>
                <input value={tweetImage} onChange={e => setTweetImage(e.target.value)} type="text" placeholder="Optional: Enter Image URL" />
                <Button type="submit" onClick={sendTweet} className="tweetbox__button">Tweet</Button>
            </form>
        </div>
    )
}

export default Tweetbox;
