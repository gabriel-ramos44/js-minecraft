
import * as THREE from 'three';
import { blocks } from './blocks';
import { Player } from './player';
import { World } from './world';
/*
export class Physics{
    constructor(){

    }

    broadPhase(player, world) {
        const candidates = []
        const extents = {
            x: { min: Math.floor(player.position.x - player.radius), max: Math.floor(player.position.x + player.radius)},
            y: { min: Math.floor(player.position.y - player.height), max: Math.floor(player.position.y)},
            z: { min: Math.floor(player.position.z - player.radius), max: Math.floor(player.position.z + player.radius)}
        }

        for( let x= extents.x.min; x <= extents.x.max; x++){
            for( let y= extents.y.min; y <= extents.y.max; y++){
                for( let z= extents.z.min; z <= extents.z.max; z++){
                    const block = world.getBlock(x,y,z)
                    if(block && block.id !== blocks.empty.id){
                        candidates.push(block)
                    }
            }
        }

    }

    update(dt, player, world) {
        this.accumulator += dt;
        while (this.accumulator >= this.stepSize) {
          player.velocity.y -= this.gravity * this.stepSize;
          player.applyInputs(this.stepSize);
          this.detectCollisions(player, world);
          this.accumulator -= this.stepSize;
        }

        player.updateBoundsHelper();
    }

    detectCollisions(player, world) {
        player.onGround = false;
        this.helpers.clear();

        const candidates = this.broadPhase(player, world);
        const collisions = this.narrowPhase(candidates, player);

        if (collisions.length > 0) {
            this.resolveCollisions(collisions, player);
        }
    }

}
}
*/