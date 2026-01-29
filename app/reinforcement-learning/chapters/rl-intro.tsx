import Link from "next/link";

export default function RlIntro() {
  return (
    <section id="ch-one-reinforcement-learning-problem" className="mb-12">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Introduction to Reinforcement Learning
      </h1>
      <p className="mb-6">
        The first nine lectures in this section are based on the excellent
        Reinforcement Learning course by David Silver. You can find the original
        course materials here at{" "}
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
        In this section I&apos;m going to talk about Reinforcement Learning,
        which is basically the art of teaching a computer how to make good
        decisions. The goal is simple (and also not simple at all), at every
        moment in time the agent should pick the action that will eventually
        lead to the most overall reward. Not, “the most reward right now” (short
        sighted reward), but “the most reward when everything is said and done”
        (far sighted reward). To keep things concrete, I'll use chess as our
        main example.
      </p>
      <p className="mb-4">
        <strong id="the-characters" className="block text-center">
          The Characters
        </strong>
        <br />
        In Reinforcement Learning, there are two main characters in our story.
        The first is the <strong>agent</strong>, which is the decision-maker
        (think: the chess player). The agent&apos;s goal is to maximize its
        reward (make the best chess moves that lead to checkmating its opponent)
        The second is the <strong>environment</strong>, which is everything the
        agent is dealing with (think: the chessboard, the pieces, and the
        opponent trying to ruin your plans). The agent looks at the position,
        makes a move it thinks is most likely to lead to having the best
        possible chance of checkmating its opponent, and then the environment
        reacts (opposing player makes their move) by either rewarding the agent
        (good position for the agent) or punishing it (bad position for the
        agent). In chess the opponent is part of the environment, although in
        more complex settings there can be an important distinction between the
        environment and other agents, which we&apos;ll talk about later. The
        environment also determines the pieces on the board, how each piece
        moves, etc. The agent learns how the environment operates by trial and
        error.
      </p>
      <p className="mb-4">
        <strong id="the-data" className="block text-center">
          The Data
        </strong>
        <br />
        Now, in order for the agent to figure out which actions are brilliant
        and which ones are terrible, it needs data. What kind of data does it
        need? How is it organized? The data can best be thought of as the agent
        making an observation, recieving a reward (positive or negative) from
        the environment, and then the agent taking an action it thinks will lead
        to the most future cumulative reward from this moment onwards. This
        creates a repeating loop that goes like this: the agent observes
        what&apos;s going on, takes an action, and then gets a reward. Over
        time, this builds up a long sequence of “I saw this → I did that → this
        happened.” (The chess player looks at his current position, figures out
        how good or bad it is, and then tries to make the best move in that
        position). That growing chain of experiences is called the agent&apos;s{" "}
        <strong>history</strong>, and it&apos;s basically the agent&apos;s
        memory of everything it has ever tried and how the world responded.
        (Think of the history as every move that&apos;s been played during the
        chess game and an evaluation of how good each position was per move)
        Reinforcement Learning is the process of using that history to slowly,
        painfully, and eventually impressively figure out how to make better and
        better decisions.
      </p>
      <p className="mb-4">
        <strong id="the-state" className="block text-center">
          The State
        </strong>
        <br />
        The history is great to use as a way to select actions in theory, but is
        terrible in practice. Imagine trying to make every decision in your life
        by mentally replaying every single thing that has ever happened to you.
        So instead, Reinforcement Learning uses a clever shortcut called the{" "}
        <strong>state</strong>. The idea is: instead of carrying around the
        whole messy history, we compress everything that actually matters into a
        single snapshot of “what&apos;s going on right now.”
      </p>
      <p className="mb-4">
        Formally, this is captured by something called the{" "}
        <strong>Markov property</strong> (named after Andrey Markov), which says
        that the future depends only on the present, not on the entire past. In
        math form, it looks like this:
        <br />
        <br />
        <span className="block font-mono text-center">
          P(S<sub>t+1</sub> | S<sub>t</sub>) = P(S<sub>t+1</sub> | S<sub>1</sub>
          , S<sub>2</sub>, … , S<sub>t</sub>)
        </span>
        <br />
        In normal human language, this just means: the probability of what
        happens in the next state: P(S<sub>t+1</sub>), given the current state:
        | S<sub>t</sub>, is the same as the probability of what happens next:
        P(S<sub>t+1</sub>) given the entire history: | S<sub>1</sub>, S
        <sub>2</sub>, … , S<sub>t</sub>. In other words,{" "}
        <em>
          the current state was able to compress all the useful dependent
          information from all the past history and use all that compressed
          information to make probability judgements about the immediate future.
        </em>
        . Anything before that is just extra unnecessary baggage.
      </p>
      <p className="mb-4">
        In chess, the idea of a state (board position) is very intuitive. The
        current board position (where each piece currently is on the board) is
        the state that has the Markov Property. You don&apos;t need to know how
        the pieces got there, how many blunders were made, or how confident the
        players felt on move 12. All that matters for deciding the next move is
        the position in front of you right now. Two games that arrive at the
        same board position are, from the agent&apos;s perspective, the same
        situation. That board position is a compressed summary of the entire
        history of the game, and it contains everything the agent needs to
        decide what move (action) to make next (Yea I know technically en
        passant and a few other rules don't follow this, but you get the idea).
      </p>
      <p className="mb-4">
        <strong id="who-decides-state" className="block text-center">
          Who Decides What Goes Into the State?
        </strong>
        <br />
        At this point, a very reasonable question pops up: how does the agent
        actually know what belongs in the state? Who decided that the board
        position matters in chess, but the player&apos;s mood or what they had
        for breakfast does not? The answer is that sometimes a human does, and
        sometimes the agent has to learn that on its own. In the early days of
        Reinforcement Learning, a human would carefully choose what information
        the agent gets to see. “Here, you can have position, velocity, and
        angle. No more, no less.”
      </p>
      <p className="mb-4">
        In modern Reinforcement Learning, especially with deep neural networks,
        things get a lot more interesting. Instead of spoon-feeding the agent a
        neatly packaged state, we often just dump a pile of raw data on it,
        including pixels, sensor readings, board encodings, etc, and say, “Good
        luck.” The agent is then forced to figure out for itself what actually
        matters enough to be incorporated into its state. It does this in the
        only way it knows how: by following the reward. If paying attention to
        something helps it get more reward, that thing becomes important. If it
        doesn’t, it quietly fades into irrelevance.
      </p>
      <p className="mb-4">
        If the reward is badly designed, the agent will learn that the wrong
        things are “important.” In chess, if a bad reward is given (trying to
        handcode values for each piece for example), the agent might fixate on
        material and ignore king safety. In other domains, it might exploit
        loopholes you didn&apos;t even realize existed. This is why state and
        reward are basically the two pressure points of Reinforcement Learning.
        Get them right, and the agent can solve extremely difficult problems.
      </p>
      <p className="mb-4">
        <strong id="seeing-vs-guessing" className="block text-center">
          Seeing Everything vs Guessing
        </strong>
        <br />
        Up until now, we&apos;ve been quietly assuming something very
        convenient: that the agent can see everything in the environment. Chess
        is like this. The entire board is right there in front of you. No hidden
        pieces. No secret information. No fog of war. This is what&apos;s called
        a <strong>fully observable environment</strong>. This makes it easier to
        have states that follow the markov property (contain everything you need
        to know to make the best decision).
      </p>
      <p className="mb-4">
        Unfortunately, most real-world problems are not fully observable. In
        many situations, the agent is forced to operate with incomplete
        information about the environment. This is called a{" "}
        <strong>partially observable environment</strong>. Think about playing
        poker. You don&apos;t know what cards the other players are holding. You
        don&apos;t know who is bluffing, who is scared, or who is quietly
        setting a trap. You only see your own hand and the cards on the table.
        You&apos;re making decisions based on incomplete information. From the
        agent&apos;s point of view, it&apos;s like trying to play chess while
        only seeing half the board and occasionally being lied to. In these
        settings, the agent has to guess and build beliefs about what might be
        going on behind the scenes. This makes it much harder (sometimes even
        impossible) for the agent to have states that follow the markov
        property.
      </p>

      <p className="mb-4">
        <strong className="block text-center">Agent Components</strong>
        <br />
        What are the components that make up the agent? The first of these is
        the <strong>policy</strong>, which is basically the agent&apos;s
        rulebook for what to do in each state. The second is the{" "}
        <strong>value function</strong>, which is the agent&apos;s opinionated
        ranking system for how much future reward it expects to get from a given
        state (and sometimes from a specific action in that state). Finally ,
        there is the agent&apos;s <strong>model</strong> of the environment,
        which is an internal simulation of how the environment it&apos;s in
        actually works.
      </p>
      <p className="mb-4">
        <strong id="policy" className="block text-center">
          The Agent&apos;s Policy
        </strong>
        <br />
        Let&apos;s zoom in on the first of those components: the{" "}
        <strong>policy</strong>. The policy is the agent&apos;s behavior.
        It&apos;s the thing that actually answers the question, “Okay, I&apos;m
        in this situation… now what?” Formally, a policy is just a mapping from
        states to actions, but in human terms, it&apos;s the agent&apos;s way of
        making decisions. In chess, this is the part of the agent that looks at
        the board and decides, “In this position, I&apos;m going to move the
        knight to this square,” or “I&apos;m going to do something bold and
        probably regret it.”
      </p>
      <p className="mb-4">
        Some agents are very decisive. They use what&apos;s called a{" "}
        <strong>deterministic policy</strong>, which means that for every state,
        there is only one action they will take. In a given position, they will
        make the same move every time. There is no randomness. In math form,
        this is written as:
        <br />
        <span className="block text-center font-mono my-2">a = π(s)</span>
        <br />
        where the agent&apos;s policy, π, looks at its current state, s, and
        selects the action, a, that it will take.
        <br />
        <br />
        Other agents are more flexible. They use a{" "}
        <strong>stochastic policy</strong>, which means that instead of
        committing to a single move, they assign probabilities to different
        moves. “In this position, I usually attack, but sometimes I defend, and
        occasionally I panic and do something weird.” In math form, this is
        written as:
        <br />
        <span className="block text-center font-mono my-2">
          π(a | s) = P(A = a | S = s)
        </span>
        <br />
        where the agent&apos;s policy, π, looks at its current state, s, and
        assigns a probability to each possible action, a, that is allowed in
        that state.
        <br />
        <br />A good way to think about when a stochastic policy would be better
        than a deterministic one would be with the game rock, paper, scissors.
        In a deterministic policy you would always choose rock for example. It
        would be easy for your opponent to figure this strategy out and win
        every time by just choosing paper. Thus, the optimal policy is a
        stochastic (random) one where the agent sometimes chooses rock,
        sometimes chooses paper, and sometimes chooses scissors.
      </p>
      <p className="mb-4">
        <strong id="value-function" className="block text-center">
          The Agent&apos;s Value Function
        </strong>
        <br />
        If the policy is the agent&apos;s “what should I do in this state?”
        mechanism, then the <strong>value function</strong> is its “how good is
        this state?” mechanism. The value function is the agent&apos;s
        prediction of how much total reward it expects to collect in the future,
        starting from this particular state. In chess terms, this is the part of
        the agent that looks at a position and thinks, “I&apos;m probably
        winning in this position” or “Uh oh, I&apos;m probably losing in this
        position.” Remember, it&apos;s not only looking at how much reward it
        will get on the next move, but in the entire game starting from this
        position. For example, if I sacrifice my queen and only look one step
        ahead, my value function may be very low because losing a queen is
        usually bad, but if it will lead to a position that ends in checkmate in
        6 moves, the value function ranks that state highly because it&apos;s
        looking at TOTAL reward from that state, not just the immediate reward.
        Also please note that value functions MUST be tied to policies, because
        your future reward given on a state DEPENDS on what moves you are likely
        to make in future states. Bobby Fischer would likely have a very
        different value function in a given chess position than someone who just
        learned how to play chess. Mathamatically the value function is written
        as{" "}
      </p>
      <p className="mb-4">
        <span className="block text-center font-mono my-2">
          V<sub>π</sub>(s) = E<sub>π</sub>[ R<sub>t</sub> + γR
          <sub>t+1</sub> + γ²R<sub>t+2</sub> + … | S<sub>t</sub> = s ]
        </span>
        <br />
        which means the Value, V, I get if I follow policy, π, from now on in
        state, s, is equal to the Expected Value I'll get if I follow this
        policy, E<sub>π</sub> (what I think I'll get), If I add up all my
        rewards for all the future states, R<sub>t</sub>, R<sub>t+1</sub>, etc i
        think I'll be in. In many situations (like finance) the current reward
        is worth more than future rewards (money now is more valuable than the
        same dollar amount tomorrow), so we multiply future rewards by a
        discount factor of γ.
        <br />
        <br />
        Put simply, give me a state and the value function under a policy spits
        out what it thinks the total reward will be.
      </p>
      <p className="mb-4">
        <strong id="model" className="block text-center">
          The Agent&apos;s Model
        </strong>
        <br />
        So far, our agent has been reacting to the world: see state, pick
        action, get reward, repeat. But some agents go a step further and build
        something extra: a <strong>model</strong> of the environment. This is
        basically the agent&apos;s internal guess of how the world works. If the
        policy is the agent&apos;s rulebook for what to do in a state, and the
        value function tells it how much expected total future reward it expects
        to get from a state, then the model is its guess of what the rules of
        the environment are. It answers questions like: “If I do this, what will
        probably happen next?” For example, if I drop this object, gravity will
        make it fall towards the ground.
      </p>
      <p className="mb-4">
        More formally, the model tries to predict two things. First, the{" "}
        <strong>state transitions</strong>: given my current state and action,
        what state will the environment put me in next? And second, the{" "}
        <strong>rewards</strong>: how much immediate reward will I get for doing
        that? As an example, think about driving a car. Your model of the
        environment includes certain laws of physics as well as how other
        drivers behave. If you turn the steering wheel left, the car will have a
        high probability of transitioning to a state where it is turning left.
        If you slam the brakes, the car will have a high probability of
        transitioning to a state with a lower speed. If I run a red light, I
        have a high likelihood of transitioning into a state where a policeman
        gives me a big ticket. Those are all predictions about{" "}
        <strong>state transitions </strong>
        and <strong>rewards</strong>. You&apos;re constantly running little
        simulations of “If I do this in my current state, then I have a certain
        likelihood of transitioning into this particular new state.”
        Mathematically, for a transition model P, and immediate Reward function,
        R:
        <br />
        <span className="block text-center font-mono my-2">
          state transition = P(s' | s, a) &nbsp;&nbsp;and&nbsp;&nbsp; immediate
          reward = R(s, a)
        </span>
        <br />
        Which just means: the probability of landing in next state <em>
          s'
        </em>{" "}
        if I&apos;m in state <em>s</em> and take action <em>a</em>, and the
        expected (immediate not total) reward I&apos;ll get for taking action a
        in state s.
      </p>
      <p className="mb-4">
        <strong id="dont-need-all-pieces" className="block text-center">
          You Don&apos;t Need All The Pieces
        </strong>
        <br />
        Up until now, we&apos;ve been talking about <strong>
          policies
        </strong>, <strong>value functions</strong>, and <strong>models</strong>{" "}
        assuming every RL agent has all three of these. Real agents can be more
        minimalist. Some agents don&apos;t explicitly learn a policy at all,
        some agents don&apos;t explicitly learn a value function, some
        don&apos;t bother building a model of the environment, and some have all
        three.
      </p>
      <p className="mb-4">
        The first big split is value-based vs policy-based vs ctor-critic. A
        value-based agent doesn&apos;t need a rulebook (policy) on what to do in
        each state, it just wants to know which states are good and which are
        bad to be in. It learns a value function and then picks the action with
        the highest value. Thus, it has a value function, but the policy is{" "}
        <em>implicit</em>, i.e. “do whatever has the biggest value.” A
        policy-based agent is the opposite. It learns the policy without giving
        states an explicit value. An actor-critic agent uses both a policy and a
        value function. The "actor" is the policy (the thing that chooses
        actions), and the ""critic""is the value function (the thing that judges
        how good things are).
      </p>

      <p className="mb-4">
        Whether an agent is value based, policy based, or actor critic
        doesn&apos;t determine whether its model-free or model-based and vice
        versa. That&apos;s because the model is just about whether the agent
        tries to learn the <em>rules of the environment</em> or not.
      </p>
      <p className="mb-4">
        A model-free agent doesn&apos;t need to predict the future. It learns
        what works by experience/trial and error, using reward signals, without
        explicitly learning how the environment transitions from{" "}
        <span className="font-mono">(s, a)</span> to{" "}
        <span className="font-mono">s'</span>. A model-basedagent needs to
        predict the future. It tries to learn{" "}
        <span className="font-mono">P(s' | s, a)</span> and{" "}
        <span className="font-mono">R(s, a)</span> so it can run mental
        simulations and plan ahead.
      </p>
      <p className="mb-4">
        And because these are two separate axes, you can mix and match. You can
        have a value-based, model-free agent. Or a policy-based, model-free
        agent. Or an actor-critic, model-free agent (very common). And you can
        also build model-based versions of any of these. Different agents are
        just different combinations of policy learning, value learning, and
        model learning.
      </p>
      <p className="mb-8">
        Put simply: On one axis <strong>value-based</strong> is “Which option is
        best?”, <strong>policy-based</strong> is “What should I do?”,{" "}
        <strong>actor-critic</strong> is “What should I do, and how did I do?”.
        On a different axis, <strong>model-based</strong> is “If I do this, what
        will happen?”, and <strong>model-free</strong> is “I&apos;ll find out
        via trial and error.”
      </p>

      <p className="mb-4">
        This is all the information I think is important to know before diving
        into learning RL. Next, I will discuss Markov Decision Processes in
        detail.
      </p>
    </section>
  );
}
