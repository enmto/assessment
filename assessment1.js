(function(){
    'use strict';
/* id=user-nameに入力されたあたいが、userNameとして代入され、数値に変換され、用意された何番目の答えを取ってこれるようになる*/

const userNameImput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');

function removeALLChildren(element){
    while (element.firstChild){
        element.removeChild(element.firstChild)
    }
}

//クリックしたらuserNameImputからValueの値（入力された文字)を取ってきてuserNameと名付けた変数に代入。もし入力された文字が０と等しかったら処理を終了。
assessmentButton.onclick = () => {
    const userName = userNameImput.value;
    if (userName.length === 0){
        return;}

//クリックされた後の処理なので.onclickの中に書く
//removeALLChildrenでelementに対して実行する内容をresultDividedの中身にも適応せよという司令
removeALLChildren(resultDivided);
const header = document.createElement('h3');
header.innerText = '結果発表';
resultDivided.appendChild(header);
const paragraph = document.createElement('p');
const result = assessment(userName);
paragraph.innerText = result;
resultDivided.appendChild(paragraph);

removeALLChildren(tweetDivided);
const anchor = document.createElement('a');
const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag='
+ encodeURIComponent('あなたのいいところ')
+ '&ref_src=twsrc%5Etfw';
anchor.setAttribute('href', hrefValue);
anchor.setAttribute('data-text',result);
anchor.className = 'twitter-hashtag-button';
anchor.setAttribute('data-lang','jp');
anchor.setAttribute('data-show-count', 'false');
anchor.innerText = 'ついーとする'
tweetDivided.appendChild(anchor);

twttr.widgets.load();


};

userNameImput.onkeypress = (event) => {
if (event.keyCode === 13){
    assessmentButton.onclick();
 }
};


const answers = [
    '{userName}のいいところは声です。{userName}の特徴的な声はみなを惹きつけ、心に残ります。',
    '{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
    '{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
    '{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます。',
    '{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
    '{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
    '{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
    '{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
    '{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
    '{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
    '{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。',
    '{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
    '{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
    '{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
    '{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
    '{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から評価されています'
    '{userName}のいいところは優しさです。あなたの優しい雰囲気や立ち振舞に多くの人が癒やされています。'
];

//.onclickが実行されるとuserNameには入力された文字の値（userNameImput.value)が代入される
function assessment(userName){
    let sumOfCharCode = 0;
    for (let i = 0; i < userName.length; i++){
    sumOfCharCode = sumOfCharCode + userName.charCodeAt(i)};

const index = sumOfCharCode % answers.length;
let result = answers[index];
result = result.replace(/\{userName\}/g,userName);

return result;
};



console.log(assessment('太郎'));


})();
