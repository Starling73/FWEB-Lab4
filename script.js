flag1 = true;
flag2 = true;
	
    function el1(){
        if (flag1){
            flag1 = false;
            document.getElementById("p").style.background='blue';
            document.getElementById("p").style.color='white';
        } else {
            document.getElementById("p").style.background='white';
            document.getElementById("p").style.color='black'; 
            flag1= true;
        }
    }

    function el2(){
        const name = document.querySelector('.pgph')
        if (flag2){
            flag2 = false;
            name.style.background='yellow';
            name.style.color='black';
        } else{
            name.style.background='white';
            name.style.color='black'; 
            flag2= true;
        }
    }

    function add() {
        document.getElementById("img_block").innerHTML = "<img src = \"Prague.jpg\" alt=\"photo of Prague\"" +
            "height =\"500\" width=\"400\">";
        document.getElementById("add").value = "Add";
    }

    function max() {
        document.getElementById('img_block').innerHTML = "<img src = \"Prague.jpg\"" +
            "alt=\"photo of Prague\" height = \"625\" width = \"500\">";
        document.getElementById("increase").value = "Increase";
    }

    function min(){
        document.getElementById('img_block').innerHTML = "<img src = \"Prague.jpg\"" +
            "alt=\"photo of Prague\" height = \"250\" width = \'200\'>";
        document.getElementById("reduce").value = "Reduce";
    }

    function del() {
        document.getElementById("img_block").innerHTML = "<img src=\"\">";
        document.getElementById("delete").value = "Delete";
    }
