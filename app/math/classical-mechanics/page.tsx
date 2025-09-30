import React from "react";

const page = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Main layout: TOC + Content */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* TOC */}
        <aside className="hidden md:block md:col-span-3">
          <nav aria-label="Table of contents" className="sticky top-24">
            <h2 className="text-sm font-semibold tracking-wide text-gray-700 uppercase">
              Contents
            </h2>
            <ol className="mt-3 space-y-2 text-sm">
              <li>
                <a href="#overview" className="text-blue-700 hover:underline">
                  Overview
                </a>
              </li>

              {/* Chapter 1 */}
              <li>
                <a href="#chapter-1" className="text-blue-700 hover:underline">
                  Chapter 1: Survey of the Elementary Principles
                </a>
                <ol className="ml-4 mt-1 space-y-1 list-decimal">
                  <li>
                    <a href="#c1-sec-1" className="hover:underline">
                      Mechanics of a Particle
                    </a>
                  </li>
                  <li>
                    <a href="#c1-sec-2" className="hover:underline">
                      Mechanics of a System of Particles
                    </a>
                  </li>
                  <li>
                    <a href="#c1-sec-3" className="hover:underline">
                      Constraints
                    </a>
                  </li>
                  <li>
                    <a href="#c1-sec-4" className="hover:underline">
                      D&apos;Alembert&apos;s Principle and Lagrange&apos;s
                      Equations
                    </a>
                  </li>
                  <li>
                    <a href="#c1-sec-5" className="hover:underline">
                      Velocity-Dependent Potentials and the Dissipation Function
                    </a>
                  </li>
                  <li>
                    <a href="#c1-sec-6" className="hover:underline">
                      Simple Applications of the Lagrangian Formulation
                    </a>
                  </li>
                </ol>
              </li>

              {/* Chapter 2 */}
              <li>
                <a href="#chapter-2" className="text-blue-700 hover:underline">
                  Chapter 2: Variational Principles and Lagrange&apos;s
                  Equations
                </a>
                <ol className="ml-4 mt-1 space-y-1 list-decimal">
                  <li>
                    <a href="#sec-1" className="hover:underline">
                      Hamilton&apos;s Principle
                    </a>
                  </li>
                  <li>
                    <a href="#sec-2" className="hover:underline">
                      Some Techniques of the Calculus of Variations
                    </a>
                  </li>
                  <li>
                    <a href="#sec-3" className="hover:underline">
                      Extension of Hamilton&apos;s Principle to Nonholonomic
                      Systems
                    </a>
                  </li>
                  <li>
                    <a href="#sec-4" className="hover:underline">
                      Advantages of a Variational Principle Formulation
                    </a>
                  </li>
                  <li>
                    <a href="#sec-5" className="hover:underline">
                      Conservation Theorems and Symmetry Properties
                    </a>
                  </li>
                  <li>
                    <a href="#sec-6" className="hover:underline">
                      Energy Function and the Conservation of Energy
                    </a>
                  </li>
                </ol>
              </li>

              {/* Glossary */}
              <li>
                <a href="#glossary" className="text-blue-700 hover:underline">
                  Glossary
                </a>
              </li>
            </ol>
          </nav>
        </aside>

        {/* Content */}
        <section className="md:col-span-9">
          <article className="prose prose-lg max-w-none space-y-12">
            {/* Overview */}
            <section id="overview" className="scroll-mt-24">
              <h2>Overview</h2>
              <p className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-md text-blue-800 not-prose">
                The goal of this project is to gain enough grounding in
                mechanics to eventually read Eric Smith&apos;s{" "}
                <em>The Origin and Nature of Life on Earth</em>. For this
                purpose, the reference text is Goldstein, Poole, and
                Safko&apos;s{" "}
                <a
                  href="https://poincare.matf.bg.ac.rs/~zarkom/Book_Mechanics_Goldstein_Classical_Mechanics_optimized.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Classical Mechanics (3rd Edition)
                </a>
                . Because the aim is focused preparation, not every chapter will
                be covered — only the most relevant parts will be explored.
              </p>
            </section>

            {/* Chapter 1 */}
            <section id="chapter-1" className="scroll-mt-24 space-y-10">
              <h1 className="text-5xl font-extrabold text-gray-900">
                Chapter 1: Survey of the Elementary Principles
              </h1>

              <section id="c1-sec-1" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  1.1 Mechanics of a Particle
                </h2>
                <p>Lorem ipsum placeholder text.</p>
              </section>

              <section id="c1-sec-2" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  1.2 Mechanics of a System of Particles
                </h2>
                <p>Lorem ipsum placeholder text.</p>
              </section>

              <section id="c1-sec-3" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  1.3 Constraints
                </h2>
                <p>Lorem ipsum placeholder text.</p>
              </section>

              <section id="c1-sec-4" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  1.4 D&apos;Alembert&apos;s Principle and Lagrange&apos;s
                  Equations
                </h2>
                <p>Lorem ipsum placeholder text.</p>
              </section>

              <section id="c1-sec-5" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  1.5 Velocity-Dependent Potentials and the Dissipation Function
                </h2>
                <p>Lorem ipsum placeholder text.</p>
              </section>

              <section id="c1-sec-6" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  1.6 Simple Applications of the Lagrangian Formulation
                </h2>
                <p>Lorem ipsum placeholder text.</p>
              </section>
            </section>

            {/* Chapter 2 */}
            <section id="chapter-2" className="scroll-mt-24 space-y-10">
              <h1 className="text-5xl font-extrabold text-gray-900">
                Chapter 2: Variational Principles and Lagrange&apos;s Equations
              </h1>

              <section id="sec-1" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  2.1 Hamilton&apos;s Principle
                </h2>
                <p>Lorem ipsum placeholder for derivations and explanations.</p>
              </section>

              <section id="sec-2" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  2.2 Some Techniques of the Calculus of Variations
                </h2>
                <p>Lorem ipsum placeholder text.</p>
              </section>

              <section id="sec-3" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  2.3 Extension of Hamilton&apos;s Principle to Nonholonomic
                  Systems
                </h2>
                <p>Lorem ipsum placeholder text.</p>
              </section>

              <section id="sec-4" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  2.4 Advantages of a Variational Principle Formulation
                </h2>
                <p>Lorem ipsum placeholder text.</p>
              </section>

              <section id="sec-5" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  2.5 Conservation Theorems and Symmetry Properties
                </h2>
                <p>Lorem ipsum placeholder text.</p>
              </section>

              <section id="sec-6" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  2.6 Energy Function and the Conservation of Energy
                </h2>
                <p>Lorem ipsum placeholder text.</p>
              </section>
            </section>

            {/* Glossary */}
            <section id="glossary" className="scroll-mt-24 space-y-6">
              <h1 className="text-4xl font-extrabold text-gray-900">
                Glossary
              </h1>
              <p className="text-gray-700">
                This section will collect key terms and definitions as they
                arise during study.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Action:</strong> Placeholder definition.
                </li>
                <li>
                  <strong>Lagrangian:</strong> Placeholder definition.
                </li>
                <li>
                  <strong>Constraint:</strong> Placeholder definition.
                </li>
              </ul>
            </section>
          </article>
        </section>
      </section>
    </section>
  );
};

export default page;
