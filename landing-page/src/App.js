import React, { useState } from 'react';
import Input from './form/input';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    nickname: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Additional validation can be added here if necessary

    if (!formData.email || !formData.password || !formData.nickname) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    const response = await fetch('https://your-api-endpoint.com/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      console.log('Form submitted successfully');
    } else {
      console.error('Error submitting form');
    }
  };

  return (
    <div className="flex md:m-20 md:flex-row md:gap-0 gap-8 flex-col m-10 justify-between text-white">
      <section className="flex flex-col gap-8 md:w-1/2">
        <h1 className="text-6xl md:self-start self-center">MARÁ</h1>
        <h2 className="font-extrabold text-3xl"> Resgate dos Encantos</h2>
        <h3 className="text-xl">Bem vindo aos encantos do Maranhão</h3>
        <p>
          Este é apenas um formulário para você acessar
          o nosso jogo. Por favor insira um email e senha
          que seja fácil de lembrar. Também escolha um apelido para o seu personagem.
        </p>
      </section>
      <section className="flex flex-col gap-8 md:w-1/3">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <Input
            label="Email"
            type="email"
            placeholder="exemplo@email.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            label="Senha"
            type="password"
            placeholder="****"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Input
            label="Apelido"
            type="text"
            placeholder="Sephiroth"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            required
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Enviar</button>
        </form>
      </section>
    </div>
  );
}

export default App;
