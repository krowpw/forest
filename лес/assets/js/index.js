document.addEventListener("mousemove", (e)=>{ 
    Object.assign(document.documentElement,{
        style: `--moveX: ${e.clientX - window.innerHeight}deg; --moveY: ${e.clientX - window.innerWidth}deg`,
    
    });
});
