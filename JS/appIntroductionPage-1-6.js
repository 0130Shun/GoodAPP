// 評論/評分按鈕
const overlay = document.querySelector(".overlay");
const commentModal = document.querySelector(".commentModal");
const commentBtnClose = document.querySelector(".commentBtnClose");
const scoreCommentBtn = document.querySelector(".scoreCommentBtn");

//監聽openModal的按鈕，點擊後，移除兩個標籤上面的class
scoreCommentBtn.addEventListener('click',function(e){
    commentModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
})

//監聽closeModal的按鈕，點擊後，加入class到兩個標籤上
commentBtnClose.addEventListener('click',function(e){
    commentModal.classList.add("hidden");
    overlay.classList.add("hidden");
})

//分享按鈕
const shareModal = document.querySelector(".shareModal");
const shareBtnClose = document.querySelector(".shareBtnClose");
const shareBtn = document.querySelector(".shareBtn");

//監聽shareBtn的按鈕，點擊後，移除兩個標籤上的class
shareBtn.addEventListener('click',function(e){
    shareModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
})

shareBtnClose.addEventListener('click',function(e){
    shareModal.classList.add("hidden");
    overlay.classList.add("hidden");
})
