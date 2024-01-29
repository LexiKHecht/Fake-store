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

    if (response.ok) {
      const json = await response.json();
      console.log(json);
      try {
        const message = await Email.send({
          SecureToken: json.smtpjs_secure_token,
          To: email,
          From: 'TotallyRealFakeStore@gmail.com',
          Subject: 'Thank you - Real Fake Store',
          Body: `
    <img src="https://imgur.com/OTK4tfx.png" alt="StoreLogo"/>
    <p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;">

      We hope this email finds you well and in great spirits. On behalf of the entire Fake Store team, we would like to extend a warm welcome and express our sincere gratitude for joining our website.

      Thank you for signing up with us! Your decision to become a part of the Fake Store family means a lot to us, and we are thrilled to have you on board.

      By becoming a member, you now have access to exclusive updates, special promotions, and a first look at our latest products. We are confident that you will find great value in being a part of our community, and we are committed to delivering an exceptional shopping experience for you.

      <br>
      <br>

      We encourage you to explore our website regularly, as we frequently update our product offerings and promotions. If you have any questions or need assistance, our dedicated customer support team is always here to help.

      Once again, thank you for choosing Fake Store. We look forward to serving you and providing you with a fantastic shopping experience.


      </p>
      <p>
        Warm regards,<br>Real Fake Store Team
      </p>`,
        });
        if (message === 'OK') {
          console.log('check your email');
        } else {
          console.log('something went wrong');
        }
      } catch (err) {
        console.log(err);
        console.log('You signed up');
      }
      document.location.replace('/profile');
    } else {
      console.log(response);
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

document
  .querySelector('.new-user-form')
  .addEventListener('click', signupFormHandler);

document
  .querySelector('#login-route')
  .addEventListener('click', loginRouteHandler);
