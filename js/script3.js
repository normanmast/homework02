
var a = prompt( 'Do you eat Steak ?');
if (a === 'yes')     console.log('Here\'s a steak sandwich')
        else     console.log('Here\'s TOFU');



var b = prompt( 'What is your birthyear ?');

var years = new Date(new Date() - new Date(b)).getFullYear() ;
    console.log(years);