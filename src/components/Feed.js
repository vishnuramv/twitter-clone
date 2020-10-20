import React, { useEffect, useState } from 'react';
import './Feed.css';
import Post from './Post';
import Tweetbox from './Tweetbox';
import db from '../firebase';
import FlipMove from 'react-flip-move';

function Feed() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                post: doc.data()
            })))
        ));
    }, []);
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            <Tweetbox />
            <FlipMove>
                {posts?.map(({ id, post }) => (
                    <Post key={id} displayName={post.displayName} userName={post.userName} avatar={post.avatar} tweetText={post.tweetText} tweetImage={post.tweetImage} verified={post.verified} />
                ))}
            </FlipMove>
        </div>
    )
}

export default Feed;
