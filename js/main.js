/*
 * Javascript initialization on page load
 * */
$(document).ready(function () {

    /*
     * Initializing modal(s)
     * */
    $('.modal').modal();

    /*
     * To open Python information modal
     * */
    $('#python_modal_button').on('click', function () {
        $('#python_modal').modal('open');
    });

    /*
     * To open JAVA information modal
     * */
    $('#java_modal_button').on('click', function () {
        $('#java_modal').modal('open');
    });

    /*
     * To open PHP information modal
     * */
    $('#php_modal_button').on('click', function () {
        $('#php_modal').modal('open');
    });
});
