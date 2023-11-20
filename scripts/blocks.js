import * as THREE from 'three'

const textureLoader = new THREE.TextureLoader()

function loadTexture(path){
    const texture = textureLoader.load(path)
    texture.colorSpace = THREE.SRGBColorSpace
    texture.minFilter = THREE.NearestFilter
    texture.magFilter = THREE.NearestFilter
    return texture
}

const textures = {
    dirt: loadTexture('textures/dirt.png'),
    grass: loadTexture('textures/grass_block_top.png'),
    grassSide: loadTexture('textures/grass_block_side.png'),
    coalOre: loadTexture('textures/coal_ore.png'),
    stone: loadTexture('textures/stone.png'),
    ironOre: loadTexture('textures/iron_ore.png')

}

export const blocks = {
    empty:{
        id: 0,
        name: 'empty',
    },
    grass:{
        id: 1,
        name: 'grass',
        color: 0x559020,
        material: [
            new THREE.MeshLambertMaterial({ map: textures.grassSide }),
            new THREE.MeshLambertMaterial({ map: textures.grassSide }),
            new THREE.MeshLambertMaterial({ map: textures.grass }),
            new THREE.MeshLambertMaterial({ map: textures.dirt }),
            new THREE.MeshLambertMaterial({ map: textures.grassSide }),
            new THREE.MeshLambertMaterial({ map: textures.grassSide })
        ]
    },
    dirty:{
        id: 2,
        name: 'dirty',
        color: 0x807020,
        material: new THREE.MeshLambertMaterial({ map: textures.dirt })
    },
    stone:{
        id: 3,
        name: 'stone',
        color: 0x808080,
        scale: {x: 30, y: 30, z:30},
        scarcity: 0.1,
        material: new THREE.MeshLambertMaterial({ map: textures.stone }),
    },
    coalOre:{
        id: 4,
        name: 'coalOre',
        color: 0x202020,
        scale: {x: 7, y: 7, z:7},
        scarcity: 0.85,
        material: new THREE.MeshLambertMaterial({ map: textures.coalOre }),
    },
    ironOre:{
        id: 5,
        name: 'ironOre',
        color: 0x806060,
        scale: {x: 5, y: 5, z:5},
        scarcity: 0.91,
        material: new THREE.MeshLambertMaterial({ map: textures.ironOre }),
    },
}

export const resources = [
    blocks.stone,
    blocks.coalOre,
    blocks.ironOre,
]