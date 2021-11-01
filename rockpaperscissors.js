function computerPlay(){
    let rnd=Math.floor(Math.random()*3);
    return rnd==0 ? 'Rock'
    : rnd==1 ? 'Paper'
    : 'Scissor';
}

function playNow(){
    let playerSelection
    let playerWin=undefined;
    playerSelection=prompt('What will you pick? (Rock, Paper, Scissors)');
    //playerSelection=computerPlay()
    playerSelection=playerSelection.slice(0,1).toUpperCase()+playerSelection.toLowerCase().slice(1);
    if(playerSelection=='Rock'||playerSelection=='Paper'||playerSelection=='Scissor') ; else playerSelection=prompt('What will you pick? (Rock, Paper, Scissors)');
    computerSelection=computerPlay();
    switch(playerSelection+computerSelection) {
        case 'RockScissor': playerWin=true;
        break;
        case 'PaperRock': playerWin=true;
        break;
        case 'ScissorPaper': playerWin=true;
        break;
        case 'RockPaper': playerWin=false;
        break;
        case 'PaperScissor': playerWin=false;
        break;
        case 'ScissorRock': playerWin=false;
        break;
    };
    let result=undefined;
    if(playerWin) result="Win"; else if(playerWin==false) result="Lost"; else result="Draw";
    alert('You : '+playerSelection+" | Computer : "+computerSelection+' | Result : '+result);
    return result;
}

function playRounds(){
    let winCount=0;
    let loseCount=0;
    playNow();
    for(let i=0;i<4;i++){
        let roundResult=playNow();
        if (roundResult=="Win") winCount++; else if(roundResult=="Lost") loseCount++;
    }
    let finalResult = (winCount>loseCount) ? "Winner!": (winCount<loseCount) ? "Loser!" : "Draw"
    console.log(`Total Result | Win : ${winCount} | Lost : ${loseCount} | Draw : ${5-winCount-loseCount} | Result : ${finalResult}`);
    alert(`Total Result | Win : ${winCount} | Lost : ${loseCount} | Draw : ${5-winCount-loseCount} | Result : ${finalResult}`);
}
playRounds();