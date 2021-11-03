const authUser = (email, password) => {
  if(!email && !password){
    alert('Informe suas credenciais')
    return
  }

  if(!email.includes('@') || !email.includes('.com')){
    alert('Formato de email inválido')
    return
  }
  fetch('http://localhost:3333/users/auth',{
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
    window.location.href = './'
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
  fetch('http://localhost:3333/users',{
    method:'POST',
    body: JSON.stringify({
      username,
      email,
      password
    }),
    headers: {
      'Content-Type':'application/json'
    }
  })
  .then(async res => {
      if(res.status !== 201){
        const error = await res.json();
        alert(error.error)
        throw new Error(error)
      }else{
        res.json()
      }
    } 
  )
  .then(data => {
    alert(`usuário ${username} criado com sucesso`)
    window.location.href = "./login.html"
  })
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
  fetch('http://localhost:3333/users/forgot',{
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
  console.log("amigo estou aqui");
  if(!token || !password){
    alert('Informe o token e a senha')
    return
  }
  fetch('http://localhost:3333/users/reset',{
    method:'POST',
    body: JSON.stringify({
      token,
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