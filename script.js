const all = document.querySelectorAll('.imgg');
const head = document.querySelector('.header');
const btmmnu = document.querySelector('.bottom-menu');
all.forEach((i,idx)=>{
    const str = document.querySelector(".story");
    const flimg = document.querySelectorAll('.im')[idx];
    i.addEventListener('click',()=>{
        str.style.height = "100vh";
        head.style.display='none';
        btmmnu.style.display="none"
        flimg.style.display = "block";
        flimg.addEventListener('dblclick',()=>{
            str.style.height = "15vh";
        flimg.style.display = "none"; 
        head.style.display='block'; 
        head.style.display='flex'; 

        i.style.display = "block";
        });
    });
});
const p1img = document.querySelector('.p1img');
const p2img = document.querySelector('.p2img');
p1img.addEventListener('dblclick',()=>{
    const love = document.querySelector('.ri-heart-fill');
    love.style.color = 'Red';
})
p2img.addEventListener('dblclick',()=>{
    const love = document.querySelector('.ri-heart-fill');
    love.style.color = 'Red';
})