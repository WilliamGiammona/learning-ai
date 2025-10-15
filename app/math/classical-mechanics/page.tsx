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
                </ol>
              </li>
              <li>
                <a href="#chapter-2" className="text-blue-700 hover:underline">
                  Chapter 2: Variational Principles
                </a>
                <ol className="ml-4 mt-1 space-y-1 list-decimal">
                  <li>
                    <a href="#c2-sec-1" className="hover:underline">
                      Hamilton&apos;s Principle
                    </a>
                  </li>
                  <li>
                    <a href="#c2-sec-2" className="hover:underline">
                      Calculus of Variations
                    </a>
                  </li>
                </ol>
              </li>
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

                {/* Dropping the δqj */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Simplifying: Dropping <LaTeX>{"\\delta q_j"}</LaTeX>
                  </h3>
                  <p className="text-gray-700">
                    Since all <LaTeX>{"q_j"}</LaTeX> are independent and the sum
                    must be equal to 0 for any choice of virtual displacements,
                    then each individual coefficient must vanish (or there would
                    be ways to vary <LaTeX>{"\\delta q_j"}</LaTeX> and not have
                    the sum = 0).
                  </p>
                  <p className="text-gray-700">
                    Thus we can drop the <LaTeX>{"\\delta q_j"}</LaTeX> and get:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <LaTeX block>
                      {
                        "\\frac{d}{dt}\\left(\\frac{\\partial T}{\\partial \\dot{q}_j}\\right) - \\frac{\\partial T}{\\partial q_j} - Q_j = 0"
                      }
                    </LaTeX>
                  </div>
                  <p className="text-gray-700">⇒</p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <LaTeX block>
                      {
                        "\\frac{d}{dt}\\left(\\frac{\\partial T}{\\partial \\dot{q}_j}\\right) - \\frac{\\partial T}{\\partial q_j} = Q_j"
                      }
                    </LaTeX>
                  </div>
                  <p className="text-gray-700">
                    For <LaTeX>{"n"}</LaTeX> equations (<LaTeX>{"n"}</LaTeX>{" "}
                    being the number of generalized coordinates in the system).
                  </p>
                </div>

                {/* Scalar Potential Function */}
                <div className="space-y-3 bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-green-900">
                    Definition: Scalar Potential Function
                  </h3>
                  <p className="text-gray-800">
                    A function that depends on position, e.g. SPF called{" "}
                    <LaTeX>{"V = V(r_i) = V(q_1, q_2, \\ldots, q_n)"}</LaTeX>
                  </p>
                  <p className="text-gray-800">
                    When the forces are derivable from a scalar potential
                    function <LaTeX>{"V"}</LaTeX>, then the force is equal to
                    the direction of the greatest decrease of the function
                    (similar to gradient descent in machine learning).
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <LaTeX block>{"\\mathbf{F}_i = -\\nabla_i V"}</LaTeX>
                  </div>
                  <p className="text-gray-800">
                    Remember we defined{" "}
                    <LaTeX>
                      {
                        "Q_j = \\sum_i \\mathbf{F}_i \\cdot \\frac{\\partial \\mathbf{r}_i}{\\partial q_j}"
                      }
                    </LaTeX>
                  </p>
                  <p className="text-gray-800">
                    So we can now substitute <LaTeX>{"-\\nabla_i V"}</LaTeX> for{" "}
                    <LaTeX>{"\\mathbf{F}_i"}</LaTeX> giving us:
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <LaTeX block>
                      {
                        "Q_j = -\\sum_i \\nabla_i V \\cdot \\frac{\\partial \\mathbf{r}_i}{\\partial q_j}"
                      }
                    </LaTeX>
                  </div>
                  <p className="text-gray-800">
                    Now what is{" "}
                    <LaTeX>{"\\frac{\\partial V}{\\partial q_j}"}</LaTeX>?
                    It&apos;s{" "}
                    <LaTeX>
                      {
                        "\\sum_i \\frac{\\partial V}{\\partial \\mathbf{r}_i} \\cdot \\frac{\\partial \\mathbf{r}_i}{\\partial q_j}"
                      }
                    </LaTeX>
                  </p>
                  <p className="text-gray-800">
                    But what is the first term{" "}
                    <LaTeX>
                      {"\\frac{\\partial V}{\\partial \\mathbf{r}_i}"}
                    </LaTeX>
                    ?
                  </p>
                  <p className="text-gray-800">
                    Remember that <LaTeX>{"\\nabla_i V"}</LaTeX> is just{" "}
                    <LaTeX>
                      {
                        "\\left(\\frac{\\partial V}{\\partial x_i}, \\frac{\\partial V}{\\partial y_i}, \\frac{\\partial V}{\\partial z_i}\\right)"
                      }
                    </LaTeX>
                  </p>
                  <p className="text-gray-800">
                    What is{" "}
                    <LaTeX>
                      {"\\frac{\\partial V}{\\partial \\mathbf{r}_i}"}
                    </LaTeX>
                    ?{" "}
                    <LaTeX>
                      {
                        "\\left(\\frac{\\partial V}{\\partial x_i}, \\frac{\\partial V}{\\partial y_i}, \\frac{\\partial V}{\\partial z_i}\\right)"
                      }
                    </LaTeX>{" "}
                    So <LaTeX>{"\\nabla_i V ="}</LaTeX>{" "}
                    <LaTeX>
                      {"\\frac{\\partial V}{\\partial \\mathbf{r}_i}"}
                    </LaTeX>
                  </p>

                  {/* CONFUSION BOX 1 */}
                  <div className="bg-red-50 border-2 border-red-500 p-4 rounded-lg my-4">
                    <p className="text-red-900 font-semibold mb-2">
                      ⚠️ CONFUSED:
                    </p>
                    <p className="text-red-800">
                      Why not in generalized coordinate space? The derivative is
                      a vector in physical space, not in generalized coordinate
                      space, and the operator that performs that derivative is
                      written as{" "}
                      <LaTeX>
                        {
                          "\\nabla_i = \\left(\\frac{\\partial}{\\partial x_i}, \\frac{\\partial}{\\partial y_i}, \\frac{\\partial}{\\partial z_i}\\right)"
                        }
                      </LaTeX>{" "}
                      So <LaTeX>{"\\nabla_i V = \\nabla V"}</LaTeX>
                    </p>
                  </div>

                  <p className="text-gray-800">
                    BY1 we are using generalized coordinates not Cartesian
                    coordinates!
                  </p>
                  <p className="text-gray-800">
                    For a system using generalized coordinates{" "}
                    <LaTeX>
                      {
                        "V = V(r_i) = V(r_i(q_1, \\ldots, q_n, t), r_2(q_1, \\ldots, q_n, t), t)"
                      }
                    </LaTeX>
                  </p>
                  <p className="text-gray-800">
                    However, we still define{" "}
                    <LaTeX>{"\\frac{\\partial V}{\\partial r}"}</LaTeX> to be
                    the rate at which <LaTeX>{"V"}</LaTeX> changes if only
                    particle&apos;s position <LaTeX>{"r_i"}</LaTeX> is varied,
                    keeping all other positions <LaTeX>{"r"}</LaTeX> fixed.
                  </p>
                  <p className="text-gray-800">
                    So we now have{" "}
                    <LaTeX>
                      {
                        "\\nabla V \\cdot \\frac{\\partial \\mathbf{r}_i}{\\partial q_j} \\Rightarrow \\frac{\\partial V}{\\partial r_i} \\frac{\\partial \\mathbf{r}_i}{\\partial q_j}"
                      }
                    </LaTeX>
                  </p>
                  <p className="text-gray-800">
                    but remember{" "}
                    <LaTeX>{"\\frac{\\partial q_j}{\\partial q_j}"}</LaTeX> is{" "}
                    <LaTeX>
                      {
                        "\\frac{\\partial V}{\\partial \\mathbf{r}_i} \\cdot \\frac{\\partial \\mathbf{r}_i}{\\partial q_j}"
                      }
                    </LaTeX>
                    , so{" "}
                    <LaTeX>
                      {
                        "\\nabla V \\cdot \\frac{\\partial \\mathbf{r}_i}{\\partial q_j} = \\frac{\\partial V}{\\partial q_j}"
                      }
                    </LaTeX>
                  </p>
                  <p className="text-gray-800">
                    So we can say{" "}
                    <LaTeX>
                      {
                        "Q_j = -\\sum_i \\nabla_i V \\cdot \\frac{\\partial \\mathbf{r}_i}{\\partial q_j} = -\\frac{\\partial V}{\\partial q_j}"
                      }
                    </LaTeX>
                  </p>
                </div>

                {/* Lagrangian */}
                <div className="space-y-3 bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-purple-900">
                    Definition: Lagrangian <LaTeX>{"L = T - V"}</LaTeX>
                  </h3>
                  <p className="text-gray-800">
                    One way to think of the scalar potential function{" "}
                    <LaTeX>{"V"}</LaTeX> is as potential energy. Thus the
                    Lagrangian <LaTeX>{"L = T - V"}</LaTeX> is that{" "}
                    <LaTeX>{"L"}</LaTeX> is the difference between{" "}
                    <LaTeX>{"T"}</LaTeX> (the kinetic energy) and{" "}
                    <LaTeX>{"V"}</LaTeX> (the potential energy).
                  </p>
                  <p className="text-gray-800">
                    We originally had{" "}
                    <LaTeX>
                      {
                        "\\frac{d}{dt}\\left(\\frac{\\partial T}{\\partial \\dot{q}_j}\\right) - \\frac{\\partial T}{\\partial q_j} = Q_j"
                      }
                    </LaTeX>
                  </p>

                  {/* CONFUSION BOX 2 */}
                  <div className="bg-red-50 border-2 border-red-500 p-4 rounded-lg my-4">
                    <p className="text-red-900 font-semibold mb-2">
                      ⚠️ CONFUSED:
                    </p>
                    <p className="text-red-800">
                      This equation of motion isn&apos;t necessarily restricted
                      to conservative systems; only if <LaTeX>{"V"}</LaTeX>{" "}
                      isn&apos;t an explicit function of time is the system
                      conservative. So <LaTeX>{"V"}</LaTeX> doesn&apos;t depend
                      on generalized velocities so we can include a{" "}
                      <LaTeX>{"V"}</LaTeX> term in the partial derivative w/
                      respect to <LaTeX>{"\\dot{q}_j"}</LaTeX>
                    </p>
                  </div>

                  <p className="text-gray-800">
                    This gets us{" "}
                    <LaTeX>
                      {
                        "\\frac{d}{dt}\\left(\\frac{\\partial(T-V)}{\\partial \\dot{q}_j}\\right) - \\frac{\\partial(T-V)}{\\partial q_j} = 0"
                      }
                    </LaTeX>
                  </p>
                  <p className="text-gray-800">
                    Replacing <LaTeX>{"T-V"}</LaTeX> w/ <LaTeX>{"L"}</LaTeX> we
                    get:
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <LaTeX block>
                      {
                        "\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial \\dot{q}_j}\\right) - \\frac{\\partial L}{\\partial q_j} = 0"
                      }
                    </LaTeX>
                  </div>
                  <p className="text-gray-800">
                    These are called{" "}
                    <strong>&quot;Lagrange&apos;s Expressions&quot;</strong>
                  </p>
                  <p className="text-gray-800">
                    Please note that if <LaTeX>{"T(q_j, \\dot{q}_j, t)"}</LaTeX>{" "}
                    is any differentiable function of the generalized
                    coordinates and time, then{" "}
                    <LaTeX>
                      {
                        "L(q_j, \\dot{q}_j, t) = L(q_j, \\dot{q}_j, t) + \\frac{dF}{dt}"
                      }
                    </LaTeX>
                    . So there is no single solution, it&apos;s a family of
                    solutions since the integral has a family of solutions.
                    Similar to the idea of{" "}
                    <LaTeX>{"\\int f(x) = F(x) + C"}</LaTeX> where we need the
                    constant added since the integral has a family of solutions.
                  </p>
                </div>
              </section>
            </section>

            {/* Chapter 2 */}
            <section id="chapter-2" className="scroll-mt-24 space-y-10">
              <h1 className="text-5xl font-extrabold text-gray-900">
                Chapter 2: Variational Principles and Lagrange&apos;s Equations
              </h1>

              <section id="c2-sec-1" className="scroll-mt-24 space-y-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  2.1 Hamilton&apos;s Principle
                </h2>

                <div className="space-y-3">
                  <p className="text-gray-700">
                    In 1.4, Lagrange&apos;s equations were derived by starting
                    from an instantaneous state of the system and infinitesimal
                    virtual displacements about the instantaneous state. Another
                    way to get Lagrange&apos;s equations is by considering the
                    entire motion of a system between <LaTeX>{"t_1"}</LaTeX> and{" "}
                    <LaTeX>{"t_2"}</LaTeX>, and small variations of this motion
                    from the actual motion. This is called an{" "}
                    <strong>&quot;integral principle&quot;</strong>.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">
                      Hamilton&apos;s Principle
                    </h3>
                    <p className="text-gray-800 mb-3">
                      The motion of the system from time <LaTeX>{"t_1"}</LaTeX>{" "}
                      to time <LaTeX>{"t_2"}</LaTeX> is such that the line
                      integral (also called action integral or just action)
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-blue-200 mb-3">
                      <LaTeX block>{"I = \\int_{t_1}^{t_2} L \\, dt"}</LaTeX>
                    </div>
                    <p className="text-gray-800">
                      where <LaTeX>{"L = T - V"}</LaTeX> has a stationary value
                      for the actual path of motion.
                    </p>
                  </div>

                  <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-amber-900 mb-3">
                      I.E. Out of ALL the possible paths...
                    </h3>
                    <p className="text-gray-800">
                      Out of ALL the possible paths the system point can travel
                      from <LaTeX>{"\\rho(t_1)"}</LaTeX> to{" "}
                      <LaTeX>{"\\rho(t_2)"}</LaTeX>, it will travel along the
                      path where the integral above is stationary.
                    </p>
                  </div>

                  <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      Reminder: Line Integral
                    </h3>
                    <p className="text-gray-700 mb-2">
                      In case you forgot what a line integral is, it&apos;s
                      simply the area under a curve in any space. Let&apos;s
                      look at an example where domain has 2 inputs{" "}
                      <LaTeX>{"x"}</LaTeX> and <LaTeX>{"y"}</LaTeX>. Now instead
                      of <LaTeX>{"S(x) = x^2"}</LaTeX>
                    </p>
                    <p className="text-gray-700 mb-2">
                      <LaTeX>{"S(x,y)"}</LaTeX>
                    </p>
                    <p className="text-gray-700 mb-3">
                      For single variable calculus, I took the product of{" "}
                      <LaTeX>{"S(x_i) \\cdot dx"}</LaTeX> where{" "}
                      <LaTeX>{"dx"}</LaTeX> is a tiny positive or negative
                      change in the <LaTeX>{"x"}</LaTeX> direction and added
                      from point <LaTeX>{"x_1"}</LaTeX> to point{" "}
                      <LaTeX>{"x_2"}</LaTeX>, i.e.{" "}
                      <LaTeX>{"\\int_{x_1}^{x_2} S(x) \\, dx"}</LaTeX>
                    </p>
                    <p className="text-gray-700 mb-3">
                      2 problems now! I&apos;m going in <LaTeX>{"x"}</LaTeX> and{" "}
                      <LaTeX>{"y"}</LaTeX> dir for my domain, and how do I write
                      the points on the curve I&apos;m traversing over since
                      they&apos;re now <LaTeX>{"x"}</LaTeX> and{" "}
                      <LaTeX>{"y"}</LaTeX> related?
                    </p>
                    <p className="text-gray-700 mb-3">
                      First, for the differential, look at this curve which
                      represents our domain:
                    </p>
                    <p className="text-gray-700 mb-3">
                      [Curve with{" "}
                      <LaTeX>{"\\frac{ds}{dx} \\frac{dx}{dy}"}</LaTeX> labeled]
                    </p>
                    <p className="text-gray-700 mb-3">
                      If we go an infinitesimal change in <LaTeX>{"x"}</LaTeX>{" "}
                      and <LaTeX>{"y"}</LaTeX> we can use Pythagorean thm to
                      find <LaTeX>{"ds"}</LaTeX>, i.e.{" "}
                      <LaTeX>{"ds^2 = dx^2 + dy^2"}</LaTeX> so{" "}
                      <LaTeX>{"ds = \\sqrt{dx^2 + dy^2}"}</LaTeX>
                    </p>
                    <p className="text-gray-700 mb-3">
                      Now we can say{" "}
                      <LaTeX>
                        {"\\int_{?}^{?} S(x,y) \\sqrt{dx^2 + dy^2}"}
                      </LaTeX>
                    </p>
                    <p className="text-gray-700 mb-3">
                      OK, but that&apos;s still super hard. Remember every{" "}
                      <LaTeX>{"S_n"}</LaTeX> can actually be parametrized by an
                      independent variable. Let&apos;s use <LaTeX>{"t"}</LaTeX>{" "}
                      as our new variable, both <LaTeX>{"x"}</LaTeX> and{" "}
                      <LaTeX>{"y"}</LaTeX> are <LaTeX>{"S_n"}</LaTeX>&apos;s of{" "}
                      <LaTeX>{"t"}</LaTeX> so we have{" "}
                      <LaTeX>{"S(x(t), y(t))"}</LaTeX>{" "}
                      <LaTeX>{"\\sqrt{(dx(t))^2 + (dy(t))^2}"}</LaTeX>
                    </p>
                    <p className="text-gray-700 mb-3">
                      Now we have bounds for our integral <LaTeX>{"t_1"}</LaTeX>{" "}
                      and <LaTeX>{"t_2"}</LaTeX>, we can now rewrite this as:
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-gray-300">
                      <LaTeX block>
                        {
                          "\\int_{t_0}^{t_f} S(x(t), y(t)) \\sqrt{(\\dot{x}(t))^2 + (\\dot{y}(t))^2} \\, dt"
                        }
                      </LaTeX>
                    </div>
                    <p className="text-gray-700 mt-3 mb-3">⇒</p>
                    <div className="bg-white p-4 rounded-lg border border-gray-300">
                      <LaTeX block>
                        {
                          "\\int_{t_0}^{t_f} S(x(t), y(t)) \\sqrt{\\frac{1}{dt^2}(dx(t))^2 + (dy(t))^2} \\, dt"
                        }
                      </LaTeX>
                    </div>
                    <p className="text-gray-700 mt-3 mb-3">⇒</p>
                    <div className="bg-white p-4 rounded-lg border border-gray-300">
                      <LaTeX block>
                        {
                          "\\int_{t_0}^{t_f} S(x(t), y(t)) \\sqrt{\\left(\\frac{dx(t)}{dt}\\right)^2 + \\left(\\frac{dy(t)}{dt}\\right)^2} \\, dt"
                        }
                      </LaTeX>
                    </div>
                    <p className="text-gray-700 mt-3 mb-3">⇒</p>
                    <div className="bg-white p-4 rounded-lg border border-gray-300">
                      <LaTeX block>
                        {
                          "\\int_{t_0}^{t_f} S(x(t), y(t)) \\sqrt{(\\dot{x}(t))^2 + (\\dot{y}(t))^2} \\, dt"
                        }
                      </LaTeX>
                    </div>
                    <p className="text-gray-700 mt-3">
                      We can rewrite this parametric equation using the position
                      vector function <LaTeX>{"\\vec{r}"}</LaTeX>.
                    </p>
                    <p className="text-gray-700">
                      Let{" "}
                      <LaTeX>
                        {"\\vec{r}(t) = x(t)\\hat{i} + y(t)\\hat{j}"}
                      </LaTeX>
                    </p>
                    <p className="text-gray-700">
                      So{" "}
                      <LaTeX>
                        {
                          "\\|\\dot{\\vec{r}}(t)\\| = \\sqrt{(\\dot{x}(t))^2 + (\\dot{y}(t))^2}"
                        }
                      </LaTeX>
                    </p>
                    <p className="text-gray-700">
                      So{" "}
                      <LaTeX>
                        {
                          "\\|\\dot{\\vec{r}}'(t)\\| = \\sqrt{(\\dot{x}'(t))^2 + (\\dot{y}'(t))^2}"
                        }
                      </LaTeX>
                    </p>
                    <p className="text-gray-700 mt-3">Thus we can now write:</p>
                    <div className="bg-white p-4 rounded-lg border border-gray-300">
                      <LaTeX block>
                        {
                          "\\int_{t_0}^{t_f} S(\\vec{r}(t)) \\|\\dot{\\vec{r}}'(t)\\| \\, dt"
                        }
                      </LaTeX>
                    </div>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mt-6">
                    <h3 className="text-xl font-bold text-green-900 mb-3">
                      End Reminder
                    </h3>
                    <h4 className="text-lg font-semibold text-green-800 mb-3">
                      Definition: Stationary Value of a Line Integral
                    </h4>
                    <p className="text-gray-800 mb-3">
                      Line integral has same value as all closely paths (those
                      differing only by an infinitesimal displacement) up to
                      first order infinitesimals.
                    </p>
                    <p className="text-gray-800 mb-2">
                      Ex: maybe only differ by <LaTeX>{"\\epsilon^2"}</LaTeX>{" "}
                      but NEVER by <LaTeX>{"\\epsilon"}</LaTeX> or more.
                    </p>
                    <p className="text-gray-800">
                      I.E. 1st derivative vanishes, only 2nd or higher
                      derivatives remain (line integral doesn&apos;t change much
                      for small tweaks of the path).
                    </p>
                    <p className="text-gray-800 mt-3">Thus for:</p>
                    <div className="bg-white p-4 rounded-lg border border-green-200">
                      <LaTeX block>
                        {
                          "I = \\int_{t_1}^{t_2} \\mathcal{L}(q_1, \\ldots, q_n, \\dot{q}_1, \\ldots, \\dot{q}_n, t) \\, dt"
                        }
                      </LaTeX>
                    </div>
                    <p className="text-gray-800 mt-3">then:</p>
                    <div className="bg-white p-4 rounded-lg border border-green-200">
                      <LaTeX block>
                        {
                          "\\delta I = \\delta \\int_{t_1}^{t_2} \\mathcal{L}(q_1, \\ldots, q_n, \\dot{q}_1, \\ldots, \\dot{q}_n, t) \\, dt = 0"
                        }
                      </LaTeX>
                    </div>
                    <p className="text-gray-800 mt-3">
                      So another way to write Hamilton&apos;s principle is for
                      the motion of the system, the variation of the line
                      integral <LaTeX>{"I"}</LaTeX>, for fixed{" "}
                      <LaTeX>{"t_1"}</LaTeX> and <LaTeX>{"t_2"}</LaTeX> is zero.
                    </p>
                    <p className="text-gray-800 mt-3">
                      Now the goal is to show that we derive Lagrange&apos;s
                      Equations directly from Hamilton&apos;s Principle.
                    </p>
                  </div>
                </div>
              </section>

              <section id="c2-sec-2" className="scroll-mt-24 space-y-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  2.2 Some Techniques of the Calculus of Variations
                </h2>

                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>Goal:</strong> Derive Lagrange&apos;s Equations from
                    Hamilton&apos;s Principle
                  </p>
                  <p className="text-gray-700">
                    To do this we must learn a math technique called the
                    calculus of variations. It&apos;s used to find when an
                    integral, like the action integral{" "}
                    <LaTeX>{"\\int \\mathcal{L} \\, dt"}</LaTeX>, is stationary.
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
                <li>
                  <strong>Scalar Potential Function:</strong> A function{" "}
                  <LaTeX>{"V"}</LaTeX> that depends on position, from which
                  forces can be derived as{" "}
                  <LaTeX>{"\\mathbf{F} = -\\nabla V"}</LaTeX>.
                </li>
                <li>
                  <strong>
                    Lagrangian (<LaTeX>{"L"}</LaTeX>):
                  </strong>{" "}
                  The difference between kinetic and potential energy,{" "}
                  <LaTeX>{"L = T - V"}</LaTeX>.
                </li>
                <li>
                  <strong>Hamilton&apos;s Principle:</strong> The motion of a
                  system makes the action integral{" "}
                  <LaTeX>{"I = \\int_{t_1}^{t_2} L \\, dt"}</LaTeX> stationary.
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
