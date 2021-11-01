const auth = (email, password) => {
  console.log(email, password)
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
  .then(response => response.json())
  .then(data => alert(`Bem-vindo(a) ${data[0].username}`))
  .catch(err => 'Login inválido')
}

const register = (username, email, password) => {

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
        console.log('res',res)
        throw new Error(res.json())
      }else{
        res.json()
      }
    } 
  )
  .then(data => {
    alert(`usuário ${username} criado com sucesso`)
  })
  .catch(err => {
    alert('Erro ao salvar usuário')
  })
}