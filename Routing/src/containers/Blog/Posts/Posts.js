import React, { Component } from "react";

import axios from "../../../axios";
import "./Posts.css";
import Post from "../../../components/Post/Post";
import { Route, Link } from "react-router-dom";
import FullPost from "../FullPost/FullPost";

class Posts extends Component {
	state = {
		posts: []
	};

	componentDidMount() {
		axios
			.get("/posts")
			.then(response => {
				const posts = response.data.slice(0, 4);
				const updatedPosts = posts.map(post => {
					return {
						...post,
						author: "Max"
					};
				});
				this.setState({ posts: updatedPosts });
				// console.log( response );
			})
			.catch(error => {
				// console.log(error);
				this.setState({ error: true });
			});
	}

	postSelectedHandler = id => {
		this.props.history.push({ pathname: "/posts/" + id });
	};

	render() {
		let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
		if (!this.state.error) {
			posts = this.state.posts.map(post => {
				return (
					<Link to={"/posts/" + post.id} key={post.id}>
						<Post
							title={post.title}
							author={post.author}
							onClick={this.postSelectedHandler}
						/>
					</Link>
				);
			});
		}

		return (
			<div>
				<section className="Posts">{posts}</section>
				<Route
					path={this.props.match.url + "/:id"}
					exact
					component={FullPost}
				/>
			</div>
		);
	}
}

export default Posts;
