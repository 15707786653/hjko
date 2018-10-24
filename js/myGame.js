var randomNumber=Math.floor((Math.random()*101));   //取0到100之间的随机数
console.log(randomNumber);
// document.write(randomNumber);
var guessField=document.querySelector('.guessField');
console.log(guessField);
// console.log(guessField.value);

var guesses=document.querySelector('.guesses');
console.log(guesses);

var lastResult=document.querySelector('.lastResult');
// console.log(lastResult);
// console.log(lastResult.value);

var lowOrHi=document.querySelector('.lowOrHi');
// console.log(lowOrHi);
// console.log(lowOrHi.value);

var guessSubmit=document.querySelector('.guessSubmit');
// console.log(guessSubmit);
// console.log(guessSubmit.vaule);

var guessCount=1;
var resetButton;
guessField.focus();

// function checkGuess(){
//     // document.write('我是结论');
//     guesses.textContent += guessField.value + " ";
//     guesses.style.backgroundColor="red";
// }

// // checkGuess();

// guessSubmit.addEventListener('click',checkGuess);
function checkGuess(){
    var userGuess=Number(guessField.value);
    // console.log(typeof userGuess);
    // console.log(userGuess);
    // guesses.textContent += userGuess + " ";
    // guesses.style.backgroundColor="red";
    //获取用户输入的数据，并将其转换为数字
    var userGuess= Number(guessField.value);
    //如果用户输入的猜数为1，则在猜数历史数据中增加提示
    if(guessCount === 1){
        guesses.textContent='上次猜的数';
    }
    //将用户输入的猜数接如猜数历史，并用空格隔开
    guesses.textContent += userGuess + ' ';

    //判断是否猜中
    if(userGuess===randomNumber){
        //猜中，在猜数结果中选择恭喜信息
        lastResult.textContent = '恭喜你！猜对了！';
        //将猜数背景色设置为绿色
        lastResult.style.backgroundColor='green';
        //清空高低提示字符串
        lowOrHi.textContent='';
        //调用游戏结束函数
        setGameOver();
    }else if(guessCount===10){
        //第十次都没猜中。提示游戏结束
        lastResult.textContent='!!!GAME OVER!!!';
        //清空高低提示字符串
        lowOrHi.textContent='';
        //调用游戏结束函数
        setGameOver();
    }else{
        //10次之内没猜中，提示错误信息
        lastResult.textContent ='你猜错了！';
        //修改提示背景色
        lastResult.style.backgroundColor='red';
        //判断大小
        if(userGuess<randomNumber){
            //猜小提示
            lowOrHi.textContent='猜低了！';
        }else if(userGuess>randomNumber){
            //大了提示
            lowOrHi.textContent='猜高了';
        }
    }
    //猜数自增
    guessCount++;
    //清空文字区
    guessField.value = '';
    //文字输入区获得焦点
    guessField.focus();
}
//确定按钮设置单击事件
guessSubmit.addEventListener('click',checkGuess);
//按钮单击事件函数
function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton=document.createElement('button');
    resetButton.textContent='开始新游戏';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click',resetGame);
}
//重置游戏
function resetGame() {
    guessCount = 1;
    var resetParas = document.querySelectorAll('.resultParas p');
    for(var i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }