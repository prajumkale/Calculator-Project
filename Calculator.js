function Evaluator(self){
    let a=document.getElementById('input')
    if(self == 'c')
    {
        location.reload()
    }
    else if(self == '=')
    {
        let answer = eval(a.value)
        a.value = `${answer}`
    }
    else{
        a.value += `${self}`
    }
}