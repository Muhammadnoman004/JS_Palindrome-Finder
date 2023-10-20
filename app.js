function search() {
    var getuserInp = document.getElementById('inp');
    var getResultdiv = document.getElementById('resultDiv');
    var getResultInp = document.getElementById('inp1');
    var getMesseage = document.getElementById("messeage")
    var result = document.getElementById("result");
    
    if(getuserInp.value == ""){
        getMesseage.innerText = `Please Fill The Field.`
    }
    else{
        
        var Convert = getuserInp.value.toString();
        var firstLetter = Convert.slice(0,1).toLowerCase();
        var AfterFirstLetter = Convert.slice(1).toLowerCase();
        var Add = firstLetter + AfterFirstLetter;
        var Split = Add.split("");
        var Reverse = Split.reverse("")
        var Join = Reverse.join("");

        getResultdiv.style.display = "block"
        getResultInp.style.display = "block"
        getResultInp.value = `${Join}`
        
        if (Add == Join) {
            result.innerText = `"${Add}" is a palindrome word.`;
        }
        else {
            result.innerText = `"${Add}" is not a palindrome word.`;
        }
    }
        
        getuserInp.value = "";
    }
