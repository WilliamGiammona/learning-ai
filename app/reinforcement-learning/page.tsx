// app/reinforcement-learning/page.tsx

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
              In this section I'm going to talk about Reinforcement Learning,
              which is basically the art of teaching a computer how to make good
              decisions. The goal is simple (and also not simple at all), at
              every moment in time the agent should pick the action that will
              eventually lead to the most overall reward. Not, “the most reward
              right now” (short-sighted reward), but “the most reward when
              everything is said and done” (far-sighted reward). To keep things
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
              which we’ll talk about later.
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
              In chess, this is very intuitive. The current board position is
              the state. You don’t need to know how the pieces got there, how
              many blunders were made, or how confident the players felt on move
              12. All that matters for deciding the next move is the position in
              front of you right now. Two games that arrive at the same board
              position are, from the agent’s perspective, the same situation.
              That board position is a compressed summary of the entire history
              of the game, and it contains everything the agent needs to decide
              what move (action) to make next.
            </p>

            <p className="mb-4">
              <strong id="who-decides-state" className="block text-center">
                Who Decides What Information Is Important Enough To Go Into A
                State, And What Isn't?
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
              <strong className="block text-center">
                Seeing Everything vs. Guessing a Lot
              </strong>
              <br />
              Up until now, we’ve been quietly assuming something very
              convenient: that the agent can see everything that matters. Chess
              is like this. The entire board is right there in front of you. No
              hidden pieces. No secret information. No fog of war. This is
              what’s called a <strong>fully observable environment</strong>.
              This makes it easier to have states that follow the markov
              property (contain everything you need to know to make the best
              decision).
            </p>

            <p className="mb-4">
              Unfortunately, most real-world problems are not nearly aren't
              fully observable. In many situations, the agent is forced to
              operate with incomplete information. This is called a{" "}
              <strong>partially observable environment</strong>. Think about
              trading in the stock market. You don’t know what’s happening
              inside companies. You don’t know what decisions executives are
              about to make. You don’t know what governments are planning, what
              competitors are building, or what unexpected event is about to
              drop out of the sky. You’re making decisions based on noisy,
              delayed, and incomplete signals. From the agent’s point of view,
              it’s like trying to play chess while only seeing half the board
              and occasionally being lied to. In these settings, the agent has
              to guess, infer, and build beliefs about what might be going on
              behind the scenes—which makes the problem dramatically harder.
              This makes it much harder (sometimes even impossible) to have
              states that follow the markov property.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
