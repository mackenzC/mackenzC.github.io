import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const container = document.getElementById('contact-model-container');
const scene = new THREE.Scene();

// Camera setup ----------
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.set(3.5, 1.5, -2);

// Renderer setup ---------
const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
renderer.setSize(container.clientWidth, container.clientHeight); //use container size!!
renderer.setAnimationLoop( animate );
container.appendChild( renderer.domElement );

function resizeRenderer() {
    const width = container.clientWidth;
    const height = container.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
}
window.addEventListener('resize', resizeRenderer);
resizeRenderer();

// Lighting setup ----------
const skyColor = 0xB1E1FF;  // light blue
const groundColor = 0xB97A20;  // brownish orange
const intensity = 1.5;
const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
scene.add(light);


const directColor = 0xFFFFFF;
const directIntensity = 1;
const directLight = new THREE.DirectionalLight(directColor, directIntensity);
directLight.position.set(0, 6, 7.5);
scene.add(directLight);
scene.add(directLight.target);

// Orbit Controls setup ----------
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // an animation effect

// Locks yaxis
controls.minPolarAngle = Math.PI / 2; // 90 degrees
controls.maxPolarAngle = Math.PI / 2; // 90 degrees

controls.enableZoom = false;

// Model loading & animation ----------
let mixer;
let model;

const loader = new GLTFLoader();
// loader.load('./models/kiwi_scene.glb', function(gltf) {

const modelPath = `${import.meta.env.BASE_URL}models/world.glb`;
loader.load(modelPath, function(gltf) {

    model = gltf.scene;
    scene.add(model);

    // Animation setup
    mixer = new THREE.AnimationMixer(model);
    const clips = gltf.animations;
    const clip1 = THREE.AnimationClip.findByName(clips, 'WalkingAction');
    const clip2 = THREE.AnimationClip.findByName(clips, 'SphereAction');
    
    const action1 = mixer.clipAction(clip1);
    const action2 = mixer.clipAction(clip2);
    action2.timeScale = -0.3; // Slow down the second animation

    action1.play();
    action2.play();

    console.log('Model loaded successfully:', gltf);
    console.log('Model position:', model.position);

    model.position.set(0, -0.5, 0); // position.set(x, y, z)
    model.scale.set(1.1, 1.1, 1.1);
    
    
}, undefined, function(error) {
    console.error('An error occurred while loading the model:', error);
});

const clock = new THREE.Clock();
function animate() {
    if (model) {
        mixer.update(clock.getDelta()); // Update the animation mixer
    }

    controls.update();
    // console.log('Camera position:', camera.position.x, camera.position.y, camera.position.z);
    renderer.render(scene, camera);
}
