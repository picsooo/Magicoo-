const V=(()=>{const q=new URLSearchParams(location.search).get('v');const b=document.body.dataset.v;let v=b&&b!=='auto'?b:(q||(()=>{try{return localStorage.getItem('mg_v')}catch(e){}})()||'corp');if(v!=='fun')v='corp';try{localStorage.setItem('mg_v',v)}catch(e){}document.body.classList.add('v-'+v);return v})();
const HOME=V==='fun'?'fun.html':'index.html';
const pimg=(k,cls,alt2)=>{const p=P[k],src=alt2&&p.img2?p.img2:p.img;return '<img class="'+(p.photo?'ph ':'cut ')+(cls||'')+'" src="'+src+'" alt="'+p.full+'" loading="lazy">'};
const IC={phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',ig:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></svg>',mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>'};
(function(){
 const here=location.pathname.split('/').pop()||'index.html';
 const nav=[[HOME,'Accueil',''],[HOME+'#gamme','La gamme','8'],['produit.html?p=classique','Fiches produit','new'],['distributeurs.html','Distributeurs','pro'],[HOME+'#contact','Contact','']];
 const tag=t=>t==='8'?'<span class="pst n">8</span>':t==='new'?'<span class="pst g">fiches</span>':t==='pro'?'<span class="pst b">pro</span>':t==='win'?'<span class="pst r live">🎁 à gagner</span>':'';
 const act=h=>{const f=h.split('?')[0].split('#')[0];return f===here&&!h.includes('#')?' class="act"':''};
 const hd=document.getElementById('hdr');
 if(hd)hd.innerHTML='<a class="skip" href="#main">Aller au contenu</a><header class="top" id="top-h"><a class="logo" href="'+HOME+'" aria-label="Magico, accueil"><img src="img/logo-magico.png" alt="Magico"></a><nav aria-label="Menu principal">'+nav.map(n=>'<a href="'+n[0]+'"'+act(n[0])+'>'+n[1]+tag(n[2])+'</a>').join('')+'</nav><div class="hr"><a class="cta" href="distributeurs.html">Devenir distributeur</a><button class="burger" type="button" aria-label="Ouvrir le menu" aria-expanded="false">☰</button></div></header><div class="menu" id="menu" role="dialog" aria-label="Menu"><button class="mx" type="button" aria-label="Fermer le menu">✕</button>'+nav.map(n=>'<a href="'+n[0]+'">'+n[1]+tag(n[2])+'</a>').join('')+'</div>';
 const other=V==='fun'?'corp':'fun';
 const u=new URL(location.href);u.searchParams.set('v',other);if(here==='index.html'||here==='fun.html'||here==='')u.pathname=u.pathname.replace(/[^/]*$/,other==='fun'?'fun.html':'index.html');u.hash='';const tgt=u.pathname.split('/').pop()+u.search;
 const sw=document.createElement('a');sw.className='vswitch';sw.href=tgt;sw.innerHTML=V==='fun'?'<span class="vs-i">🏢</span><span><small>Passer en</small>Version corporate</span>':'<span class="vs-i">✨</span><span><small>Découvrir la</small>Version fun</span>';sw.setAttribute('aria-label','Changer de version du site');document.body.appendChild(sw);
 const ft=document.getElementById('ftr');
 if(ft)ft.innerHTML='<footer class="ft"><div class="wrap"><div class="fg"><div><img src="img/logo-magico.png" alt="Magico" class="flogo"><p>Muesli d\'avoine et peanut butter, fabriqués en Algérie à Blida.</p><div class="soc"><a href="'+CONTACT.ig+'" target="_blank" rel="noopener" aria-label="Instagram">'+IC.ig+'</a></div></div><div><h4>La gamme</h4>'+ORDER.map(k=>'<a href="produit.html?p='+k+'">'+P[k].full+'</a>').join('')+'</div><div><h4>Espaces</h4><a href="distributeurs.html">Espace distributeurs</a><a href="'+HOME+'#contact">Contact</a><a href="'+(V==='fun'?'index.html?v=corp':'fun.html?v=fun')+'">'+(V==='fun'?'Version corporate':'Version fun')+'</a></div><div><h4>Contact</h4><a href="'+CONTACT.consoTel+'">Service consommateur<br><b>'+CONTACT.conso+'</b></a><a href="'+CONTACT.comTel+'">Service commercial<br><b>'+CONTACT.com+'</b></a><a href="'+CONTACT.map+'" target="_blank" rel="noopener">'+CONTACT.addr+'</a></div></div><div class="fb"><span>© <span id="yr"></span> Magico</span><span>Maquette réalisée par Webminds</span></div></div></footer>';
 const yr=document.getElementById('yr');if(yr)yr.textContent=new Date().getFullYear();
 const menu=document.getElementById('menu');
 document.addEventListener('click',e=>{const b=e.target.closest('.burger');if(b){menu.classList.add('open');b.setAttribute('aria-expanded','true')}if(e.target.closest('.mx')||e.target.closest('.menu a'))menu.classList.remove('open')});
 const th=document.getElementById('top-h');const onS=()=>{if(th)th.classList.toggle('solid',scrollY>40)};addEventListener('scroll',onS,{passive:true});onS();
 const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.08});
 window.reveal=()=>document.querySelectorAll('.rv:not([data-o])').forEach(el=>{el.dataset.o=1;io.observe(el)});
 reveal();
})();
function okForm(f,msg){const b=f.querySelector('button[type=submit]'),t=b.textContent;b.textContent=msg;b.disabled=true;b.classList.add('done');setTimeout(()=>{f.reset();b.textContent=t;b.disabled=false;b.classList.remove('done')},3500)}

