// $('.js-anchor-link').click(function(e){
//     e.preventDefault();
//     var target = $($(this).after('href'));
//     if(target.lenth){
//         var scrolTo =target.offset().top;
//         $('body,html').animate({scrolltop:scrollTo+'px'},800);
//     }
// });
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