//変数宣言:0~15までの値を出力する
let num = Math.floor(Math.random() * 16)

//if条件式：変数numの値によって出力結果を出し分ける。

//変数numが3と5の倍数である場合の処理
if (num % 3 === 0 && num % 5 === 0){
    console.log("3と5の倍数です");
}
//変数numが3の倍数である場合の処理
else if (num % 3 === 0){
    console.log("3の倍数です");
}
//変数numが5の倍数である場合の処理
else if (num % 5 === 0){
    console.log("5の倍数です");
}
//変数numが3と5の倍数以外である場合の処理
else {
    console.log(num);
}