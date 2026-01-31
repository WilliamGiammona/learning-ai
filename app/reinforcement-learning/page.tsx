// app/reinforcement-learning/page.tsx

import Link from "next/link";
import Image from "next/image";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import RlIntro from "./chapters/rl-intro";
import MarkovDecisionProcess from "./chapters/markov-decision-processes";
import DynamicProgramming from "./chapters/dynamic-programming";
import ModelFreePrediction from "./chapters/model-free-prediction";

export default function ReinforcementLearningPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="flex gap-8">
        {/* Sticky Sidebar TOC */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <nav className="sticky top-8 p-4 bg-gray-50 rounded-lg border overflow-y-auto max-h-[calc(100vh-4rem)]">
            <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#ch-one-reinforcement-learning-problem"
                  className="text-blue-600 hover:text-blue-800 underline block font-medium"
                >
                  Introduction
                </a>

                {/* Subsections */}
                <ul className="mt-2 ml-4 space-y-1">
                  <li>
                    <a
                      href="#the-characters"
                      className="text-blue-600 hover:text-blue-800 underline block"
                    >
                      The Characters
                    </a>
                  </li>
                  <li>
                    <a
                      href="#the-data"
                      className="text-blue-600 hover:text-blue-800 underline block"
                    >
                      The Data
                    </a>
                  </li>
                  <li>
                    <a
                      href="#the-state"
                      className="text-blue-600 hover:text-blue-800 underline block"
                    >
                      The State
                    </a>
                  </li>
                  <li>
                    <a
                      href="#who-decides-state"
                      className="text-blue-600 hover:text-blue-800 underline block"
                    >
                      Who Decides What Goes Into the State?
                    </a>
                  </li>
                  <li>
                    <a
                      href="#seeing-vs-guessing"
                      className="text-blue-600 hover:text-blue-800 underline block"
                    >
                      Seeing Everything vs Guessing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#policy"
                      className="text-blue-600 hover:text-blue-800 underline block"
                    >
                      The Agent&apos;s Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#value-function"
                      className="text-blue-600 hover:text-blue-800 underline block"
                    >
                      The Agent&apos;s Value Function
                    </a>
                  </li>
                  <li>
                    <a
                      href="#model"
                      className="text-blue-600 hover:text-blue-800 underline block"
                    >
                      The Agent&apos;s Model
                    </a>
                  </li>
                  <li>
                    <a
                      href="#dont-need-all-pieces"
                      className="text-blue-600 hover:text-blue-800 underline block"
                    >
                      You Don&apos;t Need All The Pieces
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#ch-two-mdp"
                  className="text-blue-600 hover:text-blue-800 underline block font-medium"
                >
                  Markov Decision Process
                </a>

                {/* Subsections */}
                <ul className="mt-2 ml-4 space-y-1">
                  <li>
                    <a
                      href="#mdp-intro"
                      className="text-blue-600 hover:text-blue-800 underline block"
                    >
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a
                      href="#mdp-history"
                      className="text-blue-600 hover:text-blue-800 underline block"
                    >
                      History of MDPs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#mp"
                      className="text-blue-600 hover:text-blue-800 underline block"
                    >
                      Markov Process
                    </a>
                  </li>
                  <li>
                    <a
                      href="#mrp"
                      className="text-blue-600 hover:text-blue-800 underline block"
                    >
                      Markov Reward Process
                    </a>
                  </li>
                  <li>
                    <a
                      href="#historical-precedent-confusing-conventions"
                      className="text-blue-600 hover:text-blue-800 underline block"
                    >
                      Historical Precedent of Bad Conventions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#mrp-continued"
                      className="text-blue-600 hover:text-blue-800 underline block"
                    >
                      Markov Reward Process Continued
                    </a>
                  </li>
                  <li>
                    <a
                      href="#bellman-equation-introduction"
                      className="text-blue-600 hover:text-blue-800 underline block"
                    >
                      Introduction to Bellman Equation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#mdp"
                      className="text-blue-600 hover:text-blue-800 underline block"
                    >
                      Markov Decision Process
                    </a>
                  </li>
                  <li>
                    <a
                      href="#bellman-expectation-equation"
                      className="text-blue-600 hover:text-blue-800 underline block"
                    >
                      Bellman Expectation Equation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#bellman-optimality-equation"
                      className="text-blue-600 hover:text-blue-800 underline block"
                    >
                      Bellman Optimality Equation
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#ch-three-dynamic-programming"
                  className="text-blue-600 hover:text-blue-800 underline block font-medium"
                >
                  Dynamic Programming
                </a>

                {/* Subsections */}
                <ul className="mt-2 ml-4 space-y-1">
                  <li>
                    <a
                      href="#dp-intro"
                      className="text-blue-600 hover:text-blue-800 underline block"
                    >
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a
                      href="#dp-history"
                      className="text-blue-600 hover:text-blue-800 underline block"
                    >
                      History of Dynamic Programming
                    </a>
                  </li>
                  <li>
                    <a
                      href="#dp-policy-evaluation"
                      className="text-blue-600 hover:text-blue-800 underline block"
                    >
                      Policy Evaluation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#dp-policy-iteration"
                      className="text-blue-600 hover:text-blue-800 underline block"
                    >
                      Policy Iteration
                    </a>
                  </li>
                  <li>
                    <a
                      href="#dp-value-iteration"
                      className="text-blue-600 hover:text-blue-800 underline block"
                    >
                      Value Iteration
                    </a>
                  </li>
                  <li>
                    <a
                      href="#dp-extensions"
                      className="text-blue-600 hover:text-blue-800 underline block"
                    >
                      Extensions to Dynamic Programming
                    </a>
                  </li>
                  <li>
                    <a
                      href="#dp-contraction-mapping"
                      className="text-blue-600 hover:text-blue-800 underline block"
                    >
                      Contraction Mapping
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  href="#ch-four-model-free-prediction"
                  className="text-blue-600 hover:text-blue-800 underline block font-medium"
                >
                  Model Fre Prediction
                </a>

                {/* Subsections */}
                <ul className="mt-2 ml-4 space-y-1">
                  <li>
                    <a
                      href="#mfp-intro"
                      className="text-blue-600 hover:text-blue-800 underline block"
                    >
                      Introduction
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <RlIntro />
          <MarkovDecisionProcess />
          <DynamicProgramming />
          <ModelFreePrediction />
        </main>
      </div>
    </div>
  );
}
