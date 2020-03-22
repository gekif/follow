$(document).ready(function () {

    $.ajaxSetup({
        header: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $('.follow-button').click(function () {
        let user_id = $(this).data('id');
        let object = $(this);
        let currentFollowerCount = parseInt($(this).parent("div").find(".follower").text());

        console.log(user_id);
        console.log(currentFollowerCount);


    });

});