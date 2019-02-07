var choiceIndustry = document.querySelector('.choice-industry');
var choiceIndividual = document.querySelector('.choice-individual');
var switchIndustry = document.querySelector('.switch-industry');
var switchIndividual = document.querySelector('.switch-individual');
var titleIndividual = document.querySelector('.titleIndividual');
var titleIndusty = document.querySelector('.titleIndustry');

var labelSwitch = document.querySelector('.checkSwitch');

window.onload = function () {
    document.querySelector('#item-navbar').style.display = 'none';

    labelSwitch.checked = false;

  choiceIndustry.onclick = () => {
      labelSwitch.checked = true;
      changeSwitchState();
  };

  choiceIndividual.onclick = () => {
      labelSwitch.checked = false;
      changeSwitchState();
  };

  labelSwitch.onclick = () => {
      changeSwitchState()
  };

    $(document).on('click', 'a[href^="#solution"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });
    $(document).on('click', 'a[href^="#application"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });
    $(document).on('click', 'a[href^="#contact"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });

    document.querySelector('.fa-bars').onclick = () => {
        if(document.querySelector('#item-navbar').style.display === 'none') {
            document.querySelector('#item-navbar').style.display = 'flex'
        }
        else{
            document.querySelector('#item-navbar').style.display = 'none'
        }
    };

    document.querySelector('#main').onclick = (e) => {
        if(e.target != document.getElementById('item-navbar')){
            document.querySelector('#item-navbar').style.display = 'none';
        }
    };

    $('.slider-capsule').slick({
        infinite: true,
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:"<img width='10px' class='a-left control-c prev slick-prev' src='assets/images/arrow-prev.png'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='assets/images/arrow-next.png'>",
    });

    $('.blocks-application-mobile').slick({
        infinite: true,
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:"<img width='10px' class='a-left control-c prev slick-prev' src='assets/images/arrow-prev.png'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='assets/images/arrow-next.png'>",
    });

    $('.parteners-mobile').slick({
        infinite: true,
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:"<img width='10px' class='a-left control-c prev slick-prev' src='assets/images/arrow-prev.png'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='assets/images/arrow-next.png'>",
    });

};

function changeSwitchState() {
    if(labelSwitch.checked === true){
        choiceIndustry.classList.add('enable-switch-block');
        switchIndustry.classList.add('enable-switch-text');
        titleIndusty.classList.add('enable-switch-title');

        choiceIndividual.classList.remove('enable-switch-block');
        switchIndividual.classList.remove('enable-switch-text');
        titleIndividual.classList.remove('enable-switch-title');
    }
    else {
        choiceIndustry.classList.remove('enable-switch-block');
        switchIndustry.classList.remove('enable-switch-text');
        titleIndusty.classList.remove('enable-switch-title');

        choiceIndividual.classList.add('enable-switch-block');
        switchIndividual.classList.add('enable-switch-text');
        titleIndividual.classList.add('enable-switch-title');
    }
}