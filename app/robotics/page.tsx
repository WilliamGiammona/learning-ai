import React from "react";

const page = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        MuJoCo: Multi-Joint Dynamics with Contact
      </h1>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <h3 className="text-xl font-semibold">Overview</h3>
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
          easily configured using MJCF or URDF files. I will using LeRobot to
          get started with simulating robotic movements and interactions in a
          virtual environment.
        </p>
      </div>
    </div>
  );
};

export default page;
