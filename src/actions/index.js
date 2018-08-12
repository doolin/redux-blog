import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

// http://reduxblog.herokuapp.com/api/posts?key=dave123
const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=dave123';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
      type: FETCH_POSTS,
      payload: request
    };
}