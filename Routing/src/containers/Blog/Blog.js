import React, { Component } from "react";
// import axios from 'axios';
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";

import { Route, NavLink, Redirect, Switch } from "react-router-dom";

import "./Blog.css";

class Blog extends Component {
	render() {
		return (
			<div className="Blog">
				<header>
					<nav>
						<ul>
							<li>
								<NavLink to="/posts/" exact>
									Posts
								</NavLink>
							</li>
							<li>
								<NavLink to="/new-post">New Post</NavLink>
							</li>
						</ul>
					</nav>
				</header>

				<Switch>
					<Route path="/new-post" exact component={NewPost} />
					<Route path="/posts/" component={Posts} />
					<Redirect from="/" to="/posts/" />
				</Switch>
			</div>
		);
	}
}

export default Blog;
