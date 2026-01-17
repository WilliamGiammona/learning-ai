// app/reinforcement-learning/page.tsx

import Link from "next/link";

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
                  href="#reinforcement-learning-problem"
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
                  href="#markov-decision-process"
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
                </ul>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <section id="reinforcement-learning-problem" className="mb-12">
            <h1 className="text-3xl font-bold mb-6 text-center">
              Introduction to Reinforcement Learning
            </h1>
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
              happens next: P(S<sub>t+1</sub>), given the current state: | S
              <sub>t</sub>, is the same as the probability of what happens next:
              P(S<sub>t+1</sub>) given the entire history: | S<sub>1</sub>, S
              <sub>2</sub>, … , S<sub>t</sub>. In other words,{" "}
              <em>
                the current state already contains all the useful information
                from the past
              </em>
              . Anything before that is just extra unnecessary baggage.
            </p>
            <p className="mb-4">
              In chess, this is very intuitive. The current board position
              (where each piece currently is on the board) is the state that has
              the Markov Property. You don&apos;t need to know how the pieces
              got there, how many blunders were made, or how confident the
              players felt on move 12. All that matters for deciding the next
              move is the position in front of you right now. Two games that
              arrive at the same board position are, from the agent&apos;s
              perspective, the same situation. That board position is a
              compressed summary of the entire history of the game, and it
              contains everything the agent needs to decide what move (action)
              to make next.
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
              diving into learning RL. Next, we will discuss Markov Decision
              Processes in detail.
            </p>
          </section>
          <section id="markov-decision-process" className="mb-12">
            <h1 className="text-3xl font-bold mb-6 text-center">
              Markov Decision Process
            </h1>
            <p className="mb-4">
              At a very high level, Reinforcement Learning is really about
              dealing with sequences of dependent events and wanting to learn
              about them by using probability. There are two broad kinds of
              sequences of events: the first is sequences of{" "}
              <strong> independent events</strong>, things like coin flips or
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
              as depending only on the present state, and probability becomes
              usable again. So, if you have a problem that deals with sequences
              of dependent events, and you want to apply probability theory to
              them (like in RL), MDPs are the mathematics you need.
            </p>

            <p className="mb-4">
              <strong id="why-history-matters" className="block text-center">
                A Quick Detour: Why Learn The History Of Math
              </strong>
              <br />
              Before we jump into the math, it&apos;s worth asking a slightly
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
              expected value), first proven by Jacob Bernouli in 1713. It was
              the most important concept of probability theory until Andrey
              Markov&apos;s. Bernouli had proved that the Law of Large Numbers
              applied to INDEPENDENT events, but it was an open question as to
              whether it also applied to DEPENDENT events. Nekrasov argued that
              it didn&apos;t, and that if you observed the Law of Large Numbers,
              you could infer that the underlying events MUST be independent.
              Nekrasov looked at large amounts of data about marriage rates,
              crime rates, and birth rates and saw that they seemed to follow
              the law of large numbers. This data came from decisions to get
              married, decisions to commit crime, and decisions to have
              children. Thus because they followed the law of large numbers, the
              decisions causing them MUST be independent (since he believed only
              independent events could follow the Law of Large Numbers). Because
              they were independent, they must be decisions of free will, and
              hence free will existed and was something that could be measured
              mathamatically using the Law of Large Numbers.
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
              famous Russian poem, "Eugene Onegin", by early 19th century anti
              Tsarist Russian poet (and father of modern Russian literature),
              Alexander Pushkin. The idea was that the probability of the next
              letter in the poem being a consonant or a vowel was clearly
              dependent upon what the current letter in the poem was. Now he
              just needed to prove that consonants and vowels in the poem
              followed the law of large numbers, and that would show that
              dependent events can also follow the law of large numbers (not
              just independent events).
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
              shown even though the letter was dependent on the previous letter
              in the sequence. To do this he created what is now known as a{" "}
              <strong>Markov Chain</strong>. He had each letter be a state. He
              then had an arrow from one letter to the next (one state to the
              next). This arrow was his transition probability. Now he needed to
              find the transition probabilities. How did he do this? Let&apos;s
              take a look at the transition probability for vowel to vowel as an
              example.
              <br />
              <br />
              The probability of a vowel is .43 and the probability of 2
              consecutive vowels was .06, so he divided .06 by .43 to get .13
              Thus the probability of transitioning TO a vowel FROM a vowel is
              13 percent (and hence 87 percent of going from a state of a vowel
              to a state of a consonant). This was done for all the state
              transitions where consonant to consanant was .33 and consonant to
              vowel was .67. So this transition probability matrix tells me
              about the probability of "chaining" vowel and consonant states
              together, hence the name Markov chain.
            </p>

            <p className="mb-4">
              When you follow this transition matrix and start at a random
              starting point in the poem, you initially get wildly different
              ratios for the number of consonants and vowels you have (just like
              with independent events like flipping a coin, you might initially
              get 6 heads and 2 tails instead of the 50/50 split predicted).
              However, given a long enough length of letters, you eventually
              converge to .43 for Vowels and .57 for Consonants (just like how
              with a large enough amount of coin flips you converge to a 50/50
              split). Thus Markov had shown that the law of large numbers
              applied to this dependent system, showing that Nekrasov was wrong
              and that you cannot just assume if a system follows the law of
              large numbers that it must be independent. This was groundbreaking
              because it showed that dependent systems aren't just chaotic and
              unpredictable, they can be modeled with mathematical structure and
              have predictable long-term behavior. Before Markov, mathematicians
              had no systematic way to handle dependent sequences of events,
              they would need the ENTIRE history in order to make calculations.
              <br />
              <br />
              To recap, we have this new mathematical object, the Markov Chain,
              where you have states (vowels and consonants) and a transition
              probability matrix that tells you the probability of going from
              state one to state two (vowel to vowel, vowel to consonant,
              consonant to vowel, and consonant to consonant). Using this
              mathematical object, you can predict that the ratio of vowels and
              consonants to the total amount of letters will converge to a
              stable long term ratio (an analogue of the law of large numbers
              for dependent processes) to a ratio of .43 for vowels and .57 for
              consonants. Hence, Markov used this Markov Chain to prove that
              dependent events also follow the law of large numbers and that
              there were in fact mathematical structures that could be used to
              model dependent systems apart from the old way of needing the
              ENTIRE history to do anything useful. In the 1950s American
              mathmetician Richard Bellman extended Markov chains by adding
              decisions and rewards, giving rise to Markov Decision Processes.
            </p>
            <p>
              Fast forward to the 1950s: American mathematician Richard Bellman
              looked at Markov Chains and thought "what if we add decisions and
              rewards?" This expanded the notion of Markov Chains/Processes into
              Markov Decision Processes, the mathematical foundation of
              reinforcement learning.
            </p>

            <p className="mb-4">
              <strong id="mp" className="block text-center">
                Markov Process
              </strong>
              <br />
              Ok, enough history, now back to the mathematics. A quick note,
              Markov created the Markov Chain, described in the history section
              above, which deals with discrete (countable) space. When you
              include discrete AND continuous space, its called a "Markov
              Process." One of the most central ideas of a Markov Process is
              that it follows the Markov Property, which says that the future
              depends only on the present, not on the entire past. In math form,
              it looks like this:
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
                information from the past history
              </em>
              . Anything before that is just extra unnecessary baggage.
            </p>
            <p className="mb=4">
              The two fundamental objects in any Markov Process are:
              <br />
              1) The state - a compression of all important dependent
              information in the history up to that point
              <br />
              2) The transition probability - represented as a matrix for
              discrete states or a probability distribution for continuous
              states, that tells you the probability of going from one state to
              the next
              <br />
              <br />
              Formally, a <strong>Markov Process</strong> is defined as a tuple
              (S, P) where:
              <br />
              <br />• <strong>S</strong> is a finite set of states
              <br />• <strong>P</strong> is the state transition probability
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
            <br />
            <p className="mb-4">
              For discrete states, we can organize all these transition
              probabilities into a <strong>state transition matrix</strong> 𝒫.
              The matrix is structured so that:
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
              For continuous states, we use a probability distribution (called a
              transition kernel) instead of a matrix, but the concept is the
              same.
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
              like victory for chekcmating an opponent in chess, or defeat for
              being checkmated. In RL, we want to express the environment fully.
              The environment has states, state transitions, and a
              reward/penalty given to us by the environment. There can be one
              reward at the end, or several rewards. Remember in RL we want the
              agent to learn which actions get us to states that give us the
              largest total reward. However, environment rewards in the future
              aren&apos;t worth as much as those right now (just like how in
              finance a dollar today is worth than a dollar tomorrow), so we use
              a discount factor, γ (gamma), for future rewards. These are all
              the ingredients we need to model our environment.
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
              This notation means: Let&apos;s break down the reward function
              notation:{" "}
              <strong>
                R<sub>s</sub> = E[R<sub>t+1</sub> | S<sub>t</sub> = s]
              </strong>
              <br />
              <br />•{" "}
              <strong>
                R<sub>s</sub>
              </strong>
              : The reward associated with state s
              <br />• <strong>E[...]</strong>: Expected value (the average)
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
              Putting it together: "The reward for state s equals the{" "}
              <em>expected </em>
              reward you'll receive at the next time step, given that you're
              currently in state s."
              <br />
              <br />
              Two important notes: First, the expectation E[...] is there
              because rewards can be stochastic (random). You might not always
              get exactly the same reward from the same state - maybe sometimes
              you get 10, sometimes 12. R<sub>s</sub> is the average.
              <br />
              <br />
              Second, notice it&apos;s R<sub>t+1</sub> (next time step), not R
              <sub>t</sub> (current time step). Why this notation? The answer is
              that it&apos;s just about how we index things in the sequence -
              the difference is mostly bookkeeping. In practice, there are
              different ways to think about when you receive rewards:
              <br />
              <br />
              <strong>
                Convention 1 (more intuitive): Reward is a property of states
              </strong>
              <br />
              You enter state s and immediately receive reward R(s). Like in a
              video game: you step on a tile and instantly get points.
              <br />
              <br />
              <strong>
                Convention 2 (less intuitive): Reward happens "between" states
              </strong>
              <br />
              You're in state s at time t, you transition to the next state, you
              receive reward R<sub>t+1</sub>, and now you're in state s' at time
              t+1. This is the convention I&apos;m using with the R
              <sub>t+1</sub> | S<sub>t</sub> = s notation.
              <br />
              <br />
              Both conventions are mathematically equivalent. I&apos;m using
              Convention 2 here because it&apos;s the standard notation used in
              the main RL textbook, "Reinforcement Learning: An Introduction" by
              Sutton and Barto.
              <br />
              <br />
              The key difference between the two conventions is timing:
              Convention 1 gives you the reward immediately upon entering a
              state, while Convention 2 gives it to you as you leave (indexed at
              the next time step). But wait! For convention 2, if you only get
              the reward after leaving a state, then for the last state in an
              episode (the terminal state), you won&apos;t get the reward b/c
              the episode will end before you ever leave that last state (thus
              not getting the reward for the last state). Because of this, the
              reward from convention 1 and convention 2 won&apos;t equal
              eachother right?? No, not right. There is a special rule for
              convention 2 that covers the case for terminal states (states that
              are either at the end of an episode, or that you never leave
              from). Convention 2 gives you the reward of the terminal state
              immediately when entering it. Therefore the final reward will be
              the reward for leaving the penultimate (one before the last one)
              state ADDED to the reward you get when entering this special
              terminal state where you don&apos;t have to leave it to get the
              reward.
              <br />
              <br />
              <strong>Example showing both conventions:</strong>
              <br />
              To clear up any confusion, here is an example for both
              conventions. Suppose we have three states with rewards: state s
              gives a reward of 5, state s' gives a reward of 10, and terminal
              state s'' gives a reward of -4.
              <br />
              <br />
              <strong>Convention 1 (reward upon entering):</strong>
              <br />
              - t=0: Enter state s → get reward 5
              <br />
              - t=1: Transition to state s' → get reward 10
              <br />
              - t=2: Transition to terminal state s'' → get reward -4
              <br />- <strong>Total reward: 5 + 10 + (-4) = 11</strong>
              <br />
              <br />
              <strong>Convention 2 (Sutton & Barto):</strong>
              <br />
              - t=0: In state s → no reward yet
              <br />- t=1: Transition to state s' → receive R<sub>1</sub> = 5
              (the reward for having been in s)
              <br />- t=2: Transition to terminal state s'' → receive R
              <sub>2</sub> = 5 (this combines the reward for having been in s',
              which is 10, AND receive R<sub>3</sub> immediately upon entering
              the terminal state (because the terminal state is special) with
              reward of -4), giving us the total reward for that timestep of:
              (10 - 4) which is 6.
              <br />- <strong>Total reward: 5 + 6 = 11</strong> ✓
              <br />
              <br />
              <br /> <br />• <strong>γ</strong> is a discount factor, where γ ∈
              [0,1]
              <br />
              <br />
              The discount factor γ determines how much we value future rewards
              relative to immediate rewards. When we calculate the total return,
              G<sub>t</sub>, we don&apos;t just add up all future rewards
              equally (unlyess we make gamma equal to 1), we discount them based
              on how far in the future they occur:
              <br />
              <br />
              <span className="block font-mono text-center">
                G<sub>t</sub> = r<sub>t+1</sub> + γr<sub>t+2</sub> + γ²r
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
              reliable than one you'll get in 2 steps, so it should be weighted
              less.
              <br />
              <br />
              2) <strong>Mathematical convenience</strong>: Discounting ensures
              that infinite sums of rewards converge to a finite number, making
              the math work better. Without discounting (γ = 1), an infinite
              episode would have infinite return, making the math more difficult
              to work with.
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
              <br />- If <strong>γ = 0</strong>: The agent only cares about
              immediate rewards, completely ignoring the future (myopic)
              <br />- If <strong>γ = 1</strong>: All future rewards count
              equally, no matter how far away (far-sighted, only works for
              finite episodes)
              <br />- If <strong>γ = 0.9</strong>: A reward 10 steps away is
              worth (0.9)<sup>10</sup> ≈ 0.35 of what that same reward would be
              worth right now
              <br />
              <br />
              The choice of γ is a design decision that significantly affects
              what the agent learns to do. A higher γ makes the agent more
              patient and considerate of long-term consequences.
              <br />
              <br />
              To recap, the reward function R<sub>s</sub> tells us the expected
              immediate reward for being in state s (The value function which
              will be discussed later gives us the TOTAL expected reward per
              state under a specific policy). Note that it&apos;s written as an
              expectation E[...] because rewards can be stochastic
              (probabilistic), sometimes you receive different rewards from the
              same state. The discount factor γ determines how much we value
              future rewards. Together with the states and transitions from our
              Markov Process, these four components fully specify the
              environment. We now have a way to meaningfully categorize aspects
              of the environment (states), probability functions on the
              probability of going from one particular state to another, and
              rewards the environment gives for each state. Remember though,
              there are two characters in our story, the environment AND the
              agent, and the agent also gets to take actions in states that
              influence the probability of transitioning to subsequent states
              (This is what we will look at in the MDP section).
            </p>
            <p className="mb4">
              <strong id="the-state" className="block text-center">
                The History Of The Inertia Of Bad Conventions
              </strong>
              <br />
              So, Why would anyone ever use convention 2 when convention 1 is so
              much easier? People should just adopt convention 1 right? To
              answer this, lets look at the history of how we came up with the
              name sine and cosine, as well as why we use the ratio pi when
              doing probalems involving a radius instead of a diameter.
            </p>
            <p className="mb=4">
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
              "bowstring," to describe what we now call the sine function. This
              made sense geometrically because the arc of a circle looks like a
              bow, and the chord (or half-chord) connecting its endpoints looks
              like the bowstring.
              <br />
              <br />
              When Arab scholars translated these Indian mathematical texts,
              they transliterated the Sanskrit word <em>jīvá</em> (a synonym of
              jyā) into Arabic as <em>jiba</em> (جيب). Arabic is written without
              short vowels, so <em>jiba</em> was written simply as the
              consonants "j-y-b" (جيب). Later Arab scholars who didn&apos;t know
              this was a transliterated technical term read these same
              consonants as <em>jayb</em> (جيب), a common Arabic word meaning
              "pocket."
              <br />
              <br />
              In the 12th century, when European scholars translated Arabic
              mathematical texts into Latin, they translated <em>jayb</em>{" "}
              (pocket) as the Latin word <em>sinus</em>, which also means
              "pocket". Finally, in the 1590s, English mathematician Thomas Fale
              borrowed the Latin <em>sinus</em> into English as "sine", and
              that&apos;s the word we still use today, instead of using the
              words bowstring and co-bowstring (which make much more sense)
              because of centuries of convention.
            </p>
            <p className="mb-4">
              <br />
              There&apos;s an ongoing debate in mathematics about whether we
              should use π = 3.14159... or τ (tau) = 6.28318... as our
              fundamental circle constant. Many mathematicians argue that τ
              makes more sense because it represents the ratio of a
              circle&apos;s circumference to its <em>radius</em> (C = τr), which
              would make many formulas cleaner. A full circle would simply be τ
              radians instead of 2π radians, a quarter circle would be τ/4
              instead of π/2, and so on.
              <br />
              <br />
              So why do we use π = 3.14159... universally instead? The answer
              lies with 18th-century mathematician Leonhard Euler and one
              influential book. Welsh mathematician William Jones first
              introduced the symbol π in 1706 to represent the ratio of
              circumference to diameter. But it was Euler who popularized it,
              however{" "}
              <strong>
                Euler actually used both values pragmatically depending on what
                he was working with.
              </strong>
              <br />
              <br />
              When Euler was working with problems involving{" "}
              <strong>diameter</strong>, he used π = 3.14... (circumference to
              diameter ratio). When he was working with problems involving{" "}
              <strong>radius</strong>, he used π = 6.28... (circumference to
              radius ratio). This makes perfect sense, use whichever constant is
              most convenient for the problem at hand! In different works
              throughout the 1720s-1740s, you can find him using both values
              depending on the mathematical context.
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
              simply adopted the π = 3.14... his book as the universal standard
              for everything. They stopped adjusting based on whether they were
              working with radius or diameter. That&apos;s why we&apos;re now
              stuck with the unit circle looking like this: instead of this:
              along with many other confusing and inelegant complications when
              using a diameter based constant for radius based problems.
              <br />
              <br />
              Euler&apos;s flexible approach was, of course, the sensible
              approach, but we continue to have a standardized value because of
              centuries of convention.
            </p>
            <p className="mb=4">
              I think you can see where I&apos;m going with this. There are many
              areas of mathematics where notation is used that is less intuitive
              for learners simply because of convention. The reward at timestep
              t+1 convention (Convention 2) is now standard in RL for similar
              historical reasons, i.e. because it appeared in the most
              influential textbook (Sutton & Barto) in the 90s and everyone
              adopted it.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
