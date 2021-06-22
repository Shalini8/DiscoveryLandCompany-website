console.log("hello header.js");
document.getElementById('header').innerHTML = `
<ul class="nav-items" >
            <li class="nav-link">
                <a href="../pages/aboutDLC.html">About DLC</a>
            </li>
            <li class="nav-link">
                <a href="../pages/ourWorlds.html">Our Worlds</a>
            </li>
            <li class="nav-link">
                <a href="../pages/experiences.html">Experiences</a>
            </li>
            <li class="nav-link">
                <a href="../pages/gallery.html">Gallery</a>
            </li>
            <li class="nav-link">
                <a href="../pages/press.html">Press</a>
            </li>
            
            <li class="nav-link">
            
            <div class="dropdown">
                <a href="javascript:void(0);" onclick="myFunction()" class="drpdwn-btn"><i class="fa fa-bars"></i>
                </a>
                <div id="menu" class="menu-content">
                <a href="../pages/index1.html" class="logo-content">
                <img src="../assets/logo.svg" alt="logo">
                </a>
                    <div class="a-div">
                        <a class="drpdwn-a" href="../pages/magazine.html">Magazine</a>
                    </div>
                    <div class="a-div">
                        <a class="drpdwn-a" href="#">Company</a>
                    </div>
                    <div class="a-div">
                        <a class="drpdwn-a" href="#">Foundation</a>
                    </div>
                    <div class="a-div">
                        <a class="drpdwn-a" href="#">Careers</a>
                    </div>
                    <div class="a-div">
                        <a class="drpdwn-a" href="#">Contact</a>
                    </div>
                </div>
            </div>
        </li>
        </ul>
        `

function myFunction() {
    var dropdown = document.getElementById("menu");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}