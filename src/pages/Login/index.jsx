import main from "./Login.module.css";

const Login = () => {
  const empresa = "D'affari Sistemas de Informação";
  return (
    <>
      <main className={main.content}>
        <h1>SICOMANDA 3.0</h1>
        <form>
          <select name="login" id="login">
            <option value="" selected disabled>
              SELECIONE UM USUÁRIO
            </option>
          </select>
          <input type="password" id="senha" placeholder="SENHA" />
          <button id="enter">ENTRAR</button>
        </form>
        <div>
          <img src="./daffari.jpeg" alt="" />
          <h3>{empresa} &copy; 2025</h3>
        </div>
      </main>
    </>
  );
};

export default Login;
