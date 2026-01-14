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
                      The Agent's Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#value-function"
                      className="text-blue-600 hover:text-blue-800 underline block"
                    >
                      The Agent's Value Function
                    </a>
                  </li>
                  <li>
                    <a
                      href="#model"
                      className="text-blue-600 hover:text-blue-800 underline block"
                    >
                      The Agent's Model
                    </a>
                  </li>
                  <li>
                    <a
                      href="#dont-need-all-pieces"
                      className="text-blue-600 hover:text-blue-800 underline block"
                    >
                      You Don't Need All The Pieces
                    </a>
                  </li>
                </ul>
              </li>
              <a
                href="#markov-decision-process"
                className="text-blue-600 hover:text-blue-800 underline block font-medium"
              >
                Markov Decision Process
              </a>
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
              In this section I'm going to talk about Reinforcement Learning,
              which is basically the art of teaching a computer how to make good
              decisions. The goal is simple (and also not simple at all), at
              every moment in time the agent should pick the action that will
              eventually lead to the most overall reward. Not, “the most reward
              right now” (short sighted reward), but “the most reward when
              everything is said and done” (far sighted reward). To keep things
              concrete, I'll use chess as our main example.
            </p>
            <p className="mb-4">
              <strong id="the-characters" className="block text-center">
                The Characters
              </strong>
              <br />
              In Reinforcement Learning, there are two main characters in our
              story. The first is the <strong>agent</strong>, which is the
              decision-maker (think: the chess player). The agent's goal is to
              maximize its reward (make the best chess moves that lead to
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
              which we’ll talk about later. The environment also determines the
              pieces on the board, how each piece moves, etc. The agent learns
              how the environment operates by trial and error.
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
              that goes like this: the agent observes what’s going on, takes an
              action, and then gets a reward. Over time, this builds up a long
              sequence of “I saw this → I did that → this happened.” (The chess
              player looks at his current position, figures out how good or bad
              it is, and then tries to make the best move in that position).
              That growing chain of experiences is called the agent’s{" "}
              <strong>history</strong>, and it’s basically the agent’s memory of
              everything it has ever tried and how the world responded. (Think
              of the history as every move that's been played during the chess
              game and an evaluation of how good each position was per move)
              Reinforcement Learning is the process of using that history to
              slowly, painfully, and eventually impressively figure out how to
              make better and better decisions.
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
              everything that actually matters into a single snapshot of “what’s
              going on right now.”
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
              the Markov Property. You don’t need to know how the pieces got
              there, how many blunders were made, or how confident the players
              felt on move 12. All that matters for deciding the next move is
              the position in front of you right now. Two games that arrive at
              the same board position are, from the agent’s perspective, the
              same situation. That board position is a compressed summary of the
              entire history of the game, and it contains everything the agent
              needs to decide what move (action) to make next.
            </p>
            <p className="mb-4">
              <strong id="who-decides-state" className="block text-center">
                Who Decides What Goes Into the State?
              </strong>
              <br />
              At this point, a very reasonable question pops up: how does the
              agent actually know what belongs in the state? Who decided that
              the board position matters in chess, but the player’s mood or what
              they had for breakfast does not? The answer is that sometimes a
              human does, and sometimes the agent has to learn that on its own.
              In the early days of Reinforcement Learning, a human would
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
              it might exploit loopholes you didn’t even realize existed. This
              is why state and reward are basically the two pressure points of
              Reinforcement Learning. Get them right, and the agent can solve
              extremely difficult problems.
            </p>
            <p className="mb-4">
              <strong id="seeing-vs-guessing" className="block text-center">
                Seeing Everything vs Guessing
              </strong>
              <br />
              Up until now, we’ve been quietly assuming something very
              convenient: that the agent can see everything in the environment.
              Chess is like this. The entire board is right there in front of
              you. No hidden pieces. No secret information. No fog of war. This
              is what’s called a <strong>fully observable environment</strong>.
              This makes it easier to have states that follow the markov
              property (contain everything you need to know to make the best
              decision).
            </p>
            <p className="mb-4">
              Unfortunately, most real-world problems are not fully observable.
              In many situations, the agent is forced to operate with incomplete
              information about the environment. This is called a{" "}
              <strong>partially observable environment</strong>. Think about
              playing poker. You don’t know what cards the other players are
              holding. You don’t know who is bluffing, who is scared, or who is
              quietly setting a trap. You only see your own hand and the cards
              on the table. You’re making decisions based on incomplete
              information. From the agent’s point of view, it’s like trying to
              play chess while only seeing half the board and occasionally being
              lied to. In these settings, the agent has to guess and build
              beliefs about what might be going on behind the scenes. This makes
              it much harder (sometimes even impossible) for the agent to have
              states that follow the markov property.
            </p>

            <p className="mb-4">
              <strong className="block text-center">Agent Components</strong>
              <br />
              What are the components that make up the agent? The first of these
              is the <strong>policy</strong>, which is basically the agent’s
              rulebook for what to do in each state. The second is the{" "}
              <strong>value function</strong>, which is the agent’s opinionated
              ranking system for how much future reward it expects to get from a
              given state (and sometimes from a specific action in that state).
              Finally , there is the agent's <strong>model</strong> of the
              environment, which is an internal simulation of how the
              environment it's in actually works.
            </p>
            <p className="mb-4">
              <strong id="policy" className="block text-center">
                The Agent's Policy
              </strong>
              <br />
              Let’s zoom in on the first of those components: the{" "}
              <strong>policy</strong>. The policy is the agent’s behavior. It’s
              the thing that actually answers the question, “Okay, I’m in this
              situation… now what?” Formally, a policy is just a mapping from
              states to actions, but in human terms, it’s the agent’s way of
              making decisions. In chess, this is the part of the agent that
              looks at the board and decides, “In this position, I’m going to
              move the knight to this square,” or “I’m going to do something
              bold and probably regret it.”
            </p>
            <p className="mb-4">
              Some agents are very decisive. They use what’s called a{" "}
              <strong>deterministic policy</strong>, which means that for every
              state, there is only one action they will take. In a given
              position, they will make the same move every time. There is no
              randomness. In math form, this is written as:
              <br />
              <span className="block text-center font-mono my-2">a = π(s)</span>
              <br />
              where the agent's policy, π, looks at its current state, s, and
              selects the action, a, that it will take.
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
              where the agent’s policy, π, looks at its current state, s, and
              assigns a probability to each possible action, a, that is allowed
              in that state.
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
                The Agent's Value Function
              </strong>
              <br />
              If the policy is the agent’s “what should I do in this state?”
              mechanism, then the <strong>value function</strong> is its “how
              good is this state?” mechanism. The value function is the agent’s
              prediction of how much total reward it expects to collect in the
              future, starting from this particular state. In chess terms, this
              is the part of the agent that looks at a position and thinks, “I’m
              probably winning in this position” or “Uh oh, I'm probably losing
              in this position.” Remember, it's not only looking at how much
              reward it will get on the next move, but in the entire game
              starting from this position. For example, if I sacrifice my queen
              and only look one step ahead, my value function may be very low
              because losing a queen is usually bad, but if it will lead to a
              position that ends in checkmate in 6 moves, the value function
              ranks that state highly because it's looking at TOTAL reward from
              that state, not just the immediate reward. Also please note that
              value functions MUST be tied to policies, because your future
              reward given on a state DEPENDS on what moves you are likely to
              make in future states. Bobby Fischer would likely have a very
              different value function in a given chess position than someone
              who just learned how to play chess. Mathamatically the value
              function is written as{" "}
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
              environment. This is basically the agent’s internal guess of how
              the world works. If the policy is the agent’s rulebook for what to
              do in a state, and the value function tells it how much expected
              total future reward it expects to get from a state, then the model
              is its guess of what the rules of the environment are. It answers
              questions like: “If I do this, what will probably happen next?”
              For example, if I drop this object, gravity will make it fall
              towards the ground.
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
              and <strong>rewards</strong>. You’re constantly running little
              simulations of “If I do this in my current state, then I have a
              certain likelihood of transitioning into this particular new
              state.” Mathematically, for a transition model P, and immediate
              Reward function, R:
              <br />
              <span className="block text-center font-mono my-2">
                state transition = P(s' | s, a) &nbsp;&nbsp;and&nbsp;&nbsp;
                immediate reward = R(s, a)
              </span>
              <br />
              Which just means: the probability of landing in next state{" "}
              <em>s'</em> if I’m in state <em>s</em> and take action <em>a</em>,
              and the expected (immediate not total) reward I’ll get for taking
              action a in state s.
            </p>
            <p className="mb-4">
              <strong id="dont-need-all-pieces" className="block text-center">
                You Don’t Need All The Pieces
              </strong>
              <br />
              Up until now, we’ve been talking about <strong>
                policies
              </strong>, <strong>value functions</strong>, and{" "}
              <strong>models</strong> assuming every RL agent has all three of
              these. Real agents can be more minimalist. Some agents don’t
              explicitly learn a policy at all, some agents don’t explicitly
              learn a value function, some don’t bother building a model of the
              environment, and some have all three.
            </p>
            <p className="mb-4">
              The first big split is value-based vs policy-based vs ctor-critic.
              A value-based agent doesn't need a rulebook (policy) on what to do
              in each state, it just wants to know which states are good and
              which are bad to be in. It learns a value function and then picks
              the action with the highest value. Thus, it has a value function,
              but the policy is <em>implicit</em>, i.e. “do whatever has the
              biggest value.” A policy-based agent is the opposite. It learns
              the policy without giving states an explicit value. An
              actor-critic agent uses both a policy and a value function. The
              "actor" is the policy (the thing that chooses actions), and the
              ""critic""is the value function (the thing that judges how good
              things are).
            </p>

            <p className="mb-4">
              Whether an agent is value based, policy based, or actor critic
              doesn't determine whether its model-free or model-based and vice
              versa. That's because the model is just about whether the agent
              tries to learn the <em>rules of the environment</em> or not.
            </p>
            <p className="mb-4">
              A model-free agent doesn't need to predict the future. It learns
              what works by experience/trial and error, using reward signals,
              without explicitly learning how the environment transitions from{" "}
              <span className="font-mono">(s, a)</span> to{" "}
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
              is “I’ll find out via trial and error.”
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
              At this point, a very natural question should be forming in the
              back of your mind: okay, we have agents, states, actions,
              environments, rewards, policies, value functions, models, etc, but
              what are we actually trying to <em>do</em> with all of this? What
              kinds of questions are we trying to answer? Are we just collecting
              symbols for fun, or is there some bigger structure hiding
              underneath?
            </p>

            <p className="mb-4">
              The kinds of questions we care about in Reinforcement Learning are
              things like: “Is this decision better than that one?”, “If I start
              here and keep going, how much reward can I expect to get?”, “Is
              there a best way to behave in this world?”, and “Can I take
              actions to do better than whatever I’m currently doing?” These are
              all questions about{" "}
              <strong>sequences of decisions over time</strong>. Not one action
              and one reward, but long chains of actions and rewards.
            </p>

            <p className="mb-4">
              It turns out that there is a very clean and very powerful
              mathematical way to organize exactly these kinds of questions.
              It’s called a <strong>Markov Decision Process</strong>, or{" "}
              <strong>MDP</strong>. An MDP is just a way of formally writing
              down the ingredients we’ve already been talking about: states,
              actions, transitions, and rewards, all stitched together with the
              idea that the present contains everything you need to know about
              the future.
            </p>

            <p className="mb-4">
              In other words, an MDP is the math version of: “Here is the
              situation (state), here are the things you can do (actions), here
              is how the world reacts, and here is how good or bad that reaction
              is (rewards).” Once you write a problem in this form, an enormous
              amount of theory suddenly becomes available. Questions like “What
              is the best possible behavior?” and “How should I change my
              behavior to get more reward?” can now be answered mathematically.
            </p>

            <p className="mb-4">
              I'm not going to dive into the machinery just yet. For now, the
              important thing to know is this: MDPs are the framework that turns
              ‘learning by experience (trial and error)’ into a solvable
              problem. They are the reason we can talk afbout optimal policies,
              expected returns, and improvement at all. First though, let's
              travel back in time to the turn of the 20th century to learn about
              the history of MDPs.
            </p>

            <p className="mb-4">
              <strong id="why-history-matters" className="block text-center">
                A Quick Detour: Why Learn The History Of Math
              </strong>
              <br />
              Before we jump into the math, it’s worth asking a slightly
              philosophical question: why bother learning the history behind
              these ideas at all? Why not just memorize the formulas and move
              on? The answer is that our brains are terrible at remembering
              abstract symbols in isolation, but they are very good at
              remembering stories. When you know <em>why</em> an idea was
              invented, what problem it was trying to solve, and what kind of
              human was behind it, it becomes much easier to both learn and
              remember. The other reason is that I enjoy it and I'm the one
              writing this!
            </p>

            <p className="mb-4">
              <strong id="markov-history" className="block text-center">
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
              <strong id="markov-history" className="block text-center">
                A History of MDPs
              </strong>
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
              Markov's. Bernouli had proved that the Law of Large Numbers
              applied to INDEPENDENT events, but it was an open question as to
              whether it also applied to DEPENDENT events. Nekrasov argued that
              it didn't, and that if you observed the Law of Large Numbers, you
              could infer that the underlying events MUST be independent.
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
              Markov then set out to prove that Nekrasov's claims were wrong and
              needed to show that dependent events could also follow the law of
              large numbers. This would break Nekrasov's link that because
              marriage, crime, and birth rates followed the law of large
              numbers, that they needed to be independent. This would prove to
              be a huge milestone in the world of probability because it would
              show that you can still use probability theory on dependent events
              (including RL).
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
              find the transition probabilities. How did he do this? Let's take
              a look at the transition probability for vowel to vowel as an
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
              together, hence the name Markov chain. When you follow this
              transition matrix, you eventually converge to .43 for Vowels and
              .57 for Consonants, the exact ratio Markov counted.
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
              consonants. When Markov checked if those were the true ratios,
              they were. Hence, Markov used this Markov Chain to prove that
              dependent events also follow the law of large numbers (thereby
              proving Nekrasov's assumptions and conclusions to be incorrect).
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
