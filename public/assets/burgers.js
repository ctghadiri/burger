$(function(){
    $('.change-devoured').on('click', function (event){
        var id = $(this).data('id');
        var newHunger = $(this).data('newhunger');

        var newHungerState = {
            devoured: newHunger
        };

        $.ajax('/api/burger/' + id, {
            type: 'PUT',
            data: newHungerState
        }).then(
            function(){
                location.reload();
            }
        );
    });

    
})