//今日の日付をコンソールへ出力する関数
const printToday = () => {
    //Date関数で現時刻（この時点ではミで取得
    const dateNow = new Date();

    //toLocaleString関数でyyyy/mm/dd hh/mm/ss表示に変換
    //console.log(dateNow.toLocaleString());

    //年月日表示でコンソールへ出力する
    console.log(dateNow.getFullYear() + "年" + (dateNow.getMonth()+1) + "月" + dateNow.getDate() + "日");

}

//関数を呼び出す
printToday();

