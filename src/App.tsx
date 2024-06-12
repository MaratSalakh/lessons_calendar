import "./App.css";
import { CustomPasswordInput } from "./components/CustomPasswordInput";
import { CustomButton } from "./components/CustomButton";
import { CustomCheckbox } from "./components/CustomCheckbox";

function App() {
  return (
    <div className="mt-20 flex flex-col items-center gap-2">
      <div>
        <img src="logo.svg" alt="logo sirius" />
      </div>
      <h1 className="text-3xl">Вход в Sirius Future</h1>
      <div className="flex flex-col gap-2">
        <div>
          {/* <CustomInput type="email" placeholder="E-mail"></CustomInput> */}
        </div>
        <div>
          <input
            type="email"
            placeholder="E-mail"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <CustomPasswordInput placeholder="Пароль"></CustomPasswordInput>
        </div>
        <div className="flex justify-start">
          <CustomCheckbox />
        </div>
        <div>
          <CustomButton>Войти</CustomButton>
        </div>
        <div className="flex flex-col justify-between gap-16">
          <div className="flex justify-between">
            <a className="link-hover link link-info">Я забыл пароль</a>
            <a className="link-hover link link-info">Войти как тренер</a>
          </div>
          <div className="flex flex-col items-center">
            <span>Нет аккаунта?</span>
            <a className="link-hover link link-info">Зарегистрироваться</a>
          </div>
          <div className="flex items-center justify-center gap-1">
            <span className="text-xl text-gray-500">RU</span>
            <span className="text-gray-500">EN</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
