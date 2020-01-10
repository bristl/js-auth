export function getAuthForm() {
  return `
    <form class="mui-form" id="auth-form">
        <div class="mui-textfield mui-textfield--float-label">
          <input
            type="email"
            id="email"
          >
          <label for="email">Email</label>
        </div>
        <div class="mui-textfield mui-textfield--float-label">
          <input
            type="password"
            id="password"
          >
          <label for="password">password</label>
        </div>
        <button
          type="submit"
          class="mui-btn mui-btn--raised mui-btn--primary"
        >Войти</button>
      </form>
  `
}

export function authWithEmailAndPassword(email, password) {
  const apiKey = 'AIzaSyC8P_NvhHPiokFHGqmfI5p8cT-SdXjr_t0';
  return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
    method: 'POST',
    body: JSON.stringify({
      email: email, password: password,
      returnSecureToken: true
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .then(() => console.log('hello'))
}
