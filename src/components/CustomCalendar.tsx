import { MoveLeft, MoveRight } from "lucide-react";

import { useState } from "react";

import { useDatePicker } from "@rehookify/datepicker";

export const CustomCalendar = () => {
  const [selectedDates, onDatesChange] = useState<Date[]>([]);
  const [offsetDate, onOffsetChange] = useState<Date>(new Date());

  const {
    data: { weekDays, calendars },
    propGetters: { dayButton, addOffset, subtractOffset },
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

  const size = 7; //размер подмассива
  const mainTable = []; //массив в который будет выведен результат.
  for (let i = 0; i < Math.ceil(days.length / size); i++) {
    mainTable[i] = days.slice(i * size, i * size + size);
  }

  return (
    <section>
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
                    className="border-slate-300 border"
                    key={dpDay.$date.toDateString()}
                  >
                    <div className="flex h-24 justify-end">
                      <button className="flex align-top" {...dayButton(dpDay)}>
                        {dpDay.day}
                      </button>
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
