import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/Search';
import SidebarOptions from './SidebarOptions';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListIcon from '@material-ui/icons/List';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';
import './Sidebar.css'
function Sidebar() {
	return (
		<div className="sidebar">
			<TwitterIcon className="sidebar__logo" />
			<div>
				<SidebarOptions active Icon={HomeOutlinedIcon} text="Home" />
				<SidebarOptions Icon={SearchIcon} text="Expolre" />
				<SidebarOptions Icon={NotificationsNoneOutlinedIcon} text="Notifications" />
				<SidebarOptions Icon={MailOutlinedIcon} text="Messages" />
				<SidebarOptions Icon={BookmarkBorderOutlinedIcon} text="Bookmarks" />
				<SidebarOptions Icon={ListIcon} text="Lists" />
				<SidebarOptions Icon={PermIdentityIcon} text="Profile" />
				<SidebarOptions Icon={MoreHorizIcon} text="More" />
				<Button variant="outlined" className="sidebar__tweet" fullWidth >Tweet</Button>
			</div>

		</div>
	)
}

export default Sidebar;
