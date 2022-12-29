import { useState } from "react";
import { Fragment } from "react";
import { Menu, Transition, Switch } from "@headlessui/react";
import { GlobeAmericasIcon } from "@heroicons/react/20/solid";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import LearnMore from "./LearnMore";

function DropDown({setSB}) {
  const [tenabled, settEnabled] = useState(false);
  return (
    <div className="flex">
      <div className="flex flex-col">
        
        <div className="flex border-b p-2">
          <GlobeAmericasIcon
            className="-ml-1 mr-2 h-10 w-10"
            aria-hidden="true"
          />
          <div className="flex flex-col">
            <h1>Share to web</h1>
            <p className="font-light text-sm">
              Publish and share link with anyone
            </p>
          </div>

          <Switch
            checked={tenabled}
            onChange={settEnabled}
            className={`${
              tenabled ? "bg-blue-600" : "bg-gray-200"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Share to web</span>
            <span
              className={`${
                tenabled ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </div>

        <div className="relative my-1 rounded-md shadow-sm border-b">
          <input
            type="text"
            onClick={() => setSB(true)}
            className="block w-full rounded-md border-gray-300 pl-2 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Search People, emails, groups"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              type="button"
              class="py-1 px-2 text-sm font-medium text-gray-900 border-l border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10"
            >
              Invite
            </button>
          </div>
        </div>

        <div className="flex border-b p-2">
          <div class="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 mr-2 bg-gray-100 rounded-full dark:bg-gray-600">
            <span class="font-medium text-gray-600 dark:text-gray-300">O/</span>
          </div>

          <div className="flex flex-col mr-2">
            <h1>Everyone at OSlash</h1>
            <p className="font-light text-sm">25 workspace members</p>
          </div>

          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex w-full rounded-md border-none bg-white text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              No access
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </Menu.Button>
          </Menu>
        </div>

          <LearnMore/>
      </div>
    </div>
  );
}

export default DropDown;
