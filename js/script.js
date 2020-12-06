$(document).ready(function(){
   $('.slider').slick({
       lazyLoad: 'ondemand',
       slidesToShow: 3,
       slidesToScroll: 1,
       dots: true,
       speed: 500,
       autoplay: true,
       autoplaySpeed: 1800,
       waitForAnimate: true,
       centerMode: true,
       variableWidth: false,
       centerPadding: false,
       touchThreshold: 10,


       responsive:[
        {
         breakpoint: 768,
        settings: {
        slidesToShow:3
        }},
        {
        breakpoint: 479,
        settings: {
        slidesToShow:1
        }}
       ]

   });
});




$(document).ready(function(){
    $('.slider__item').click(function() {
       var a = this.id;

        //slick-slide00 - first element
        //slick-slide08 - last element

        switch(a){
                // sun
            case 'slick-slide00' :
             document.getElementById('main').style.display="flex";           document.getElementById('link').href="https://en.wikipedia.org/wiki/Sun";
             document.getElementById('title').innerHTML = "sun";
             document.getElementById('photo').src="img/sun.png";
             document.getElementById('text').innerHTML= "The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy mainly as light and infrared radiation.";
                break;
            // MERCURY
            case 'slick-slide01' :
             document.getElementById('main').style.display="flex";           document.getElementById('link').href="https://en.wikipedia.org/wiki/Mercury_(planet)";
             document.getElementById('title').innerHTML = "MERcury";
             document.getElementById('photo').src = "img/mercury.png";

             document.getElementById('text').innerHTML= "Mercury is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the planets in the Solar System.";
                break;

                // VENUS
             case 'slick-slide02' :
             document.getElementById('main').style.display="flex";           document.getElementById('link').href="https://en.wikipedia.org/wiki/Venus";
             document.getElementById('photo').src = "img/venus.png";
             document.getElementById('title').innerHTML = "venus";
             document.getElementById('text').innerHTML= "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the second-brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasion, visible to the naked eye in broad daylight.";
                break;

                // EARTH
             case 'slick-slide03' :
             document.getElementById('main').style.display="flex";           document.getElementById('link').href="https://en.wikipedia.org/wiki/Earth";
             document.getElementById('photo').src = "img/earth2.png";
             document.getElementById('title').innerHTML = "earth";
             document.getElementById('text').innerHTML= "Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29% of Earth's surface is land consisting of continents and islands. The remaining 71% is covered with water.";
                break;

            // MARS
             case 'slick-slide04' :
             document.getElementById('main').style.display="flex";           document.getElementById('link').href="https://en.wikipedia.org/wiki/Mars";
             document.getElementById('photo').src = "img/mars.png";
             document.getElementById('title').innerHTML = "mars";

             document.getElementById('text').innerHTML= "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the \"Red Planet\".";
                break;

            //JUPITER
             case 'slick-slide05' :
             document.getElementById('main').style.display="flex";           document.getElementById('link').href="https://en.wikipedia.org/wiki/Jupiter";
             document.getElementById('photo').src = "img/jupiter2.png";
             document.getElementById('title').innerHTML = "jupiter";

             document.getElementById('text').innerHTML= "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. ";
                break;

            //SATURN
             case 'slick-slide06' :
             document.getElementById('main').style.display="flex";           document.getElementById('link').href="https://en.wikipedia.org/wiki/Saturn";
             document.getElementById('photo').src = "img/saturn.png";
             document.getElementById('title').innerHTML = "saturn";

             document.getElementById('text').innerHTML= "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine times that of Earth. It only has one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive.";
                break;

             //URANUS
             case 'slick-slide07' :
             document.getElementById('main').style.display="flex";           document.getElementById('link').href="https://en.wikipedia.org/wiki/Uranus";
             document.getElementById('photo').src = "img/uranus2.png";
             document.getElementById('title').innerHTML = "uranus";

             document.getElementById('text').innerHTML= "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the grandfather of Zeus (Jupiter) and father of Cronus (Saturn).";
                break;


             //NEPTUNE
             case 'slick-slide08' :
             document.getElementById('main').style.display="flex";           document.getElementById('link').href="https://en.wikipedia.org/wiki/Neptune";
             document.getElementById('photo').src = "img/neptune.png";
             document.getElementById('title').innerHTML = "neptune";

             document.getElementById('text').innerHTML= "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet.";
                break;
        }
    });
});

