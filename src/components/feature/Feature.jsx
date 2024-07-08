import { ServerIcon } from "@heroicons/react/20/solid";
import TeachStack from "../TeachStack/TeachStack";
import React, { Suspense } from "react";
let Images = React.lazy(() => import("./Images"));

export default function Feature({ project }) {
  const features = [
    {
      name: "Feature 1",
      description: project.features[0],
      icon: ServerIcon,
    },
    {
      name: "Feature 2",
      description: project.features[1],
      icon: ServerIcon,
    },
    {
      name: "Feature 3",
      description: project.features[2],
      icon: ServerIcon,
    },
    {
      name: "Feature 4 ",
      description: project.features[3],
      icon: ServerIcon,
    },
  ];
  return (
    <div className="overflow-hidden py-24 sm:py-32 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Features
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                {project.title}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {project.description}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-100">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Suspense
            fallback={<div className="text-center text-white">Loading...</div>}
          >
            <Images project={project} />
          </Suspense>
        </div>
        <TeachStack project={project} />
      </div>
    </div>
  );
}
