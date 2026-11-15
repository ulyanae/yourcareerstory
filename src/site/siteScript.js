// @ts-nocheck
export function initSite(){
if(window.__ycsInit)return;window.__ycsInit=true;
(function(){
var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.documentElement.classList.add('js');
var mainEl=document.getElementById('top'),legalEls=document.querySelectorAll('.legal');
function route(){var p=location.pathname.replace(/\/+$/,'').slice(1),isL=(p==='privacy'||p==='terms');mainEl.hidden=isL;legalEls.forEach(function(a){a.hidden=a.id!==p;});var s0=document.getElementById('sticky');if(s0)s0.style.display=isL?'none':'';document.title=p==='privacy'?'Privacy policy | Your Career Story':(p==='terms'?'Terms and cancellation | Your Career Story':'Interview Coaching for Non-Native English Speakers | Your Career Story');}
document.addEventListener('click',function(e){var a=e.target.closest('a');if(!a)return;var h=a.getAttribute('href');if(h==='/'||h==='/privacy'||h==='/terms'){e.preventDefault();if(location.pathname!==h)history.pushState({},'',h);route();window.scrollTo(0,0);}});
window.addEventListener('popstate',route);route();
var boat=document.getElementById('boat');
if(boat){if(reduce||!('IntersectionObserver' in window)){boat.classList.add('play','aboard','fixed','helm','go');var sl=boat.querySelector('.sail');if(sl)sl.setAttribute('d','M122 36 Q172 52 172 100 H122 Z');}else{var bVis=false,bRun=false;
function bT(f,ms){setTimeout(f,ms);}
function cycle(){bRun=true;boat.classList.add('play');
  bT(function(){boat.classList.add('aboard');},2100);
  bT(function(){boat.classList.add('fixed');},2900);
  bT(function(){boat.classList.add('helm');},3400);
  bT(function(){boat.classList.add('go');var bl=document.getElementById('billow');if(bl&&bl.beginElement)bl.beginElement();},4200);
  bT(function(){boat.classList.add('fade');},8200);
  bT(function(){boat.classList.add('nt');boat.classList.remove('play','aboard','fixed','helm','go');var s=boat.querySelector('.sail');var c=s.cloneNode(true);s.parentNode.replaceChild(c,s);void boat.offsetWidth;boat.classList.remove('nt');},8700);
  bT(function(){boat.classList.remove('fade');},8800);
  bT(function(){bRun=false;if(bVis)cycle();},9600);}
var bo=new IntersectionObserver(function(es){bVis=es[0].isIntersecting;if(bVis&&!bRun)cycle();},{threshold:0.5});bo.observe(boat);}}
var arcD='M6 32 C8 14 16 6 22 6 C28 6 34 12 38 22';
document.querySelectorAll('section[data-arc]').forEach(function(sec){
  var svg=sec.querySelector('.marker');if(!svg)return;
  var path=svg.querySelector('path'),dot=svg.querySelector('circle');
  var len=path.getTotalLength(),t=parseFloat(sec.getAttribute('data-arc'));
  var pt=path.getPointAtLength(len*t);dot.setAttribute('cx',pt.x);dot.setAttribute('cy',pt.y);
  if(!reduce){path.style.strokeDasharray=len;path.style.strokeDashoffset=len;dot.style.opacity=0;path.style.transition='stroke-dashoffset 1s ease';dot.style.transition='opacity .4s ease .8s';}
  sec._arc=function(){path.style.strokeDashoffset=0;dot.style.opacity=1;};
});
var hd=document.getElementById('heroDot');if(reduce&&hd){var hc=hd.parentNode;hc.removeChild(hd);hc.setAttribute('cx','120');hc.setAttribute('cy','4');}
var hero=document.querySelector('.faces .draw');
if(hero&&!reduce){var hl=hero.getTotalLength();hero.style.strokeDasharray=hl;hero.style.strokeDashoffset=hl;hero.style.transition='stroke-dashoffset 1.4s ease .2s';requestAnimationFrame(function(){requestAnimationFrame(function(){hero.style.strokeDashoffset=0;});});}
var thoughts=["I hope they’ll like me. What do they want to hear? Don’t say anything wrong…","They’re growing fast and drowning in data. I’ve fixed exactly that before."];
var answers=["Um, well… I’m a very hard worker, and a team player. I’m really motivated, and I’d be so grateful for this opportunity.","I help teams turn messy customer data into decisions. At my last company, that cut our reporting time from a week to a day. When I saw your team is growing fast, I thought: that’s exactly the problem I like solving."];
var th=document.querySelector('#demo .th'),sp=document.querySelector('#demo .sp'),btns=document.querySelectorAll('#demo .seg button'),touched=false;
function setAns(i){btns.forEach(function(b){b.setAttribute('aria-pressed',b.getAttribute('data-a')==i?'true':'false');});
  if(reduce){th.textContent=thoughts[i];sp.textContent=answers[i];return;}
  th.classList.add('swap');sp.classList.add('swap');setTimeout(function(){th.textContent=thoughts[i];sp.textContent=answers[i];th.classList.remove('swap');},220);setTimeout(function(){sp.classList.remove('swap');},520);}
btns.forEach(function(b){b.addEventListener('click',function(){touched=true;setAns(b.getAttribute('data-a'));});});
var typed=document.querySelector('#demo .typed');
function typeIt(){if(reduce){typed.classList.add('done');return;}var s=typed.getAttribute('data-text'),i=0;typed.textContent='';
  var iv=setInterval(function(){typed.textContent=s.slice(0,++i);if(i>=s.length){clearInterval(iv);typed.classList.add('done');}},45);}
document.querySelectorAll('.flip').forEach(function(f){f.addEventListener('click',function(){var on=f.classList.toggle('on');f.setAttribute('aria-pressed',on?'true':'false');
  f.querySelector('.front').setAttribute('aria-hidden',on?'true':'false');f.querySelector('.back').setAttribute('aria-hidden',on?'false':'true');});});
var sw=document.getElementById('mindswitch'),mind=document.getElementById('mind'),swTouched=false;
var cap=document.getElementById('mindcap');
function setMind(on){sw.querySelectorAll('button').forEach(function(b){b.setAttribute('aria-pressed',((b.getAttribute('data-m')==='1')===on)?'true':'false');});mind.classList.toggle('on',on);sw.classList.remove('nudge');cap.textContent=on?'Every answer shows what you’d bring.':'Every answer is aimed at being liked.';}
sw.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;swTouched=true;setMind(b.getAttribute('data-m')==='1');});
mind.addEventListener('click',function(){swTouched=true;setMind(!mind.classList.contains('on'));track('mind_switch',{via:'cards'});});
if(!('IntersectionObserver' in window)){document.querySelectorAll('.pop').forEach(function(e){e.classList.add('in');});document.querySelectorAll('section[data-arc]').forEach(function(s){s._arc&&s._arc();});return;}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var el=e.target;io.unobserve(el);
  if(el.classList.contains('pop')){var d=parseInt(el.getAttribute('data-d')||0,10);setTimeout(function(){el.classList.add('in');},d);}
  if(el._arc)el._arc();
  if(el.id==='demo'){typeIt();}
  if(el.id==='mind'&&!swTouched){sw.classList.add('nudge');}
});},{threshold:0.25});
document.querySelectorAll('.pop').forEach(function(e,i){var sib=e.parentElement.querySelectorAll('.pop');e.setAttribute('data-d',Array.prototype.indexOf.call(sib,e)*110);io.observe(e);});
document.querySelectorAll('section[data-arc]').forEach(function(s){io.observe(s);});
function track(n,d){try{if(window.umami&&window.umami.track)window.umami.track(n,d);}catch(e){}}
document.addEventListener('click',function(e){var a=e.target.closest('a,button');if(!a)return;var box=a.closest('section,footer,.sticky');var where=!box?'page':(box.tagName==='FOOTER'?'footer':(box.className.split(' ')[0]||'page'));var h=a.getAttribute('href')||'';
  if(h.indexOf('/90min')>-1)track('book_session',{where:where});
  else if(h.indexOf('/intro')>-1)track('book_free_call',{where:where});
  else if(h.indexOf('luma.com')>-1)track('save_seat',{where:where});
  else if(h.indexOf('linkedin.com')>-1)track('linkedin',{who:h.indexOf('sean')>-1?'sean':'ulyana'});
  else if(h.indexOf('substack.com')>-1)track('substack',{where:where});
  else if(h.indexOf('amazon.')>-1)track('carved_by_time');
  else if(a.closest('#demo .seg'))track('demo_toggle',{answer:a.getAttribute('data-a')==='1'?'show_them':'please_pick_me'});
  else if(a.closest('#mindswitch'))track('mind_switch',{mode:a.getAttribute('data-m')==='1'?'show_them':'please_pick_me'});
  else if(a.classList.contains('flip'))track('flip_card');
});
io.observe(document.getElementById('demo'));io.observe(mind);
var st=document.getElementById('sticky'),vis=[];st.inert=true;
var so=new IntersectionObserver(function(es){es.forEach(function(e){var i=vis.indexOf(e.target);if(e.isIntersecting&&i<0)vis.push(e.target);if(!e.isIntersecting&&i>-1)vis.splice(i,1);});
  var show=vis.length===0&&window.scrollY>200;st.classList.toggle('show',show);st.setAttribute('aria-hidden',show?'false':'true');st.inert=!show;},{threshold:0});
document.querySelectorAll('main .btn-primary, footer').forEach(function(el){so.observe(el);});
})();
}
