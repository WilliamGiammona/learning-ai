// app/reinforcement-learning/page.tsx

import Link from "next/link";
import Image from "next/image";

export default function ReinforcementLearningPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="flex gap-8">
        {/* Sticky Sidebar TOC */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <nav className="sticky top-8 p-4 bg-gray-50 rounded-lg border">
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
                </ul>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <section id="ch-one-reinforcement-learning-problem" className="mb-12">
            <h1 className="text-3xl font-bold mb-6 text-center">
              Introduction to Reinforcement Learning
            </h1>
            <p className="mb-6">
              The first nine lectures in this section are based on the excellent
              Reinforcement Learning course by David Silver. You can find the
              original course materials here at{" "}
              <Link
                href="https://davidstarsilver.wordpress.com/teaching/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-400"
              >
                David Silver&apos;s teaching page
              </Link>
              .
            </p>
            <p className="mb-12">
              In this section I&apos;m going to talk about Reinforcement
              Learning, which is basically the art of teaching a computer how to
              make good decisions. The goal is simple (and also not simple at
              all), at every moment in time the agent should pick the action
              that will eventually lead to the most overall reward. Not, “the
              most reward right now” (short sighted reward), but “the most
              reward when everything is said and done” (far sighted reward). To
              keep things concrete, I'll use chess as our main example.
            </p>
            <p className="mb-4">
              <strong id="the-characters" className="block text-center">
                The Characters
              </strong>
              <br />
              In Reinforcement Learning, there are two main characters in our
              story. The first is the <strong>agent</strong>, which is the
              decision-maker (think: the chess player). The agent&apos;s goal is
              to maximize its reward (make the best chess moves that lead to
              checkmating its opponent) The second is the{" "}
              <strong>environment</strong>, which is everything the agent is
              dealing with (think: the chessboard, the pieces, and the opponent
              trying to ruin your plans). The agent looks at the position, makes
              a move it thinks is most likely to lead to having the best
              possible chance of checkmating its opponent, and then the
              environment reacts (opposing player makes their move) by either
              rewarding the agent (good position for the agent) or punishing it
              (bad position for the agent). In chess the opponent is part of the
              environment, although in more complex settings there can be an
              important distinction between the environment and other agents,
              which we&apos;ll talk about later. The environment also determines
              the pieces on the board, how each piece moves, etc. The agent
              learns how the environment operates by trial and error.
            </p>
            <p className="mb-4">
              <strong id="the-data" className="block text-center">
                The Data
              </strong>
              <br />
              Now, in order for the agent to figure out which actions are
              brilliant and which ones are terrible, it needs data. What kind of
              data does it need? How is it organized? The data can best be
              thought of as the agent making an observation, recieving a reward
              (positive or negative) from the environment, and then the agent
              taking an action it thinks will lead to the most future cumulative
              reward from this moment onwards. This creates a repeating loop
              that goes like this: the agent observes what&apos;s going on,
              takes an action, and then gets a reward. Over time, this builds up
              a long sequence of “I saw this → I did that → this happened.” (The
              chess player looks at his current position, figures out how good
              or bad it is, and then tries to make the best move in that
              position). That growing chain of experiences is called the
              agent&apos;s <strong>history</strong>, and it&apos;s basically the
              agent&apos;s memory of everything it has ever tried and how the
              world responded. (Think of the history as every move that&apos;s
              been played during the chess game and an evaluation of how good
              each position was per move) Reinforcement Learning is the process
              of using that history to slowly, painfully, and eventually
              impressively figure out how to make better and better decisions.
            </p>
            <p className="mb-4">
              <strong id="the-state" className="block text-center">
                The State
              </strong>
              <br />
              The history is great to use as a way to select actions in theory,
              but is terrible in practice. Imagine trying to make every decision
              in your life by mentally replaying every single thing that has
              ever happened to you. So instead, Reinforcement Learning uses a
              clever shortcut called the <strong>state</strong>. The idea is:
              instead of carrying around the whole messy history, we compress
              everything that actually matters into a single snapshot of
              “what&apos;s going on right now.”
            </p>
            <p className="mb-4">
              Formally, this is captured by something called the{" "}
              <strong>Markov property</strong> (named after Andrey Markov),
              which says that the future depends only on the present, not on the
              entire past. In math form, it looks like this:
              <br />
              <br />
              <span className="block font-mono text-center">
                P(S<sub>t+1</sub> | S<sub>t</sub>) = P(S<sub>t+1</sub> | S
                <sub>1</sub>, S<sub>2</sub>, … , S<sub>t</sub>)
              </span>
              <br />
              In normal human language, this just means: the probability of what
              happens in the next state: P(S<sub>t+1</sub>), given the current
              state: | S<sub>t</sub>, is the same as the probability of what
              happens next: P(S<sub>t+1</sub>) given the entire history: | S
              <sub>1</sub>, S<sub>2</sub>, … , S<sub>t</sub>. In other words,{" "}
              <em>
                the current state was able to compress all the useful dependent
                information from all the past history and use all that
                compressed information to make probability judgements about the
                immediate future.
              </em>
              . Anything before that is just extra unnecessary baggage.
            </p>
            <p className="mb-4">
              In chess, the idea of a state (board position) is very intuitive.
              The current board position (where each piece currently is on the
              board) is the state that has the Markov Property. You don&apos;t
              need to know how the pieces got there, how many blunders were
              made, or how confident the players felt on move 12. All that
              matters for deciding the next move is the position in front of you
              right now. Two games that arrive at the same board position are,
              from the agent&apos;s perspective, the same situation. That board
              position is a compressed summary of the entire history of the
              game, and it contains everything the agent needs to decide what
              move (action) to make next (Yea I know technically en passant and
              a few other rules don't follow this, but you get the idea).
            </p>
            <p className="mb-4">
              <strong id="who-decides-state" className="block text-center">
                Who Decides What Goes Into the State?
              </strong>
              <br />
              At this point, a very reasonable question pops up: how does the
              agent actually know what belongs in the state? Who decided that
              the board position matters in chess, but the player&apos;s mood or
              what they had for breakfast does not? The answer is that sometimes
              a human does, and sometimes the agent has to learn that on its
              own. In the early days of Reinforcement Learning, a human would
              carefully choose what information the agent gets to see. “Here,
              you can have position, velocity, and angle. No more, no less.”
            </p>
            <p className="mb-4">
              In modern Reinforcement Learning, especially with deep neural
              networks, things get a lot more interesting. Instead of
              spoon-feeding the agent a neatly packaged state, we often just
              dump a pile of raw data on it, including pixels, sensor readings,
              board encodings, etc, and say, “Good luck.” The agent is then
              forced to figure out for itself what actually matters enough to be
              incorporated into its state. It does this in the only way it knows
              how: by following the reward. If paying attention to something
              helps it get more reward, that thing becomes important. If it
              doesn’t, it quietly fades into irrelevance.
            </p>
            <p className="mb-4">
              If the reward is badly designed, the agent will learn that the
              wrong things are “important.” In chess, if a bad reward is given
              (trying to handcode values for each piece for example), the agent
              might fixate on material and ignore king safety. In other domains,
              it might exploit loopholes you didn&apos;t even realize existed.
              This is why state and reward are basically the two pressure points
              of Reinforcement Learning. Get them right, and the agent can solve
              extremely difficult problems.
            </p>
            <p className="mb-4">
              <strong id="seeing-vs-guessing" className="block text-center">
                Seeing Everything vs Guessing
              </strong>
              <br />
              Up until now, we&apos;ve been quietly assuming something very
              convenient: that the agent can see everything in the environment.
              Chess is like this. The entire board is right there in front of
              you. No hidden pieces. No secret information. No fog of war. This
              is what&apos;s called a{" "}
              <strong>fully observable environment</strong>. This makes it
              easier to have states that follow the markov property (contain
              everything you need to know to make the best decision).
            </p>
            <p className="mb-4">
              Unfortunately, most real-world problems are not fully observable.
              In many situations, the agent is forced to operate with incomplete
              information about the environment. This is called a{" "}
              <strong>partially observable environment</strong>. Think about
              playing poker. You don&apos;t know what cards the other players
              are holding. You don&apos;t know who is bluffing, who is scared,
              or who is quietly setting a trap. You only see your own hand and
              the cards on the table. You&apos;re making decisions based on
              incomplete information. From the agent&apos;s point of view,
              it&apos;s like trying to play chess while only seeing half the
              board and occasionally being lied to. In these settings, the agent
              has to guess and build beliefs about what might be going on behind
              the scenes. This makes it much harder (sometimes even impossible)
              for the agent to have states that follow the markov property.
            </p>

            <p className="mb-4">
              <strong className="block text-center">Agent Components</strong>
              <br />
              What are the components that make up the agent? The first of these
              is the <strong>policy</strong>, which is basically the
              agent&apos;s rulebook for what to do in each state. The second is
              the <strong>value function</strong>, which is the agent&apos;s
              opinionated ranking system for how much future reward it expects
              to get from a given state (and sometimes from a specific action in
              that state). Finally , there is the agent&apos;s{" "}
              <strong>model</strong> of the environment, which is an internal
              simulation of how the environment it&apos;s in actually works.
            </p>
            <p className="mb-4">
              <strong id="policy" className="block text-center">
                The Agent&apos;s Policy
              </strong>
              <br />
              Let&apos;s zoom in on the first of those components: the{" "}
              <strong>policy</strong>. The policy is the agent&apos;s behavior.
              It&apos;s the thing that actually answers the question, “Okay,
              I&apos;m in this situation… now what?” Formally, a policy is just
              a mapping from states to actions, but in human terms, it&apos;s
              the agent&apos;s way of making decisions. In chess, this is the
              part of the agent that looks at the board and decides, “In this
              position, I&apos;m going to move the knight to this square,” or
              “I&apos;m going to do something bold and probably regret it.”
            </p>
            <p className="mb-4">
              Some agents are very decisive. They use what&apos;s called a{" "}
              <strong>deterministic policy</strong>, which means that for every
              state, there is only one action they will take. In a given
              position, they will make the same move every time. There is no
              randomness. In math form, this is written as:
              <br />
              <span className="block text-center font-mono my-2">a = π(s)</span>
              <br />
              where the agent&apos;s policy, π, looks at its current state, s,
              and selects the action, a, that it will take.
              <br />
              <br />
              Other agents are more flexible. They use a{" "}
              <strong>stochastic policy</strong>, which means that instead of
              committing to a single move, they assign probabilities to
              different moves. “In this position, I usually attack, but
              sometimes I defend, and occasionally I panic and do something
              weird.” In math form, this is written as:
              <br />
              <span className="block text-center font-mono my-2">
                π(a | s) = P(A = a | S = s)
              </span>
              <br />
              where the agent&apos;s policy, π, looks at its current state, s,
              and assigns a probability to each possible action, a, that is
              allowed in that state.
              <br />
              <br />A good way to think about when a stochastic policy would be
              better than a deterministic one would be with the game rock,
              paper, scissors. In a deterministic policy you would always choose
              rock for example. It would be easy for your opponent to figure
              this strategy out and win every time by just choosing paper. Thus,
              the optimal policy is a stochastic (random) one where the agent
              sometimes chooses rock, sometimes chooses paper, and sometimes
              chooses scissors.
            </p>
            <p className="mb-4">
              <strong id="value-function" className="block text-center">
                The Agent&apos;s Value Function
              </strong>
              <br />
              If the policy is the agent&apos;s “what should I do in this
              state?” mechanism, then the <strong>value function</strong> is its
              “how good is this state?” mechanism. The value function is the
              agent&apos;s prediction of how much total reward it expects to
              collect in the future, starting from this particular state. In
              chess terms, this is the part of the agent that looks at a
              position and thinks, “I&apos;m probably winning in this position”
              or “Uh oh, I&apos;m probably losing in this position.” Remember,
              it&apos;s not only looking at how much reward it will get on the
              next move, but in the entire game starting from this position. For
              example, if I sacrifice my queen and only look one step ahead, my
              value function may be very low because losing a queen is usually
              bad, but if it will lead to a position that ends in checkmate in 6
              moves, the value function ranks that state highly because
              it&apos;s looking at TOTAL reward from that state, not just the
              immediate reward. Also please note that value functions MUST be
              tied to policies, because your future reward given on a state
              DEPENDS on what moves you are likely to make in future states.
              Bobby Fischer would likely have a very different value function in
              a given chess position than someone who just learned how to play
              chess. Mathamatically the value function is written as{" "}
            </p>
            <p className="mb-4">
              <span className="block text-center font-mono my-2">
                V<sub>π</sub>(s) = E<sub>π</sub>[ R<sub>t</sub> + γR
                <sub>t+1</sub> + γ²R<sub>t+2</sub> + … | S<sub>t</sub> = s ]
              </span>
              <br />
              which means the Value, V, I get if I follow policy, π, from now on
              in state, s, is equal to the Expected Value I'll get if I follow
              this policy, E<sub>π</sub> (what I think I'll get), If I add up
              all my rewards for all the future states, R<sub>t</sub>, R
              <sub>t+1</sub>, etc i think I'll be in. In many situations (like
              finance) the current reward is worth more than future rewards
              (money now is more valuable than the same dollar amount tomorrow),
              so we multiply future rewards by a discount factor of γ.
              <br />
              <br />
              Put simply, give me a state and the value function under a policy
              spits out what it thinks the total reward will be.
            </p>
            <p className="mb-4">
              <strong id="model" className="block text-center">
                The Agent's Model
              </strong>
              <br />
              So far, our agent has been reacting to the world: see state, pick
              action, get reward, repeat. But some agents go a step further and
              build something extra: a <strong>model</strong> of the
              environment. This is basically the agent&apos;s internal guess of
              how the world works. If the policy is the agent&apos;s rulebook
              for what to do in a state, and the value function tells it how
              much expected total future reward it expects to get from a state,
              then the model is its guess of what the rules of the environment
              are. It answers questions like: “If I do this, what will probably
              happen next?” For example, if I drop this object, gravity will
              make it fall towards the ground.
            </p>
            <p className="mb-4">
              More formally, the model tries to predict two things. First, the{" "}
              <strong>state transitions</strong>: given my current state and
              action, what state will the environment put me in next? And
              second, the <strong>rewards</strong>: how much immediate reward
              will I get for doing that? As an example, think about driving a
              car. Your model of the environment includes certain laws of
              physics as well as how other drivers behave. If you turn the
              steering wheel left, the car will have a high probability of
              transitioning to a state where it is turning left. If you slam the
              brakes, the car will have a high probability of transitioning to a
              state with a lower speed. If I run a red light, I have a high
              likelihood of transitioning into a state where a policeman gives
              me a big ticket. Those are all predictions about{" "}
              <strong>state transitions </strong>
              and <strong>rewards</strong>. You&apos;re constantly running
              little simulations of “If I do this in my current state, then I
              have a certain likelihood of transitioning into this particular
              new state.” Mathematically, for a transition model P, and
              immediate Reward function, R:
              <br />
              <span className="block text-center font-mono my-2">
                state transition = P(s' | s, a) &nbsp;&nbsp;and&nbsp;&nbsp;
                immediate reward = R(s, a)
              </span>
              <br />
              Which just means: the probability of landing in next state{" "}
              <em>s'</em> if I&apos;m in state <em>s</em> and take action{" "}
              <em>a</em>, and the expected (immediate not total) reward
              I&apos;ll get for taking action a in state s.
            </p>
            <p className="mb-4">
              <strong id="dont-need-all-pieces" className="block text-center">
                You Don&apos;t Need All The Pieces
              </strong>
              <br />
              Up until now, we&apos;ve been talking about{" "}
              <strong>policies</strong>, <strong>value functions</strong>, and{" "}
              <strong>models</strong> assuming every RL agent has all three of
              these. Real agents can be more minimalist. Some agents don&apos;t
              explicitly learn a policy at all, some agents don&apos;t
              explicitly learn a value function, some don&apos;t bother building
              a model of the environment, and some have all three.
            </p>
            <p className="mb-4">
              The first big split is value-based vs policy-based vs ctor-critic.
              A value-based agent doesn&apos;t need a rulebook (policy) on what
              to do in each state, it just wants to know which states are good
              and which are bad to be in. It learns a value function and then
              picks the action with the highest value. Thus, it has a value
              function, but the policy is <em>implicit</em>, i.e. “do whatever
              has the biggest value.” A policy-based agent is the opposite. It
              learns the policy without giving states an explicit value. An
              actor-critic agent uses both a policy and a value function. The
              "actor" is the policy (the thing that chooses actions), and the
              ""critic""is the value function (the thing that judges how good
              things are).
            </p>

            <p className="mb-4">
              Whether an agent is value based, policy based, or actor critic
              doesn&apos;t determine whether its model-free or model-based and
              vice versa. That&apos;s because the model is just about whether
              the agent tries to learn the <em>rules of the environment</em> or
              not.
            </p>
            <p className="mb-4">
              A model-free agent doesn&apos;t need to predict the future. It
              learns what works by experience/trial and error, using reward
              signals, without explicitly learning how the environment
              transitions from <span className="font-mono">(s, a)</span> to{" "}
              <span className="font-mono">s'</span>. A model-basedagent needs to
              predict the future. It tries to learn{" "}
              <span className="font-mono">P(s' | s, a)</span> and{" "}
              <span className="font-mono">R(s, a)</span> so it can run mental
              simulations and plan ahead.
            </p>
            <p className="mb-4">
              And because these are two separate axes, you can mix and match.
              You can have a value-based, model-free agent. Or a policy-based,
              model-free agent. Or an actor-critic, model-free agent (very
              common). And you can also build model-based versions of any of
              these. Different agents are just different combinations of policy
              learning, value learning, and model learning.
            </p>
            <p className="mb-8">
              Put simply: On one axis <strong>value-based</strong> is “Which
              option is best?”, <strong>policy-based</strong> is “What should I
              do?”, <strong>actor-critic</strong> is “What should I do, and how
              did I do?”. On a different axis, <strong>model-based</strong> is
              “If I do this, what will happen?”, and <strong>model-free</strong>{" "}
              is “I&apos;ll find out via trial and error.”
            </p>

            <p className="mb-4">
              This is all the information I think is important to know before
              diving into learning RL. Next, I will discuss Markov Decision
              Processes in detail.
            </p>
          </section>
          <section id="ch-two-mdp" className="mb-12">
            <h1 className="text-3xl font-bold mb-6 text-center">
              Markov Decision Process
            </h1>
            <p className="mb-4">
              At a very high level, Reinforcement Learning is really about
              dealing with sequences of dependent events and wanting to learn
              useful information about these events by using probability. There
              are two broad kinds of sequences of events: the first is sequences
              of <strong> independent events</strong>, things like coin flips or
              dice rolls, where each outcome has nothing to do with the one
              before it. Classical probability theory (pre 1900) was built for
              this world, and it works beautifully there. The second kind are
              sequences of <strong>dependent events</strong>, where what happens
              next depends on what just happened, and what happened before that,
              etc. This is the world most real problems live in. The challenge
              is that dependence makes classical probability messy and hard to
              work with. MDPs exist to solve exactly this problem. They give us
              a mathematical framework for using probability in a world where
              events are not independent. One key idea is to compress all the
              relevant information from the past into a single object called the{" "}
              <strong>state</strong>. Once you do that, you can treat the future
              as depending only on the present state (instead of the entire
              history). So, if you have a problem that deals with sequences of
              dependent events, and you want to apply probability theory to them
              (like in RL), MDPs are the mathematics you need.
            </p>

            <p className="mb-4">
              <strong id="why-history-matters" className="block text-center">
                A Quick Detour: Why Learn The History Of Math
              </strong>
              <br />
              Before I jump into the math, it&apos;s worth asking a slightly
              philosophical question: why bother learning the history behind
              these ideas at all? Why not just memorize the formulas and move
              on? The answer is that our brains are terrible at remembering
              abstract symbols in isolation, but they are very good at
              remembering stories. When you know <em>why</em> an idea was
              invented, what problem it was trying to solve, and what kind of
              human was behind it, it becomes much easier to both learn and
              remember. The other reason is that I enjoy it and I&apos;m the one
              writing this!
            </p>

            <p className="mb-4">
              <strong id="mdp-history" className="block text-center">
                A History of MDPs
              </strong>
              <br />
              The origin of the MDP began at the dawn of the the 20th century in
              Russia and centers around a feud between Andrey Markov and Pavel
              Nekrasov. The powerful European Russian Empire had just been
              humiliated by Japan after losing the 1905 Russo-Japanese war, and
              socialist groups all across Russia began a revolution (not that
              revolution) against the tsar. This fiercely divided the empire
              into two political camps, the pro Tsarists (usually religious and
              conservative) and the anti Tsarists (usually socialist and
              atheist). In the world of mathematics, the most prominent pro tsar
              mathematician was the extremely religious Pavel Nekrasov. He
              wanted to use probability theory to prove the existence of free
              will and the will of God. Andrey Markov was a Russian
              mathematician, who was both an atheist and deeply anti Tsarit, and
              for this reason set out to discover an entirely new branch of
              mathematics in order to prove Nekrasov wrong.
            </p>

            <p className="mb-4">
              <br />A good summary can be found here:
              <br />
              <Link
                href="https://www.youtube.com/watch?v=KZeIEiBrT_w&t=1210s"
                target="_blank"
                className="text-blue-600 underline hover:text-blue-400"
              >
                The Strange Math That Predicts (Almost) Anything
              </Link>
              <br />
              <br />
              The feud centered around the Law of Large Numbers (the average
              outcome of a large amount of independent trials converges to the
              expected value), first proven by Jacob Bernouli in 1713. As an
              example, we know that the probability of a coin flip landing on
              heads is 50% and landing on tails is 50%, so even though after a
              few coin flips (say 10) we might have 7 heads and only 3 tails, if
              you keep increasing the amount of coin flips that you do, it will
              eventually converge to 50% heads and 50% tails. The Law of Large
              Numbers was the most important concept of probability theory until
              Andrey Markov&apos;s Markov Process. Bernouli had proved that the
              Law of Large Numbers applied to INDEPENDENT events, but it was an
              open question as to whether it also applied to DEPENDENT events.
              Nekrasov argued that it didn&apos;t, and that if you observed the
              Law of Large Numbers, you could infer that the underlying events
              MUST be independent. Nekrasov looked at large amounts of data
              about marriage rates, crime rates, and birth rates and saw that
              they seemed to follow the law of large numbers. This data came
              from decisions to get married, decisions to commit crime, and
              decisions to have children. Thus because they followed the law of
              large numbers, the decisions causing them MUST be independent
              (since he believed only independent events could follow the Law of
              Large Numbers). Because they were independent, they must be
              decisions of free will, and hence free will existed and was
              something that could be measured mathamatically using the Law of
              Large Numbers.
            </p>

            <p className="mb-4">
              Markov then set out to prove that Nekrasov&apos;s claims were
              wrong and needed to show that dependent events could also follow
              the law of large numbers. This would break Nekrasov&apos;s link
              that because marriage, crime, and birth rates followed the law of
              large numbers, that they needed to be independent. This would
              prove to be a huge milestone in the world of probability because
              it would show that you can still use probability theory on
              dependent events (including RL).
            </p>

            <p className="mb-4">
              The first thing Markov needed was a situation where one event was
              clearly dependent on a previous event. He settled on using a very
              famous Russian poem, "Eugene Onegin", by the early 19th century
              anti Tsarist Russian poet (and father of modern Russian
              literature), Alexander Pushkin. The idea was that the probability
              of the next letter in the poem being a consonant or a vowel was
              clearly dependent upon what the current letter in the poem was.
              Once he showed that, all he would need to prove is that consonants
              and vowels in the poem followed the law of large numbers, and that
              would show that dependent events can also follow the law of large
              numbers (not just independent events).
            </p>

            <p className="mb-4">
              He took the first 20,000 letters in the poem, removed all the
              spaces and punctuation, and stitched them together into one
              enormous string of letters. He found that 57% of the letters were
              consonants and 43% were vowels. He then decided to have each
              letter paired with the one after it. Thus 4 possible combinations
              emerged:
              <br />
              <br />
              1) Consonant Consonant
              <br />
              2) Consonant Vowel
              <br />
              3) Vowel Consonant
              <br />
              4) Vowel Vowel.
              <br />
              <br />
              1st he had to demonstrate that each letter was dependent on the
              previous letter instead of independent. To do this he multiplied
              the probabilities by their states in order to show what the
              distribution would be if they were independent.
              <br />
              <br />
              1) For consonant consonant it was: (.57) * (.57 ) = .32 chance
              <br />
              2) For consonant vowel it was: (.57) * (.43) = .25 chance
              <br />
              3) For vowel consonant it was: (.43) * (.57) = .25 chance
              <br />
              4) For vowel vowel it was: (.43) * (.43) = .18 chance
              <br />
              The numbers he actually got were .19, .375, .375, and .06
              <br />
              <br />
              Since the numbers he got were extremely far away from what one
              would get for independent events with that large of a sample size,
              it can be inferred with extremely high probability that these were
              dependent, not independent, events (as common sense would imply).
            </p>
            <p className="mb-4">
              Now Markov needed to show that the law of large numbers was still
              valid even though each letter was dependent on the previous letter
              in the sequence. To do this he created what is now known as a{" "}
              <strong>Markov Chain</strong>. He had each letter be a state and
              found the transition probabilities between states. Transition
              probabilities describe the likelihood of moving from one state to
              another based only on the current state. For example, the
              probability that a vowel is followed by another vowel is one
              transition probability, while the probability that a vowel is
              followed by a consonant is another. This was remarkable because it
              meant that you could work with sequences of dependent events and
              still get meaningful, predictable results without needing to track
              the entire sequence. By calculating these probabilities, Markov
              could prove that even with dependencies between letters, the
              long-run frequencies still converge to predictable values (in this
              case, the overall proportions of vowels (43%) and consonants (57%)
              in the poem). Now he needed to find all the state transition
              probabilities. How did he do this? Let's take a look at the
              transition probability for vowel to vowel as an example.
              <br />
              <br />
              How did Markov calculate the transition probability from vowel to
              vowel? He looked at the actual text. The probability of any letter
              being a vowel was 0.43. The probability of two consecutive vowels
              was 0.06. He divided 0.06 by 0.43 to get 0.13. This tells us:
              given that the current letter is a vowel, there's a 13% chance the
              next letter is also a vowel (and therefore an 87% chance it's a
              consonant). He did this for all possible stat etransitions:
              consonant to consonant was 0.33, meaning consonant to vowel was
              0.67. These state transition probabilities let him model how
              states link together in a sequence, a chain of states, hence the
              name Markov chain.
            </p>

            <p className="mb-4">
              When you follow these state transition probabilities and start at
              a random starting point in the poem, you initially get wildly
              different ratios for the number of consonants and vowels you have
              (just like with independent events like flipping a coin, you might
              initially get 6 heads and 2 tails instead of the 50/50 split
              predicted). However, given a long enough length of letters, you
              eventually converge to .43 for Vowels and .57 for Consonants (just
              like how with a large enough amount of coin flips you converge to
              a 50/50 split). Thus Markov had shown that the law of large
              numbers applied to this dependent system, showing that Nekrasov
              was wrong and that you cannot just assume if a system follows the
              law of large numbers that it must be independent. This was
              groundbreaking because it showed that dependent systems aren't
              just chaotic and unpredictable, but that they can actually be
              modeled with mathematical structure and have predictable long-term
              behavior. Before Markov, mathematicians had no stable way to
              handle dependent sequences of events, they would need the ENTIRE
              history in order to make calculations.
              <br />
              <br />
              To recap, there is a mathematical object, the Markov Chain, which
              has states (vowels and consonants) and state transition
              probabilites give you the probability of going from state one to
              state two (vowel to vowel, vowel to consonant, consonant to vowel,
              and consonant to consonant). Using this mathematical object, you
              can predict that the ratio of vowels and consonants to the total
              amount of letters will converge to a stable long term ratio (an
              analogue of the law of large numbers for dependent processes) of
              .43 for vowels and .57 for consonants. Hence, Markov used this
              Markov Chain to prove that dependent events also follow the law of
              large numbers and that there were in fact mathematical structures
              that could be used to model dependent systems apart from the old
              way of needing the ENTIRE history to do anything useful.
            </p>
            <p>
              We then fast forward to the 1950s, where American mathematician
              Richard Bellman looked at Markov Chains and thought "what if I add
              decisions and rewards?" This expanded the notion of Markov Chains
              into Markov Decision Processes, the mathematical foundation of
              reinforcement learning.
            </p>

            <p className="mb-4">
              <strong id="mp" className="block text-center">
                Markov Process
              </strong>
              <br />
              A quick note, Markov created the Markov Chain, described in the
              history section above, which deals ONLY with discrete (countable)
              time. A "Markov Process", is a more general term that can deal
              with both discrete or continuous time, so all Markov Chains are
              Markov Processes, but not all Markov Processes are Markov Chains.
              Ok, enough history, now back to mathematics. One of the most
              central ideas of a Markov Process is that it follows the "Markov
              Property", which says that the future depends only on the present,
              not on the entire past.
              <br />
              <br />
              <span className="block font-mono text-center">
                P(S<sub>t+1</sub> | S<sub>t</sub>) = P(S<sub>t+1</sub> | S
                <sub>1</sub>, S<sub>2</sub>, … , S<sub>t</sub>)
              </span>
              <br />
              In normal human language, this just means: the probability of what
              happens in the next state: P(S<sub>t+1</sub>), given the current
              state: | S<sub>t</sub>, is the same as the probability of what
              happens next: P(S<sub>t+1</sub>) given the entire history: | S
              <sub>1</sub>, S<sub>2</sub>, … , S<sub>t</sub>. In other words,{" "}
              <em>
                the current state was able to compress all the useful dependent
                information from all the past history and use all that
                compressed information to make probability judgements about the
                immediate future.
              </em>
              . Anything before that is just extra unnecessary baggage.
            </p>

            <p className="mb-4">
              The two fundamental objects in any Markov Process are:
              <br />
              1) The state: a compression of all important dependent information
              in the history up to that point (think of the weather at any
              particular point in time during the day)
              <br />
              2) The transition probability: represented as a matrix for
              discrete states or a probability distribution for continuous
              states, that tells you the probability of going from one state to
              the next (Think of the likelihood it will continue being cloudy at
              any point during the day)
              <br />
              <br />
              Formally, a <strong>Markov Process</strong> is defined as a tuple
              (S, P) where:
              <br />
              <br />• <strong>S</strong> is a (finite or infinite) set of states
              <br />• <strong>P</strong> is the state transition probability
              <br />
              <br />
              The state transition probability function is formally written as:
              <br />
              <br />
              <span className="block font-mono text-center">
                P<sub>ss'</sub> = P[S<sub>t+1</sub> = s' | S<sub>t</sub> = s]
              </span>
              <br />
              This notation means: "the probability of transitioning TO state s'
              (where you'll be next) GIVEN that you're currently in state s."
            </p>
            <br />

            <p className="mb-4">
              In chess, the idea of a state (board position) is very intuitive.
              The current board position (where each piece currently is on the
              board) is the state that has the Markov Property. You don&apos;t
              need to know how the pieces got there, how many blunders were
              made, or how confident the players felt on move 12. All that
              matters for deciding the next move is the position in front of you
              right now. Two games that arrive at the same board position are,
              from the agent&apos;s perspective, the same situation. That board
              position is a compressed summary of the entire history of the
              game, and it contains everything the agent needs to decide what
              move (action) to make next (Yea I know technically en passant and
              a few other rules don't follow this, but you get the idea).
            </p>

            <p className="mb-4">
              For discrete states, all these transition probabilities can be
              organized into a <strong>state transition matrix</strong> 𝒫. The
              matrix is structured so that:
              <br />
              <br />• Each <strong>row</strong> represents a starting state
              (where you are now)
              <br />• Each <strong>column</strong> represents a possible next
              state (where you could go)
              <br />• Each entry P<sub>ij</sub> tells you the probability of
              going FROM state i TO state j
              <br />
              <br />
              <span className="block text-center">
                <span className="italic">from</span> 𝒫 ={" "}
                <span className="italic">to</span>
                <span className="inline-block ml-4">
                  [P<sub>11</sub> ... P<sub>1m</sub>]
                  <br />
                  <span className="ml-4">[⋮ ⋱ ⋮]</span>
                  <br />
                  [P<sub>n1</sub> ... P<sub>nm</sub>]
                </span>
              </span>
              <br />
              <br />A key property: each row must sum to 1, because from any
              given state, you must transition <em>somewhere</em> (even if
              "somewhere" means staying in the same state). This constraint
              ensures the probabilities are valid.
            </p>

            <p className="mb-4">
              This transition matrix gives you the complete structure of the{" "}
              <strong>Markov Process</strong>. The "Markov Process" refers to
              the entire system of how states evolve over time according to
              these transition probabilities. Once you know the transition
              matrix 𝒫, you can answer questions like: "If I start in state s,
              what&apos;s the probability I'll be in state s' after 10 steps?"
              or "What&apos;s the long-term distribution of states?" The matrix
              encodes all the dynamics of the system, i.e. it tells you
              everything about how the process moves through states over time.
              For continuous states, a probability distribution (called a
              transition kernel) is used instead of a matrix, but the concept is
              the same.
            </p>

            <p className="mb-4">
              Here is an example to better understand the complete transition
              matrix: In a simplified weather model with three states (Sunny,
              Cloudy, Rainy), the transition matrix might look like this:
              <br />
              <br />
              <span className="block font-mono text-sm">
                From Sunny: 70% → Sunny, 20% → Cloudy, 10% → Rainy
                <br />
                From Cloudy: 30% → Sunny, 40% → Cloudy, 30% → Rainy
                <br />
                From Rainy: 20% → Sunny, 30% → Cloudy, 50% → Rainy
              </span>
              <br />
              Each row shows the transition probabilities from one state to all
              possible next states, and together they form the complete
              transition probability matrix 𝒫.
            </p>
            <p className="mb-4">
              To recap: for a Markov Process all you need are two things: (1){" "}
              <strong>states</strong> that satisfy the Markov Property, meaning
              each state compresses all the relevant dependent information from
              the past into a single snapshot of "where you are now", and (2){" "}
              <strong>transition probabilities</strong> that tell you how likely
              you are to move from any given state to any other state.
              That&apos;s it. These two ingredients completely specify the
              entire system. With just these, you can predict how the system
              will evolve over time, calculate long-term behavior, and answer
              probability questions about sequences of dependent events.
            </p>

            <p className="mb-4">
              <strong id="mrp" className="block text-center">
                Markov Reward Process
              </strong>
              <br />A Markov Process gives us the mathematical tools to handle
              sequences of dependent events, but it&apos;s missing something
              crucial for reinforcement learning: feedback from the environment,
              like victory for checkmating an opponent in chess, or defeat for
              being checkmated. In RL, we want to express the environment fully,
              which brings us to the Markov Reward Process, where the
              environment has states, state transitions, AND a reward/penalty
              given to us by the environment which depends on the state we are
              in. Remember, the ultimate goal in RL is for the agent to learn
              which actions get us to states that give us the largest total
              cumulative reward over a given time frame (although for MRPs we
              don't have actions incorporated yet, that will come for MDPs in
              the next section, this is just laying the groundwork), so
              it&apos;s crucial that we have a way to model environment rewards
              from states. However, environment rewards in the future
              aren&apos;t worth as much as those right now (just like how in
              finance a dollar today is worth more than a dollar tomorrow), so
              we use a discount factor, γ (gamma), to give less and less value
              to rewards farther away from the present state. These are all the
              ingredients we need to model our environment.
            </p>
            <p className="mb-4">
              Formally, a <strong>Markov Reward Process</strong> is defined as a
              tuple (S, P, R, γ) where:
              <br />
              <br />• <strong>S</strong> is a finite set of states
              <br />• <strong>P</strong> is the state transition probability
              matrix we saw before, where P<sub>ss'</sub> = P[S<sub>t+1</sub> =
              s' | S<sub>t</sub> = s]
              <br />
              <br />
              This notation means: "the probability of transitioning TO state s'
              (where you'll be next) GIVEN that you're currently in state s."
              <br /> <br />• <strong>R</strong> is a reward function: R
              <sub>s</sub> = E[R<sub>t+1</sub> | S<sub>t</sub> = s]
              <br />
              <br />
              This notation is a bit complex, so let&apos;s break down the
              reward function notation:{" "}
              <strong>
                R<sub>s</sub> = E[R<sub>t+1</sub> | S<sub>t</sub> = s]
              </strong>
              <br />
              <br />•{" "}
              <strong>
                R<sub>s</sub>
              </strong>
              : The expected reward associated with state s
              <br />• <strong>E[...]</strong>: Expected value (the average value
              you'll converge to as you increase the number of samples
              indefinitely)
              <br />•{" "}
              <strong>
                R<sub>t+1</sub>
              </strong>
              : The reward received at the next time step
              <br />• <strong>|</strong>: "given that" (conditional probability)
              <br />•{" "}
              <strong>
                S<sub>t</sub> = s
              </strong>
              : You're currently in state s at time t
              <br />
              <br />
              Putting it together: R<sub>s</sub> is the expected reward you'll
              receive at the next time step when you transition away from state
              s.
              <br />
              <br />
              Two important notes: First, the expectation (average) E[...] is
              there because rewards can be stochastic (random). You might not
              always get exactly the same reward from the same state. Sometimes
              you may get 10, sometimes 12. R<sub>s</sub> is simply the average
              reward from a state if you were to sample it over and over again
              forever.
              <br />
              <br />
              Second, notice it&apos;s R<sub>t+1</sub> (next time step) | S
              <sub>t</sub>, not R<sub>t</sub> (current time step) | S
              <sub>t</sub>. You might expect that when you're in state s at time
              t, you would receive your reward (which is conditioned on being in
              that state) at that same time: i.e. R<sub>t</sub> | S<sub>t</sub>{" "}
              , but you don't. You only get that reward in the next time step
              once you transition to the next state.
              <br />
              <br />
              To clear up any confusion, here is an example: Suppose we have a
              system which gives a reward of 5 for the transition from state s
              to state s', and a reward of -3 for the transition from state s'
              to state s''.
              <br />
              <br />
              t=0: In state s → no reward yet
              <br />
              t=1: Transition to state s' → receive R<sub>1</sub> = 5
              <br />
              t=2: Transition to terminal state s'' → receive R<sub>2</sub> = -3
              <br />
              <strong>Total reward: 5 + (-3) = 2</strong>
              <br />
            </p>
            <p
              id="historical-precedent-confusing-conventions"
              className="mb-4 text-center"
            >
              <strong>Historical Precedent of Confusing Conventions</strong>
            </p>
            <p className="mb-4">
              So, why would anyone use this R<sub>t+1</sub> | S<sub>t</sub>{" "}
              convention when using the R<sub>t</sub> | S <sub>t</sub>{" "}
              convention seems so much more natural? To answer this, let's look
              at some parallels from mathematics: the history of how we came up
              with the names sine and cosine, and the history of why we use the
              number π when dealing with problems involving a circle&apos;s
              radius. Many mathematical conventions persist not because they're
              the most intuitive, but because of historical precedent.
            </p>
            <p className="mb-4">
              First, let&apos;s look at how we got the names sine and cosine
              (from the Latin sinus meaning pocket) for trigonometry when they
              seem to have no relation at all to the unit circle or length in
              general.
              <br />
              A good summary can be found here:
              <br />
              <br />
              <Link
                href="https://www.youtube.com/watch?v=AzVL432lEWA"
                target="_blank"
                className="text-blue-600 underline hover:text-blue-400"
              >
                Why sin and cos don&apos;t mean anything
              </Link>
              <br />
              <br />
              The story of how "sine" got its name involves a fascinating series
              of mistranslations across cultures. It began with Indian
              mathematicians around the 5th-6th century AD (like Aryabhata) who
              used the Sanskrit word <strong>jyā</strong> (ज्या), meaning
              "bowstring", to describe what we now call the sine function. This
              made sense geometrically because the arc of a circle looks like a
              bow, and the chord (or half-chord) connecting its endpoints looks
              like the bowstring as shown here;
              <br />
              <br />
              <Image
                src="/images/reinforcement-learning/mdp/sine-arrow.png"
                alt="Intuition behind original name for sine as bowstring"
                width={500}
                height={300}
                className="mx-auto my-4"
              />
              <br />
              <br />A common synonym of jyā was, <em>jīvá</em>, which is the
              word that ultimately ended up being used in India. When 8th
              century Persian and Arab scholars translated these Indian
              mathematical texts, they transliterated jīvá into Arabic as{" "}
              <em>jiba</em> (جيب). Arabic is written without short vowels, so{" "}
              <em>jiba</em> was written simply as the consonants "jb" (جب).
              <br />
              <br />
              In the 12th century, when European scholars translated Muhammad
              ibn Musa al-Khwarizmi's famous work, al-Kitāb al-Mukhtaṣar fī
              Ḥisāb al-Jabr wal-Muqābalah (which is where we get algebra
              [al-Jabr] from), into Latin, they thought that jb referred to the
              arabic word jayb (جيب), which meant pocket, and so translated it
              as the Latin word <em>sinus</em>. Finally, in 1593, in his only
              known publication, Horologiographia, English mathematician Thomas
              Fale converted the Latin <em>sinus</em> into English as "sine",
              and that&apos;s the word we still use today, instead of using the
              words bowstring and co-bowstring (which make much more sense
              geometrically), because of centuries of convention.
            </p>
            <p className="mb-4">
              Second, let&apos;s look at how the ratio of a circumference to its
              diameter, π (pi) = 3.14..., became the number we use when dealing
              with problems involving a radius instead of τ (tau) = 6.28...,
              which is the ratio of a circumference to its radius.
            </p>
            <p className="mb-4">
              <br />
              There&apos;s an ongoing debate in mathematics about whether we
              should use π = 3.14... or τ (tau) = 6.28... as our fundamental
              circle constant. Many mathematicians argue that τ makes more sense
              because it represents the ratio of a circle&apos;s circumference
              to its <em>radius</em> (C = τr [as oppused to the usual C = 2πr]),
              which would make many formulas cleaner. A full unit circle would
              simply be τ radians instead of 2π radians, a quarter unit circle
              would be τ/4 instead of π/2, and so on.
              <br />
              <br />
              So why do we use π = 3.14... universally instead? The answer lies
              with the greatest mathematician who ever lived, Leonhard Euler.
              Euler used the greek letter π (pi) simply to stand for perimeter,{" "}
              <strong>
                but let its value vary depending on whether he was working on a
                problem dealing with diameter or with radius.
              </strong>
              <br />
              <br />
              When Euler was working with problems involving{" "}
              <strong>diameter</strong>, he set π equal to 3.14...
              (circumference to diameter ratio,). When he was working with
              problems involving <strong>radius</strong>, he set π equal to
              6.28... (circumference to radius ratio). This makes perfect sense,
              use whichever constant is most convenient for the problem at hand!
              In different works throughout the 1720s-1740s, you can find him
              using both values depending on the mathematical context.
              <br />
              <br />
              Then in 1748, Euler published his famous calculus book{" "}
              <em>Introductio in Analysin Infinitorum</em> (Introduction to the
              Analysis of the Infinite). In the book, he happened to be working
              with diameter based formulas, so he used π = 3.14... This textbook
              became one of the most important mathematical works of the 18th
              century, widely read and studied across Europe.
              <br />
              <br />
              However, instead of following Euler&apos;s pragmatic approach of
              switching between values based on context, later mathematicians
              simply adopted the value for π as 3.14 regardless of the
              mathematical context because that was the value they had seen
              Euler use in this book. They stopped adjusting based on whether
              they were working with radius or diameter. That&apos;s why,
              instead of having a unit circle like this:
              <br />
              <br />
              <Image
                src="/images/reinforcement-learning/mdp/unit-circle-tau.png"
                alt="Unit Circle using tau showing that the values fit the circle"
                width={500}
                height={300}
                className="mx-auto my-4"
              />
              <br />
              <br />
              where going around 1/12th of the circle is τ/12, 1/4 of the circle
              is τ/4, 3/8ths of the circle is 3τ/8, etc, we have this:
              <br />
              <br />
              <Image
                src="/images/reinforcement-learning/mdp/unit-circle-pi.png"
                alt="Unit Circle using pi showing that the values are too large for the circle"
                width={500}
                height={300}
                className="mx-auto my-4"
              />
              <br />
              <br />
              along with many other confusing and inelegant complications when
              using a diameter based constant for radius based problems.
              <br />
              <br />
              Euler&apos;s flexible approach was, of course, the sensible
              approach, but we continue to have a standardized value because of
              centuries of convention.
            </p>
            <p className="mb-4">
              I think you can see where I&apos;m going with this. There are many
              areas of mathematics where notation is used that is less intuitive
              for learners simply because of convention. The convention of
              giving the reward at timestep t+1, even though its based of the
              state at time t, is now standard in RL for similar historical
              reasons: i.e. because it appeared in the most influential RL
              textbook (Reinforcement Learning: An Introduction by Sutton &
              Barto) in 1998 and everyone adopted it.
            </p>

            <p id="mrp-continued" className="mb-4 text-center">
              <strong>Markov Reward Process Continued</strong>
            </p>
            <p className="mb-4">
              Now we come to the final part in the Markov Reward Process, which
              is the discount factor.
              <br /> <br />• <strong>γ</strong> (gamma) is a discount factor,
              where γ ∈ [0,1] (gamma is just a number between 0 and 1).
              <br />
              <br />
              The discount factor, γ, determines how much we value future
              rewards relative to immediate rewards. When we calculate the total
              sum of rewards (the return) from a given state, G<sub>t</sub>, we
              don&apos;t just add up all future rewards equally (unless we set γ
              equal to 1), we discount them based on how far in the future they
              occur:
              <br />
              <br />
              <span className="block font-mono text-center">
                G<sub>t</sub> = R<sub>t+1</sub> + γR<sub>t+2</sub> + γ²R
                <sub>t+3</sub> + ...
              </span>
              <br />
              <br />
              <strong>Why discount at all?</strong> There are several important
              reasons:
              <br />
              <br />
              1) <strong>Uncertainty about the future</strong>: For complex real
              world problems, it&apos;s very difficult to make any algorithm
              that can accurately predict the far future equally as well as the
              immediate future. Rewards far in the future are less certain to
              actually happen. A reward you might get in 100 steps is less
              reliable than one you&apos;ll get in 50 steps which is less
              reliable than one you&apos;ll get in one step, so they should each
              be weighted less.
              <br />
              <br />
              2) <strong>Mathematical convenience</strong>: Discounting ensures
              that infinite sums of rewards converge to a finite number, making
              the math work better. Without γ (unless you set γ = 1), an
              infinite episode would have infinite return, making the math more
              difficult to work with.
              <br />
              <br />
              3) <strong>Models real preferences</strong>: In many scenarios,
              getting something now is genuinely more valuable than getting it
              later. This is like the time value of money in finance, a dollar
              today is worth more than a dollar tomorrow because you could
              invest it and earn interest.
              <br />
              <br />
              <strong>What does γ mean in practice?</strong>
              <br />
              If <strong>γ = 0</strong>: The agent only cares about immediate
              rewards, completely ignoring the future (myopic)
              <br />
              If <strong>γ = 1</strong>: All future rewards count equally, no
              matter how far away (far-sighted, only works for finite episodes)
              <br />
              If <strong>γ = 0.5</strong>: A reward 4 steps away is worth (0.5)
              <sup>4</sup> ≈ 0.0625 of what that same reward would be worth on
              this step
              <br />
              <br />
              The choice of γ is a design decision set by humans, which
              significantly affects what the agent learns to do. A higher γ
              makes the agent more patient and considerate of long-term
              consequences, while a lower γ does the opposite.
              <br />
              <br />
            </p>
            <p className="mb-4">
              Now that we understand how the discount factor shapes our view of
              future rewards, let&apos;s introduce the{" "}
              <strong>value function</strong>. While the reward function tells
              us the immediate reward from being in state s, the value function
              tells us something more useful: the expected total return from
              state s onwards. It&apos;s the difference between asking "what do
              I get right now?" versus "what&apos;s the total payoff I can
              expect from here?"
              <br />
              <br />
              (Note: We&apos;re introducing the value function for Markov Reward
              Processes first as a stepping stone. The value function for MDPs,
              which we&apos;ll see later, is policy-dependent and slightly
              different, but the core concept is the same.)
              <br />
              <br />
              Formally, the state value function v(s) of an MRP is the expected
              return (total sum of all discounted rewards) starting from state
              s:
              <br />
              <br />
              <span className="block font-mono text-center">
                v(s) = E[G<sub>t</sub> | S<sub>t</sub> = s]
              </span>
              <br />
              Breaking this down: we're taking the expectation (average) of the
              return G<sub>t</sub> (remember, that's the sum of all discounted
              future rewards: R<sub>t+1</sub> + γR<sub>t+2</sub> + γ²R
              <sub>t+3</sub> + ...) given that we start in state s.
              <br />
              <br />
              For example, imagine a state that gives you a small immediate
              reward of +1, but always transitions to terrible states that give
              -10 rewards. That state has a high immediate reward, but a low
              value function. Conversely, if a state gives you 0 immediate
              reward, but leads to a sequence of highly rewarding states, that
              state would have a high value function despite its low immediate
              reward. The value function captures this "looking ahead"
              perspective.
            </p>
            <p className="mb-4">
              <strong className="block text-center">
                Return vs Expected Return: What's the Difference?
              </strong>
              <br />
              This is a subtle but crucial distinction. Let's break down why G
              <sub>t</sub> and v(s) look different mathematically.
              <br />
              <br />
              <strong>
                G<sub>t</sub> (the return)
              </strong>{" "}
              describes what happens in ONE specific trajectory:
              <br />
              <br />
              <span className="block font-mono text-center">
                G<sub>t</sub> = R<sub>t+1</sub> + γR<sub>t+2</sub> + γ²R
                <sub>t+3</sub> + ...
              </span>
              <br />
              Notice the R's are the ACTUAL REWARDS you receive as you move
              through the MRP. No expectation needed because this is describing
              what literally happened: "I got reward R<sub>t+1</sub>, then R
              <sub>t+2</sub>, then R<sub>t+3</sub>..." Each specific return will
              probably be different every sample, but over MANY samples, the
              average of these returns will converge to a stable value due to
              the law of large numbers.
              <br />
              <br />
              <strong>v(s) (the value function)</strong> describes what you
              EXPECT across ALL possible trajectories:
              <br />
              <br />
              <span className="block font-mono text-center">
                v(s) = E[G<sub>t</sub> | S<sub>t</sub> = s]
              </span>
              <br />
              Now we need the expectation E[...] because from state s, many
              different things can happen:
            </p>
            <ul className="list-disc ml-8 mb-4">
              <li>
                The transition probabilities might send you to different next
                states
              </li>
              <li>
                The rewards might be stochastic (sometimes +5, sometimes +3 from
                the same state)
              </li>
              <li>
                Each possible path forward has its own G<sub>t</sub>
              </li>
            </ul>
            <p className="mb-4">
              But overall, the expected value (the average value you will get if
              you did an infinite amount of random samples) is what v(s) will
              be.
            </p>
            <p className="mb-4">
              <strong>Example:</strong> You're in state s. From s, there's a 50%
              chance to go to state A (which gives reward +10) and 50% chance to
              go to state B (which gives reward +2). Let's say both A and B are
              terminal states.
              <br />
              <br />
              <strong>Trajectory 1:</strong> s → A
              <br />G<sub>t</sub> = 10 (this is the actual return for this
              specific path)
              <br />
              <br />
              <strong>Trajectory 2:</strong> s → B
              <br />G<sub>t</sub> = 2 (this is the actual return for this
              specific path)
              <br />
              <br />
              <strong>Value function:</strong>
              <br />
              v(s) = E[G<sub>t</sub> | S<sub>t</sub> = s] = (0.5 × 10) + (0.5 ×
              2) = (5) + (1) = 6 (this is the expected return from this state)
              <br />
              <br />
              <strong>Summary of Notation</strong>
            </p>
            <ul className="list-disc ml-8 mb-4">
              <li>
                G<sub>t</sub>: No expectation operator → describes ONE
                trajectory, uses actual rewards received
              </li>
              <li>
                v(s): Has expectation operator E[...] → averages over ALL
                possible trajectories
              </li>
            </ul>

            <p className="mb-4">
              To recap, a Markov Reward Process gives us a complete mathematical
              description of an environment by extending Markov Processes with
              rewards and a discount factor. It's defined by the tuple (S, P, R,
              γ) where S captures all possible states the environment can be in,
              P describes how the environment transitions between states, R
              specifies the expected feedback (rewards or penalties) the
              environment will give us, and γ determines how we weight rewards
              that occur farther and farther into the future. Together, these
              four components fully characterize the environment's structure.
              The value function v(s) tells us the expected total discounted
              return from state s, not just the immediate reward (which is what
              the reward function gives us), but the long-term value accounting
              for all future rewards. Later, Markov Reward Processes will be
              extended into Markov Decision Processes, where an agent can take
              actions to influence which states it enters. This is the core idea
              of RL: building algorithms that allow agents to learn which
              actions maximize their chances of being in states with the highest
              expected return.
              <br />
            </p>
            <p className="mb-4">
              <strong
                id="bellman-equation-introduction"
                className="block text-center"
              >
                Introduction to the Bellman Equation for MRPs
              </strong>
            </p>
            <p className="mb-4">
              This will only be a brief introduction to the Bellman Equation,
              which will be explained in much more detail in the next section
              about dynamic programming. This is one of the most important and
              fundamental concepts to understand in RL. The key insight is that
              instead of computing the value function by summing up all future
              discounted rewards directly, we can use recursion. Here&apos;s how
              it works formally:
              <br />
              <br />
              <span className="block font-mono text-center">
                v(s) = E[G<sub>t</sub> | S<sub>t</sub> = s]
              </span>
              <br />
              <span className="block font-mono text-center">
                = E[R<sub>t+1</sub> + γR<sub>t+2</sub> + γ²R<sub>t+3</sub> + ...
                | S<sub>t</sub> = s]
              </span>
              <br />
              <span className="block font-mono text-center">
                = E[R<sub>t+1</sub> + γ(R<sub>t+2</sub> + γR<sub>t+3</sub> +
                ...) | S<sub>t</sub> = s]
              </span>
              <br />
              <span className="block font-mono text-center">
                = E[R<sub>t+1</sub> + γG<sub>t+1</sub> | S<sub>t</sub> = s]
              </span>
              <br />
              <span className="block font-mono text-center">
                = E[R<sub>t+1</sub> + γv(S<sub>t+1</sub>) | S<sub>t</sub> = s]
              </span>
              <br />
              <br />
              Notice how we factored out γ from the infinite sum R<sub>
                t+2
              </sub>{" "}
              + γR<sub>t+3</sub> + γ²R<sub>t+4</sub> + ..., which is exactly G
              <sub>t+1</sub> (the return starting from time t+1). By definition,
              the expected value of G<sub>t+1</sub> starting from state S
              <sub>t+1</sub> is just the value function of the next state v(S
              <sub>t+1</sub>). Thus, instead of computing a very long sum of
              rewards, we only need to look one step ahead and do two things:
              <br />
              <br />
              1) Add the immediate reward R<sub>t+1</sub>
              <br />
              2) Add the discounted value γv(S<sub>t+1</sub>),
              <br />
              trusting that the value function at the next state has already
              done the rest of the work for us.
            </p>

            <p className="mb-4">
              <Image
                src="/images/reinforcement-learning/mdp/bellman-mrp-model.png"
                alt="Bellman equation diagram showing state s transitioning to next states"
                width={500}
                height={300}
                className="mx-auto my-4"
              />
              <br />
              The diagram above illustrates this one-step lookahead perspective.
              From state s, we can transition to various next states s&apos;
              with different probabilities. The Bellman Equation can be written
              explicitly in terms of these transition probabilities:
              <br />
              <br />
              <span className="block font-mono text-center">
                v(s) = R<sub>s</sub> + γ Σ<sub>s&apos;</sub> P
                <sub>ss&apos;</sub>v(s&apos;)
              </span>
              <br />
              <br />
              This equation says: the value of state s, (v(s)), equals the
              immediate expected reward, R<sub>s</sub>, plus a discounted (γ)
              sum over all possible next states (v(s&apos;)) weighted by their
              probability of occuring (P<sub>ss&apos;</sub>). Here&apos;s how to
              compute it step by step:
              <br />
              <br />
              1) Look at the first possible next state, s&apos;, you can
              transition to from s
              <br />
              2) Find its discounted value γv(s&apos;)
              <br />
              3) Multiply it by P<sub>ss&apos;</sub>, the probability of
              transitioning from s to s&apos; (given in the transition matrix P)
              <br />
              4) Repeat steps 1-3 for every other possible next state s&apos;
              <br />
              5) Add all these weighted values together
              <br />
              6) Finally, add the immediate expected reward R<sub>s</sub> you
              get from being in state s
            </p>
            <p className="mb-4">
              The Bellman Equation becomes even more powerful when we express it
              in matrix form, which allows us to solve for all state values
              simultaneously using linear algebra. Instead of computing v(s) for
              each individual state separately, we can organize all the state
              values into a column vector
              <strong> v</strong>, where each entry corresponds to one
              state&apos;s value. We multiply v by the identity matrix.
              Similarly, we organize all the immediate rewards into a column
              vector
              <strong> R</strong>. The transition probabilities, which tell us
              how likely we are to move from any state to any other state, form
              a matrix <strong>P</strong>. With this setup, the Bellman Equation
              for the entire MRP can be written compactly as:
              <br />
              <br />
              <span className="block font-mono text-center">
                <strong>Iv</strong> = <strong>R</strong> + γ<strong>P</strong>
                <strong>v</strong>
              </span>
              <br />
              <br />
              This single matrix equation encodes the Bellman Equation for every
              state at once. The matrix multiplication <strong>Pv</strong>{" "}
              automatically computes the weighted sum of next-state values for
              each state (exactly what the summation Σ<sub>s&apos;</sub> P
              <sub>ss&apos;</sub>v(s&apos;) did), and adding <strong>R</strong>{" "}
              gives us the immediate rewards. This formulation is crucial
              because it transforms our problem into a system of linear
              equations that we can solve directly in the following way:
              <span className="block font-mono text-center mt-4">
                <strong>Iv</strong> - γ<strong>Pv</strong> = <strong>R</strong>
              </span>
              <br />
              <span className="block font-mono text-center">
                (<strong>I</strong> - γ<strong>P</strong>)<strong>v</strong> ={" "}
                <strong>R</strong>
              </span>
              <br />
              <span className="block font-mono text-center">
                <strong>v</strong> = (<strong>I</strong> - γ<strong>P</strong>)
                <sup>-1</sup> <strong>R</strong>
              </span>
              <br />
              <br />
            </p>
            <p className="mb-4">
              Matrix inversion is computationally expensive for large state
              spaces (O(n³) complexity for n states), but more efficient
              iterative methods will be discussed in later sections.
            </p>
            <p className="mb-4">
              <strong id="mdp" className="block text-center">
                Markov Decision Process
              </strong>
            </p>
            <p className="mb-4">
              Now we are ready to talk about the full mathematical structure
              that can describe reinforcement learning, the Markov Decision
              Process. With a Markov Reward Process we could fully describe the
              environment of RL, but there was still nothing to describe the
              agent. An agent doesn't just exist in an environment, it can
              actively choose to take actions that affect its probability of
              ending up in a particular state. We now have two separate events
              that affect the probability of going to s' from s:
              <br />
              <br />
              1) The action the agent takes while in state s
              <br />
              2) The environment&apos;s dynamics (which were discussed in the
              Markov Reward Process section)
            </p>
            <p className="mb-4">
              Formally, a <strong>Markov Decision Process</strong> is defined as
              a tuple (S, A, P, R, γ) where:
              <br />
              <br />• <strong>S</strong> is a finite set of states
              <br />• <strong>A</strong> is a finite set of actions the agent
              can take
              <br />• <strong>P</strong> is the state transition probability
              matrix, now action-dependent: P<sup>a</sup>
              <sub>ss&apos;</sub> = P[S<sub>t+1</sub> = s&apos; | S<sub>t</sub>{" "}
              = s, A<sub>t</sub> = a]
              <br />
              <br />
              This reads as: "the probability of transitioning to state s&apos;
              given that you&apos;re currently in state s AND you take action a"
              <br />
              <br />• <strong>R</strong> is the reward function, also now
              action-dependent: R<sup>a</sup>
              <sub>s</sub> = E[R<sub>t+1</sub> | S<sub>t</sub> = s, A
              <sub>t</sub> = a]
              <br />
              <br />
              This reads as: "the expected reward you receive given you&apos;re
              in state s AND you take action a"
              <br />
              <br />• <strong>γ</strong> is the discount factor, γ ∈ [0,1], same
              as before
              <br />
              <br />
              The key difference from MRPs is that both P and R now depend on
              the action taken, giving the agent control over transitions and
              rewards. In MRPs, P was entirely determined by the environment
              dynamics, but now it's a combination of the agent&apos;s action
              AND the environment&apos;s transition dynamics.
              <br />
              <br />
              For example, imagine a robot serving food at an outdoor cafe. If
              the customer is to the right of the robot, the robot&apos;s action
              to move itself to the right greatly increases the probability of
              reaching the customer, but it's not guaranteed. A strong wind
              might push the robot to the left instead. The new state depends on
              both the agent&apos;s chosen action and environmental factors like
              wind.
              <br />
              <br />
              You can think of there being a separate set of transition
              probabilities for each possible action in each state, (unlike MRPs
              where there was only one set of transition probabilities per state
              ). Similarly, rewards now depend on both state AND action as well.
              Taking different actions in the same state can yield different
              expected rewards (unlike MRPs where the reward only depended on
              the current state).
            </p>

            <p className="mb-4">
              In order to talk about actions, I need to define what it means in
              an RL context for an agent to decide to take an action. In order
              to do that, we need to learn about what a policy is. A policy
              fully defines the behavior of an agent, telling the agent what
              action it will take in a given state (or the probabilities for a
              set of available actions it can take in a given state). In chess,
              this is the part of the agent that looks at the board and decides,
              "In this position, I'm going to move the knight to this square,"
              or "I'm going to do something bold and probably regret it."
            </p>

            <p className="mb-4">
              Formally, a policy π is a distribution over actions given states:
              <br />
              <br />
              <span className="block font-mono text-center">
                π(a|s) = P[A<sub>t</sub> = a | S<sub>t</sub> = s]
              </span>
              <br />
              <br />
              This reads as: "the probability that the agent takes action a
              given that it&apos;s currently in state s." There are two types of
              policies: deterministic policies and stochastic policies. A
              <strong> deterministic policy</strong> always chooses the same
              action in a given state, there is no randomness. π(a|s) equals 1
              for one specific action and 0 for all others. A{" "}
              <strong>stochastic policy</strong> assigns probabilities to
              different actions in each state, for example, π(a₁|s) = 0.7 and
              π(a₂|s) = 0.3 means there&apos;s a 70% chance of taking action a₁
              and a 30% chance of taking action a₂ when in state s. The optimal
              policy is what we ultimately want to learn in RL, i.e. the best
              actions an agent can take to maximize its expected total reward.
            </p>

            <p className="mb-4">
              <strong>An important note:</strong> Once we fix a policy π, the
              MDP behaves exactly like an MRP. The transition probabilities
              become policy-specific: P<sup>π</sup>
              <sub>ss'</sub> = Σ<sub>a</sub> π(a|s)P<sup>a</sup>
              <sub>ss'</sub>, and the rewards become policy-specific: R
              <sup>π</sup>
              <sub>s</sub> = Σ<sub>a</sub> π(a|s)R<sup>a</sup>
              <sub>s</sub>.
              <br />
              <br />
              In other words, when the agent commits to following a specific
              policy, we can collapse the state-action dynamics back into state
              only dynamics. The policy tells us the probability of each action
              from each state, so we can compute weighted averages over actions
              to get a single set of transition probabilities and expected
              rewards for each state (instead of needing them for each action in
              a state). This allows us to use the MRP Bellman equation we saw
              earlier for evaluating a specific policy, because once you fix a
              policy, an MDP can be reduced to an MRP (you can derive values
              from states only, instead of state-action pairs). However, usually
              we don't want to compress MDPs into MRPs because we want to know
              the state-action value pairs instead of just the state values. The
              reasons why will be explained later.
            </p>

            <p className="mb-4">
              If the policy is the agent's “what should I do in this state?”
              mechanism, then the value function is its “how good is this
              state?” mechanism. The value function is the agent's prediction of
              how much total reward it expects to collect in the future,
              starting from a particular state. I already discussed value
              functions for MRPs in the MRP section, but there was no way for
              the agent to make any decisions to affect the likelihood of
              transitioning to different states (thereby affecting overall
              reward). With MDPs, the value function is now entirely dependent
              on the agent's policy because your future reward given on a state
              DEPENDS on what moves you are likely to make in future states.
              Bobby Fischer would likely have a very different value function in
              a given chess position than someone who just learned how to play
              chess because Fischer is very likely to make different moves than
              the person who just learned chess. Therefore instead of v(s) as we
              wrote for the MRP, we now write v<sub>π</sub>(s), where π is the
              policy.
            </p>

            <p className="mb-4">
              MDPs have two value functions:
              <br />
              <br />
              <strong>
                1. State-Value Function v<sub>π</sub>(s)
              </strong>
              <br />
              <br />
              <span className="block font-mono text-center">
                v<sub>π</sub>(s) = E<sub>π</sub>[G<sub>t</sub> | S<sub>t</sub> =
                s]
              </span>
              <br />
              <br />
              The state-value function tells us the expected return (total
              discounted reward) starting from state s and then following policy
              π.
              <br />
              <br />
              <strong>Chess analogy:</strong> Imagine you&apos;re looking at a
              specific chess position. The state-value function answers: "If I
              follow my usual strategy (policy) from this position onwards, how
              good is my expected outcome?" A position where you&apos;re up a
              queen might have a high value because following a reasonable
              strategy from there typically leads to winning. A position where
              you&apos;re down a queen has a very low value because your
              strategy probably can&apos;t save you.
              <br />
              <br />
              <strong>
                2. Action-Value Function q<sub>π</sub>(s,a)
              </strong>
              <br />
              <br />
              <span className="block font-mono text-center">
                q<sub>π</sub>(s,a) = E<sub>π</sub>[G<sub>t</sub> | S<sub>t</sub>{" "}
                = s, A<sub>t</sub> = a]
              </span>
              <br />
              <br />
              The action-value function tells us the expected return starting
              from state s, taking action a, and then following policy π
              afterwards.
              <br />
              <br />
              <strong>Chess analogy:</strong> Instead of just evaluating your
              position, you're evaluating a specific move from that position.
              The action-value function answers: "If I make this particular move
              (like knight to c3) and then follow my usual strategy afterwards,
              what's my expected outcome?" You can compare this to another move
              from the same position (like bishop to g5) to see which is better.
              <br />
              <br />
              <strong>Key difference:</strong> v<sub>π</sub>(s) gives you one
              number per state, the average value across all actions you might
              take (weighted by your policy). But the action-value function q
              <sub>π</sub>(s,a) gives you a separate value for each individual
              action available in that state. You might be in a strong position
              overall (high v<sub>π</sub>(s)), but one specific move could be
              disastrous (q<sub>π</sub>(s,a<sub>1</sub>) for that action) while
              another could be brilliant (q<sub>π</sub> (s,a<sub>2</sub>) for a
              different action).
            </p>

            <p id="bellman-expectation-equation" className="mb-4">
              <strong className="block text-center mb-4">
                Bellman Expectation Equation for MDPs
              </strong>
              Just like in MRPs, the value functions in MDPs can be decomposed
              recursively using Bellman Equations. However, since MDPs involve
              policies and actions, we now have two types of Bellman Equations
              for MDPs: the <strong>Bellman Expectation Equation</strong> and
              the <strong>Bellman Optimality Equation</strong>. The Bellman
              Expectation Equation tells us how to evaluate a specific policy π,
              while the Bellman Optimality Equation tells us how to find the
              best possible policy.
              <br />
              <br />
              <strong>For the state-value function:</strong>
              <br />
              <br />
              <span className="block font-mono text-center">
                v<sub>π</sub>(s) = E<sub>π</sub>[R<sub>t+1</sub> + γv
                <sub>π</sub>(S<sub>t+1</sub>) | S<sub>t</sub> = s]
              </span>
              <br />
              <br />
              This says: the value of being in state s under policy π equals the
              expected immediate reward plus the discounted value of wherever
              you end up next, when following policy π.
              <br />
              <br />
              <strong>Chess analogy:</strong> The value of your current board
              position equals: the immediate reward you get (maybe capturing a
              piece) plus the discounted value of the position after your move,
              assuming you continue playing according to your strategy. If your
              strategy says "70% of the time move the knight, 30% of the time
              move the bishop," then the value is the weighted average over
              these possibilities.
              <br />
              <br />
              <strong>For the action-value function:</strong>
              <br />
              <br />
              <span className="block font-mono text-center">
                q<sub>π</sub>(s, a) = E<sub>π</sub>[R<sub>t+1</sub> + γq
                <sub>π</sub>(S<sub>t+1</sub>, A<sub>t+1</sub>) | S<sub>t</sub> =
                s, A<sub>t</sub> = a]
              </span>
              <br />
              <br />
              This says: the value of taking action a in state s under policy π
              equals the expected immediate reward from taking that action plus
              the discounted action-value of the next state-action pair, when
              following policy π.
              <br />
              <br />
              <strong>Chess analogy:</strong> The value of moving your knight to
              c3 equals: any immediate reward from that move (like attacking the
              queen) plus the discounted value of whatever move your strategy
              tells you to make in the resulting position. Notice we&apos;re
              looking ahead to the value of the <em>next move</em> (q at t+1) in
              the next position, not solely the next position (v at t+1).
              <br />
              <br />
              <strong>Important note:</strong> These are called "expectation"
              equations because we&apos;re taking expectations under a{" "}
              <em>specific policy</em> π. They tell us "how good is this state
              (or state-action pair) under this current strategy I'm using?
              (which might not be the best possible strategy that exists)" Soon,
              we&apos;ll learn about the{" "}
              <strong>Bellman Optimality Equation</strong>, which tells us
              "what&apos;s the value under the <em>best possible</em> strategy?"
            </p>

            <p className="mb-4">
              <strong className="block text-center mb-4">
                Visualizing the Bellman Expectation Equations
              </strong>
              Let&apos;s visualize how these recursive relationships work using
              tree diagrams. These diagrams show the "backup" operations, which
              is how we compute values by looking one step ahead and then
              "backing up" that information to the state we're trying to compute
              the value of.
              <br />
              <br />
              <strong>State-Value to Action-Value:</strong>
              <br />
              <br />
              <Image
                src="/images/reinforcement-learning/mdp/mdp-bellman-vs.png"
                alt="Bellman expectation equation showing state-value decomposed into action-values"
                width={500}
                height={300}
                className="mx-auto my-4"
              />
              <br />
              The first diagram shows how to compute v<sub>π</sub>(s) from
              action-values. Starting from state s (top), we consider all
              possible actions a that our policy might choose (shown as dark
              circles at the bottom). The value of state s is the weighted
              average of these action-values, where the weights are the policy
              probabilities π(a|s):
              <br />
              <br />
              <span className="block font-mono text-center">
                v<sub>π</sub>(s) = Σ<sub>a</sub> π(a|s)q<sub>π</sub>(s, a)
              </span>
              <br />
              <br />
              <strong>Chess analogy:</strong> You&apos;re evaluating your
              current position. Your strategy might say "40% chance move the
              knight, 30% move the bishop, 30% castle." The value of your
              position is the weighted average: 0.4 × (value of knight move) +
              0.3 × (value of bishop move) + 0.3 × (value of castling).
              <br />
              <br />
              <strong>Action-Value to State-Value:</strong>
              <br />
              <br />
              <Image
                src="/images/reinforcement-learning/mdp/mdp-bellman-qs.png"
                alt="Bellman expectation equation showing action-value decomposed into next state-values"
                width={500}
                height={300}
                className="mx-auto my-4"
              />
              <br />
              The second diagram shows how to compute q<sub>π</sub>(s,a) from
              state-values. Starting from state-action pair (s,a) at the top
              (dark circle—we&apos;ve committed to action a), the environment
              transitions us to various possible next states s&apos; (light
              circles at bottom). The action-value equals the immediate reward
              plus the discounted sum of next-state values, weighted by
              transition probabilities:
              <br />
              <br />
              <span className="block font-mono text-center">
                q<sub>π</sub>(s, a) = R<sub>s</sub>
                <sup>a</sup> + γ Σ<sub>s&apos;</sub> P<sub>ss&apos;</sub>
                <sup>a</sup>v<sub>π</sub>(s&apos;)
              </span>
              <br />
              <br />
              <strong>Chess analogy:</strong> You&apos;re evaluating moving your
              knight to c3. After this move, your opponent has several possible
              responses (different s&apos;). The value of your knight move
              equals any immediate reward (threatening pieces) plus the average
              value of the positions you&apos;ll face, weighted by how likely
              your opponent is to respond by moving their piece to create said
              positions.
              <br />
              <br />
              <strong>The key insight:</strong> These two equations work
              together! The first expresses v in terms of q, and the second
              expresses q in terms of v. Together, they form a recursive system
              that fully characterizes the value functions under policy π.
              Notice the difference in the circles: dark circles represent
              decision points (where the agent or policy chooses), light circles
              represent chance nodes (where the environment decides based on
              transition probabilities).
            </p>

            <p className="mb-4">
              <strong className="block text-center mb-4">
                The Complete Bellman Expectation Equations: Two Step Backup
              </strong>
              Now let&apos;s see what happens when we combine both relationships
              into complete recursive equations. By substituting one equation
              into the other, we can express each value function entirely in
              terms of itself!
              <br />
              <br />
              <strong>State-Value Full Backup:</strong>
              <br />
              <br />
              <Image
                src="/images/reinforcement-learning/mdp/mdp-bellman-v-q-together.png"
                alt="Complete Bellman expectation equation for state-value showing two-step lookahead"
                width={500}
                height={300}
                className="mx-auto my-4"
              />
              <br />
              Starting from state s (top light circle), we first consider all
              possible actions our policy might choose (middle dark circles),
              then for each action, we look at all possible next states s&apos;
              (bottom light circles). This gives us:
              <br />
              <br />
              <span className="block font-mono text-center">
                v<sub>π</sub>(s) = Σ<sub>a</sub> π(a|s)(R<sub>s</sub>
                <sup>a</sup> + γ Σ<sub>s&apos;</sub> P<sub>ss&apos;</sub>
                <sup>a</sup>v<sub>π</sub>(s&apos;))
              </span>
              <br />
              <br />
              <strong>Chess analogy:</strong> To evaluate your position, you
              consider all moves your strategy might make (weighted by
              probability). For each move, you look at all positions your
              opponent might create (weighted by likelihood). The value is:
              (immediate reward from moves) + (average value of resulting
              positions). This is a two-step lookahead: position → your possible
              moves → opponent&apos;s responses.
              <br />
              <br />
              <strong>Action-Value Full Backup:</strong>
              <br />
              <br />
              <Image
                src="/images/reinforcement-learning/mdp/mdp-bellman-q-v-together.png"
                alt="Complete Bellman expectation equation for action-value showing two-step lookahead"
                width={500}
                height={300}
                className="mx-auto my-4"
              />
              <br />
              Starting from state-action pair (s,a) (top dark circle where
              we&apos;ve chosen action a), the environment transitions us to
              possible next states s&apos; (middle light circles), and then from
              each s&apos;, our policy considers possible next actions a&apos;
              (bottom dark circles). This gives us:
              <br />
              <br />
              <span className="block font-mono text-center">
                q<sub>π</sub>(s, a) = R<sub>s</sub>
                <sup>a</sup> + γ Σ<sub>s&apos;</sub> P<sub>ss&apos;</sub>
                <sup>a</sup> Σ<sub>a&apos;</sub> π(a&apos;|s&apos;)q<sub>π</sub>
                (s&apos;, a&apos;)
              </span>
              <br />
              <br />
              <strong>Chess analogy:</strong> You&apos;ve decided to move your
              knight to c3. Your opponent responds, creating various positions.
              From each position, your strategy determines your next move. The
              value of "knight to c3" is: (immediate reward) + (average over
              opponent responses i.e. all the s' states, and then the value of
              your follow up moves in each of these hypothetical resulting
              position). This is also a two-step lookahead: your move →
              opponent&apos;s response → your next move.
            </p>

            <p className="mb-4">
              <strong className="block text-center mb-4">
                Comparing Policies: What Makes One Better Than Another?
              </strong>
              Before we talk about finding the <em>best</em> policy, we need to
              define what "better" even means. In reinforcement learning, we say
              that one policy π is better than or equal to another policy π' if
              its value function is greater than or equal to the other policy's
              value function FOR ALL STATES:
              <br />
              <br />
              <span className="block font-mono text-center">
                π ≥ π' if v<sub>π</sub>(s) ≥ v<sub>π'</sub>(s) for all s ∈ S
              </span>
              <br />
              <br />
              Notice the "for all states" part, this is crucial. A policy isn't
              just better because it does well in <em>some</em> positions; it
              has to do at least as well everywhere. If there is even ONE state
              where the other policy has a higher value, then we can't say which
              policy is better.
              <br />
              <br />
              <strong>Chess analogy:</strong> Think of Bobby Fischer versus
              inferior chess players (Soviet Grand Masters for instance).
              Fischer's policy (his chess strategy) is better because from{" "}
              <em>any</em> board position you give him, he'll achieve an equal
              or better expected outcome than the Soviet Grand Master. It
              doesn't matter if the position is a complex middlegame, an endgame
              with just a few pieces, or a weird opening you've never seen,
              Fischer just plays every move better, meaning v<sub>Fischer</sub>
              (s) ≥ v<sub>SovietGrandMaster</sub>(s) for every position s. There
              are no positions you can cherry pick specific positions where the
              Soviet Grand Master does better. (Yes, I know Fischer wasn't
              better than the Soviet Grand Masters in all positions, but it gets
              the point across)
              <br />
              <br />
              This definition of "better" leads us naturally to ask: is there a
              policy that's better than or equal to <em>all</em> other policies?
              Remarkably, the answer is yes! We call such a policy an{" "}
              <strong>optimal policy</strong>, denoted π<sub>*</sub>. An optimal
              policy satisfies:
              <br />
              <br />
              <span className="block font-mono text-center">
                π<sub>*</sub> ≥ π for all policies π
              </span>
              <br />
              <br />
              In other words, v<sub>π*</sub>(s) ≥ v<sub>π</sub>(s) for every
              state s and every other policy π. This optimal policy achieves the
              maximum possible value in every state. (Note: there can be
              multiple optimal policies that are equally good, think of a game
              where picking up an object with your right hand versus your left
              hand both lead to the same outcome).
              <br />
              <br />
            </p>

            <p className="mb-4">
              <strong className="block text-center mb-4">
                Optimal Value Functions
              </strong>
              So far we&apos;ve been evaluating specific policies, "how good is
              this PARTICULAR strategy?" But the ultimate goal in RL is to find
              the <em>best possible policy</em> "what is the BEST strategy that
              will give me the most total cumulative reward". To do this, we
              need to be able to compare policy values, which brings us to
              optimal value functions, which tell us the maximum value
              achievable in any state or state-action pair.
              <br />
              <br />
              The <strong>optimal state-value function</strong> v<sub>*</sub>(s)
              is the maximum value function over all policies (you look at every
              policy and choose the one gives you the highest total return at
              every state):
              <br />
              <br />
              <span className="block font-mono text-center">
                v<sub>*</sub>(s) = max<sub>π</sub> v<sub>π</sub>(s)
              </span>
              <br />
              <br />
              <strong>Chess analogy:</strong> Think of Bobby Fischer&apos;s
              strategy as an optimal policy π<sub>*</sub>, the best possible way
              to play chess. When Fischer follows his strategy from any
              position, he achieves the best possible outcome. The optimal
              state-value function v<sub>*</sub>(s) tells us the value of any
              position, if from that point forward we started following
              Fischer&apos;s strategy. So if you're up a queen, v<sub>*</sub>(s)
              is very high because even with perfect play from your opponent,
              you'll probably win. If you're down material hopelessly, v
              <sub>*</sub>(s) is low because even Fischer himself can't save
              that position.
              <br />
              <br />
              Here's the key distinction: π<sub>*</sub> (the optimal policy)
              tells you <em>what moves to make</em>, while v<sub>*</sub>(s) (the
              optimal value function) tells you{" "}
              <em>how good the resulting position will be</em> when you follow
              that optimal policy. They're related, but slightly different.
              Optimal policy is the <em>best</em> strategy, while{" "}
              <em>optimal value</em> is the value you get at each position after
              following that strategy.
              <br />
              <br />
              For example, imagine a very difficult position where one brilliant
              move wins but every other move loses. Under Fischer's optimal
              policy, v<sub>*</sub>(s) for this position is high because his
              strategy (the optimal policy) would find the winning move. But
              under a beginner's policy, v<sub>beginner</sub>(s) for the same
              position would be low because their strategy (a suboptimal policy)
              wouldn't find that move, they&apos;d play one of the losing
              alternatives instead.
              <br />
              <br />
              The <strong>optimal action-value function</strong> q<sub>*</sub>
              (s,a) is the maximum action-value function over all policies :
              <br />
              <br />
              <span className="block font-mono text-center">
                q<sub>*</sub>(s, a) = max<sub>π</sub> q<sub>π</sub>(s, a)
              </span>
              <br />
              <br />
              <strong>Chess analogy:</strong> While v<sub>*</sub>(s) tells you
              "how good is this position with perfect play", q<sub>*</sub>(s,a)
              tells you "how good is this specific move, assuming perfect play
              afterwards". The key difference is that v<sub>*</sub>(s) assumes
              you make the best possible move immediately starting from a given
              position, while q<sub>*</sub> (s,a) lets you evaluate ANY move
              (even bad ones) from a given position and see what happens if you
              play perfectly after that move. For example, from a given
              position, moving your knight to c3 might be terrible, moving your
              bishop to g5 might be brilliant. v<sub>*</sub>(s) only tells you
              the value when you pick the best move (bishop to g5), but q
              <sub>*</sub>(s,a) gives you separate values for BOTH moves: q
              <sub>*</sub>(s, <em>knight to c3</em>) might be low, while q
              <sub>*</sub>(s, <em>bishop to g5</em>) might be high. This lets
              you compare different moves from the same position.
              <br />
              <br />
              <strong>Why this matters:</strong> The optimal value function
              specifies the best possible performance in the MDP. Once we know q
              <sub>*</sub>, we&apos;ve essentially "solved" the MDP, i.e. we
              know exactly how good each state-action pair can possibly be, and
              therefore we know exactly which action to take in any state in
              order to maximize our total reward (we know the optimal policy is
              just choosing the action with the highest q<sub>*</sub>
              every time). The challenge is computing these optimal values,
              which we&apos;ll tackle with the Bellman Optimality Equation.
            </p>

            <p id="bellman-optimality-equation" className="mb-4">
              <strong className="block text-center mb-4">
                Bellman Optimality Equation for MDPs
              </strong>
              We now know that if we somehow already had q<sub>*</sub>, finding
              the optimal policy would be almost unfairly easy: in each state,
              just pick the action with the highest q<sub>*</sub> value. Done.
              <br />
              <br />
              So the real question is: how do we actually find q<sub>*</sub> in
              the first place?
              <br />
              <br />
              This is where the Bellman Optimality Equation enters the story.
              <br />
              <br />
              Recall what the Bellman <em>Expectation</em> Equation does.
              It&apos;s a tool for <em>evaluating</em> a specific policy π. If
              you hand it a policy, it computes the value function for that
              policy by taking a weighted average over actions, where each
              action is weighted by how likely the policy is to choose it,
              π(a|s). In other words, it answers:
              <br />
              <br />
              <em>
                &quot;If I promise to behave according to this policy, how good
                will my life be in each state?&quot;
              </em>
              <br />
              <br />
              But now we&apos;re after something more ambitious. We don&apos;t
              want to evaluate a policy, we want to <em>find</em> the best one.
              <br />
              <br />
              The Bellman Optimality Equation does that with one small but
              profound change: instead of averaging over actions according to
              some policy, it takes the <strong>maximum</strong> over all
              possible actions. Conceptually, it&apos;s saying:
              <br />
              <br />
              <em>
                &quot;In each state, assume I always make the best possible next
                move.&quot;
              </em>
              <br />
              <br />
              <strong>
                Recursive Structure For Bellman Optimality Equation
              </strong>
              <br />
              <br />
              Just like the Bellman Expectation Equation, the Bellman Optimality
              Equation is recursive: q<sub>*</sub>(s, a) is defined in terms of
              q<sub>*</sub>(s', a'). The structure is identical: immediate
              reward plus discounted future value. The only difference is that
              instead of taking a weighted average over actions (according to
              policy π), we take the MAXIMUM over actions. which transforms the
              equation about evaluating a given policy into an equation that
              characterizes the best possible policy.
              <br />
              <br />
              <strong>For the optimal state-value function:</strong>
              <br />
              <br />
              <span className="block font-mono text-center mb-4">
                v<sub>*</sub>(s) = max<sub>a</sub> E[R<sub>t+1</sub> + γv
                <sub>*</sub>(S<sub>t+1</sub>) | S<sub>t</sub> = s, A<sub>t</sub>{" "}
                = a]
              </span>
              This says: the optimal value of being in state s equals the
              expected immediate reward plus the discounted optimal value of
              wherever you end up next, when taking the BEST action. The key
              difference from the expectation equation is when now have the max
              <sub>a</sub>, which means that instead of averaging over a
              policy's action probabilities (giving certain actions some
              probability of occurring even though they aren't the best), we're
              now picking the action that maximizes the right-hand side of the
              equation (any actions that are not considered the best will get a
              probability of 0 now).
              <br />
              <br />
              <strong>Chess analogy:</strong> The optimal value v<sub>*</sub>(s)
              tells you how good your current position is assuming you play
              perfectly from here onwards. To compute it, you look at ALL
              possible moves, evaluate the value of each move (immediate reward
              + discounted optimal value of resulting position), and take the
              maximum. That maximum IS v<sub>*</sub>(s), it&apos;s a number
              representing "how good is this position with perfect play".
              <br />
              <br />
              The optimal POLICY π<sub>*</sub>(s) is the actual move that
              achieves this maximum, it&apos;s the decision rule that says "in
              this position, make THIS move." A suboptimal policy might tell you
              to sacrifice your queen for no reason, giving you a low value. But
              π<sub>*</sub> always picks the move that maximizes v<sub>*</sub>.
              <br />
              <br />
              <strong>For the optimal action-value function:</strong>
              <br />
              <br />
              <span className="block font-mono text-center mb-4">
                q<sub>*</sub>(s, a) = E[R<sub>t+1</sub> + γ max<sub>a'</sub> q
                <sub>*</sub>(S<sub>t+1</sub>, a') | S<sub>t</sub> = s, A
                <sub>t</sub> = a]
              </span>
              This says: the optimal value of taking action a in state s equals
              the expected immediate reward from that action plus the discounted
              value of taking the BEST action in the next state. Notice that the
              max<sub>a'</sub> appears inside the expectation. Conceptually,
              this means that for each possible next state S<sub>t+1</sub> the
              environment might send us to, we assume we will choose the best
              possible next action a', and then we average over all those
              possible next states.
              <br />
              <br />
              <strong>Chess analogy:</strong> The optimal value of moving your
              knight to c3 equals: the immediate reward from that move
              (capturing material, improving position) plus the discounted value
              of making the BEST possible move in the resulting position. You
              commit to knight to c3 now, but after your opponent responds,
              you'll choose optimally from whatever position results.
              <br />
              <br />
              <strong>Important note:</strong> These are called "optimality"
              equations because we're maximizing over actions rather than
              following a specific policy. They tell us "what's the best
              possible value achievable from this state?" The policy that
              achieves these optimal values is called the optimal policy π
              <sub>*</sub>.
            </p>

            <p className="mb-4">
              <strong className="block text-center mb-4">
                The Bellman Optimality Equations: A Visual Breakdown
              </strong>
              Now let's see how the optimal value functions relate to each other
              through what's called the Bellman Optimality Equations. These
              equations give us a recursive way to compute optimal values by
              breaking them down into immediate rewards and future optimal
              values.
              <br />
              <br />
              <strong>
                Equation 1: Optimal State-Value in terms of Optimal
                Action-Values
              </strong>
              <br />
              <br />
              <Image
                src="/images/reinforcement-learning/mdp/mdp-bellman-optimal-v-star.png"
                alt="Bellman Optimality for v*"
                width={500}
                height={300}
                className="mx-auto my-4"
              />
              <span className="block font-mono text-center mb-4">
                v<sub>*</sub>(s) = max<sub>a</sub> q<sub>*</sub>(s, a)
              </span>
              This diagram shows the one-step lookahead from state s. The hollow
              circle at the top represents state s, and the filled circles below
              represent the different actions you could take from s. The
              equation says: "The optimal value of state s is simply the value
              of the best action you can take from s." In other words, if you're
              playing optimally, you'll always pick the action with the highest
              q*-value, so v*(s) equals that maximum.
              <br />
              <br />
              <strong>Chess analogy:</strong> If you're in a chess position and
              want to know v*(s), the value of that position with perfect play,
              you look at all your possible moves (the filled circles), evaluate
              each one assuming perfect play afterwards (each q*(s,a)), and pick
              the best. That best move's value IS the position's value.
              <br />
              <br />
              <strong>
                Equation 2: Optimal Action-Value in terms of Optimal
                State-Values
              </strong>
              <br />
              <br />
              <Image
                src="/images/reinforcement-learning/mdp/mdp-bellman-optimal-q-star.png"
                alt="Bellman Optimality for q*"
                width={500}
                height={300}
                className="mx-auto my-4"
              />
              <span className="block font-mono text-center mb-4">
                q<sub>*</sub>(s, a) = R<sub>s</sub>
                <sup>a</sup> + γ Σ<sub>s'∈S</sub> P<sub>ss'</sub>
                <sup>a</sup> v<sub>*</sub>(s')
              </span>
              This diagram shows what happens after you take action a from state
              s. The filled circle represents the state-action pair (s,a), and
              taking that action gets you a reward r and transitions you to a
              next state s' (the hollow circle). The equation says: "The optimal
              value of taking action a in state s equals the immediate reward
              you get, plus the discounted expected optimal value of wherever
              you end up."
            </p>

            <p className="mb-4">
              <strong>Chess analogy:</strong> To evaluate q*(s, move knight to
              c3), you look at: (1) whether this move immediately captures
              material or improves position (the reward r), plus (2) the optimal
              value of the board position that results after the move,
              accounting for your opponent's possible responses (the Σ P
              <sub>ss'</sub>
              <sup>a</sup> v*(s') term). Even if the move itself doesn't win
              material, it might lead to a position with very high v*(s'),
              making it the best move overall.
            </p>

            <p className="mb-4">
              <strong className="block text-center mb-4">
                The Complete Bellman Optimality Equations: Two Step Lookahead
              </strong>
              Now let's see what happens when we combine both optimal value
              functions into complete recursive equations. Just like with the
              Bellman Expectation Equations, by substituting one equation into
              the other, we can express each optimal value function entirely in
              terms of itself!
              <br />
              <br />
              <strong>Optimal State-Value Full Lookahead:</strong>
              <br />
              <br />
              <Image
                src="/images/reinforcement-learning/mdp/mdp-bellman-optimal-v-q-together.png"
                alt="Complete Bellman Optimality for v*"
                width={800}
                height={600}
                className="mx-auto mb-4"
              />
              <span className="block font-mono text-center mb-4">
                v<sub>*</sub>(s) = max<sub>a</sub> (R<sub>s</sub>
                <sup>a</sup> + γ Σ<sub>s'∈S</sub> P<sub>ss'</sub>
                <sup>a</sup> v<sub>*</sub>(s'))
              </span>
              Starting from state s (top hollow circle), we consider all
              possible actions we could take (middle dark circles), and for each
              action, we look at all possible next states s' (bottom hollow
              circles). But instead of averaging over a policy's action
              probabilities like in the expectation equation, we MAX over
              actions. This gives us:
              <br />
              <br />
              <strong>Chess analogy:</strong> To find the optimal value of your
              position, you: (1) look at every possible move you could make, (2)
              for each move, evaluate (immediate reward + discounted optimal
              value of all resulting positions weighted by likelihood), and (3)
              pick whichever move gives the highest total. This is a two-step
              lookahead: position → your possible moves → opponent's responses
              (which determine resulting positions).
              <br />
              <br />
              <strong>Optimal Action-Value Full Lookahead:</strong>
              <br />
              <br />
              <Image
                src="/images/reinforcement-learning/mdp/mdp-bellman-optimal-q-v-together.png"
                alt="Complete Bellman Optimality for q*"
                width={800}
                height={600}
                className="mx-auto mb-4"
              />
              <span className="block font-mono text-center mb-4">
                q<sub>*</sub>(s, a) = R<sub>s</sub>
                <sup>a</sup> + γ Σ<sub>s'∈S</sub> P<sub>ss'</sub>
                <sup>a</sup> max<sub>a'</sub> q<sub>*</sub>(s', a')
              </span>
              Starting from state-action pair (s,a) where we've committed to
              action a (top dark circle), the environment transitions us to
              possible next states s' (middle hollow circles), and then from
              each s', we consider all possible next actions a' (bottom dark
              circles) and MAX over them. This gives us:
              <br />
              <br />
              <strong>Chess analogy:</strong> You've decided to move your knight
              to c3. Your opponent responds, creating various positions. From
              each resulting position, you evaluate the best move you could
              make. The value of "knight to c3" is: (immediate reward) +
              (average over opponent's responses of the best move you can make
              in each resulting position). This is also a two-step lookahead:
              your move → opponent's response → your optimal next move.
              <br />
              <br />
              <strong>Key difference from Expectation Equations:</strong> Notice
              the max operator instead of the Σ π(a|s) weighting. In the
              expectation equations, we averaged over action probabilities
              according to a specific policy π. In the optimality equations, we
              simply choose the best action. This is what makes these equations
              tell us about the BEST POSSIBLE performance rather than the
              performance of a specific strategy.
            </p>

            <p className="mb-4">
              At this point, if you&apos;re feeling clever, you might think:
              &quot;Wait a second. Haven&apos;t we seen something like this
              before?&quot;
              <br />
              <br />
              With the Bellman <em>Expectation</em> Equation, life was good.
              Once we fixed a policy π, we could compress the whole MDP into a
              simple Markov Reward Process. The actions disappeared (because we
              averaged over them using π(a|s)), and we were left with a clean,
              state-only equation:
              <br />
              <br />
              <span className="block font-mono text-center mb-4">
                Iv<sub>π</sub> = r<sub>π</sub> + γ P<sub>π</sub> v<sub>π</sub>
              </span>
              Which we could rearrange into:
              <br />
              <br />
              <span className="block font-mono text-center mb-4">
                (I − γP<sub>π</sub>) v<sub>π</sub> = r<sub>π</sub>
              </span>
              And then solve in one glorious line of linear algebra:
              <br />
              <br />
              <span className="block font-mono text-center mb-4">
                v<sub>π</sub> = (I − γP<sub>π</sub>)<sup>−1</sup> r<sub>π</sub>
              </span>
              <br />
              <br />
              So naturally, your brain now tries to pull the exact same stunt
              here.
              <br />
              <br />
              We have nice, tidy recursive equations for v<sub>*</sub> and q
              <sub>*</sub>. Surely we can just stack all the values into a giant
              vector, write down one massive system of equations, invert a
              matrix, and go home early. Right?
              <br />
              <br />
              WRONG! the moment we replaced &quot;average over actions using a
              policy&quot; with &quot;take the max over actions,&quot; the whole
              equation stopped being linear because the max operator itself
              isn't linear. Now we can&apos;t do our linear algebra tricks to
              solve the system.
            </p>
            <p className="mb-4">
              This brings us to a slightly uncomfortable conclusion.
              <br />
              <br />
              The Bellman Optimality Equation is <em>non-linear</em>. Because of
              the max operator, there is{" "}
              <em>no general closed-form solution</em>. There is no magical
              matrix inverse we can write down. There is no single algebraic
              trick that takes us straight to v<sub>*</sub> or q<sub>*</sub> in
              one shot.
              <br />
              <br />
              So if we can&apos;t solve these equations directly… what do we do
              instead?
              <br />
              <br />
              Rather than solving the Bellman Optimality Equation outright, all
              practical reinforcement-learning algorithms take the same basic
              approach: they start with a guess for the value function and then
              repeatedly update that guess until things settle down and stop
              changing.
              <br />
              <br />
              Over the years, people have come up with several different ways of
              doing exactly this. The four most important ones, and the ones
              you&apos;ll see over and over again in reinforcement learning,
              are:
              <br />
              <br />
              <strong>Policy Iteration</strong>
              <br />
              <br />
              <strong>Value Iteration</strong>
              <br />
              <br />
              <strong>SARSA</strong>
              <br />
              <br />
              <strong>Q-learning</strong>
              <br />
              <br />
              In the next sections, we&apos;ll go through each of these methods
              slowly and carefully, and you&apos;ll see how they all fall out
              naturally from the same Bellman equations you just met.
            </p>
          </section>

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
              probabilities, and a discount factor, which are all the
              ingredients that specify the environment itself, as well as the
              actions an agent can take to influence its environment.
              <br />
              <br />
              On top of that, we introduced policies, value functions, and
              Bellman equations, the mathematical tools that let us describe how
              an agent behaves inside that environment and what it means for
              that behavior to be bad, good or optimal.
              <br />
              <br />
              In other words, we built a beautiful mathematical description of
              both the world the agent lives in and the decision-making problem
              the agent is trying to solve inside that world.
              <br />
              <br />
              But there was one small problem.
              <br />
              <br />
              We never actually explained how to <em>solve</em> any of these
              problems.
              <br />
              <br />
              So far, everything has been descriptive. We know what an optimal
              policy is. We know what v<sub>*</sub> and q<sub>*</sub> are
              supposed to represent. We even wrote down equations that
              characterize them. But none of that tells us how to build an agent
              that can actually compute those quantities and act optimally in a
              real environment.
              <br />
              <br />
              That&apos;s what this section is about.
              <br />
              <br />
              In this chapter (and the ones that follow it), we&apos;re going to
              shift from <em>definitions</em> to <em>solution-methods</em>, i.e.
              we will go from &quot;what does the optimal solution look
              like?&quot; to &quot;how do we actually find it?&quot;
              <br />
              <br />
              The collection of techniques we&apos;ll start with is called
              <strong>dynamic programming</strong>. These are algorithms that
              solve MDPs by repeatedly applying the Bellman equations until the
              value functions and policies settle down and stop changing.
              <br />
              <br />
              This section is organized into seven parts:
              <br />
              <br />
              <strong>1) Introduction</strong>
              <br />
              A high-level overview of what dynamic programming is, why it
              exists, and how it fits into the bigger reinforcement-learning
              picture. (You are here.)
              <br />
              <br />
              <strong>2) History of Dynamic Programming</strong>
              <br />
              A short detour into where all of this came from, who Richard
              Bellman was, what problem he was trying to solve, why he invented
              dynamic programming, and why he gave it such a strangely generic
              name.
              <br />
              <br />
              <strong>3) Policy Evaluation</strong>
              <br />
              Given a fixed policy π, how do we compute its value function v
              <sub>π</sub>? This is the simplest dynamic-programming problem and
              the foundation that everything else is built on.
              <br />
              <br />
              <strong>4) Policy Iteration</strong>
              <br />
              How to alternate between evaluating a policy and improving it,
              until we find the optimal policy for an MDP.
              <br />
              <br />
              <strong>5) Value Iteration</strong>
              <br />
              How to skip explicit policies altogether and iteratively apply the
              Bellman optimality update only on the value function until the
              value function converges to the optimal value function.
              <br />
              <br />
              <strong>6) Extensions to Dynamic Programming</strong>
              <br />
              Practical tweaks and variations that make these methods more
              efficient or more flexible in real problems.
              <br />
              <br />
              <strong>7) Contraction Mapping</strong>
              <br />
              The mathematical reason all of this actually works. This is where
              we prove that the Bellman updates converge and that the fixed
              points they converge to are unique.
              <br />
              <br />
              By the end of this section, you&apos;ll have a complete,
              end-to-end story for how to go from an abstract MDP to an actual
              algorithm that computes optimal behavior, and you&apos;ll see how
              all of the major reinforcement-learning methods are really just
              different ways of iterating Bellman&apos;s equations.
            </p>

            <h2 id="dp-history" className="text-2xl font-bold mb-6 text-center">
              History of Dynamic Programming
            </h2>

            <p className="mb-4">
              Before we turn dynamic programming into algorithms and code,
              it&apos;s worth taking a short detour into where all of this
              actually came from. We will be using this article as our source:{" "}
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
              <strong> Richard Bellman</strong> in the late 1940s and early
              1950s, while he was working as a consultant at the RAND
              Corporation on problems funded by the U.S. Air Force. His work
              centered around <em>multistage decision problems</em>: problems
              where a system evolves over time, you make a sequence of
              decisions, and each decision affects what options you have later,
              exactly the kind of structure that Markov Decision Processes are
              designed to capture.
              <br />
              <br />
              The name is a bit mysterious, so let&apos;s demystify it by
              looking at why it was chosen at all. At the time, the Secretary of
              Defense was Charles Wilson, which meant he ultimately controlled
              the funding for the U.S. Air Force, which in turn funded the RAND
              Corporation, which was Bellman&apos;s employer.
              <br />
              <br />
              Wilson hated the words &quot;mathematical&quot; and
              &quot;research&quot;, so Bellman needed a name that wouldn&apos;t
              immediately get his funding pulled. He chose <em>dynamic</em>{" "}
              because it was a way to describe something that changes over time
              and has multiple stages, but that also had a positive connotation.
              He chose <em>programming</em> because it sounded much more
              practical than &quot;research&quot; and made it sound like he was
              actually solving real problems.
              <br />
              <br />
              So <em>dynamic programming</em> is really just a fancy way of
              saying: a method for solving multistage decision problems.
              <br />
              <br />
              Examples of the kinds of things he worked on included how to best
              allocate resources over time, controlling engineering systems,
              planning production schedules, and deciding how to operate complex
              systems optimally over many steps into the future.
              <br />
              <br />
              What frustrated Bellman was that the standard mathematical tools
              of the time were great at proving that optimal solutions{" "}
              <em>exist</em>, but terrible at actually <em>computing</em> them.
              <br />
              <br />
              Bellman&apos;s core insight was something he later called the
              <strong> Principle of Optimality</strong>. From this, a second
              important idea, emphasized later in computer science, is what we
              now call <strong>overlapping subproblems</strong>. These two
              concepts are the key to computing optimal solutions.
              <br />
              <br />
              In informal terms, the Principle of Optimality says:
              <br />
              <br />
              <em>
                If a sequence of decisions is optimal, then no matter where you
                choose to start within that sequence, the remaining decisions
                must themselves form an optimal sequence for the state you start
                from.
              </em>
              <br />
              <br />
              This sounds obvious in hindsight, but it&apos;s the entire logical
              foundation of dynamic programming.
              <br />
              <br />
              Here&apos;s a simple intuition. Suppose your goal is to run a mile
              in the shortest possible time. If your overall mile-long running
              plan is truly optimal, then the way you run the last half-mile
              must also be optimal for the state you&apos;re in at the halfway
              point, and the way you run the last tenth of a mile, and so on,
              all the way to the last step. If you could suddenly switch to a
              better running strategy at any point, then your original mile-long
              strategy wasn&apos;t actually optimal to begin with.
              <br />
              <br />
              That&apos;s the Principle of Optimality in disguise.
              <br />
              <br />
              The second idea, overlapping subproblems, is about what happens
              when you try to turn this insight into an actual algorithm.
              <br />
              <br />
              When you break a big multistage decision problem into smaller
              subproblems, you don&apos;t just get a bunch of completely new
              problems. You get the <em>same</em> subproblems over and over
              again.
              <br />
              <br />
              For example, different long-horizon plans might all require you to
              solve the question: “What is the best way to behave from this
              particular state onward?” If you naively recompute the answer to
              that question every single time it comes up, your algorithm will
              be hopelessly inefficient.
              <br />
              <br />
              Overlapping subproblems just means that the subproblems you need
              to solve keep repeating. So it&apos;s worth solving each one once
              and reusing the result.
              <br />
              <br />
              Put together, these two ideas explain why dynamic programming
              works at all.
              <br />
              <br />
              The Principle of Optimality tells you that optimal solutions can
              be built out of optimal sub-solutions.
              <br />
              <br />
              Overlapping subproblems tells you that those sub-solutions keep
              reappearing, so you should store and reuse them instead of solving
              the same thing again and again.
              <br />
              <br />
              It&apos;s these two ideas that let you break a huge, complicated
              decision problem into smaller subproblems and solve it backwards
              or forwards one stage at a time.
              <br />
              <br />
              If that idea is starting to sound suspiciously like the Bellman
              equations, that&apos;s not a coincidence. The Bellman equations
              are just the mathematical expression of the Principle of
              Optimality.
              <br />
              <br />
              Over the 1950s, Bellman and others developed dynamic programming
              into a systematic framework for solving multistage decision
              problems using iterative numerical methods.
              <br />
              <br />
              The philosophy was simple:
              <br />
              <br />
              <em>
                Build an algorithm that breaks a hard problem into smaller,
                easier-to-digest subproblems, solves those, cache them to be
                reused as frequently as possible, and then keep iterating toward
                the full solution.
              </em>
              <br />
              <br />
              That philosophy is exactly what we&apos;re about to lean on in the
              rest of this section. Everything that follows, policy evaluation,
              policy iteration, value iteration, Q-learning, etc, is just a
              modern incarnation of Bellman&apos;s original idea: break a
              long-horizon decision problem into smaller pieces, write down a
              consistency equation between stages, and solve it iteratively.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
