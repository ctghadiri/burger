$(function(){
    $(".change-devoured").on("click", function (event){
        var id = $(this).data("id");
        var newHunger = $(this).data("newhunger");

        var newHungerState = {
            devoured: newHunger
        };

        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newHungerState
        }).then(
            function(){
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event){
        event.preventDefault();
        console.log('click')
        var newBurger = {
            burger_name: $("#burgs").val(),
            devoured: $("[burger_name = devoured]:checked").val()
        };
        console.log("create")


        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function(){
                console.log("reload")
                location.reload();
            }
        );
    });
});