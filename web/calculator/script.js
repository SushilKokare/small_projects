function getInputBox(){
    return document.getElementById('answer');
}

document.getElementById('clear').addEventListener('click',()=>{
    let tb = document.querySelector('#answer');
    tb.value='';
})

document.getElementById('one').addEventListener('click',() => { 
var textBox = getInputBox()
var data = textBox.value;
textBox.value = data+1;
});

document.getElementById('two').addEventListener('click',() => { 
var textBox = getInputBox()
var data = textBox.value;
textBox.value = data+2;
});
document.getElementById('three').addEventListener('click',() => { 
var textBox = getInputBox()
var data = textBox.value;
textBox.value = data+3;
});
document.getElementById('four').addEventListener('click',() => { 
var textBox = getInputBox()
var data = textBox.value;
textBox.value = data+4;
});
document.getElementById('five').addEventListener('click',() => { 
var textBox = getInputBox()
var data = textBox.value;
textBox.value = data+5;
});
document.getElementById('six').addEventListener('click',() => { 
var textBox = getInputBox()
var data = textBox.value;
textBox.value = data+6;
});
document.getElementById('seven').addEventListener('click',() => { 
var textBox = getInputBox()
var data = textBox.value;
textBox.value = data+7;
});
document.getElementById('eight').addEventListener('click',() => { 
var textBox = getInputBox()
var data = textBox.value;
textBox.value = data+8;
});
document.getElementById('nine').addEventListener('click',() => { 
var textBox = getInputBox()
var data = textBox.value;
textBox.value = data+9;
});
document.getElementById('zero').addEventListener('click',() => { 
var textBox = getInputBox()
var data = textBox.value;
textBox.value = data+0;
});

document.getElementById('divi').addEventListener('click',() => { 
    var textBox = getInputBox()
    var data = textBox.value;
    textBox.value = data+'/';
});

document.getElementById('mul').addEventListener('click',() => { 
    var textBox = getInputBox()
    var data = textBox.value;
    textBox.value = data+'*';
});

document.getElementById('sub').addEventListener('click',() => { 
    var textBox = getInputBox()
    var data = textBox.value;
    textBox.value = data+'-';
});

document.getElementById('add').addEventListener('click',() => { 
    var textBox = getInputBox()
    var data = textBox.value;
    textBox.value = data+'+';
});

document.getElementById('enter').addEventListener('click',() => { 
    var textBox = getInputBox()
    if(textBox.value!=0)
    {
        textBox.value = eval(textBox.value)
    }
    else{
        alert('Enter Numbers');
    }
});




