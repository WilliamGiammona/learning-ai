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
        <InlineMath math="s" />. During a single episode, that state might
        appear only once or it might appear multiple times. The question is:
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
        For each episode, we only look at the <em>first timestep</em>,{" "}
        <InlineMath math="t" />, where state <InlineMath math="s" /> appears.
        <br />
        <br />
        We compute the return <InlineMath math="G_t" /> from that point onward,
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
        <em>Example:</em>
        <br />
        <br />
        Consider the following episode, with rewards shown above the arrows:
        <br />
        <br />
        <BlockMath math="A \xrightarrow{+2} B \xrightarrow{-1} A \xrightarrow{+3} C \xrightarrow{+5} \text{terminal}" />
        <br />
        <br />
        Suppose we are estimating the value of state <InlineMath math="A" />,
        and assume a discount factor <InlineMath math="\gamma = 0.9" />.
        <br />
        <br />
        <strong>First visit to</strong> <InlineMath math="A" />:
        <br />
        <br />
        The rewards that follow the first visit are:
        <br />
        <br />
        <BlockMath math="G = 2 + 0.9(-1) + 0.9^2(3) + 0.9^3(5)" />
        <BlockMath math="\Rightarrow G = 2 - 0.9 + 2.43 + 3.645 = 7.175" />
        <br />
        <br />
        So this episode contributes a single return of{" "}
        <InlineMath math="G = 7.175" /> for state <InlineMath math="A" />.
        <br />
        <br />
        The second visit to <InlineMath math="A" /> in the same episode is
        ignored.
        <br />
        <br />
        <strong>Every-Visit Monte Carlo</strong>
        <br />
        <br />
        Every-visit Monte Carlo is more permissive.
        <br />
        <br />
        Instead of looking only at the first occurrence of{" "}
        <InlineMath math="s" />, we look at <em>every timestep</em> in the
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
        <em>Example:</em>
        <br />
        <br />
        Using the same episode:
        <br />
        <br />
        <BlockMath math="A \xrightarrow{+2} B \xrightarrow{-1} A \xrightarrow{+3} C \xrightarrow{+5} \text{terminal}" />
        <br />
        <br />
        Again assuming <InlineMath math="\gamma = 0.9" />:
        <br />
        <br />
        <strong>First visit to</strong> <InlineMath math="A" />:
        <br />
        <br />
        <BlockMath math="G_1 = 2 + 0.9(-1) + 0.9^2(3) + 0.9^3(5) = 7.175" />
        <br />
        <br />
        <strong>Second visit to</strong> <InlineMath math="A" />:
        <br />
        <br />
        <BlockMath math="G_2 = 3 + 0.9(5) = 7.5" />
        <br />
        <br />
        So this single episode contributes <em>two</em> sample returns for state{" "}
        <InlineMath math="A" />:
        <br />
        <br />
        <InlineMath math="7.175" /> and <InlineMath math="7.5" />, so the
        estimated value for state A would be the average of these two returns,{" "}
        <InlineMath math="7.3375" />.
        <br />
        <br />
        In both cases, the update rule looks the same:
        <br />
        <br />
        we keep a running total of observed returns and divide by the number of
        samples. The difference is purely about <em>which samples we count</em>.
        <br />
        <br />
        Importantly, under standard assumptions, <em>both methods converge</em>.
        <br />
        <br />
        As the number of sampled returns grows, the estimated value{" "}
        <InlineMath math="\hat{v}_\pi(s)" /> converges to the true value{" "}
        <InlineMath math="v_\pi(s)" />.
      </div>

      <div className="mb-4 mt-24">
        <strong>Incremental Mean</strong>
        <br />
        <br />
        In reinforcement learning, we estimate state values by averaging
        returns, but instead of summing all returns and dividing, we use a more
        efficient approach: the incremental mean. Let's see why.
        <br />
        <br />
        Suppose we observe a sequence of numbers:
        <br />
        <br />
        <InlineMath math="x_1, x_2, \dots, x_k" />
        <br />
        <br />
        The usual way to compute their mean is to add everything up and divide
        by how many numbers we have:
        <br />
        <br />
        <BlockMath math="\mu_k = \frac{x_1 + x_2 + \dots + x_k}{k}" />
        <br />
        <br />
        That definition is simple and intuitive.
        <br />
        <br />
        But it hides an inconvenient detail.
        <br />
        <br />
        Every time a new number arrives, we have to remember <em>all</em> the
        old ones in order to recompute the sum.
        <br />
        <br />
        Now let&apos;s rewrite the same mean in a slightly different way.
        <br />
        <br />
        Split the last term off from the rest:
        <br />
        <br />
        <BlockMath math="\mu_k = \frac{x_k + (x_1 + x_2 + \dots + x_{k-1})}{k}" />
        <br />
        <br />
        But notice something important.
        <br />
        <br />
        The quantity in parentheses is just the previous mean multiplied by{" "}
        <InlineMath math="k - 1" />:
        <br />
        <br />
        <BlockMath math="x_1 + x_2 + \dots + x_{k-1} = (k - 1)\mu_{k-1}" />
        <br />
        <br />
        Plug that in:
        <br />
        <br />
        <BlockMath math="\mu_k = \frac{x_k + (k - 1)\mu_{k-1}}{k}" />
        <br />
        <br />
        Split the fraction:
        <br />
        <br />
        <BlockMath math="\mu_k = \frac{x_k}{k} + \frac{(k - 1)\mu_{k-1}}{k}" />
        <br />
        <br />
        Rewrite the second term:
        <br />
        <br />
        <BlockMath math="\mu_k = \frac{x_k}{k} + \left(1 - \frac{1}{k}\right)\mu_{k-1}" />
        <br />
        <br />
        Expand:
        <br />
        <br />
        <BlockMath math="\mu_k = \frac{x_k}{k} + \mu_{k-1} - \frac{1}{k}\mu_{k-1}" />
        <br />
        <br />
        Group terms:
        <br />
        <br />
        <BlockMath math="\mu_k = \mu_{k-1} + \frac{1}{k}(x_k - \mu_{k-1})" />
        <br />
        <br />
        This formula may look new, but it is doing{" "}
        <em>exactly the same thing</em> as the original definition of the mean.
        <br />
        <br />
        It takes the old average, nudges it toward the new observation, and
        scales that adjustment by how many samples we have seen so far.
        <br />
        <br />
        The key point is that this incremental form lets us update the mean
        using only:
        <br />
        <br />
        • the previous mean
        <br />
        • the new data point
        <br />
        <br />
        We never need to store the entire history.
        <br />
        <br />
        This is why, when we start estimating value functions from data (where
        we are taking the mean of every value we saw of a state for each
        episode), we will use this incremental form instead of storing and
        summing all returns we've ever seen.
        <br />
        <br />
        There is another very important way to read this update.
        <br />
        <br />
        Look closely at the term inside the parentheses:
        <br />
        <br />
        <InlineMath math="x_k - \mu_{k-1}" />
        <br />
        <br />
        This is an <em>error term</em>.
        <br />
        <br />
        It measures how wrong our previous estimate{" "}
        <InlineMath math="\mu_{k-1}" /> was compared to the new observation{" "}
        <InlineMath math="x_k" />. If the new data point is larger than our
        current mean, the error is positive, and the update nudges the mean
        upward. If the new data point is smaller than our current mean, the
        error is negative, and the update nudges the mean downward.
        <br />
        <br />
        And if the new data point exactly matches what we already believed,
        <br />
        <br />
        <InlineMath math="x_k = \mu_{k-1}" />,
        <br />
        <br />
        then the error is zero. In that case, no update is needed at all.
        <br />
        <br />
        So this update rule can be read as:
        <br />
        <br />
        <em>
          Take your old estimate, measure how wrong it was, and move it a small
          step in the direction of that error.
        </em>
        <br />
        <br />
        The size of that step is controlled by <InlineMath math="\frac{1}{k}" />
        .
        <br />
        <br />
        Early on, when we have seen only a few samples, <InlineMath math="k" />{" "}
        is small, so each new observation can move the estimate quite a bit
        (e.g., when <InlineMath math="k=2" />, the step size is{" "}
        <InlineMath math="\frac{1}{2}" />
        ). Later, as more data accumulates, <InlineMath math="k" /> becomes
        larger, so each new observation makes a smaller and smaller adjustment
        (e.g., when <InlineMath math="k=100" />, the step size is only{" "}
        <InlineMath math="\frac{1}{100}" />
        ).
        <br />
        <br />
        <strong>Incremental Mean Example:</strong>
        <br />
        <br />
        Suppose we've seen 3 returns for a particular state:{" "}
        <InlineMath math="10, 8, 12" />. The mean is{" "}
        <InlineMath math="\mu_3 = 10" />.
        <br />
        <br />
        Now a fourth return arrives: <InlineMath math="x_4 = 14" />.
        <br />
        <br />
        Instead of recomputing
        <br />
        <br />
        <BlockMath math="(10+8+12+14)/4 = 11" />
        <br />
        <br />
        we update:
        <br />
        <br />
        <BlockMath math="\mu_4 = \mu_3 + \frac{1}{4}(x_4 - \mu_3)" />
        <br />
        <BlockMath math="\Rightarrow 10 + \frac{1}{4}(14 - 10) " />
        <br />
        <BlockMath math="\Rightarrow 10 + \frac{4}{4} = 11 " />
      </div>

      <div className="mt-24 space-y-4">
        <strong>Incremental Monte Carlo Updates</strong>

        <p>
          Now we take the incremental mean idea and apply it to Monte Carlo
          policy evaluation.
        </p>

        <p>The setup is the same as before:</p>

        <ul className="list-disc list-inside space-y-1">
          <li>
            we run an episode under policy <InlineMath math="\pi" />
          </li>
          <li>
            we compute the return <InlineMath math="G_t" /> for the states we
            visited
          </li>
          <li>
            we want to update our estimate of the value function{" "}
            <InlineMath math="\hat{v}_\pi(s)" />
          </li>
        </ul>

        <p>
          The key insight is that <InlineMath math="\hat{v}_\pi(s)" /> is just a
          mean.
        </p>

        <p>
          It&apos;s the mean of all the returns we&apos;ve ever observed after
          visiting state <InlineMath math="s" />.
        </p>

        <p>
          So instead of storing every return forever and recomputing an average
          from scratch, we update that mean incrementally:
        </p>

        <BlockMath math="\hat{v}^{new}_\pi(S_t) \leftarrow \hat{v}_\pi(S_t) + \frac{1}{N(S_t)}\bigl(G_t - \hat{v}_\pi(S_t)\bigr)" />

        <p>
          Here <InlineMath math="N(S_t)" /> is just a counter that keeps track
          of how many times we have visited state <InlineMath math="S_t" /> so
          far.
        </p>

        <p>Each time we see the state again, we increment the counter:</p>

        <BlockMath math="N(S_t) \leftarrow N(S_t) + 1" />

        <p>And then we apply the update.</p>

        <p>Notice the structure:</p>

        <p>
          <InlineMath math="(G_t - \hat{v}_\pi(S_t))" /> is the error, where{" "}
          <InlineMath math="G_t" /> is the return we just observed for a state
          on our latest episode, and <InlineMath math="\hat{v}_\pi(S_t)" /> is
          the average value of all our previous returns for that state (our
          current estimate).
        </p>

        <p>
          This error term tells us how far off our current estimate was from the
          new sampled return.
        </p>

        <p>
          The factor <InlineMath math="\frac{1}{N(S_t)}" /> is the step size.
        </p>

        <p>
          Early on, when we have only visited the state a few times, the step
          size is large, so each new return can move{" "}
          <InlineMath math="\hat{v}_\pi(S_t)" /> a lot.
        </p>

        <p>
          Later, after many visits, the step size becomes tiny, so the estimate
          stabilizes.
        </p>

        <p>
          <strong>Why we replace</strong> <InlineMath math="\frac{1}{N(S_t)}" />{" "}
          <strong>with</strong> <InlineMath math="\alpha" />
        </p>

        <p>
          Using <InlineMath math="\frac{1}{N(S_t)}" /> makes{" "}
          <InlineMath math="\hat{v}_\pi(s)" /> a true sample average, but
          sometimes we don&apos;t actually want an equal-weight average over the
          entire history because in many real problems, the world can change
          over time.
        </p>

        <p>
          If the environment is non-stationary, old experience can become less
          relevant than recent experience. In that case, a constantly shrinking
          step size is a problem, because it makes the value estimates hard to
          move later on.
        </p>

        <p>
          Thus, we replace the visit-count step size,{" "}
          <InlineMath math="\frac{1}{N(S_t)}" />, with a constant learning rate{" "}
          <InlineMath math="\alpha" />:
        </p>

        <BlockMath math="\hat{v}^{new}_\pi(S_t) \leftarrow \hat{v}_\pi(S_t) + \alpha\bigl(G_t - \hat{v}_\pi(S_t)\bigr)" />

        <p>
          Why does a constant learning rate, <InlineMath math="\alpha" />, give
          more weight to recent experience?
        </p>

        <p>To see this clearly, we need to rewrite the update rule slightly:</p>

        <BlockMath math="\hat{v}^{new}_\pi(S_t) \leftarrow (1-\alpha)\hat{v}_\pi(S_t) + \alpha G_t" />

        <p>This form makes the behavior explicit.</p>

        <p>
          Each update keeps a fraction <InlineMath math="1-\alpha" /> of the old
          estimate and mixes in a fraction <InlineMath math="\alpha" /> of the
          new return.
        </p>

        <p>
          Now suppose we observe a sequence of returns{" "}
          <InlineMath math="G_1, G_2, G_3, \dots" /> for the same state.
        </p>

        <p>
          Let&apos;s see how those returns contribute to the value estimate over
          time.
        </p>

        <p>After the first update:</p>

        <BlockMath math="\hat{v}_1 = \alpha G_1" />

        <p>After the second update:</p>

        <BlockMath math="\hat{v}_2 = (1-\alpha)\alpha G_1 + \alpha G_2" />

        <p>After the third update:</p>

        <BlockMath math="\hat{v}_3 = (1-\alpha)^2 \alpha G_1 + (1-\alpha)\alpha G_2 + \alpha G_3" />

        <p>A clear pattern appears.</p>

        <ul className="list-disc list-inside space-y-1">
          <li>
            The most recent return always receives weight{" "}
            <InlineMath math="\alpha" />.
          </li>
          <li>
            Each earlier return is multiplied by an additional factor of{" "}
            <InlineMath math="1-\alpha" /> for every update that has happened
            since it was observed.
          </li>
        </ul>

        <p>
          This means older experience is not discarded, but it is progressively
          discounted.
        </p>

        <p>
          <strong>Concrete example</strong>
        </p>

        <p>
          Suppose <InlineMath math="\alpha = 0.1" /> and we observe returns{" "}
          <InlineMath math="G_1, G_2, G_3, G_4" />.
        </p>

        <p>Their effective weights in the value estimate become:</p>

        <ul className="list-disc list-inside space-y-1">
          <li>
            <InlineMath math="G_4" /> has weight <InlineMath math="0.10" />
          </li>
          <li>
            <InlineMath math="G_3" /> has weight <InlineMath math="0.09" />
          </li>
          <li>
            <InlineMath math="G_2" /> has weight <InlineMath math="0.081" />
          </li>
          <li>
            <InlineMath math="G_1" /> has weight <InlineMath math="0.0729" />
          </li>
        </ul>

        <p>
          Each step back in time multiplies the influence by{" "}
          <InlineMath math="1-\alpha = 0.9" />.
        </p>

        <p>
          <em>
            So recent returns matter more because older returns are repeatedly
            discounted.
          </em>
        </p>

        <p>
          Now compare this to what happens when we use the visit-count step size{" "}
          <InlineMath math="\frac{1}{N(S_t)}" />.
        </p>

        <p>
          With this choice, the update rule can be rewritten in the same form as
          before:
        </p>

        <BlockMath math="\hat{v}^{new}_\pi(S_t) \leftarrow \left(1 - \tfrac{1}{N(S_t)}\right)\hat{v}_\pi(S_t) + \tfrac{1}{N(S_t)}\,G_t" />

        <p>
          At first glance, this looks almost identical to the constant{" "}
          <InlineMath math="\alpha" /> update.
        </p>

        <p>In both cases, we are forming a weighted average between:</p>

        <ul className="list-disc list-inside space-y-1">
          <li>
            the old estimate <InlineMath math="\hat{v}_\pi(S_t)" />
          </li>
          <li>
            the newly observed return <InlineMath math="G_t" />
          </li>
        </ul>

        <p>The difference lies entirely in how the weights behave over time.</p>

        <p>
          With the visit-count update, the effective step size is{" "}
          <InlineMath math="\alpha_t = \tfrac{1}{N(S_t)}" />.
        </p>

        <p>
          Every time the state is visited again, <InlineMath math="N(S_t)" />{" "}
          increases, and the weight placed on the new return gets smaller.
        </p>

        <ul className="list-disc list-inside space-y-1">
          <li>early returns cause large updates</li>
          <li>later returns cause very small updates</li>
        </ul>

        <p>
          As a result, newer returns are <em>not</em> given special importance.
        </p>

        <p>
          Instead, all returns, newer and older, end up contributing equally in
          the long run.
        </p>

        <p>
          <strong>Concrete comparison</strong>
        </p>

        <p>
          To really see the difference, let&apos;s expand the{" "}
          <InlineMath math="\frac{1}{N(S_t)}" /> update the same way we expanded
          the constant <InlineMath math="\alpha" /> update.
        </p>

        <p>
          When the state is visited for the <InlineMath math="n" />
          -th time, the step size is{" "}
          <InlineMath math="\alpha_n = \frac{1}{n}" />.
        </p>

        <p>
          So the update at visit <InlineMath math="n" /> is:
        </p>

        <BlockMath math="\hat{v}_n = \left(1-\frac{1}{n}\right)\hat{v}_{n-1} + \frac{1}{n}G_n" />

        <p>Now let&apos;s unroll this for the first few visits.</p>

        <p>
          <strong>After 1 visit</strong>
        </p>

        <BlockMath math="\hat{v}_1 = \frac{1}{1}G_1" />

        <p>
          <strong>After 2 visits</strong>
        </p>

        <BlockMath math="\hat{v}_2 = \left(1-\frac{1}{2}\right)\hat{v}_1 + \frac{1}{2}G_2" />
        <BlockMath math="\frac{1}{2}G_1 + \frac{1}{2}G_2" />

        <p>
          <strong>After 3 visits</strong>
        </p>

        <BlockMath math="\hat{v}_3 = \left(1-\frac{1}{3}\right)\hat{v}_2 + \frac{1}{3}G_3" />
        <BlockMath math="\frac{2}{3}\left(\frac{1}{2}G_1 + \frac{1}{2}G_2\right) + \frac{1}{3}G_3" />
        <BlockMath math="\frac{1}{3}G_1 + \frac{1}{3}G_2 + \frac{1}{3}G_3" />

        <p>
          <strong>After 4 visits</strong>
        </p>

        <BlockMath math="\hat{v}_4 = \left(1-\frac{1}{4}\right)\hat{v}_3 + \frac{1}{4}G_4" />
        <BlockMath math="\frac{3}{4}\left(\frac{1}{3}G_1 + \frac{1}{3}G_2 + \frac{1}{3}G_3\right) + \frac{1}{4}G_4" />
        <BlockMath math="\frac{1}{4}G_1 + \frac{1}{4}G_2 + \frac{1}{4}G_3 + \frac{1}{4}G_4" />

        <p>Notice what just happened.</p>

        <p>
          Even though the step size changes at every visit (
          <InlineMath math="\frac{1}{1}, \frac{1}{2}, \frac{1}{3}, \frac{1}{4}, \dots" />
          ), the final result is a true sample average.
        </p>

        <p>
          After <InlineMath math="n" /> visits, each return ends up with weight{" "}
          <InlineMath math="\frac{1}{n}" />. The weight depends on how many
          total samples you have.
        </p>

        <p>
          So unlike constant <InlineMath math="\alpha" />, there is no
          exponential discounting of older returns. The weight does not depend
          on how old a return is.
        </p>

        <p>So the key distinction is:</p>

        <ul className="list-disc list-inside space-y-1">
          <li>
            <InlineMath math="\frac{1}{N(S_t)}" /> produces a{" "}
            <em>true sample average</em>, where all returns are weighted equally
          </li>
          <li>
            constant <InlineMath math="\alpha" /> produces an{" "}
            <em>exponentially weighted average</em>, where recent returns matter
            more
          </li>
        </ul>

        <p>
          As said earlier, the Monte Carlo approach has a fundamental
          limitation, it requires waiting until the end of an episode to compute
          the return <InlineMath math="G_t" />. That means learning can only
          happen <em>after</em> an episode finishes.
        </p>

        <p>
          But what if the episode is very long?
          <br />
          Or never truly ends?
        </p>

        <p>
          A new method called <em>temporal difference learning</em> was
          introduced to answer exactly this question.
        </p>
      </div>

      <h2 id="mfp-td-learning" className="text-2xl font-bold my-12 text-center">
        Temporal Difference Learning
      </h2>

      <figure className="text-center my-14">
        <Image
          src="/images/reinforcement-learning/model-free-prediction/mfp-sutton.png"
          alt="Richard Sutton"
          width={500}
          height={300}
          className="mx-auto"
        />
        <figcaption className="text-lg mt-2">Richard Sutton</figcaption>
      </figure>

      <h3 className="font-bold mb-4">
        The History of Temporal Difference Learning
      </h3>

      <div className="space-y-4">
        <p>
          Temporal Difference (TD) learning did not appear fully formed as a
          standard reinforcement learning algorithm, it emerged from a much more
          basic question:
        </p>

        <p>
          <em>
            How can an agent learn to make predictions from experience, before
            the final outcome is known?
          </em>
        </p>

        <p>
          In the late 1980s, reinforcement learning as we know it today did not
          yet exist as a unified field. There were two dominant ideas for
          learning predictions:
        </p>

        <ul className="list-disc list-inside space-y-1">
          <li>Supervised Learning, where targets are given explicitly</li>
          <li>
            Monte Carlo methods, where learning waits until the end of an
            episode
          </li>
        </ul>

        <p>
          Both approaches had serious limitations. Supervised learning assumes a
          teacher that provides correct answers. Monte Carlo methods require
          waiting until an entire sequence finishes before any learning can
          happen.
        </p>

        <p>
          In the late 1980s, Richard Sutton, a Canadian computer scientist and
          cognitive science researcher studying learning systems, was interested
          in a different problem.
        </p>

        <p>
          He was studying how systems could{" "}
          <em>learn to predict future signals from ongoing experience</em>, in
          real time, without waiting for a final outcome and without a
          supervising teacher.
        </p>

        <p className="mb-4">This line of thinking led to his 1988 paper,</p>

        <Link
          href="https://link.springer.com/content/pdf/10.1007/BF00115009.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Learning to Predict by the Methods of Temporal Differences
        </Link>

        <p className="mt-4">
          Here, Sutton introduced the core idea behind Temporal Difference
          learning:
        </p>

        <p>
          <em>
            You do not need to wait for the final outcome to know whether a
            prediction is wrong, you can compare successive predictions to each
            other.
          </em>
        </p>

        <p>
          Sutton, along with Andrew Barto, would later go on to co-author what
          is now the standard reference for the field,{" "}
          <em>Reinforcement Learning: An Introduction</em>, a book that helped
          define modern reinforcement learning and unify Monte Carlo methods,
          Temporal Difference learning, and dynamic programming under a single
          framework.
        </p>
      </div>

      <div className="mb-4 mt-12">
        <h3 className="mb-8 font-bold text-lg">
          Temporal Difference Learning: Targets, Errors, and Bootstrapping
        </h3>

        <p className="mb-4">
          Temporal Difference learning keeps the same high-level goal as Monte
          Carlo prediction:
        </p>

        <p className="mb-4">
          <em>
            Given a fixed policy <InlineMath math="\pi" />, estimate the value
            function <InlineMath math="v_\pi" /> from experience.
          </em>
        </p>

        <p className="mb-4">
          But the way TD learning updates its estimates is fundamentally
          different.
        </p>

        <p className="mb-6">
          To see why, let&apos;s first remind ourselves what Monte Carlo was
          doing.
        </p>

        <p className="mb-4">
          In Monte Carlo learning, when we visit a state{" "}
          <InlineMath math="S_t" />, we wait until the episode ends, compute the
          full return <InlineMath math="G_t" />, and then update our value
          estimate toward that <em>actual return</em>:
        </p>

        <BlockMath math="\hat{v}^{new}_\pi(S_t) \leftarrow \hat{v}^{old}_\pi(S_t) + \alpha\bigl(G_t - \hat{v}^{old}_\pi(S_t)\bigr)" />

        <p className="mb-4">
          Monte Carlo learning always waits for the final answer before it
          learns.
        </p>

        <p className="mb-6">Temporal Difference learning refuses to wait.</p>

        <p className="mb-4">
          <strong>The Core TD idea</strong>
        </p>

        <p className="mb-4">
          Instead of waiting until the end of the episode to see the true
          return, Temporal Difference learning updates its estimate{" "}
          <em>one step at a time</em>.
        </p>

        <p className="mb-4">
          When the agent moves from state <InlineMath math="S_t" /> to{" "}
          <InlineMath math="S_{t+1}" /> and observes reward{" "}
          <InlineMath math="R_{t+1}" />, it already has something useful:
        </p>

        <p className="mb-4">
          its current guess about the value of the next state.
        </p>

        <p className="mb-6">
          That leads to the simplest TD algorithm, called <em>TD(0)</em>{" "}
          (I&apos;ll explain what the &quot;0&quot; means later).
        </p>

        <p className="mb-4">
          In TD(0), we update the value of <InlineMath math="S_t" /> toward an{" "}
          <em>estimated return</em>:
        </p>

        <BlockMath math="R_{t+1} + \gamma \hat{v}_\pi(S_{t+1})" />

        <p className="mb-6">
          This quantity is called the <strong>TD target</strong>.
        </p>

        <p className="mb-4">
          <strong>The TD target</strong>
        </p>

        <p className="mb-4">The TD target combines two things:</p>

        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>
            the immediate reward <InlineMath math="R_{t+1}" /> we just observed
          </li>
          <li>
            our current guess of the future,{" "}
            <InlineMath math="\gamma \hat{v}_\pi(S_{t+1})" />
          </li>
        </ul>

        <p className="mb-4">Notice what just happened.</p>

        <p className="mb-4">
          We are using a <em>guess</em> about the future to improve another{" "}
          <em>guess</em>.
        </p>

        <p className="mb-6">
          This is called <em>bootstrapping</em>.
        </p>

        <p className="mb-4">
          <strong>Bootstrapping</strong>
        </p>

        <p className="mb-4">
          Bootstrapping means learning from incomplete information by relying on
          your own current estimates.
        </p>

        <p className="mb-4">
          TD learning does not wait to see the full return.
        </p>

        <p className="mb-4">It says:</p>

        <p className="mb-6">
          <em>
            &quot;I don&apos;t yet know the final answer, but I do know what I
            currently believe about the next step. That&apos;s good enough to
            start learning.&quot;
          </em>
        </p>

        <p className="mb-6">
          This allows TD methods to learn <em>online</em>, during the episode,
          one transition at a time.
        </p>

        <p className="mb-4">
          <strong>The TD error</strong>
        </p>

        <p className="mb-4">
          Once we have a target, the update looks familiar.
        </p>

        <BlockMath math="\hat{v}^{new}_\pi(S_t) \leftarrow \hat{v}^{old}_\pi(S_t) + \alpha\bigl(\text{target} - \hat{v}^{old}_\pi(S_t)\bigr)" />

        <p className="mb-4">Plugging in the TD target gives:</p>

        <BlockMath math="\hat{v}^{new}_\pi(S_t) \leftarrow \hat{v}^{old}_\pi(S_t) + \alpha\bigl(R_{t+1} + \gamma \hat{v}^{old}_\pi(S_{t+1}) - \hat{v}^{old}_\pi(S_t)\bigr)" />

        <p className="mb-4">
          The quantity inside the parentheses is called the{" "}
          <strong>Temporal Difference error</strong>:
        </p>

        <BlockMath math="\delta_t = R_{t+1} + \gamma \hat{v}^{old}_\pi(S_{t+1}) - \hat{v}^{old}_\pi(S_t)" />

        <p className="mb-4">The TD error measures how surprised we were.</p>

        <p className="mb-4">
          If the next reward plus the discounted next value is higher than we
          expected, the error is positive and we increase{" "}
          <InlineMath math="\hat{v}_\pi(S_t)" />.
        </p>

        <p className="mb-6">
          If it&apos;s lower than expected, the error is negative and we
          decrease <InlineMath math="\hat{v}_\pi(S_t)" />.
        </p>

        <p className="mb-4">
          <strong>Monte Carlo vs Temporal Difference</strong>
        </p>

        <p className="mb-4">
          At a high level, both methods are doing the same thing:
        </p>

        <p className="mb-4">
          they update a value estimate in the direction of an error.
        </p>

        <p className="mb-4">
          The difference is <em>what error they use</em>.
        </p>

        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>
            Monte Carlo updates toward the <em>actual return</em>{" "}
            <InlineMath math="G_t" />, after the episode ends
          </li>
          <li>
            TD(0) updates toward an <em>estimated return</em>{" "}
            <InlineMath math="R_{t+1} + \gamma \hat{v}^{old}_\pi(S_{t+1})" />,
            immediately
          </li>
        </ul>

        <p className="mb-4">
          Monte Carlo waits for the future to reveal itself.
        </p>

        <p className="mb-4">
          Temporal Difference learning predicts the future using its current
          beliefs, and corrects those beliefs step by step.
        </p>

        <p className="mb-4">
          That single idea, learning by bootstrapping from successive
          predictions, is what makes TD learning fundamentally different.
        </p>
      </div>

      <div className="mb-4 mt-12">
        <h3 className="mb-8 font-bold text-lg">
          Monte Carlo vs Temporal Difference: Advantages, Disadvantages, and
          Tradeoffs
        </h3>

        <p className="mb-4">
          Monte Carlo and Temporal Difference learning are trying to solve the
          same prediction problem, but they make very different tradeoffs along
          the way.
        </p>

        <p className="mb-6">
          To understand those tradeoffs, it helps to organize the comparison
          around three ideas:
        </p>

        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>when learning happens (online vs offline)</li>
          <li>bias</li>
          <li>variance</li>
        </ul>

        <p className="mb-8">
          These differences explain <em>why</em> TD learning exists at all.
        </p>

        <p className="mb-4">
          <strong>Online vs offline learning</strong>
        </p>

        <p className="mb-4">
          In reinforcement learning, <em>online</em> learning means updating
          value estimates <em>during</em> an episode, as experience arrives, one
          transition at a time.
        </p>

        <p className="mb-6">
          <em>Offline</em> learning means waiting until an entire episode is
          finished before making any updates.
        </p>

        <p className="mb-4">
          Monte Carlo prediction is fundamentally an <em>offline</em> method.
        </p>

        <p className="mb-6">
          It must wait until the episode ends to compute the full return{" "}
          <InlineMath math="G_t" />, because that return depends on all future
          rewards.
        </p>

        <p className="mb-4">
          Temporal Difference learning is an <em>online</em> method.
        </p>

        <p className="mb-8">
          It updates immediately after every transition, using the reward and
          its current estimate of the next state.
        </p>

        <p className="mb-4">
          This single difference already gives TD learning two major advantages:
        </p>

        <ul className="list-disc list-inside mb-8 space-y-1">
          <li>TD can learn before the final outcome is known</li>
          <li>TD can learn in continuing (non-terminating) environments</li>
        </ul>

        <p className="mb-4">Monte Carlo cannot do either of these.</p>

        <p className="mb-8">
          If an episode never ends, Monte Carlo never gets a return.
        </p>

        <p className="mb-4">
          <strong>Bias: why TD is biased and MC is not</strong>
        </p>

        <p className="mb-4">Let&apos;s start with Monte Carlo.</p>

        <p className="mb-6">
          The Monte Carlo return{" "}
          <InlineMath math="G_t = R_{t+1} + \gamma R_{t+2} + \dots" /> is an
          unbiased sample of the true value <InlineMath math="v_\pi(S_t)" />.
        </p>

        <p className="mb-6">
          If you average enough Monte Carlo returns, the estimate converges to
          the correct expected value.
        </p>

        <p className="mb-4">
          That is why Monte Carlo prediction is said to have <em>zero bias</em>.
        </p>

        <p className="mb-6">
          It uses the real outcome of the process, not an approximation.
        </p>

        <p className="mb-4">Temporal Difference learning is different.</p>

        <p className="mb-6">
          TD(0) does <em>not</em> update toward the true return. It updates
          toward an estimate:
        </p>

        <BlockMath math="R_{t+1} + \gamma \hat{v}_\pi(S_{t+1})" />

        <p className="mb-6">
          That estimate depends on the current value function, which is itself
          imperfect.
        </p>

        <p className="mb-6">
          In other words, TD learning uses its own guesses as part of the
          target.
        </p>

        <p className="mb-8">
          That introduces <em>bias</em>.
        </p>

        <p className="mb-4">
          Even if you average many TD updates, the target itself is not an
          unbiased sample of <InlineMath math="v_\pi(S_t)" /> unless the value
          estimates are already correct.
        </p>

        <p className="mb-8">This is the cost of bootstrapping.</p>

        <p className="mb-4">
          <strong>Variance: why TD is lower variance than MC</strong>
        </p>

        <p className="mb-4">
          Although Monte Carlo is unbiased, it suffers from high variance.
        </p>

        <p className="mb-6">
          The return <InlineMath math="G_t" /> depends on <em>many</em> random
          quantities:
        </p>

        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>future actions</li>
          <li>future state transitions</li>
          <li>future rewards</li>
        </ul>

        <p className="mb-6">
          Small changes early in the episode can drastically change the final
          return.
        </p>

        <p className="mb-4">
          Temporal Difference learning dramatically reduces this variance.
        </p>

        <p className="mb-6">
          The TD target depends on only <em>one</em> transition:
        </p>

        <BlockMath math="R_{t+1} + \gamma \hat{v}_\pi(S_{t+1})" />

        <p className="mb-6">
          Everything beyond that is summarized by the value estimate.
        </p>

        <p className="mb-8">
          This makes TD updates much more stable and less noisy than Monte Carlo
          updates.
        </p>

        <p className="mb-4">
          <strong>Putting it all together</strong>
        </p>

        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>
            Monte Carlo has <em>zero bias</em> but <em>high variance</em>
          </li>
          <li>
            Temporal Difference has <em>some bias</em> but{" "}
            <em>lower variance</em>
          </li>
          <li>Monte Carlo learns offline from complete episodes</li>
          <li>TD learns online from incomplete experience</li>
        </ul>

        <p className="mb-6">Neither method is strictly better.</p>

        <p className="mb-4">
          TD learning exists because, in many environments, learning early,
          learning continuously, and learning with lower variance matters more
          than eliminating bias entirely.
        </p>
      </div>

      <div className="mb-4 mt-12">
        <h3 className="mb-8 font-bold text-lg">
          A Concrete Example: Monte Carlo vs Temporal Difference
        </h3>

        <p className="mb-4">
          Let&apos;s make this more concrete with an example.
        </p>

        <p className="mb-6">
          Here&apos;s one example episode with 5 states and 4 state-transition
          rewards:
        </p>

        <BlockMath math="S_1 \xrightarrow{+2} S_2 \xrightarrow{+5} S_3 \xrightarrow{+3} S_4 \xrightarrow{+8} \text{terminal}" />

        <p className="mb-6">
          I&apos;ll use <InlineMath math="\gamma = 0.9" /> and focus on how we
          update <InlineMath math="\hat{v}_\pi(S_1)" />.
        </p>

        <p className="mb-4">
          Let&apos;s assume the agent already has some current guesses (its
          value estimates <em>before</em> seeing this episode):
        </p>

        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>
            <InlineMath math="\hat{v}_\pi(S_1)=4.0" />
          </li>
          <li>
            <InlineMath math="\hat{v}_\pi(S_2)=6.0" />
          </li>
          <li>
            <InlineMath math="\hat{v}_\pi(S_3)=5.0" />
          </li>
          <li>
            <InlineMath math="\hat{v}_\pi(S_4)=7.0" />
          </li>
        </ul>

        <p className="mb-4">
          Let&apos;s also use a learning rate <InlineMath math="\alpha = 0.1" />{" "}
          just to keep the arithmetic concrete.
        </p>

        <p className="mb-4">
          <strong>Monte Carlo Learning</strong>
        </p>

        <p className="mb-4">
          Monte Carlo waits until the episode finishes, then computes the full
          return from <InlineMath math="S_1" />:
        </p>

        <BlockMath math="G_1 = 2 + 0.9\cdot 5 + 0.9^2\cdot 3 + 0.9^3\cdot 8" />
        <BlockMath math="\Rightarrow 2 + 4.5 + 2.43 + 5.832 = 14.762" />

        <p className="mb-6">
          Then it updates toward that <em>actual return</em>:
        </p>

        <BlockMath math="\hat{v}^{new}_\pi(S_1) \leftarrow \hat{v}^{old}_\pi(S_1) + \alpha\bigl(G_1 - \hat{v}^{old}_\pi(S_1)\bigr)" />

        <p className="mb-4">Plug in the actual numbers:</p>

        <BlockMath math="\hat{v}^{new}_\pi(S_1) = 4.0 + 0.1\bigl(14.762 - 4.0\bigr)" />
        <BlockMath math="\Rightarrow 4.0 + 0.1(10.762) = 4.0 + 1.0762 = 5.0762" />

        <p className="mb-6">
          So Monte Carlo moves <InlineMath math="\hat{v}_\pi(S_1)" /> from{" "}
          <InlineMath math="4.0" /> to <InlineMath math="5.0762" />, but only{" "}
          <em>after</em> the episode ends.
        </p>

        <p className="mb-4">
          <strong>Temporal Difference Learning</strong>
        </p>

        <p className="mb-4">
          TD(0) refuses to wait. It updates <em>during</em> the episode.
        </p>

        <p className="mb-6">
          Now walk through the episode one transition at a time.
        </p>

        <p className="mb-4">
          <strong>Step 1:</strong> <InlineMath math="S_1 \rightarrow S_2" />{" "}
          with <InlineMath math="R_2 = 2" />
        </p>

        <p className="mb-4">TD(0) builds an immediate target:</p>

        <BlockMath math="R_2 + \gamma \hat{v}_\pi(S_2)" />

        <p className="mb-6">
          Then it updates <InlineMath math="\hat{v}_\pi(S_1)" /> toward that
          target:
        </p>

        <BlockMath math="\hat{v}^{new}_\pi(S_1) \leftarrow \hat{v}^{old}_\pi(S_1) + \alpha\Bigl(R_2 + \gamma \hat{v}^{old}_\pi(S_2) - \hat{v}^{old}_\pi(S_1)\Bigr)" />
        <BlockMath math="\Rightarrow 4.0 + 0.1\Bigl(2 + 0.9\cdot 6.0 - 4.0\Bigr)" />
        <BlockMath math="\Rightarrow 4.0 + 0.1(3.4) = 4.34" />

        <p className="mb-6">
          TD(0) updates <InlineMath math="\hat{v}_\pi(S_1)" /> from 4 to 4.34{" "}
          <em>immediately</em>, not needing to wait until the episode ends.
        </p>

        <p className="mb-4">
          This self-referential process, using your own estimates to improve
          your own estimates, is called <em>bootstrapping</em>.
        </p>
      </div>

      <div className="mb-4 mt-12">
        <h3 className="mb-8 font-bold text-lg">
          What Do Monte Carlo and TD(0) Actually Converge To?
        </h3>

        <p className="mb-4">
          Monte Carlo and TD(0) are both trying to estimate the same object:{" "}
          <InlineMath math="v_\pi(s)" />.
        </p>

        <p className="mb-4">
          In the tabular case with enough data, they both converge to the true{" "}
          <InlineMath math="v_\pi" />.
        </p>

        <p className="mb-4">
          However, with function approximation (which will be explained in a
          later section), they converge to different approximate solutions .
        </p>

        <p className="mb-6">
          This difference explains why TD learning is often described as being
          more &quot;MDP-consistent&quot; than Monte Carlo.
        </p>

        <p className="mb-4">
          <strong>
            Monte Carlo converges to a minimum mean squared error solution
          </strong>
        </p>

        <p className="mb-4">
          Monte Carlo policy evaluation updates toward the actual observed
          return <InlineMath math="G_t" />:
        </p>

        <BlockMath math="\hat{v}^{new}_\pi(S_t) \leftarrow \hat{v}^{old}_\pi(S_t) + \alpha\bigl(G_t - \hat{v}^{old}_\pi(S_t)\bigr)" />

        <p className="mb-4">
          The key point is that <InlineMath math="G_t" /> is a real sample of
          the true return distribution under <InlineMath math="\pi" />.
        </p>

        <p className="mb-4">
          So Monte Carlo is doing something extremely natural:
        </p>

        <p className="mb-6">
          it is simply trying to find the value estimates that best match the
          observed returns, in a squared-error sense.
        </p>

        <p className="mb-4">
          In other words, Monte Carlo converges to the value function{" "}
          <InlineMath math="\hat{v}" /> that minimizes:
        </p>

        <BlockMath math="\mathbb{E}_\pi\Bigl[(G_t - \hat{v}(S_t))^2\Bigr]" />

        <p className="mb-6">
          So Monte Carlo is directly optimizing prediction accuracy on the data
          it sees.
        </p>

        <p className="mb-4">
          <strong>
            TD(0) converges to the solution of the Bellman equation
          </strong>
        </p>

        <p className="mb-4">
          TD(0) does not update toward the full return. Instead, it updates
          toward the one-step bootstrapped target:
        </p>

        <BlockMath math="R_{t+1} + \gamma \hat{v}_\pi(S_{t+1})" />

        <p className="mb-4">So the TD(0) update is:</p>

        <BlockMath math="\hat{v}^{new}_\pi(S_t) \leftarrow \hat{v}^{old}_\pi(S_t) + \alpha\bigl(R_{t+1} + \gamma \hat{v}_\pi(S_{t+1}) - \hat{v}^{old}_\pi(S_t)\bigr)" />

        <p className="mb-4">
          This update is not trying to match <InlineMath math="G_t" /> directly.
        </p>

        <p className="mb-6">
          Instead, it is trying to force the value estimates to satisfy a
          self-consistency condition:
        </p>

        <BlockMath math="\hat{v}_\pi(s) \approx \mathbb{E}_\pi\bigl[R_{t+1} + \gamma \hat{v}_\pi(S_{t+1}) \mid S_t=s\bigr]" />

        <p className="mb-4">
          But that is exactly the Bellman expectation equation:
        </p>

        <BlockMath math="v_\pi(s) = \mathbb{E}_\pi\bigl[R_{t+1} + \gamma v_\pi(S_{t+1}) \mid S_t=s\bigr]" />

        <p className="mb-6">
          So TD(0) converges to the value function that satisfies the Bellman
          equation, meaning it converges to the solution of the MDP under policy{" "}
          <InlineMath math="\pi" />.
        </p>

        <p className="mb-4">
          <strong>
            Why TD(0) is &quot;MDP-based&quot; but Monte Carlo isn&apos;t
          </strong>
        </p>

        <p className="mb-4">
          The defining feature of an MDP is that it obeys the Markov property:
        </p>

        <p className="mb-6">
          the future depends only on the current state, not the entire history.
        </p>

        <p className="mb-4">
          TD learning takes advantage of that structure directly.
        </p>

        <p className="mb-4">
          It breaks the long-term return into a one-step piece:
        </p>

        <p className="mb-6">
          immediate reward + discounted value of the next state.
        </p>

        <p className="mb-4">
          That decomposition is the Bellman equation, and the Bellman equation
          is essentially the mathematical signature of an MDP.
        </p>

        <p className="mb-4">Monte Carlo does not do this.</p>

        <p className="mb-4">
          Monte Carlo treats the return as a black box target:
        </p>

        <p className="mb-6">
          it waits until the end of the episode, observes the total return, and
          then averages.
        </p>

        <p className="mb-4">
          So Monte Carlo converges to the best prediction of observed returns,
        </p>

        <p className="mb-6">
          but it does not explicitly enforce Bellman consistency at every step.
        </p>

        <p className="mb-4">
          <strong>In short</strong>
        </p>

        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>
            Monte Carlo converges by directly fitting <InlineMath math="G_t" />{" "}
            (minimizing prediction error). Monte Carlo is learning by averaging
            outcomes.
          </li>
          <li>
            TD(0) converges by enforcing Bellman consistency (solving the MDP).
            TD(0) is learning by solving a recursive equation about the
            environment.
          </li>
        </ul>

        <p className="mb-4">
          <strong>Why This Difference Matters in Practice</strong>
        </p>

        <p className="mb-4">Consider a simple chain:</p>

        <p className="mb-4">
          <InlineMath math="A \rightarrow B \rightarrow C \rightarrow \text{Goal (reward 100)}" />
        </p>

        <p className="mb-4">
          Suppose you&apos;ve visited{" "}
          <InlineMath math="C \rightarrow \text{Goal}" /> 1000 times, so{" "}
          <InlineMath math="\hat{v}_\pi(C) \approx 100" /> is well-estimated.
        </p>

        <p className="mb-4">
          But you&apos;ve only visited <InlineMath math="B \rightarrow C" />{" "}
          once.
        </p>

        <p className="mb-4">
          <strong>Monte Carlo approach:</strong>
        </p>

        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>
            <InlineMath math="\hat{v}_\pi(B)" /> = average of the one return you
            observed from <InlineMath math="B" />
          </li>
          <li>That single sample might be noisy</li>
          <li>
            Needs many more visits to <InlineMath math="B" /> to get an accurate
            estimate
          </li>
        </ul>

        <p className="mb-4">
          <strong>TD approach:</strong>
        </p>

        <ul className="list-disc list-inside mb-6 space-y-1 ml-4">
          <li>
            <InlineMath math="\hat{v}_\pi(B) \approx R + \gamma \hat{v}_\pi(C) \approx 0 + 0.9 \times 100 = 90" />
          </li>
          <li>
            <strong>Borrows</strong> the well-estimated{" "}
            <InlineMath math="\hat{v}_\pi(C)" /> to immediately get a good
            estimate for <InlineMath math="\hat{v}_\pi(B)" />
          </li>
          <li>
            Uses the Bellman constraint to propagate value information backwards
          </li>
        </ul>

        <p className="mb-4">
          This is the power of bootstrapping: TD doesn&apos;t just learn from
          data, it <em>exploits the recursive structure</em> encoded in the
          Bellman equation.
        </p>

        <p className="mb-6">
          If that structure is real, meaning the environment actually is Markov,
          you get faster learning by using it because TD exploits the Markov
          property. If the environment isn&apos;t Markov, the the Monte Carlo
          method is usually better because it doesn&apos;t exploit the Markov
          property.
        </p>

        <p className="mb-4">
          <strong>The Tradeoff</strong>
        </p>

        <p className="mb-4">
          <strong>When TD wins:</strong> World is actually Markov, Bellman
          equation is valid
        </p>

        <ul className="list-disc list-inside mb-6 space-y-1 ml-4">
          <li>TD uses correct structure → faster convergence</li>
        </ul>

        <p className="mb-4">
          <strong>When MC might win:</strong> World is not Markov, or function
          approximation breaks the Bellman structure
        </p>

        <ul className="list-disc list-inside mb-6 space-y-1 ml-4">
          <li>TD makes wrong assumptions → can diverge or be biased</li>
          <li>
            MC just averages data → always converges to something meaningful
            (the empirical mean)
          </li>
        </ul>

        <p className="mb-4">
          In practice, most RL problems are approximately Markov, so TD&apos;s
          speed advantage typically outweighs the risk of bias.
        </p>

        <p className="mb-4">
          That&apos;s why temporal difference learning has become the foundation
          of modern reinforcement learning.
        </p>
      </div>

      <h2 id="mfp-lambda" className="text-2xl font-bold mb-6 text-center">
        TD(
        <InlineMath math="\lambda" />)
      </h2>

      <div className="mb-4 mt-12">
        <h3 className="mb-8 font-bold text-lg">
          n-Step TD: A Spectrum Between TD(0) and Monte Carlo
        </h3>

        <p className="mb-4">
          So far, we&apos;ve seen two extremes for learning value functions:
        </p>

        <ul className="list-disc list-inside mb-6 space-y-1 ml-4">
          <li>
            <strong>TD(0)</strong> bootstraps after a single step, using{" "}
            <InlineMath math="R_{t+1} + \gamma \hat{v}_\pi(S_{t+1})" /> as its
            target
          </li>
          <li>
            <strong>Monte Carlo</strong> waits until the episode ends, using the
            full return <InlineMath math="G_t" /> as its target
          </li>
        </ul>

        <p className="mb-4">But here&apos;s a natural question:</p>

        <p className="mb-6">
          <em>Why do we have to pick one or the other?</em>
        </p>

        <p className="mb-4">
          What if we wanted to look <InlineMath math="n" /> steps into the
          future before bootstrapping?
        </p>

        <p className="mb-4">
          Not just one step like TD(0) (which has low variance but high bias),
          and not all the way to the end like Monte Carlo (which has low bias
          but high variance), but something in between in order to get a better
          balance between variance and bias?
        </p>

        <p className="mb-6">
          This is the idea behind <strong>n-step TD learning</strong>.
        </p>

        <p className="mb-4">
          <strong>The n-step return</strong>
        </p>

        <p className="mb-4">
          Instead of bootstrapping immediately after one step, we can define an
          n-step return that looks <InlineMath math="n" /> steps into the
          future:
        </p>

        <BlockMath math="G_t^{(n)} = R_{t+1} + \gamma R_{t+2} + \gamma^2 R_{t+3} + \dots + \gamma^{n-1}R_{t+n} + \gamma^n \hat{v}_\pi(S_{t+n})" />

        <p className="mb-4">This formula says:</p>

        <p className="mb-6">
          &quot;Take <InlineMath math="n" /> real steps, collecting actual
          rewards along the way, and <em>then</em> bootstrap using your value
          estimate <InlineMath math="\hat{v}_\pi(S_{t+n})" /> at step{" "}
          <InlineMath math="n" />
          .&quot;
        </p>

        <p className="mb-4">
          <strong>Special cases</strong>
        </p>

        <p className="mb-4">
          When <InlineMath math="n = 1" />, we get TD(0):
        </p>

        <BlockMath math="G_t^{(1)} = R_{t+1} + \gamma \hat{v}_\pi(S_{t+1})" />

        <p className="mb-4">
          When <InlineMath math="n = 2" />, we look two steps ahead:
        </p>

        <BlockMath math="G_t^{(2)} = R_{t+1} + \gamma R_{t+2} + \gamma^2 \hat{v}_\pi(S_{t+2})" />

        <p className="mb-4">
          When <InlineMath math="n = \infty" /> (or really, when{" "}
          <InlineMath math="n" /> equals the number of steps until the episode
          ends), we get Monte Carlo:
        </p>

        <BlockMath math="G_t^{(\infty)} = R_{t+1} + \gamma R_{t+2} + \gamma^3 R_{t+3} + \dots + \gamma^{T-1}R_T" />

        <p className="mb-6">
          There&apos;s no bootstrapping here because we never use a value
          estimate, we just sum up all the actual rewards until termination.
        </p>

        <p className="mb-4">
          <strong>The n-step TD update</strong>
        </p>

        <p className="mb-4">
          Once we have the n-step return, the update rule looks exactly like
          what we&apos;ve seen before:
        </p>

        <BlockMath math="\hat{v}^{new}_\pi(S_t) \leftarrow \hat{v}^{old}_\pi(S_t) + \alpha\bigl(G_t^{(n)} - \hat{v}^{old}_\pi(S_t)\bigr)" />

        <p className="mb-6">
          The only difference is we&apos;re using{" "}
          <InlineMath math="G_t^{(n)}" /> instead of{" "}
          <InlineMath math="G_t^{(1)}" /> or <InlineMath math="G_t" />.
        </p>

        <p className="mb-4">
          <strong>The spectrum of TD methods</strong>
        </p>

        <p className="mb-4">
          So TD(0) and Monte Carlo aren&apos;t really separate algorithms.
        </p>

        <p className="mb-4">
          They&apos;re just the two endpoints of a continuous spectrum, where{" "}
          <InlineMath math="n" /> controls how far we look before bootstrapping:
        </p>

        <ul className="list-disc list-inside mb-6 space-y-1 ml-4">
          <li>
            Small <InlineMath math="n" />: More bootstrapping, less real data
          </li>
          <li>
            Large <InlineMath math="n" />: Less bootstrapping, more real data
          </li>
          <li>
            <InlineMath math="n = 1" />: Pure TD(0)
          </li>
          <li>
            <InlineMath math="n = \infty" />: Pure Monte Carlo
          </li>
        </ul>

        <p className="mb-4">
          <strong>The tradeoff</strong>
        </p>

        <p className="mb-4">
          Increasing <InlineMath math="n" /> has the same effect as moving from
          TD(0) toward Monte Carlo:
        </p>

        <ul className="list-disc list-inside mb-6 space-y-1 ml-4">
          <li>
            <strong>Higher variance</strong>: More steps means more randomness
            accumulates in the target
          </li>
          <li>
            <strong>Lower bias</strong>: More real rewards means less reliance
            on potentially wrong value estimates
          </li>
        </ul>

        <p className="mb-4">
          So the question becomes: what&apos;s the right value of{" "}
          <InlineMath math="n" />?
        </p>

        <p className="mb-4">
          Too small and you&apos;re bootstrapping from estimates that might be
          wildly wrong.
        </p>

        <p className="mb-4">
          Too large and you&apos;re accumulating variance from many random
          steps.
        </p>

        <p className="mb-4">
          The answer depends on the problem, and it&apos;s not always obvious
          what the best <InlineMath math="n" /> should be.
        </p>

        <p className="mb-4">
          Which leads to an even better question:{" "}
          <em>what if we didn&apos;t have to choose just one value of n?</em>
        </p>
      </div>
    </section>
  );
}
