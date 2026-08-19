//-------- Login and Sign Up Tabs --------

const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");

const loginSection = document.getElementById("loginSection");
const signupSection = document.getElementById("signupSection");


//-------- Login Tab --------

loginTab.addEventListener("click", function(){

    loginTab.classList.add("active");
    signupTab.classList.remove("active");

    loginSection.style.display = "block";
    signupSection.style.display = "none";

});


//-------- Sign Up Tab --------

signupTab.addEventListener("click", function(){

    signupTab.classList.add("active");
    loginTab.classList.remove("active");

    loginSection.style.display = "none";
    signupSection.style.display = "block";

});


//-------- Tourist and Guide Buttons --------

const touristBtn = document.getElementById("touristBtn");
const guideBtn = document.getElementById("guideBtn");

const guideSection = document.getElementById("guideSection");


//-------- Tourist Button --------

touristBtn.addEventListener("click", function(){

    touristBtn.classList.add("active");
    guideBtn.classList.remove("active");

    guideSection.style.display = "none";

});


//-------- Guide Button --------

guideBtn.addEventListener("click", function(){

    guideBtn.classList.add("active");
    touristBtn.classList.remove("active");

    guideSection.style.display = "block";

});