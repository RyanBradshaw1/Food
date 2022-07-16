import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer o37TKX-jyu22GnA1JFLkwiIigHW01W_XGdwoF7nFSQ32_q5xYDr4mX0Eu0SPm71bPHjMxp9EqFXN8LU2RP3EX0B1NsLAHgpMlRF6Lceup5A97qzhnQVAipaSduVUYnYx'
    }
});