import { useState } from "react";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon, ArrowLeftIcon } from "@heroicons/react/20/solid";
import LearnMore from "./LearnMore";

const peeps = [
  {
    name: "Wade Cooper",
    url: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Arlene Mccoy",
    url: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const prods = [
  { name: "products", url: "P" },
  { name: "engineering", url: "E" },
];



function SearchBox({ setSB }) {
  const [selectedtags, setST] = useState([]);

  const [people, setPeople] = useState(peeps);

  const [products, setProducts] = useState(prods);

  const searchItems = (val) => {
        if(val !== "") {
         const filpeeps =  peeps.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(val.toLowerCase())
        })

        const filprods = prods.filter((item) => {
          return Object.values(item).join('').toLowerCase().includes(val.toLowerCase())
      })
        setPeople(filpeeps);
        setProducts(filprods);

        } else {
          setPeople(peeps);
          setProducts(prods);

        }
  }

  return (
    <div className="flex flex-col gap-0 bg-gray-100 w-96">
      <div className="relative rounded-none bg-gray-100 shadow-none border-b m-0">
        <div className="inset-y-0 left-0 flex">
          <button onClick={() => setSB(false)}>
            <ArrowLeftIcon className="w-5 h-5" />
          </button>
          <input onChange={(e) => searchItems(e.target.value)}
            type="text"
            className="block w-full rounded-none border-none bg-gray-100 pl-2 pr-12 mr-2 focus:border-none focus:ring-gray-200 sm:text-sm"
            placeholder="Search People, emails, groups"
          />

          <Menu as="div" className=" text-left">
            <Menu.Button className="inline-flex rounded-md border-none bg-gray-100 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              Access
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </Menu.Button>
          </Menu>
          <button
            type="button"
            class="ml-5 py-1 px-2 text-sm font-medium text-gray-900 border rounded-md bg-white border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10"
          >
            Invite
          </button>
        </div>
      </div>

      {selectedtags.length > 0 && (
        <div>
          <h2 class="mb-2 text-lg font-semibold text-gray-800">Selected:</h2>

          {selectedtags.map((p) => (
            <span
              id="badge-dismiss-default"
              class="inline-flex items-center py-1 px-2 mr-2 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-200"
            >
              {p}
              <button
                type="button"
                class="inline-flex items-center p-0.5 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-300 dark:hover:text-blue-900"
                aria-label="Remove"
                onClick={() => {
                  setST(selectedtags.filter((a) => a != p));
                  setPeople(peeps);
                  setProducts(prods);
                  
                }}
              >
                <svg
                  aria-hidden="true"
                  class="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Remove badge</span>
              </button>
            </span>
          ))}
        </div>
      )}

      <div>
        {people.length > 0 && (
          <div>
            <h2 class="mb-2 text-lg font-semibold text-gray-800">
              Select a person
            </h2>
            <ul class="space-y-1 max-w-md list-disc list-inside text-gray-700">
              {people.map((p) => (
                <li class="flex items-center">
                  <button
                    className="hover:bg-gray-400 w-full text-left rounded-md"
                    onClick={() => {
                      selectedtags.includes(p.name) || setST([...selectedtags, p.name]);
                      setPeople(people.filter(pr => pr.name != p.name))
                    }}
                  >
                    <img
                      class="inline-block h-8 w-8 rounded-full ring-2 ring-gray-200 mr-3"
                      src={p.url}
                      alt=""
                    />
                    {p.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {products.length > 0 && (
          <div>
            <h2 class="mb-2 text-lg font-semibold text-gray-800">
              Select a group
            </h2>

            {products.map((p) => (
              <li class="flex items-center">
                <button
                  className="hover:bg-gray-400 w-full text-left rounded-md"
                  onClick={() => {
                    selectedtags.includes(p.name) || setST([...selectedtags, p.name]);
                    setProducts(products.filter(pr => pr.name != p.name))
                  }}
                >
                  <span class="inline-block h-8 w-8 rounded-full ring-2 bg-slate-500 ring-gray-200 mr-3 font-medium text-gray-200 text-center">
                    {p.url}
                  </span>
                  {p.name}
                </button>
              </li>
            ))}
          </div>
        )}
      </div>

      <LearnMore />
    </div>
  );
}

function Tags({ setSB }) {
  return <div className="flex flex-col gap-0 bg-gray-100 w-96"></div>;
}

export default SearchBox;
