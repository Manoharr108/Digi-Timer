setInterval(function(){
    let a = new Date()
    let h = a.getHours() 
    let m = a.getMinutes()
    let s = a.getSeconds()
    let date = a.getDate()
    let day = a.getDay()
    let year = a.getFullYear()
    if(h<10){
        document.getElementById("hr").innerHTML = "0"+h;
    }
    else{
        document.getElementById("hr").innerHTML = h;
    }
   
    if(m<10){
        document.getElementById("min").innerHTML = "0"+m;
    }
    else{
        document.getElementById("min").innerHTML = m;
    }
    if(s<10){
        document.getElementById("sec").innerHTML = "0"+s;
    }
    else{
        document.getElementById("sec").innerHTML = s;
    }
    if(h>=12 && h<=24){
        let d = "PM"
        document.getElementById("day").innerHTML = d;
        document.getElementById("hr").innerHTML = h -12;
    }
    if(date<10){
        document.getElementById("dte").innerHTML = "0"+date;
    }
    else{
        document.getElementById("dte").innerHTML = date;
    }
    switch(day>=0){
        case day==0:
            document.getElementById("dy").innerHTML = "Sunday";
            break;
        case day==1:
            document.getElementById("dy").innerHTML = "Monday";
            break;
        case day==2:
            document.getElementById("dy").innerHTML = "Tuesday";
            break;
        case day==3:
            document.getElementById("dy").innerHTML = "Wednesday";
            break;
        case day==4:
            document.getElementById("dy").innerHTML = "Thursday";
            break;
        case day==5:
            document.getElementById("dy").innerHTML = "Friday";
            break;
        case day==6:
            document.getElementById("dy").innerHTML = "saturday";
            break;
    }
    document.getElementById("yr").innerHTML = year
},1000)