function paint(color){
        const circle=document.getElementById('circleId');
        if(color=='rgb'){
        const r=Math.floor(Math.random()*256);
        const g=Math.floor(Math.random() *256);
        const b=Math.floor(Math.random()*256);
        circle.style.backgroundColor=`rgb(${r},${g},${b})`;
    }
    else{
    circle.style=`background-color:${color}`;
}
}
