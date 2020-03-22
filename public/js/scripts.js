$(document).ready(function () {

    $.ajaxSetup({

        header: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

});