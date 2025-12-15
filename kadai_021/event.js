//htmlからボタン要素を取得
const firstBtn = document.getElementById("firstButton");

//htmlからh2要素を取得
const firstMsg = document.getElementById("firstMessage");

firstBtn.addEventListener("click",() => {
    setTimeout(() => {
        firstMsg.textContent = "ボタンをクリックしました";
    }, 2000);
});