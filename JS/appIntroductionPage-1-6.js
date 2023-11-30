const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");
const scoreCommentBtn = document.querySelector(".scoreCommentBtn");

//監聽openModal的按鈕，點擊後，移除兩個標籤上面的class
scoreCommentBtn.addEventListener('click',function(e){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
})

//監聽closeModal的按鈕，點擊後，加入class到兩個標籤上
closeModalBtn.addEventListener('click',function(e){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
})