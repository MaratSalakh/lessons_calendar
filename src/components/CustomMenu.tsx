import {
  Home,
  CalendarDays,
  Wallet,
  Headset,
  Trophy,
  Puzzle,
  FolderOpen,
  Settings,
  CircleHelp,
} from "lucide-react";

import cn from "classnames";

export const CustomMenu = () => {
  const linkClasses = cn("rounded-none", "rounded-e-3xl", "hover:bg-primary");

  return (
    <div className="flex flex-col gap-3 rounded-3xl bg-neutral pb-5 pr-5 pt-5">
      <img
        className="self-center"
        src="logoWithTitle.svg"
        alt="logo with title"
      />
      <ul className="menu w-56 pl-0">
        <li>
          <a className={linkClasses}>
            <Home />
            Главная
          </a>
        </li>
        <li>
          <a className={linkClasses}>
            <CalendarDays />
            Расписание
          </a>
        </li>
        <li>
          <a className={linkClasses}>
            <Wallet />
            Оплата
          </a>
        </li>
        <li>
          <a className={linkClasses}>
            <Trophy />
            Достижения
          </a>
        </li>
        <li>
          <a className={linkClasses}>
            <Puzzle />
            Тренажеры
          </a>
        </li>
        <li>
          <a className={linkClasses}>
            <FolderOpen />
            Библиотека
          </a>
        </li>
        <li>
          <a className={linkClasses}>
            <Headset />
            Проверка связи
          </a>
        </li>
        <li>
          <a className={linkClasses}>
            <Settings />
            Настройки
          </a>
        </li>
        <li>
          <a className={linkClasses}>
            <CircleHelp />
            Вопросы
          </a>
        </li>
      </ul>
      <div className="bg-gift ml-3 mr-3 flex flex-col items-start gap-3 rounded-2xl bg-white bg-right-bottom bg-no-repeat p-3">
        <h2 className="text-lg">Учитесь бесплатно</h2>
        <p className="text-xs font-light">
          Приводите друзей с детьми заниматься в Sirius Future и получайте
          подарки!
        </p>
        <button className="btn rounded-3xl bg-[#D8ECFF] hover:bg-white">
          <span className="font-light">Узнать</span>
        </button>
      </div>
    </div>
  );
};
