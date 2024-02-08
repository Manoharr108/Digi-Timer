setInterval(function(){
    let a = new Date()
    let h = a.getHours() -12
    let m = a.getMinutes()
    let s = a.getSeconds()
    let date = a.getDate()
    let day = a.getDay()
    let year = a.getFullYear()
    console.log(h)
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
    let colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
    sec.style.color = colors[Math.floor(Math.random()* colors.length)]
    document.getElementsByClassName("box")[0].setAttribute("id","box_id")
    box_id.style.border = "8px solid" +colors[Math.floor(Math.random()* colors.length)]
},1000)
