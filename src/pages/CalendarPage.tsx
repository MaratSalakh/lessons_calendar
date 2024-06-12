import { CustomMenu } from "../components/CustomMenu";
import { CustomNavBar } from "../components/CustomNavBar";

export const CalendarPage = () => {
  return (
    <div className="m-5 flex">
      <div className="w-2/12">
        <div className="mt-5">
          <CustomMenu />
        </div>
      </div>
      <div className="w-10/12">
        <CustomNavBar />
      </div>
    </div>
  );
};
