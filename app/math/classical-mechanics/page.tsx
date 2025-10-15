"use client";

import React from "react";
import { LaTeX } from "@/app/components/LaTeX"; // Adjust path as needed

const ClassicalMechanics = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
                mechanics to eventually read Eric Smith&apos;s book:{" "}
                <em>The Origin and Nature of Life on Earth</em>. I will be using
                Goldstein, Poole, and Safko&apos;s book{" "}
                <a
                  href="https://poincare.matf.bg.ac.rs/~zarkom/Book_Mechanics_Goldstein_Classical_Mechanics_optimized.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Classical Mechanics (3rd Edition)
                </a>
                . Chapters and sections not essential to understanding Eric
                Smith&apos;s book will not be covered.
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

                {/* Virtual Displacement */}
                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-amber-900 mb-3">
                    Virtual Infinitesimal Displacement (
                    <LaTeX>{"\\delta \\mathbf{r}"}</LaTeX>)
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    The <strong>virtual displacement</strong>{" "}
                    <LaTeX>{"\\delta \\mathbf{r}"}</LaTeX> is the same as{" "}
                    <LaTeX>{"d\\mathbf{r}"}</LaTeX> but has{" "}
                    <strong>no time factor</strong>. It&apos;s imaginary
                    (virtual), so it&apos;s everything happening at that exact
                    moment (so no force/constraint can change because
                    there&apos;s no time factor).
                  </p>
                </div>

                {/* Equilibrium System */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    System in Static Equilibrium
                  </h3>
                  <p className="text-gray-700">
                    Let&apos;s say we have a system in static equilibrium. In
                    that case, the virtual work of all forces during an
                    infinitesimal (virtual) displacement{" "}
                    <LaTeX>{"\\delta \\mathbf{r}"}</LaTeX> must be zero, since
                    in equilibrium the net force in the direction of any
                    possible displacement is zero (otherwise there would be
                    movement). The component of one vector in the direction of
                    another, for example, the force in the direction of the
                    displacement, is represented by their dot product.
                    Therefore:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <LaTeX block>
                      {"\\sum_i \\mathbf{F}_i \\cdot \\delta \\mathbf{r}_i = 0"}
                    </LaTeX>
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
                      <strong>Applied forces</strong> (
                      <LaTeX>{"\\mathbf{F}^{(a)}"}</LaTeX>)
                    </li>
                    <li>
                      <strong>Forces of constraint</strong> (
                      <LaTeX>{"\\mathbf{f}"}</LaTeX>)
                    </li>
                  </ol>
                  <p className="text-gray-700">This gives us the equation:</p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <LaTeX block>
                      {
                        "\\sum_i \\mathbf{F}_i^{(a)} \\cdot \\delta \\mathbf{r}_i + \\sum_i \\mathbf{f}_i \\cdot \\delta \\mathbf{r}_i = 0"
                      }
                    </LaTeX>
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
                    <LaTeX block>
                      {
                        "\\sum_i \\mathbf{F}_i^{(a)} \\cdot \\delta \\mathbf{r}_i = 0"
                      }
                    </LaTeX>
                  </div>
                  <p className="text-gray-700">
                    This formula is called the{" "}
                    <strong>&quot;principle of virtual work&quot;</strong>.
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
                    We know that{" "}
                    <LaTeX>{"\\mathbf{F} = \\dot{\\mathbf{p}}"}</LaTeX>{" "}
                    (momentum = <LaTeX>{"m\\dot{\\mathbf{v}}"}</LaTeX>), which
                    means:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <LaTeX block>
                      {"\\mathbf{F}_i - \\dot{\\mathbf{p}}_i = 0"}
                    </LaTeX>
                  </div>
                  <p className="text-gray-700">
                    According to the equation of motion (we again limit
                    ourselves to systems without work from the force of
                    constraint). So:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <LaTeX block>
                      {
                        "\\sum_i (\\mathbf{F}_i^{(a)} - \\dot{\\mathbf{p}}_i) \\cdot \\delta \\mathbf{r}_i = 0"
                      }
                    </LaTeX>
                  </div>
                  <p className="text-gray-700">
                    because{" "}
                    <LaTeX>{"\\mathbf{F}_i = \\dot{\\mathbf{p}}_i"}</LaTeX>.
                    This equation is called{" "}
                    <strong>D&apos;Alembert&apos;s Principle</strong>.
                  </p>
                </div>

                {/* Generalized Coordinates */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Generalized Coordinates
                  </h3>
                  <p className="text-gray-700">
                    This is still ugly because position vector{" "}
                    <LaTeX>{"\\mathbf{r}"}</LaTeX> is in Cartesian coordinates,
                    which may or may not be equal to the number of degrees of
                    freedom in the system. If there are more coordinates than
                    degrees of freedom, the coordinates won&apos;t be
                    independent. We need new coordinates that{" "}
                    <strong>
                      always have the same number of coordinates as the amount
                      of degrees of freedom
                    </strong>{" "}
                    (this is similar to the concept of basis vectors in linear
                    algebra). We call these coordinates{" "}
                    <strong>generalized coordinates</strong>:{" "}
                    <LaTeX>{"q_1, \\ldots, q_n"}</LaTeX> where{" "}
                    <LaTeX>{"n"}</LaTeX> is equal to the number of degrees of
                    freedom.
                  </p>
                  <p className="text-gray-700">
                    We also add a time element, so the position vector can be
                    described as the following function:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <LaTeX block>
                      {
                        "\\mathbf{r}_i = \\mathbf{r}_i(q_1(t), \\ldots, q_n(t), t)"
                      }
                    </LaTeX>
                  </div>
                  <p className="text-gray-700">
                    Hence position of <LaTeX>{"\\mathbf{r}_i"}</LaTeX> is a
                    function of generalized coordinates where{" "}
                    <LaTeX>{"n"}</LaTeX> = number of degrees of freedom.
                  </p>
                </div>

                {/* Velocity and Chain Rule */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Velocity Using the Chain Rule
                  </h3>
                  <p className="text-gray-700">
                    Now we know that{" "}
                    <LaTeX>{"\\mathbf{v}_i = d\\mathbf{r}_i/dt"}</LaTeX>, which
                    with the chain rule gets us:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <LaTeX block>
                      {
                        "\\mathbf{v}_i = \\frac{d\\mathbf{r}_i}{dt} = \\sum_k \\frac{\\partial \\mathbf{r}_i}{\\partial q_k}\\frac{dq_k}{dt} + \\frac{\\partial \\mathbf{r}_i}{\\partial t}"
                      }
                    </LaTeX>
                  </div>
                  <p className="text-gray-700">
                    Also for virtual infinitesimal (no <LaTeX>{"dt"}</LaTeX>) we
                    get:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <LaTeX block>
                      {
                        "\\delta \\mathbf{r}_i = \\sum_k \\frac{\\partial \\mathbf{r}_i}{\\partial q_k}\\delta q_k"
                      }
                    </LaTeX>
                  </div>
                </div>

                {/* DAlemberts Principle with Generalized Coordinates */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Applying Generalized Coordinates to D&apos;Alembert&apos;s
                    Principle
                  </h3>
                  <p className="text-gray-700">
                    For the first part of D&apos;Alembert&apos;s Principle we
                    get:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <LaTeX block>
                      {
                        "\\sum_i \\mathbf{F}_i \\cdot \\delta \\mathbf{r}_i = \\sum_{i,j} \\mathbf{F}_i \\cdot \\frac{\\partial \\mathbf{r}_i}{\\partial q_j}\\delta q_j"
                      }
                    </LaTeX>
                  </div>
                  <p className="text-gray-700">
                    Let{" "}
                    <LaTeX>
                      {
                        "Q_j = \\sum_i \\mathbf{F}_i \\cdot \\frac{\\partial \\mathbf{r}_i}{\\partial q_j}"
                      }
                    </LaTeX>
                    , then{" "}
                    <LaTeX>
                      {
                        "\\sum_i \\mathbf{F}_i \\cdot \\delta \\mathbf{r}_i = \\sum_j Q_j \\delta q_j"
                      }
                    </LaTeX>
                    , where <LaTeX>{"Q_j \\delta q_j"}</LaTeX> has the dimension
                    of work.
                  </p>
                </div>

                {/* Second Part */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    The Second Part:{" "}
                    <LaTeX>
                      {
                        "\\sum_i \\dot{\\mathbf{p}}_i \\cdot \\delta \\mathbf{r}_i"
                      }
                    </LaTeX>
                  </h3>
                  <p className="text-gray-700">
                    Now for the second part where{" "}
                    <LaTeX>
                      {
                        "\\sum_i \\dot{\\mathbf{p}}_i \\cdot \\delta \\mathbf{r}_i"
                      }
                    </LaTeX>
                    , we can say that{" "}
                    <LaTeX>{"\\mathbf{p} = m_i \\ddot{\\mathbf{r}}_i"}</LaTeX>{" "}
                    by definition. Thus:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <LaTeX block>
                      {
                        "\\sum_i \\dot{\\mathbf{p}}_i \\cdot \\delta \\mathbf{r}_i = \\sum_i m_i \\ddot{\\mathbf{r}}_i \\cdot \\delta \\mathbf{r}_i \\Rightarrow \\sum_{i,j} m_i \\ddot{\\mathbf{r}}_i \\cdot \\frac{\\partial \\mathbf{r}_i}{\\partial q_j}\\delta q_j"
                      }
                    </LaTeX>
                  </div>
                  <p className="text-gray-700">
                    Now, we know that{" "}
                    <LaTeX>
                      {
                        "\\frac{d}{dt}\\left(m_i \\dot{\\mathbf{r}}_i \\cdot \\frac{\\partial \\mathbf{r}_i}{\\partial q_j}\\right)"
                      }
                    </LaTeX>
                    . By the product rule we would get:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <LaTeX block>
                      {
                        "m_i \\ddot{\\mathbf{r}}_i \\cdot \\frac{\\partial \\mathbf{r}_i}{\\partial q_j} + m_i \\dot{\\mathbf{r}}_i \\cdot \\frac{d}{dt}\\left(\\frac{\\partial \\mathbf{r}_i}{\\partial q_j}\\right)"
                      }
                    </LaTeX>
                  </div>
                  <p className="text-gray-700">
                    We only want the first part, so we must subtract. So:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <LaTeX block>
                      {
                        "\\sum_i \\left[\\frac{d}{dt}\\left(m_i \\dot{\\mathbf{r}}_i \\cdot \\frac{\\partial \\mathbf{r}_i}{\\partial q_j}\\right) - m_i \\dot{\\mathbf{r}}_i \\cdot \\frac{d}{dt}\\left(\\frac{\\partial \\mathbf{r}_i}{\\partial q_j}\\right)\\right]"
                      }
                    </LaTeX>
                  </div>
                </div>

                {/* Simplifying */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Simplifying{" "}
                    <LaTeX>
                      {
                        "\\frac{d}{dt}\\left(\\frac{\\partial \\mathbf{r}_i}{\\partial q_j}\\right)"
                      }
                    </LaTeX>
                  </h3>
                  <p className="text-gray-700">
                    Now this is ugly! Let&apos;s tackle it step by step. For the
                    last part, we have{" "}
                    <LaTeX>
                      {
                        "\\frac{d}{dt}\\left(\\frac{\\partial \\mathbf{r}_i}{\\partial q_j}\\right)"
                      }
                    </LaTeX>
                    . We want to get this to{" "}
                    <LaTeX>
                      {"\\frac{\\partial \\mathbf{v}_i}{\\partial q_j}"}
                    </LaTeX>
                    .
                  </p>
                  <p className="text-gray-700">Here is the math:</p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <LaTeX block>
                      {
                        "\\frac{d}{dt}\\left(\\frac{\\partial \\mathbf{r}_i}{\\partial q_j}\\right) = \\frac{\\partial}{\\partial q_j}\\left(\\frac{d\\mathbf{r}_i}{dt}\\right)"
                      }
                    </LaTeX>
                  </div>
                  <p className="text-gray-700">
                    Now{" "}
                    <LaTeX>
                      {
                        "\\frac{d}{dt}\\left(\\frac{\\partial \\mathbf{r}_i}{\\partial q_j}\\right) = \\frac{\\partial}{\\partial q_j}\\left(\\frac{d\\mathbf{r}_i}{dt}\\right)"
                      }
                    </LaTeX>
                    , that&apos;s just ={" "}
                    <LaTeX>
                      {"\\frac{\\partial \\mathbf{v}_i}{\\partial q_j}"}
                    </LaTeX>
                  </p>
                  <p className="text-gray-700">Therefore:</p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <LaTeX block>
                      {
                        "\\frac{\\partial \\mathbf{v}_i}{\\partial \\dot{q}_j} = \\frac{\\partial \\mathbf{r}_i}{\\partial q_j}"
                      }
                    </LaTeX>
                  </div>
                </div>

                {/* Final Expression */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Bringing It Together
                  </h3>
                  <p className="text-gray-700">Now:</p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <LaTeX block>
                      {
                        "\\sum_i \\left[\\frac{d}{dt}\\left(m_i \\mathbf{v}_i \\cdot \\frac{\\partial \\mathbf{v}_i}{\\partial \\dot{q}_j}\\right) - m_i \\mathbf{v}_i \\cdot \\frac{\\partial \\mathbf{v}_i}{\\partial q_j}\\right]"
                      }
                    </LaTeX>
                  </div>
                  <p className="text-gray-700">We want to then show that:</p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <LaTeX block>
                      {
                        "2\\mathbf{v}_i \\cdot \\frac{\\partial \\mathbf{v}_i}{\\partial \\dot{q}_j} = \\frac{\\partial v_i^2}{\\partial \\dot{q}_j}"
                      }
                    </LaTeX>
                  </div>
                  <p className="text-gray-700">
                    (we treat mass as constant). So what is{" "}
                    <LaTeX>
                      {"\\frac{\\partial v_i^2}{\\partial \\dot{q}_j}"}
                    </LaTeX>
                    ? Use chain rule to get:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <LaTeX block>
                      {
                        "\\frac{\\partial v_i^2}{\\partial \\mathbf{v}_i} \\cdot \\frac{\\partial \\mathbf{v}_i}{\\partial \\dot{q}_j} \\Rightarrow 2\\mathbf{v}_i \\cdot \\frac{\\partial \\mathbf{v}_i}{\\partial \\dot{q}_j}"
                      }
                    </LaTeX>
                  </div>
                  <p className="text-gray-700">
                    OK, but we don&apos;t want the 2 because in our original
                    equation it&apos;s{" "}
                    <LaTeX>
                      {
                        "\\mathbf{v}_i \\cdot \\frac{\\partial \\mathbf{v}_i}{\\partial \\dot{q}_j}"
                      }
                    </LaTeX>{" "}
                    not <LaTeX>{"2\\mathbf{v}_i"}</LaTeX>. So multiply by 1/2.
                  </p>
                  <p className="text-gray-700">
                    So we get that{" "}
                    <LaTeX>
                      {
                        "\\sum_i \\mathbf{F}_i^{(a)} \\cdot \\delta \\mathbf{r}_i = \\sum_j Q_j \\delta q_j"
                      }
                    </LaTeX>{" "}
                    and that:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <LaTeX block>
                      {
                        "\\sum_i \\dot{\\mathbf{p}}_i \\cdot \\delta \\mathbf{r}_i = \\sum_j \\left[\\frac{d}{dt}\\left(\\frac{\\partial T}{\\partial \\dot{q}_j}\\right) - \\frac{\\partial T}{\\partial q_j}\\right]\\delta q_j"
                      }
                    </LaTeX>
                  </div>
                  <p className="text-gray-700">
                    where <LaTeX>{"T = \\sum_i \\frac{1}{2}m_i v_i^2"}</LaTeX>{" "}
                    (kinetic energy).
                  </p>
                </div>

                {/* Final Form */}
                <div className="space-y-3 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                  <h3 className="text-xl font-semibold text-blue-900">
                    Lagrange&apos;s Equations
                  </h3>
                  <p className="text-blue-800">
                    We can change{" "}
                    <LaTeX>
                      {
                        "\\sum_i (\\mathbf{F}_i^{(a)} - \\dot{\\mathbf{p}}_i) \\cdot \\delta \\mathbf{r} = 0"
                      }
                    </LaTeX>{" "}
                    to{" "}
                    <LaTeX>
                      {
                        "\\sum_i (\\ddot{\\mathbf{r}}_i - \\mathbf{F}_i^{(a)}) \\cdot \\delta \\mathbf{r} = 0"
                      }
                    </LaTeX>{" "}
                    since both expressions are equivalent (they must both be 0
                    to get 0).
                  </p>
                  <p className="text-blue-800">So we get:</p>
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <LaTeX block>
                      {
                        "\\sum_j \\left[\\frac{d}{dt}\\left(\\frac{\\partial T}{\\partial \\dot{q}_j}\\right) - \\frac{\\partial T}{\\partial q_j} - Q_j\\right]\\delta q_j = 0"
                      }
                    </LaTeX>
                  </div>
                  <p className="text-blue-800">
                    where <LaTeX>{"T = \\sum_i \\frac{1}{2}m_i v_i^2"}</LaTeX>{" "}
                    (kinetic energy). This is{" "}
                    <strong>
                      Lagrange&apos;s equation in its most general form
                    </strong>
                    .
                  </p>
                </div>
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
                  <strong>
                    Virtual Displacement (<LaTeX>{"\\delta \\mathbf{r}"}</LaTeX>
                    ):
                  </strong>{" "}
                  An infinitesimal displacement with no time factor—imaginary
                  and instantaneous, representing what could happen at a single
                  moment.
                </li>
                <li>
                  <strong>D&apos;Alembert&apos;s Principle:</strong> The
                  principle stating that{" "}
                  <LaTeX>
                    {
                      "\\sum_i (\\mathbf{F}_i^{(a)} - \\dot{\\mathbf{p}}_i) \\cdot \\delta \\mathbf{r}_i = 0"
                    }
                  </LaTeX>
                  , extending the principle of virtual work to dynamic systems.
                </li>
                <li>
                  <strong>Generalized Coordinates:</strong> Independent
                  coordinates (<LaTeX>{"q_1, \\ldots, q_n"}</LaTeX>) equal in
                  number to the degrees of freedom of the system.
                </li>
                <li>
                  <strong>Lagrange&apos;s Equations:</strong> Equations of
                  motion in generalized coordinates, derived from
                  D&apos;Alembert&apos;s principle.
                </li>
              </ul>
            </section>
          </article>
        </section>
      </section>
    </section>
  );
};

export default ClassicalMechanics;
