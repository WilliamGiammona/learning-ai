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
                . Chapters and sections not essential to understanidng Eric
                Smith's book will not be covered.
              </p>
            </section>

            {/* Chapter 1 */}
            <section id="chapter-1" className="scroll-mt-24 space-y-10">
              <h1 className="text-5xl font-extrabold text-gray-900">
                Chapter 1: Survey of the Elementary Principles
              </h1>

              <section id="c1-sec-4" className="scroll-mt-24 space-y-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  1.4 D&apos;Alembert&apos;s Principle and Lagrange&apos;s
                  Equations
                </h2>

                {/* Virtual Displacement - Definition Card */}
                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-amber-900 mb-3">
                    Virtual Infinitesimal Displacement (δr)
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    The <strong>virtual displacement</strong> δr is the same as
                    dr but has <strong>no time factor</strong>. It's imaginary
                    (virtual), so it's everything happening at that exact moment
                    (so no force/constraint can change because there's no time
                    factor).
                  </p>
                </div>

                {/* Equilibrium System */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    System in Equilibrium
                  </h3>
                  <p className="text-gray-700">
                    Let&apos;s say that we have a system in equilibrium
                    that&apos;s static. Thus the virtual work of the forces in
                    direction of displacement δr (r = vector from origin to a
                    particle) must be 0 since in equilibrium:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-center font-mono">∑ Fᵢ · δrᵢ = 0</p>
                  </div>
                </div>

                {/* Separating Forces */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Separating Forces
                  </h3>
                  <p className="text-gray-700">
                    This is ugly because it includes forces of constraint.
                    Let&apos;s separate the forces into:
                  </p>
                  <ol className="list-decimal ml-6 space-y-2 text-gray-700">
                    <li>
                      <strong>Applied forces</strong> (F⁽ᵃ⁾)
                    </li>
                    <li>
                      <strong>Forces of constraint</strong> (f)
                    </li>
                  </ol>
                  <p className="text-gray-700">This gives us the equation:</p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-center font-mono">
                      ∑ Fᵢ⁽ᵃ⁾ · δrᵢ + ∑ fᵢ · δrᵢ = 0
                    </p>
                  </div>
                </div>

                {/* Systems Without Constraint Forces */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Systems Without Work from Forces of Constraint
                  </h3>
                  <p className="text-gray-700">
                    Now let&apos;s only work with systems without work from
                    forces of constraint. Then we get the much nicer:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-center font-mono">∑ Fᵢ⁽ᵃ⁾ · δrᵢ = 0</p>
                  </div>
                  <p className="text-gray-700">
                    This formula is called the{" "}
                    <strong>"principle of virtual work"</strong>.
                  </p>
                </div>

                {/* Dynamic Equilibrium */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Dynamic Equilibrium
                  </h3>
                  <p className="text-gray-700">
                    Remember this was under the assumption of static
                    equilibrium, but we want an equation that works for both
                    static and dynamic equilibrium.
                  </p>
                  <p className="text-gray-700">
                    We know that F = ṗ (momentum = mv̇), which means:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-center font-mono">Fᵢ - ṗᵢ = 0</p>
                  </div>
                  <p className="text-gray-700">
                    According to the equation of motion (we again limit
                    ourselves to systems without work from the force of
                    constraint). So:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-center font-mono">
                      ∑(Fᵢ⁽ᵃ⁾ - ṗᵢ) · δrᵢ = 0
                    </p>
                  </div>
                  <p className="text-gray-700">
                    because Fᵢ = ṗᵢ. This equation is called{" "}
                    <strong>D'Alembert&apos;s Principle</strong>.
                  </p>
                </div>

                {/* Generalized Coordinates */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Generalized Coordinates
                  </h3>
                  <p className="text-gray-700">
                    This is still ugly because position vector r is in Cartesian
                    coordinates, which may or may not be equal to the number of
                    degrees of freedom in the system. If there are more
                    coordinates than degrees of freedom, the coordinates won't
                    be independent. We need new coordinates that are{" "}
                    <strong>
                      always have the same number of coordinates as the amount
                      of degrees of freedom
                    </strong>{" "}
                    (this is similar to the concept of basis vectors in linear
                    algebra). We call these coordinates{" "}
                    <strong>generalized coordinates</strong>: q₁, ..., qₙ where
                    n is equal to the number of degrees of freedom.
                  </p>
                  <p className="text-gray-700">
                    We also add a time element, so the position vector can be
                    described as the following function:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-center font-mono">
                      rᵢ = f(q₁⁽ᵗ⁾, ..., qₙ⁽ᵗ⁾, t)
                    </p>
                  </div>
                  <p>
                    we give f the name rᵢ so that we can better remember its
                    purpose giving us:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-center font-mono">
                      rᵢ = rᵢ(q₁⁽ᵗ⁾, ..., qₙ⁽ᵗ⁾, t)
                    </p>
                  </div>
                  <p className="text-gray-700">
                    Hence position of rᵢ is a function of generalized
                    coordinates where n = number of degrees of freedom.
                  </p>
                </div>

                {/* Velocity and Chain Rule */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Velocity Using the Chain Rule
                  </h3>
                  <p className="text-gray-700">
                    Now we know that vᵢ = drᵢ/dt, which with the chain rule gets
                    us:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-center font-mono">
                      vᵢ = drᵢ/dt = ∑ₖ (∂rᵢ/∂qₖ)(dqₖ/dt) + ∂rᵢ/∂t
                    </p>
                  </div>
                  <p className="text-gray-700">
                    Also for virtual infinitesimal (no dt) we get:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-center font-mono">
                      δrᵢ = ∑ₖ (∂rᵢ/∂qₖ)δqₖ
                    </p>
                  </div>
                </div>

                {/* D'Alemberts Principle with Generalized Coordinates */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Applying Generalized Coordinates to D'Alembert&apos;s
                    Principle
                  </h3>
                  <p className="text-gray-700">
                    For the first part of D'Alembert&apos;s Principle we get:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-center font-mono">
                      ∑ Fᵢ · δrᵢ = ∑ Fᵢ · (∂rᵢ/∂qⱼ)δqⱼ
                    </p>
                  </div>
                  <p className="text-gray-700">
                    Let Qⱼ = ∑ Fᵢ · (∂rᵢ/∂qⱼ), then ∑ Fᵢδrᵢ = ∑ⱼ Qⱼδqⱼ, where
                    Qⱼδqⱼ has the dimension of work.
                  </p>
                </div>

                {/* Second Part */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    The Second Part: ∑ ṗᵢ · δrᵢ
                  </h3>
                  <p className="text-gray-700">
                    Now for the second part where ∑ ṗᵢ · δrᵢ, we can say that p
                    = mᵢr̈ᵢ by definition. Thus:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-center font-mono">
                      ∑ ṗᵢ · δrᵢ = ∑ mᵢr̈ᵢ · δrᵢ ⇒ ∑ mᵢr̈ᵢ · (∂rᵢ/∂qⱼ)δqⱼ
                    </p>
                  </div>
                  <p className="text-gray-700">
                    Now, we know that d/dt(mᵢṙᵢ · ∂rᵢ/∂qⱼ). By the product rule
                    we would get:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-center font-mono">
                      mᵢr̈ᵢ · (∂rᵢ/∂qⱼ) + mᵢṙᵢ · d/dt(∂rᵢ/∂qⱼ)
                    </p>
                  </div>
                  <p className="text-gray-700">
                    We only want the first part, so we must subtract. So:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-center font-mono">
                      ∑ᵢ [d/dt(mᵢṙᵢ · ∂rᵢ/∂qⱼ) - mᵢṙᵢ · d/dt(∂rᵢ/∂qⱼ)]
                    </p>
                  </div>
                </div>

                {/* Ugly Math */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Simplifying d/dt(∂rᵢ/∂qⱼ)
                  </h3>
                  <p className="text-gray-700">
                    Now this is ugly! Let&apos;s tackle it step by step. For the
                    last part, we have d/dt(∂rᵢ/∂qⱼ). We want to get this to
                    ∂vᵢ/∂qⱼ.
                  </p>
                  <p className="text-gray-700">Here is the math:</p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-center font-mono">
                      d/dt(∂rᵢ/∂qⱼ) = ∂/∂qⱼ(drᵢ/dt)
                    </p>
                  </div>
                  <p className="text-gray-700">which by chain rule =</p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-center font-mono">
                      ∂/∂qⱼ[∑ₖ (∂rᵢ/∂qₖ)(dqₖ/dt) + ∂rᵢ/∂t]
                    </p>
                  </div>
                  <p className="text-gray-700">⇒</p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-center font-mono">
                      ∑ₖ (∂²rᵢ/∂qⱼ∂qₖ)(dqₖ/dt) + ∂²rᵢ/∂qⱼ∂t
                    </p>
                  </div>
                  <p className="text-gray-700">
                    Now d/dt(∂rᵢ/∂qⱼ) = ∂/∂qⱼ(drᵢ/dt), that&apos;s just =
                    ∂vᵢ/∂qⱼ
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-center font-mono">⇒ ∂vᵢ/∂qⱼ</p>
                  </div>
                  <p className="text-gray-700">
                    So we get ∂vᵢ/∂qⱼ · 1 + 0 + 0 to 1. Therefore:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-center font-mono">
                      ∂vᵢ/∂(dqⱼ/dt) = ∂rᵢ/∂qⱼ
                    </p>
                  </div>
                </div>

                {/* Final Expression */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Bringing It Together
                  </h3>
                  <p className="text-gray-700">Now:</p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-center font-mono">
                      ∑ᵢ [d/dt(mᵢvᵢ · ∂vᵢ/∂(dqⱼ/dt)) - mᵢvᵢ · ∂vᵢ/∂qⱼ]
                    </p>
                  </div>
                  <p className="text-gray-700">We want to then show that:</p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-center font-mono">
                      2vᵢ · ∂vᵢ/∂(dqⱼ/dt) = ∂vᵢ²/∂(dqⱼ/dt)
                    </p>
                  </div>
                  <p className="text-gray-700">
                    (we treat mass as constant). So what is ∂vᵢ²/∂(dqⱼ/dt)? Use
                    chain rule to get:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-center font-mono">
                      ∂vᵢ²/∂vᵢ · ∂vᵢ/∂(dqⱼ/dt) or ∂vᵢ²/∂vᵢ · ∂vᵢ/∂(dqⱼ/dt) ⇒ 2vᵢ
                      · ∂vᵢ/∂(dqⱼ/dt)
                    </p>
                  </div>
                  <p className="text-gray-700">
                    OK, but we don't want the 2 because in our original equation
                    it&apos; vᵢ · ∂vᵢ/∂(dqⱼ/dt) not 2vᵢ. So multiply by 1/2.
                  </p>
                  <p className="text-gray-700">
                    So we get that ∑ Fᵢ⁽ᵃ⁾ · δrᵢ = ∑ⱼ Qⱼδqⱼ and that:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-center font-mono">
                      ∑ ṗᵢ · δrᵢ = ∑ [d/dt[∂/∂(dqⱼ/dt)(∑ᵢ ½mᵢvᵢ²)] - ∂/∂qⱼ(∑ᵢ
                      ½mᵢvᵢ²)]δqⱼ
                    </p>
                  </div>
                </div>

                {/* Final Form */}
                <div className="space-y-3 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                  <h3 className="text-xl font-semibold text-blue-900">
                    Lagrange&apos;s Equations
                  </h3>
                  <p className="text-blue-800">
                    We can change ∑ Fᵢ⁽ᵃ⁾ - ṗᵢ) · δr = 0 to ∑(r̈ᵢ - Fᵢ⁽ᵃ⁾) · δr =
                    0 since both expressions are equivalent (they must both be 0
                    to get 0).
                  </p>
                  <p className="text-blue-800">So we get:</p>
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <p className="text-center font-mono text-blue-900">
                      ∑ⱼ [d/dt[∂T/∂(dqⱼ/dt)] - ∂T/∂qⱼ - Qⱼ]δqⱼ = 0
                    </p>
                  </div>
                  <p className="text-blue-800">
                    where T = ∑ᵢ ½mᵢvᵢ² (kinetic energy). This is{" "}
                    <strong>
                      Lagrange&apos;s equation in its most general form
                    </strong>
                    .
                  </p>
                </div>
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
                This section will collect definitions and key terms as they
                arise during study.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Virtual Displacement (δr):</strong> An infinitesimal
                  displacement with no time factor—imaginary and instantaneous,
                  representing what could happen at a single moment.
                </li>
                <li>
                  <strong>D'Alembert&apos;s Principle:</strong> The principle
                  stating that ∑(Fᵢ⁽ᵃ⁾ - ṗᵢ) · δrᵢ = 0, extending the principle
                  of virtual work to dynamic systems.
                </li>
                <li>
                  <strong>Generalized Coordinates:</strong> Independent
                  coordinates (q₁, ..., qₙ) equal in number to the degrees of
                  freedom of the system.
                </li>
                <li>
                  <strong>Lagrange&apos;s Equations:</strong> Equations of
                  motion in generalized coordinates, derived from
                  D'Alembert&apos;s principle.
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
