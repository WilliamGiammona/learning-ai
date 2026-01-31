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

      <h2 id="mfp-outline" className="text-2xl font-bold mb-6 text-center">
        Outline
      </h2>

      <div className="mb-4">
        Up until now, we&apos;ve been living the easy life.
        <br />
        <br />
        In the last section, we solved the <em>planning problem</em> using
        dynamic programming.
        <br />
        <br />
        Planning is the version of reinforcement learning where:
        <br />
        <br />
        • the environment hands you the full MDP on a silver platter
        <br />
        • you know the transition dynamics
        <br />
        • you know the reward function
        <br />
        • and you can compute expectations exactly
        <br />
        <br />
        In other words, you know how the world works.
        <br />
        <br />
        That&apos;s why Bellman expectation backups were so clean.
        <br />
        <br />
        You could look at a state, enumerate all possible next states, weight
        them by their probabilities, and calmly compute the expected return.
        <br />
        <br />
        But in the real world?
        <br />
        <br />
        You don&apos;t get the MDP.
        <br />
        <br />
        You don&apos;t know the transition probabilities.
        <br />
        <br />
        You don&apos;t know the reward function.
        <br />
        <br />
        All you get is experience.
        <br />
        <br />
        Sequences of states, actions, and rewards, observed one step at a time.
        <br />
        <br />
        This brings us to <strong>model-free prediction</strong>.
        <br />
        <br />
        The goal is still the same as before:
        <br />
        <br />
        <em>
          &apos;Given a fixed policy <InlineMath math="\pi" />, find its value
          function.&apos;
        </em>
        <br />
        <br />
        The difference is how we get there.
        <br />
        <br />
        Instead of using a known model to compute expectations, we must learn
        the value function directly from sampled experience.
        <br />
        <br />
        No transition tables.
        <br />
        <br />
        No reward model.
        <br />
        <br />
        Just data.
        <br />
        <br />
        This section breaks model-free prediction into four parts:
        <br />
        <br />
        • an overview of the problem (this part)
        <br />
        • Monte Carlo learning
        <br />
        • Temporal Difference learning
        <br />
        • and TD(
        <InlineMath math="\lambda" />)
        <br />
        <br />
        Each method answers the same question —
        <br />
        <br />
        <em>
          &apos;How do we estimate a value function when we can only watch the
          world, not inspect it?&apos;
        </em>
        <br />
        <br />
        The differences come down to <em>when</em> we update, <em>what</em> we
        use as a target, and <em>how much</em> of the future we wait to see.
      </div>
    </section>
  );
}
