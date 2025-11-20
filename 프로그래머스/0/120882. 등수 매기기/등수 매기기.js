function solution(score) {
    var answer = [];
    for(let i = 0; i < score.length; i++){
        let sum = score[i][0] + score[i][1];
        answer.push(sum / 2);
    }
    
    const result = [];
    for(let j = 0; j < answer.length; j++){
        let count = 1;
        let element = answer[j];
        for(let k = 0; k < answer.length; k++){
            if(j !== k){
                if(element < answer[k]){
                    count++;
                }
            }
        }
        result.push(count);
    }
    
    return result;
}