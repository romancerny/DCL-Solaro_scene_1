
const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("models/FloorBaseGrass_02/FloorBaseGrass_02.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform4)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform5)

const caribbeanWater = new Entity('caribbeanWater')
engine.addEntity(caribbeanWater)
caribbeanWater.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
caribbeanWater.addComponentOrReplace(transform6)
const gltfShape2 = new GLTFShape("models/WaterPatchFull_01/WaterPatchFull_01.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
caribbeanWater.addComponentOrReplace(gltfShape2)

const floorCreamSmall = new Entity('floorCreamSmall')
engine.addEntity(floorCreamSmall)
floorCreamSmall.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(32, 0, 32),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8, 1, 3.5)
})
floorCreamSmall.addComponentOrReplace(transform7)
const gltfShape3 = new GLTFShape("models/CreamFloor_Small.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
floorCreamSmall.addComponentOrReplace(gltfShape3)

const floorCreamSmall2 = new Entity('floorCreamSmall2')
engine.addEntity(floorCreamSmall2)
floorCreamSmall2.setParent(_scene)
floorCreamSmall2.addComponentOrReplace(gltfShape3)
const transform8 = new Transform({
  position: new Vector3(32, 0, 28),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8, 1, 7)
})
floorCreamSmall2.addComponentOrReplace(transform8)
