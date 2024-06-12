export const CustomCheckbox = () => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <input type="checkbox" defaultChecked className="checkbox" />
        <span className="label-text ml-1">Запомнить меня</span>
      </label>
    </div>
  );
};
