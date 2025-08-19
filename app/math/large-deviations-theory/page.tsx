import React from "react";

const page = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Large Deviations Theory
        </h1>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <p className="text-lg text-blue-800">
            Large deviations theory is a branch of probability theory that deals
            with finding the probabilities of rare events. The notes will be
            based on the book &quot;Large Deviations and Applications&quot; by
            Amir Dembo and Ofer Zeitouni.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Introduction
        </h2>
        <p className="text-gray-700 mb-6">
          Large deviations theory provides a mathematical framework for
          understanding how the probability of rare events decays exponentially
          as a system size grows. This theory has profound applications in
          statistical mechanics, information theory, queueing theory, and
          machine learning, particularly in understanding the behavior of neural
          networks and optimization algorithms.
        </p>
      </div>
    </div>
  );
};

export default page;
