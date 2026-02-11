const reels = [
  {
    username: "anshika.codes",
    profilePic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200",
    caption: "Learning JavaScript step by step 💻✨",
    isLiked: true,
    isFollowed: true,
    noLikes: 1240,
    noComment: 56,
    noShare: 18,
    video: "./v/1.mp4"
  },
  {
    username: "tech.journey",
    profilePic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200",
    caption: "Small progress is still progress 🚀",
    isLiked: false,
    isFollowed: false,
    noLikes: 980,
    noComment: 42,
    noShare: 10,
    video: "./v/2.mp4"
  },
  {
    username: "code.with.riya",
    profilePic: "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?w=200",
    caption: "DOM manipulation practice 😌",
    isLiked: true,
    isFollowed: true,
    noLikes: 2150,
    noComment: 89,
    noShare: 34,
    video: "./v/3.mp4"
  },
  {
    username: "daily.dev.life",
    profilePic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    caption: "Code, coffee, repeat ☕💻",
    isLiked: false,
    isFollowed: true,
    noLikes: 760,
    noComment: 21,
    noShare: 7,
    video: "./v/4.mp4"
  },
  {
    username: "frontend.fun",
    profilePic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200",
    caption: "Flexbox finally makes sense 🔥",
    isLiked: true,
    isFollowed: false,
    noLikes: 1540,
    noComment: 64,
    noShare: 25,
    video: "./v/5.mp4"
  },
  {
    username: "student.codes",
    profilePic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200",
    caption: "BCA life + coding struggles 😭",
    isLiked: false,
    isFollowed: false,
    noLikes: 430,
    noComment: 12,
    noShare: 4,
    video: "./v/6.mp4"
  },
  {
    username: "js.daily",
    profilePic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
    caption: "One JavaScript tip every day 💡",
    isLiked: true,
    isFollowed: true,
    noLikes: 3100,
    noComment: 145,
    noShare: 62,
    video: "./v/7.mp4"
  },
  {
    username: "web.designs",
    profilePic: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200",
    caption: "Clean UI > complex UI 🎨",
    isLiked: false,
    isFollowed: true,
    noLikes: 890,
    noComment: 33,
    noShare: 15,
    video: "./v/8.mp4"
  },
  {
    username: "coding.girl",
    profilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    caption: "Consistency over motivation 💪",
    isLiked: true,
    isFollowed: true,
    noLikes: 2700,
    noComment: 101,
    noShare: 48,
    video: "./v/9.mp4"
  },
  {
    username: "dev.vibes",
    profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    caption: "Debugging is an emotion 🫠",
    isLiked: false,
    isFollowed: false,
    noLikes: 560,
    noComment: 19,
    noShare: 6,
    video: "./v/10.mp4"
  }
];
let allReels=document.querySelector(".all-reels")

function addData(){
  let sum=''
  reels.forEach(function(ele,idx){
    sum=sum+` <div class="reel">
                    <video autoplay muted loop class="main-vdo" src="${ele.video}"> </video>
                        <div class="bottom">
                            <div class="user">
                                <img src="${ele.profilePic}" alt="">
                                <h4>${ele.username}</h4>
                                <button class="follow">${ele.isFollowed?'Unfollow':'Follow'}</button>
                            </div>
                            <h3>${ele.caption}</h3>
                        </div>
                        <div class="right">
                            <div id="${idx}" class="like">
                                <h4 class="like-icon">${ele.isLiked?'<i class=" love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
                                <h6>${ele.noLikes}</h6>
                            </div>
                            <div class="comment">
                                <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                                <h6>${ele.noComment}</h6>
                            </div>
                            <div class="share">
                                <h4 class="share-icon"><i class="ri-share-forward-line"></i></h4>
                                <h6>${ele.noShare}</h6>
                            </div>
                            <div class="menu">
                                <h4 class="menu-icon"><i class="ri-more-2-fill"></i></h4>
                            </div>
                        </div>
                </div>`
                console.log(ele.video);
                
})

allReels.innerHTML= sum
}
addData()
allReels.addEventListener("click",function(dets){
 if(dets.target.className=='like'){
   if(!reels[dets.target.id].isLiked)
  {
    reels[dets.target.id].noLikes++
   reels[dets.target.id].isLiked=true
  }
  else{
    reels[dets.target.id].noLikes--
   reels[dets.target.id].isLiked=false
  }
  addData()
 }
 if(dets.target.className=='follow'){
   if(!reels[dets.target.id].isFollowed){
    reels[dets.target.id].isFollowed=true
   }
   else{
     reels[dets.target.id].isFollowed=false
   }
   addData()
 }
 
})