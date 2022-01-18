const authUser = (email, password) => {
  if(!email && !password){
    alert('Informe suas credenciais')
    return
  }

  if(!email.includes('@') || !email.includes('.com')){
    alert('Formato de email inválido')
    return
  }

  console.log(BASE_URL+'/users/auth')

  fetch(BASE_URL+'/users/auth',{
    method:'POST',
    body: JSON.stringify({
      email,
      password
    }),
    headers: {
      'Content-Type':'application/json'
    }
  })
  .then(async res => {
    if(res.status !== 200){
      const error = await res.json();
      console.log('error',error)
      alert(error.error)
      throw new Error(error)
    }
    return res.json()
  } 
)
  .then(data => {
    console.log('data',data.user)
    alert(`Bem-vindo(a) ${data.user[0].username}`)
    localStorage.USERNAME = data.user[0].username;
    localStorage.EMAIL = data.user[0].email;
    localStorage.IMAGE_URL = data.user[0].filename;
    localStorage.USER_ID = data.user[0].id;
    window.location.href = './profile.html'
  })
  .catch()
}

const registerUser = (username, email, password) => {
  if(!username && !email && !password){
    alert('Informe seus dados')
    return
  }

  if(!email.includes('@') || !email.includes('.com')){
    alert('Formato de email inválido')
    return
  }
  const data = new FormData();

  data.append('username', username);
  data.append('email',email);
  data.append('password', password);
  data.append('files',iptFile.files[0]);

  fetch(BASE_URL+'/users',{
    method:'POST',
    body: data,
  })
  .then(async res => {
      if(res.status !== 201){
        const error = await res.json();
        alert(error.error)
        throw new Error(error)
      }else{
        alert(`usuário ${username} criado com sucesso`)
        window.location.href = "./login.html"
        // res.json()
      }
    } 
  )
  // .then(data => {
    
  // })
  .catch()
}

const forgotPass = (email) => {
  if(!email){
    alert('Informe seu email')
    return
  }

  if(!email.includes('@') || !email.includes('.com')){
    alert('Formato de email inválido')
    return
  }

  fetch(BASE_URL+'/users/forgot',{
    method:'POST',
    body: JSON.stringify({
      email
    }),
    headers: {
      'Content-Type':'application/json'
    }
  })
  .then(async res => {
      console.log('res',res)
      if(res.status !== 200){
        const error = await res.json();
        alert(error.error)
        throw new Error(error)
      }else{
        return res.json()
      }
    } 
  )
  .then(data => {
    alert(data.message)
    window.location.href = "./recuperar.html"
  })
  .catch();

}

const resetPass = (token, password) => {
  if(!token || !password){
    alert('Informe o token e a senha')
    return
  }
  console.log(BASE_URL+'/users/reset')
  fetch(BASE_URL+'/users/reset',{
    method:'POST',
    body: JSON.stringify({
      token: token.trim(),
      password
    }),
    
    headers: {
      'Content-Type':'application/json'
    }
  })
  .then(async res => {
      if(res.status !== 200){
        const error = await res.json();
        alert(error.error)
        throw new Error(error)
      }else{
        return res.json()
      }
    } 
  )
  .then(data => {
    // console.log('data', data)
    alert(data.message)
    window.location.href = "./login.html"
  })
  .catch();
}

const signout = () => {
  window.location.href = './index.html';
  localStorage.clear();
}

window.onload = () => {
    let includes = true;
    !Object.keys(localStorage).length 
    ? includes = !includes
    : Object.keys(localStorage).forEach(key => {
      if(!['USERNAME','EMAIL','IMAGE_URL','USER_ID'].includes(key)){
        includes = false
      };
    })

    if(includes){
      window.location = './profile.html'
    }
  }
