import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/CapybaraScene.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // console.log(actions);
    if (actions["Circle.001Action.003"]) {
      actions["Circle.001Action.003"].play();
    }

    if (actions["Armature"]) {
      actions["Armature"].play();
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Armature"
          position={[0, 0.897, 0.282]}
          rotation={[0, 0.565, 0]}
        >
          <group name="Capybara">
            <skinnedMesh
              name="Plane003_1"
              geometry={nodes.Plane003_1.geometry}
              material={materials.Skin}
              skeleton={nodes.Plane003_1.skeleton}
            />
            <skinnedMesh
              name="Plane003_2"
              geometry={nodes.Plane003_2.geometry}
              material={materials.Outline}
              skeleton={nodes.Plane003_2.skeleton}
            />
          </group>
          <primitive object={nodes.Bone} />
        </group>
        <group
          name="bath"
          position={[-0.131, 0.841, 0.031]}
          rotation={[0, 0.747, 0]}
          scale={[1.557, 0.698, 1.557]}
        >
          <mesh
            name="Cylinder"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            material={materials.Material}
          />
          <mesh
            name="Cylinder_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_1.geometry}
            material={materials.Outline}
          />
        </group>
        <group
          name="towel"
          position={[0.068, 0.99, -0.076]}
          rotation={[0.038, 0.745, -0.068]}
          scale={[0.819, 0.862, 0.819]}
        >
          <mesh
            name="Cylinder002"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            name="Cylinder002_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_1.geometry}
            material={materials.LightOutline}
          />
        </group>
        <group
          name="bamboo"
          position={[-1.976, 1.879, 1.723]}
          rotation={[0, -0.652, 0]}
          scale={[0.223, 1.853, 0.223]}
        >
          <mesh
            name="Cylinder001"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001.geometry}
            material={materials.Bamboo}
          />
          <mesh
            name="Cylinder001_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_1.geometry}
            material={materials.BambooOutline}
          />
        </group>
        <group
          name="bamboo001"
          position={[-1.866, 2.307, 1.07]}
          rotation={[-Math.PI, 1.351, -Math.PI]}
          scale={[0.223, 2.268, 0.223]}
        >
          <mesh
            name="Cylinder003"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003.geometry}
            material={materials.Bamboo}
          />
          <mesh
            name="Cylinder003_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_1.geometry}
            material={materials.BambooOutline}
          />
        </group>
        <group
          name="bamboo002"
          position={[-1.513, 1.336, 1.532]}
          rotation={[0, 0.013, 0]}
          scale={[0.223, 1.675, 0.223]}
        >
          <mesh
            name="Cylinder004"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004.geometry}
            material={materials.Bamboo}
          />
          <mesh
            name="Cylinder004_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_1.geometry}
            material={materials.BambooOutline}
          />
        </group>
        <group
          name="bamboo003"
          position={[-1.282, 1.879, -1.61]}
          rotation={[0, 1.391, 0]}
          scale={[0.223, 1.853, 0.223]}
        >
          <mesh
            name="Cylinder005"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005.geometry}
            material={materials.Bamboo}
          />
          <mesh
            name="Cylinder005_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005_1.geometry}
            material={materials.BambooOutline}
          />
        </group>
        <group
          name="bamboo004"
          position={[-0.819, 1.336, -1.888]}
          rotation={[-Math.PI, 1.312, -Math.PI]}
          scale={[0.223, 1.675, 0.223]}
        >
          <mesh
            name="Cylinder006"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006.geometry}
            material={materials.Bamboo}
          />
          <mesh
            name="Cylinder006_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006_1.geometry}
            material={materials.BambooOutline}
          />
        </group>
        <group
          name="Floor"
          position={[-0.16, -0.086, -0.056]}
          rotation={[0, 1.031, 0]}
          scale={3.33}
        >
          <mesh
            name="Circle"
            castShadow
            receiveShadow
            geometry={nodes.Circle.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            name="Circle_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle_1.geometry}
            material={materials.FloorOutline}
          />
        </group>
        <group
          name="Icosphere002"
          position={[-0.749, 0.164, 1.921]}
          rotation={[0, -0.28, 0]}
          scale={[0.23, 0.183, 0.23]}
        >
          <mesh
            name="Icosphere002_1"
            castShadow
            receiveShadow
            geometry={nodes.Icosphere002_1.geometry}
            material={materials.Orange}
          />
          <mesh
            name="Icosphere002_2"
            castShadow
            receiveShadow
            geometry={nodes.Icosphere002_2.geometry}
            material={materials.OrangeOutline}
          />
        </group>
        <group
          name="Icosphere003"
          position={[-0.883, 0.164, 2.384]}
          rotation={[0, -0.28, 0]}
          scale={[0.23, 0.183, 0.23]}
        >
          <mesh
            name="Icosphere005_1"
            castShadow
            receiveShadow
            geometry={nodes.Icosphere005_1.geometry}
            material={materials.Orange}
          />
          <mesh
            name="Icosphere005_2"
            castShadow
            receiveShadow
            geometry={nodes.Icosphere005_2.geometry}
            material={materials.OrangeOutline}
          />
        </group>
        <group
          name="Icosphere004"
          position={[-0.273, 0.164, 2.033]}
          rotation={[0, -0.28, 0]}
          scale={[0.23, 0.183, 0.23]}
        >
          <mesh
            name="Icosphere006_1"
            castShadow
            receiveShadow
            geometry={nodes.Icosphere006_1.geometry}
            material={materials.Orange}
          />
          <mesh
            name="Icosphere006_2"
            castShadow
            receiveShadow
            geometry={nodes.Icosphere006_2.geometry}
            material={materials.OrangeOutline}
          />
        </group>
        <group
          name="Icosphere005"
          position={[-0.407, 0.164, 2.496]}
          rotation={[0, -0.28, 0]}
          scale={[0.23, 0.183, 0.23]}
        >
          <mesh
            name="Icosphere007_1"
            castShadow
            receiveShadow
            geometry={nodes.Icosphere007_1.geometry}
            material={materials.Orange}
          />
          <mesh
            name="Icosphere007_2"
            castShadow
            receiveShadow
            geometry={nodes.Icosphere007_2.geometry}
            material={materials.OrangeOutline}
          />
        </group>
        <group
          name="Icosphere006"
          position={[-0.594, 0.405, 2.201]}
          rotation={[0, -0.28, 0]}
          scale={[0.23, 0.183, 0.23]}
        >
          <mesh
            name="Icosphere008_1"
            castShadow
            receiveShadow
            geometry={nodes.Icosphere008_1.geometry}
            material={materials.Orange}
          />
          <mesh
            name="Icosphere008_2"
            castShadow
            receiveShadow
            geometry={nodes.Icosphere008_2.geometry}
            material={materials.OrangeOutline}
          />
        </group>
        <group
          name="Icosphere007"
          position={[0.375, 0.164, -1.86]}
          rotation={[-0.139, -0.853, -0.428]}
          scale={[0.23, 0.183, 0.23]}
        >
          <mesh
            name="Icosphere010"
            castShadow
            receiveShadow
            geometry={nodes.Icosphere010.geometry}
            material={materials.Orange}
          />
          <mesh
            name="Icosphere010_1"
            castShadow
            receiveShadow
            geometry={nodes.Icosphere010_1.geometry}
            material={materials.OrangeOutline}
          />
        </group>
        <group
          name="Icosphere008"
          position={[0.874, 0.188, -1.895]}
          rotation={[-0.496, -0.28, 0]}
          scale={[0.23, 0.183, 0.23]}
        >
          <mesh
            name="Icosphere011"
            castShadow
            receiveShadow
            geometry={nodes.Icosphere011.geometry}
            material={materials.Orange}
          />
          <mesh
            name="Icosphere011_1"
            castShadow
            receiveShadow
            geometry={nodes.Icosphere011_1.geometry}
            material={materials.OrangeOutline}
          />
        </group>
        <mesh
          name="Circle001"
          castShadow
          receiveShadow
          geometry={nodes.Circle001.geometry}
          material={materials.Water}
          position={[-0.128, 0.608, 0.032]}
          rotation={[0, 0.2, 0]}
          scale={1.627}
        />
        <mesh
          name="Plane"
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials["Material.003"]}
          position={[-1.933, 2.084, 2.239]}
          rotation={[-0.477, 0, 0]}
          scale={0.856}
        />
        <mesh
          name="Plane001"
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials["Material.003"]}
          position={[-1.933, 2.139, 2.015]}
          rotation={[-1.267, -0.105, 0.516]}
          scale={0.569}
        />
        <mesh
          name="Plane002"
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials["Material.003"]}
          position={[-1.933, 3.717, 0.61]}
          rotation={[0.769, 0, 0]}
          scale={0.856}
        />
        <mesh
          name="Plane003"
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials["Material.003"]}
          position={[-1.306, 3.001, -1.281]}
          rotation={[-0.939, -0.105, 0.516]}
          scale={0.569}
        />
        <mesh
          name="Plane004"
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials["Material.003"]}
          position={[-0.814, 1.932, -2.26]}
          rotation={[1.009, -0.105, 0.516]}
          scale={0.734}
        />
        <mesh
          name="Plane005"
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials["Material.003"]}
          position={[-0.814, 1.795, -2.276]}
          rotation={[0.494, -0.105, 0.516]}
          scale={0.592}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/CapybaraScene.glb");
