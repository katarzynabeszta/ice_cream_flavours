const input = document.querySelector('.search');
const flavoursList = document.querySelectorAll('li');

const findFlavour = (e) => {
  const inputValue = e.target.value.toLowerCase();

  flavoursList.forEach((el) => {
    if (el.textContent.toLowerCase().indexOf(inputValue) !== -1) {
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
    }
  });
};

input.addEventListener('keyup', findFlavour);
