
let main = document.getElementById("main");

function skill(){
    main.innerHTML = `
        <div class="skills">

        <div class="html">
          <h4>HTML <i class="fa-brands fa-html5" style="color: red;"></i></h4>
          <progress max="100" value="80"></progress>
        </div>
        <div class="html">
          <h4>JAVASCRIPT <i class="fa-brands fa-square-js" style="color: yellow;"></i></h4>
          <progress max="100" value="50"></progress>
        </div>
        <div class="html">
          <h4>CSS <i class="fa-brands fa-css3-alt" style="color: rgb(27, 169, 217);"></i></h4>
          <progress max="100" value="70"></progress>
        </div>
        <div class="html">
          <h4>REACT <i class="fa-brands fa-react" style="color: rgb(0, 255, 157);"></i></h4>
          <progress max="100" value="10"></progress>
        </div>

    </div>
    `;
}

function project(){
    main.innerHTML = `
    
    <div class="project">

  <div>
    <h1>FINANCE TRACKER</h1>
    <img src="images/app.PNG" alt="">
  </div>

   <div>
    <h1>BUTTON FACTORY</h1>
    <img src="images/button-imgs.PNG" alt="">
  </div>

   <div>
    <h1>TIC TAC TOE</h1>
    <img src="images/game1.PNG" alt="">
  </div>

   <div>
    <h1>NOTE APP</h1>
    <img src="images/note.PNG" alt="">
  </div>

</div>
    
    `;
}

function about(){
    main.innerHTML = `
    
<div class="about">
  <h1>A passionate Web Developer & Creator 💻✨ I love turning ideas into interactive websites, apps, and unique digital experiences 🚀 I’m always learning, building, and experimenting with new ideas. 🧠🔥 Code it. Create it. Make it unique. 🎨</h1>
</div>

    `;
}

function contact(){

    main.innerHTML = `
    <div class="contact">
        <a href="https://github.com/harsh-kashyap-01">
          <i class="fa-brands fa-square-github"></i>GitHub
        </a>
        <a href="https://www.linkedin.com/in/harsh-kashyap-98465241b/"><i class="fa-brands fa-linkedin"></i> Linkedin</a>
        <a href="mailto:harsh1111kashyap@gmail.com"><i class="fa-solid fa-envelope"></i>Email</a>
        <a href="https://www.instagram.com/whoh4rsh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><i class="fa-brands fa-instagram"></i>Instagram</a>
      </div>
    
    `;

}