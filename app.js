var nextStep = document.querySelector('#nextStep');

  nextStep.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('my_form').style.display = 'none';
    document.getElementById('thank_you').style.display = 'block';

  });