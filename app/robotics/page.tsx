import React from "react";
import Image from "next/image";

const Robotics = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        MuJoCo: Multi-Joint Dynamics with Contact
      </h1>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <h3 className="text-xl font-semibold">MuJoCo</h3>
        <p>
          MuJoCo is a program that simulates the laws of physics. To tell it
          what my environment/robot should look like, I must write it a text
          file (XML). Writing XML files to specify environments is a type of
          format called MJCF. A popular robotics format called URDF is also
          acceptable. MuJoCo comes with a built in viewer window to see your
          robot moving around.
        </p>
        <h3 className="text-xl font-semibold">LeRobot</h3>
        <p>
          LeRobot is a simulated robot that can be controlled using high-level
          commands. It is designed to work seamlessly with MuJoCo and can be
          easily configured using MJCF or URDF files. I will be using LeRobot to
          get started with simulating robotic movements and interactions in a
          virtual environment. I will be using the SO-101 robot model.
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
        <h3 className="text-xl font-semibold">Imitation Learning in Sim</h3>
        <p>
          I&apos;m most excited for this tutorial, which will explain how to
          train a neural network to control a robot in simulation with imitation
          learning.
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
        {/* Dashed line separator */}
        <div className="border-t-2 border-dashed border-gray-400 my-8"></div>
        <h3 className="text-xl font-semibold">The Controller</h3>
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
            <h5 className="font-semibold text-gray-800">Analog Sticks:</h5>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <strong>Left stick:</strong> Robot arm positioning (X/Y
                movement)
              </li>
              <li>
                <strong>Right stick:</strong> Robot arm rotation/orientation
                control
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-800">
              Face Buttons (A, B, X, Y):
            </h5>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <strong>A, B, X, Y buttons:</strong> Fine adjustments for wrist
                pitch and roll control
              </li>
              <li>
                These provide precise micro-movements for the robot's end
                effector
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-800">Triggers & Bumpers:</h5>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <strong>Left/Right Triggers (LT/RT):</strong> Gripper control
                (open/close)
              </li>
              <li>
                <strong>Left/Right Bumpers (LB/RB):</strong> Speed modifiers or
                mode switching
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-800">D-Pad:</h5>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <strong>D-Pad (Arrow buttons):</strong> Additional fine control
                for positioning adjustments
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-800">Other Buttons:</h5>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <strong> Menu button (≡): </strong> Pause/resume simulation or
                access control settings
              </li>
              <li>
                <strong>View button (⧉): </strong> Switch camera views or reset
                robot position
              </li>
              <li>
                <strong>Share button (↗): </strong> Used for
                recording/screenshots
              </li>
            </ul>
          </div>

          <p className="text-sm text-gray-600 italic mt-4">
            Note: The exact mapping can vary depending on how LeRobot is
            configured. When you run the simulation, you can test each button to
            see its specific function.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Robotics;
