var CHART_TYPES={line:"Line",bar:"Bar",pie:"Pie",scatter:"Scatter",map:"Map",candlestick:"Candlestick",radar:"Radar",boxplot:"Boxplot",heatmap:"Heatmap",graph:"Graph",tree:"Tree",treemap:"Treemap",sunburst:"Sunburst",parallel:"Parallel",sankey:"Sankey",funnel:"Funnel",gauge:"Gauge",pictorialBar:"PictorialBar",themeRiver:"ThemeRiver",calendar:"Calendar",custom:"Custom"},charts=[];$(document).ready(function(){var a,e=$("#explore-container .chart-list-panel"),t=$("#left-chart-nav ul");for(a in CHART_TYPES)e.append('<h3 class="chart-type-head" id="chart-type-'+a+'">'+CHART_TYPES[a]+"</h3>").append('<div class="row" id="chart-row-'+a+'"></div>'),t.append($("<li>").append('<a class="left-chart-nav-link" id="left-chart-nav-'+a+'" href="#chart-type-'+a+'"><div class="chart-icon"></div><div class="chart-name">'+CHART_TYPES[a]+"</div></a>"));for(var r=0,l=EXAMPLES.length;r<l;++r){var i=EXAMPLES[r].title||"未命名图表",c=$('<div class="col-lg-3 col-md-4 col-sm-6"></div>'),n=$('<div class="chart"></div>');$("#chart-row-"+EXAMPLES[r].category).append(c.append(n)),$link=$('<a class="chart-link" href="./editor.html?c='+EXAMPLES[r].id+'"></a>'),n.append($link),$link.append('<h4 class="chart-title">'+i+"</h4>"),$chartArea=$('<img class="chart-area" src="data/thumb/'+EXAMPLES[r].id+'.png" />'),$link.append($chartArea)}$(".chart-type-head").waypoint(function(a){var e=this.element.id.split("-");3===e.length&&($("#left-chart-nav li").removeClass("active"),$("#left-chart-nav-"+e[2]).parent("li").addClass("active"))},{offset:70});window.addEventListener("hashchange",function(){scrollBy(0,-80);var a=location.hash.split("-");3===a.length&&($("#left-chart-nav li").removeClass("active"),$("#left-chart-nav-"+a[2]).parent("li").addClass("active"))}),$("#left-chart-nav li").first().addClass("active")});