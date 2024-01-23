const routeToSettingsHandler = async (event) => {
  event.preventDefault();

  const response = await fetch('/settings', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/settings');
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector('#settings-route')
  .addEventListener('click', routeToSettingsHandler);
