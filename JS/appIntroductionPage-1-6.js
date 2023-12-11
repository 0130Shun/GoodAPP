// 評論/評分按鈕
const overlay = document.querySelector(".overlay");
const commentModal = document.querySelector(".commentModal");
const commentBtnClose = document.querySelector(".commentBtnClose");
const scoreCommentBtn = document.querySelector(".scoreCommentBtn");

//開啟評分評論彈跳視窗
scoreCommentBtn.addEventListener('click',function(e){
    commentModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
})

//關閉評分評論彈跳視窗
commentBtnClose.addEventListener('click',function(e){
    commentClose();
})
//重構關閉評分評論彈跳視窗
function commentClose(){
    commentModal.classList.add("hidden");
    overlay.classList.add("hidden");
}

//分享按鈕
const shareModal = document.querySelector(".shareModal");
const shareBtnClose = document.querySelector(".shareBtnClose");
const shareBtn = document.querySelector(".shareBtn");

//監聽shareBtn的按鈕，點擊後，移除兩個標籤上的class
shareBtn.addEventListener('click',function(e){
    shareModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
})

//監聽關閉按鈕，點擊後，加上兩個標籤上的class
shareBtnClose.addEventListener('click',function(e){
    shareModal.classList.add("hidden");
    overlay.classList.add("hidden");
})

//監聽評論送出按鈕
const send = document.querySelector('.send');
let comment = document.getElementById('comment');
console.log(comment.value);
send.addEventListener('click',function(e){
    if(comment.value === ""){
        alert('請輸入評論');
        return;
    }else{
        alert('送出成功!!!');
        comment.value = "";
    }
    commentClose();
})
