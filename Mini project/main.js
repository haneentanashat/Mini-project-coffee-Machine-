function show() {
    document.getElementById("section2").style.display = "block";
}
let price = document.getElementById('payment');

document.getElementById('buy').addEventListener("click", function () {

    if(price.value==''){
        document.getElementById('remian').innerHTML = 'Please Enter Money like 5 or 10 or 20 or 50 ';
        document.getElementById('photo').style.display='none'
        document.getElementById('remaining').style.display = 'none';
    }
    else if(document.getElementById('option1').checked == true) {
            document.getElementById('photo').src = 'img/coffee.jpg';
           
        }
        else if (document.getElementById('option2').checked == true) {
            document.getElementById('photo').src = 'img/black.jpg';
           
        }
        else if  (document.getElementById('option3').checked == true) {
            document.getElementById('photo').src = 'img/milk111.jpg';
            
        }
        
        if (price.value > 1) {

            let remain = price.value - 1;
            document.getElementById('back').innerHTML = `${remain} JD`;
        }
        else{           
             document.getElementById('back').innerHTML = "0 JD"; 
    }
    })