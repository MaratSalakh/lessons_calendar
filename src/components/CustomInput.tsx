export const CustomInput = (props: { type: string; placeholder: string }) => {
  const { type, placeholder } = props;

  return (
    <div className="flex items-center rounded-md border">
      <input
        className="rounded-md p-1 placeholder:text-xs focus:border-violet-400 focus:outline-violet-400"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};
