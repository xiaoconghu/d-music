(function(window){var svgSprite='<svg><symbol id="icon-search" viewBox="0 0 1025 1024"><path d="M437.178281 78.40223c-206.158604 0-373.288094 167.12949-373.288094 373.286094 0 206.164604 167.12949 373.293094 373.288094 373.293094 206.162604 0 373.292094-167.12949 373.292094-373.293094C810.471374 245.531719 643.341885 78.40223 437.178281 78.40223L437.178281 78.40223zM437.178281 751.269201c-165.188484 0-299.574878-134.391394-299.574878-299.580878 0-165.181484 134.386394-299.573878 299.574878-299.573878 165.187484 0 299.572878 134.392394 299.572878 299.573878C736.752158 616.877807 602.365765 751.269201 437.178281 751.269201L437.178281 751.269201zM437.178281 751.269201"  ></path><path d="M949.207781 896.894628 784.003297 731.657144c-15.488045 19.161056-32.703096 36.783108-51.10715 53.136156l164.197481 164.220481c7.198021 7.198021 16.624049 10.794032 26.057076 10.794032 9.432028 0 18.859055-3.596011 26.063076-10.794032C963.603823 934.618738 963.603823 911.29067 949.207781 896.894628L949.207781 896.894628zM949.207781 896.894628"  ></path></symbol><symbol id="icon-sousuo" viewBox="0 0 1024 1024"><path d="M948.48 833.92l-185.6-183.68c-3.84-3.84-8.32-6.4-13.44-7.68C801.28 580.48 832 501.76 832 416 832 221.44 674.56 64 480 64 285.44 64 128 221.44 128 416 128 610.56 285.44 768 480 768c85.76 0 163.84-30.72 225.28-81.28 1.92 4.48 4.48 8.96 8.32 12.8l185.6 183.68c14.08 13.44 35.84 13.44 49.92 0S962.56 847.36 948.48 833.92zM480 704C320.64 704 192 575.36 192 416 192 256.64 320.64 128 480 128 639.36 128 768 256.64 768 416 768 575.36 639.36 704 480 704z"  ></path></symbol><symbol id="icon-sousuo1" viewBox="0 0 1024 1024"><path d="M630.19942 708.974164a393.873723 393.873723 0 1 1 78.774744-78.774744L1024 945.225255 945.225255 1024 630.19942 708.974164z m-236.324234 0a315.098978 315.098978 0 1 0 0-630.197957 315.098978 315.098978 0 0 0 0 630.124815z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)