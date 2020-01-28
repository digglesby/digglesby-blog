import axios from 'axios';

function getPost( key ){
  return new Promise( function(resolve, reject){
    axios({
      method: "get",
      url: `https://blog.digglesby.com/${key}/post.json`
    }).then(function(resp) {

      resolve(resp.data);

    }).catch(function(err){
      reject(err);
    });
  });
}

function readPostsFrom( p, posts, total = 10 ){
  let returnPosts = [];
  let i = p;

  return new Promise(async function(resolve, reject){

    try {
      while((returnPosts.length < total) && (i < posts.length)){

        let thisPost = await getPost(posts[i].key);
        returnPosts.push(thisPost);

        i++;
      }
    } catch(err){
      reject(err);
    }

    resolve(returnPosts);

  });
}

function getAllPosts(){

  return new Promise(function(resolve, reject){
    axios({
      method: "get",
      url: 'https://yq6yqdifpe.execute-api.us-east-1.amazonaws.com/default/blog-manifest'
    }).then(function(resp) {

      resolve(resp.data);

    }).catch(function(err){
      reject(err);
    });
  });
}

export default {
  getPost,
  readPostsFrom,
  getAllPosts
};
