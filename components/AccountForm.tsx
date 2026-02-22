"use client";
import Link from "next/link";

export const SignUpForm = () => {
  return (
    <form className="account-form self-center p-4 flex flex-col gap-4">
      <h1>Criar Conta</h1>
      <div className="">
        <label htmlFor="name">Nome Completo</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" name="password" required />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirmar Senha</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          required
        />
      </div>
      <div>
        <label htmlFor="desire">Interesse</label>
        <select id="desire" name="desire" required>
          <option value="">Selecione uma opção</option>
          <option value="comprar">Explorar e adquirir Projetos</option>
          <option value="vender">Listar Projetos</option>
        </select>
      </div>

      <div>
        <input type="submit" value="Criar Conta" />
        <p className="text-center">
          Ja tens uma conta? <Link href="/login">Entrar</Link>
        </p>
      </div>
    </form>
  );
};

export const LoginForm = () => {
  return (
    <form className="account-form self-center p-4 flex flex-col gap-4">
      <h1>Fazer Login</h1>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="seu@email.com"
          required
        />
      </div>
      <div>
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="*******"
          required
        />
      </div>
      <div>
        <input type="submit" value="Fazer Login" />
        <p className="text-center">
          Sem conta? <Link href="/signup">Regista-te</Link>
        </p>
      </div>
    </form>
  );
};
