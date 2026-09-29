(()=>{
const h=document.getElementById('site-header'),t=document.querySelector('.menu-toggle'),n=document.getElementById('primary-navigation');
const set=()=>h&&h.classList.toggle('is-scrolled',window.scrollY>24);set();window.addEventListener('scroll',set,{passive:true});
if(t&&n){t.addEventListener('click',()=>{const o=n.classList.toggle('is-open');t.setAttribute('aria-expanded',String(o));t.setAttribute('aria-label',o?'Close menu':'Open menu');t.textContent=o?'×':'☰'});n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{n.classList.remove('is-open');t.setAttribute('aria-expanded','false');t.setAttribute('aria-label','Open menu');t.textContent='☰'}));}
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches,items=document.querySelectorAll('.reveal');
if(!reduced&&'IntersectionObserver'in window){const o=new IntersectionObserver((es,ob)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');ob.unobserve(e.target)}}),{threshold:.12});items.forEach(i=>o.observe(i));}else items.forEach(i=>i.classList.add('is-visible'));
const cs=document.querySelectorAll('[data-count]');
if(!reduced&&'IntersectionObserver'in window){const o=new IntersectionObserver((es,ob)=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,target=+el.dataset.count||0,start=performance.now();const tick=now=>{const p=Math.min((now-start)/1100,1),x=1-Math.pow(1-p,3);el.textContent=Math.round(target*x);if(p<1)requestAnimationFrame(tick)};requestAnimationFrame(tick);ob.unobserve(el)}),{threshold:.7});cs.forEach(c=>o.observe(c));}else cs.forEach(c=>c.textContent=c.dataset.count||'0');
})();