$(document).ready(function(){
    $(".new").click(function(){
        var i = this.id;


        switch(i) {
            case 'new_1' :                                                             document.getElementById('new_info').style.display = "flex";
                document.getElementById('title2').innerHTML = "NASA, SpaceX Crew-1 mission had a successful launch."
                document.getElementById('picture').src = "img/new1.jpg";
                 document.getElementById('link2').href = "https://www.space.com/spacex-crew-1-astronaut-nasa-launch-success";
                document.getElementById('text2').innerHTML = "On Nov. 15, 2020, four astronauts launched from the historic launch pad 39A at NASA's Kennedy Space Center in Florida to reach the International Space Station. They flew as part of Crew-1, the first operational mission for SpaceX's Crew Dragon capsule. The capsule, called Resilience, brought three NASA astronauts and one Japanese astronaut to the orbiting laboratory. ";
                break;

            case 'new_2' :
                document.getElementById('new_info').style.display = "flex";
                document.getElementById('title2').innerHTML = "Arecibo Observatory will be decommissioned."
                document.getElementById('picture').src = "img/new2.jpg";
                document.getElementById('link2').href = "https://www.space.com/arecibo-observatory-radio-telescope-to-be-destroyed";
                document.getElementById('text2').innerHTML = "On Thursday (Nov. 19), the National Science Foundation (NSF) announced it will decommission the iconic Arecibo Observatory in Puerto Rico. The news came as scientists awaited the verdict about the facility's future, which was being figured out following two major cable breaks earlier this year. NSF found ''no path forward'' to preserve the telescope without risking people's safety, an NSF official said during a Thursday press conference.";
                break;

            case 'new_3' :
                  document.getElementById('new_info').style.display = "flex";
                document.getElementById('title2').innerHTML = "Green meteor lights up the night sky. "
                document.getElementById('picture').src = "img/new3.jpg";
                document.getElementById('link2').href = "https://www.space.com/bright-meteor-video-tasman-sea-november-2020.html";
                document.getElementById('text2').innerHTML = "A bright fireball streaked across the evening sky over the Pacific Ocean near Australia. Several eyewitnesses caught the event, but the only known footage of the meteor comes from a Australian science research vessel named Investigator. The shop's livestream camera caught the Wednesday (Nov. 18) event when it was stationed about 62 miles (100 kilometers) south of the Tasmanian coast. ";
                break;

            case 'new_4' :
                  document.getElementById('new_info').style.display = "flex";
                document.getElementById('title2').innerHTML = "Cosmonaut duo performs an almost 7-hour spacewalk. "
                document.getElementById('picture').src = "img/new4.jpg";
                document.getElementById('link2').href = "https://www.space.com/cosmonauts-spacewalk-prepare-module-removal-space-station";
                document.getElementById('text2').innerHTML = "Two Russian cosmonauts conducted a spacewalk on Wednesday (Nov. 18) to prepare the space station for the removal of one of its modules, Pirs, and to make room from a new science module, Nauka. Expedition 64 commander Sergey Ryzhikov and flight engineer Sergey Kud-Sverchkov conducted the 6-hour, 48-minute spacewalk. ";
                break;

            case 'new_5' :                                          document.getElementById('new_info').style.display     = "flex";
                document.getElementById('title2').innerHTML = "Satellites keep an eye on Hurricane Iota. "
                document.getElementById('picture').src = "img/new5.jpg";
                document.getElementById('link2').href = "https://www.space.com/hurricane-iota-seen-from-space";

                document.getElementById('text2').innerHTML = "Satellites continue to monitor the ongoing tempests brewing in the Atlantic Ocean. The 2020 hurricane season has set new records for tropical storm activity, and NASA and the National Oceanic and Atmospheric Administration (NOAA) are currently monitoring Hurricane Iota that struck Nicaragua and Honduras. The region was hit by another strong storm, Hurricane Eta, just weeks ago. ";
                break;

            case 'new_6' :
                document.getElementById('new_info').style.display = "flex";
                document.getElementById('title2').innerHTML = "Researchers may have finally figured out a nebula puzzle. "
                document.getElementById('picture').src = "img/new6.jpg";
                document.getElementById('link2').href = "https://www.space.com/16-year-mystery-blue-ring-nebula-solved";
                document.getElementById('text2').innerHTML = "Scientists have long wondered why an ultraviolet ring surrounds the star at the heart of the Blue Ring Nebula. The mystery has puzzled researchers for 16 years, but a new paper suggests it is caused by a stellar collision.";
                break;
        }

    });
});


// BACK-TO-TOP

$(document).ready(function(){
   let btn = $('.back-to-top');
    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 70){
            btn.fadeIn();
        }else{
            btn.fadeOut();
        }
    });

    btn.on('click', (e) => {
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 1000);
    })
});


// CLOSE BTN

$(document).ready(function(){
   $('.cancel').click(function(){
      document.getElementById('main').style.display = 'none';

   });

     $('.cancel2').click(function(){
      document.getElementById('new_info').style.display = 'none';

   });

});

//MENU
//smooth scroll

