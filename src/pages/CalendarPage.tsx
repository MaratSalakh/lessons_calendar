import { CustomMenu } from "../components/CustomMenu";
import { CustomNavBar } from "../components/CustomNavBar";
import { CustomCalendar } from "../components/CustomCalendar";

export const CalendarPage = () => {
  return (
    <div className="m-5 flex">
      <div className="w-2/12">
        <div className="mt-5">
          <CustomMenu />
        </div>
      </div>
      <div className="dlex w-10/12 flex-col">
        <div>
          <CustomNavBar />
        </div>
        <div className="ml-3 mt-5">
          <CustomCalendar></CustomCalendar>
        </div>
      </div>
    </div>
  );
};
