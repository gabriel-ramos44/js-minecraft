import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { World } from './world'

import Stats from 'three/examples/jsm/libs/stats.module.js'
import { createUI } from './ui'
import { Player } from './player'
//import { Physics } from './physics'

const stats = new Stats()
document.body.append(stats.dom)

const renderer = new THREE.WebGLRenderer()
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0x80a0c0)
renderer.shadowMap.enabled = true
//renderer.shadowMap.type = THREE.PCFShadowMap
document.body.appendChild(renderer.domElement)

const orbitCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight)
orbitCamera.position.set(-32 ,16 ,-32)
orbitCamera.lookAt(0 , 0, 0)

const controls = new OrbitControls(orbitCamera, renderer.domElement)
controls.target.set(16, 0, 16)
controls.update()

const scene = new THREE.Scene()
const world = new World()
//world.generateTerrain();
//world.generateMeshes();
world.generate()
scene.add(world)

const player = new Player(scene)
//const physics = new Physics()

function setupLights() {
    const sun = new THREE.DirectionalLight();
    sun.intensity = 1.5;
    sun.position.set(50, 50, 50);
    sun.castShadow = true;

    // Set the size of the sun's shadow box
    sun.shadow.camera.left = -40;
    sun.shadow.camera.right = 40;
    sun.shadow.camera.top = 40;
    sun.shadow.camera.bottom = -40;
    sun.shadow.camera.near = 0.1;
    sun.shadow.camera.far = 200;
    sun.shadow.bias = -0.001;
    scene.add(sun);

    scene.add(new THREE.CameraHelper(sun.shadow.camera));

    const ambient = new THREE.AmbientLight();
    ambient.intensity = 0.1;
    scene.add(ambient);
}


let previousTime = performance.now()

function animate() {
    let currentTime = performance.now()
    let dt = (currentTime - previousTime) / 1000

    requestAnimationFrame(animate)
    player.applyInputs(dt)
    //physics.update(dt, player, world)
    renderer.render(scene, player.controls.isLocked ? player.camera : orbitCamera)
    stats.update()
    previousTime =  currentTime
}

window.addEventListener('resize', () =>{
    orbitCamera.aspect = window.innerWidth / window.innerHeight
    orbitCamera.updateProjectionMatrix()
    player.camera.aspect = window.innerWidth / window.innerHeight
    player.camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
})

setupLights()
createUI(world)
animate()