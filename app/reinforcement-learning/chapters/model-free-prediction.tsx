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

      <div className="mb-4 mt-24">
        <strong>Incremental Monte Carlo Updates</strong>
        <br />
        <br />
        Now we take the incremental mean idea and apply it to Monte Carlo policy
        evaluation.
        <br />
        <br />
        The setup is the same as before:
        <br />
        <br />
        • we run an episode under policy <InlineMath math="\pi" />
        <br />
        • we compute the return <InlineMath math="G_t" /> for the states we
        visited
        <br />• and we want to update our estimate of the value function{" "}
        <InlineMath math="\hat{v}_\pi(s)" />
        <br />
        <br />
        The key insight is that <InlineMath math="\hat{v}_\pi(s)" /> is just a
        mean.
        <br />
        <br />
        It&apos;s the mean of all the returns we&apos;ve ever observed after
        visiting state <InlineMath math="s" />.
        <br />
        <br />
        So instead of storing every return forever and recomputing an average
        from scratch, we update that mean incrementally:
        <br />
        <br />
        <BlockMath math="\hat{v}^{new}_\pi(S_t) \leftarrow \hat{v}_\pi(S_t) + \frac{1}{N(S_t)}\bigl(G_t - \hat{v}_\pi(S_t)\bigr)" />
        <br />
        <br />
        Here <InlineMath math="N(S_t)" /> is just a counter that keeps track of
        how many times we have visited state <InlineMath math="S_t" /> so far.
        <br />
        <br />
        Each time we see the state again, we increment the counter:
        <br />
        <br />
        <BlockMath math="N(S_t) \leftarrow N(S_t) + 1" />
        <br />
        <br />
        And then we apply the update.
        <br />
        <br />
        Notice the structure:
        <br />
        <br />
        <InlineMath math="(G_t - \hat{v}_\pi(S_t))" /> is the error, where{" "}
        <InlineMath math="G_t" /> is the return we just observed for a state on
        our latest episode, and <InlineMath math="\hat{v}_\pi(S_t)" /> is the
        average value of all our previous returns for that state (our current
        estimate).
        <br />
        <br />
        This error term tells us how far off our current estimate was from the
        new sampled return.
        <br />
        <br />
        The factor <InlineMath math="\frac{1}{N(S_t)}" /> is the step size.
        <br />
        <br />
        Early on, when we have only visited the state a few times, the step size
        is large, so each new return can move{" "}
        <InlineMath math="\hat{v}_\pi(S_t)" /> a lot.
        <br />
        <br />
        Later, after many visits, the step size becomes tiny, so the estimate
        stabilizes.
        <br />
        <br />
        <strong>
          Why we replace
        </strong> <InlineMath math="\frac{1}{N(S_t)}" /> <strong>with</strong>{" "}
        <InlineMath math="\alpha" />
        <br />
        <br />
        Using <InlineMath math="\frac{1}{N(S_t)}" /> makes{" "}
        <InlineMath math="\hat{v}_\pi(s)" /> a true sample average, but
        sometimes we don&apos;t actually want an equal-weight average over the
        entire history because in many real problems, the world can change over
        time.
        <br />
        <br />
        If the environment is non-stationary, old experience can become less
        relevant than recent experience. In that case, a constantly shrinking
        step size is a problem, because it makes the value estimates hard to
        move later on.
        <br />
        <br />
        Thus, we replace the visit-count step size,{" "}
        <InlineMath math="\frac{1}{N(S_t)}" />
        , with a constant learning rate <InlineMath math="\alpha" />:
        <br />
        <br />
        <BlockMath math="\hat{v}^{new}_\pi(S_t) \leftarrow \hat{v}_\pi(S_t) + \alpha\bigl(G_t - \hat{v}_\pi(S_t)\bigr)" />
        <br />
        <br />
        <br />
        <br />
        Why does a constant learning rate <InlineMath math="\alpha" /> give more
        weight to recent experience?
        <br />
        <br />
        To see this clearly, rewrite the update rule slightly:
        <br />
        <br />
        <BlockMath math="\hat{v}_\pi(S_t) \leftarrow (1-\alpha)\hat{v}_\pi(S_t) + \alpha G_t" />
        <br />
        <br />
        This form makes the behavior explicit.
        <br />
        <br />
        Each update keeps a fraction <InlineMath math="1-\alpha" /> of the old
        estimate and mixes in a fraction <InlineMath math="\alpha" /> of the new
        return.
        <br />
        <br />
        Now suppose we observe a sequence of returns{" "}
        <InlineMath math="G_1, G_2, G_3, \dots" /> for the same state.
        <br />
        <br />
        Let&apos;s see how those returns contribute to the value estimate over
        time.
        <br />
        <br />
        After the first update:
        <br />
        <br />
        <BlockMath math="\hat{v}_1 = \alpha G_1" />
        <br />
        <br />
        After the second update:
        <br />
        <br />
        <BlockMath math="\hat{v}_2 = (1-\alpha)\alpha G_1 + \alpha G_2" />
        <br />
        <br />
        After the third update:
        <br />
        <br />
        <BlockMath math="\hat{v}_3 = (1-\alpha)^2 \alpha G_1 + (1-\alpha)\alpha G_2 + \alpha G_3" />
        <br />
        <br />
        A clear pattern appears.
        <br />
        <br />
        The most recent return always receives weight{" "}
        <InlineMath math="\alpha" />.
        <br />
        <br />
        Each earlier return is multiplied by an additional factor of{" "}
        <InlineMath math="1-\alpha" /> for every update that has happened since
        it was observed.
        <br />
        <br />
        This means older experience is not discarded, but it is progressively
        discounted.
        <br />
        <br />
        <strong>Concrete example</strong>
        <br />
        <br />
        Suppose <InlineMath math="\alpha = 0.1" /> and we observe returns:
        <br />
        <br />
        <InlineMath math="G_1, G_2, G_3, G_4" />
        <br />
        <br />
        Their effective weights in the value estimate become:
        <br />
        <br />
        • <InlineMath math="G_4" /> has weight <InlineMath math="0.10" />
        <br />
        • <InlineMath math="G_3" /> has weight <InlineMath math="0.09" />
        <br />
        • <InlineMath math="G_2" /> has weight <InlineMath math="0.081" />
        <br />
        • <InlineMath math="G_1" /> has weight <InlineMath math="0.0729" />
        <br />
        <br />
        Each step back in time multiplies the influence by{" "}
        <InlineMath math="1-\alpha = 0.9" />.
        <br />
        <br />
        So recent returns matter more, not because they are treated specially,
        but because older returns are repeatedly discounted.
        <br />
        <br />
        This is why a constant learning rate produces an{" "}
        <em>exponentially weighted running average</em>.
        <br />
        <br />
        It allows the value estimate to keep adapting, instead of freezing as
        more data is collected.
      </div>
    </section>
  );
}
