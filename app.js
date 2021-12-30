//elements 
 

 const startBtn=document.querySelector("#start")
 const stopBtn=document.querySelector("#stop");
 const speakBtn=document.querySelector("#speak");

//speech recognition setup  
   



const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

//sr start 
recognition.onstart = function () {
    console.log("vr active");

};

//sr result
recognition.onresult = function (event){

    let current = event.resultIndex;
    let transcript = event.results[current]
    [0].transcript;
    transcript = transcript.toLowerCase();
    console.log('my words : ${transcript}');
 
    if (transcript.includes("jarvis are you here")) {
        readout("yes sir i don't like to go");
    };

    if (transcript.includes("no jarvis")) {
        readout("ok sir");
    };

    if (transcript.includes("jarvis open paint")) {
        readout("opening paint sir");
        window.open("https://www.pixilart.com/draw");
    };

    if (transcript.includes("jarvis open my favourite channel")) {
        readout("ok sir opening the enthusiatic dev");
        window.open("https://www.youtube.com/c/TheEnthusiasticDev/featured");
    };

    if (transcript.includes("jarvis am i smart")) {
        readout("yes sir i am sure about this");
    };

    if (transcript.includes("jarvis shut down yourself")) {
        readout("ok sir shuting down the system 1,2,3");
    };
  
    if (transcript.includes("hi jarvis wake up")) {
        readout("hello sir, what can i do for you today , sir you know what project we are doing yesternight can i open it");
    };
   
    if (transcript.includes("jarvis you know i dream you in childhood")) {
        readout("thanks for dreaming me sir i like you so much because you made me");
    };

    if (transcript.includes("thank you jarvis")) {
        readout("not a problem sir");
    };

    if (transcript.includes("jarvis what is my father name")) {
       readout("noor alam");
    };

    if (transcript.includes("jarvis what is my mother name")) {
       readout("Manisha");
    };

    if (transcript.includes("jarvis what is my sister name")) {
     readout("anaam alam");
    };

    if (transcript.includes("hello jarvis")) {
        readout("hello sir can you hear me ");
    };

    if (transcript.includes("ya jarvis")) {
        readout("ok that's good sir")
    };

    if (transcript.includes("jarvis what is your name")){
        readout("sir my name is jarvis and i am your assistant");
    }

    if (transcript.includes("jarvis in which programming language you made in")) {
       readout("sir i maded in html,javascript,css");
    };

    if (transcript.includes("ok jarvis")) {
       readout("yes sir");
    };

    if (transcript.includes("nice jarvis")) {
       readout("thank's sir");
    };

    if (transcript.includes("jarvis what is your owner name")){ 
         readout("my owner name is armaan sir");
    };

        if (transcript.includes("jarvis what is my name")) {
           readout("your name is armaan sir, what can i help you");
        };

        if (transcript.includes("love you jarvis")) {
           readout("love you too sir , thanks for madeing me");
        };

        if (transcript.includes("good morning jarvis")) {
           readout("good morning sir welcome");
        };

        if (transcript.includes("good night jarvis")) {
           readout("good night sir go upside now");
        };

        if (transcript.includes("good evening jarvis")) {
           readout("good evening sir what can i help you");
        };

        if (transcript.includes("jarvis it's a bad day ever")) {
           readout("don't worry sir everythings will goes to fine");
        };

        if (transcript.includes("jarvis open my website")) {
            readout("ok sir opening website sir");
            window.open("https://gamedeveloperarman.blogspot.com/");
        };

        if (transcript.includes("jarvis what is date and time")) {
           readout("wait a minute sir");
           window.open("https://www.google.com/search?q=daily+date+and+time&oq=daily+date+and+time&aqs=chrome..69i57j0i22i30l8j0i390.10529j0j7&sourceid=chrome&ie=UTF-8");
        };
     
    if (transcript.includes("jarvis can you tell me something about my project")) {
        readout("yes sir opening project sir ");
        window.open("https://code.whitehatjr.com/s/my-projects");
    };
    
    if (transcript.includes("jarvis open youtube")) {
        readout("opening youtube sir");
        window.open("https://www.youtube.com/")
    };
  
    if (transcript.includes("jarvis open google")) {
        readout("opening Google sir");
        window.open("https://www.google.com/");
    };
  
    if (transcript.includes("jarvis open star captain youtube channel")) {
        readout("opening star captian sir");
        window.open("https://www.youtube.com/c/STAR-Captain");
    };
  
    if (transcript.includes("jarvis open my youtube channel")) {
        readout("opening code with armaan sir");
        window.open("https://www.youtube.com/channel/UC4VKiyUCYJCreaqXl_Dg8xQ");
    };

    if (transcript.includes("jarvis open github")) {
        readout("opening github sir");
        window.open("https://github.com/");
    };
    
    if (transcript.includes("jarvis open my instagram")) {
        readout("opening instagram sir");
        window.open("https://www.instagram.com/nandu.lovemamma/");
    };
   
    if (transcript.includes("jarvis start music")) {
        readout("starting music sir");
        window.open("https://www.youtube.com/watch?v=MD_WGBjV3tI&list=PL60R4DfXP-wajmDkWxnVglDaX_-WV8viU&index=1");
    };
   
    if (transcript.includes("jarvis start cs")) {
        readout("starting ulle sir");
        window.open("https://www.youtube.com/watch?v=eYSSH0iJAa4&list=PL60R4DfXP-wajmDkWxnVglDaX_-WV8viU&index=2");
    };
      
    if (transcript.includes("jarvis open white")) {
        readout("opening whitehat sir");
        window.open("https://code.whitehatjr.com/s/dashboard");
    };
    
    if (transcript.includes("jarvis open poem")) {
        readout("opening poem sir");
        window.open("https://www.youtube.com/watch?v=vDwbA7sEryo");
    };
        
    if (transcript.includes("jarvis what about weather")) {
        readout("opening weather sir");
        window.open("https://www.accuweather.com/en/in/delhi/202396/daily-weather-forecast/202396");
    };

    if (transcript.includes("jarvis send email to noor alam")) {
       readout("ok sir can you tell me what is the subject of email");
       window.open("https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqXPSCWFVRJCHfPBHlnblFnLvgLmthVTHnTdwRWQVGnpVzbVkBzBBDPBFkFtgKjSXSlQBq");
    };

    if (transcript.includes("jarvis open maps")) {
       readout("opening maps sir");
       window.open("https://www.google.com/maps/@28.6883748,77.2979777,15z");
    };
    
    if (transcript.includes("jarvis what about news")) {
        readout("sir here's the news read it out");
        window.open("https://news.google.com/topstories?hl=en-IN&gl=IN&ceid=IN:en");
    };
    
    if (transcript.includes("jarvis shut up")) {
         readout("ok sir"); 
    };

    if (transcript.includes("good buy jarvis")) {
       readout("goodby sir have nice day");
    };

    if (transcript.includes("jarvis introduce yourself")) {
       readout("hi my name is jarvis and i am a artiffiacal intelligence maked by armaan");
    };

    if (transcript.includes("jarvis what is my email")) {
        readout("sir see email in privacy");
        window.open("https://myaccount.google.com/?utm_source=OGB&tab=rk&utm_medium=act");
    };

    if (transcript.includes("jarvis open my email")) {
        readout("opening email sir please wait");
        window.open("https://mail.google.com/mail/u/0/#inbox");
        
    };


    if (transcript.includes("jarvis open studio")) {
        readout("opening sir wait sir ");
        window.open("https://studio.youtube.com/channel/UC4VKiyUCYJCreaqXl_Dg8xQ");
    };

    if (transcript.includes("jarvis open amazon")) {
        readout("opening sir");
        window.open("https://www.amazon.in/");
    };

    if (transcript.includes("jarvis open us amazon")) {
        readout("opening sir");
        window.open("https://www.amazon.com/");
    };

    if (transcript.includes("jarvis open maxicon amazon")) {
        readout("opening sir");
        window.open("https://www.amazon.com.mx/");
    };

    if (transcript.includes("jarvis open flipkart")) {
        readout("opening sir");
        window.open("https://www.flipkart.com/?s_kwcid=AL!739!3!461496258709!e!!g!!flipkart&gclsrc=aw.ds&&semcmpid=sem_8024046704_brand_city_nc_goog&gclid=Cj0KCQiAq7COBhC2ARIsANsPATGBb4L-UXDlGzxNSefDXXtcfs_-ExZw3C269fDPBiFb98w0t8d8WggaAuMuEALw_wcB");
    };

    if (transcript.includes("hi jarvis how are you")) {
          readout("i am fine sir how about you ");
    };

 
    //youtube search 

    if (transcript.includes("search youtube")) {
        readout("here's the result sir");
        let input1 = transcript.split("");
        input1.splice(0, 14);
        input1.pop();
        input1 = input1.join("").split(" ").join("+");
        console.log(input1);
        window.open(`https://www.youtube.com/results?search_query=${input1}`);
    };

    //google search
    if (transcript.includes("search for")) {
        readout("here's the result sir");
        let input = transcript.split("");
        input.splice(0, 10);
        input.pop();
        input = input.join("").split(" ").join("+");
        console.log(input);
      window.open(`https://www.google.com/search?q=${input}`);
    };

    
};

//sr stop 
recognition.onend = function() {
    console.log("vr deactivated");
};
//sr conntinuous 
//recognition.continuous=true;

startBtn.addEventListener("click", () => {
    recognition.start();
});


stopBtn.addEventListener("click", () => {
    recognition.stop();
});

speakBtn.addEventListener("click", () =>{
     readout("hi, my name is JARVIS and i am a ai maded by armaan, let's talk to me");
});

// J.A.R.V.I.S speech 
function readout(message){
    const speech = new SpeechSynthesisUtterance()
    speech.text = message;
    speech.volume = 1
    window.speechSynthesis.speak(speech)
    console.log("speaking out")
} 