const links = document.querySelectorAll(".nav a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}


// SIGN UP AND LOG IN

$(document).ready(function(){
   $('#reg, #intro__btn').click(function(){
       var a = document.getElementById('reg').innerHTML;
       var b = document.getElementById('intro__btn').innerHTML;

       switch(a){
           case 'sign up':                                                  document.getElementById('signUp').style.display =           "flex";

                  break;

           case 'Log Out':
               document.getElementById("reg").innerHTML = "sign up";
               document.getElementById('intro__btn').style.display = "flex";

                document.querySelector(".user").style.visibility = "hidden";
               break;
       }

   });

    $('#already').click(function(){
        document.getElementById('signUp').style.display = "none";
        document.getElementById('logIn').style.display = "flex";

    });
    $('.close').click(function(){
        document.getElementById('logIn').style.display = "none";
        document.body.style.overflow = "scroll";
        document.getElementById("username").value = "";
        document.getElementById("userpass").value = "";

    });


    $('.close2').click(function(){
         document.getElementById('signUp').style.display = "none";
        document.body.style.overflow = "scroll";
        document.getElementById("username2").value = "";
        document.getElementById("surname2").value = "";
        document.getElementById("userpass1").value = "";
        document.getElementById("userpass2").value = "";
        document.getElementById("Email").value = "";
    });


});



function closeBtn () {

    document.querySelector(".secondForm").style.display = "none";
     document.body.style.overflow = "scroll";
    document.getElementById("username2").value = "";
    document.getElementById("surname2").value = "";
    document.getElementById("userpass1").value = "";
    document.getElementById("userpass2").value = "";
    document.getElementById("Email").value = "";
}


//SIGN UP
function login2(name, surname, email, pass1, pass2){

    if(pass1 != pass2){
       alert("Passwords do not match!");

    document.getElementById("userpass1").value = "";
    document.getElementById("userpass2").value = "";

   }else if(pass1 === pass2){
       let a = name + "\n\n" + surname;

       if(name != "" & email != "" & pass1.length >= 6){
           document.getElementById('user_name').innerHTML = a;
           document.querySelector(".user").style.visibility = "visible";
           document.getElementById('intro__btn').style.display = "none";
           document.getElementById("reg").innerHTML = "Log Out";
           closeBtn();
       }
       else{
            alert("Incorrect input! \npassword must be more than 6 characters \nor empty name");
       }
   }
}


//  USER

$(document).ready(function(){
    $('#user').click(function(){
        const result = confirm("Do you want log out?");
        if(result === true){
             document.getElementById('intro__btn').style.display = "flex";
            document.getElementById('user').style.visibility="hidden";
        }
        else{

        }

    });
});

//LOG IN

$(document).ready(function(){
    $('#create').click(function(){
        document.getElementById('logIn').style.display ='none';
        document.getElementById("username").value = "";
        document.getElementById("userpass").value = "";
        document.getElementById('signUp').style.display ='flex';

    });
});

function form() {
    var btn = document.getElementById("reg").innerHTML;
    if (btn == "sign up"){
        document.querySelector(".forms").style.display = "flex";

    }else {
        logOut();
    }
}

function close_btn() {
     document.querySelector(".forms").style.display = "none";
     document.body.style.overflow = "scroll";
    document.getElementById("username").value = "";
    document.getElementById("userpass").value = "";

}

function login(name, pass){

    if(name != "" & pass.length >= 6){
        document.querySelector(".user").style.visibility = "visible";
        document.getElementById("user_name").innerHTML = name;
        document.getElementById('intro__btn').style.display = "none";
        document.getElementById("reg").innerHTML = "Log Out";
         close_btn();
    }
    else {
        alert("Incorrect input! \npassword must be more than 6 characters \nor empty name");
    }

}
function logOut() {
     document.querySelector(".user").style.visibility = "hidden";
    document.getElementById("reg").innerHTML = "sign up";
}

// MENU SETTING

$(document).ready(function(){
   $('.header__burger').click(function(){
       $('.header__burger, .nav').toggleClass('active');
       $('body').toggleClass('lock');

   });




    $('.nav__link').click(function(){
        let a = this.id;
        switch(a){
            case 'nav1':
                document.getElementById('nav').style.display.top="-100%";
                $('#nav1').toggleClass('active');
                $('#nav2').removeClass('active');
                $('#nav3').removeClass('active');
                $('#nav4').removeClass('active');
                break;
            case 'nav2':
                document.getElementById('nav').style.display.top="-100%";
                $('#nav1').removeClass('active');
                $('#nav2').toggleClass('active');
                $('#nav3').removeClass('active');
                $('#nav4').removeClass('active');
                break;
            case 'nav3':
                $('#nav1').removeClass('active');
                $('#nav2').removeClass('active');
                $('#nav3').toggleClass('active');
                $('#nav4').removeClass('active');                document.getElementById('nav').style.display="none;"
                break;
            case 'nav4':
                $('#nav1').removeClass('active');
                $('#nav2').removeClass('active');
                $('#nav3').removeClass('active');
                $('#nav4').toggleClass('active');               document.getElementById('nav').style.display="none;"
                break;
        }

    });
});

// BUBBLE CREATER
 function createBubble(){
         const section = document.querySelector('footer')

         const createElement = document.createElement('span')
         var size = Math.random() * 70;

         createElement.style.width = 20 + size + 'px';
         createElement.style.height = 20 + size + 'px';
         createElement.style.left = Math.random() * innerWidth + 'px';
         section.appendChild(createElement);

        setTimeout(() => {
             createElement.remove()
             }, 4000)
        }
         setInterval(createBubble, 50)

