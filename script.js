
let but = document.querySelectorAll(".btn");
let content = document.getElementById("content");
document.onload = () => {
    content.innerHTML = "Hover on nav button to see info";
}

but.forEach(btn => {
    btn.addEventListener("click", () => {
        
        if(btn.innerHTML === "About"){
            content.innerHTML = `
            <section class="about">
          <h1>About ME!</h1>
          <img src="new-pfp.jpg" alt="profile-image" />
          <p>
            Hi, I'm
            <span style="color: #ffd166; font-weight: bold">Lucky</span>, a
            self-taught
            <span style="font-weight: bold">Front-End Web Developer</span> who
            enjoys turning ideas into real, interactive websites.<br /><br />

            I build projects using
            <span style="color: #ffd166; font-weight: bold">HTML</span>,
            <span style="color: #FFD166; font-weight: bold">CSS</span>,
            and
            <span style="color: #FFD166; font-weight: bold"
              >JavaScript</span
            >, while continuously learning technologies like
            <span style="color: #FFD166; font-weight: bold"
              >Firebase</span
            >
            and
            <span style="color: #FFD166; font-weight: bold"
              >React Native</span
            >.<br /><br />

            I believe the best way to learn is by building. From a
            <span style="font-style: italic">Finance Tracker</span> to
            <span style="font-style: italic">The Button Factory</span>, every
            project helps me improve my skills and solve real-world problems.<br /><br />

            <span style="font-weight: bold">Tech Stack</span><br />
            <span style="color: #FFE29A">●</span> HTML5<br />
            <span style="color: #ffd166">●</span> CSS3<br />
            <span style="color: #ffd166">●</span> JavaScript<br />
            <span style="color: #ffd166">●</span> Firebase<br />
            <span style="color: #ffd166">●</span> Git & GitHub<br />
            <span style="color: #ffd166">●</span> Responsive Web Design<br /><br />
          </p>
        </section>`;
        }
        if(btn.innerHTML === "Projects"){
            content.innerHTML = `
            <section class="page project">
            <h1>Project</h1>
            <div class="project-div">
              <h4>Portfolio</h4>
              <img src="images/port.png" alt="">
            </div>
            <div class="project-div">
              <h4>Expanse Tracker</h4>
              <img src="images/app.png" alt="">
            </div>
            <div class="project-div">
              <h4>The Button Factory</h4>
              <img src="images/button-imgs.PNG" alt="">
            </div>
          </section>`;
        }

        if(btn.innerHTML === "Youtube"){
            content.innerHTML = `
            <section class="page youtube">
          
          <a href="https://www.youtube.com/@LazyBoi-j1v" target="_blank"><h1>LINK</h1></a>
        </section>`;
        }
    })
})
