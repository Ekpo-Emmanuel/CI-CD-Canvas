'use client';
import React, { useState } from "react";
import dashboardLight from "../../images/dashboardLight.svg";

export default function HeroHome() {
  return (
    <>
      <section>
        <div className="px-8 py-24 md:py-32 mx-auto md:px-12  max-w-7xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div>
              <span className="text-blue-600 uppercase font-mono font-medium tracking-tight text-xs">
                Pipeline Visualizer
              </span>
              <h1 className="text-5xl mt-8 tracking-tight font-semibold text-gray-900 lg:text-balance">
                Visualize Your CI/CD Pipelines in Real-Time
              </h1>
              <p className="mt-6 text-base font-medium text-gray-500">
                Gain instant insights into your continuous integration and deployment processes with interactive, real-time visualizations.
              </p>
              <div className="flex flex-wrap items-center gap-2 mx-auto mt-12">
                <button
                  className="flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white transition-all duration-200 rounded-lg bg-gradient-to-b from-blue-500 to-indigo-600 hover:to-indigo-800 shadow focus:ring-2 focus:ring-blue-950 focus:ring-offset-2 ring-offset-gray-200 hover:shadow-none"
                  aria-label="Action"
                >
                  Coming soon
                </button>
                {/* <button
                  className="flex items-center justify-center gap-2 h-10 px-4 py-2 text-sm font-medium text-gray-500 transition-all bg-gray-50 border border-gray-300 rounded-lg hover:text-gray-700 focus:ring-2 shadow shadow-gray-500/5 focus:ring-gray-900 focus:ring-offset-2 ring-offset-gray-200 duration-300 hover:border-gray-200 hover:shadow-none"
                  aria-label="Action"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 6l6 6l-6 6"></path>
                  </svg>
                </button> */}
              </div>
            </div>
            <div className="lg:col-span-2">
              <img className="object-cover h-full border shadow rounded-2xl" src={dashboardLight} alt="#_" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

