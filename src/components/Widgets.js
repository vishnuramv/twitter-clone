import React from 'react';
import './Widgets.css';
import SearchIcon from '@material-ui/icons/Search';
import { TwitterTimelineEmbed, TwitterFollowButton, TwitterShareButton } from 'react-twitter-embed';
function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input type="text" placeholder="Search Twitter" />
            </div>
            <div className="widgets__widgetContainer">
                <TwitterTimelineEmbed sourceType="profile" screenName="vvishnu__" options={{ height: 500 }} />
                <div className="widgets__buttons">
                    <TwitterShareButton className="widgets__shareButton" url={"https://instagram.com/vvishnu___"} options={{ text: "#this is from vishnu", via: "vvishnu___" }} />
                    <TwitterFollowButton
                        screenName={'vvishnu__'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Widgets;
