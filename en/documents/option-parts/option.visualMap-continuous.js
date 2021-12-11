window.__EC_DOC_option_visualMap_continuous = {
  "type": {
    "desc": "<p>Used to determine that it is a continuous visualMap component.</p>\n"
  },
  "id": {
    "desc": "<p>Component ID, not specified by default. If specified, it can be used to refer the component in option or API.</p>\n"
  },
  "min": {
    "desc": "\n\n<p>Specify the min dataValue for the visualMap component. <code class=\"codespan\">[visualMap.min, visualMax.max]</code> make up the domain of viusul mapping.</p>\n<p>Notice that <code class=\"codespan\">min</code> and <code class=\"codespan\">max</code> should be specified explicitly, and be <code class=\"codespan\">[0, 200]</code> by default, but not <code class=\"codespan\">dataMin</code> and <code class=\"codespan\">dataMax</code> in series.data.</p>\n",
    "uiControl": {
      "type": "number"
    }
  },
  "max": {
    "desc": "\n\n<p>Specify the max dataValue for the visualMap component. <code class=\"codespan\">[visualMap.min, visualMax.max]</code> make up the domain of viusul mapping.</p>\n<p>Notice that <code class=\"codespan\">min</code> and <code class=\"codespan\">max</code> should be specified explicitly, and be <code class=\"codespan\">[0, 200]</code> by default, but not <code class=\"codespan\">dataMin</code> and <code class=\"codespan\">dataMax</code> in series.data.</p>\n",
    "uiControl": {
      "type": "number"
    }
  },
  "range": {
    "desc": "<p>Specify selected range, that is, the dataValue corresponding to the two handles. For example:</p>\n<pre><code class=\"lang-javascript\">chart.setOption({\n    visualMap: {\n        min: 0,\n        max: 100,\n        // dataValue corresponding to the two handles.\n        range: [4, 15],\n        ...\n    }\n});\n</code></pre>\n<p><strong>auto-adaption when min or max is modified by setOption</strong></p>\n<ul>\n<li>If <code class=\"codespan\">range</code> is not set (or set to null or undefined)</li>\n</ul>\n<pre><code class=\"lang-javascript\">For instance:\nchart.setOption({visualMap: {min: 10, max: 300}}); // range is not set, then range is [min, max] by default, that is, [10, 300].\n\nchart.setOption({visualMap: {min: 0, max: 400}}); // Modify min and max using setOption again.\n// Then range will be auto-modified to the new [min, max], that is, [0, 400].\n</code></pre>\n<ul>\n<li>If <code class=\"codespan\">range</code> is set explicitly, such as [10, 300]</li>\n</ul>\n<pre><code class=\"lang-javascript\">For instance:\nchart.setOption({visualMap: {min: 10, max: 300, range: [20, 80]}}); // range is set to [20, 80].\n\nchart.setOption({visualMap: {min: 0, max: 400}}); // min and max are modifies using setOption.\n// Then range keep the original value ([20, 80]) but will not do auto-adaption.\n\nchart.setOption({visualMap: {range: null}}); // Set range to null then.\n// Then auto-adaption of range turns on and range is auto modified to [min, max], that is, [0, 400].\n\n</code></pre>\n<p><code class=\"codespan\">range</code> gotten by <code class=\"codespan\">getOption</code> is always an <code class=\"codespan\">Array</code>, but not <code class=\"codespan\">null</code> or <code class=\"codespan\">undefined</code>.</p>\n"
  },
  "calculable": {
    "desc": "\n\n<p>Whether show handles, which can be dragged to adjust &quot;selected range&quot;.</p>\n<p>Notes: In order to be compatible with ECharts2, the rule, which seems to be a little odd, is retained: when <a href=\"#visualMap.type\">visualMap.type</a> is not set, and <a href=\"#visualMap-continuous.calculable\">visualMap.calculable</a> was set to be <code class=\"codespan\">true</code>, <a href=\"#visualMap.type\">visualMap.type</a> will be automatically set as <code class=\"codespan\">&#39;continuous&#39;</code>, regardless of some settings such as <a href=\"#visualMap-piecewise.splitNumber\">visualMap-piecewise.splitNumber</a>. Therefore, it is recommended to set <a href=\"#visualMap.type\">visualMap.type</a> explicitly, which avoids ambiguity.</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "realtime": {
    "desc": "\n\n<p>Whether to update view in real time when dragging a handle.</p>\n<ul>\n<li><p>If <code class=\"codespan\">ture</code>, the chart view will be updated in real time when dragging.</p>\n</li>\n<li><p>If <code class=\"codespan\">false</code>, the chart view will be updated at the end of the handle dragging.</p>\n</li>\n</ul>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "inverse": {
    "desc": "\n\n<p>Whether to inverse the layout of visualMap component.</p>\n<p>As <code class=\"codespan\">inverse</code> is <code class=\"codespan\">false</code>, the layout direction is the same as <a href=\"#grid\">cartesian coordinate</a>. That is:</p>\n<ul>\n<li>As <a href=\"#visualMap.orient\">visualMap.orient</a> is <code class=\"codespan\">&#39;vertical&#39;</code>, large data are placed at the top while small at the bottom.</li>\n<li>As <a href=\"#visualMap.orient\">visualMap.orient</a> is <code class=\"codespan\">&#39;horizontal&#39;</code>,  large data are placed on the right while small on the left.</li>\n</ul>\n<p>As <code class=\"codespan\">inverse</code> is <code class=\"codespan\">true</code>, the result is opposite.</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "precision": {
    "desc": "\n\n<p>The decimal precision of label, defaults to be 0 (no decimals).</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1"
    }
  },
  "itemWidth": {
    "desc": "\n\n<p>The width of the main bar of visualMap component.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "20",
      "min": "0"
    }
  },
  "itemHeight": {
    "desc": "\n\n<p>The height of the main bar of visualMap component.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "140",
      "min": "0"
    }
  },
  "align": {
    "desc": "\n\n<p>Specify the position of handles and labels, against the main bar. The possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;auto&#39;</code> Decide automatically.</li>\n<li><code class=\"codespan\">&#39;left&#39;</code> The handles and labels are on the right, which is valid when <code class=\"codespan\">orient</code> is set as <code class=\"codespan\">&#39;horizontal&#39;</code>.</li>\n<li><code class=\"codespan\">&#39;right&#39;</code> The handles and labels are on the left, which is valid when <code class=\"codespan\">orient</code> is set as <code class=\"codespan\">&#39;horizontal&#39;</code>.</li>\n<li><code class=\"codespan\">&#39;top&#39;</code> the handles and labels are at the bottom, which is valid when <code class=\"codespan\">orient</code> is set as  <code class=\"codespan\">&#39;vertical&#39;</code>.</li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code> the handles and labels are at the top, which is valid when <code class=\"codespan\">orient</code> is set as <code class=\"codespan\">&#39;vertical&#39;</code>.</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,left,right,top,bottom"
    }
  },
  "text": {
    "desc": "<p>The label text on both ends, such as <code class=\"codespan\">[&#39;High&#39;, &#39;Low&#39;]</code>. <a href=\"https://echarts.apache.org/examples/en/editor.html?c=doc-example/map-visualMap-continuous-text&amp;edit=1&amp;reset=1\" target=\"_blank\">sample</a>.</p>\n<p>You can understand the order of items in <code class=\"codespan\">text</code> array just by a simple trial. See <a href=\"#visualMap.inverse\">visualMap.inverse</a>.</p>\n"
  },
  "textGap": {
    "desc": "\n\n<p>The distance between the ends of the main bar and the label, with unit px. See <a href=\"#visualMap-continuous.text\">visualMap-continuous.text</a></p>\n",
    "uiControl": {
      "type": "number",
      "default": "10",
      "step": "0.5"
    }
  },
  "show": {
    "desc": "<p>Whether to show visualMap-continuous component. If set as <code class=\"codespan\">false</code>, visualMap-continuous component will not show, but it can still perform visual mapping from dataValue to visual channel in chart.</p>\n"
  },
  "dimension": {
    "desc": "<p>Specify which dimension should be used to fetch dataValue from <a href=\"#series.data\">series.data</a>, and then map them to visual channel.</p>\n<p><a href=\"#series.data\">series.data</a> can be regarded as a two-dimensional array, for instance:</p>\n<pre><code class=\"lang-javascript\">[\n    [12, 23, 43],\n    [12, 23, 43],\n    [43, 545, 65],\n    [92, 23, 33]\n]\n</code></pre>\n<p>Each column of the above array is regarded as a <code class=\"codespan\">dimension</code>. For example, when property <code class=\"codespan\">dimension</code> is set to 1, the second column (i.e., 23, 23, 545, 23) is chosen to perform visual mapping.</p>\n<p>Use the last dimension of <code class=\"codespan\">data</code> by default.</p>\n"
  },
  "seriesIndex": {
    "desc": "<p>Specify visual mapping should be performed on which series, from which\n<a href=\"#series.data\">series.data</a> is fetched.</p>\n<p>All series are used by default.</p>\n"
  },
  "hoverLink": {
    "desc": "<p><code class=\"codespan\">hoverLink</code> enable highlight certain graphical elements of chart when mouse hovers on some place of <code class=\"codespan\">visualMap</code> component that is coresponding to those graphical elements by visual mapping.</p>\n<p>Inversely, when mouse hovers a graphical element of chart, its value label will be displayed on its corresponding position in <code class=\"codespan\">visualMap</code>.</p>\n"
  },
  "inRange": {
    "desc": "<p>Define visual channels that will mapped from dataValues that are <strong>in selected range</strong>. User can interact with visualMap component and make a seleced range by mouse or touch.</p>\n<ul>\n<li><code class=\"codespan\">symbol</code>: Type of symbol.</li>\n<li><code class=\"codespan\">symbolSize</code>: Symbol size.</li>\n<li><code class=\"codespan\">color</code>: Symbol color.</li>\n<li><code class=\"codespan\">colorAlpha</code>: Symbol alpha channel.</li>\n<li><code class=\"codespan\">opacity</code>: Opacity of symbol and others (like labels).</li>\n<li><code class=\"codespan\">colorLightness</code>: Lightness in <a href=\"https://en.wikipedia.org/wiki/HSL_and_HSV\" target=\"_blank\">HSL</a>.</li>\n<li><code class=\"codespan\">colorSaturation</code>: Saturation in <a href=\"https://en.wikipedia.org/wiki/HSL_and_HSV\" target=\"_blank\">HSL</a>.</li>\n<li><code class=\"codespan\">colorHue</code>: Hue in <a href=\"https://en.wikipedia.org/wiki/HSL_and_HSV\" target=\"_blank\">HSL</a>.</li>\n</ul>\n<p><code class=\"codespan\">inRange</code> could customize visual channels both in series (by <a href=\"#visualMap-continuous.seriesIndex\">visualMap-continuous.seriesIndex</a>) and in <code class=\"codespan\">visualMap-continuous</code> itself.</p>\n<p>For instance, if a <code class=\"codespan\">visualMap-continuous</code> component is used on a scatter chart, the mapping approach from data to <code class=\"codespan\">color</code> (or <code class=\"codespan\">symbol</code>, <code class=\"codespan\">size</code>, ...) can be both customized in the scatter chart and <code class=\"codespan\">visualMap-continuous</code> component itself. See the code as following:</p>\n<pre><code class=\"lang-javascript\">visualMap: [\n    {\n        ...,\n        // Define visual channels both in target series and visualMap-continuous component itself:\n        inRange: {\n            color: [&#39;#121122&#39;, &#39;rgba(3,4,5,0.4)&#39;, &#39;red&#39;],\n            symbolSize: [30, 100]\n        }\n    }\n]\n</code></pre>\n<p>If you want to define visual channels for target series and visualMap-continuous component separately, you should do as follows:</p>\n<pre><code class=\"lang-javascript\">visualMap: [\n    {\n        ...,\n        // Define visual channels only for target series.\n        target: {\n            inRange: {\n                color: [&#39;#121122&#39;, &#39;rgba(3,4,5,0.4)&#39;, &#39;red&#39;],\n                symbolSize: [60, 200]\n            }\n        },\n        // Define visual channels only for visualMap-continuous component.\n        controller: {\n            inRange: {\n                symbolSize: [30, 100]\n            }\n        }\n    }\n]\n</code></pre>\n<p>Or define as follows:</p>\n<pre><code class=\"lang-javascript\">visualMap: [\n    {\n        ...,\n        // Define visual channels for both target series and visualMap-continuous component.\n        inRange: {\n            color: [&#39;#121122&#39;, &#39;rgba(3,4,5,0.4)&#39;, &#39;red&#39;],\n            symbolSize: [60, 200]\n        },\n        // Define visual channels only for visualMap-continuous component, which\n        // will overlap the properties with the same name in the above common\n        // definition. (symbolSize is overlapped by [30, 100] while color\n        // keeps the original value)\n        controller: {\n            inRange: {\n                symbolSize: [30, 100]\n            }\n        }\n    }\n]\n</code></pre>\n<p><br></p>\n<hr>\n<p><strong>✦ About visual channels ✦</strong></p>\n<ul>\n<li><p>Various visual channels (such as <code class=\"codespan\">color</code>、<code class=\"codespan\">symbolSize</code> and ect.) can be defined in inRange at the same time and all of them will be apopted.</p>\n</li>\n<li><p>Basically visual channels <code class=\"codespan\">opacity</code> is recommended, rather than <code class=\"codespan\">colorAlpha</code>. The former controls the transparency of both graphical element and its attachments (like label), whereas the latter only controls the transparency of graphical element.</p>\n</li>\n<li><p>There are two approaches of visual mapping supported: &#39;Linear Mapping&#39; and &#39;Table Mapping&#39;.</p>\n</li>\n</ul>\n<p><br></p>\n<hr>\n<p><strong>✦ Linear Mapping to visual channel ✦</strong></p>\n<p><code class=\"codespan\">Linear Mapping</code> means that linear calculation will be performed on each dataValue (value of series.data), mapping them from the domain of <code class=\"codespan\">[visaulMap.min, visualMap.max]</code> to a given range of <code class=\"codespan\">[visual value 1, visual value 2]</code> and obtaining a final value (say visual value) for visual channel rendering.</p>\n<p>For instance, <code class=\"codespan\">[visualMap.min, visualMap.max]</code> is set to be <code class=\"codespan\">[0, 100]</code>, and there is series.data: <code class=\"codespan\">[50, 10, 100]</code>. We intend to map them to an <code class=\"codespan\">opacity</code> range <code class=\"codespan\">[0.4, 1]</code>, by which the size of value can be demostrated by the transparency of graphical elements. visualMap component will then linear calculate them and get opacity values <code class=\"codespan\">[0.7, 0.44, 1]</code>, cooresponding to each dataValue.</p>\n<p>We can also set the visual range inversely, such as <code class=\"codespan\">opacity: [1, 0.4]</code>, and the final mapping result for the given series.data above will be <code class=\"codespan\">[0.7, 0.96, 0.4]</code>.</p>\n<p>Notice: [visualMap.min, visualMap.max] should be set manually and is [0, 100] by default, but not <code class=\"codespan\">dataMin</code> and <code class=\"codespan\">dataMax</code> in series.data.</p>\n<p>How to configure visualMap component to do Linear Mapping?</p>\n<ul>\n<li><p>When use <a href=\"#visualMap-continuous\">visualMap-continuous</a>, or</p>\n</li>\n<li><p>When use <a href=\"#visualMap-piecewise\">visualMap-piecewise</a> and <a href=\"#visualMap-piecewise.categories\">visualMap-piecewise.categories</a> is not used.</p>\n</li>\n</ul>\n<p>About the value of visual channel (visual value):</p>\n<ul>\n<li><p>Basically <code class=\"codespan\">Array</code> is used to express the range of visual value, e.g., <code class=\"codespan\">color: [&#39;#333&#39;, &#39;#777&#39;]</code>.</p>\n</li>\n<li><p>Single <code class=\"codespan\">number</code> or single <code class=\"codespan\">string</code> can also be used, which will be converted to an <code class=\"codespan\">Array</code> by visualMap component. e.g.:  <code class=\"codespan\">opacity: 0.4</code> will be converted to <code class=\"codespan\">opacity: [0.4, 0.4]</code>, <code class=\"codespan\">color: &#39;#333&#39;</code> will be converted to <code class=\"codespan\">color: [&#39;#333&#39;, &#39;#333&#39;]</code>.</p>\n</li>\n<li><p>For visual channel <code class=\"codespan\">symbolSize</code>, <code class=\"codespan\">opacity</code>, <code class=\"codespan\">colorAlpha</code>, <code class=\"codespan\">colorLightness</code>, <code class=\"codespan\">colorSaturation</code>, <code class=\"codespan\">colorHue</code>, the range of visual value is always in the form of: <code class=\"codespan\">[visual value of visualMap.min, visual value of visualMap.max]</code>. For example, <code class=\"codespan\">colorLightness: [0.8, 0.2]</code> means that the dataValue in series.data that equals to <code class=\"codespan\">visualMap.min</code> (if any) will be mapped to lightness <code class=\"codespan\">0.8</code>, and the dataValue that equals to <code class=\"codespan\">visualMap.max</code> (if any) will be mapped to lightness <code class=\"codespan\">0.2</code>, and other dataValues will be mapped by the linear calculateion based on the domain of <code class=\"codespan\">[visualMap.min, visualMap.max]</code> and the range of <code class=\"codespan\">[0.8, 0.2]</code>.</p>\n</li>\n<li><p>For visual channel <code class=\"codespan\">color</code>, array is used, like: <code class=\"codespan\">[&#39;#333&#39;, &#39;#78ab23&#39;, &#39;blue&#39;]</code>, which means a color ribbon is formed based on the three color stops, and dataValues will be mapped to the ribbon. Specifically, the dataValue that equals to <code class=\"codespan\">visualMap.min</code> will be mapped onto <code class=\"codespan\">&#39;#333&#39;</code>, the dataValue that equals to <code class=\"codespan\">visualMap.max</code> will be mapped onto <code class=\"codespan\">&#39;blue&#39;</code>, and other dataValues will be piecewisely interpolated to get the final color.</p>\n</li>\n<li><p>For visual channel <code class=\"codespan\">symbol</code>, array is used, like: <code class=\"codespan\">[&#39;circle&#39;, &#39;rect&#39;, &#39;diamond&#39;]</code>, where the dataValue that equals to <code class=\"codespan\">visualMap.min</code> will be mapped onto <code class=\"codespan\">&#39;circle&#39;</code>, the dataValue that equals to <code class=\"codespan\">visualMap.max</code> will be mapped onto <code class=\"codespan\">&#39;diamond&#39;</code>, and other dataValues will be caculated based on the numerical distance to <code class=\"codespan\">visualMax.min</code> and to <code class=\"codespan\">visualMap.max</code>, and mapped onto one of <code class=\"codespan\">&#39;circle&#39;</code>, <code class=\"codespan\">&#39;rect&#39;</code>, <code class=\"codespan\">&#39;diamond&#39;</code>.</p>\n</li>\n</ul>\n<p>About the possible value range of visual value:</p>\n<ul>\n<li><p><code class=\"codespan\">opacity</code>、<code class=\"codespan\">colorAlpha</code>、<code class=\"codespan\">colorLightness</code>、<code class=\"codespan\">colorSaturation</code>、<code class=\"codespan\">visual value</code></p>\n<p>  possible value range is <code class=\"codespan\">[0, 1]</code>.</p>\n</li>\n<li><p><code class=\"codespan\">colorHue</code>：</p>\n<p>  possible value range is <code class=\"codespan\">[0, 360]</code>.</p>\n</li>\n<li><p><code class=\"codespan\">color</code>：</p>\n<p>  color can use RGB expression, like <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>, or RGBA expression, like <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>, or Hex expression, like &#39;#ccc&#39;.</p>\n</li>\n<li><p><code class=\"codespan\">symbol</code>：</p>\n</li>\n</ul>\n<p>Icon types provided by ECharts includes</p>\n<p><code class=\"codespan\">&#39;circle&#39;</code>, <code class=\"codespan\">&#39;rect&#39;</code>, <code class=\"codespan\">&#39;roundRect&#39;</code>, <code class=\"codespan\">&#39;triangle&#39;</code>, <code class=\"codespan\">&#39;diamond&#39;</code>, <code class=\"codespan\">&#39;pin&#39;</code>, <code class=\"codespan\">&#39;arrow&#39;</code>, <code class=\"codespan\">&#39;none&#39;</code></p>\n<p>It can be set to an image with <code class=\"codespan\">&#39;image://url&#39;</code> , in which URL is the link to an image, or <code class=\"codespan\">dataURI</code> of an image.</p>\n<p>An image URL example:</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>A <code class=\"codespan\">dataURI</code> example:</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>Icons can be set to arbitrary vector path via <code class=\"codespan\">&#39;path://&#39;</code> in ECharts. As compared with a raster image, vector paths prevent jagging and blurring when scaled, and have better control over changing colors. The size of the vector icon will be adapted automatically. Refer to <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a> for more information about the format of the path. You may export vector paths from tools like Adobe </p>\n<p>For example:</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre><p><br></p>\n<hr>\n<p><strong>✦ Table Mapping to visual channel ✦</strong></p>\n<p><code class=\"codespan\">Table Mapping</code> could be used when dataValue (values in series.data, specified by <a href=\"#visualMap.dimension\">visualMap.dimension</a>) is enumerable and we intend to map them to visual value by looking up a given table.</p>\n<p>For instance, in a <a href=\"#visualMap-piecewise\">visualMap-piecewise</a> component, <a href=\"#visualMap-piecewise.categories\">visualMap-piecewise.categories</a> is set to <code class=\"codespan\">[&#39;Demon Hunter&#39;, &#39;Blademaster&#39;, &#39;Death Knight&#39;, &#39;Warden&#39;, &#39;Paladin&#39;]</code>. And there is series.data: <code class=\"codespan\">[&#39;Demon Hunter&#39;, &#39;Death Knight&#39;, &#39;Warden&#39;, &#39;Paladin&#39;]</code>. Then we can establish the lookup rule for color: <code class=\"codespan\">color: {&#39;Warden&#39;: &#39;red&#39;, &#39;Demon Hunter&#39;: &#39;black&#39;}</code>, by which the <code class=\"codespan\">visualMap</code> component will map <code class=\"codespan\">dataValue</code> to <code class=\"codespan\">color</code>.</p>\n<p>How to configure <code class=\"codespan\">visualMap</code> component to do <code class=\"codespan\">Table Mapping</code>?</p>\n<p>When use <a href=\"#visualMap-piecewise\">visualMap-piecewise</a> and <a href=\"#visualMap-piecewise.categories\">visualMap-piecewise.categories</a>is set.</p>\n<p>About the value of visual channel (visual value):</p>\n<p>Generally <code class=\"codespan\">Object</code> or <code class=\"codespan\">Array</code> is used, for instance:</p>\n<pre><code class=\"lang-javascript\">visualMap: {\n    type: &#39;piecewise&#39;,\n    // categories defines the items that to be displayed in visualMap-piecewise component.\n    categories: [\n        &#39;Demon Hunter&#39;, &#39;Blademaster&#39;, &#39;Death Knight&#39;, &#39;Warden&#39;, &#39;Paladin&#39;\n    ],\n    inRange: {\n        // visual value can be an Object：\n        color: {\n            &#39;Warden&#39;: &#39;red&#39;,\n            &#39;Demon Hunter&#39;: &#39;black&#39;,\n            &#39;&#39;: &#39;green&#39; // Blank string means that except &#39;Warden&#39; and &#39;Demon Hunter&#39;,\n                        // all other dataValues should be mapped to &#39;green&#39;.\n        }\n        // visual value can also be a single value,\n        // means that all dataValues should be mapped to the value.\n        color: &#39;green&#39;,\n        // visual value can also be a array, with the same length\n        // as the array of categories and one-one mapping onto it.\n        color: [&#39;red&#39;, &#39;black&#39;, &#39;green&#39;, &#39;yellow&#39;, &#39;white&#39;]\n    }\n}\n</code></pre>\n<p><a href=\"https://echarts.apache.org/examples/en/editor.html?c=doc-example/scatter-visualMap-categories&amp;edit=1&amp;reset=1\" target=\"_blank\">Example</a></p>\n<p><strong>✦ How to modity configurations of vsiual encoding? ✦</strong></p>\n<p>If you want to modify the configurations of visual encoding after chart been rendered (by invoke <code class=\"codespan\">setOption</code> to set the initial <code class=\"codespan\">option</code>), <code class=\"codespan\">setOption</code> can be used again to modify configurations of visual encoding. For instance:</p>\n<pre><code class=\"lang-javascript\">chart.setOption({\n    visualMap: {\n        inRange: {color: [&#39;red&#39;, &#39;blue&#39;]}\n    }\n});\n</code></pre>\n<p>Notice:</p>\n<ul>\n<li><p>These visualMap properties (i.e. <code class=\"codespan\">inRange</code>, <code class=\"codespan\">outOfRange</code>, <code class=\"codespan\">target</code>, <code class=\"codespan\">controller</code>) do not support &quot;merge&quot;, that is, anyone among them is modified when use <code class=\"codespan\">setOption</code> again, all of the original values of them will not be kept but erased. The &quot;merge&quot; brings complication in implemnentation and understanding, whereas &quot;erase all&quot; normalize the practise: once you want to modify some visual values, you should pass all of them to <code class=\"codespan\">setOption</code>, no matter they are to be changed.</p>\n</li>\n<li><p>This way, <code class=\"codespan\">getOption() -&gt; modify the gotten option -&gt; setOption(modified option)</code>, is strongly <strong>not recommended</strong>, for instance:</p>\n</li>\n</ul>\n<pre><code class=\"lang-javascript\">// Not recommended approach, regardless of its correctness:\n\nvar option = chart.getOption(); // Get the entire option.\noption.visualMap.inRange.color = [&#39;red&#39;, &#39;blue&#39;]; // modify color, which is what you want.\n\n// You have to modify those two properties, otherwise you will not get what you want.\noption.visualMap.target.inRange.color = [&#39;red&#39;, &#39;blue&#39;];\noption.visualMap.controller.inRange.color = [&#39;red&#39;, &#39;blue&#39;];\n\nchart.setOption(option); // set the modified option back.\n// You should not use this approach, but use the\n// approach demostrated before this example.\n</code></pre>\n<p><strong>Notice:</strong> There is default color <code class=\"codespan\">[&#39;#f6efa6&#39;, &#39;#d88273&#39;, &#39;#bf444c&#39;]</code> in <code class=\"codespan\">inRange</code> if you not set <code class=\"codespan\">inRange</code>. If you dont want it, set <code class=\"codespan\">inRange: {color: null}</code> to disable it.</p>\n"
  },
  "outOfRange": {
    "desc": "<p>Define visual channels that will mapped from dataValues that are <strong>out of selected range</strong>. User can interact with visualMap component and make a seleced range by mouse or touch.</p>\n<p>See available configurations in <a href=\"#visualMap-continuous.inRange\">visualMap-continuous.inRange</a></p>\n"
  },
  "controller": {
    "desc": "<p>Property <code class=\"codespan\">inRange</code> and <code class=\"codespan\">outOfRange</code> can be set within property <code class=\"codespan\">controller</code>, which means those <code class=\"codespan\">inRange</code> and <code class=\"codespan\">outOfRange</code> are only used on the controller (<code class=\"codespan\">visualMap</code> component itself), but are not used on chart (series). This property is useful in some scenarios when the view of controller needs to be customized in detail.</p>\n"
  },
  "controller.inRange": {
    "desc": "<p>Define visual channels that will mapped from dataValues that are <strong>in selected range</strong>. User can interact with visualMap component and make a seleced range by mouse or touch.</p>\n<p>See available configurations in <a href=\"#visualMap-continuous.inRange\">visualMap-continuous.inRange</a></p>\n"
  },
  "controller.outOfRange": {
    "desc": "<p>Define visual channels that will mapped from dataValues that are <strong>out of selected range</strong>. User can interact with visualMap component and make a seleced range by mouse or touch.</p>\n<p>See available configurations in <a href=\"#visualMap-continuous.inRange\">visualMap-continuous.inRange</a></p>\n"
  },
  "zlevel": {
    "desc": "<p><code class=\"codespan\">zlevel</code> value of all graphical elements in .</p>\n<p><code class=\"codespan\">zlevel</code> is used to make layers with Canvas. Graphical elements with different <code class=\"codespan\">zlevel</code> values will be placed in different Canvases, which is a common optimization technique. We can put those frequently changed elements (like those with animations) to a separate <code class=\"codespan\">zlevel</code>. Notice that too many Canvases will increase memory cost, and should be used carefully on mobile phones to avoid crash.</p>\n<p>Canvases with bigger <code class=\"codespan\">zlevel</code> will be placed on Canvases with smaller <code class=\"codespan\">zlevel</code>.</p>\n"
  },
  "z": {
    "desc": "<p><code class=\"codespan\">z</code> value of all graphical elements in , which controls order of drawing graphical components. Components with smaller <code class=\"codespan\">z</code> values may be overwritten by those with larger <code class=\"codespan\">z</code> values.</p>\n<p><code class=\"codespan\">z</code> has a lower priority to <code class=\"codespan\">zlevel</code>, and will not create new Canvas.</p>\n"
  },
  "left": {
    "desc": "<p>Distance between visualMap  component and the left side of the container.</p>\n<p><code class=\"codespan\">left</code> value can be instant pixel value like <code class=\"codespan\">20</code>; it can also be a percentage value relative to container width like <code class=\"codespan\">&#39;20%&#39;</code>; and it can also be <code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, or <code class=\"codespan\">&#39;right&#39;</code>.</p>\n<p>If the <code class=\"codespan\">left</code> value is set to be <code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, or <code class=\"codespan\">&#39;right&#39;</code>, then the component will be aligned automatically based on position.</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0%"
    }
  },
  "top": {
    "desc": "<p>Distance between visualMap  component and the top side of the container.</p>\n<p><code class=\"codespan\">top</code> value can be instant pixel value like <code class=\"codespan\">20</code>; it can also be a percentage value relative to container width like <code class=\"codespan\">&#39;20%&#39;</code>; and it can also be <code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, or <code class=\"codespan\">&#39;bottom&#39;</code>.</p>\n<p>If the <code class=\"codespan\">left</code> value is set to be <code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, or <code class=\"codespan\">&#39;bottom&#39;</code>, then the component will be aligned automatically based on position.</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0%"
    }
  },
  "right": {
    "desc": "<p>Distance between visualMap  component and the right side of the container.</p>\n<p><code class=\"codespan\">right</code> value can be instant pixel value like <code class=\"codespan\">20</code>; it can also be a percentage value relative to container width like <code class=\"codespan\">&#39;20%&#39;</code>.</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0%"
    }
  },
  "bottom": {
    "desc": "<p>Distance between visualMap  component and the bottom side of the container.</p>\n<p><code class=\"codespan\">bottom</code> value can be instant pixel value like <code class=\"codespan\">20</code>; it can also be a percentage value relative to container width like <code class=\"codespan\">&#39;20%&#39;</code>.</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0%"
    }
  },
  "orient": {
    "desc": "<p>How to layout the visualMap component, <code class=\"codespan\">&#39;horizontal&#39;</code> or <code class=\"codespan\">&#39;vertical&#39;</code>.</p>\n"
  },
  "padding": {
    "desc": "\n\n<p>visualMap-continuous space around content. The unit is px. Default values for each position are 5. And they can be set to different values with left, right, top, and bottom.</p>\n<p>Examples: </p>\n<pre><code class=\"lang-js\">// Set padding to be 5\npadding: 5\n// Set the top and bottom paddings to be 5, and left and right paddings to be 10\npadding: [5, 10]\n// Set each of the four paddings seperately\npadding: [\n    5,  // up\n    10, // right\n    5,  // down\n    10, // left\n]\n</code></pre>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "backgroundColor": {
    "desc": "<p>background color of visualMap component.</p>\n"
  },
  "borderColor": {
    "desc": "<p>border color of visualMap component.</p>\n"
  },
  "borderWidth": {
    "desc": "<p>border width of visualMap component, with unit: px.</p>\n"
  },
  "color": {
    "desc": "<p>This property remains only for compatibility with ECharts2, and is not recommended in ECharts3. It is recommended to configure color in <a href=\"#visualMap-continuous.inRange\">visualMap-continuous.inRange</a>, or <a href=\"#visualMap-continuous.outOfRange\">visualMap-continuous.outOfRange</a> if needed.</p>\n<p>If you persist in using it, the following issue should be noticed: the sequence of dataValues that are mapped to colorValues in property <code class=\"codespan\">color</code> is from <code class=\"codespan\">large</code> to <code class=\"codespan\">small</code>, whereas that in <a href=\"#visualMap-continuous.inRange\">visualMap-continuous.inRange</a> or <a href=\"#visualMap-continuous.outOfRange\">visualMap-continuous.outOfRange</a> is from <code class=\"codespan\">small</code> to <code class=\"codespan\">large</code>.</p>\n"
  },
  "textStyle.color": {
    "desc": "\n\n<p>visualMap  text color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#333"
    }
  },
  "textStyle.fontStyle": {
    "desc": "\n\n<p>visualMap  font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "textStyle.fontWeight": {
    "desc": "\n\n<p>visualMap  font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "textStyle.fontFamily": {
    "desc": "\n\n<p>visualMap  font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "textStyle.fontSize": {
    "desc": "\n\n<p>visualMap  font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "textStyle.lineHeight": {
    "desc": "\n\n<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "textStyle.width": {
    "desc": "\n\n<p>Width of text block.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "100",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "textStyle.height": {
    "desc": "\n\n<p>Height of text block.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "50",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "textStyle.textBorderColor": {
    "desc": "\n\n<p>Storke color of the text.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "textStyle.textBorderWidth": {
    "desc": "\n\n<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "textStyle.textBorderType": {
    "desc": "\n\n\n<p>Stroke line type of the text.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>Since <code class=\"codespan\">v5.0.0</code>, it can also be a number or a number array to specify the <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a> of the line. With \n<code class=\"codespan\">textBorderDashOffset</code>\n, we can make the line style more flexible.</p>\n<p>For example：</p>\n<pre><code class=\"lang-js\">{\n\ntextBorderType: [5, 10],\n\ntextBorderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "textStyle.textBorderDashOffset": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the line dash offset. With \n<code class=\"codespan\">textBorderType</code>\n, we can make the line style more flexible.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "textStyle.textShadowColor": {
    "desc": "\n\n<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "textStyle.textShadowBlur": {
    "desc": "\n\n<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "textStyle.textShadowOffsetX": {
    "desc": "\n\n<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "textStyle.textShadowOffsetY": {
    "desc": "\n\n<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "textStyle.overflow": {
    "desc": "\n\n<p>Determine how to display the text when it&#39;s overflow. Available when <code class=\"codespan\">width</code> is set.</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> Truncate the text and trailing with <code class=\"codespan\">ellipsis</code>.</li>\n<li><code class=\"codespan\">&#39;break&#39;</code> Break by word</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> Break by character.</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "truncate,break,breakAll"
    }
  },
  "textStyle.ellipsis": {
    "desc": "<p>Ellipsis to be displayed when <code class=\"codespan\">overflow</code> is set to <code class=\"codespan\">truncate</code>.</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> Truncate the overflow lines.</li>\n</ul>\n"
  },
  "formatter": {
    "desc": "<p>the formatter tool for label.</p>\n<ul>\n<li><p>If it was set as a <code class=\"codespan\">string</code>, it refers to a template, for instance: <code class=\"codespan\">aaaa{value}bbbb</code>, where <code class=\"codespan\">{value}</code> represents the value of the edge of the seleted range.</p>\n</li>\n<li><p>If it was set as a <code class=\"codespan\">Function</code>, it refers to a callback function, for instance:</p>\n</li>\n</ul>\n<pre><code class=\"lang-javascript\">formatter: function (value) {\n    return &#39;aaaa&#39; + value + &#39;bbbb&#39;;\n}\n</code></pre>\n"
  },
  "handleIcon": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>Icon of drag handle.</p>\n<pre><code class=\"lang-js\">&#39;M-11.39,9.77h0a3.5,3.5,0,0,1-3.5,3.5h-22a3.5,3.5,0,0,1-3.5-3.5h0a3.5,3.5,0,0,1,3.5-3.5h22A3.5,3.5,0,0,1-11.39,9.77Z&#39;\n</code></pre>\n<p>It can be set to an image with <code class=\"codespan\">&#39;image://url&#39;</code> , in which URL is the link to an image, or <code class=\"codespan\">dataURI</code> of an image.</p>\n<p>An image URL example:</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>A <code class=\"codespan\">dataURI</code> example:</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>Icons can be set to arbitrary vector path via <code class=\"codespan\">&#39;path://&#39;</code> in ECharts. As compared with a raster image, vector paths prevent jagging and blurring when scaled, and have better control over changing colors. The size of the vector icon will be adapted automatically. Refer to <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a> for more information about the format of the path. You may export vector paths from tools like Adobe </p>\n<p>For example:</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>",
    "uiControl": {
      "type": "icon"
    }
  },
  "handleSize": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n<p>Size of drag handle. It can be a percent string.</p>\n"
  },
  "handleStyle": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n<p>Style of drag handle.</p>\n"
  },
  "handleStyle.color": {
    "desc": "\n\n<p> color. </p>\n<blockquote>\n<p>Supports setting as solid color using <code class=\"codespan\">rgb(255,255,255)</code>, <code class=\"codespan\">rgba(255,255,255,1)</code>, <code class=\"codespan\">#fff</code>, etc. Also supports setting as gradient color and pattern fill, see <a href=\"#color\">option.color</a> for details</p>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "handleStyle.borderColor": {
    "desc": "\n\n<p> border color, whose format is similar to that of <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "handleStyle.borderWidth": {
    "desc": "\n\n<p> border width. No border when it is set to be 0.</p>\n<p> border width. No border when it is set to be 0.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "handleStyle.borderType": {
    "desc": "\n\n\n<p> border type.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>Since <code class=\"codespan\">v5.0.0</code>, it can also be a number or a number array to specify the <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a> of the line. With \n<code class=\"codespan\">borderDashOffset</code>\n, we can make the line style more flexible.</p>\n<p>For example：</p>\n<pre><code class=\"lang-js\">{\n\nborderType: [5, 10],\n\nborderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "handleStyle.borderDashOffset": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the line dash offset. With \n<code class=\"codespan\">borderType</code>\n, we can make the line style more flexible.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "handleStyle.borderCap": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To specify how to draw the end points of the line.\nPossible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;butt&#39;</code>: The ends of lines are squared off at the endpoints.</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: The ends of lines are rounded.</li>\n<li><code class=\"codespan\">&#39;square&#39;</code>: The ends of lines are squared off by adding a box with an equal width and half the height of the line&#39;s thickness.</li>\n</ul>\n<p>Default value is <code class=\"codespan\">&#39;butt&#39;</code>. Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">lineCap</a> for more details.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "butt",
      "options": "butt,round,square"
    }
  },
  "handleStyle.borderJoin": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To determine the shape used to join two line segments where they meet.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;bevel&#39;</code>: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.</li>\n<li><code class=\"codespan\">&#39;miter&#39;</code>: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the \n<code class=\"codespan\">borderMiterLimit</code>\nproperty.</li>\n</ul>\n<p>Default value is <code class=\"codespan\">&#39;bevel&#39;</code>. Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">lineJoin</a> for more details.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "bevel",
      "options": "bevel,round,miter"
    }
  },
  "handleStyle.borderMiterLimit": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the miter limit ratio. Only works when \n<code class=\"codespan\">borderJoin</code>\n is set as <code class=\"codespan\">miter</code>.</p>\n<p>Default value is <code class=\"codespan\">10</code>. Negative、<code class=\"codespan\">0</code>、<code class=\"codespan\">Infinity</code> and <code class=\"codespan\">NaN</code> values are ignored.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">miterLimit</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "10"
    }
  },
  "handleStyle.shadowBlur": {
    "desc": "\n\n<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "handleStyle.shadowColor": {
    "desc": "\n\n<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "handleStyle.shadowOffsetX": {
    "desc": "\n\n<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "handleStyle.shadowOffsetY": {
    "desc": "\n\n<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "handleStyle.opacity": {
    "desc": "\n\n<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "indicatorIcon": {
    "desc": "<p>Icon of indicator.</p>\n<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n",
    "uiControl": {
      "type": "icon"
    }
  },
  "indicatorSize": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n<p>Size of indicator. It can be a percent string.</p>\n"
  },
  "indicatorStyle": {
    "desc": "<p>Style of indicator.</p>\n"
  },
  "indicatorStyle.color": {
    "desc": "\n\n<p> color. </p>\n<blockquote>\n<p>Supports setting as solid color using <code class=\"codespan\">rgb(255,255,255)</code>, <code class=\"codespan\">rgba(255,255,255,1)</code>, <code class=\"codespan\">#fff</code>, etc. Also supports setting as gradient color and pattern fill, see <a href=\"#color\">option.color</a> for details</p>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "indicatorStyle.borderColor": {
    "desc": "\n\n<p> border color, whose format is similar to that of <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "indicatorStyle.borderWidth": {
    "desc": "\n\n<p> border width. No border when it is set to be 0.</p>\n<p> border width. No border when it is set to be 0.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "2",
      "min": "0",
      "step": "0.5"
    }
  },
  "indicatorStyle.borderType": {
    "desc": "\n\n\n<p> border type.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>Since <code class=\"codespan\">v5.0.0</code>, it can also be a number or a number array to specify the <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a> of the line. With \n<code class=\"codespan\">borderDashOffset</code>\n, we can make the line style more flexible.</p>\n<p>For example：</p>\n<pre><code class=\"lang-js\">{\n\nborderType: [5, 10],\n\nborderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "indicatorStyle.borderDashOffset": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the line dash offset. With \n<code class=\"codespan\">borderType</code>\n, we can make the line style more flexible.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "indicatorStyle.borderCap": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To specify how to draw the end points of the line.\nPossible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;butt&#39;</code>: The ends of lines are squared off at the endpoints.</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: The ends of lines are rounded.</li>\n<li><code class=\"codespan\">&#39;square&#39;</code>: The ends of lines are squared off by adding a box with an equal width and half the height of the line&#39;s thickness.</li>\n</ul>\n<p>Default value is <code class=\"codespan\">&#39;butt&#39;</code>. Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">lineCap</a> for more details.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "butt",
      "options": "butt,round,square"
    }
  },
  "indicatorStyle.borderJoin": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To determine the shape used to join two line segments where they meet.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;bevel&#39;</code>: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.</li>\n<li><code class=\"codespan\">&#39;miter&#39;</code>: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the \n<code class=\"codespan\">borderMiterLimit</code>\nproperty.</li>\n</ul>\n<p>Default value is <code class=\"codespan\">&#39;bevel&#39;</code>. Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">lineJoin</a> for more details.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "bevel",
      "options": "bevel,round,miter"
    }
  },
  "indicatorStyle.borderMiterLimit": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the miter limit ratio. Only works when \n<code class=\"codespan\">borderJoin</code>\n is set as <code class=\"codespan\">miter</code>.</p>\n<p>Default value is <code class=\"codespan\">10</code>. Negative、<code class=\"codespan\">0</code>、<code class=\"codespan\">Infinity</code> and <code class=\"codespan\">NaN</code> values are ignored.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">miterLimit</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "10"
    }
  },
  "indicatorStyle.shadowBlur": {
    "desc": "\n\n<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "2",
      "min": "0",
      "step": "0.5"
    }
  },
  "indicatorStyle.shadowColor": {
    "desc": "\n\n<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "rgba(0,0,0,0.2)"
    }
  },
  "indicatorStyle.shadowOffsetX": {
    "desc": "\n\n<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "step": "0.5"
    }
  },
  "indicatorStyle.shadowOffsetY": {
    "desc": "\n\n<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "step": "0.5"
    }
  },
  "indicatorStyle.opacity": {
    "desc": "\n\n<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  }
}