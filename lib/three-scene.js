import * as THREE from 'three'

export function buildLuxuryScene(canvas) {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color('#090908')
  scene.fog = new THREE.Fog('#090908', 7, 26)

  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100)
  camera.position.set(0, 1.4, 8.5)

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(canvas.parentElement.clientWidth, canvas.parentElement.clientHeight, false)
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.05
  renderer.outputColorSpace = THREE.SRGBColorSpace

  const ambient = new THREE.AmbientLight('#c5a059', 0.5)
  const key = new THREE.DirectionalLight('#fdfbf7', 2.7)
  key.position.set(4, 7, 5)
  const fill = new THREE.DirectionalLight('#88a39a', 1.2)
  fill.position.set(-5, 2, -2)
  const rim = new THREE.PointLight('#c5a059', 8, 30, 2)
  rim.position.set(-1.8, 1.8, 2.8)

  scene.add(ambient, key, fill, rim)

  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(26, 26, 1, 1),
    new THREE.MeshPhysicalMaterial({
      color: '#11100d',
      roughness: 0.82,
      metalness: 0.08,
      clearcoat: 0.2,
      clearcoatRoughness: 0.45,
    }),
  )
  floor.rotation.x = -Math.PI / 2
  floor.position.y = -1.5
  scene.add(floor)

  const stone = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.15, 1),
    new THREE.MeshPhysicalMaterial({
      color: '#d5d0c9',
      roughness: 0.36,
      metalness: 0.22,
      clearcoat: 0.88,
      clearcoatRoughness: 0.08,
      transmission: 0.12,
      thickness: 0.5,
      envMapIntensity: 1.3,
    }),
  )
  stone.position.set(0.1, 0.2, 0)
  scene.add(stone)

  const frame = new THREE.Mesh(
    new THREE.TorusGeometry(2.1, 0.08, 16, 120),
    new THREE.MeshStandardMaterial({ color: '#c5a059', metalness: 0.95, roughness: 0.22 }),
  )
  frame.rotation.x = Math.PI / 2.5
  frame.position.y = 0.1
  scene.add(frame)

  const shell = new THREE.Mesh(
    new THREE.BoxGeometry(3.8, 2.5, 2.4, 2, 2, 2),
    new THREE.MeshPhysicalMaterial({
      color: '#2b2a27',
      roughness: 0.08,
      metalness: 0.55,
      transparent: true,
      opacity: 0.14,
      transmission: 0.82,
      thickness: 1.1,
      clearcoat: 1,
      clearcoatRoughness: 0.02,
    }),
  )
  shell.position.set(0.2, 0.2, -0.2)
  scene.add(shell)

  const pointer = { x: 0, y: 0 }

  const onPointerMove = (event) => {
    const bounds = canvas.getBoundingClientRect()
    pointer.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1
    pointer.y = -(((event.clientY - bounds.top) / bounds.height) * 2 - 1)
  }

  window.addEventListener('pointermove', onPointerMove)

  let frameId = 0
  const resize = () => {
    const width = canvas.parentElement.clientWidth
    const height = canvas.parentElement.clientHeight
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height, false)
  }

  const observer = new ResizeObserver(resize)
  observer.observe(canvas.parentElement)

  const tick = () => {
    stone.rotation.x += 0.003
    stone.rotation.y += 0.004
    frame.rotation.z += 0.0025
    shell.rotation.y += 0.0015
    camera.position.x += (pointer.x * 0.8 - camera.position.x) * 0.03
    camera.position.y += (1.4 + pointer.y * 0.35 - camera.position.y) * 0.03
    camera.lookAt(0, 0.2, 0)
    renderer.render(scene, camera)
    frameId = requestAnimationFrame(tick)
  }

  tick()

  return () => {
    cancelAnimationFrame(frameId)
    observer.disconnect()
    window.removeEventListener('pointermove', onPointerMove)
    renderer.dispose()
    scene.clear()
  }
}