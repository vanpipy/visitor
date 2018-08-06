
(function() {
    $.ajax({
        url: '/api/sayHello',
        method: 'POST',
        success: function (response) {
            console.log(response);
        },
        error: function (error) {
            console.log(error);
        },
    });
})();
