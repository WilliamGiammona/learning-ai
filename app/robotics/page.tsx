import React from "react";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

const Robotics = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        MuJoCo: Multi-Joint Dynamics with Contact
      </h1>

      <div className="flex gap-8">
        {/* Sticky Sidebar TOC - hidden on mobile */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <nav className="sticky top-8 p-4 bg-gray-50 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#introduction"
                  className="text-blue-600 hover:text-blue-800 underline block"
                >
                  Introduction
                </a>
              </li>
              <li>
                <a
                  href="#controller"
                  className="text-blue-600 hover:text-blue-800 underline block"
                >
                  The Controller
                </a>
              </li>
              <li>
                <a
                  href="#setup"
                  className="text-blue-600 hover:text-blue-800 underline block"
                >
                  SetUp
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {/* Mobile TOC - shown only on small screens */}
          <nav className="mb-8 p-4 bg-gray-50 rounded-lg lg:hidden">
            <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#introduction"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Introduction
                </a>
              </li>
              <li>
                <a
                  href="#controller"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  The Controller
                </a>
              </li>
              <li>
                <a
                  href="#setup"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  SetUp
                </a>
              </li>
            </ul>
          </nav>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section id="introduction">
              <h3 className="text-xl font-semibold mb-4">Introduction</h3>

              <h4 className="text-lg font-semibold">MuJoCo</h4>
              <p className="mb-4">
                MuJoCo is a program that simulates the laws of physics. To tell
                it what my environment/robot should look like, I must write it a
                text file (XML). Writing XML files to specify environments is a
                type of format called MJCF. A popular robotics format called
                URDF is also acceptable. MuJoCo comes with a built in viewer
                window to see your robot moving around.
              </p>

              <h4 className="text-lg font-semibold">LeRobot</h4>
              <p className="mb-4">
                LeRobot is a simulated robot that can be controlled using
                high-level commands. It is designed to work seamlessly with
                MuJoCo and can be easily configured using MJCF or URDF files. I
                will be using LeRobot to get started with simulating robotic
                movements and interactions in a virtual environment. I will be
                using the SO-101 robot model.
                <br />
                This is the website I will be using:{" "}
                <a
                  href="https://huggingface.co/docs/lerobot/getting_started_real_world_robot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  https://huggingface.co/docs/lerobot/getting_started_real_world_robot
                </a>
              </p>

              <h4 className="text-lg font-semibold">
                Imitation Learning in Sim
              </h4>
              <p>
                I&apos;m most excited for this tutorial, which will explain how
                to train a neural network to control a robot in simulation with
                imitation learning.
                <br />
                The direct sublink is here:{" "}
                <a
                  href="https://huggingface.co/docs/lerobot/il_sim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  https://huggingface.co/docs/lerobot/il_sim
                </a>
              </p>
            </section>

            {/* Dashed line separator */}
            <div className="border-t-2 border-dashed border-gray-400 my-8"></div>

            <section id="controller">
              <h3 className="text-xl font-semibold">The Controller</h3>
              <p>
                Any controller should work fine for LeRobot simulation, but
                it&apos;s recommended to use one that supports XInput controller
                programming interface for the best compatibility. The Logitech
                F710 is a popular choice and specifically recommended in the
                LeRobot documentation. I decided to use an Xbox controller since
                it&apos;s XInput compatible and has a wireless bluetooth
                connection.
              </p>

              <div className="flex flex-col items-center my-6">
                <Image
                  src="/images/xbox_controller.png"
                  alt="Xbox Controller"
                  width={500}
                  height={500}
                  className="mb-4"
                />
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold">
                  Xbox Controller Button Mapping for LeRobot:
                </h4>

                <div>
                  <h5 className="font-semibold text-gray-800">
                    Analog Sticks:
                  </h5>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>
                      <strong>Left stick:</strong> Robot arm positioning (X/Y
                      movement)
                    </li>
                    <li>
                      <strong>Right stick:</strong> Robot arm
                      rotation/orientation control
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-800">
                    Face Buttons (A, B, X, Y):
                  </h5>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>
                      <strong>A, B, X, Y buttons:</strong> Fine adjustments for
                      wrist pitch and roll control
                    </li>
                    <li>
                      These provide precise micro-movements for the robot&apos;s
                      end effector
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-800">
                    Triggers & Bumpers:
                  </h5>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>
                      <strong>Left/Right Triggers (LT/RT):</strong> Gripper
                      control (open/close)
                    </li>
                    <li>
                      <strong>Left/Right Bumpers (LB/RB):</strong> Speed
                      modifiers or mode switching
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-800">D-Pad:</h5>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>
                      <strong>D-Pad (Arrow buttons):</strong> Additional fine
                      control for positioning adjustments
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-800">
                    Other Buttons:
                  </h5>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>
                      <strong>Menu button (≡):</strong> Pause/resume simulation
                      or access control settings
                    </li>
                    <li>
                      <strong>View button (⧉):</strong> Switch camera views or
                      reset robot position
                    </li>
                    <li>
                      <strong>Share button (↗):</strong> Used for
                      recording/screenshots
                    </li>
                  </ul>
                </div>

                <p className="text-sm text-gray-600 italic mt-4">
                  Note: The exact mapping can vary depending on how LeRobot is
                  configured. When you run the simulation, you can test each
                  button to see its specific function.
                </p>
              </div>
            </section>

            {/* Second dashed line separator */}
            <div className="border-t-2 border-dashed border-gray-400 my-8"></div>

            <section id="setup">
              <h3 className="text-xl font-semibold">SetUp</h3>
              <p className="mb-4">
                To use gym_hil with LeRobot, follow the installation tutorial
                here:
                <br />
                <a
                  href="https://huggingface.co/docs/lerobot/getting_started_real_world_robot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  https://huggingface.co/docs/lerobot/getting_started_real_world_robot
                </a>{" "}
                <br />
                and here:{" "}
                <a
                  href="https://huggingface.co/docs/lerobot/il_sim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  https://huggingface.co/docs/lerobot/il_sim
                </a>
                <br />
                Until you get to the area about creating a configuration file.
                <br />
                Since this is a custom config file, the name doesn&apos;t really
                matter. Here is an example name: env_config_gym_hil_il.json for
                gym hill environment configuration imitation learning. Below is
                an example of the code inside the config file for a gamepad
                control with a Panda robot arm:
              </p>

              <SyntaxHighlighter
                language="json"
                style={tomorrow}
                className="rounded-lg mb-4"
              >
                {`{
  "type": "hil",
  "wrapper": {
    "gripper_penalty": -0.02,
    "display_cameras": false,
    "add_joint_velocity_to_observation": true,
    "add_ee_pose_to_observation": true,
    "crop_params_dict": {
      "observation.images.front": [0, 0, 128, 128],
      "observation.images.wrist": [0, 0, 128, 128]
    },
    "resize_size": [128, 128],
    "control_time_s": 15.0,
    "use_gripper": true,
    "fixed_reset_joint_positions": [
      0.0,
      0.195,
      0.0,
      -2.43,
      0.0,
      2.62,
      0.785
    ],
    "reset_time_s": 2.0,
    "control_mode": "gamepad"
  },
  "name": "example_name",
  "mode": "record",
  "repo_id": "example_repo",
  "dataset_root": null,
  "task": "PandaPickCubeGamepad-v0",
  "num_episodes": 30,
  "episode": 0,
  "pretrained_policy_name_or_path": null,
  "device": "mps",
  "push_to_hub": false,
  "fps": 20,
  "features": {
    "observation.images.front": {
      "type": "VISUAL",
      "shape": [3, 128, 128]
    },
    "observation.images.wrist": {
      "type": "VISUAL",
      "shape": [3, 128, 128]
    },
    "observation.state": {
      "type": "STATE",
      "shape": [18]
    },
    "action": {
      "type": "ACTION",
      "shape": [4]
    }
  },
  "features_map": {
    "observation.images.front": "observation.images.front",
    "observation.images.wrist": "observation.images.wrist",
    "observation.state": "observation.state",
    "action": "action"
  },
  "reward_classifier_pretrained_path": null
}`}
              </SyntaxHighlighter>
              <div className="mt-6">
                <h4 className="text-2xl font-semibold mb-10 underline">
                  Configuration Parameters Explained:
                </h4>
                <ul className="space-y-2">
                  <h3 className="text-xl font-bold my-5">Type</h3>
                  <li>
                    <strong>"hil"</strong> - Specifies Human-in-the-Loop
                    training where you control the robot with a gamepad and the
                    system records your demonstrations for the neural network to
                    learn from.
                    <br />
                    <strong>Some additional types include:</strong>
                    <ul>
                      <li>
                        {" "}
                        <strong>"sim"</strong> - Pure simulation without human
                        input.
                      </li>
                      <li>
                        <strong>"real"</strong> - This mode connects LeRobot to
                        actual physical robot hardware instead of simulation.
                        You would use this when working with a real robotic arm
                        like the SO-101.
                      </li>
                      <li>
                        <strong>"offline"</strong> - Trains on pre-recorded
                        datasets that&apos;s already been collected without
                        recording new data (no interaction with the robot to
                        collect data).
                      </li>
                    </ul>
                  </li>
                  <h3 className="text-xl font-bold my-5">Wrapper</h3>
                  <li>
                    The <strong>"wrapper"</strong> object is a software layer
                    that sits between LeRobot and the underlying simulation
                    environment (like MuJoCo). It adds custom behavior, rewards,
                    penalties, standardizes different formats, and does things
                    like image cropping, resizing, adding sensor information,
                    etc before the data goes to the neural network.
                    <br />
                    Inside the wrapper, some of the parameters include:
                    <ul>
                      <li>
                        <strong>"gripper_penalty"</strong> - applies a small
                        negative reward every time the gripper is activated
                        during the simulation. Without this penalty, the robot
                        might constantly open and close the gripper throughout
                        the episode, since there&apos;s no cost to using it.
                        This creates noisy, inefficient behavior where the robot
                        grips randomly rather than purposefully.
                      </li>
                      <li>
                        <strong>"display_cameras"</strong> - allows the visual
                        camera feeds (multiple camera angles should show up) to
                        appear on screen during data collection. To save
                        computational power you can set this to false
                        (You&apos;ll still see the main simulation window, just
                        not multiple ones)
                      </li>
                      <li>
                        <strong>"add_joint_velocity_to_observation"</strong> -
                        Joint velocity is how fast each robot joint is moving at
                        any given moment. Setting this to true means that
                        includes the robot&apos;s joint velocities in the
                        observation data will get fed to the neural network
                      </li>
                      <li>
                        <strong>"add_ee_pose_to_observation"</strong> - The
                        end-effector&apos;s (The end-effector is the part of the
                        robot that does the work, usually the gripper or hand
                        that actually interacts with objects.) pose (the pose is
                        both the robot&apos;s X,Y,Z position in space and its
                        orientation [how its rotated/tilted]). If set to true,
                        it will include this in the observation data sent to the
                        neural network.
                      </li>
                      <li>
                        <strong>"crop_params_dict"</strong> - Defines how to
                        crop specific rectangular sections from the robot&apos;s
                        camera images before processing them. As an example:
                        <br />
                        "observation.images.front": [0, 0, 128, 128] This means:
                        starting at pixel (0,0) - the top-left corner - cut out
                        a 128×128 pixel square from the front camera image.
                        <br />
                        Cropping images is a tradeoff between maximizing compute
                        efficiency vs accidentally deleting useful information.
                      </li>
                      <li>
                        <strong>"resize_size"</strong> - Specifies the final
                        dimensions that all camera images will be resized to
                        after cropping.
                      </li>
                      <li>
                        <strong>"resize_size"</strong> - Specifies the final
                        dimensions that all camera images will be resized to
                        after cropping.
                      </li>
                      <li>
                        <strong>"control_time_s"</strong> - Control time is how
                        long you have to complete the task during each recording
                        session. The _s is for seconds, so once the amount of
                        seconds you specify passes, the episode automatically
                        ends and the system moves to the reset phase.
                      </li>
                      <li>
                        <strong>"use_gripper"</strong> - Allows gripper
                        functionality in the simulation, allowing you to control
                        the robot&apos;s gripper (hand/claw) to grab and release
                        objects with whatever controller you decide to use. The
                        gripper&apos;s state (open/closed, grip strength) gets
                        recorded as part of your demonstration data The neural
                        network learns when and how to use the gripper based on
                        your demonstrations
                      </li>
                      <li>
                        <strong>"fixed_reset_joint_positions"</strong> - Defines
                        the exact joint angles (in radians) that the robot arm
                        will move to at the start of each new episode. For a
                        7-DOF (degrees of freedom) robot like the Panda arm,
                        each number corresponds to one joint&apos;s rotation
                        angle. After each session ends, the robot automatically
                        moves to these exact joint positions, ensuring every
                        demonstration starts from the same consistent pose.
                      </li>
                      <li>
                        <strong>"reset_time"</strong> - A pause between episodes
                        where the robot moves to its reset position and stays
                        there before the next recording begins. This gives the
                        simulation time to settle after the robot moves to its
                        starting position
                      </li>
                      <li>
                        <strong>"control_mode"</strong> - specifies that
                        you&apos;ll control the robot with. The options include
                        gamepad (controller), keyboard, and mouse (Gamepad is
                        recommended).
                      </li>
                    </ul>
                  </li>
                  <h3 className="text-xl font-bold my-5">Wrapper</h3>
                  <li>
                    The <strong>"wrapper"</strong> object is a software layer
                    that sits between LeRobot and the underlying simulation
                    environment (like MuJoCo). It adds custom behavior, rewards,
                    penalties, standardizes different formats, and does things
                    like image cropping, resizing, adding sensor information,
                    etc before the data goes to the neural network.
                    <br />
                    Inside the wrapper, some of the parameters include:
                    <ul>
                      <li>
                        <strong>"gripper_penalty"</strong> - applies a small
                        negative reward every time the gripper is activated
                        during the simulation. Without this penalty, the robot
                        might constantly open and close the gripper throughout
                        the episode, since there&apos;s no cost to using it.
                        This creates noisy, inefficient behavior where the robot
                        grips randomly rather than purposefully.
                      </li>
                      <li>
                        <strong>"display_cameras"</strong> - allows the visual
                        camera feeds (multiple camera angles should show up) to
                        appear on screen during data collection. To save
                        computational power you can set this to false
                        (You&apos;ll still see the main simulation window, just
                        not multiple ones)
                      </li>
                      <li>
                        <strong>"add_joint_velocity_to_observation"</strong> -
                        Joint velocity is how fast each robot joint is moving at
                        any given moment. Setting this to true means that
                        includes the robot&apos;s joint velocities in the
                        observation data will get fed to the neural network
                      </li>
                      <li>
                        <strong>"add_ee_pose_to_observation"</strong> - The
                        end-effector&apos;s (The end-effector is the part of the
                        robot that does the work, usually the gripper or hand
                        that actually interacts with objects.) pose (the pose is
                        both the robot&apos;s X,Y,Z position in space and its
                        orientation [how its rotated/tilted]). If set to true,
                        it will include this in the observation data sent to the
                        neural network.
                      </li>
                      <li>
                        <strong>"crop_params_dict"</strong> - Defines how to
                        crop specific rectangular sections from the robot&apos;s
                        camera images before processing them. As an example:
                        <br />
                        "observation.images.front": [0, 0, 128, 128] This means:
                        starting at pixel (0,0) - the top-left corner - cut out
                        a 128×128 pixel square from the front camera image.
                        <br />
                        Cropping images is a tradeoff between maximizing compute
                        efficiency vs accidentally deleting useful information.
                      </li>
                      <li>
                        <strong>"resize_size"</strong> - Specifies the final
                        dimensions that all camera images will be resized to
                        after cropping.
                      </li>
                      <li>
                        <strong>"resize_size"</strong> - Specifies the final
                        dimensions that all camera images will be resized to
                        after cropping.
                      </li>
                      <li>
                        <strong>"control_time_s"</strong> - Control time is how
                        long you have to complete the task during each recording
                        session. The _s is for seconds, so once the amount of
                        seconds you specify passes, the episode automatically
                        ends and the system moves to the reset phase.
                      </li>
                      <li>
                        <strong>"use_gripper"</strong> - Allows gripper
                        functionality in the simulation, allowing you to control
                        the robot&apos;s gripper (hand/claw) to grab and release
                        objects with whatever controller you decide to use. The
                        gripper&apos;s state (open/closed, grip strength) gets
                        recorded as part of your demonstration data The neural
                        network learns when and how to use the gripper based on
                        your demonstrations
                      </li>
                      <li>
                        <strong>"fixed_reset_joint_positions"</strong> - Defines
                        the exact joint angles (in radians) that the robot arm
                        will move to at the start of each new episode. For a
                        7-DOF (degrees of freedom) robot like the Panda arm,
                        each number corresponds to one joint&apos;s rotation
                        angle. After each session ends, the robot automatically
                        moves to these exact joint positions, ensuring every
                        demonstration starts from the same consistent pose.
                      </li>
                      <li>
                        <strong>"reset_time"</strong> - A pause between episodes
                        where the robot moves to its reset position and stays
                        there before the next recording begins. This gives the
                        simulation time to settle after the robot moves to its
                        starting position
                      </li>
                      <li>
                        <strong>"control_mode"</strong> - specifies that
                        you&apos;ll control the robot with. The options include
                        gamepad (controller), keyboard, and mouse (Gamepad is
                        recommended).
                      </li>
                    </ul>
                  </li>
                  <h3 className="text-xl font-bold my-5">Name</h3>
                  <li>
                    <strong>"name"</strong> - Used for identification purposes,
                    put whatever name you want here.
                  </li>
                  <h3 className="text-xl font-bold my-5">Mode</h3>
                  <li>
                    <strong>"mode"</strong> - Determines what action the system
                    will take when you run the configuration. Options include:
                    <br />
                    record - Specifies that the system should collect and save
                    demonstration data during your sessions.
                    <br />
                    "replay": Plays back previously recorded demonstrations
                    without collecting new data
                    <br />
                    "evaluate": Tests a trained policy&apos;s performance rather
                    than recording human demonstrations
                    <br />
                    "train": Uses recorded data to train a neural network
                    (though this might be handled separately)
                  </li>
                  <h3 className="text-xl font-bold my-5">Repo_id</h3>
                  <li>
                    <strong>"repo_id"</strong> - Specifies where your dataset
                    will be stored.
                  </li>
                  <h3 className="text-xl font-bold my-5">Dataset_Root</h3>
                  <li>
                    <strong>"dataset_root"</strong> - Specifies the local file
                    system path where your recorded dataset will be stored on
                    your computer. The dataset_root provides the local storage
                    location, while repo_id typically handles remote repository
                    naming. Data might be stored locally first, then uploaded to
                    the remote repository specified by repo_id.
                  </li>
                  <h3 className="text-xl font-bold my-5">Task</h3>
                  <li>
                    <strong>"task"</strong> - Specifies which simulation
                    environment and robotic task the system should load and run.
                  </li>
                  <h3 className="text-xl font-bold my-5">Num_Episodes</h3>
                  <li>
                    <strong>"num_episodes"</strong> - Specifies how many
                    demonstration episodes the system will record during your
                    data collection session.
                  </li>
                  <h3 className="text-xl font-bold my-5">Episode</h3>
                  <li>
                    <strong>"episode"</strong> - Specifies which episode number
                    the system should start recording from.
                  </li>
                  <h3 className="text-xl font-bold my-5">
                    Pretrained_Policy_Name_Or_Path
                  </h3>
                  <li>
                    <strong>"pretrained_policy_name_or_path"</strong> -
                    Specifies whether to load an existing trained neural network
                    model
                  </li>
                  <h3 className="text-xl font-bold my-5">Device</h3>
                  <li>
                    <strong>"device"</strong> - Specifies which computational
                    hardware the system should use for processing tasks like
                    image manipulation, data handling, and neural network
                    operations. They include:
                    <br />
                    "cpu": Uses the computer&apos;s main processor (slower but
                    universally compatible)
                    <br />
                    "cuda": Uses NVIDIA GPU acceleration (requires NVIDIA
                    graphics card with CUDA support)
                    <br />
                    "mps": Metal Performance Shaders for Apple Silicon and newer
                    Intel Macs
                    <br />
                    "auto": Automatically detects and uses the best available
                    hardware
                  </li>
                  <h3 className="text-xl font-bold my-5">Push_To_Hub</h3>
                  <li>
                    <strong>"push_to_hub"</strong> - Determines whether your
                    recorded dataset will be automatically uploaded to a remote
                    repository (like Hugging Face Hub) after data collection.
                  </li>
                  <h3 className="text-xl font-bold my-5">FPS</h3>
                  <li>
                    <strong>"fps"</strong> - Frames Per Second, it determines
                    how frequently the system captures data during your
                    demonstrations. Higher fps = more data, but computationally
                    more expensive.
                  </li>

                  <h3 className="text-xl font-bold my-5">Features</h3>
                  <li>
                    The <strong>"feature" </strong> object defines the structure
                    and types of data that will be recorded and stored in your
                    dataset during demonstrations.
                    <br />
                    Inside the feature object, some of the parameters include:
                    <ul>
                      <li>
                        <strong>"observation.images.front"</strong> - Defines
                        the front camera&apos;s image data that will be recorded
                        as part of the robot&apos;s visual observations. It can
                        be of type visual meaning its image/camera data or state
                        which is numerical sensor data. The shape defines the
                        color chanels and then the pixel dimensions of the
                        image.
                      </li>
                      <li>
                        <strong>"observation.images.wrist"</strong> - Defines
                        the wrist-mounted camera&apos;s image data that will be
                        recorded as part of the robot&apos;s visual
                        observations. type and shape are the same as the front
                        images.
                      </li>
                      <li>
                        <strong>"observation.state"</strong> - Defines the
                        numerical sensor data that will be recorded as part of
                        the robot&apos;s non-visual observations. It&apos;s type
                        state indicates its numerical sensor data.The shape an
                        array of 18 numerical values representing different
                        sensor readings including joint velocities, joint
                        positions, gripper state, force/torque reading, etc.
                      </li>
                      <li>
                        <strong>"action"</strong> - Defines the control commands
                        that will be recorded when you operate the robot with
                        your gamepad. Type action indicates this is control
                        command data rather than sensor readings.
                      </li>
                    </ul>
                  </li>

                  <h3 className="text-xl font-bold my-5">Features_Map</h3>
                  <li>
                    The <strong>"features_map" </strong> object creates explicit
                    mappings between the data fields defined in the "features"
                    section and their corresponding names in the actual dataset.
                  </li>

                  <h3 className="text-xl font-bold my-5">
                    Reward_Classifier_Pretrained_Path
                  </h3>
                  <li>
                    <strong>"reward_classifier_pretrained_path" </strong>{" "}
                    Specifies whether to use a pre-trained reward classification
                    model to automatically evaluate the quality or success of
                    demonstrations.
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Robotics;
