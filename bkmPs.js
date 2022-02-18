/*<![CDATA[*/
const cssBmPs=document.createElement('link');cssBmPs.rel='stylesheet';cssBmPs.type='text/css';cssBmPs.href=Ar.de('wIK6yID5Sv7vNBizMU1gM9b6wUYzwv0zr96jNBP2Mqh2MV05NVd2S9YviVNgrBcgwVJjNmKhNnQ9DVChFmKhDnf1MVDnFnfnGRf6MRhcFzYzGZJvMUX2GUJ2Fv7kw92Jyv0zy3D=');document.head.appendChild(cssBmPs);

if(xId==xID){

/*nav BmPs*/qSel('#TextList000 > .headIc').insertAdjacentHTML('afterbegin', '<li class="isBkm"><label aria-label="Bookmark" class="tBkmt tIc bIc n" for="offBkm"><svg  viewBox="0 0 16 16"><use href="#Bookmark o"></use></svg></label></li>');

/*content BmPs*/getid('header-icon').insertAdjacentHTML('beforeend', '<div class="cBkPs"><input class="bkmI hidden" id="offBkm" type="checkbox"/><div class="wBkm sl"><div class="bkmS fixLs"><div class="bkmH fixH fixT" data-text="Bookmark Post"><label aria-label="Close" class="c cl" for="offBkm"></label></div><div id="dBmPs" class="bkmC"></div></div></div><label class="bkmCls" for="offBkm"></label></div>');

/* set obj LS Bookmark, value*/ 
const LS_BM_PS='Bookmark_Post'; let objBmPs={}, giBmPs=Ar.gLS(LS_BM_PS);

/*null BkmPs*/function nBkmPs(){getid('dBmPs').innerHTML='<div class="n"><svg viewBox="0 0 24 24"><use href="#Book"></use></svg><p>Daftar artikel favorit belum ada...</p><a class="button" href="/search">Lihat semua artikel</a></div>'}

/*get result BmPs */
function gBmPs(idBm,oBm){var idBP=oBm['id'],ttlBP=oBm['title'],imgBP=oBm['image'],urlBP=oBm['link']; if(getid('dBmPs')!==null){getid('dBmPs').innerHTML+='<div class="item" id="bkm'+idBP+'"><div class="pThmb"><div class="thmb"><div class="bkmImg" style="background-image:url(\''+imgBP+'\');"></div></div></div><div class="itmTtl"><a href="'+urlBP+'">'+ttlBP+'</a></div><div class="del" onclick="delBmPs(\''+idBP+'\')"><svg class="line"viewBox="0 0 24 24"><use href="#Delete"></use></svg></div></div>'} var bBmPs='.bmPs[bm-id="'+idBP+'"]';qSell(bBmPs).forEach(item=>{item.classList.add('a')});}

/*refresh BkmPs*/function rBmPs(){getid('dBmPs').innerHTML='';if(Ar.gLS(LS_BM_PS)){objBmPs=JSON.parse(Ar.gLS(LS_BM_PS));for(let key in objBmPs)gBmPs(key,objBmPs[key]);var cBmPs=Object.keys(objBmPs).length;if(cBmPs>0){qSel('.tBkmt').setAttribute('data-text',cBmPs);qSel('.tBkmt').classList.remove('n')}else{qSel('.tBkmt').classList.add('n');nBkmPs()}}}

/*crud stu value*/function synBmPs(act,id,ttl,img,url){switch(act){case'ADD':case'UPD':if(Ar.gLS(LS_BM_PS)){objBmPs=JSON.parse(Ar.gLS(LS_BM_PS))}var newIns={'id':id,'title':ttl,'image':img,'link':url};objBmPs[newIns.id]=newIns;break;case'DEL':delete objBmPs[id];var bBmPs='.bmPs[bm-id="'+id+'"]';qSell(bBmPs).forEach(item=>{item.classList.remove('a')});break;default:break}Ar.sLS(LS_BM_PS,JSON.stringify(objBmPs));rBmPs();return}

/*load LS*/if(giBmPs&&xUR==xUR){rBmPs()}else{nBkmPs()}

/*set result item value*/qSell('.bmPs').forEach(item=>{item.addEventListener('click',event=>{var bm_id=item.getAttribute('bm-id'),bm_ttl=item.getAttribute('bm-ttl'),bm_img=item.getAttribute('bm-img'),bm_url=item.getAttribute('bm-url');if(Ar.gLS(LS_BM_PS)){objBmPs=JSON.parse(Ar.gLS(LS_BM_PS));var valDATA=objBmPs[bm_id];if(valDATA==undefined){synBmPs('ADD',bm_id,bm_ttl,bm_img,bm_url)}else{synBmPs('DEL',bm_id)}}else{synBmPs('ADD',bm_id,bm_ttl,bm_img,bm_url)}})});

/*del BmPs*/function delBmPs(idPs){if(Ar.gLS(LS_BM_PS)){objBmPs=JSON.parse(Ar.gLS(LS_BM_PS));var valDATA=objBmPs[idPs];if(valDATA!=undefined){var idBkmPs='bkm'+idPs;getid(idBkmPs).classList.add('d');setTimeout(function(){synBmPs('DEL',idPs)},1000)}}}

}

/*]]>*/
