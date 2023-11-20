import * as THREE from 'three'
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js'

export class Player{
    radius = 0.5
    height = 1.75
    maxSpeed = 15
    input = new THREE.Vector3()
    velocity = new THREE.Vector3()
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 100)
    controls = new PointerLockControls(this.camera, document.body)
    cameraHelper = new THREE.CameraHelper(this.camera)

    constructor(scene) {
        this.camera.position.set(32, 16, 32)
        scene.add(this.camera)
        scene.add(this.cameraHelper)
        document.addEventListener('keyup', this.onKeyUp.bind(this))
        document.addEventListener('keydown', this.onKeyDown.bind(this))
    }

    applyInputs(dt){
        if(this.controls.isLocked){
            this.velocity.x = this.input.x
            this.velocity.z = this.input.z
            this.controls.moveRight(this.velocity.x * dt)
            this.controls.moveForward(this.velocity.z * dt)
        }
    }

    get position(){
        return this.camera.position
    }

    lockControls(controls){
        if(controls.isLocked)
        controls.lock()
    }

    onKeyDown(event){
        if(!this.controls.isLocked){
            this.controls.lock()
        }

        switch (event.code) {
            case 'KeyW':
              this.input.z = this.maxSpeed
              break
            case 'KeyA':
              this.input.x = -this.maxSpeed
              break
            case 'KeyS':
              this.input.z = -this.maxSpeed
              break
            case 'KeyD':
              this.input.x = this.maxSpeed
              break
            case 'KeyR':
              if (this.repeat) break
              this.position.set(32, 10, 32)
              this.velocity.set(0, 0, 0)
              break
          }
    }

    onKeyUp(event) {
        if (!this.controls.isLocked) {
            this.controls.lock();
        }

        switch (event.code) {
            case 'KeyW':
            case 'KeyS':
                this.input.z = 0;
                break;
            case 'KeyA':
            case 'KeyD':
                this.input.x = 0;
                break;
        }
    }

}