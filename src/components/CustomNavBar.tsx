export const CustomNavBar = () => {
  return (
    <div className="navbar flex justify-end gap-2 rounded-3xl bg-base-100 drop-shadow-md">
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="avatar btn btn-circle btn-ghost"
        >
          <div className="flex w-10 items-center justify-center rounded-full border-2 border-primary">
            <img className="p-1" src="message.svg" alt="" />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>

      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="avatar btn btn-circle btn-ghost"
        >
          <div className="w-10 rounded-full border-2 border-primary">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
