var i = 1;
function addfield() {
    field.innerHTML = field.innerHTML + `<li><input id=${i} type="text"></li><br>`;
    i++;
}

for (var index = 0; index < 5; index++) {
    addfield();
}