function checkPal()
{
    var string1 = document.getElementById("initString").value;
    
    var splitString = string1.split("");
    
    var revString = splitString.reverse();

    var joinString = revString.join("");
    

    if (string1 == joinString)
    {
        document.getElementById("results").innerHTML = "Is a palindrome";

    }
    else
    {
        document.getElementById("results").innerHTML = "Not a palindrome";
    }

    
    
}