$(function () {

    var canvas = $('<canvas></canvas>');

    $('body').append(canvas)
    var scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(30, 4/3, 1, 1000);
    var target = new THREE.Vector3({x:0,y:0,z:0,});
    camera.position.set(0, 2, 40);
    camera.lookAt(target);
    controls = new THREE.OrbitControls(camera, canvas.get(0));
    var renderer = new THREE.WebGLRenderer({canvas: canvas.get(0), preserveDrawingBuffer: true});
    renderer.setSize($(this).width(), $(this).width() * (3/4));
    effekseer.init(renderer.context);
    effect = effekseer.loadEffect(location.hash.substr(1));
    var directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(0, 0.7, 0.7);
    scene.add(directionalLight);
    var gridHelper = new THREE.GridHelper(20 );
    scene.add( gridHelper );
    (function renderLoop() {
        requestAnimationFrame(renderLoop);

        effekseer.update();

        controls.update();

        renderer.render(scene, camera);
        effekseer.setProjectionMatrix(camera.projectionMatrix.elements);
        effekseer.setCameraMatrix(camera.matrixWorldInverse.elements);
        effekseer.draw();

        
    })();
    function effectLoop() {
        var play = effekseer.play(effect, 0, 0, 0);
        var timer = setInterval(function () {
            if (!play.exists) {
                effectLoop();
                clearInterval(timer);
            }
        }, 100);

        
    }
    var timer = setInterval(function () {
        if (effect.isLoaded) {
            effectLoop();
            clearInterval(timer);
        }
    }, 100);
    $(window).resize(function () {
        renderer.setSize($(window).width(), $(window).width() * (3/4));
    })

})