let outputScreen = document.getElementById('output');

function display(num) {
    outputScreen.value += num;
}

function clearAll() {
    outputScreen.value = "";
}

function calculate() {
    try {
        outputScreen.value = eval(outputScreen.value);
    } catch (error) {
        alert('Invaid Selection');
    }
}

function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}