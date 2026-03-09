
// SKILL CHART

const ctx = document.getElementById('skillChart');

new Chart(ctx,{

type:'bar',

data:{
labels:['Journalism','Data Science','Web Development'],

datasets:[{
label:'Skill Level',
data:[85,80,90],
backgroundColor:['blue','green','orange']
}]

}

});



// GITHUB PROJECT VIEWER

fetch("https://api.github.com/users/YOUR_GITHUB_USERNAME/repos")

.then(res => res.json())

.then(data => {

let repos = document.getElementById("repos");

data.slice(0,5).forEach(repo => {

let div = document.createElement("div");

div.classList.add("card");

div.innerHTML = `
<h3>${repo.name}</h3>
<p>${repo.description || "No description"}</p>
<a href="${repo.html_url}" target="_blank">View Project</a>
`;

repos.appendChild(div);

});

});



// 3D GLOBE

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/500,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth,500);

document
.getElementById("globeContainer")
.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(5,32,32);

const material = new THREE.MeshBasicMaterial({
color:0x3b82f6,
wireframe:true
});

const globe = new THREE.Mesh(geometry,material);

scene.add(globe);

camera.position.z = 10;

function animate(){

requestAnimationFrame(animate);

globe.rotation.y += 0.003;

renderer.render(scene,camera);

}

animate();