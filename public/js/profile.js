const routeToProfileHandler = async (event) => {
  event.preventDefault();

  const response = await fetch('/profile', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/profile');
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector('#profile-route')
  .addEventListener('click', routeToProfileHandler);
