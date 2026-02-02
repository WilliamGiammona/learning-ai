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
        function, <InlineMath math="v_\pi" />, for a fixed policy{" "}
        <InlineMath math="\pi" />, but instead of computing expectations using a
        known model of the environment, we do something much simpler.
        <br />
        <br />
        We just run the policy over and over again, collecting episodes of
        experience:
        <br />
        <br />
        <BlockMath math="S_0, A_0, R_1, S_1, A_1, R_2, \dots, S_T" />
        <br />
        <br />
        Each run produces an <em>entire episode</em>, which is just a sequence
        of states, rewards, and transitions that starts somewhere and eventually
        terminates.
        <br />
        <br />
        Now recall what we mean by the <em>return</em>.
        <br />
        <br />
        The return from time <InlineMath math="t" /> is the total discounted
        reward you collect from that point until the end of the episode:
        <br />
        <br />
        <BlockMath math="G_t = R_{t+1} + \gamma R_{t+2} + \cdots + \gamma^{T-t-1} R_T" />
        <br />
        <br />
        And recall what the value function actually is:
        <br />
        <br />
        <em>
          the expected return, if you start in a state and follow policy{" "}
          <InlineMath math="\pi" />.
        </em>
        <br />
        <br />
        <BlockMath math="v_\pi(s) = \mathbb{E}_\pi \left[ G_t \mid S_t = s \right]" />
        <br />
        <br />
        We don&apos;t know how to compute that expectation directly, so we
        replace it with something we <em>can</em> compute:
        <br />
        <br />
        <strong>the empirical mean of sampled returns</strong>
        <br />
        <br />
        Each time we visit a state <InlineMath math="s" />, we can observe the
        return that followed it. That return is one noisy sample of that
        state&apos;s value.
        <br />
        <br />
        Many episodes give us many samples, and Monte Carlo prediction simply
        averages them.
        <br />
        <br />
        In other words, instead of <em>expected return</em>, we use the{" "}
        <em>average return we actually saw</em>.
        <br />
        <br />
        This approach has two important consequences.
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
        Second, Monte Carlo prediction only works for <em>episodic</em>{" "}
        problems.
        <br />
        <br />
        The episode has to end, otherwise the return is never fully observed. If
        the episode never terminated, you would be waiting forever to see how
        much reward followed a state.
      </div>

      <div className="mb-4 mt-24">
        <strong>First-Visit vs Every-Visit Monte Carlo</strong>
        <br />
        <br />
        There is one important choice hiding inside Monte Carlo policy
        evaluation.
        <br />
        <br />
        Suppose we want to estimate the value of a particular state{" "}
        <InlineMath math="s" />.
        <br />
        <br />
        During a single episode, that state might appear only once or it might
        appear multiple times.
        <br />
        <br />
        The question is:
        <br />
        <br />
        <em>
          Which of those visits should we use when updating the value of state{" "}
          <InlineMath math="s" />?
        </em>
        <br />
        <br />
        This leads to two standard variants of Monte Carlo policy evaluation.
        <br />
        <br />
        <strong>First-Visit Monte Carlo</strong>
        <br />
        <br />
        In first-visit Monte Carlo, we are very strict.
        <br />
        <br />
        For each episode, we look at the <em>first time-step</em>{" "}
        <InlineMath math="t" /> at which state <InlineMath math="s" /> appears.
        <br />
        <br />
        We compute the return <InlineMath math="G_t" /> from that point onward,
        <br />
        <br />
        and we use <em>only that one return</em> to update our estimate of{" "}
        <InlineMath math="v_\pi(s)" />.
        <br />
        <br />
        Any later visits to the same state within the same episode are ignored.
        <br />
        <br />
        So each episode contributes at most one sample return for each state.
        <br />
        <br />
        <strong>Every-Visit Monte Carlo</strong>
        <br />
        <br />
        Every-visit Monte Carlo is more permissive.
        <br />
        <br />
        Instead of looking only at the first occurrence of{" "}
        <InlineMath math="s" />, we look at <em>every time-step</em> in the
        episode where that state is visited.
        <br />
        <br />
        Each visit produces its own return, and each return is treated as a
        separate sample.
        <br />
        <br />
        So a single episode can contribute multiple samples for the same state.
        <br />
        <br />
        In both cases, the update rule looks the same:
        <br />
        <br />
        we keep a running total of observed returns and divide by the number of
        samples.
        <br />
        <br />
        The difference is purely about <em>which samples we count</em>.
        <br />
        <br />
        Importantly, under standard assumptions, <em>both methods converge</em>.
        <br />
        <br />
        As the number of sampled returns grows, the estimated value{" "}
        <InlineMath math="V(s)" /> converges to the true value{" "}
        <InlineMath math="v_\pi(s)" />.
        <br />
        <br />
        Same destination.
        <br />
        <br />
        Slightly different paths.
      </div>
    </section>
  );
}
