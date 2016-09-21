$(function () {
    var playSlide;
    function setImg() {
        $('.img-maior img').attr('src',$('.active img').attr('src'));
    }
    setImg();

    function rotateImg() {
        playSlide = setInterval(function () {
            var index = $active = $('li.active').next('li');
            $('.img-maior img').fadeOut('normal',function () {
                $('.img-pequena li').removeClass('active');
                $active.addClass('active');
                if(index.length == 0){
                    $('.img-pequena li:first').addClass('active');
                }
                setImg();
            });
            $('.img-maior img').fadeIn();
        },3000);
    }
    rotateImg();

    $('#minha-galeria').mouseover(function () {
        clearInterval(playSlide);
        $('.img-pequena li').hover(function () {
            $('.img-pequena li').removeClass('active');
            $(this).addClass('active');
            setImg();

        });
    });
    $('#minha-galeria').mouseout(function () {
        rotateImg();
    });
    $fullScreen = $('.full-scren');
    $('.img-rolder a').click(function () {
        var imgSrc = $(this).attr('href');
        console.log(imgSrc);

        $fullScreen.find('.img-full');
        return false;
    });
});