// Fun effect: ingredient confetti (oat flakes, nuts, choco, banana, raisins, leaves)
function Grains(cv,opt){
 opt=opt||{};const host=cv.parentElement,ctx=cv.getContext('2d');let W,H,dpr=Math.min(devicePixelRatio||1,2),ps=[],vis=true,last=0;
 const red=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const KINDS=['oat','oat','oat','almond','choco','banana','raisin','leaf','cashew'];
 const size=()=>{const r=host.getBoundingClientRect();W=r.width;H=r.height;cv.width=W*dpr;cv.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0)};
 const mk=(x,y,burst)=>{const a=Math.random()*6.283,s=burst?3+Math.random()*7:0;return{k:KINDS[Math.random()*KINDS.length|0],x:x??Math.random()*W,y:y??-20-Math.random()*H,vx:burst?Math.cos(a)*s:(Math.random()-.5)*.4,vy:burst?Math.sin(a)*s-4:.4+Math.random()*.9,r:Math.random()*6.28,vr:(Math.random()-.5)*.08,s:.7+Math.random()*.9,life:burst?1:2}};
 size();const N=opt.n||(innerWidth<700?22:46);for(let i=0;i<N;i++){const p=mk();p.y=Math.random()*H;ps.push(p)}
 addEventListener('resize',size);
 new IntersectionObserver(e=>{vis=e[0].isIntersecting;if(vis)requestAnimationFrame(loop)}).observe(host);
 host.addEventListener('pointerdown',e=>{if(e.target.closest('a,button,input,select,textarea,label,.cf'))return;const r=host.getBoundingClientRect();burst(e.clientX-r.left,e.clientY-r.top)});
 function burst(x,y,n){for(let i=0;i<(n||18);i++)ps.push(mk(x,y,true));if(ps.length>N+160)ps.splice(N,ps.length-N-160)}
 cv.burst=burst;
 function draw(p){ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.r);ctx.scale(p.s,p.s);
  switch(p.k){
  case'oat':ctx.fillStyle='#f3dca6';ctx.beginPath();ctx.ellipse(0,0,9,6,0,0,6.283);ctx.fill();ctx.strokeStyle='#d6b06a';ctx.lineWidth=1.2;ctx.beginPath();ctx.moveTo(-6,0);ctx.lineTo(6,0);ctx.stroke();break;
  case'almond':ctx.fillStyle='#b5713c';ctx.beginPath();ctx.moveTo(0,-11);ctx.quadraticCurveTo(8,0,0,11);ctx.quadraticCurveTo(-8,0,0,-11);ctx.fill();ctx.fillStyle='rgba(255,255,255,.25)';ctx.beginPath();ctx.ellipse(-2,-3,1.6,5,0,0,6.283);ctx.fill();break;
  case'choco':ctx.fillStyle='#4a2614';ctx.fillRect(-7,-7,14,14);ctx.strokeStyle='#6b3a20';ctx.lineWidth=1.5;ctx.strokeRect(-4.5,-4.5,9,9);break;
  case'banana':ctx.fillStyle='#ffe58a';ctx.beginPath();ctx.arc(0,0,8,0,6.283);ctx.fill();ctx.fillStyle='#e8c35a';ctx.beginPath();ctx.arc(0,0,2.4,0,6.283);ctx.fill();ctx.strokeStyle='#f5d36e';ctx.lineWidth=1.5;ctx.beginPath();ctx.arc(0,0,8,0,6.283);ctx.stroke();break;
  case'raisin':ctx.fillStyle='#5b2b4f';ctx.beginPath();ctx.ellipse(0,0,5,6.5,0,0,6.283);ctx.fill();ctx.fillStyle='rgba(255,255,255,.3)';ctx.beginPath();ctx.arc(-1.5,-2,1.4,0,6.283);ctx.fill();break;
  case'leaf':ctx.fillStyle='#5cbf3a';ctx.beginPath();ctx.moveTo(0,-12);ctx.quadraticCurveTo(9,0,0,12);ctx.quadraticCurveTo(-9,0,0,-12);ctx.fill();ctx.strokeStyle='#3c8f22';ctx.lineWidth=1.2;ctx.beginPath();ctx.moveTo(0,-10);ctx.lineTo(0,10);ctx.stroke();break;
  case'cashew':ctx.strokeStyle='#efd29a';ctx.lineWidth=7;ctx.lineCap='round';ctx.beginPath();ctx.arc(0,0,7,.3,3.3);ctx.stroke();break}
  ctx.restore()}
 function loop(t){if(!vis)return;const dt=Math.min(32,t-last||16)/16;last=t;ctx.clearRect(0,0,W,H);
  for(let i=ps.length-1;i>=0;i--){const p=ps[i];if(!red||p.life===1){p.x+=p.vx*dt;p.y+=p.vy*dt;p.r+=p.vr*dt}
   if(p.life===1){p.vy+=.22*dt;p.vx*=.99;if(p.y>H+30){ps.splice(i,1);continue}}else{p.x+=Math.sin(t/900+p.r)*.2;if(p.y>H+20){p.y=-20;p.x=Math.random()*W}}
   draw(p)}
  requestAnimationFrame(loop)}
 requestAnimationFrame(loop);return cv;
}
