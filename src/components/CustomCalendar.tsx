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
    calendar: { startDay: 1 },
  });

  const { year, month, days } = calendars[0];

  const onMoveToNow = () => onOffsetChange(new Date());

  const onMoveToNewYear = () => {
    const currentYear = new Date().getFullYear();
    onOffsetChange(new Date(currentYear + 1, 0, 1));
  };

  const size = 7; //размер подмассива
  const mainTable = []; //массив в который будет выведен результат.
  for (let i = 0; i < Math.ceil(days.length / size); i++) {
    mainTable[i] = days.slice(i * size, i * size + size);
  }

  return (
    <section>
      <div>
        <button className="btn" onClick={onMoveToNow}>
          Show today
        </button>
        <button className="btn" onClick={onMoveToNewYear}>
          Show the next New Year
        </button>
      </div>

      {selectedDates.length > 0 ? <h1>selectedDates[0]</h1> : null}
      <div className="m-3 flex justify-between">
        <div className="flex align-middle">
          <button
            {...subtractOffset({ months: 1 })}
            aria-label="Previous month"
          >
            <MoveLeft />
          </button>
          <span>
            {month} {year}
          </span>
          <button {...addOffset({ months: 1 })} aria-label="Next month">
            <MoveRight />
          </button>
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
