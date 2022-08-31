// 1 Calculate



let display = document.getElementById('display');
let btns = document.getElementsByClassName('button');
let str = '';

for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', func);
}

function func () {
        let type = this.getAttribute('data-type');
        if(type === '=') {
            str = eval(str);
            display.value = str;
            return;
        } else if(type === 'C') {
            str = '';
        } else {
            str += type;
        }
        display.value = str;

}



