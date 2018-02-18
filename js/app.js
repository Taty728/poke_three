
const app = new Vue({
    el: '#app',
    data: {
        keyword: 'pokemons',
        scenes: createScenes()
    },
    methods: {
        setJson (payload){
            this.json - payload
        }
    }
});

function createScenes(){
    var scenes = [];
    var renderer;
    var canvas;

    console.log(scenes);
    animate();
    var geometries = [
        new THREE.BoxGeometry(100, 100, 100),
        new THREE.BoxGeometry(300, 300, 300),
        new THREE.BoxGeometry(50, 50, 50)
    ];

    for ( var i = 0; i < 4; i++){
        var scene = new THREE.Scene();

        var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 3000);
        scene.userData.camera = camera;

        var geometry = geometries[ geometries.length * Math.random() | 0 ];

        var material = new THREE.MeshStandardMaterial( {
            color: new THREE.Color().setHSL( Math.random(), 1, 0.75 ),
            roughness: 0.5,
            metalness: 0,
            flatShading: true
        } );

        scene.add( new THREE.Mesh( geometry, material ) );

        scene.add( new THREE.HemisphereLight( 0xaaaaaa, 0x444444 ) );
        var light = new THREE.DirectionalLight( 0xffffff, 0.5 );
        light.position.set( 1, 1, 1 );
        scene.add( light );
        
        scenes.push( scene );
    }

    var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setClearColor(0x00000);
    //document.body.appendChild( renderer.domElement );

    function animate() {
        render();
        requestAnimationFrame( animate );
        
    }

    function render() {
        scenes.forEach( function( scene ) {
            var camera = scene.userData.camera;
            renderer.render( scene, camera );	
        } );
    }

    return scenes;
}



    