
var i

function FirstNotRepeatedChar(string) {
    for ( i = 0; i < string.length; i++) {
        if(string.indexOf(string.charAt(i)) == string.lastIndexOf(string.charAt(i))) {
            return string.charAt(i)
        }
    }   
}
console.log(FirstNotRepeatedChar('abacddbec'));