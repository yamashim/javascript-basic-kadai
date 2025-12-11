//HTMLからbutton要素（id=kadaiButton)を取得し、定数へ代入
const kadaiBtn = document.getElementById('kadaiButton');

//HTMLからh1要素（id=kadaiMessage)を取得し、定数へ代入
const kadaiMsg = document.getElementById('kadaiMessage')

//button要素がクリックされた時に、表示を変える処理
kadaiBtn.addEventListener('click', () => {
    kadaiMsg.textContent = "ボタンをクリックしました";
});