let footerNavBtn = document.querySelectorAll(".footer-nav-btn");
let footerMainNav = document.querySelectorAll(".footer-main-nav");
let footerNav = document.querySelectorAll(".footer-nav");

footerNavBtn.forEach((item, index) => {
  item.addEventListener("click", function () {
    footerMainNav[index].classList.toggle("h-0");
    footerMainNav[index].classList.toggle("!pt-0");
    footerMainNav[index].classList.toggle("!pb-0");
    footerMainNav[index].classList.toggle("overflow-hidden");
    footerMainNav[index].classList.toggle("border-none");
    footerNav[index].classList.toggle("!gap-0");
  });
});

footerNavBtn.addEventListener("click", function () {
  footerMainNav.classList.toggle("hidden");
});

function animationFun() {
  let siteHeader = document.querySelector("#site-header");

  var renderer = new THREE.WebGLRenderer({
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  siteHeader.appendChild(renderer.domElement);

  var onRenderFcts = [];
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(
    25,
    window.innerWidth / window.innerHeight,
    0.01,
    1000
  );
  camera.position.z = 5;
  camera.position.y = 2;
  scene.fog = new THREE.Fog(0x000, 0, 45);

  (function () {
    var light = new THREE.AmbientLight(0x202020);
    scene.add(light);
    var light = new THREE.DirectionalLight("red", 5);
    light.position.set(0.5, 0.0, 2);
    scene.add(light);
    var light = new THREE.DirectionalLight("red", 0.75 * 2);
    light.position.set(-0.5, -0.5, -2);
    scene.add(light);
  })();

  var heightMap = THREEx.Terrain.allocateHeightMap(256, 256);
  THREEx.Terrain.simplexHeightMap(heightMap);
  var geometry = THREEx.Terrain.heightMapToPlaneGeometry(heightMap);
  THREEx.Terrain.heightMapToVertexColor(heightMap, geometry);
  var material = new THREE.MeshBasicMaterial({
    wireframe: true,
  });
  var mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  mesh.lookAt(new THREE.Vector3(0, 1, 0));
  mesh.scale.y = 3.5;
  mesh.scale.x = 3;
  mesh.scale.z = 0.2;
  mesh.scale.multiplyScalar(10);

  // Flags for arrow keys
  var keys = {
    ArrowLeft: false,
    ArrowRight: false,
    ArrowUp: false,
    ArrowDown: false,
  };

  // Event listeners for key events
  siteHeader.addEventListener("keydown", function (event) {
    if (keys.hasOwnProperty(event.code)) {
      keys[event.code] = true;
    }
  });
  siteHeader.addEventListener("keyup", function (event) {
    if (keys.hasOwnProperty(event.code)) {
      keys[event.code] = false;
    }
  });

  function update() {
    if (keys.ArrowLeft) {
      // Rotate the mesh to the left
      mesh.rotation.z += 0.02;
    }
    if (keys.ArrowRight) {
      // Rotate the mesh to the right
      mesh.rotation.z -= 0.02;
    }
    if (keys.ArrowUp) {
      // Zoom in
      camera.position.z -= 0.3;
    }
    if (keys.ArrowDown) {
      // Zoom out
      camera.position.z += 0.3;
    }
  }

  // Create 8 additional terrain meshes surrounding the central one
  var surroundingMeshes = [];
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      if (x === 0 && y === 0) continue;

      var surroundingMesh = mesh.clone();
      surroundingMesh.position.x = x * mesh.scale.x * 256;
      surroundingMesh.position.y = y * mesh.scale.y * 256;
      scene.add(surroundingMesh);
      surroundingMeshes.push(surroundingMesh);
    }
  }

  function updatePosition() {
    // Update the position of surrounding meshes based on the central mesh's position
    surroundingMeshes.forEach(function (surroundingMesh) {
      surroundingMesh.position.z = mesh.position.z;
      surroundingMesh.rotation.z = mesh.rotation.z;
    });
  }

  onRenderFcts.push(function () {
    update();
    updatePosition();
    renderer.render(scene, camera);
  });

  var lastTimeMsec = null;
  requestAnimationFrame(function animate(nowMsec) {
    requestAnimationFrame(animate);
    lastTimeMsec = lastTimeMsec || nowMsec - 1000 / 60;
    var deltaMsec = Math.min(200, nowMsec - lastTimeMsec);
    lastTimeMsec = nowMsec;
    onRenderFcts.forEach(function (onRenderFct) {
      onRenderFct(deltaMsec / 1000, nowMsec / 1000);
    });
  });
  // Variable to keep track of whether the mouse is being dragged
  var isDragging = false;

  // Event listeners for mouse events
  siteHeader.addEventListener("mousedown", function () {
    isDragging = true;
  });
  siteHeader.addEventListener("mousemove", function (event) {
    if (isDragging) {
      // Rotate the mesh based on mouse movement
      mesh.rotation.z += event.movementX * 0.01;
      // Zoom in and out based on dragging up and down
      camera.position.z -= event.movementY * 0.05;
    }
  });
  siteHeader.addEventListener("mouseup", function () {
    isDragging = false;
  });
}

animationFun();
