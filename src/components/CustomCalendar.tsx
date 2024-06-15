import { MoveLeft, MoveRight, PencilLine, CircleX } from "lucide-react";

import { useEffect, useState } from "react";

import { useDatePicker } from "@rehookify/datepicker";

import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import {
  initializeCalendar,
  setFirstTime,
  setSecondTime,
  setChangeMode,
  setChangingLesson,
} from "../slices/calendarSlice";
import type { DateOfCalendar } from "../slices/calendarSlice";
import classNames from "classnames";

export const CustomCalendar = () => {
  const [selectedDates, onDatesChange] = useState<Date[]>([]);
  const [offsetDate, onOffsetChange] = useState<Date>(new Date());

  const weekDays = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];

  const {
    data: { calendars },
    propGetters: { addOffset, subtractOffset },
  } = useDatePicker({
    selectedDates,
    onDatesChange,
    offsetDate,
    onOffsetChange,
    dates: { toggle: true },
    calendar: { startDay: 1, offsets: [-1], mode: "fluid" },
  });

  const { year, month, days } = calendars[0];

  const onMoveToNow = () => onOffsetChange(new Date());

  // const onMoveToNewYear = () => {
  //   const currentYear = new Date().getFullYear();
  //   onOffsetChange(new Date(currentYear + 1, 0, 1));
  // };

  // const currentMonthDays = days.filter((dpday) => {
  //   if (dpday.inCurrentMonth === true) {
  //     return dpday;
  //   }
  // });

  // const previousMonthDays = days1.filter((dpday) => {
  //   if (dpday.inCurrentMonth === true) {
  //     return dpday;
  //   }
  // });

  // const formattedDays = [...currentMonthDays];

  // const additionalDays = 35 - currentMonthDays.length;

  // for (let i = 0; i < additionalDays; i += 1) {
  //   formattedDays.unshift(previousMonthDays[previousMonthDays.length - 1 - i]);
  // }

  // console.log(currentMonthDays);

  // console.log(previousMonthDays);

  // console.log(formattedDays);

  const dispatch = useAppDispatch();
  const calendar = useAppSelector((state) => state.calendar.value);
  const changeMode = useAppSelector((state) => state.calendar.changeMode);

  const formattedDays = days.map((dpday, i) => {
    return {
      day: dpday.day,
      inCurrentMonth: dpday.inCurrentMonth,
      lessons: {
        firstTitle: "Ментальная арифметика",
        firstTime: "13:15 - 13:45",
        secondTitle: "Ментальная арифметика",
        secondTime: "-",
        changing: false,
        i,
      },
    };
  });

  useEffect(() => {
    dispatch(initializeCalendar(formattedDays));
  }, [offsetDate]);

  const size = 7; //размер подмассива
  const mainTable: DateOfCalendar[][] = []; //массив в который будет выведен результат.
  for (let i = 0; i < Math.ceil(calendar.length / size); i++) {
    mainTable[i] = calendar.slice(i * size, i * size + size);
  }

  const dateNumberClass = (inCurrentMonth: boolean) =>
    classNames({
      "text-gray-400": !inCurrentMonth,
    });

  return (
    <section>
      <div className="flex justify-between">
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Выбрать предмет
          </option>
          <option>Ментальная арифметика</option>
          <option>Программирование</option>
          <option>Скорочтение</option>
        </select>
        <div>
          {changeMode === false ? (
            <button
              onClick={() => dispatch(setChangeMode())}
              className="btn w-full rounded-3xl bg-primary text-white hover:bg-secondary"
            >
              Изменить расписание
            </button>
          ) : (
            <button
              onClick={() => dispatch(setChangeMode())}
              className="btn w-full rounded-3xl bg-accent hover:bg-accent"
            >
              Сохранить изменения
            </button>
          )}
        </div>
      </div>
      {selectedDates.length > 0 ? <h1>selectedDates[0]</h1> : null}
      <div className="m-3 flex justify-between">
        <div className="flex">
          <button
            {...subtractOffset({ months: 1 })}
            aria-label="Previous month"
          >
            <MoveLeft />
          </button>
          <div className="flex h-14 w-36 items-center justify-center text-center">
            <span>
              {month} {year}
            </span>
          </div>
          <button {...addOffset({ months: 1 })} aria-label="Next month">
            <MoveRight />
          </button>
          <div>
            <button
              className="btn btn-outline ml-5 rounded-3xl border-primary hover:border-primary hover:bg-primary"
              onClick={onMoveToNow}
            >
              Сегодня
            </button>
          </div>
        </div>
      </div>
      <table className="table w-full border-collapse">
        <thead>
          <tr className="text-right">
            {weekDays.map((day) => (
              <td key={`${month}-${day}`}>{day}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {mainTable.map((row, i) => {
            return (
              <tr className="h-32" key={i}>
                {row.map((dpDay) => (
                  <td
                    className="border-slate-300 h-24 w-1/12 border p-1"
                    key={dpDay.day}
                  >
                    <div className="flex h-full flex-col justify-between">
                      <div className="flex justify-end">
                        <span className={dateNumberClass(dpDay.inCurrentMonth)}>
                          {dpDay.day}
                        </span>
                      </div>

                      {dpDay.lessons.changing === false ? (
                        <div className="flex flex-col">
                          {changeMode === true ? (
                            <div className="flex justify-between text-gray-500">
                              <button
                                onClick={() =>
                                  dispatch(setChangingLesson(dpDay.lessons))
                                }
                              >
                                <PencilLine />
                              </button>
                              <button
                                onClick={() => {
                                  dispatch(
                                    setSecondTime({
                                      time: "-",
                                      i: dpDay.lessons.i,
                                    }),
                                  ),
                                    dispatch(
                                      setFirstTime({
                                        time: "-",
                                        i: dpDay.lessons.i,
                                      }),
                                    );
                                }}
                              >
                                <CircleX />
                              </button>
                            </div>
                          ) : null}

                          <div className="mb-1 text-nowrap rounded-sm border-2 border-accent pl-1 pr-1">
                            <p className="text-xs font-light">
                              {dpDay.lessons.firstTime}
                            </p>
                            <p className="text-xs font-light">
                              {dpDay.lessons.firstTitle}
                            </p>
                          </div>
                          <div className="rounded-sm border-2 border-accent pl-1 pr-1">
                            <p className="text-xs font-light">
                              {dpDay.lessons.secondTime}
                            </p>
                            <p className="text-xs font-light">
                              {dpDay.lessons.secondTitle}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col">
                          {changeMode === true ? (
                            <div className="flex justify-between text-gray-500">
                              <button
                                onClick={() =>
                                  dispatch(setChangingLesson(dpDay.lessons))
                                }
                              >
                                <PencilLine />
                              </button>
                              <button
                                onClick={() => {
                                  dispatch(
                                    setSecondTime({
                                      time: "-",
                                      i: dpDay.lessons.i,
                                    }),
                                  ),
                                    dispatch(
                                      setFirstTime({
                                        time: "-",
                                        i: dpDay.lessons.i,
                                      }),
                                    );
                                }}
                              >
                                <CircleX />
                              </button>
                            </div>
                          ) : null}
                          <div className="mb-1 text-nowrap rounded-sm border-2 border-accent pl-1 pr-1">
                            <input
                              onChange={(e) =>
                                dispatch(
                                  setFirstTime({
                                    time: e.target.value,
                                    i: dpDay.lessons.i,
                                  }),
                                )
                              }
                              value={dpDay.lessons.firstTime}
                              type="text"
                              placeholder="Type here"
                              className="input input-xs input-bordered w-full max-w-xs"
                            />
                            <p className="text-xs font-light">
                              {dpDay.lessons.firstTitle}
                            </p>
                          </div>
                          <div className="rounded-sm border-2 border-accent pl-1 pr-1">
                            <input
                              onChange={(e) =>
                                dispatch(
                                  setSecondTime({
                                    time: e.target.value,
                                    i: dpDay.lessons.i,
                                  }),
                                )
                              }
                              value={dpDay.lessons.secondTime}
                              type="text"
                              placeholder="Type here"
                              className="input input-xs input-bordered w-full max-w-xs"
                            />
                            <p className="text-xs font-light">
                              {dpDay.lessons.secondTitle}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};
