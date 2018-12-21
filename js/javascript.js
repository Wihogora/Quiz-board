// FRONT-END LOGIC

$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault();
        var answers = [];
        $('.correct').each(function () {
            answers.push($(this).prop('checked'));
})
console.log(answers);






// BUSINESS LOGIC

