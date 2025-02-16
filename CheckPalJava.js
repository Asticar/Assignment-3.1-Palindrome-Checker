function checkPal()
{
    // creates a variable for the initial string that was input by the user
    var string1 = document.getElementById("initString").value;
    // will effectively split the string apart, letter by letter (I.E: aeiou becomes a e i o u)
    var splitString = string1.split("");
    // will flip the string in reverse (I.E. a e i o u becomes u o i e a)
    var revString = splitString.reverse();
    // will join the string back together (I.E. u o i e a becomes uoiea)
    var joinString = revString.join("");
    
    // checks to see if the original string that was input is the same as the reversed version of the string
    if (string1 == joinString)
    {
        document.getElementById("results").innerHTML = "Is a palindrome";

    }
    else
    {
        document.getElementById("results").innerHTML = "Not a palindrome";
    }

    
    
}