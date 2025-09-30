import React from "react";

const page = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Classical Mechanics
        </h1>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <p className="text-lg text-blue-800">
            The goal of working through this material is not to master every
            single chapter of Goldstein&apos;s{" "}
            <a
              href="https://poincare.matf.bg.ac.rs/~zarkom/Book_Mechanics_Goldstein_Classical_Mechanics_optimized.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Classical Mechanics (3rd Edition by Goldstein, Poole, and Safko)
            </a>
            , but rather to gain enough understanding of the foundations to be
            able to eventually read Eric Smith&apos;s{" "}
            <em>The Origin and Nature of Life on Earth</em>. Because of this
            broader goal, I will be selective and won&apos;t go over every
            chapter in detail, but instead focus on the concepts most relevant
            for that journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
