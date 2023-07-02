document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    // Obter os valores dos campos
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var dob = document.getElementById('dob').value;
    var cipcrm = document.getElementById('cipcrm').value;
    var specialization = document.getElementById('specialization').value;
    var password = document.getElementById('password').value;
  
    // Verificar o comprimento da senha
    if (password.length >= 6 && password.length <= 16) {
      // Criar um objeto com os dados cadastrados
      var userData = {
        name: name,
        email: email,
        dob: dob,
        cipcrm: cipcrm,
        specialization: specialization,
        password: password
      };
  
      // Armazenar os dados no Local Storage
      localStorage.setItem('userData', JSON.stringify(userData));
  
      // Exibir uma mensagem de sucesso
      alert('Cadastro realizado com sucesso!');
    } else {
      // Exibir uma mensagem de erro para o usuário
      alert('A senha deve ter entre 6 e 16 dígitos.');
    }
  
    // Redirecionar para outra página (opcional)
    // window.location.href = 'outra_pagina.html';
  });
  