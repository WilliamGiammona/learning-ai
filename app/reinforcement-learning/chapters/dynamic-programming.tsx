import Link from "next/link";
import Image from "next/image";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

export default function DynamicProgramming() {
  return (
    <section id="ch-three-dynamic-programming" className="mb-12">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Dynamic Programming
      </h1>
      <h2 id="dp-intro" className="text-2xl font-bold mb-6 text-center">
        Introduction
      </h2>
      <p className="mb-4">
        In the last section, we did something important, but also a little
        unsatisfying.
        <br />
        <br />
        We carefully formalized the reinforcement learning problem using a
        Markov Decision Process. We defined states, rewards, transition
        probabilities, and a discount factor, which are all the ingredients that
        specify the environment itself, as well as the actions an agent can take
        to influence its environment.
        <br />
        <br />
        On top of that, we introduced policies, value functions, and Bellman
        equations, the mathematical tools that let us describe how an agent
        behaves inside that environment and what it means for that behavior to
        be bad, good or optimal.
        <br />
        <br />
        In other words, we built a beautiful mathematical description of both
        the world the agent lives in and the decision-making problem the agent
        is trying to solve inside that world.
        <br />
        <br />
        But there was one small problem.
        <br />
        <br />
        We never actually explained how to <em>solve</em> any of these problems.
        <br />
        <br />
        So far, everything has been descriptive. We know what an optimal policy
        is. We know what v<sub>*</sub> and q<sub>*</sub> are supposed to
        represent. We even wrote down equations that characterize them. But none
        of that tells us how to build an agent that can actually compute those
        quantities and act optimally in a real environment.
        <br />
        <br />
        That&apos;s what this section is about.
        <br />
        <br />
        In this chapter (and the ones that follow it), we&apos;re going to shift
        from <em>definitions</em> to <em>solution-methods</em>, i.e. we will go
        from &quot;what does the optimal solution look like?&quot; to &quot;how
        do we actually find it?&quot;
        <br />
        <br />
        The collection of techniques we'll start with is called{" "}
        <strong>dynamic programming</strong>. These are algorithms that solve
        MDPs by breaking up the problem into easier-to-solve subproblems,
        caching those results in value functions, and then repeatedly applying
        the Bellman equations until the value functions converge to their
        optimal values and we can then find the optimal policy.
        <br />
        <br />
        Before we talk about specific algorithms, it helps to make one more
        important distinction. In reinforcement learning (and in planning more
        generally), there are really two different kinds of problems you might
        want to solve:
        <br />
        <br />
        <strong>1) Prediction</strong>
        <br />
        <strong>2) Control</strong>
        <br />
        <br />
        They sound similar, but they are asking fundamentally different
        questions.
        <br />
        <br />
        <strong>Prediction</strong> means: given a fixed policy π, how good is
        it? More precisely: if an agent follows a particular policy π in an MDP,
        what long-term reward should it expect from each state?
        <br />
        <br />
        In input–output terms, the prediction problem looks like this:
        <br />
        <br />
        <span className="block font-mono text-center mb-4">
          Input: ⟨S, A, P, R, γ⟩ and a policy π
        </span>
        <span className="block font-mono text-center mb-4">
          Output: the value function (v<sub>π</sub>(s)) or (q<sub>π</sub>
          (s, a)) depending on if you want the state-value or action-value
          function.
        </span>
        In other words: you hand me a fully specified MDP and a policy, and I
        tell you the value function for that policy. This is exactly the problem
        solved by <em>policy evaluation</em>.
        <br />
        <br />
        <strong>Control</strong> means: what is the best possible policy?
        <br />
        <br />
        Here we are no longer satisfied with evaluating a policy someone gives
        us. We want to <em>find</em> the optimal one.
        <br />
        <br />
        In input–output terms, the control problem looks like this:
        <br />
        <br />
        <span className="block font-mono text-center mb-4">
          Input: ⟨S, A, P, R, γ⟩
        </span>
        <span className="block font-mono text-center mb-4">
          Output: the optimal value function (v<sub>*</sub>(s) or q<sub>*</sub>
          (s, a)) and the optimal policy π<sub>*</sub>(s)
        </span>
        In other words: you hand me a fully specified MDP, and I give you back
        both the optimal value function and the optimal policy.
        <br />
        <br />
        So prediction takes an MDP and a policy as input and outputs a value
        function while control takes just an MDP as input and outputs both a
        value function and a policy.
        <br />
        <br />
        Dynamic programming gives us solution methods for <em>both</em> of these
        problems as long as we are in the planning setting where the full MDP
        ⟨S, A, P, R, γ⟩ is known.
        <br />
        <br />
        That last part is crucial.
        <br />
        <br />
        Everything we do in this section assumes that the transition dynamics P
        and the reward function R are known. That&apos;s why dynamic programming
        is technically a planning method, not a full reinforcement-learning
        method. In a true reinforcement-learning problem, you don&apos;t get
        handed the MDP tuple ⟨S, A, P, R, γ⟩, you have to <em>learn</em> P and R
        by interacting with the environment.
        <br />
        <br />
        But even though that assumption is unrealistic in many real problems,
        dynamic programming is still the perfect place to start.
        <br />
        <br />
        Why?
        <br />
        <br />
        Because almost every reinforcement-learning algorithm you&apos;ll ever
        see is just a noisy, data-driven, approximate version of the dynamic
        programming ideas we&apos;re about to develop.
        <br />
        <br />
        So we&apos;ll start in the clean, idealized world where the MDP is fully
        known, and later on, we&apos;ll relax that assumption and see how the
        same ideas survive in the real reinforcement-learning setting.
        <br />
        <br />
        This section is organized into seven parts:
        <br />
        <br />
        <strong>1) Introduction</strong>
        <br />
        A high-level overview of what dynamic programming is, why it exists, and
        how it fits into the bigger reinforcement-learning picture. (You are
        here.)
        <br />
        <br />
        <strong>2) History of Dynamic Programming</strong>
        <br />
        A short detour into where all of this came from, who Richard Bellman
        was, what problem he was trying to solve, why he invented dynamic
        programming, and why he gave it such a strangely generic name.
        <br />
        <br />
        <strong>3) Policy Evaluation</strong>
        <br />
        Given a fixed policy π, how do we compute its value function v
        <sub>π</sub>? This is the simplest dynamic-programming problem and the
        foundation that everything else is built on.
        <br />
        <br />
        <strong>4) Policy Iteration</strong>
        <br />
        How to alternate between evaluating a policy and improving it, until we
        find the optimal policy for an MDP.
        <br />
        <br />
        <strong>5) Value Iteration</strong>
        <br />
        How to skip explicit policies altogether and iteratively apply the
        Bellman optimality update only on the value function until the value
        function converges to the optimal value function.
        <br />
        <br />
        <strong>6) Extensions to Dynamic Programming</strong>
        <br />
        Practical tweaks and variations that make these methods more efficient
        or more flexible in real problems.
        <br />
        <br />
        <strong>7) Contraction Mapping</strong>
        <br />
        The mathematical reason all of this actually works. This is where we
        prove that the Bellman updates converge and that the fixed points they
        converge to are unique.
        <br />
        <br />
        By the end of this section, you&apos;ll have a complete, end-to-end
        story for how to go from an abstract MDP to an actual algorithm that
        computes optimal behavior, and you&apos;ll see how all of the major
        reinforcement-learning methods are really just different ways of
        iterating Bellman&apos;s equations.
      </p>

      <h2 id="dp-history" className="text-2xl font-bold mb-6 text-center">
        History of Dynamic Programming
      </h2>
      <figure className="text-center my-14">
        <Image
          src="/images/reinforcement-learning/dynamic-programming/dynamic-programming-richard-bellman.png"
          alt="Picture of Richard Bellman"
          width={500}
          height={300}
          className="mx-auto"
        />
        <figcaption className="text-lg mt-2">Richard Bellman</figcaption>
      </figure>

      <p className="mb-4">
        Before we turn dynamic programming into algorithms and code, it&apos;s
        worth taking a short detour into where all of this actually came from.
        We will be using this article as our source:{" "}
        <Link
          href="https://www.cs.uni.edu/~wallingf/teaching/cs3530/sessions/session27/bellman-dynamic-programming.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Bellman Dynamic Programming PDF
        </Link>{" "}
        <br />
        <br />
        Dynamic programming was invented by a mathematician named
        <strong> Richard Bellman</strong> in the late 1940s and early 1950s,
        while he was working as a consultant at the RAND Corporation on problems
        funded by the U.S. Air Force. His work centered around{" "}
        <em>multistage decision problems</em>: problems where a system evolves
        over time, you make a sequence of decisions, and each decision affects
        what options you have later, exactly the kind of structure that Markov
        Decision Processes are designed to capture.
        <br />
        <br />
        The name is a bit mysterious, so let&apos;s demystify it by looking at
        why it was chosen at all. At the time, the Secretary of Defense was
        Charles Wilson, which meant he ultimately controlled the funding for the
        U.S. Air Force, which in turn funded the RAND Corporation, which was
        Bellman&apos;s employer.
        <br />
        <br />
        Wilson hated the words &quot;mathematical&quot; and
        &quot;research&quot;, so Bellman needed a name that wouldn&apos;t
        immediately get his funding pulled. He chose <em>dynamic</em> because it
        was a way to describe something that changes over time and has multiple
        stages, but that also had a positive connotation. He chose{" "}
        <em>programming</em> because it sounded much more practical than
        &quot;research&quot; and made it sound like he was actually solving real
        problems.
        <br />
        <br />
        So <em>dynamic programming</em> is really just a fancy way of saying: a
        method for solving multistage decision problems.
        <br />
        <br />
        Examples of the kinds of things he worked on included how to best
        allocate resources over time, controlling engineering systems, planning
        production schedules, and deciding how to operate complex systems
        optimally over many steps into the future.
        <br />
        <br />
        What frustrated Bellman was that the standard mathematical tools of the
        time were great at proving that optimal solutions <em>exist</em>, but
        terrible at actually <em>computing</em> them.
        <br />
        <br />
        Bellman&apos;s core insight was that many problems have what&apos;s
        called "optimal substructure", which means that something Bellman later
        called the
        <strong> Principle of Optimality</strong> applies to them. From this, a
        second important idea, emphasized later in computer science, is what we
        now call <strong>overlapping subproblems</strong>. These two concepts
        are the key to computing optimal solutions.
        <br />
        <br />
        In informal terms, the Principle of Optimality says:
        <br />
        <br />
        <em>
          If a sequence of decisions is optimal, then no matter where you choose
          to start within that sequence, the remaining decisions must themselves
          form an optimal sequence for the state you start from.
        </em>
        <br />
        <br />
        This sounds obvious in hindsight, but it&apos;s the entire logical
        foundation of dynamic programming.
        <br />
        <br />
        Here&apos;s a simple intuition. Suppose your goal is to run a mile in
        the shortest possible time. If your overall mile-long running plan is
        truly optimal, then the way you run the last half-mile must also be
        optimal for the state you&apos;re in at the halfway point, and the way
        you run the last tenth of a mile, and so on, all the way to the last
        step. If you could suddenly switch to a better running strategy at any
        point, then your original mile-long strategy wasn&apos;t actually
        optimal to begin with.
        <br />
        <br />
        That&apos;s the Principle of Optimality in disguise.
        <br />
        <br />
        The second idea, overlapping subproblems, is about what happens when you
        try to turn this insight into an actual algorithm. When you break a big
        multistage decision problem into smaller subproblems, you don&apos;t
        just get a bunch of completely new problems. You get the <em>
          same
        </em>{" "}
        subproblems over and over again.
        <br />
        <br />
        For example, different long-horizon plans might all require you to solve
        the question: “What is the best way to behave from this particular state
        onward?” If you naively recompute the answer to that question every
        single time it comes up, your algorithm will be hopelessly inefficient.
        <br />
        <br />
        Overlapping subproblems just means that the subproblems you need to
        solve keep repeating. So it&apos;s worth solving each one once and
        reusing the result.
        <br />
        <br />
        Put together, these two ideas explain why dynamic programming works at
        all.
        <br />
        <br />
        The Principle of Optimality tells you that optimal solutions can be
        built out of optimal sub-solutions. Overlapping subproblems tells you
        that those sub-solutions keep reappearing, so you should store and reuse
        them instead of solving the same thing again and again. It&apos;s these
        two ideas that let you break a huge, complicated decision problem into
        smaller subproblems and solve it backwards or forwards one stage at a
        time.
        <br />
        <br />
        If that idea is starting to sound suspiciously like the Bellman
        Optimality Equation, that&apos;s not a coincidence.
        <br />
        <br />
        MDPs have optimal substructure, so the Principle of Optimality applies
        to them, and they also have overlapping subproblems, which means that we
        can use dynamic programming to solve them.
        <br />
        <br />
        The Bellman Optimality Equation is just the mathematical expression of
        the Principle of Optimality being applied to solve MDPs. It tells us how
        to break down the optimal value of any state into two pieces: the
        optimal behavior (and associated reward) for one step, followed by the
        optimal behavior (and associated discounted rewards) after that step.
        <br />
        <br />
        The reason we get overlapping subproblems is that the same
        &quot;what&apos;s the best thing to do from this state onward?&quot;
        question keeps coming up again and again along different possible
        trajectories through the MDP.
        <br />
        <br />
        The thing that lets us exploit this repetition is the value function.
        You can think of the value function as a cache of all the good
        information we have figured out so far about the MDP.
        <br />
        <br />
        Over the 1950s, Bellman and others developed dynamic programming into a
        systematic framework for solving multistage decision problems using
        iterative numerical methods.
        <br />
        <br />
        The philosophy was simple:
        <br />
        <br />
        <em>
          Build an algorithm that breaks a hard problem into smaller,
          easier-to-digest subproblems, solves those, cache them to be reused as
          frequently as possible, and then keep iterating toward the full
          solution.
        </em>
        <br />
        <br />
        That philosophy is exactly what we&apos;re about to lean on in the rest
        of this section. Everything that follows, policy evaluation, policy
        iteration, value iteration, Q-learning, etc, is just a modern
        incarnation of Bellman&apos;s original idea: break a long-horizon
        decision problem into smaller pieces, write down a consistency equation
        between stages, and solve it iteratively.
      </p>

      <h2
        id="dp-policy-evaluation"
        className="text-2xl font-bold mb-6 text-center"
      >
        Policy Evaluation
      </h2>

      <p className="mb-4">
        We&apos;ll start with the easier of the two problems we talked about in
        the introduction, <strong>prediction</strong>.
        <br />
        <br />
        This is not a control problem yet. We are <em>not</em> trying to find
        the best policy. We are not optimizing anything. We are not doing
        anything clever. All that&apos;s happening is someone hands us a fully
        specified MDP ⟨S, A, P, R, γ⟩ and a fixed policy π, and asks a very
        simple question:
        <br />
        <br />
        <em>
          &quot;If I follow this exact policy π forever, what is its value
          function? What long-term reward should I expect from each state?&quot;
        </em>
        <br />
        <br />
        In other words, the input is:
        <br />
        <br />
        <span className="block font-mono text-center mb-4">
          Input: ⟨S, A, P, R, γ⟩ and a fixed policy π
        </span>
        And the output we want is:
        <br />
        <br />
        <span className="block font-mono text-center mb-4">
          Output: the value function v<sub>π</sub>(s)
        </span>
        This problem is called <strong>policy evaluation</strong>.
        <br />
        <br />
        Now here&apos;s the slightly awkward part.
        <br />
        <br />
        We already wrote down an equation that characterizes v<sub>π</sub>
        (s): the Bellman Expectation Equation.
        <br />
        <br />
        But just writing down the equation doesn&apos;t magically give us the
        value function. It tells us what v<sub>π</sub> <em>must satisfy</em>,
        not how to actually compute it. Instead of trying to solve that equation
        in one heroic algebraic move, dynamic programming does something much
        more humble, we make a completely arbitrary guess for what we think the
        value function is, called v<sub>1</sub>
        <br />
        <br />
        For example, we might say:
        <br />
        <br />
        <em>
          &quot;I have no idea how good any state is, so I&apos;m just going to
          pretend that every state has a value of 0.&quot;
        </em>
        <br />
        <br />
        <span className="block font-mono text-center mb-4">
          v<sub>1</sub>(s) = 0 for all s ∈ S
        </span>
        This value function is almost certainly wrong, but that&apos;s okay
        because the point isn't to have the correct value on the first try, but
        just to have <em>a</em> starting point we can iteratively improve until
        we get the true value function for our given policy.
        <br />
        <br />
        Now we take this terrible guess and run it through the Bellman
        Expectation Equation once. That gives us a slightly better guess, which
        we&apos;ll call v<sub>2</sub>.
        <br />
        <br />
        Conceptually, what we are doing is a <strong>one-step lookahead</strong>
        :
        <br />
        <br />
        For each state s:
        <br />
        <br />
        &nbsp;&nbsp;• We look at what action the policy π would take in s
        <br />
        &nbsp;&nbsp;• We look at the immediate reward we would get
        <br />
        &nbsp;&nbsp;• We look at where we might land next
        <br />
        &nbsp;&nbsp;• And we plug in our current guess v<sub>1</sub>
        (s&apos;) for the future value
        <br />
        <br />
        That produces a new value for state s.
        <br />
        <br />
        Doing this for every state gives us a new value function v<sub>2</sub>.
        <br />
        <br />
        Then we do the exact same thing again.
        <br />
        <br />
        We take v<sub>2</sub>, plug it back into the Bellman Expectation
        Equation, and get an even better guess v<sub>3</sub>.
        <br />
        <br />
        And then:
        <br />
        <br />v<sub>1</sub> → v<sub>2</sub> → v<sub>3</sub> → v<sub>4</sub> → …
        <br />
        <br />
        Each step nudges the value function closer to the true v<sub>π</sub>.
        <br />
        <br />
        <em>
          Problem: evaluate a given policy π
          <br />
          Solution: iterative application of the Bellman expectation backup
          <br />v<sub>1</sub> → v<sub>2</sub> → … → v<sub>π</sub>
        </em>
        <br />
        <br />
        In the version we&apos;ll use, the updates are{" "}
        <strong>synchronous</strong>.
        <br />
        <br />
        That just means:
        <br />
        <br />
        At iteration k + 1:
        <br />
        <br />
        &nbsp;&nbsp;• We loop over all states s ∈ S (as opposed to only doing
        fewer than every state each time which would be asynchronous)
        <br />
        &nbsp;&nbsp;• We compute a new value v<sub>k+1</sub>(s) using only
        values from the immediate reward and from v<sub>k</sub>(s&apos;)
        <br />
        &nbsp;&nbsp;• We don&apos;t mix old and new values inside the same
        iteration
        <br />
        <br />
        So each iteration is a clean global &quot;Bellman backup pass&quot; over
        the entire state space.
        <br />
        <br />
        The slightly magical fact, which we&apos;ll justify later, is this:
        <br />
        <br />
        <em>
          If you keep applying this update over and over again, these guesses
          actually converge to the true value function v<sub>π</sub>.
        </em>
        <br />
        <br />
        So policy evaluation is nothing more than:
        <br />
        <br />
        Start with a bad guess. Improve it a tiny bit using one-step lookahead.
        Repeat until it stops changing.
        <br />
        <br />
        That&apos;s it.
        <br />
        <br />
        And once we know how to do this for a fixed policy, we&apos;ll have the
        main building block we need to solve the <em>control</em> problem next.
      </p>

      <p className="mt-16 mb-4">
        All of this still sounds a bit abstract, so let&apos;s make it concrete
        with an example.
        <br />
        <br />
        Imagine an MDP with just three states:
        <br />
        <br />
        <span className="block font-mono text-center mb-4">
          S = {"{A, B, C}"}
        </span>
        State C is a <strong>terminal state</strong>. Once you get there, the
        episode ends and there are no more rewards.
        <br />
        <br />
        Suppose there is only one action available in each state, so the policy
        π is completely trivial. There are no choices to make. The agent just
        blindly follows the only action it has.
        <br />
        <br />
        The environment behaves like this:
        <br />
        <br />
        • From state A, you always go to state B and get a reward of +1
        <br />
        • From state B, you always go to state C and get a reward of +2
        <br />
        • From state C, the episode ends and you get no more reward
        <br />
        <br />
        So every episode looks like this:
        <br />
        <br />
        <span className="block font-mono text-center mb-4">
          A → B → C (terminal)
        </span>
        Let&apos;s also pick a discount factor:
        <br />
        <br />
        <span className="block font-mono text-center mb-4">γ = 0.9</span>
        Now here&apos;s the prediction problem:
        <br />
        <br />
        <em>
          &quot;If I follow this fixed policy forever, what is v<sub>π</sub>(A),
          v<sub>π</sub>(B), and v<sub>π</sub>(C)?&quot;
        </em>
        <br />
        <br />
        We already know what the Bellman Expectation Equation says these values
        must satisfy:
        <br />
        <br />
        <span className="block font-mono text-center mb-4">
          v<sub>π</sub>(A) = 1 + γ v<sub>π</sub>(B)
          <br />v<sub>π</sub>(B) = 2 + γ v<sub>π</sub>(C)
          <br />v<sub>π</sub>(C) = 0
        </span>
        The last line just says that the value of a terminal state is zero
        because there are no future rewards left to collect.
        <br />
        <br />
        But instead of solving these equations directly, we&apos;ll do exactly
        what policy evaluation tells us to do.
        <br />
        <br />
        Step 1: start with a terrible guess.
        <br />
        <br />
        <span className="block font-mono text-center mb-4">
          v<sub>1</sub>(A) = 0
          <br />v<sub>1</sub>(B) = 0
          <br />v<sub>1</sub>(C) = 0
        </span>
        Step 2: do one Bellman backup.
        <br />
        <br />
        In this deterministic toy MDP, the backup is especially simple:
        <br />
        <br />
        <span className="block font-mono text-center mb-4">
          v<sub>k+1</sub>(s) = R + γ v<sub>k</sub>(s&apos;)
        </span>
        where s&apos; is the state you deterministically transition to and R is
        the immediate reward on that transition.
        <br />
        <br />
        From C:
        <br />
        <br />
        <span className="block font-mono text-center mb-4">
          v<sub>2</sub>(C) = 0
        </span>
        From B:
        <br />
        <br />
        <span className="block font-mono text-center mb-4">
          v<sub>2</sub>(B) = 2 + 0.9 · v<sub>1</sub>(C) = 2 + 0.9 · 0 = 2
        </span>
        From A:
        <br />
        <br />
        <span className="block font-mono text-center mb-4">
          v<sub>2</sub>(A) = 1 + 0.9 · v<sub>1</sub>(B) = 1 + 0.9 · 0 = 1
        </span>
        So after one iteration:
        <br />
        <br />
        <span className="block font-mono text-center mb-4">
          v<sub>2</sub>(A) = 1
          <br />v<sub>2</sub>(B) = 2
          <br />v<sub>2</sub>(C) = 0
        </span>
        Step 3: do another Bellman backup.
        <br />
        <br />
        From C:
        <br />
        <br />
        <span className="block font-mono text-center mb-4">
          v<sub>3</sub>(C) = 0
        </span>
        From B:
        <br />
        <br />
        <span className="block font-mono text-center mb-4">
          v<sub>3</sub>(B) = 2 + 0.9 · v<sub>2</sub>(C) = 2
        </span>
        From A:
        <br />
        <br />
        <span className="block font-mono text-center mb-4">
          v<sub>3</sub>(A) = 1 + 0.9 · v<sub>2</sub>(B) = 1 + 0.9 · 2 = 2.8
        </span>
        So now:
        <br />
        <br />
        <span className="block font-mono text-center mb-4">
          v<sub>3</sub>(A) = 2.8
          <br />v<sub>3</sub>(B) = 2
          <br />v<sub>3</sub>(C) = 0
        </span>
        Notice what happened: B converged immediately, and then A
        &quot;inherited&quot; B&apos;s value one iteration later.
        <br />
        <br />
        Step 4: do it one more time.
        <br />
        <br />
        <span className="block font-mono text-center mb-4">
          v<sub>4</sub>(A) = 2.8, v<sub>4</sub>(B) = 2, v<sub>4</sub>(C) = 0
        </span>
        At this point nothing changes anymore.
        <br />
        <br />
        We&apos;ve converged to the true value function:
        <br />
        <br />
        <span className="block font-mono text-center mb-4">
          v<sub>π</sub>(A) = 2.8
          <br />v<sub>π</sub>(B) = 2
          <br />v<sub>π</sub>(C) = 0
        </span>
        That&apos;s policy evaluation: start with nonsense, apply the Bellman
        expectation backup, and keep repeating until the nonsense converges to
        the true value for each state.
      </p>

      <h2
        id="dp-policy-iteration"
        className="text-2xl font-bold mb-6 text-center"
      >
        Policy Iteration
      </h2>

      <figure className="text-center my-14">
        <Image
          src="/images/reinforcement-learning/dynamic-programming/dynamic-programming-policy-iteration.png"
          alt="Visual Of Policy Iteration"
          width={500}
          height={300}
          className="mx-auto"
        />
        <figcaption className="text-lg mt-2">Policy Iteration</figcaption>
      </figure>

      <div className="mb-4">
        In the last section, we learned how to <em>evaluate</em> a fixed policy.
        Given a policy <InlineMath math="\pi" />, we could compute its value
        function <InlineMath math="v_\pi" />, but we weren&apos;t actually
        improving anything yet. We were just measuring how good (or bad) a
        policy already was.
        <br />
        <br />
        Policy iteration is the next step up the evolutionary ladder.
        <br />
        <br />
        Instead of asking:
        <br />
        <br />
        <em>
          &quot;How good is this policy <InlineMath math="\pi" />
          ?&quot;
        </em>
        <br />
        <br />
        we now ask:
        <br />
        <br />
        <em>
          &quot;How can I turn this policy <InlineMath math="\pi" /> into a
          better one?&quot;
        </em>
        <br />
        <br />
        This is now a <strong>control</strong> problem, not just a prediction
        problem. The goal is no longer to compute a value function for a fixed
        policy, but to actually <em>converge to the optimal policy</em>{" "}
        <InlineMath math="\pi^*" />.
        <br />
        <br />
        In input–output terms, policy iteration looks like this:
        <br />
        <br />
        <div className="block font-mono text-center mb-4">
          Input: ⟨S, A, P, R, γ⟩ and a policy <InlineMath math="\pi" />
        </div>
        <div className="block font-mono text-center mb-4">
          Output: a new policy <InlineMath math="\pi'" /> such that{" "}
          <InlineMath math="\pi' \ge \pi" />
        </div>
        Here the symbol <InlineMath math="\pi' \ge \pi" /> just means: the new
        policy is at least as good as the old one in every state (and usually
        strictly better in at least one).
        <br />
        <br />
        The key idea is to break the control problem into two simpler
        subproblems and alternate between them:
        <br />
        <br />
        <strong>1) Policy Evaluation</strong>
        <br />
        <br />
        Given the current policy <InlineMath math="\pi" />, compute its value
        function <InlineMath math="v_\pi" />.
        <br />
        <br />
        This is exactly the prediction problem we just solved in the previous
        section. We apply the Bellman expectation update repeatedly until the
        value function converges:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={
              "v_1 \\;\\to\\; v_2 \\;\\to\\; v_3 \\;\\to\\; \\dots \\;\\to\\; v_\\pi"
            }
          />
        </div>
        This step answers the question:
        <br />
        <br />
        <em>
          &quot;If I follow this policy <InlineMath math="\pi" /> forever, how
          good is each state really?&quot;
        </em>
        <br />
        <br />
        <strong>2) Policy Improvement</strong>
        <br />
        <br />
        Now comes the upgrade.
        <br />
        <br />
        Once we know <InlineMath math="v_\pi" />, we construct a new policy{" "}
        <InlineMath math="\pi'" /> by being <em>greedy</em> with respect to that
        value function.
        <br />
        <br />
        In each state <InlineMath math="s" />, we look at all possible actions{" "}
        <InlineMath math="a" />, and pick the one that maximizes expected
        return:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={
              "\\pi'(s) \\,=\\, \\arg\\max_a \\Big[\\, R(s,a) \\, + \\, \\gamma \\sum_{s'} P(s' \\mid s,a)\\, v_\\pi(s')\\, \\Big]"
            }
          />
        </div>
        In words:
        <br />
        <br />
        For each possible action, we add up:
        <br />
        <br />
        • the immediate reward we would get
        <br />
        • plus the discounted value of where that action is expected to take us
        <br />
        <br />
        and then choose the action with the biggest total.
        <br />
        <br />
        This gives us a brand-new policy <InlineMath math="\pi'" /> that is
        guaranteed to be at least as good as <InlineMath math="\pi" />. This is
        the famous <strong>policy improvement theorem</strong>.
        <br />
        <br />
        Now we just keep looping these two steps:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={
              "\\pi_1 \\;\\to\\; v_{\\pi_1} \\;\\to\\; \\pi_2 \\;\\to\\; v_{\\pi_2} \\;\\to\\; \\pi_3 \\;\\to\\; \\dots"
            }
          />
        </div>
        This is exactly what the policy iteration picture at the start of this
        section is showing.
        <br />
        <br />
        Each <em>evaluation</em> step moves you onto the true value function for
        the current policy.
        <br />
        Each <em>improvement</em> step swaps in a greedier (and therefore
        better) policy.
        <br />
        <br />
        The zig-zag keeps going until both things stop changing:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath math={"\\pi_k = \\pi^*, \\qquad v_{\\pi_k} = v^*"} />
        </div>
        At that point, you&apos;ve reached the optimal policy and the optimal
        value function.
        <br />
        <br />
        So policy iteration is nothing more than:
        <br />
        <br />
        Start with a bad policy, <InlineMath math="\pi" />
        <br />
        Figure out exactly how bad it is: <InlineMath math="v_1 \to v_\pi" />
        <br />
        Make the policy a little better, <InlineMath math="\pi'" />
        <br />
        Repeat until there&apos;s nothing left to fix:{" "}
        <InlineMath math="\pi^*" /> and <InlineMath math="v^*" />
        <br />
        <br />
        And that&apos;s our first real control algorithm.
      </div>

      <div className="mt-16 mb-4">
        All of this still sounds a bit abstract, so let&apos;s make it concrete
        with an example.
        <br />
        <br />
        Consider an MDP with three states:
        <br />
        <br />
        <div className="block font-mono text-center mb-4">
          S = {"{A, B, C}"} , and C is terminal
        </div>
        There are two actions in states A and B:
        <br />
        <br />
        <div className="block font-mono text-center mb-4">
          A = {"{Left, Right}"}
        </div>
        State C is terminal, so once you hit it, the episode ends and{" "}
        <InlineMath math="v(C)=0" />.
        <br />
        <br />
        The dynamics are deterministic, and the rewards look like this:
        <br />
        <br />
        <div className="block font-mono text-center mb-4">
          From A:
          <br />
          Left: A → B with reward 0
          <br />
          Right: A → C with reward 1
          <br />
          <br />
          From B:
          <br />
          Left: B → C with reward 2
          <br />
          Right: B → C with reward 0
        </div>
        Let&apos;s use a discount factor <InlineMath math="\gamma = 0.9" />.
        <br />
        <br />
        Now we start with a terrible initial policy <InlineMath math="\pi_0" />:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={"\\pi_0(A)=\\text{Right}, \\qquad \\pi_0(B)=\\text{Right}"}
          />
        </div>
        In words: from A, go rigth in order to get to C for reward 1. From B, go
        rigth in order to get to C for reward 0.
        <br />
        <br />
        <strong>Step 1: Policy Evaluation</strong>
        <br />
        <br />
        Compute <InlineMath math="v_{\pi_0}" />.
        <br />
        <br />
        Since <InlineMath math="C" /> is terminal:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath math={"v_{\\pi_0}(C)=0"} />
        </div>
        Under <InlineMath math="\pi_0" />, from B we take Right and go to C with
        reward 0:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath math={"v_{\\pi_0}(B)=0 + \\gamma\\,v_{\\pi_0}(C)=0"} />
        </div>
        Under <InlineMath math="\pi_0" />, from A we take Right and go to C with
        reward 1:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath math={"v_{\\pi_0}(A)=1 + \\gamma\\,v_{\\pi_0}(C)=1"} />
        </div>
        So policy evaluation tells us:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={
              "v_{\\pi_0}(A)=1, \\qquad v_{\\pi_0}(B)=0, \\qquad v_{\\pi_0}(C)=0"
            }
          />
        </div>
        <strong>Step 2: Policy Improvement</strong>
        <br />
        <br />
        Now we ask, state by state: given these values, which action looks best?
        <br />
        <br />
        In state B:
        <br />
        <br />
        • Left gives reward 2 then ends: return = <InlineMath math="2" />
        <br />
        • Right gives reward 0 then ends: return = <InlineMath math="0" />
        <br />
        <br />
        So the greedy choice is Left:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath math={"\\pi_1(B)=\\text{Left}"} />
        </div>
        In state A:
        <br />
        <br />• Left sends you to B with reward 0, then you get value{" "}
        <InlineMath math="v_{\\pi_0}(B)=0" />:
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={"Q(A,\\text{Left}) = 0 + \\gamma\\,v_{\\pi_0}(B)=0"}
          />
        </div>
        • Right sends you to C with reward 1:
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={"Q(A,\\text{Right}) = 1 + \\gamma\\,v_{\\pi_0}(C)=1"}
          />
        </div>
        So A stays Right:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath math={"\\pi_1(A)=\\text{Right}"} />
        </div>
        So after one full policy-iteration round, we upgraded the policy to:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={"\\pi_1(A)=\\text{Right}, \\qquad \\pi_1(B)=\\text{Left}"}
          />
        </div>
        Now do the loop one more time.
        <br />
        <br />
        <strong>Evaluate</strong> <InlineMath math="\pi_1" />:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath math={"v_{\\pi_1}(C)=0"} />
        </div>
        From B we now take Left and get reward 2:
        <br />
        <div className="text-center mb-4">
          <BlockMath math={"v_{\\pi_1}(B)=2 + \\gamma\\,0 = 2"} />
        </div>
        From A we still take Right and get reward 1:
        <br />
        <div className="text-center mb-4">
          <BlockMath math={"v_{\\pi_1}(A)=1 + \\gamma\\,0 = 1"} />
        </div>
        Now <strong>improve</strong> again.
        <br />
        <br />
        In state A:
        <br />
        <br />
        • If we choose Left now, we go to B with reward 0, and B is worth 2:
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={
              "Q(A,\\text{Left}) = 0 + \\gamma\\,v_{\\pi_1}(B) = 0.9\\cdot 2 = 1.8"
            }
          />
        </div>
        • If we choose Right, we go to C with reward 1:
        <br />
        <div className="text-center mb-4">
          <BlockMath math={"Q(A,\\text{Right}) = 1 + \\gamma\\,0 = 1"} />
        </div>
        Now Left is better, so A flips:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath math={"\\pi_2(A)=\\text{Left}"} />
        </div>
        B already chooses Left and won&apos;t change.
        <br />
        <br />
        So the final improved policy is:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={"\\pi^*(A)=\\text{Left}, \\qquad \\pi^*(B)=\\text{Left}"}
          />
        </div>
        And now the agent does the sensible thing:
        <br />
        <br />
        <div className="block font-mono text-center mb-4">
          {"A --Left--> B --Left--> C"}
        </div>
        with total return:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={
              "v^*(A)=0 + 0.9\\cdot 2 = 1.8, \\qquad v^*(B)=2, \\qquad v^*(C)=0"
            }
          />
        </div>
        That&apos;s all policy iteration in:
        <br />
        <br />
        <em>
          Evaluate the policy, then change the policy to grab more total reward,
          and repeat until there&apos;s nothing left to improve.
        </em>
      </div>

      <h2
        id="dp-value-iteration"
        className="text-2xl font-bold mb-6 text-center"
      >
        Value Iteration
      </h2>

      <div className="mb-4">
        Up to now, policy iteration has been very… principled.
        <br />
        <br />
        For each policy <InlineMath math="\pi" />, we carefully evaluated it all
        the way to its true value function <InlineMath math="v_\pi" />, and only
        then did we improve the policy.
        <br />
        <br />
        Conceptually, that&apos;s very clean.
        <br />
        Computationally, it can be very wasteful.
        <br />
        <br />
        <em>
          Do we really need to fully converge to <InlineMath math="v_\pi" />{" "}
          every single time before improving the policy?
        </em>
        <br />
        <br />
        After all, the <em>entire point </em>of policy evaluation is just to get
        enough information to make a better policy, And in practice, that
        information often shows up very early.
        <br />
        <br />
        Remember what iterative policy evaluation looks like:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={
              "v_1 \\;\\to\\; v_2 \\;\\to\\; v_3 \\;\\to\\; \\dots \\;\\to\\; v_\\pi"
            }
          />
        </div>
        The first few updates already propagate rewards forward and start
        revealing which actions are better than others.
        <br />
        <br />
        By the time we&apos;ve reached, say, <InlineMath math="v_3" />, or{" "}
        <InlineMath math="v_5" />, the value estimates are often{" "}
        <em>good enough</em>to tell us which actions look promising.
        <br />
        <br />
        So instead of insisting on this:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={
              "\\pi \\;\\to\\; v_1 \\;\\to\\; v_2 \\;\\to\\; v_3 \\;\\to\\; \\dots \\;\\to\\; v_\\pi \\;\\to\\; \\pi'"
            }
          />
        </div>
        we can do something more pragmatic:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={
              "\\pi \\;\\to\\; v_1 \\;\\to\\; v_2 \\;\\to\\;v_k \\;\\to\\; \\pi' \\quad \\text{for some small } k"
            }
          />
        </div>
        This idea is called <strong>modified policy iteration</strong>.
        <br />
        <br />
        The algorithm is exactly the same as policy iteration, except for one
        important change:
        <br />
        <br />
        We <em>do not</em> fully evaluate the policy before improving it.
        <br />
        <br />
        Instead, we:
        <br />
        <br />
        • start policy evaluation
        <br />
        • stop early (after a fixed number of iterations or when changes are
        small)
        <br />
        • treat the resulting value function as &quot;good enough&quot;
        <br />
        • improve the policy with respect to that partially finished value
        function of the old policy
        <br />
        <br />
        Why does this work?
        <br />
        <br />
        Because policy improvement does not require a *perfect* value function,
        it only needs a value function that is accurate enough to rank actions
        correctly. As long as the approximate value function points us toward
        better actions, the resulting policy is guaranteed to be no worse than
        before. In fact, many classic examples show that stopping policy
        evaluation after just a handful of iterations is enough to reach the
        optimal policy.
        <br />
        <br />
        So modified policy iteration trades precision for speed:
        <br />
        <br />
        • less work per policy evaluation
        <br />
        • more frequent policy improvements
        <br />
        • faster convergence to the optimal policy
        <br />
        <br />
        If we push this idea all the way to the extreme (if we stop policy
        evaluation after <InlineMath math="k = 1" /> iteration) then policy
        evaluation and policy improvement collapse into a single update.
        <br />
        <br />
        That limiting case is called <strong>value iteration</strong>.
      </div>

      <div className="mb-4">
        Let&apos;s restate the problem one last time:
        <br />
        <br />
        <em>
          &quot;Given a fully known MDP ⟨S, A, P, R, γ⟩, how do we find the
          optimal policy <InlineMath math="\pi^*" />
          ?&quot;
        </em>
        <br />
        <br />
        Policy iteration answered this by alternating between:
        <br />
        • evaluating a policy
        <br />
        • improving the policy
        <br />
        <br />
        Value iteration takes a more direct route. Instead of maintaining an
        explicit policy at every step, value iteration focuses entirely on the{" "}
        <em>optimal value function</em> <InlineMath math="v^*" />.
        <br />
        <br />
        The idea is simple:
        <br />
        <br />
        If we knew <InlineMath math="v^*" />, then extracting the optimal policy
        would be easy, we&apos;d just act greedily with respect to it.
        <br />
        <br />
        So value iteration asks:
        <br />
        <br />
        <em>
          &quot;Can we compute <InlineMath math="v^*" /> directly, without
          explicitly iterating over policies?&quot;
        </em>
        <br />
        <br />
        The answer is yes.
        <br />
        <br />
        Instead of the Bellman <em>expectation</em> equation used for policy
        evaluation, value iteration repeatedly applies the Bellman{" "}
        <em>optimality</em> equation:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={
              "v_{k+1}(s) \\,=\\, \\max_a \\Big[\\, R(s,a) \\, + \\, \\gamma \\sum_{s'} P(s' \\mid s,a)\\, v_k(s') \\,\\Big]"
            }
          />
        </div>
        This update does two things at once:
        <br />
        <br />
        • it looks one step ahead
        <br />
        • it assumes that from the next state onward, we&apos;ll behave
        optimally
        <br />
        <br />
        In other words, value iteration combines policy evaluation and policy
        improvement into a <em>single</em> operation.
        <br />
        <br />
        Just like before, we start with a completely arbitrary value function:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath math={"v_1(s) = 0 \\quad \\text{for all } s \\in S"} />
        </div>
        But instead of trying to spend time finding progressively better
        policies before arriving at the optimal policy:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={
              "\\pi \\;\\to\\; v_1 \\;\\to\\; v_2 \\;\\to\\; \\dots \\;\\to\\; v_\\pi \\;\\to\\; \\pi' \\;\\to\\; v'_1 \\;\\to\\; v'_2 \\;\\to\\; \\dots \\;\\to\\; v_{\\pi'} \\;\\to\\; \\pi^*"
            }
          />
        </div>
        We instead repeatedly apply the Bellman optimality backup:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={
              "v_1 \\;\\to\\; v_2 \\;\\to\\; v_3 \\;\\to\\; \\dots \\;\\to\\; v^* \\;\\to\\; \\pi^*"
            }
          />
        </div>
        Each update pushes the value function closer to the optimal value
        function. Unlike policy iteration, there is no explicit policy during
        this process. In fact, the intermediate value functions{" "}
        <InlineMath math="v_k" /> may not correspond to <em>any</em> policy at
        all, which is fine because they&apos;re just stepping stones on the way
        to <InlineMath math="v^*" />.
        <br />
        <br />
        Once the value function converges to <InlineMath math="v^*" />, we
        extract the optimal policy in one final greedy step:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={
              "\\pi^*(s) \\,=\\, \\arg\\max_a \\Big[\\, R(s,a) \\, + \\, \\gamma \\sum_{s'} P(s' \\mid s,a)\\, v^*(s') \\,\\Big]"
            }
          />
        </div>
        And that&apos;s it.
        <br />
        <br />
        So value iteration can be summarized as:
        <br />
        <br />• ignore policies for now
        <br />
        • repeatedly apply the Bellman optimality backup
        <br />• let the value function converge to <InlineMath math="v^*" />
        <br />
        • extract <InlineMath math="\pi^*" /> at the very end
        <br />
        <br />
        If policy iteration is a careful back-and-forth conversation between
        values and policies, value iteration is a blunt but effective monologue:
        <br />
        <br />
        <em>
          &quot;Assume optimal behavior everywhere. Update values. Repeat.&quot;
        </em>
      </div>

      <div className="mt-16 mb-4">
        Let&apos;s make this concrete with a tiny example.
        <br />
        <br />
        Imagine an MDP with just three states:
        <br />
        <br />
        <div className="text-center mb-4 font-mono">A &rarr; B &rarr; C</div>
        State <InlineMath math="C" /> is terminal.
        <br />
        <br />
        The dynamics are simple:
        <br />
        <br />
        • From <InlineMath math="A" />, you deterministically go to{" "}
        <InlineMath math="B" /> and receive reward <InlineMath math="1" />
        <br />
        • From <InlineMath math="B" />, you deterministically go to{" "}
        <InlineMath math="C" /> and receive reward <InlineMath math="2" />
        <br />
        • <InlineMath math="C" /> is terminal and gives no future reward
        <br />
        <br />
        We&apos;ll use a discount factor <InlineMath math="\gamma = 1" /> just
        to keep the arithmetic boring (in a good way).
        <br />
        <br />
        Now let&apos;s run value iteration.
        <br />
        <br />
        We start with an arbitrary value function, usually all zeros:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={"v_1(A) = 0, \\quad v_1(B) = 0, \\quad v_1(C) = 0"}
          />
        </div>
        Nothing interesting yet. Everyone is equally worthless.
        <br />
        <br />
        Now apply the Bellman optimality backup.
        <br />
        <br />
        <strong>First update:</strong>
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath math={"v_2(B) = 2 + 1 \\cdot v_1(C) = 2"} />
        </div>
        State <InlineMath math="B" /> suddenly realizes it&apos;s sitting on a
        reward.
        <br />
        <br />
        For <InlineMath math="A" />:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath math={"v_2(A) = 1 + 1 \\cdot v_1(B) = 1"} />
        </div>
        So after one update, we have:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={"v_2(A) = 1, \\quad v_2(B) = 2, \\quad v_2(C) = 0"}
          />
        </div>
        Already, the future is starting to leak backward.
        <br />
        <br />
        <strong>Second update:</strong>
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath math={"v_3(A) = 1 + 1 \\cdot v_2(B) = 3"} />
        </div>
        Now <InlineMath math="A" /> finally understands what{" "}
        <InlineMath math="B" /> knew all along.
        <br />
        <br />
        The value function is now:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={"v_3(A) = 3, \\quad v_3(B) = 2, \\quad v_3(C) = 0"}
          />
        </div>
        Apply the backup again, and nothing changes.
        <br />
        <br />
        We&apos;ve converged.
        <br />
        <br />
        This is the optimal value function <InlineMath math="v^*" />.
        <br />
        <br />
        Now extracting the optimal policy is trivial.
        <br />
        <br />
        From <InlineMath math="A" />, go to <InlineMath math="B" />. From{" "}
        <InlineMath math="B" />, go to <InlineMath math="C" />.
        <br />
        <br />
        In one final greedy step, we recover:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={"\\pi^*(A) = A \\to B, \\quad \\pi^*(B) = B \\to C"}
          />
        </div>
        Value iteration doesn&apos;t ask:
        <br />
        <br />
        <em>&quot;What policy am I following right now?&quot;</em>
        <br />
        <br />
        It asks:
        <br />
        <br />
        <em>
          &quot;If I were behaving optimally from here on out, how good would
          this state be?&quot;
        </em>
        <br />
        <br />
        And it keeps asking that question until convergence. That was a lot of
        information, let&apos;s summarize what we've learned from this section
        so far:
      </div>

      <figure className="text-center my-14">
        <Image
          src="/images/reinforcement-learning/dynamic-programming/dynamic-programming-iterative-methods-summary.png"
          alt="Summary of iterative dynamic programming methods"
          width={700}
          height={400}
          className="mx-auto"
        />
        <figcaption className="text-lg mt-2">
          Summary of Iterative Methods
        </figcaption>
      </figure>

      <div className="mb-4">
        The table above summarizes the entire dynamic programming story.
        <br />
        <br />
        Everything we&apos;ve done can be understood by answering three
        questions:
        <br />
        <br />
        • What problem are we trying to solve?
        <br />
        • Which Bellman equation are we using?
        <br />
        • What algorithm falls out of repeatedly applying that equation?
        <br />
        <br />
        Let&apos;s walk through each row.
        <br />
        <br />
        <strong>Prediction</strong>
        <br />
        <br />
        Here the problem is simple:
        <br />
        <br />
        <em>
          &quot;Given a fixed policy <InlineMath math="\pi" />, how good is
          it?&quot;
        </em>
        <br />
        <br />
        The right tool is the Bellman <em>expectation</em> equation, because the
        policy is fixed and we&apos;re just averaging over what it does.
        Repeatedly applying that equation gives us{" "}
        <strong>iterative policy evaluation</strong>, which converges to the
        value function <InlineMath math="v_\pi" /> for that policy.
        <br />
        <br />
        <strong>Control via Policy Iteration</strong>
        <br />
        <br />
        Now the question changes:
        <br />
        <br />
        <em>&quot;How do we turn a bad policy into a better one?&quot;</em>
        <br />
        <br />
        Policy iteration still uses the Bellman <em>expectation</em> equation,
        but with a twist.
        <br />
        <br />
        We alternate between:
        <br />
        <br />
        • evaluating the current policy using the Bellman expectation equation
        <br />
        •improving the policy by acting greedily with respect to its value
        function
        <br />
        <br />
        This loop of evaluation and improvement steadily climbs toward the
        optimal policy, <InlineMath math="\pi^*" />.
        <br />
        <br />
        <strong>Control via Value Iteration</strong>
        <br />
        <br />
        Value iteration takes a more aggressive stance.
        <br />
        <br />
        Instead of evaluating policies and improving them in turns, it jumps
        straight to the Bellman <em>optimality</em> equation and applies it over
        and over.
        <br />
        <br />
        Each update assumes optimal behavior from the next step onward and
        pushes the value function closer to <InlineMath math="v^*" />.
        There&apos;s no explicit policy during the process, policies are ignored
        until the very end, when we extract <InlineMath math="\pi^*" /> greedily
        from <InlineMath math="v^*" />.
        <br />
        <br />
        So the big picture is this:
        <br />
        <br />
        Prediction problems use the Bellman expectation equation to evaluate
        policies.
        <br />
        Control problems either:
        <br />
        <br />
        • combine expectation updates with greedy improvements (policy
        iteration)
        <br />• apply optimality updates directly to values (value iteration).
      </div>

      <div className="mb-4">
        One last subtle but important point before we move on.
        <br />
        <br />
        Throughout this entire dynamic programming section, we&apos;ve framed
        everything in terms of <em>state-value functions</em>:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath math={"v_\\pi(s) \\quad \\text{and} \\quad v^*(s)"} />
        </div>
        That wasn&apos;t an accident.
        <br />
        <br />
        Classic dynamic programming algorithms are usually presented using state
        values because they are:
        <br />
        <br />
        • conceptually simpler
        <br />
        • cheaper to compute per iteration
        <br />
        • and easier to visualize and reason about
        <br />
        <br />
        When we work with state values, each Bellman backup is answering:
        <br />
        <br />
        <em>
          &quot;If I&apos;m in state <InlineMath math="s" />, what&apos;s the
          best long-term return I can expect from here?&quot;
        </em>
        <br />
        <br />
        That keeps the focus on states, and the policy only shows up implicitly,
        either inside an expectation (for prediction) or inside a max (for
        control).
        <br />
        <br />
        But everything we&apos;ve done so far could also be written in terms of{" "}
        <em>action-value functions</em>.
        <br />
        <br />
        Instead of:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath math={"v_\\pi(s)"} />
        </div>
        we could work with:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath math={"q_\\pi(s,a) \\quad \\text{and} \\quad q^*(s,a)"} />
        </div>
        In that world, Bellman backups answer a slightly more detailed question:
        <br />
        <br />
        <em>
          If I&apos;m in state <InlineMath math="s" /> and take action{" "}
          <InlineMath math="a" />, how good is that choice?
        </em>
        <br />
        <br />
        The tradeoff is computational cost.
        <br />
        <br />
        With <InlineMath math="n" /> states and <InlineMath math="m" /> actions:
        <br />
        <br />
        • state-value updates cost is <InlineMath math="O(mn^2)" /> per
        iteration
        <br />• action-value updates cost <InlineMath math="O(m^2 n^2)" /> per
        iteration
        <br />
        <br />
        You pay extra because you&apos;re now keeping track of values for every
        state–action pair instead of just every state.
        <br />
        <br />
        Later on, when we move into model-free reinforcement learning,
        we&apos;ll often prefer action-value functions, because they let us act
        greedily <em>without</em> ever needing a model of the transition
        dynamics.
      </div>

      <h2 id="dp-extensions" className="text-2xl font-bold mb-6 text-center">
        Extensions to Dynamic Programming
      </h2>

      <div className="mb-4">
        Up to now, all of our dynamic programming algorithms have shared one
        quiet assumption.
        <br />
        <br />
        They update <em>everything</em> at once.
        <br />
        <br />
        More precisely, we&apos;ve been using{" "}
        <strong>synchronous dynamic programming</strong>.
        <br />
        <br />
        In synchronous dynamic programming, each iteration looks like this:
        <br />
        <br />
        <em>
          Pause the world. For <em>every</em> state{" "}
          <InlineMath math="s \in S" />, compute a new value using the old value
          function. Only when all states are updated do we unpause the world and
          move on.
        </em>
        <br />
        <br />
        That&apos;s why value iteration is often written with two copies of the
        value function:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={
              "v_{\\text{new}}(s) \\,=\\, \\max_a \\Big[ R(s,a) + \\gamma \\sum_{s'} P(s' \\mid s,a) \\, v_{\\text{old}}(s') \\Big]"
            }
          />
        </div>
        We compute <InlineMath math="v_{\text{new}}" /> for <em>all</em> states,
        and only then replace <InlineMath math="v_{\text{old}}" />
        .
        <br />
        <br />
        In many problems, updating every state on every iteration is
        unnecessary. Some states barely change, some are far more important than
        others, and sometimes we already have <em>fresh</em> information that we
        could use immediately instead of waiting for the next global sweep.
        <br />
        <br />
        This leads us to <strong>Asynchronous dynamic programming</strong>
        .
        <br />
        <br />
        In asynchronous dynamic programming, we stop insisting that all states
        be updated together. Instead, states are backed up one at a time in any
        order, using the most recently available values As long as every state
        continues to get updated infinitely often, these methods are still
        guaranteed to converge to the correct solution. The difference
        isn&apos;t <em>what</em> update we apply, it&apos;s <em>when</em> and{" "}
        <em>where</em> we apply it.
        <br />
        <br />
        Let&apos;s look at three simple but powerful ways to do this.
        <br />
        <br />
        <strong>1) In-Place Dynamic Programming</strong>
        <br />
        <br />
        The simplest change is to throw away the second copy of the value
        function. Instead of computing a whole new table and swapping it in at
        the end, we update values <em>in place</em>, immediately overwriting old
        ones:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={
              "v(s) \\,\\leftarrow\\, \\max_a \\Big[ R(s,a) + \\gamma \\sum_{s'} P(s' \\mid s,a) \\, v(s') \\Big]"
            }
          />
        </div>
        Now, when we update the next state, it can already benefit from the most
        recent changes.
        <br />
        <br />
        This often propagates information faster, uses less memory, and
        converges in fewer iterations, even though the update itself is
        identical.
        <br />
        <br />
        Let&apos;s see this happen in detail on a slightly richer MDP.
        <br />
        <br />
        Consider the following deterministic environment:
        <br />
        <br />
        <div className="text-center mb-4 font-mono">
          A &rarr; B &rarr; C &rarr; D
        </div>
        State <InlineMath math="D" /> is terminal.
        <br />
        <br />
        Rewards:
        <br />
        <br />
        • <InlineMath math="A \to B" /> gives reward <InlineMath math="0" />
        <br />
        • <InlineMath math="B \to C" /> gives reward <InlineMath math="0" />
        <br />
        • <InlineMath math="C \to D" /> gives reward <InlineMath math="10" />
        <br />
        <br />
        We&apos;ll use <InlineMath math="\gamma = 1" /> to keep things clean.
        <br />
        <br />
        We start with all values initialized to zero:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={
              "v_0(A) = 0, \\quad v_0(B) = 0, \\quad v_0(C) = 0, \\quad v_0(D) = 0"
            }
          />
        </div>
        <strong>Synchronous value iteration</strong>
        <br />
        <br />
        In synchronous updates, every state uses the <em>old</em> value
        function.
        <br />
        <br />
        <em>Iteration 1:</em>
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={String.raw`\begin{aligned}
   v_1(C) &= 10 + v_0(D) = 10 \\
   v_1(B) &= 0 + v_0(C) = 0 \\
   v_1(A) &= 0 + v_0(B) = 0
   \end{aligned}`}
          />
        </div>
        The reward reaches <InlineMath math="C" />, but stops there.
        <br />
        <br />
        <em>Iteration 2:</em>
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={String.raw`\begin{aligned}
   v_2(C) &= 10 \\
   v_2(B) &= 0 + v_1(C) = 10 \\
   v_2(A) &= 0 + v_1(B) = 0
   \end{aligned}`}
          />
        </div>
        Now the reward reaches <InlineMath math="B" />.
        <br />
        <br />
        <em>Iteration 3:</em>
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={String.raw`\begin{aligned}
   v_3(C) &= 10 \\
   v_3(B) &= 10 \\
   v_3(A) &= 0 + v_2(B) = 10
   \end{aligned}`}
          />
        </div>
        It takes <em>three full sweeps</em> for the reward to reach{" "}
        <InlineMath math="A" />.
        <br />
        <br />
        <strong>In-place value iteration</strong>
        <br />
        <br />
        Now we update states one by one, immediately overwriting old values.
        <br />
        <br />
        Suppose we sweep in the order <InlineMath math="C \to B \to A" />.
        <br />
        <br />
        <em>Single sweep:</em>
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={String.raw`\begin{aligned}
   v(C) &\leftarrow 10 + v(D) = 10 \\
   v(B) &\leftarrow 0 + v(C) = 10 \\
   v(A) &\leftarrow 0 + v(B) = 10
   \end{aligned}`}
          />
        </div>
        In one pass, the reward propagates all the way back to{" "}
        <InlineMath math="A" />, because we can use C&apos;s updated value on
        the first sweep to update B, and B&apos;s updated value on the first
        sweep to update A. We don't need to wait until the second and third
        sweep to update C and B.
        <br />
        <br />
        The only difference is <em>when</em> updated values are allowed to
        influence other states.
        <strong>
          <br />
          <br />
          2) Prioritized Sweeping
        </strong>
        <br />
        <br />
        Not all states deserve equal attention.
        <br />
        <br />
        Some states have values that are wildly wrong. Others are already
        basically correct.
        <br />
        <br />
        Prioritized sweeping formalizes this intuition.
        <br />
        <br />
        For each state, we track how badly it violates the Bellman equation, its{" "}
        <em>Bellman error</em>. The idea is way simpler than the formula makes
        it look. For every state <InlineMath math="s" />
        , there are really only two numbers we care about:
        <br />
        <br />•{" "}
        <strong>
          What our current value function claims the value of state s is
        </strong>
        : <InlineMath math="v(s)" />
        <br />•{" "}
        <strong>
          What one Bellman backup says the value of state s should be
        </strong>
        : <InlineMath math="v'(s)" />
        <br />
        <br />
        So the Bellman error is just:
        <br />
        <br />
        <em>
          How far off is our current guess, <InlineMath math="v(s)" />, from our
          updated value estimate after one Bellman backup,{" "}
          <InlineMath math="v'(s)" />.
        </em>
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={
              "\\text{Bellman error at } s \\;=\\; \\big|\\; v'(s) \\; - \\; v(s) \\;\\big|"
            }
          />
        </div>
        We take the absolute value to keep the error positive in order to make
        the math work nicely.
        <br />
        <br />
        Now we can write that &quot;backup target&quot; explicitly. It&apos;s
        just:
        <br />
        <br />
        • try each action <InlineMath math="a" />
        <br />
        • take the immediate reward
        <br />
        • add the discounted expected value of where you&apos;ll land next
        <br />• and pick the best action (that&apos;s the{" "}
        <InlineMath math="\max" />)
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={
              "\\delta(s) \\,=\\, \\left|\\; \\underbrace{\\max_a \\Big[ R(s,a) + \\gamma \\sum_{s'} P(s' \\mid s,a) \\, v(s') \\Big]}_{\\text{what Bellman thinks } v(s) \\text{ should be}} \\, -\\, \\underbrace{v(s)}_{\\text{what we currently think}} \\;\\right|"
            }
          />
        </div>
        The symbol <InlineMath math="\delta" /> (delta) doesn&apos;t mean
        anything fancy here, it&apos;s just the traditional way mathematicians
        say:
        <br />
        <br />
        <em>&quot;This is a difference.&quot;</em>
        <br />
        <br />
        Any time you see a <InlineMath math="\delta" />, you should mentally
        read it as:
        <br />
        <br />
        <em>&quot;How much did this thing change?&quot;</em>
        <br />
        <br />
        So <InlineMath math="\delta(s)" /> is literally just:
        <br />
        <br />
        <em>
          &quot;How far apart are <InlineMath math="v'(s)" /> and{" "}
          <InlineMath math="v(s)" />
          ?&quot;
        </em>
        <br />
        <br />
        If the difference is tiny, the value estimate for state{" "}
        <InlineMath math="s" /> is basically fine.
        <br />
        If the difference is huge, the value estimate is way off and needs
        attention.
        <br />
        So when <InlineMath math="\delta(s)" /> is big, state{" "}
        <InlineMath math="s" /> is basically waving a red flag:
        <br />
        <br />
        <em>
          &quot;Hey! My value estimate is still nonsense. Please update
          me.&quot;
        </em>
        <br />
        <br />
        We then:
        <br />
        <br />
        • update the state with the largest remaining error
        <br />
        • update the errors of states affected by that change
        <br />
        • repeat
        <br />
        <br />
        This focuses computation exactly where it matters most and can
        dramatically reduce the total amount of work. The catch is that it
        requires knowing which states can lead to which other states (the
        reverse dynamics), so it&apos;s a bit more involved.
        <br />
        <br />
        {/* Example: Prioritized Sweeping */}
        <strong>Example: Prioritized Sweeping</strong>
        <br />
        <br />
        Let&apos;s use the same four-state chain, but we&apos;ll deliberately
        make one transition reward huge so prioritized sweeping has something to
        obsess over.
        <br />
        <br />
        <div className="text-center mb-4 font-mono">
          A &rarr; B &rarr; C &rarr; D
        </div>
        <InlineMath math="D" /> is terminal.
        <br />
        <br />
        Rewards:
        <br />
        <br />
        • <InlineMath math="A \to B" /> with reward <InlineMath math="1" />
        <br />
        • <InlineMath math="B \to C" /> with reward <InlineMath math="20" />{" "}
        <strong>(big reward)</strong>
        <br />
        • <InlineMath math="C \to D" /> with reward <InlineMath math="1" />
        <br />
        • <InlineMath math="D" /> terminal
        <br />
        <br />
        Use <InlineMath math="\gamma = 0.9" />.
        <br />
        <br />
        Because there&apos;s only one action, the Bellman optimality backup is:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath math={String.raw`v(s) \leftarrow R(s) + \gamma\, v(s')`} />
        </div>
        And the Bellman error is:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={String.raw`\delta(s)=\left|\big(R(s)+\gamma\,v(s')\big)-v(s)\right|`}
          />
        </div>
        <strong>
          Step 0: start with the usual &quot;everyone is worthless&quot;
          initialization
        </strong>
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath math={String.raw`v(A)=0,\; v(B)=0,\; v(C)=0,\; v(D)=0`} />
        </div>
        Compute initial Bellman errors (one-step lookahead minus our current
        guess):
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={String.raw`\begin{aligned}
   \delta(C) &= \left|(1 + 0.9\,v(D)) - v(C)\right|
   = |(1+0)-0| = 1 \\
   \delta(B) &= \left|(20 + 0.9\,v(C)) - v(B)\right|
   = |(20+0)-0| = 20 \\
   \delta(A) &= \left|(1 + 0.9\,v(B)) - v(A)\right|
   = |(1+0)-0| = 1
   \end{aligned}`}
          />
        </div>
        So the priority queue (largest error first) is:
        <br />
        <br />
        <div className="text-center mb-4 font-mono">
          B (20) &gt; C (1) = A (1)
        </div>
        <strong>Step 1: pop the biggest error and update it</strong>
        <br />
        <br />
        Update <InlineMath math="B" />:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={String.raw`v(B) \leftarrow 20 + 0.9\,v(C) = 20 + 0.9\cdot 0 = 20`}
          />
        </div>
        Now we only update errors for states that can lead into{" "}
        <InlineMath math="B" />. The predecessor of <InlineMath math="B" /> is{" "}
        <InlineMath math="A" /> (because <InlineMath math="A\to B" />
        ).
        <br />
        <br />
        Recompute <InlineMath math="\delta(A)" />:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={String.raw`\delta(A)=\left|(1+0.9\,v(B)) - v(A)\right|
   =\left|(1+0.9\cdot 20)-0\right|
   =\left|1+18\right|=19`}
          />
        </div>
        Queue is now basically:
        <br />
        <br />
        <div className="text-center mb-4 font-mono">A (19) &gt;&gt; C (1)</div>
        <strong>Step 2: pop A and update it</strong>
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={String.raw`v(A) \leftarrow 1 + 0.9\,v(B) = 1 + 0.9\cdot 20 = 19`}
          />
        </div>
        Update errors only for predecessors of <InlineMath math="A" />. There
        aren&apos;t any (A is the start), so nothing else gets bumped.
        <br />
        <br />
        Queue now:
        <br />
        <br />
        <div className="text-center mb-4 font-mono">C (1)</div>
        <strong>Step 3: pop C and update it</strong>
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath math={String.raw`v(C) \leftarrow 1 + 0.9\,v(D) = 1`} />
        </div>
        Now we update predecessors of <InlineMath math="C" />, which is{" "}
        <InlineMath math="B" />. Recompute <InlineMath math="\delta(B)" />{" "}
        (because B depends on C):
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={String.raw`\delta(B)=\left|(20+0.9\,v(C)) - v(B)\right|
   =\left|(20+0.9\cdot 1)-20\right|
   =\left|20.9-20\right|=0.9`}
          />
        </div>
        So B wasn&apos;t perfectly done after all, because once C changed,
        B&apos;s backup target changed too. Queue becomes:
        <br />
        <br />
        <div className="text-center mb-4 font-mono">B (0.9)</div>
        <strong>Step 4: pop B again and update it</strong>
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={String.raw`v(B) \leftarrow 20 + 0.9\,v(C) = 20 + 0.9\cdot 1 = 20.9`}
          />
        </div>
        Update predecessors of <InlineMath math="B" /> (that&apos;s A):
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={String.raw`\delta(A)=\left|(1+0.9\,v(B)) - v(A)\right|
             =\left|(1+0.9\cdot 20.9)-19\right|
            =\left|(1+18.81)-19\right|
            =\left|19.81-19\right|=0.81`}
          />
        </div>
        Queue:
        <br />
        <br />
        <div className="text-center mb-4 font-mono">A (0.81)</div>
        <strong>Step 5: pop A again and update it</strong>
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={String.raw`v(A) \leftarrow 1 + 0.9\,v(B) = 1 + 0.9\cdot 20.9 = 19.81`}
          />
        </div>
        Now we&apos;re at:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={String.raw`v(A)=19.81,\; v(B)=20.9,\; v(C)=1,\; v(D)=0`}
          />
        </div>
        <strong>What prioritized sweeping did (in one sentence)</strong>
        <br />
        <br />
        It didn&apos;t waste time doing full sweeps. It kept chasing the big
        error and then fixing the states upstream that depended on it:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={String.raw`B \;\Rightarrow\; A \quad \text{(then)} \quad C \Rightarrow B \Rightarrow A`}
          />
        </div>
        Because in prioritized sweeping, the moment one value changes, you only
        go poke the states that actually <em>care</em> about that change.
        <br />
        <br />
        <strong>3) Real-Time Dynamic Programming</strong>
        <br />
        <br />
        The most extreme version of asynchrony is to only update states you
        actually visit.
        <br />
        <br />
        In real-time dynamic programming, the agent interacts with the
        environment, and after each transition:
        <br />
        <br />
        <InlineMath math="S_t, A_t, R_{t+1}, S_{t+1}" />
        <br />
        <br />
        we immediately back up the value of the state we just visited:
        <br />
        <br />
        <div className="text-center mb-4">
          <BlockMath
            math={
              "v(S_t) \\,\\leftarrow\\, \\max_a \\Big[ R(S_t,a) + \\gamma \\sum_{s'} P(s' \\mid S_t,a) \\, v(s') \\Big]"
            }
          />
        </div>
        Only states that are relevant to the agent&apos;s actual experience get
        updated. However, every state must eventually be visited in order for
        everything to converge correctly.
        <br />
        <br />
        This idea forms a conceptual bridge between classic planning methods and
        modern reinforcement learning algorithms that learn online from
        experience, which we will explore in future sections.
        <br />
        <br />
        So the big picture is:
        <br />
        <br />
        • synchronous dynamic programming updates everything at the same time,
        whether it needs it or not.
        <br />
        • asynchronous dynamic programming updates what matters, when it
        matters.
        <br />
        <br />
        Note, The asynchronous dynamic programming updates must reach every
        state eventually, just like for synchronous dynamic programming, in
        order for everything to converge correctly.
      </div>

      <h2
        id="dp-contraction-mapping"
        className="text-2xl font-bold mb-6 text-center"
      >
        Contraction Mappimg
      </h2>

      <div className="mb-4">
        <strong>
          Step 1: The technical questions we&apos;ve been sweeping under the rug
        </strong>
        <br />
        <br />
        Up to this point, we&apos;ve been doing a lot of things that{" "}
        <em>work</em>, without really stopping to explain <em>why</em> they
        work.
        <br />
        <br />
        We apply Bellman updates.
        <br />
        We iterate.
        <br />
        We confidently claim that everything converges to the right answer.
        <br />
        <br />
        We haven&apos;t actually justified why these iterative procedures behave
        so nicely, or why they don&apos;t blow up, oscillate, or settle on the
        wrong solution.
        <br />
        <br />
        Here are the questions we really want answered:
        <br />
        <br />• How do we know that iterative policy evaluation converges to{" "}
        <InlineMath math="v_\pi" /> for a fixed policy, and therefore that
        policy iteration converges to <InlineMath math="v^*" />?
        <br />• How do we know that value iteration converges to{" "}
        <InlineMath math="v^*" />?
        <br />
        <br />
        Even more fundamentally:
        <br />
        <br />
        • Is the solution unique?
        <br />
        • Could these updates oscillate forever?
        <br />
        • Could they converge to the wrong answer?
        <br />
        <br />
        In many optimization problems, these fears are completely justified.
        <br />
        <br />
        In many settings, where you end up often depends on where you start.
        <br />
        <br />
        So why isn&apos;t value iteration just another victim of this mess?
        <br />
        <br />
        Why don&apos;t Bellman updates wander aimlessly through value-function
        space?
        <br />
        <br />
        And while we&apos;re at it:
        <br />
        <br />
        • How fast do these algorithms converge?
        <br />
        <br />
        All of these questions are answered by the{" "}
        <em>Contraction Mapping Theorem</em>, but to understand why that theorem
        applies here, we need to slow way down and carefully build the machinery
        it relies on.
      </div>

      <div className="mb-4">
        <strong>
          Step 2: The value function space (aka where all the action happens)
        </strong>
        <br />
        <br />
        In this part we are going to introduce complicated mathematical jargon
        like <em>metric spaces</em>.
        <br />
        <br />
        But before we do that, we need to slow way down and talk about something
        much simpler.
        <br />
        <br />
        <strong>Points.</strong>
        <br />
        <br />
        A point is just a place in space.
        <br />
        <br />
        And a place in space can be described using a list of numbers.
        <br />
        <br />
        For example, in a 2D x–y plane, a point is written as:
        <br />
        <br />
        <InlineMath math="(x, y)" />
        <br />
        <br />
        If I say the point is at:
        <br />
        <br />
        <InlineMath math="(2, 5)" />
        <br />
        <br />
        that means:
        <br />
        <br />
        • go 2 units to the right
        <br />
        • go 5 units up
        <br />
        <br />
        That list of numbers tells you exactly where you are.
        <br />
        <br />
        So in 2D space, a list of two numbers specifies a point.
        <br />
        <br />
        In 3D space, you&apos;d need three numbers.
        <br />
        <br />
        In general, a list of numbers specifies a location in N-dimensional
        space.
        <br />
        <br />
        Now that we&apos;re comfortable with points, we&apos;re ready for a
        slightly more abstract, but still very simple idea.
        <br />
        <br />
        <strong>Vectors.</strong>
        <br />
        <br />
        Just like points, a vector can also be written as a list of numbers.
        <br />
        <br />
        For example:
        <br />
        <br />
        <InlineMath math="(2, 5)" />
        <br />
        <br />
        or
        <br />
        <br />
        <InlineMath math="(10, -3, 7)" />
        <br />
        <br />
        But here&apos;s the key difference:
        <br />
        <br />
        A vector is not a place.
        <br />
        <br />A vector describes a <em>movement</em>.
        <br />
        <br />
        In the same 2D x–y plane, the vector:
        <br />
        <br />
        <InlineMath math="(2, 5)" />
        <br />
        <br />
        means:
        <br />
        <br />
        • move 2 units to the right
        <br />
        • move 5 units up
        <br />
        <br />
        So while points and vectors are both written as lists of numbers, they
        answer different questions:
        <br />
        <br />• a point tells you <em>where you are</em>
        <br />• a vector tells you <em>how to move</em>
        <br />
        <br />
        Now we&apos;re ready for something a bit more abstract.
        <br />
        <br />
        Not as simple or concrete as points and individual vectors, but still
        very manageable.
        <br />
        <br />
        <strong>Vector spaces.</strong>
        <br />
        <br />
        A vector space is not a new kind of object.
        <br />
        <br />
        It&apos;s a <em>collection</em> of vectors, together with a set of rules
        about how those vectors are allowed to behave.
        <br />
        <br />
        If a bunch of vectors obey these rules, then congratulations,
        you&apos;re officially in a vector space.
        <br />
        <br />
        Before we go through the formal rules below (it&apos;s ok if you
        don&apos; memorize them), think of a vector space as a place where
        vectors follow normal rules of adition and multiplication.
        <br />
        <br />
        Ok, let&apos;s go through the rules.
        <br />
        <br />
        <strong>Rule 1: Vector addition is associative</strong>
        <br />
        <br />
        This rule says that when you add several vectors together, the grouping
        doesn&apos;t matter.
        <br />
        <br />
        In normal terms:
        <br />
        <br />
        It doesn&apos;t matter which pairs you add first, you end up in the same
        place.
        <br />
        <br />
        Formally:
        <br />
        <br />
        <InlineMath math="u + (v + w) = (u + v) + w" />
        <br />
        <br />
        Example:
        <br />
        <br />
        <InlineMath math="(1, 0) + ((2, 3) + (4, 5)) = ((1, 0) + (2, 3)) + (4, 5)" />
        <br />
        <br />
        <strong>Rule 2: Vector addition is commutative</strong>
        <br />
        <br />
        This one says that order doesn&apos;t matter when adding vectors.
        <br />
        <br />
        In normal terms:
        <br />
        <br />
        Doing movement A then movement B is the same as doing B then A.
        <br />
        <br />
        Formally:
        <br />
        <br />
        <InlineMath math="u + v = v + u" />
        <br />
        <br />
        Example:
        <br />
        <br />
        <InlineMath math="(2, 5) + (-1, 3) = (-1, 3) + (2, 5)" />
        <br />
        <br />
        <strong>Rule 3: There is a zero vector</strong>
        <br />
        <br />
        Every vector space has a special vector that does absolutely nothing.
        <br />
        <br />
        This is the zero vector.
        <br />
        <br />
        In normal terms:
        <br />
        <br />
        It&apos;s the &quot;don&apos;t move&quot; movement.
        <br />
        <br />
        Formally:
        <br />
        <br />
        <InlineMath math="v + 0 = v" />
        <br />
        <br />
        Example:
        <br />
        <br />
        <InlineMath math="(2, 5) + (0, 0) = (2, 5)" />
        <br />
        <br />
        <strong>Rule 4: Every vector has an inverse</strong>
        <br />
        <br />
        For every movement, there must be a way to undo it.
        <br />
        <br />
        In normal terms:
        <br />
        <br />
        Every vector has an opposite movement that brings you back.
        <br />
        <br />
        Formally:
        <br />
        <br />
        <InlineMath math="v + (-v) = 0" />
        <br />
        <br />
        Example:
        <br />
        <br />
        <InlineMath math="(2, 5) + (-2, -5) = (0, 0)" />
        <br />
        <br />
        <strong>
          Rule 5: Compatibility of scalar multiplication with field
          multiplication
        </strong>
        <br />
        <br />
        This rule says that when you scale a vector multiple times, the order in
        which you apply the scalars doesn&apos;t matter.
        <br />
        <br />
        If you multiply a vector by one number, and then multiply the result by
        another number, that&apos;s the same as multiplying the vector once by
        the product of those two numbers.
        <br />
        <br />
        Formally:
        <br />
        <br />
        <InlineMath math="a(bv) = (ab)v" />
        <br />
        <br />
        Example:
        <br />
        <br />
        Let <InlineMath math="v = (1, 2)" />, <InlineMath math="a = 2" />,{" "}
        <InlineMath math="b = 3" />.
        <br />
        <br />
        First apply <InlineMath math="b" />:
        <br />
        <br />
        <InlineMath math="bv = 3(1, 2) = (3, 6)" />
        <br />
        <br />
        Then apply <InlineMath math="a" />:
        <br />
        <br />
        <InlineMath math="a(bv) = 2(3, 6) = (6, 12)" />
        <br />
        <br />
        Now apply the product <InlineMath math="ab = 6" /> in one step:
        <br />
        <br />
        <InlineMath math="(ab)v = 6(1, 2) = (6, 12)" />
        <br />
        <br />
        <strong>Rule 6: Identity element of scalar multiplication</strong>
        <br />
        <br />
        This rule says that there is a special number that leaves every vector
        unchanged when you multiply by it.
        <br />
        <br />
        That number is 1.
        <br />
        <br />
        Multiplying a vector by 1 does absolutely nothing.
        <br />
        <br />
        Formally:
        <br />
        <br />
        <InlineMath math="1v = v" />
        <br />
        <br />
        Example:
        <br />
        <br />
        Let <InlineMath math="v = (4, -1)" />.
        <br />
        <br />
        Multiplying by 1 gives:
        <br />
        <br />
        <InlineMath math="1 \cdot (4, -1) = (4, -1)" />
        <br />
        <br />
        This rule guarantees that scalar multiplication has a neutral element,
        just like how adding zero leaves a vector unchanged.
        <br />
        <br />
        <strong>
          Rule 7: Distributivity of scalar multiplication with respect to vector
          addition
        </strong>
        <br />
        <br />
        This rule explains how multiplying by a number interacts with adding
        vectors.
        <br />
        <br />
        If you add two vectors and then multiply by a number, you get the same
        result as multiplying each vector first and then adding them.
        <br />
        <br />
        Formally:
        <br />
        <br />
        <InlineMath math="a(u + v) = au + av" />
        <br />
        <br />
        Example:
        <br />
        <br />
        Let <InlineMath math="u = (1, 2)" />, <InlineMath math="v = (3, 4)" />,
        and <InlineMath math="a = 2" />.
        <br />
        <br />
        First add the vectors:
        <br />
        <br />
        <InlineMath math="u + v = (1 + 3, 2 + 4) = (4, 6)" />
        <br />
        <br />
        Now multiply by <InlineMath math="a" />:
        <br />
        <br />
        <InlineMath math="2(u + v) = 2(4, 6) = (8, 12)" />
        <br />
        <br />
        Now do it the other way around.
        <br />
        <br />
        Multiply each vector first:
        <br />
        <br />
        <InlineMath math="2u = (2, 4)" />, <InlineMath math="2v = (6, 8)" />
        <br />
        <br />
        Then add:
        <br />
        <br />
        <InlineMath math="2u + 2v = (2 + 6, 4 + 8) = (8, 12)" />
        <br />
        <br />
        Same vector.
        <br />
        <br />
        This rule guarantees that scaling and adding vectors are compatible
        operations.
        <br />
        <br />
        <strong>
          Rule 8: Distributivity of scalar multiplication with respect to scalar
          addition
        </strong>
        <br />
        <br />
        This rule explains how adding numbers interacts with multiplying a
        vector.
        <br />
        <br />
        If you add two numbers first and then multiply a vector, you get the
        same result as multiplying the vector by each number separately and then
        adding the vectors.
        <br />
        <br />
        Formally:
        <br />
        <br />
        <InlineMath math="(a + b)v = av + bv" />
        <br />
        <br />
        Example:
        <br />
        <br />
        Let <InlineMath math="v = (2, 1)" />, <InlineMath math="a = 2" />, and{" "}
        <InlineMath math="b = 3" />.
        <br />
        <br />
        First add the numbers:
        <br />
        <br />
        <InlineMath math="(a + b)v = 5(2, 1) = (10, 5)" />
        <br />
        <br />
        Now do it the other way around.
        <br />
        <br />
        Multiply separately:
        <br />
        <br />
        <InlineMath math="2v = (4, 2)" />, <InlineMath math="3v = (6, 3)" />
        <br />
        <br />
        Then add the results:
        <br />
        <br />
        <InlineMath math="2v + 3v = (4 + 6, 2 + 3) = (10, 5)" />
        <br />
        <br />
        Same vector.
        <br />
        <br />
        This rule guarantees that scalar addition and scalar multiplication fit
        together consistently.
        <br />
        <br />
        <strong>Putting it all together</strong>
        <br />
        <br />
        If a collection of vectors:
        <br />
        <br />
        • can be added
        <br />
        • can be scaled
        <br />
        • has a zero vector
        <br />
        • has inverses
        <br />
        • and all these addition and multiplication operations behave nicely
        <br />
        <br />
        then you&apos;re working inside a vector space.
      </div>

      <div className="mb-4">
        <strong>Step 3: Metric spaces</strong>
        <br />
        <br />
        So far, our vectors have been living pretty modest lives.
        <br />
        <br />
        They can:
        <br />
        <br />
        • be added
        <br />
        • be scaled
        <br />
        • cancel each other out
        <br />
        <br />
        But there&apos;s one very important thing they still can&apos;t do.
        <br />
        <br />
        They can&apos;t measure distance.
        <br />
        <br />
        They know how to combine.
        <br />
        They know how to stretch and shrink.
        <br />
        <br />
        But they have no idea how far apart two vectors actually are.
        <br />
        <br />
        This is where <em>metric spaces</em> enter the picture.
        <br />
        <br />
        Metric spaces give you a notion of <em>distance.</em>
        <br />
        <br />
        Formally, a metric space is any set of objects together with a function
        that tells you how far apart two objects are.
        <br />
        <br />
        That function is called a <em>metric</em>.
        <br />
        <br />
        We usually write it as:
        <br />
        <br />
        <InlineMath math="d(x, y)" />
        <br />
        <br />
        which you can read as:
        <br />
        <br />
        &quot;the distance between x and y&quot;.
        <br />
        <br />
        But not just any function gets to call itself a distance.
        <br />
        <br />
        To count as a metric, it has to behave nicely.
        <br />
        <br />
        Here are the rules.
        <br />
        <br />
        <strong>Rule 1: Distances are never negative</strong>
        <br />
        <br />
        Distance can be zero.
        <br />
        It can be positive.
        <br />
        <br />
        But it can&apos;t be negative.
        <br />
        <br />
        Formally:
        <br />
        <br />
        <InlineMath math="d(x, y) \ge 0" />
        <br />
        <br />
        <strong>Rule 2: Zero distance means same point</strong>
        <br />
        <br />
        If the distance between two things is zero, they must be the same thing.
        <br />
        <br />
        And if they are the same thing, the distance is zero.
        <br />
        <br />
        Formally:
        <br />
        <br />
        <InlineMath math="d(x, y) = 0 \iff x = y" />
        <br />
        <br />
        <strong>Rule 3: Distance doesn&apos;t depend on direction</strong>
        <br />
        <br />
        The distance from x to y is the same as the distance from y to x.
        <br />
        <br />
        No one-way streets.
        <br />
        <br />
        Formally:
        <br />
        <br />
        <InlineMath math="d(x, y) = d(y, x)" />
        <br />
        <br />
        <strong>Rule 4: The triangle inequality</strong>
        <br />
        <br />
        Going directly is never longer than taking a detour.
        <br />
        <br />
        Formally:
        <br />
        <br />
        <InlineMath math="d(x, z) \le d(x, y) + d(y, z)" />
        <br />
        <br />
        If you&apos;ve ever walked somewhere instead of teleporting, you already
        know this rule, a straight line from where you are to where you want to
        go is shorter than taking some slanted route.
        <br />
        <br />
        That&apos;s it.
        <br />
        <br />
        A metric space is just:
        <br />
        <br />
        • a set of objects
        <br />• plus a sensible notion of distance
      </div>

      <div className="mb-4">
        <strong>
          Step 4: Norms (turning vectors into things we can measure)
        </strong>
        <br />
        <br />
        In the last step, we introduced metric spaces.
        <br />
        <br />
        That gave us a way to talk about distance between objects.
        <br />
        <br />
        But in our setting, the objects we care about are vectors.
        <br />
        <br />
        And when your objects are vectors, there is a very convenient way to
        define distance.
        <br />
        <br />
        That tool is called a <em>norm</em>.
        <br />
        <br />
        <strong>What is a norm?</strong>
        <br />
        <br />
        A norm is a function that takes a vector and returns a non-negative
        number.
        <br />
        <br />
        You can think of it as answering the question:
        <br />
        <br />
        &quot;How big is this vector?&quot;
        <br />
        <br />
        We usually write a norm like this:
        <br />
        <br />
        <InlineMath math="\lVert v \rVert" />
        <br />
        <br />
        Once you have a norm, you automatically get a distance:
        <br />
        <br />
        <InlineMath math="d(v, w) = \lVert v - w \rVert" />
        <br />
        <br />
        So norms are not just about size.
        <br />
        <br />
        They are how vector spaces turn into metric spaces. So with this new
        mathematical object, the norm, I take my regular old vector space, and
        turn it into a metric space too!
        <br />
        <br />
        <strong>Norms have rules</strong>
        <br />
        <br />
        For a function to count as a norm, it has to behave nicely.
        <br />
        <br />
        Specifically:
        <br />
        <br />
        • the norm is never negative
        <br />
        • the norm is zero only for the zero vector
        <br />
        • scaling a vector scales its norm
        <br />
        • the triangle inequality holds
        <br />
        <br />
        (Yes, that triangle inequality again. It shows up everywhere.)
        <br />
        <br />
        <strong>
          The L<InlineMath math="p" /> norms
        </strong>
        <br />
        <br />
        There isn&apos;t just one way to measure the size of a vector.
        <br />
        <br />
        In fact, there is a whole family of norms, called the{" "}
        <InlineMath math="L^p" /> norms.
        <br />
        <br />
        For a vector <InlineMath math="v = (v_1, v_2, \dots, v_n)" />, the{" "}
        <InlineMath math="L^p" /> norm is defined as:
        <br />
        <br />
        <InlineMath math="\lVert v \rVert_p = \sqrt[p]{|v_1|^p + |v_2|^p + \cdots + |v_n|^p}" />
        <br />
        <br />
        Different values of <InlineMath math="p" /> give you different ways of
        measuring size.
        <br />
        <br />
        Let&apos;s look at the three most important ones.
        <br />
        <br />
        <strong>
          The <InlineMath math="L_1" /> norm
        </strong>
        <br />
        <br />
        This one just adds up absolute values:
        <br />
        <br />
        <InlineMath math="\lVert v \rVert_1 = |v_1| + |v_2| + \cdots + |v_n|" />
        <br />
        <br />
        <strong>Example</strong>
        <br />
        <br />
        Let <InlineMath math="v = (2, -3)" />.
        <br />
        <br />
        The <InlineMath math="L_1" /> norm is:
        <br />
        <br />
        <InlineMath math="\lVert v \rVert_1 = |2| + |-3| = 2 + 3 = 5" />
        <br />
        <br />
        <strong>
          The <InlineMath math="L_2" /> norm
        </strong>
        <br />
        <br />
        This is the familiar Euclidean norm we are taught in school for how to
        measure distance:
        <br />
        <br />
        <InlineMath math="\lVert v \rVert_2 = \sqrt{v_1^2 + v_2^2 + \cdots + v_n^2}" />
        <br />
        <br />
        Because it&apos;s squared, this norm cares more about larger components
        in the vector than smaller ones, unlike the <InlineMath math="L_1" />,
        where no component was given artificially more importance.
        <br />
        <br />
        <strong>Example</strong>
        <br />
        <br />
        Let <InlineMath math="v = (3, 4)" />.
        <br />
        <br />
        The <InlineMath math="L_2" /> norm is:
        <br />
        <br />
        <InlineMath math="\lVert v \rVert_2 = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = 5" />
        <br />
        <br />
        In 2D, this is exactly the Pythagorean theorem we learn about in
        geometry class.
        <br />
        <br />
        The vector <InlineMath math="(3, 4)" /> forms a right triangle with
        horizontal length 3 and vertical length 4, and the
        <InlineMath math="L_2" /> norm is the length of the hypotenuse.
        <br />
        <br />
        That&apos;s why this norm corresponds to the usual notion of distance in
        the x–y plane.
        <br />
        <br />
        <strong>
          The <InlineMath math="L_\infty" /> norm
        </strong>
        <br />
        <br />
        Just like how we gave the large components of the vector more importance
        in <InlineMath math="L_2" /> than in <InlineMath math="L_1" /> because
        we were squaring them, in <InlineMath math="L_3" /> we give the large
        components even <em>more</em> importance because we are cubing them. As
        p becomes larger, we're essentially raising components to higher and
        higher powers, which makes large components exponentially more dominant
        than small ones. In the limit, as <InlineMath math="p \to \infty" />, we
        care so much more about large numbers, that we actually <em>only</em>{" "}
        care about the largest component of the vector.
        <br />
        <br />
        Thus, for the <InlineMath math="L_\infty" /> norm, instead of adding all
        components, it only looks at the largest one:
        <br />
        <br />
        <InlineMath math="\lVert v \rVert_\infty = \max_i |v_i|" />
        <br />
        <br />
        You can think of it as:
        <br />
        <br />
        <em>What is the single biggest component of my vector?</em>
        <br />
        <br />
        <strong>Example</strong>
        <br />
        <br />
        Let <InlineMath math="v = (2, -5, 1, 3)" />.
        <br />
        <br />
        The absolute values of the components are:
        <br />
        <br />
        <InlineMath math="(|2|, |-5|, |1|, |3|) = (2, 5, 1, 3)" />
        <br />
        <br />
        The largest component is 5.
        <br />
        <br />
        So the <InlineMath math="L_\infty" /> norm is:
        <br />
        <br />
        <InlineMath math="\lVert v \rVert_\infty = 5" />
        <br />
        <br />
        All other components are ignored.
        <br />
        <br />
        <strong>Why this matters</strong>
        <br />
        <br />
        Once we choose a norm, we have chosen:
        <br />
        <br />
        • how to measure the size of a vector
        <br />
        • how to measure distance between vectors
        <br />• what it means for two value functions to be &quot;close&quot;
        <br />
        <br />
        <strong>
          The <InlineMath math="L_\infty" /> norm is the one we will choose to
          measure distance going forward
        </strong>
      </div>

      <div className="mb-4">
        <strong>
          Step 5: The Value Function Space (where value functions live)
        </strong>
        <br />
        <br />
        Now we finally put everything together.
        <br />
        <br />
        We have:
        <br />
        <br />
        • vectors
        <br />
        • vector spaces
        <br />
        • norms
        <br />
        • distances
        <br />
        <br />
        And we&apos;ve chosen a very specific norm:
        <br />
        <br />
        the <InlineMath math="L_\infty" /> norm.
        <br />
        <br />
        This choice turns out to be the key that makes dynamic programming work.
        <br />
        <br />
        <strong>What are the vectors now?</strong>
        <br />
        <br />
        Up until now, our vectors looked like:
        <br />
        <br />
        <InlineMath math="(2, -3)" />, <InlineMath math="(3, 4)" />, etc.
        <br />
        <br />
        But in reinforcement learning, the vectors we care about are different.
        <br />
        <br />
        Each vector is a <em>value function</em>.
        <br />
        <br />
        A value function assigns a number to every state:
        <br />
        <br />
        <InlineMath math="v = (v(s_1), v(s_2), \dots, v(s_{|S|}))" />
        <br />
        <br />
        If there are <InlineMath math="|S|" /> states, then each value function
        is a vector with <InlineMath math="|S|" /> components.
        <br />
        <br />
        So mathematically:
        <br />
        <br />
        • a value function is a vector • each coordinate corresponds to one
        state
        <br />
        <br />
        <strong>The Value Function Space</strong>
        <br />
        <br />
        Now take <em>all possible</em> value functions.
        <br />
        <br />
        Every possible assignment of numbers to states.
        <br />
        <br />
        This collection forms a vector space.
        <br />
        <br />
        We call it the <em>value function space</em>.
        <br />
        <br />
        It has:
        <br />
        <br />
        • vector addition (add values state by state) • scalar multiplication
        (scale all state values) • a zero vector (all state values are zero)
        <br />
        <br />
        And once we equip this space with a norm, it also becomes a metric
        space.
        <br />
        <br />
        <strong>
          The chosen norm: <InlineMath math="L_\infty" />
        </strong>
        <br />
        <br />
        We measure distance between two value functions <InlineMath math="u" />{" "}
        and
        <InlineMath math="v" /> using:
        <br />
        <br />
        <InlineMath math="\lVert u - v \rVert_\infty = \max_s |u(s) - v(s)|" />
        <br />
        <br />
        This means:
        <br />
        <br />
        &quot;How far apart are these two value functions at their worst
        state?&quot;
        <br />
        <br />
        If even one state has a big difference, the distance is big.
        <br />
        <br />
        This is a <em>worst-case</em> notion of distance.
        <br />
        <br />
        <strong>
          Thinking geometrically (even if it&apos;s a bit of a lie)
        </strong>
        <br />
        <br />
        Technically, value functions are vectors, not points.
        <br />
        <br />
        But it is extremely useful to <em>pretend</em> they are points.
        <br />
        <br />
        Each value function corresponds to a single point in this enormous
        space.
        <br />
        <br />
        And because value functions can take infinitely many values, this space
        is infinite.
        <br />
        <br />
        Still, the picture is helpful:
        <br />
        <br />
        • one point = one value function • distance between points = difference
        between value functions
        <br />
        <br />
        <strong>Bellman backups as movements in space</strong>
        <br />
        <br />
        Now comes the crucial idea.
        <br />
        <br />
        A Bellman backup takes one value function and produces another.
        <br />
        <br />
        Geometrically:
        <br />
        <br />
        It takes one point in value function space and moves it somewhere else.
        <br />
        <br />
        And here&apos;s the punchline:
        <br />
        <br />
        Under the <InlineMath math="L_\infty" /> norm, Bellman backups always
        move value functions <em>closer together</em>.
        <br />
        <br />
        In particular:
        <br />
        <br />
        The distance between your current guess and the optimal value function
        shrinks after every backup.
        <br />
        <br />
        That&apos;s exactly what it means to be a <em>contraction</em>.
        <br />
        <br />
        <strong>Why this matters</strong>
        <br />
        <br />
        Once you see Bellman backups as contractions in a metric space:
        <br />
        <br />
        • convergence is guaranteed • oscillations are impossible • the solution
        is unique
        <br />
        <br />
        Value iteration isn&apos;t magic.
        <br />
        <br />
        It&apos;s geometry.
        <br />
        <br />
        In the next step, we&apos;ll prove this contraction property explicitly.
      </div>
    </section>
  );
}
