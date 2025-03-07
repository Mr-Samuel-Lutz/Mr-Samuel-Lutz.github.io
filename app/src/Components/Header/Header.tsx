import logo from "../../Images/brick.png";

function Header() {
  return (
    <div className="bg-gray-200 py-2 pl-4 rounded-sm">
      <div className="cursor-pointer flex w-36">
        <img src={logo} alt="logo" className="w-8 mx-2" />
        <h1 className="font-semibold">Lutz Haus</h1>
      </div>
    </div>
  );
}

export default Header;
