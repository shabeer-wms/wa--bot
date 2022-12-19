run();
function run(){
    var elements = document.querySelectorAll('[aria-label=Send]');
    console.log(elements[0]);
    elements[0].click();
}