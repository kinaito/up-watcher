// ==UserScript==
// @name         咕咕创作者
// @namespace    https://greasyfork.org/zh-CN/scripts/520178
// @version      0.5.2
// @description  一眼发现你关注的创作者最新更新，发掘值得看的内容
// @author       V二同学
// @license      MIT
// @icon         data:image/png;base64,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
// @homepageURL https://github.com/kinaito/up-watcher
// @supportURL  https://github.com/kinaito/up-watcher/issues
// @note        微信公众号：男朋友的求生欲 | 邮箱：konekowang@iCloud.com
// @match        *://*.bilibili.com/*
// @match        *://www.bilibili.com/*
// @match        *://space.bilibili.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==
(function() {
    'use strict';

    console.log('🚀 [v0.5.2] 咕咕创作者启动！');

    function togglePanel() {
        var panel = document.getElementById('bili-tracker-panel');
        var overlay = document.getElementById('bili-tracker-overlay');
        if (!panel || !overlay) {
            createPanel();
            return;
        }
        var isOpen = panel.style.left === '0px';
        if (isOpen) {
            panel.style.left = '-1100px';
            overlay.style.opacity = '0';
            setTimeout(function() { overlay.style.display = 'none'; }, 300);
        } else {
            panel.style.left = '0px';
            overlay.style.display = 'block';
            setTimeout(function() { overlay.style.opacity = '1'; }, 10);
        }
    }

    function createPanel() {
        var overlay = document.createElement('div');
        overlay.id = 'bili-tracker-overlay';
        overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.3);z-index:9999998;display:block;opacity:0;transition:opacity 0.3s;';
        overlay.onclick = function() { togglePanel(); };
        document.body.appendChild(overlay);
        setTimeout(function() { overlay.style.opacity = '1'; }, 10);

        var panel = document.createElement('div');
        panel.id = 'bili-tracker-panel';
        panel.style.cssText = 'position:fixed;left:-1100px;top:0;width:1100px;height:100vh;background:#fff;z-index:9999999;transition:left 0.3s ease;box-shadow:2px 0 12px rgba(0,0,0,0.15);display:flex;flex-direction:column;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;';

        panel.innerHTML = '<div style="padding:16px;border-bottom:1px solid #e5e5e5;display:flex;justify-content:space-between;align-items:center">'
            + '<div><h1 style="font-size:18px;font-weight:700;color:#333;margin:0">咕咕创作者</h1>'
            + '<p style="font-size:12px;color:#999;margin:4px 0 0">共 <span id="bt-total-count">0</span> 位创作者 | 排序：最新作品发布时间 ↓</p></div>'
            + '<div style="display:flex;align-items:center;gap:8px">'
            + '<button onclick="btShowSettings()" style="padding:4px 12px;border:1px solid #ddd;border-radius:4px;background:#fff;color:#666;font-size:13px;cursor:pointer;min-width:96px">设置</button>'
            + '<button onclick="document.getElementById(\'bili-tracker-panel\').style.left=\'-1100px\';document.getElementById(\'bili-tracker-overlay\').style.opacity=\'0\';setTimeout(function(){document.getElementById(\'bili-tracker-overlay\').style.display=\'none\'},300)" style="background:none;border:none;font-size:24px;cursor:pointer;color:#999;padding:4px 8px">&times;</button>'
            + '</div></div>'
            + '<div id="bt-content" style="flex:1;display:flex;overflow:hidden">'
            + '  <div id="bt-groups" style="width:200px;border-right:1px solid #e5e5e5;overflow-y:auto;padding:8px">'
            + '    <div class="bt-group-item bt-group-active" data-group="all" onclick="btSelectGroup(\'all\')">全部</div>'
            + '    <div class="bt-group-item" data-group="special" onclick="btSelectGroup(\'special\')">特别关注</div>'
            + '  </div>'
            + '  <div id="bt-list" style="flex:1;overflow-y:auto;padding:12px">'
            + '    <div style="text-align:center;padding:60px 20px;color:#999">'
            + '      <p style="font-size:16px;margin-bottom:8px">还没有数据</p>'
            + '      <p style="font-size:13px">点击下方「同步最新数据」开始拉取</p>'
            + '    </div>'
            + '  </div>'
            + '</div>'
            + '<div style="padding:12px;border-top:1px solid #e5e5e5">'
            + '<button id="bt-sync-btn" onclick="btSyncData()" style="display:block;width:100%;padding:10px;background:#0081ff;color:#fff;border:none;border-radius:6px;font-size:14px;cursor:pointer;font-weight:500">同步最新数据</button>'
            + '</div>';

        document.body.appendChild(panel);
        setTimeout(function() { panel.style.left = '0px'; }, 10);

        var styleEl = document.createElement('style');
        styleEl.textContent = ''
            + '.bt-group-item{padding:8px 12px;border-radius:6px;font-size:13px;cursor:pointer;color:#666;margin-bottom:2px;transition:all 0.15s}'
            + '.bt-group-item:hover{background:#f0f0f0}'
            + '.bt-group-active{background:#e8f4fd;color:#0081ff;font-weight:500}'
            + '.bt-creator-card{padding:10px 12px;border-radius:8px;margin-bottom:6px;transition:all 0.15s;border:1px solid #eee}'
            + '.bt-creator-card:hover{background:#f8f9ff;border-color:#c8d8ff}'
            + '.bt-creator-row1{display:flex;align-items:center;gap:10px;margin-bottom:4px}'
            + '.bt-avatar{width:32px;height:32px;border-radius:50%;object-fit:cover;flex-shrink:0;background:#f0f0f0}'
            + '.bt-creator-name{font-size:18px;font-weight:600;color:#333;cursor:pointer;text-decoration:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}'
            + '.bt-creator-name:hover{color:#0081ff}'
            + '.bt-creator-row2{display:flex;align-items:center;gap:8px;padding-left:42px}'
            + '.bt-video-title{font-size:14px;color:#444;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;min-width:0;text-decoration:none}'
            + '.bt-video-title:hover{color:#0081ff}'
            + '.bt-video-time{font-size:12px;color:#999;white-space:nowrap;flex-shrink:0}';
        document.head.appendChild(styleEl);

        initPanelJS();
    }

    function initPanelJS() {
        var script = document.createElement('script');
        script.textContent = ''
            + 'function md5(str){'
            + 'function md5cycle(x,k){var a=x[0],b=x[1],c=x[2],d=x[3];a=ff(a,b,c,d,k[0],7,-680876936);d=ff(d,a,b,c,k[1],12,-389564586);c=ff(c,d,a,b,k[2],17,606105819);b=ff(b,c,d,a,k[3],22,-1044525330);a=ff(a,b,c,d,k[4],7,-176418897);d=ff(d,a,b,c,k[5],12,1200080426);c=ff(c,d,a,b,k[6],17,-1473231341);b=ff(b,c,d,a,k[7],22,-45705983);a=ff(a,b,c,d,k[8],7,1770035416);d=ff(d,a,b,c,k[9],12,-1958414417);c=ff(c,d,a,b,k[10],17,-42063);b=ff(b,c,d,a,k[11],22,-1990404162);a=ff(a,b,c,d,k[12],7,1804603682);d=ff(d,a,b,c,k[13],12,-40341101);c=ff(c,d,a,b,k[14],17,-1502002290);b=ff(b,c,d,a,k[15],22,1236535329);a=gg(a,b,c,d,k[1],5,-165796510);d=gg(d,a,b,c,k[6],9,-1069501632);c=gg(c,d,a,b,k[11],14,643717713);b=gg(b,c,d,a,k[0],20,-373897302);a=gg(a,b,c,d,k[5],5,-701558691);d=gg(d,a,b,c,k[10],9,38016083);c=gg(c,d,a,b,k[15],14,-660478335);b=gg(b,c,d,a,k[4],20,-405537848);a=gg(a,b,c,d,k[9],5,568446438);d=gg(d,a,b,c,k[14],9,-1019803690);c=gg(c,d,a,b,k[3],14,-187363961);b=gg(b,c,d,a,k[8],20,1163531501);a=gg(a,b,c,d,k[13],5,-1444681467);d=gg(d,a,b,c,k[2],9,-51403784);c=gg(c,d,a,b,k[7],14,1735328473);b=gg(b,c,d,a,k[12],20,-1926607734);a=hh(a,b,c,d,k[5],4,-378558);d=hh(d,a,b,c,k[8],11,-2022574463);c=hh(c,d,a,b,k[11],16,1839030562);b=hh(b,c,d,a,k[14],23,-35309556);a=hh(a,b,c,d,k[1],4,-1530992060);d=hh(d,a,b,c,k[4],11,1272893353);c=hh(c,d,a,b,k[7],16,-155497632);b=hh(b,c,d,a,k[10],23,-1094730640);a=hh(a,b,c,d,k[13],4,681279174);d=hh(d,a,b,c,k[0],11,-358537222);c=hh(c,d,a,b,k[3],16,-722521979);b=hh(b,c,d,a,k[6],23,76029189);a=hh(a,b,c,d,k[9],4,-640364487);d=hh(d,a,b,c,k[12],11,-421815835);c=hh(c,d,a,b,k[15],16,530742520);b=hh(b,c,d,a,k[2],23,-995338651);a=ii(a,b,c,d,k[0],6,-198630844);d=ii(d,a,b,c,k[7],10,1126891415);c=ii(c,d,a,b,k[14],15,-1416354905);b=ii(b,c,d,a,k[5],21,-57434055);a=ii(a,b,c,d,k[12],6,1700485571);d=ii(d,a,b,c,k[3],10,-1894986606);c=ii(c,d,a,b,k[10],15,-1051523);b=ii(b,c,d,a,k[1],21,-2054922799);a=ii(a,b,c,d,k[8],6,1873313359);d=ii(d,a,b,c,k[15],10,-30611744);c=ii(c,d,a,b,k[6],15,-1560198380);b=ii(b,c,d,a,k[13],21,1309151649);a=ii(a,b,c,d,k[4],6,-145523070);d=ii(d,a,b,c,k[11],10,-1120210379);c=ii(c,d,a,b,k[2],15,718787259);b=ii(b,c,d,a,k[9],21,-343485551);x[0]=add32(a,x[0]);x[1]=add32(b,x[1]);x[2]=add32(c,x[2]);x[3]=add32(d,x[3])}'
            + 'function cmn(q,a,b,x,s,t){a=add32(add32(a,q),add32(x,t));return add32((a<<s)|(a>>>(32-s)),b)}'
            + 'function ff(a,b,c,d,x,s,t){return cmn((b&c)|((~b)&d),a,b,x,s,t)}'
            + 'function gg(a,b,c,d,x,s,t){return cmn((b&d)|(c&(~d)),a,b,x,s,t)}'
            + 'function hh(a,b,c,d,x,s,t){return cmn(b^c^d,a,b,x,s,t)}'
            + 'function ii(a,b,c,d,x,s,t){return cmn(c^(b|(~d)),a,b,x,s,t)}'
            + 'function add32(a,b){return(a+b)&0xFFFFFFFF}'
            + 'function md5blk(s){var md5blks=[],i;for(i=0;i<64;i+=4)md5blks[i>>2]=s.charCodeAt(i)+(s.charCodeAt(i+1)<<8)+(s.charCodeAt(i+2)<<16)+(s.charCodeAt(i+3)<<24);return md5blks}'
            + 'function md5blk_array(a){var md5blks=[],i;for(i=0;i<64;i+=4)md5blks[i>>2]=a[i]+(a[i+1]<<8)+(a[i+2]<<16)+(a[i+3]<<24);return md5blks}'
            + 'function rhex(n){var s="",j;for(j=0;j<4;j++){var v=((n>>(j*8+4))&0xF).toString(16);v+=((n>>(j*8))&0xF).toString(16);s+=v}return s}'
            + 'function hex(x){for(var i=0;i<x.length;i++)x[i]=rhex(x[i]);return x.join("")}'
            + 'var md5_old_md5=str;str=unescape(encodeURIComponent(str));var n=str.length,state=[1732584193,-271733879,-1732584194,271733878],i,length,tail,tmp,lo,hi;for(i=64;i<=str.length;i+=64)md5cycle(state,md5blk(str.substring(i-64,i)));str=str.substring(i-64);length=str.length;tail=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(i=0;i<length;i++)tail[i>>2]|=str.charCodeAt(i)<<((i%4)<<3);tail[i>>2]|=0x80<<((i%4)<<3);if(i>55){md5cycle(state,tail);for(i=0;i<16;i++)tail[i]=0}tail[14]=md5_old_md5.length*8;md5cycle(state,tail);return hex(state)'
            + '}'
            + 'var btMixinKeyEncTab=[46,47,18,2,53,8,23,32,15,50,10,31,58,3,45,35,27,43,5,49,33,9,42,19,29,28,14,39,12,38,41,13,37,48,7,16,24,55,40,61,26,17,0,1,60,51,30,4,22,25,54,21,56,59,6,63,57,62,11,36,20,34,44,52];'
            + 'var btWbiKeys=null;'
            + 'function btGetMixinKey(orig){var temp="";btMixinKeyEncTab.forEach(function(n){temp+=orig[n]});return temp.slice(0,32)}'
            + 'function btEncWbi(params,img_key,sub_key){'
            + '  var mixin_key=btGetMixinKey(img_key+sub_key);'
            + '  var curr_time=Math.round(Date.now()/1000);'
            + '  var chr_filter=/[!\x27()*]/g;'
            + '  params.wts=curr_time;'
            + '  var query=[];'
            + '  Object.keys(params).sort().forEach(function(key){'
            + '    query.push(encodeURIComponent(key)+"="+encodeURIComponent(String(params[key]).replace(chr_filter,"")));'
            + '  });'
            + '  var querystr=query.join("&");'
            + '  var wbi_sign=md5(querystr+mixin_key);'
            + '  return querystr+"&w_rid="+wbi_sign;'
            + '}'
            + 'function btGetWbiKeys(){'
            + '  if(btWbiKeys)return Promise.resolve(btWbiKeys);'
            + '  return fetch("https://api.bilibili.com/x/web-interface/nav",{credentials:"include"}).then(function(r){return r.json()}).then(function(d){'
            + '    if(!d.data||!d.data.wbi_img)throw new Error("获取WBI密钥失败");'
            + '    var img_url=d.data.wbi_img.img_url;var sub_url=d.data.wbi_img.sub_url;'
            + '    btWbiKeys={img_key:img_url.slice(img_url.lastIndexOf("/")+1,img_url.lastIndexOf(".")),sub_key:sub_url.slice(sub_url.lastIndexOf("/")+1,sub_url.lastIndexOf("."))};'
            + '    console.log("[追踪器] WBI密钥获取成功",btWbiKeys);'
            + '    return btWbiKeys;'
            + '  });'
            + '}'
            + 'function btGetWbiSignedParams(params){'
            + '  return btGetWbiKeys().then(function(keys){'
            + '    return btEncWbi(params,keys.img_key,keys.sub_key);'
            + '  });'
            + '}'
            + 'var btState={pullCount:1,ups:{},videos:[],groups:[],currentGroup:"all",lastSync:null};'
            + 'function btSave(){localStorage.setItem("gugu_state",JSON.stringify(btState))}'
            + 'function btLoad(){var s=localStorage.getItem("gugu_state");if(s){try{var d=JSON.parse(s);for(var k in d)btState[k]=d[k]}catch(e){}}}'
            + 'function btPad(n){return n<10?"0"+n:String(n)}'
            + 'function btFmtTime(ts){var d=new Date(ts*1000);var now=new Date();var mm=btPad(d.getMonth()+1);var dd=btPad(d.getDate());var hh=btPad(d.getHours());var mi=btPad(d.getMinutes());if(d.getFullYear()===now.getFullYear()){return mm+"-"+dd+" "+hh+":"+mi}return d.getFullYear()+"-"+mm+"-"+dd+" "+hh+":"+mi}'
            + 'function btFixAvatar(url){return url?url.replace("http://","https://"):""}'
            + 'function btSelectGroup(g){'
            + '  btState.currentGroup=g;'
            + '  var items=document.querySelectorAll(".bt-group-item");'
            + '  items.forEach(function(el){el.className="bt-group-item"+(el.getAttribute("data-group")===g?" bt-group-active":"")});'
            + '  btRenderList();'
            + '}'
            + 'function btRenderGroups(){'
            + '  var el=document.getElementById("bt-groups");if(!el)return;'
            + '  var total=Object.keys(btState.ups).length;'
            + '  var html="<div class=\\"bt-group-item bt-group-active\\" data-group=\\"all\\" onclick=\\"btSelectGroup(\\x27all\\x27)\\">全部 ("+total+")</div>";'
            + '  html+="<div class=\\"bt-group-item\\" data-group=\\"special\\" onclick=\\"btSelectGroup(\\x27special\\x27)\\">特别关注</div>";'
            + '  if(btState.groups&&btState.groups.length>0){'
            + '    btState.groups.forEach(function(g){'
            + '      var cnt=g.count||0;'
            + '      html+="<div class=\\"bt-group-item\\" data-group=\\""+g.id+"\\" onclick=\\"btSelectGroup(\\x27"+g.id+"\\x27)\\">"+g.name+" ("+cnt+")</div>";'
            + '    });'
            + '  }'
            + '  el.innerHTML=html;'
            + '}'
            + 'function btRenderList(){'
            + '  var el=document.getElementById("bt-list");if(!el)return;'
            + '  var ups=Object.values(btState.ups);'
            + '  if(btState.currentGroup&&btState.currentGroup!=="all"){'
            + '    var gid=btState.currentGroup;'
            + '    if(gid==="special"){ups=ups.filter(function(u){return u.special})}'
            + '    else if(btState.groups){var g=btState.groups.find(function(x){return String(x.id)===String(gid)});if(g&&g.mids)ups=ups.filter(function(u){return g.mids.indexOf(String(u.mid))>=0})}'
            + '  }'
            + '  ups.sort(function(a,b){'
            + '    var la=a.videos&&a.videos.length>0?a.videos[0].created:0;'
            + '    var lb=b.videos&&b.videos.length>0?b.videos[0].created:0;'
            + '    return lb-la;'
            + '  });'
            + '  if(ups.length===0){el.innerHTML="<div style=\\"text-align:center;padding:60px 20px;color:#999\\"><p style=\\"font-size:16px\\">还没有数据</p><p style=\\"font-size:13px\\">点击下方同步按钮开始拉取</p></div>";return}'
            + '  var html="";'
            + '  ups.forEach(function(u){'
            + '    var latestVideo=u.videos&&u.videos.length>0?u.videos[0]:null;'
            + '    html+="<div class=\\"bt-creator-card\\">";'
            + '    html+="<div class=\\"bt-creator-row1\\">";'
            + '    var av=btFixAvatar(u.avatar);'
            + '    if(av){html+="<img class=\\"bt-avatar\\" src=\\""+av+"\\" onerror=\\"this.style.visibility=\\x27hidden\\x27\\"/>"}'
            + '    html+="<a class=\\"bt-creator-name\\" href=\\"https://space.bilibili.com/"+u.mid+"\\" target=\\"_blank\\">"+u.name+"</a>";'
            + '    html+="</div>";'
            + '    if(latestVideo){'
            + '      html+="<div class=\\"bt-creator-row2\\">";'
            + '      html+="<a class=\\"bt-video-title\\" href=\\"https://www.bilibili.com/video/"+latestVideo.bvid+"\\" target=\\"_blank\\">"+latestVideo.title+"</a>";'
            + '      html+="<span class=\\"bt-video-time\\">"+btFmtTime(latestVideo.created)+"</span>";'
            + '      html+="</div>";'
            + '    }else{'
            + '      html+="<div class=\\"bt-creator-row2\\"><span style=\\"font-size:14px;color:#ccc\\">暂无投稿</span></div>";'
            + '    }'
            + '    html+="</div>";'
            + '  });'
            + '  el.innerHTML=html;'
            + '}'
            + 'function btShowSettings(){'
            + '  var l=prompt("每个UP主拉取投稿数量 (1-20):",btState.pullCount);'
            + '  if(l!==null){btState.pullCount=Math.max(1,Math.min(20,parseInt(l)||1));btSave();alert("设置已保存，拉取数量: "+btState.pullCount)}'
            + '}'
            + 'function btSyncData(){'
            + '  var btn=document.getElementById("bt-sync-btn");if(btn)btn.textContent="同步中...";if(btn)btn.disabled=true;'
            + '  fetch("https://api.bilibili.com/x/web-interface/nav",{credentials:"include"}).then(function(r){return r.json()}).then(function(d){'
            + '    if(d.code!==0)throw new Error(d.message||"未登录，请先登录B站");'
            + '    if(d.data&&d.data.wbi_img){'
            + '      var img_url=d.data.wbi_img.img_url;var sub_url=d.data.wbi_img.sub_url;'
            + '      btWbiKeys={img_key:img_url.slice(img_url.lastIndexOf("/")+1,img_url.lastIndexOf(".")),sub_key:sub_url.slice(sub_url.lastIndexOf("/")+1,sub_url.lastIndexOf("."))};'
            + '      console.log("[追踪器] 预缓存WBI密钥",btWbiKeys);'
            + '    }'
            + '    return d.data.mid;'
            + '  }).then(function(uid){'
            + '    if(btn)btn.textContent="拉取分组信息...";'
            + '    return fetch("https://api.bilibili.com/x/relation/tags",{credentials:"include"}).then(function(r){return r.json()}).then(function(d){'
            + '      if(d.code===0&&d.data){'
            + '        btState.groups=d.data.map(function(t){return {id:t.tagid,name:t.name,count:t.count,mids:[]}});'
            + '      }'
            + '      return uid;'
            + '    }).catch(function(){return uid});'
            + '  }).then(function(uid){'
            + '    var allUps=[],pn=1;'
            + '    function fetchPage(){'
            + '      if(btn)btn.textContent="拉取关注列表 第"+pn+"页";'
            + '      return fetch("https://api.bilibili.com/x/relation/followings?vmid="+uid+"&pn="+pn+"&ps=50&order=desc",{credentials:"include"}).then(function(r){return r.json()}).then(function(d){'
            + '        if(d.code!==0||!d.data.list||d.data.list.length===0)return allUps;'
            + '        allUps=allUps.concat(d.data.list);pn++;return new Promise(function(r){setTimeout(r,1000)}).then(fetchPage);'
            + '      });'
            + '    }'
            + '    return fetchPage();'
            + '  }).then(function(ups){'
            + '    if(btState.groups&&btState.groups.length>0){'
            + '      var groupIdx=0;'
            + '      function fetchGroupMids(){'
            + '        if(groupIdx>=btState.groups.length){'
            + '          btSave();btRenderGroups();'
            + '          startVideoSync(ups);return;'
            + '        }'
            + '        var g=btState.groups[groupIdx];groupIdx++;'
            + '        if(btn)btn.textContent="拉取分组: "+g.name;'
            + '        fetch("https://api.bilibili.com/x/relation/tag?tagid="+g.id+"&pn=1&ps=2000",{credentials:"include"}).then(function(r){return r.json()}).then(function(d){'
            + '          if(d.code===0&&d.data){g.mids=d.data.map(function(u){return String(u.mid)})}'
            + '          setTimeout(fetchGroupMids,500);'
            + '        }).catch(function(){setTimeout(fetchGroupMids,500)});'
            + '      }'
            + '      fetchGroupMids();'
            + '    }else{startVideoSync(ups)}'
            + '  }).catch(function(e){'
            + '    if(btn){btn.textContent="同步最新数据";btn.disabled=false}'
            + '    alert("同步失败: "+e.message);'
            + '  });'
            + '  function startVideoSync(ups){'
            + '    btState.videos=[];'
            + '    var count=0;var BATCH=5;'
            + '    function syncBatch(){'
            + '      if(count>=ups.length){'
            + '        btState.lastSync=new Date().toLocaleString();btSave();btRenderList();btRenderGroups();'
            + '        var tc=document.getElementById("bt-total-count");if(tc)tc.textContent=Object.keys(btState.ups).length;'
            + '        if(btn){btn.textContent="同步最新数据";btn.disabled=false}'
            + '        alert("同步完成！共"+ups.length+"位UP主");return;'
            + '      }'
            + '      var batch=ups.slice(count,count+BATCH);count+=batch.length;'
            + '      if(btn)btn.textContent="同步 ("+count+"/"+ups.length+")";'
            + '      var tasks=batch.map(function(up){'
            + '        return btGetWbiSignedParams({mid:up.mid,ps:1,pn:1,order:"pubdate"}).then(function(qs){'
            + '          var url="https://api.bilibili.com/x/space/wbi/arc/search?"+qs;'
            + '          return fetch(url,{credentials:"include"}).then(function(r){return r.json()}).then(function(d){'
            + '            if(d.code!==0){console.log("[追踪器] API错误 mid="+up.mid+" code="+d.code+" msg="+d.message);}'
            + '            var videos=(d.code===0&&d.data&&d.data.list)?d.data.list.vlist||[]:[];'
            + '            console.log("[追踪器] "+up.uname+" videos="+videos.length);'
            + '            btState.ups[up.mid]={mid:up.mid,name:up.uname,avatar:up.face,sign:up.sign,special:up.special||false,videos:videos};'
            + '          }).catch(function(e){console.log("[追踪器] fetch失败 mid="+up.mid,e);btState.ups[up.mid]={mid:up.mid,name:up.uname,avatar:up.face,sign:up.sign,special:up.special||false,videos:[]}});'
            + '        }).catch(function(e){console.log("[追踪器] WBI签名失败 mid="+up.mid,e);btState.ups[up.mid]={mid:up.mid,name:up.uname,avatar:up.face,sign:up.sign,special:up.special||false,videos:[]}});'
            + '      });'
            + '      Promise.all(tasks).then(function(){'
            + '        btSave();btRenderList();'
            + '        setTimeout(syncBatch,300);'
            + '      });'
            + '    }'
            + '    syncBatch();'
            + '  }'
            + '}'
            + 'btLoad();'
            + 'btRenderList();'
            + 'btRenderGroups();'
            + 'var tc=document.getElementById("bt-total-count");if(tc)tc.textContent=Object.keys(btState.ups).length;';
        document.head.appendChild(script);
    }

    console.log('🔨 [v0.5.2] 创建悬浮按钮');

    var style = document.createElement('style');
    style.textContent = ''
        + '#bili-tracker-floatbtn{'
        + '  position:fixed!important;'
        + '  left:-30px!important;'
        + '  top:50%!important;'
        + '  transform:translateY(-50%)!important;'
        + '  width:60px!important;'
        + '  height:60px!important;'
        + '  border-radius:50%!important;'
        + '  display:flex!important;'
        + '  align-items:center!important;'
        + '  justify-content:center!important;'
        + '  cursor:pointer!important;'
        + '  z-index:9999997!important;'
        + '  box-shadow:2px 2px 10px rgba(0,0,0,0.2)!important;'
        + '  transition:left 0.3s ease,transform 0.2s ease!important;'
        + '  overflow:hidden!important;'
        + '}'
        + '#bili-tracker-floatbtn img{'
        + '  width:60px!important;'
        + '  height:60px!important;'
        + '  border-radius:50%!important;'
        + '  object-fit:cover!important;'
        + '}'
        + '#bili-tracker-floatbtn:hover{'
        + '  left:10px!important;'
        + '  transform:translateY(-50%) scale(1.05)!important;'
        + '}';
    document.head.appendChild(style);

    var btn = document.createElement('div');
    btn.id = 'bili-tracker-floatbtn';
    btn.title = '咕咕创作者';
    btn.innerHTML = '<img src="data:image/png;base64,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"/>';
    btn.onclick = function() {
        console.log('🖱️ 悬浮按钮被点击！');
        togglePanel();
    };
    document.body.appendChild(btn);
    console.log('✅ [v0.5.2] 悬浮按钮创建成功！');
})();
