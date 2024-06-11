import "./App.css";
import { CustomInput } from "./components/CustomInput";

function App() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div>
        <img src="logo.svg" alt="logo sirius" />
      </div>
      <h1 className="text-2xl">Вход в Sirius Future</h1>
      <div className="flex flex-col gap-2">
        <div>
          <CustomInput type="email" placeholder="E-mail"></CustomInput>
        </div>
        <div>
          <CustomInput type="password" placeholder="Пароль"></CustomInput>
        </div>
        <div className="flex w-60 justify-start">
          <input id="rememberUser" type="checkbox" />
          <label className="pl-1 text-xs text-gray-400" htmlFor="rememberUser">
            Запомнить меня
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
