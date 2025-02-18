import { header_list } from "/src/api/pricing_list.js";
import { BrowserRouter, NavLink } from "react-router-dom";

const List_header = () => {
  return (
    <>
      {header_list.map((item, index) => (
        <div key={index} className="flex flex-col h-full">
          <div>
            <NavLink reloadDocument to="/contact" className="block px-4 py-2 font-bold hover:lg:border-[#c5a888] hover:lg:border-b text-gray-800 hover:text-[#c5a888] transition duration-500 ease-in-out hover:-translate-y-1">
              {item.title}
            </NavLink>
          </div>
          {item.elements.map((subItem, subIndex) => (
            <div key={subIndex} className="list-none">
              <NavLink reloadDocument to="/contact" className="block px-4 py-2 text-gray-800 hover:lg:border-[#c5a888] hover:lg:border-b hover:text-[#c5a888] transition duration-500 ease-in-out hover:-translate-y-1">
                {subItem}
              </NavLink>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export default List_header;