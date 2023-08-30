const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


const all_posts = document.querySelector("#all_posts");

window.addEventListener("load", function () {
  for (let i = 0; i < posts.length; i++) {
    all_posts.innerHTML += createPost(posts[i]);
  }
  const heartIcons = document.querySelectorAll(".heart");
  heartIcons.forEach((heartIcon, index) => {
    heartIcon.addEventListener("click", () => increaseLikes(index));
  });
});



function createPost(post) {
  const postEl = `
     <div class="up">
                    <img class="avatar" src="${post.avatar}">
                    <div class="up_text">
                        <h2>${post.name}</h2>
                        <p>${post.location}</p>                        
                    </div>
                </div>
                <div class="middle">
                    <img class="post" src="${post.post}">
                </div>    
                <div class="down">
                    <div class="icons">
                        <img class="heart" src="images/icon-heart.png">                           
                        <img class="comment" src="images/icon-comment.png">
                        <img class="dm" src="images/icon-dm.png">
                    </div>
                    <div class="likes_div">
                        <h4 class="likes_count"><span class="likes">${post.likes}</span> likes </h4>                        
                    </div>
                    <div class="postText">
                        <p><span>${post.username}</span> ${post.comment}</p>                        
                    </div>
                </div>
    `;
  return postEl;
}



function increaseLikes(postIndex) {
  const likesElement = document.querySelectorAll(".likes")[postIndex];
  const currentLikes = parseInt(likesElement.textContent);
  const newLikes = currentLikes + 1;
  likesElement.textContent = newLikes;
}