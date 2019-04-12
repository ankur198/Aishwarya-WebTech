var i=1;
function addradio()
{
    addr.innerHTML = addr.innerHTML + `<input id=${i} type='radio'>option<br>`;
    i++;
}

for (var index = 0; index < 5; index++) {
    addradio();    
}