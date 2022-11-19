let inputAngka = [5,7,7,9,10,4,5,10,6,5]
// let inputAngka=  [10,20,20,10,10,30,50,10,20]

function findKaos(inputAngka){
    let inputSort = inputAngka.sort(function(a,b){
        return a-b
    })

    let num = []

    for(let i = 0; i < inputSort.length; i++){
        if(inputSort[i] == inputSort[i+1]){
            num.push(inputSort[i])
            i++
        }
    }

    return num.length
}

console.log(findKaos(inputAngka));



let kalimats = 'Kemarin shopi pe$gi ke mall'

function findRightWords(kalimats){
    let kalimatsArr = kalimats.split(' ')
    let alpa = 'abcdefghijklmnopqrstuvwxyz'
    let arr = []
    
    for(let i = 0; i < kalimatsArr.length; i++){
        let word = ''
        for(let j = 0; j < kalimatsArr[i].length; j++){
            for(let z = 0 ; z < alpa.length; z++){
                
                if(kalimatsArr[i][j].toLowerCase() == alpa[z]){
                    word += kalimatsArr[i][j]
                }

            }
        }
        if(kalimatsArr[i] === word){
            arr.push(word)
        }
    }
    return arr.length
}

console.log(findRightWords(kalimats))