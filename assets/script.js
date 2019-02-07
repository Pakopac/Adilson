var choiceIndustry = document.querySelector('.choice-industry');
var choiceIndividual = document.querySelector('.choice-individual');
var switchIndustry = document.querySelector('.switch-industry');
var switchIndividual = document.querySelector('.switch-individual');
var titleIndividual = document.querySelector('.titleIndividual')
var titleIndusty = document.querySelector('.titleIndustry')

var labelSwitch = document.querySelector('.checkSwitch');

window.onload = function () {
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

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
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