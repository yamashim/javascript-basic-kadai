//配列宣言：日本の祝日
const holidays = ["正月", "成人の日", "建国記念の日", "天皇誕生日", "春分の日", "昭和の日", "憲法記念日", "みどりの日", "こどもの日", "海の日", "山の日", "敬老の日", "秋分の日", "スポーツの日", "文化の日", "勤労感謝の日"];

//配列holidaysの長さを取得
const holidaysLength = holidays.length;

//for文で、コンソールへ配列の要素をすべて出力する
for (let i = 0; i < holidaysLength; i++){
    console.log(holidays[i]);
}



//カウンタ変数jの宣言
let j = 0;

//while文で、コンソールへ配列の要素をすべて出力する
while (j < holidaysLength){
    console.log(holidays[j]);
    j+=1;
}
