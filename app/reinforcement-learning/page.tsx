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
                  className="text-blue-600 hover:text-blue-800 underline block"
                >
                  Introduction
                </a>
              </li>
              {/* Add more sections here later */}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <section id="reinforcement-learning-problem" className="mb-12">
            <h1 className="text-3xl font-bold mb-6">Introduction</h1>
            <p className="mb-4">
              In this section, I'm going to talk about Reinforcement Learning,
              which is basically the art of teaching a computer how to make good
              decisions. The goal is simple (and also not simple at all), at
              every moment in time the agent should pick the action that will
              eventually lead to the most overall reward. Not “the most reward
              right now”, but “the most reward when everything is said and
              done”. To keep things concrete, I'll use chess as our main
              example.
            </p>

            <p className="mb-4">
              <strong>The Characters</strong>
              <br />
              <br />
              In Reinforcement Learning, there are two main characters in our
              story. The first is the <strong>agent</strong>, which is the
              decision-maker (think: the chess player). The agent's goal is to
              maximize his reward (make the best chess moves that lead to
              checkmating his opponent) The second is the{" "}
              <strong>environment</strong>, which is everything the agent is
              dealing with (think: the chessboard, the pieces, and the opponent
              trying to ruin your plans). The agent looks at the situation,
              makes a move it thinks is most likely to lead to having the best
              possible chance of checkmating its opponent, and then the
              environment reacts by either rewarding the agent, punishing it, or
              just shrugging indifferently.
            </p>

            <p className="mb-4">
              <strong>The Data</strong>
              <br />
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
          </section>
        </main>
      </div>
    </div>
  );
}
