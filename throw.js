AFRAME.registerComponent("bowling-ball",{
    init:function(){
        this.bowl()
        
    },
    bowl: function(){
        window.addEventListener("keydown",(e)=>{
          if(e.key==="z") {
            ball= document.createElement("a-entity");
            var cam = document.querySelector("#camera")
            pos=cam.getAttribute("position");
            ball.setAttribute("geometry", {
                primitive: "sphere",
                radius: 1,

            })
            ball.setAttribute("position", {
                x:pos.x,
                y:pos.y,
                z:pos.z
            })
            ball.setAttribute("material", "color", "white")
            var camera = document.querySelector("#camera").object3D;
            
            var direction = new THREE.Vector3();
            camera.getWorldDirection(direction);

            ball.setAttribute("velocity", direction.multiplyScalar(-10));
            var scene= document.querySelector("#scene");
            scene.appendChild(ball);
          }
        })
    }
})