
$(document).ready(function(){
    $(".button").click(function(){
        var value =$(this).attr("data-filter");
        if(value==='all'){
            $('.itemImg').show('1000');
        }else{
            $(".itemImg").not("."+value).hide("1000");
            $(".itemImg").filter("."+value).show("1000");

        }
        $(".button").click(function(){
            $(this).addClass('active').siblings().removeClass('active');
        })
    })
})