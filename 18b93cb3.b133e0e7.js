(window.webpackJsonp=window.webpackJsonp||[]).push([[110,388],{1089:function(e){e.exports=JSON.parse('["0.63","0.62","0.61","0.60"]')},199:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(1043),l=a(1044),o=a(1089),s=function(e){var t=e.version,a="next"===t?"Master":t,n=e.currentVersion===t,c="next"===t,s=-1!==t.toUpperCase().indexOf("-RC"),i=o[0].toUpperCase().replace("-RC",""),u=r.a.createElement("a",{href:Object(l.a)("docs/"+(n?"":t+"/")+"getting-started")},"Documentation"),h="https://github.com/facebook/react-native/releases",m="Changelog";c?(h="https://github.com/facebook/react-native/compare/"+i+"-stable...master",m="Commits since "+i):s||(h="https://github.com/facebook/react-native/releases/tag/v"+t+".0");var d=r.a.createElement("a",{href:h},m);return r.a.createElement("tr",null,r.a.createElement("th",null,a),r.a.createElement("td",null,u),r.a.createElement("td",null,d))};t.default=function(){var e=o.length>0?o[0]:null,t=["next"].concat(o.filter((function(e){return-1!==e.indexOf("-RC")}))),a=o.filter((function(e){return-1===e.indexOf("-RC")}));return r.a.createElement(c.a,{wrapperClassName:"versions-page"},r.a.createElement("h1",null,"React Native versions"),r.a.createElement("p",null,"Open source React Native releases follow a monthly release train that is coordinated on GitHub through the"," ",r.a.createElement("a",{href:"https://github.com/react-native-community/react-native-releases"},r.a.createElement("code",null,"react-native-releases"))," ","repository. At the beginning of each month, a new release candidate is created off the master branch of"," ",r.a.createElement("a",{href:"https://github.com/facebook/react-native"},r.a.createElement("code",null,"facebook/react-native")),". The release candidate will soak for a month to allow contributors like yourself to"," ",r.a.createElement("a",{href:Object(l.a)("docs/upgrading")},"verify the changes")," and to identify any issues by"," ",r.a.createElement("a",{href:"https://github.com/facebook/react-native/issues"},"writing clear, actionable bug reports"),". Eventually, the release candidate will be promoted to stable."),r.a.createElement("h2",null,"Latest versions"),r.a.createElement("p",null,"To see what changes are coming and provide better feedback to React Native contributors, use the latest release candidate when possible. Changes introduced in a release candidate will have been shipped to production Facebook apps for over two weeks by the time the release candidate is cut."),r.a.createElement("table",{className:"versions"},r.a.createElement("tbody",null,t.map((function(t){return r.a.createElement(s,{key:"version_"+t,version:t,currentVersion:e})})))),r.a.createElement("h2",null,"Stable versions"),r.a.createElement("p",null,"The most recent stable version will be used automatically whenever a new project is created using the ",r.a.createElement("code",null,"react-native init")," command."),r.a.createElement("table",{className:"versions"},r.a.createElement("tbody",null,a.map((function(t){return r.a.createElement(s,{key:"version_"+t,version:t,currentVersion:e})})))),r.a.createElement("h2",null,"Archived versions"),r.a.createElement("p",null,"The documentation for versions below ",r.a.createElement("code",null,"0.60")," can be found on the separate website called"," ",r.a.createElement("a",{href:"https://archive.reactnative.dev/versions"},"React Native Archive"),"."))}}}]);