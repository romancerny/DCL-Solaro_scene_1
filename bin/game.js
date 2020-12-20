
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

const whitetile = new Entity('whitetile')
engine.addEntity(whitetile)
whitetile.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(16, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
whitetile.addComponentOrReplace(transform6)
const gltfShape2 = new GLTFShape("models/whiteTile.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
whitetile.addComponentOrReplace(gltfShape2)

const whitetile2 = new Entity('whitetile2')
engine.addEntity(whitetile2)
whitetile2.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(16, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
whitetile2.addComponentOrReplace(transform7)
whitetile2.addComponentOrReplace(gltfShape2)

const whitetile3 = new Entity('whitetile3')
engine.addEntity(whitetile3)
whitetile3.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(16, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
whitetile3.addComponentOrReplace(transform8)
whitetile3.addComponentOrReplace(gltfShape2)

const whitetile4 = new Entity('whitetile4')
engine.addEntity(whitetile4)
whitetile4.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(16, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
whitetile4.addComponentOrReplace(transform9)
whitetile4.addComponentOrReplace(gltfShape2)

const whitetile5 = new Entity('whitetile5')
engine.addEntity(whitetile5)
whitetile5.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(17, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5, 1, 4.999999523162842)
})
whitetile5.addComponentOrReplace(transform10)
const gltfShape3 = new GLTFShape("models/whiteTile.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
whitetile5.addComponentOrReplace(gltfShape3)

const whitetile6 = new Entity('whitetile6')
engine.addEntity(whitetile6)
whitetile6.setParent(_scene)
whitetile6.addComponentOrReplace(gltfShape3)
const transform11 = new Transform({
  position: new Vector3(15, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5, 1, 4.999999523162842)
})
whitetile6.addComponentOrReplace(transform11)

const whitetile7 = new Entity('whitetile7')
engine.addEntity(whitetile7)
whitetile7.setParent(_scene)
whitetile7.addComponentOrReplace(gltfShape3)
const transform12 = new Transform({
  position: new Vector3(15, 0, 17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5, 1, 4.999999523162842)
})
whitetile7.addComponentOrReplace(transform12)

const whitetile8 = new Entity('whitetile8')
engine.addEntity(whitetile8)
whitetile8.setParent(_scene)
whitetile8.addComponentOrReplace(gltfShape3)
const transform13 = new Transform({
  position: new Vector3(17, 0, 17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5, 1, 4.999999523162842)
})
whitetile8.addComponentOrReplace(transform13)
