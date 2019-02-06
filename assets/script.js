var choiceIndustry = document.querySelector('.choice-industry');
var choiceParticulier = document.querySelector('.choice-particulier');
var switchIndustry = document.querySelector('.switch-industry');
var switchParticulier = document.querySelector('.switch-particulier');

var labelSwitch = document.querySelector('.checkSwitch');

window.onload = function () {
    labelSwitch.checked = false

  choiceIndustry.onclick = () => {
      changeSwitchState('block','none');
          labelSwitch.checked = false
  };

  choiceParticulier.onclick = () => {
      changeSwitchState('none','block');
          labelSwitch.checked = true
  }

  labelSwitch.onclick = () => {
      if(labelSwitch.checked == true){
          changeSwitchState('none','block');
      }
      else {
          changeSwitchState('block','none');
      }
  }

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });

};

function changeSwitchState(stateIndustry, stateParticulier) {
    switchIndustry.style.display = stateIndustry;
    switchParticulier.style.display = stateParticulier
}