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

      <h2 id="mfp-monte-carlo" className="text-2xl font-bold mb-6 text-center">
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
        <strong>History of Monte Carlo Learning</strong>
        <br />
        <br />
        In the mid-1940s, Polish mathematician Stanislaw Ulam was working at Los
        Alamos as part of the Manhattan Project. He got encephalitis
        (inflammation of the brain), and spent a lot of the time recovering in
        his hospital bed playing solitaire.
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
        The number of possible card arrangements is 52 factorial, and so Ulam
        realized that computing the exact answer was hopeless.
        <br />
        <br />
        But there was another option, he could just shuffle the cards, play a
        game, record whether it was winnable, and repeat this hundreds or
        thousands of times.
        <br />
        <br />
        The fraction of games that could be won wouldn&apos;t give the exact
        answer, but it would give a <em>statistical approximation</em>.
        <br />
        <br />
        When Ulam returned to Los Alamos, he decided to use the same method to
        try to figure out how neutrons behave inside a nuclear core (there are
        trillions of neutrons all interacting with their surroundings), too many
        to calculate back in the 1940s.
        <br />
        <br />
        Ulam discussed the idea with John von Neumann, but they both knew that
        unlike solitaire games which are independent, neutron interactions
        inside a core are not. Each neutron&apos;s future activity depends on
        its current state and what it just interacted with, so you couldn&apos;t
        just sample random outcomes like in solitaire.
        <br />
        <br />
        As we have already learned, a Markov Process is the perfect mathematical
        tool to apply when you want to use probability theory and statistics on
        dependent events, and that&apos;s exactly what they decided to use.
        <br />
        <br />
        Together, they implemented the idea on one of the world&apos;s first
        electronic computers: the ENIAC.
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
        An urban legend is that the heavy use of randomness and probability
        reminded Ulam of the Monte Carlo Casino, where his uncle spent a lot of
        time.
        <br />
        <br />
        At its core, the Monte Carlo idea is simple:
        <br />
        <br />
        <em>
          If you can&apos;t compute the expectation directly, sample the world
          and estimate it statistically.
        </em>{" "}
      </div>

      <div className="mb-4 mt-24">
        <strong>Monte Carlo Prediction in RL</strong>
        <br />
        <br />
        The Monte Carlo idea carries over to reinforcement learning almost
        unchanged.
        <br />
        <br />
        For the prediction problem in RL, we still want to estimate a value
        function for a fixed policy, but instead of computing expectations using
        a known model of the environment, we do something much simpler.
        <br />
        <br />
        We just run the policy over and over again.
        <br />
        <br />
        Each run produces an <em>entire episode</em>, which is just a sequence
        of states, rewards, and transitions that starts somewhere and eventually
        terminates.
        <br />
        <br />
        For every episode, the value we give to each state is just the total
        discounted reward accumulated from that state until the end of the
        episode (the return).
        <br />
        <br />
        One episode gives us one noisy sample of what the value of that state
        might be.
        <br />
        <br />
        Many episodes give us many samples, and Monte Carlo prediction simply
        averages those samples.
        <br />
        <br />
        The estimated value of a state is the average return of all the episodes
        where that state was visited. This approach has two important
        consequences.
        <br />
        <br />
        First, Monte Carlo methods are <em>model-free</em>.
        <br />
        <br />
        We never need to know:
        <br />
        <br />
        • the transition probabilities
        <br />
        • the reward function
        <br />
        • how the environment works internally
        <br />
        <br />
        All learning comes purely from observed experience.
        <br />
        <br />
        Second, Monte Carlo prediction only works for <strong>episodic</strong>
        problems.
        <br />
        <br />
        The episode has to end, otherwise, the return is never fully observed.
        If the episode never terminated, you would be waiting forever to see how
        much reward followed a state. This makes Monte Carlo methods
        conceptually simple and statistically sound, but also limited.
      </div>
    </section>
  );
}
