import Link from "next/link";
import Image from "next/image";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

export default function ModelFreePrediction() {
  return (
    <section id="ch-four-model-free-prediction" className="mb-12">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Model Free Prediction
      </h1>

      <h2 id="mfp-intro" className="text-2xl font-bold mb-6 text-center">
        Introduction
      </h2>

      <div className="mb-4">
        In the last section, we solved the <em>planning problem</em> using
        dynamic programming.
        <br />
        <br />
        Planning is the version of reinforcement learning where you know the
        full structure of the MDP
        <br />
        <br />
        • you know the transition dynamics
        <br />
        • you know the reward function
        <br />
        • you can compute expectations exactly
        <br />
        <br />
        In other words, you know how the environment works. That&apos;s why
        Bellman expectation backups were so clean. You could look at a state,
        list out all possible next states, weight them by their probabilities,
        and calmly compute the expected return.
        <br />
        <br />
        In the real world, you don&apos;t get the structure of the MDP.
        <br />
        <br />
        You don&apos;t know the transition probabilities.
        <br />
        <br />
        You don&apos;t know the reward function.
        <br />
        <br />
        All you get is experience: sequences of states, actions, and rewards,
        observed one step at a time.
        <br />
        <br />
        This brings us to <strong>model-free prediction</strong>.
        <br />
        <br />
        The goal is still the same as before:
        <br />
        <br />
        <em>
          Given a fixed policy <InlineMath math="\pi" />, find its value
          function.
        </em>
        <br />
        <br />
        The difference is how we get there. Instead of using a known model to
        compute expectations, we must learn the value function directly from
        sampled experience only.
        <br />
        <br />
        This section breaks model-free prediction into three parts:
        <br />
        <br />
        • Monte Carlo Learning
        <br />
        • Temporal Difference Learning
        <br />
        • TD(
        <InlineMath math="\lambda" />)
      </div>

      <h2 id="mfp-intro" className="text-2xl font-bold mb-6 text-center">
        Monte Carlo Learning
      </h2>

      <figure className="text-center my-14">
        <Image
          src="/images/reinforcement-learning/model-free-prediction/model-free-prediction-monte-carlo-casino.png"
          alt="Monte Carlo Casino"
          width={500}
          height={300}
          className="mx-auto"
        />
        <figcaption className="text-lg mt-2">Monte Carlo Casino</figcaption>
      </figure>

      <div className="mb-4">
        The story of Monte Carlo methods doesn&apos;t start in a casino.
        <br />
        <br />
        It starts in a hospital bed.
        <br />
        <br />
        In the mid-1940s, Polish mathematician Stanisław Ulam was working at Los
        Alamos as part of the Manhattan Project.
        <br />
        <br />
        One of the problems on the table was terrifyingly complex:
        <br />
        <br />
        <em>How do neutrons behave inside a nuclear core?</em>
        <br />
        <br />
        There are trillions of neutrons.
        <br />
        <br />
        Each one collides, scatters, gets absorbed, or triggers fission.
        <br />
        <br />
        And each interaction depends on what just happened before.
        <br />
        <br />
        Writing down exact equations for all of that was completely impossible
        with the mathematics and computing power of the 1940s.
        <br />
        <br />
        Then Ulam got sick.
        <br />
        <br />
        While recovering from surgery, he spent long stretches in bed, killing
        time by playing solitaire.
        <br />
        <br />
        At some point, a simple question popped into his head:
        <br />
        <br />
        <em>
          &apos;What is the probability that a randomly shuffled game of
          solitaire is winnable?&apos;
        </em>
        <br />
        <br />
        This turns out to be a brutally hard problem.
        <br />
        <br />
        The number of possible card arrangements is 52 factorial.
        <br />
        <br />
        That&apos;s a number so large that even writing it down feels rude.
        <br />
        <br />
        Ulam realized that computing the exact answer was hopeless.
        <br />
        <br />
        But there was another option.
        <br />
        <br />
        He could just play.
        <br />
        <br />
        Shuffle the cards.
        <br />
        <br />
        Play a game.
        <br />
        <br />
        Record whether it was winnable.
        <br />
        <br />
        Repeat this hundreds or thousands of times.
        <br />
        <br />
        The fraction of games that could be won wouldn&apos;t give the exact
        answer — but it would give a <em>statistical approximation</em>.
        <br />
        <br />
        Close enough to be useful.
        <br />
        <br />
        When Ulam returned to Los Alamos, he realized something important.
        <br />
        <br />
        The neutron problem had the same shape.
        <br />
        <br />
        Too many possibilities to enumerate.
        <br />
        <br />
        Too many interactions to compute exactly.
        <br />
        <br />
        But maybe you didn&apos;t need the exact answer.
        <br />
        <br />
        Maybe you could simulate lots of random outcomes and let statistics do
        the work.
        <br />
        <br />
        Ulam discussed the idea with John von Neumann.
        <br />
        <br />
        Von Neumann immediately saw both the promise and the catch.
        <br />
        <br />
        Solitaire games are independent.
        <br />
        <br />
        Neutrons are not.
        <br />
        <br />
        Each neutron&apos;s future depends on its current state and what it just
        interacted with.
        <br />
        <br />
        In other words, this wasn&apos;t just random sampling.
        <br />
        <br />
        It was a problem tailor-made for a Markov process.
        <br />
        <br />
        Together with colleagues, they implemented the idea on one of the
        world&apos;s first electronic computers: the ENIAC.
        <br />
        <br />
        Instead of solving equations directly, the computer generated huge
        numbers of simulated particle histories and averaged the results.
        <br />
        <br />
        The method worked.
        <br />
        <br />
        And it needed a name.
        <br />
        <br />
        The heavy use of randomness and probability reminded Ulam of the most
        famous gambling city in the world.
        <br />
        <br />
        Monte Carlo.
        <br />
        <br />
        At its core, the Monte Carlo idea is simple:
        <br />
        <br />
        <em>
          If you can&apos;t compute the expectation directly, sample the world
          and estimate it statistically.
        </em>
        <br />
        <br />
        That idea is about to show up again.
        <br />
        <br />
        This time, instead of neutrons or cards, we&apos;ll be sampling
        trajectories in a reinforcement learning environment.
      </div>
    </section>
  );
}
