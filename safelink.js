/*<![CDATA[*/
qSel('.postBody').innerHTML += `
<p class="note hidden" id="pWait">Mohon Tunggu...</p>
<div class="hidden" id="decArsl" style="margin:15px 0;text-align:center"><a style="pointer-events:none;opacity:0.4;" href="#!" onclick="stC('psWait');return false;">Lanjutkan</a>
<a href="#!" style="display:none" target="_blank" rel="noopener noreferrer">continue</a></div>

<div class="contSF1">
<p class="note hidden" id="psWait">Please Wait...</p>
<div class="hidden" id="decArsl2" style="margin:15px 0;text-align:center"><a style="pointer-events:none;opacity:0.4;" href="#!" onclick="stC('pWait');return false;">Mohon Tunggu...</a></div>
</div>
`;
qSel('.postBody > :nth-last-child(6)').insertAdjacentElement('beforebegin',qSel('.contSF1'));
var AR_SL=Ar.gC('AR_SL');var cbNtf=getid('forNft');if(cbNtf!==null&&cbNtf.checked==false){cbNtf.click()};
//qSel('h1').style='margin-top:20px';
function getHostname(url){if(url.indexOf('https')>=0){var m=url.match(/^https:\/\/[^/]+/)}else if(url.indexOf('http')>=0){var m=url.match(/^http:\/\/[^/]+/)}else{var m=url.match(/^\/\/[^/]+/)}return m?m[0]:null} var adTop=getid('ad-Top'),adBot=getid('ad-Bot'),pWait=getid('pWait'),decArsl=getid('decArsl'),decArsl2=getid('decArsl2'),psWait=getid('psWait');remCt(decArsl,'hidden');remCt(decArsl2,'hidden');remCt(pWait,'hidden');remCt(psWait,'hidden');if(adTop!==null){if(pWait!==null){adTop.insertAdjacentElement('beforebegin',pWait)}if(adBot!==null){adTop.insertAdjacentElement('afterend',adBot)}if(decArsl!==null){adTop.insertAdjacentElement('afterend',decArsl)}}var timLeft=15,dTimer=setInterval(function(){if(timLeft<=0){clearInterval(dTimer);pWait.innerHTML='Url safelink berhasil didecode, Klik dibawah ini untuk melanjutkan. 👇';decArsl.firstChild.removeAttribute('style');}else{pWait.innerHTML='Permintaan decode url safelink akan diproses dalam ('+timLeft+') detik.';}timLeft-=1;},1000);decArsl.firstChild.addEventListener('click',function(){if(adBot!==null){decArsl2.insertAdjacentElement('afterend',adBot)};if(adTop!==null){decArsl2.insertAdjacentElement('beforebegin',adTop)};this.setAttribute('style','pointer-events:none;opacity:0.4');var timeLeft=7,dTimer=setInterval(function(){if(timeLeft<=0){clearInterval(dTimer);psWait.innerHTML='Kerja bagus! Tautan yang diminta siap dikunjungi, Klik dibawah ini. 👇';decArsl2.firstChild.removeAttribute('style');decArsl2.firstChild.innerHTML='go to';}else{psWait.innerHTML='Tautan akan muncul dalam '+timeLeft+' detik.';}timeLeft-=1;},1000);stC('psWait');});decArsl2.firstChild.addEventListener('click',function(){if(adBot!==null){decArsl.insertAdjacentElement('afterend',adBot)};if(adTop!==null){decArsl.insertAdjacentElement('beforebegin',adTop)};psWait.classList.add('hidden');decArsl.firstChild.style='display:none';decArsl.lastChild.removeAttribute('style');decArsl.lastChild.setAttribute('href',Ar.d(Ar.de(AR_SL),blogId,1));decArsl.lastChild.id='SL-d';pWait.innerHTML='Anda telah meminta tautan ke "'+getHostname(Ar.d(Ar.de(AR_SL),blogId,1))+'" </br>Klik dibawah ini untuk melanjutkan. 👇';decArsl2.remove();getid('SL-d').addEventListener('click',function(){Ar.dC('AR_SL')});});
/*]]>*/
