var lang=window.EC_DEMO_LANG,isCN="en"!==lang,CHART_TYPES={line:["折线图","Line"],bar:["柱状图","Bar"],pie:["饼图","Pie"],scatter:["散点图","Scatter"],map:["地理坐标/地图","GEO/Map"],candlestick:["K 线图","Candlestick"],radar:["雷达图","Radar"],boxplot:["盒须图","Boxplot"],heatmap:["热力图","Heatmap"],graph:["关系图","Graph"],lines:["路径图","Lines"],tree:["树图","Tree"],treemap:["矩形树图","Treemap"],sunburst:["旭日图","Sunburst"],parallel:["平行坐标系","Parallel"],sankey:["桑基图","Sankey"],funnel:["漏斗图","Funnel"],gauge:["仪表盘","Gauge"],pictorialBar:["象形柱图","PictorialBar"],themeRiver:["主题河流图","ThemeRiver"],calendar:["日历坐标系","Calendar"],custom:["自定义系列","Custom"],dataset:["数据集","Dataset"],dataZoom:["数据区域缩放","DataZoom"],drag:["拖拽","Drag"],rich:["富文本","Rich Text"],globe:["3D 地球","3D Globe"],bar3D:["3D 柱状图","3D Bar"],scatter3D:["3D 散点图","3D Scatter"],surface:["3D 曲面","3D Surface"],map3D:["3D 地图","3D Map"],lines3D:["3D 路径图","3D Lines"],line3D:["3D 折线图","3D Line"],scatterGL:["GL 散点图","Scatter GL"],linesGL:["GL 路径图","Lines GL"],flowGL:["GL 矢量场图","Flow GL"],graphGL:["GL 关系图","Graph GL"]},COLORS={default:["#c23531","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3"],light:["#37A2DA","#32C5E9","#67E0E3","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#E062AE","#E690D1","#e7bcf3","#9d96f5","#8378EA","#96BFFF"],dark:["#dd6b66","#759aa0","#e69d87","#8dc1a9","#ea7e53","#eedd78","#73a373","#73b9bc","#7289ab","#91ca8c","#f49f42"]},blackMap=function(a){for(var e={},t=0;t<a.length;t++)e[a[t]]=1;return 0<=location.href.indexOf("github.io")?{}:e}(["effectScatter-map","geo-lines","geo-map-scatter","heatmap-map","lines-airline","map-china","map-china-dataRange","map-labels","map-locate","map-province","map-world","map-world-dataRange","scatter-map","scatter-map-brush","scatter-weibo","scatter-world-population","geo3d","geo3d-with-different-height","globe-country-carousel","globe-with-echarts-surface","map3d-alcohol-consumption","map3d-wood-map","scattergl-weibo"]),params={};(location.search||"").substr(1).split("&").forEach(function(a){var e=a.split("=");params[e[0]]=e[1]}),$("#theme ."+(params.theme||"default")).addClass("selected"),"dark"===params.theme&&$("#theme").addClass("dark"),$("#theme a").popover({html:!0,content:function(){var a=$(this).attr("class").replace("selected","").trim();return'<div class="theme-palette '+a+'">'+COLORS[a].map(function(a){return'<span style="background-color:'+a+'"></span>'}).join("")+"</div>"},placement:"bottom",trigger:"hover"});var charts=[];$(document).ready(function(){var a=$("#explore-container .chart-list-panel"),e=$("#left-chart-nav ul");for(var t in CHART_TYPES)CHART_TYPES.hasOwnProperty(t)&&(a.append('<h3 class="chart-type-head" id="chart-type-'+t+'">'+(isCN?CHART_TYPES[t][0]+"<span>"+CHART_TYPES[t][1]+"</span>":CHART_TYPES[t][1])+"</h3>").append('<div class="row" id="chart-row-'+t+'"></div>'),e.append($("<li>").append('<a class="left-chart-nav-link" id="left-chart-nav-'+t+'" href="#chart-type-'+t+'"><div class="chart-icon"></div><div class="chart-name">'+CHART_TYPES[t][isCN?0:1]+"</div></a>")));function r(a,e){for(var t=new Array(a.length),r=0;r<a.length;++r)t[r]={categoryIndex:0,item:a[r]};for(t.reverse();t.length;){var l=t.pop(),n=l.item;if(!blackMap.hasOwnProperty(n.id)){var c=n.title||(isCN?"未命名图表":"Unnamed Chart"),i=$('<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6"></div>'),s=$('<div class="chart"></div>'),o=n.category;o instanceof Array||(o=[o]),$("#chart-row-"+o[l.categoryIndex]).append(i.append(s)),++l.categoryIndex,l.categoryIndex<o.length&&t.unshift(l);var d=["c="+n.id],p=n.theme||params.theme;e&&d.push("gl=1"),p&&d.push("theme="+p);var h=$('<a target="_blank" class="chart-link" href="./editor.html?'+d.join("&")+'"></a>');s.append(h),h.append('<h4 class="chart-title">'+c+"</h4>");var m=e||!params.theme?"":"-"+params.theme,f=$('<img class="chart-area" src="../images/placeholder.jpg" data-original="'+CDN_PAY_ROOT_PATH+"/"+(e?"data-gl":"data")+"/thumb"+m+"/"+n.id+'.jpg" />');h.append(f)}}}r(EXAMPLES,!1),r(EXAMPLES_GL,!0);$(".chart-type-head").waypoint(function(a){var e=this.element.id.split("-");3===e.length&&($("#left-chart-nav li").removeClass("active"),$("#left-chart-nav-"+e[2]).parent("li").addClass("active"))},{offset:70});window.addEventListener("hashchange",function(){scrollBy(0,-80);var a=location.hash.split("-");3===a.length&&($("#left-chart-nav li").removeClass("active"),$("#left-chart-nav-"+a[2]).parent("li").addClass("active"))}),$("#left-chart-nav li").first().addClass("active"),a.find("img.chart-area").lazyload()});