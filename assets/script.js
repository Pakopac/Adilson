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
        choiceIndustry.style.background = 'rgba(0, 0, 0, 0.8)';
        choiceIndustry.style.justifyContent = 'start';
        switchIndustry.style.display = 'block';
        titleIndusty.style.color = '#FFFFFF';
        titleIndusty.style.background = 'transparent';
        titleIndusty.style.border = 0;

        choiceIndividual.style.background = 'rgba(0, 0, 0, 0.4)';
        choiceIndividual.style.justifyContent = 'center';
        switchIndividual.style.display = 'none';
        titleIndividual.style.color = '#323335';
        titleIndividual.style.background = '#FFFFFF';
        titleIndividual.style.border = '1px solid #6599A0';
    }
    else {
        choiceIndividual.style.background = 'rgba(0, 0, 0, 0.8)';
        choiceIndividual.style.justifyContent = 'start';
        switchIndividual.style.display = 'block';
        titleIndividual.style.color = '#FFFFFF';
        titleIndividual.style.background = 'transparent';
        titleIndividual.style.border = 0;

        choiceIndustry.style.background = 'rgba(0, 0, 0, 0.4)';
        choiceIndustry.style.justifyContent = 'center';
        switchIndustry.style.display = 'none';
        switchIndustry.style.display = 'none';
        titleIndusty.style.color = '#323335';
        titleIndusty.style.background = '#FFFFFF';
        titleIndusty.style.border = '1px solid #6599A0';
    }
}