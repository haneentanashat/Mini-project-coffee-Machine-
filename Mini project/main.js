function show() {
    document.getElementById("section2").style.display = "block";
}
let price = document.getElementById('payment');

document.getElementById('buy').addEventListener("click", function () {

    if (document.getElementById('option1').checked == true) {
        document.getElementById('photo').src = 'img/coffee.jpg';

    }
    else if (document.getElementById('option2').checked == true) {
        document.getElementById('photo').src = 'img/black.jpg';

    }
    else if (document.getElementById('option3').checked == true) {
        document.getElementById('photo').src = 'img/milk111.jpg';

    }
    let price = document.getElementById('payment');
    let remain = price.value - 1;

    switch (price.value) {
        case "1": document.getElementById('back').innerHTML = "0 JD";
            break;
        case "5": document.getElementById('back').innerHTML = `${remain} JD`;
            break;
        case "10": document.getElementById('back').innerHTML = `${remain} JD`;
            break;
        case "20": document.getElementById('back').innerHTML = `${remain} JD`;
            break;
        case "50": document.getElementById('back').innerHTML = `${remain} JD`;
            break;
        default: document.getElementById('back').innerHTML = 'Please Enter Money like 1 or  5 or 10 or 20 or 50 ';
            document.getElementById('photo').style.display = 'none';
    }

})
