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
              <li>
                <a href="#chapter-8" className="text-blue-700 hover:underline">
                  Chapter 8: Canonical Transformations
                </a>
                <ol className="ml-4 mt-1 space-y-1 list-decimal">
                  <li>
                    <a href="#sec-1" className="hover:underline">
                      The Fundamental Problem of Mechanics
                    </a>
                  </li>
                  <li>
                    <a href="#sec-2" className="hover:underline">
                      The Concept of Canonical Transformation
                    </a>
                  </li>
                  <li>
                    <a href="#sec-3" className="hover:underline">
                      Generating Functions
                    </a>
                  </li>
                  <li>
                    <a href="#sec-4" className="hover:underline">
                      Examples of Canonical Transformations
                    </a>
                  </li>
                  <li>
                    <a href="#sec-5" className="hover:underline">
                      The Poisson Bracket
                    </a>
                  </li>
                  <li>
                    <a href="#sec-6" className="hover:underline">
                      Invariance of Poisson Brackets
                    </a>
                  </li>
                  <li>
                    <a href="#sec-7" className="hover:underline">
                      Infinitesimal Canonical Transformations
                    </a>
                  </li>
                </ol>
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

            {/* Chapter 8 */}
            <section id="chapter-8" className="scroll-mt-24 space-y-10">
              <h1 className="text-5xl font-extrabold text-gray-900">
                Chapter 8: Canonical Transformations
              </h1>

              <section id="sec-1" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  The Fundamental Problem of Mechanics
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  vitae nibh et leo congue convallis.
                </p>
              </section>

              <section id="sec-2" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  The Concept of Canonical Transformation
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae.
                </p>
              </section>

              <section id="sec-3" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  Generating Functions
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse sed tellus nec nisi vestibulum tincidunt.
                </p>
              </section>

              <section id="sec-4" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  Examples of Canonical Transformations
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer a risus id arcu porta rutrum.
                </p>
              </section>

              <section id="sec-5" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  The Poisson Bracket
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur vitae hendrerit mi. Phasellus sagittis sapien eu
                  posuere volutpat.
                </p>
              </section>

              <section id="sec-6" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  Invariance of Poisson Brackets
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris vulputate lectus ac laoreet bibendum.
                </p>
              </section>

              <section id="sec-7" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  Infinitesimal Canonical Transformations
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec magna nunc. Vivamus laoreet, libero ut pulvinar
                  mattis, arcu erat porttitor nulla.
                </p>
              </section>
            </section>
          </article>
        </section>
      </section>
    </section>
  );
};

export default page;
