import React, { useState, useRef, useEffect } from "react";
import { FaSearch, FaSun, FaMoon, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { servicesData } from "../Data/ServicesData";
import { solutionsData } from "../Data/SolutionsData";

import logo from "../assets/images/indotech_logo.png";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const mobileMenuRef = useRef(null);
  const searchRef = useRef(null);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const toggleTheme = () => {
    setDark((d) => !d);
    document.documentElement.classList.toggle("dark");
  };

  // click outside close handlers
  useEffect(() => {
    function handleClick(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) setSearchOpen(false);
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setMobileDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const linkClass = ({ isActive }) => (isActive ? "nav-link active-link  " : "nav-link text-white ");

  const menuData = [
    {
      title: "Services",
      sections: [
        {
          heading: "Services",
          to: "/services-all",
          items: [
            { label: "AI & Automation", to: "/services/service-AI&Automation" },
            { label: "ICT Managed Service", to: "/services/service-IctManagedServices" },
            { label: "Software Development", to: "/services/service-SoftwareDevelopment" },
            { label: "Zero Trust Security", to: "/services/service-zerotrustsecurity" },
            { label: "Business Consultation", to: "/consultancy/business" },
          ],
        },
      ],
    },
    {
      title: "Solutions",
      sections: [
        {
          heading: "Solutions",
          to: "/solutions-all",
          items: [
            { label: "ICT Solutions", to: "/solutions/solution-ict" },
            { label: "Network Solutions", to: "/solutions/solution-network" },
            // { label: "Zero Trust Security", to: "/solutions/solution-zerotrustsecurity" },
            { label: "SD WAN Solution", to: "/solutions/solution-sdwan" },
            { label: "LAN & WiFi Solution", to: "/solutions/solution-lanwifi" },
            { label: "DX Solution", to: "/solutions/solution-dx" },
            { label: "Internal AI Solutions", to: "/solutions/solution-internalai" },
            { label: "Global Solution", to: "/solutions/solution-globalsolution" },
          ],
        },
        // {
        //   heading: "Consultancy",
        //   to: "/consultancy-all",
        //   items: [{ label: "Business Consultancy", to: "/consultancy/business" }],
        // },
      ],
    },
  ];


const normalize = (str = "") => str.toLowerCase().replace(/[^a-z0-9]/g, "");
const isMatch = (text = "", search = "") => {
  if (!text || !search) return false;
  const t = normalize(text);
  const s = normalize(search);
  return t.includes(s); // FULL TEXT match
};

const computeResults = (q) => {
  if (!q.trim()) {
    setResults([]);
    return;
  }

  const allItems = [
    ...servicesData.map((i) => ({ ...i, type: "service" })),
    ...solutionsData.map((i) => ({ ...i, type: "solution" })),
  ];

  const filtered = allItems.filter((item) => isMatch(item.title, q));

  // No scoring, no ranking. But you may sort alphabetically if you want.
  filtered.sort((a, b) => a.title.localeCompare(b.title));

  setResults(filtered);
};


  // update results on query change
  useEffect(() => {
    computeResults(query);
  }, [query]);

  const handleSelect = (item) => {
    // navigate to correct route based on type
    if (item.type === "service") navigate(`/services/${item.id}`);
    else navigate(`/solutions/${item.id}`);

    // cleanup
    setQuery("");
    setSearchOpen(false);
    // close mobile menu if opened
    setMobileOpen(false);
  };


  return (
    <nav className="fixed pl-4 pr-4 lg:pl-8  top-0 left-0 w-full bg-[#2b4b4c]/45 dark:bg-gray-900/20 shadow-md z-50">

      <div className="w-full pl-4 pr-4 lg:pl-8   flex items-center justify-between gap-4 py-4 lg:py-2">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Attrabit Logo" className="h-10" />
        </Link>

        <div className="flex flex-row gap-6 items-center">
          <ul className="hidden lg:flex lg:items-center gap-4 font-medium lg:text-[16px]">
            <li><NavLink to="/" className={linkClass}> Home </NavLink></li>
            <li><NavLink to="services/service-SoftwareDevelopment" className={linkClass}> Software Development </NavLink></li>
            {menuData.map((menu) => (
              <DesktopDropdown key={menu.title} menu={menu} linkClass={linkClass} />
            ))}
            <li><NavLink to="/about-us" className={linkClass}>About Us</NavLink></li>
            <li><NavLink to="/recruitment" className={linkClass}>Recruitment</NavLink></li>
          </ul>

          {/* right controls */}
          <div className="flex items-center gap-4 relative">
            {/* Search */}
            <div ref={searchRef} className="relative">
              {searchOpen ? (
                <FaTimes
                  className="cursor-pointer text-red-500"
                  onClick={() => {
                    setSearchOpen(false);
                    setQuery("");
                    setResults([]);
                  }}
                />
              ) : (
                <FaSearch
                  className="cursor-pointer text-[#ddd] "
                  onClick={() => setSearchOpen(true)}
                />
              )}

              {searchOpen && (
                <div className="absolute top-10 right-0 bg-white dark:bg-gray-800 shadow-md p-2 w-65 rounded-md z-50">
                  <input
                    autoFocus
                    type="search"
                    placeholder="Search services & solutions..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="textColor w-full bg-transparent outline-none mb-2 placeholder-gray-400"
                  />

                  {query ? (
                    <div className="max-h-60 overflow-y-auto">
                      {results.length > 0 ? (
                        results.map((item) => (
                          <div
                            key={`${item.type}-${item.id}`}
                            onClick={() => handleSelect(item)}
                            className="cursor-pointer p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-between" >
                            <div>
                              <div className=" textColor font-medium ">{item.title}</div>
                              <div className="text-sm text-gray-500">
                                {item.type === "service" ? "Service" : "Solution"}
                              </div>
                            </div>
                            {/* <div className="text-xs text-gray-400">{item.type === "service" ? "S" : "Sol"}</div> */}
                          </div>
                        ))
                      ) : (
                        <div className="text-gray-500 p-2">No match found</div>
                      )}
                    </div>
                  ) : (
                    // <div className="text-gray-500 p-2">Type to search services & solutions</div>
                    <div></div>
                  )}
                </div>
              )}
            </div>

            {/* Theme toggle */}
            <button onClick={toggleTheme} className="cursor-pointer">
              {dark ? <FaSun className="text-yellow-400" /> : <FaMoon className=" text-[#D6D9D7]" />}
            </button>

            <NavLink to="/contact" className="hidden lg:block btnBorder ">Contact</NavLink>

            {/* Mobile toggle */}
            <button onClick={() => setMobileOpen((m) => !m)} className="lg:hidden">
              {mobileOpen ? <FaTimes size={22} className="text-red-500" /> : <FaBars size={22} className="dark:text-gray-300" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 left-0 h-full w-[80%] max-w-[360px] bg-[#84B2D9] dark:bg-gray-900 shadow-xl z-50 p-4 transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
      >

        <div className="mb-4">
          {/* <div className="flex items-center gap-2">
            <FaSearch />
            <input
              type="search"
              placeholder="Search services & solutions..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent outline-none textColor"
            />
            <button onClick={() => { setQuery(""); setResults([]); }} className="text-sm">Clear</button>
          </div> */}

          {/* mobile search results */}
          {query && (
            <div className="mt-2 max-h-52 overflow-auto">
              {results.length > 0 ? (
                results.map((item) => (
                  <div
                    key={`mob-${item.type}-${item.id}`}
                    onClick={() => handleSelect(item)}
                    className="cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-gray-500">{item.type === "service" ? "Service" : "Solution"}</div>
                  </div>
                ))
              ) : (
                <div className="text-gray-500 p-2">No match found</div>
              )}
            </div>
          )}
        </div>

        <ul className="space-y-3 text-[16px]">
          <li>
            <NavLink to="/" onClick={() => setMobileOpen(false)} 
            className={({ isActive }) => (isActive || pathname === "/" ? "nav-link active-link" : "nav-link text-white ")}> Home </NavLink>
          </li>
          <li>
            <NavLink to="services/service-SoftwareDevelopment" onClick={() => setMobileOpen(false)} 
            className={({ isActive }) => (isActive || pathname === "services/service-SoftwareDevelopment" ? "nav-link active-link" : "nav-link text-white ")}> Software Development </NavLink>
          </li>
          {menuData.map((menu) => (
            <MobileDropdown
              key={menu.title}
              menu={menu}
              pathname={pathname}
              mobileDropdown={mobileDropdown}
              setMobileDropdown={setMobileDropdown}
              closeMenu={() => setMobileOpen(false)}
            />
          ))}
          <li>
            <NavLink to="/about-us" onClick={() => setMobileOpen(false)} className={({ isActive }) => (isActive || pathname === "/about-us" ? "nav-link active-link" : "nav-link")}>About Us</NavLink>
          </li>
          <li>
            <NavLink to="/recruitment" onClick={() => setMobileOpen(false)} className={({ isActive }) => (isActive || pathname === "/recruitment" ? "nav-link active-link" : "nav-link")}>Recruitment</NavLink>
          </li>
          <NavLink to="/contact" onClick={() => setMobileOpen(false)} className="btnBorder w-fit">Contact</NavLink>
        </ul>
      </div>
    </nav>
  );
}

/* ================= Desktop Dropdown ================= */
const DesktopDropdown = ({ menu, linkClass }) => {
  const [open, setOpen] = useState(false);

  return (
    <li
      className="relative py-4"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className=" text-white  flex items-center gap-1">
        {menu.title} <FaChevronDown className={`transition ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute w-fit flex left-0 top-full bg-[#84B2D9] dark:bg-gray-800 shadow-lg rounded-b-lg py-6 px-6 gap-4 animate-fadeSlide">
          {menu.sections.map((sec) => (
            <div key={sec.heading}>
              <h3 className="font-bold nav-link mb-2 lg:text-[16px]">
                <NavLink to={sec.to}>{sec.heading}</NavLink>
              </h3>

              <ul className="space-y-1 lg:text-[16px]">
                {sec.items.map((item) => (
                  <li key={item.label}>
                    <NavLink to={item.to} className={linkClass}>
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </li>
  );
};

/* ================= Mobile Dropdown ================= */
const MobileDropdown = ({ menu, mobileDropdown, setMobileDropdown, closeMenu, pathname }) => (
  <li>
    <button
      onClick={() => setMobileDropdown(mobileDropdown === menu.title ? null : menu.title)}
      className="text-white flex items-center justify-between w-full"
    >
      {menu.title} <FaChevronDown className={`${mobileDropdown === menu.title ? "rotate-180" : ""}`} />
    </button>

    <div className={`${mobileDropdown === menu.title ? "max-h-[800px]" : "max-h-0"} overflow-hidden transition-all`}>
      <div className="pl-3 py-2 border-l">
        {menu.sections.map((sec) => (
          <div key={sec.heading} className="mb-3">
            <h3 className="font-bold nav-link mb-2 lg:text-[16px]">
              <NavLink to={sec.to} onClick={closeMenu} className={({ isActive }) => (isActive || pathname === sec.to ? "nav-link active-link" : "nav-link")}>{sec.heading}</NavLink>
            </h3>

            <ul className="space-y-1 text-[16px]">
              {sec.items.map((item) => (
                <li key={item.label}>
                  <NavLink to={item.to} onClick={closeMenu} className={({ isActive }) => (isActive || pathname === item.to ? "nav-link active-link" : "nav-link")}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </li>
);