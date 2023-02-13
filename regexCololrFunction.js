
// Function to validate the
// hexadecimalColor_code 
function isValidHexaCode(str) {
    // Regex to check valid hexadecimalColor_code 
    let regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
 
    // if str is empty return false
    if (str == null) {
        return "false";
    }
 
    // Return true if the str matched the ReGex
    if (regex.test(str) == true) {
        return "true";
    }
    else {
        return "false";
    }
}
 

// both text color & shape color need to test for this