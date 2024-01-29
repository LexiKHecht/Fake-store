const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (password.length < 8) {
      invalidPassword();
    }
    if (response.ok) {
      document.location.replace('/profile');
    }
  }
};

const loginRouteHandler = async (event) => {
  event.preventDefault();
  const response = await fetch('/login', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/login');
  } else {
    alert(response.statusText);
  }
};

const invalidPassword = () => {
  var quickTimerCtr = 20;
  hiddenElement = document.querySelector('#invalid-password');
  const quickTimer = setInterval(function () {
    quickTimerCtr--;

    // if quickTimerCtr is greater than 0 then show result
    hiddenElement.classList.remove('hidden');
    console.log('quickTimerCtr:' + quickTimerCtr);
    //  if quickTimer is less than or equal to 0 then hide the result
    if (quickTimerCtr <= 0) {
      // Clears interval
      hiddenElement.classList.add('hidden');
      clearInterval(quickTimer);
    }
    // set in Nanoseconds
  }, 100);
};

document
  .querySelector('.new-user-form')
  .addEventListener('click', signupFormHandler);

document
  .querySelector('#login-route')
  .addEventListener('click', loginRouteHandler);
