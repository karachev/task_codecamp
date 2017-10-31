
function convertHTML(str) {
    // &colon;&rpar;
    var newStr = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] === '&') {
            newStr += '&​amp;';
        } else if (str[i] === '<') {
            newStr += '&​lt;';
        } else if (str[i] === '>') {
            newStr += '&​gt;';
        } else if (str[i] === '"') {
            newStr += '&​quot;';
        } else if (str[i] === "'") {
            newStr += '&​apos;';
        } else {
            newStr += str[i];
        }
    }
    // console.log(newStr);
    return newStr;
}
convertHTML("Sixty > twelve");