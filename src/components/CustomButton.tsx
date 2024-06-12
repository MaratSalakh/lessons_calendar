export const CustomButton = (props: { children: string }) => {
  const { children } = props;

  return (
    // <button className="mt-4 h-full rounded-3xl bg-violet-400 p-2 text-white hover:bg-violet-500">
    //   {children}
    // </button>
    <button className="btn w-full rounded-3xl bg-primary text-white hover:bg-secondary">
      {children}
    </button>
  );
};
