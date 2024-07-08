import { FiLink } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { projects } from "../../assets/index";

import Feature from "../feature/Feature";
import { reactCard } from "../../assets/react";
import { fullStackProject } from "../../assets/fullstack";
export default function Description() {
  let { id } = useParams();
  let allProjects = [...projects, ...reactCard, ...fullStackProject];
  let [project] = allProjects.filter((value) => value.id == id);

  return (
    <div className="w-[90%] mx-auto">
      <div className="px-4 sm:px-0">
        <h3 className="text-xl font-semibold leading-7 text-gray-100">
          Application Information
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Personal details and application.
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-100">
              Full name
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-200 sm:col-span-2 sm:mt-0">
              {project.title}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-100">
              Application for
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-200 sm:col-span-2 sm:mt-0">
              {project.appFor}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-100">
              Deployed
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-200 sm:col-span-2 sm:mt-0">
              {project.deployed}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-100">
              Deployed Date
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-200 sm:col-span-2 sm:mt-0">
              {project.date}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-100">
              About
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-200 sm:col-span-2 sm:mt-0">
              {project.description}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-100">
              Learning
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-200 sm:col-span-2 sm:mt-0">
              {project.learnings}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-100">
              Challeges
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-200 sm:col-span-2 sm:mt-0">
              {project.challenges}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-100">
              Attachments
            </dt>
            <dd className="mt-2 text-sm text-gray-100 sm:col-span-2 sm:mt-0">
              <ul
                role="list"
                className="divide-y divide-gray-100 rounded-md border border-gray-200"
              >
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <FiLink
                      aria-hidden="true"
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                    />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">
                        GitHub Repositories{" "}
                      </span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <Link
                      to={project.github}
                      target="_blank"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      View
                    </Link>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <FiLink
                      aria-hidden="true"
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                    />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">Project URL</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <Link
                      to={project.link}
                      target="_blank"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      view
                    </Link>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
      <Feature project={project} />
    </div>
  );
}
