"use client";
import { UserRole } from "@/app/generated/prisma";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [role, setRole] = useState<UserRole | "">("");

  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    if (password !== confirm) {
      setError("As senhas não coincidem");
      return;
    }
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET_TOKEN}`,
        },
        body: JSON.stringify({ email, name, password, role }),
      });
      if (!res.ok) {
        const errorData = await res.json();
        setError(errorData.message || "Erro ao criar conta");
        setLoading(false);
        return;
      } else {
        setError("");
        setLoading(false);
        console.log("Registration response:", res);
        router.push("/login");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao criar conta");
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="account-form self-center p-4 flex flex-col gap-4"
    >
      <h1>Criar Conta</h1>
      <div className="">
        <label htmlFor="name">Nome Completo</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirmar Senha</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className={password === confirm ? "" : "text-red-400"}
          required
        />
      </div>
      <div>
        <label htmlFor="desire">Interesse</label>
        <select
          id="role"
          name="role"
          value={role}
          onChange={(e) => setRole((e.target.value as UserRole) || "")}
        >
          <option value="">Selecione uma opção</option>
          <option value="BUYER">Explorar e adquirir Projetos</option>
          <option value="SELLER">Listar Projetos</option>
        </select>
      </div>

      <div>
        <input
          type="submit"
          value={loading ? "Criando Conta..." : "Criar Conta"}
        />
        <p className="text-center">
          Ja tens uma conta? <Link href="/login">Entrar</Link>
        </p>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    });

    if (res?.error) {
      if (res.error) {
        setError(res.error);
        console.error("Erro ao fazer login:", res.error);
      }
      setLoading(false);
    } else {
      setError(null);
      setLoading(false);
      router.push("/");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="account-form self-center p-4 flex flex-col gap-4"
    >
      <h1>Fazer Login</h1>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <div>
        <input
          type="submit"
          value={loading ? "Carregando..." : "Fazer Login"}
          disabled={loading}
        />
        <p className="text-center">
          Sem conta? <Link href="/signup">Regista-te</Link>
        </p>
      </div>
      {/* <button
        type="button"
        className="google-signin flex items-center gap-3 justify-center border my-5 bg-amber-50"
        onClick={() => signIn("google", { callbackUrl: "/" })}
      >
        <svg width="18" height="18" viewBox="0 0 48 48">
          <path
            fill="#EA4335"
            d="M24 9.5c3.1 0 5.8 1.1 8 3.2l6-6C34.2 3.2 29.5 1 24 1 14.9 1 7.3 6.8 3.6 15.1l7.1 5.5C12.5 14.3 17.8 9.5 24 9.5z"
          />
          <path
            fill="#34A853"
            d="M46.1 24.5c0-1.7-.1-2.9-.4-4.2H24v8h12.7c-.6 3-2.3 5.6-4.9 7.3l7.5 5.8c4.4-4.1 6.8-10.1 6.8-16.9z"
          />
          <path
            fill="#4A90E2"
            d="M10.7 28.6c-.5-1.4-.8-2.9-.8-4.6s.3-3.2.8-4.6l-7.1-5.5C1.9 17.5 1 20.6 1 24s.9 6.5 2.6 10.1l7.1-5.5z"
          />
          <path
            fill="#FBBC05"
            d="M24 47c5.5 0 10.2-1.8 13.6-4.9l-7.5-5.8c-2.1 1.4-4.8 2.2-6.1 2.2-6.2 0-11.5-4.8-13.3-11.1l-7.1 5.5C7.3 41.2 14.9 47 24 47z"
          />
        </svg>
        <span>Sign In with Google</span>
      </button> */}
    </form>
  );
};
