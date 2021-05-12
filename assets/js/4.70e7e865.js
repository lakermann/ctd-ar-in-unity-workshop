(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{368:function(e,t,a){e.exports=a.p+"assets/img/camera_1.6dd5bd93.png"},369:function(e,t,a){e.exports=a.p+"assets/img/camera_2.5f3f2c8d.png"},370:function(e,t,a){e.exports=a.p+"assets/img/image_target_1.140f8c57.png"},371:function(e,t,a){e.exports=a.p+"assets/img/image_target_2.5430ee68.png"},372:function(e,t,a){e.exports=a.p+"assets/img/cubes_1.e42e725b.png"},373:function(e,t,a){e.exports=a.p+"assets/img/cubes_2.af759883.png"},374:function(e,t,a){e.exports=a.p+"assets/img/cubes_3.5005df62.png"},375:function(e,t,a){e.exports=a.p+"assets/img/cubes_4.f14086ce.png"},376:function(e,t,a){e.exports=a.p+"assets/img/cubes_5.c222054e.png"},377:function(e,t,a){e.exports=a.p+"assets/img/cubes_6.cca1ffc7.jpg"},378:function(e,t,a){e.exports=a.p+"assets/img/cubes_7.101fd81e.jpg"},379:function(e,t,a){e.exports=a.p+"assets/img/cubes_8.cd67d000.png"},380:function(e,t,a){e.exports=a.p+"assets/img/cubes_9.56d63b03.png"},381:function(e,t,a){e.exports=a.p+"assets/img/cubes_10.313cfc9e.png"},382:function(e,t,a){e.exports=a.p+"assets/img/cubes_11.03bffeae.png"},383:function(e,t,a){e.exports=a.p+"assets/img/cubes_12.45542d34.png"},425:function(e,t,a){"use strict";a.r(t);var s=a(26),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"scene"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scene"}},[e._v("#")]),e._v(" Scene")]),e._v(" "),s("h2",{attrs:{id:"setup-camera"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-camera"}},[e._v("#")]),e._v(" Setup Camera")]),e._v(" "),s("p",[e._v("Now let’s setup the scene. The first thing we are going to do is to delete the default "),s("code",[e._v("main camera")]),e._v(". Vuforia provides a custom camera prefab specifically designed for AR applications.  That’s why it’s called the "),s("code",[e._v("ARCamera")]),e._v(":")]),e._v(" "),s("p",[s("img",{attrs:{src:a(368),alt:"Screenshot"}})]),e._v(" "),s("p",[e._v("When you highlight the camera prefab, its component and properties are presented in the inspector panel. Here we have to set the "),s("code",[e._v("App License Key")]),e._v(" - you can copy paste it from the "),s("a",{attrs:{href:"https://developer.vuforia.com/targetmanager/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vuforia License Manager"),s("OutboundLink")],1),e._v(". Another field we will set is the "),s("code",[e._v("Database Load Behavior")]),e._v(", where we specify which device database (ctd-unity-workshop) to load and activate:")]),e._v(" "),s("p",[s("img",{attrs:{src:a(369),alt:"Screenshot"}})]),e._v(" "),s("h2",{attrs:{id:"add-image-target"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-image-target"}},[e._v("#")]),e._v(" Add Image Target")]),e._v(" "),s("p",[e._v("No let’s add an "),s("code",[e._v("image target")]),e._v(" to the scene. Image targets represent images that the Vuforia SDK can detect and track. The SDK detects and tracks the features that are naturally found in the image itself by comparing these natural features against a known target resource database. Once the image target is detected, the SDK will track the image as long as it is at least partially in the camera’s field of view.")]),e._v(" "),s("ul",[s("li",[e._v("We add an image target to the scene by dragging the prefab into the hierarchy:")])]),e._v(" "),s("p",[s("img",{attrs:{src:a(370),alt:"Screenshot"}})]),e._v(" "),s("ul",[s("li",[e._v("We configure the image target component by selecting the "),s("code",[e._v("Database")]),e._v(" contains the trackable image target we are going to use:")])]),e._v(" "),s("p",[s("img",{attrs:{src:a(371),alt:"Screenshot"}})]),e._v(" "),s("h2",{attrs:{id:"add-cubes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-cubes"}},[e._v("#")]),e._v(" Add Cubes")]),e._v(" "),s("ul",[s("li",[e._v("Now we are ready to add a cube:")])]),e._v(" "),s("p",[s("img",{attrs:{src:a(372),alt:"Screenshot"}})]),e._v(" "),s("p",[e._v("This object must be a child of the image target:")]),e._v(" "),s("p",[s("img",{attrs:{src:a(373),alt:"Screenshot"}})]),e._v(" "),s("ul",[s("li",[e._v("Set the "),s("code",[e._v("Position")]),e._v(" and the "),s("code",[e._v("Scale")]),e._v(":")])]),e._v(" "),s("p",[s("img",{attrs:{src:a(374),alt:"Screenshot"}})]),e._v(" "),s("ul",[s("li",[e._v("Press the play button and test the preview:")])]),e._v(" "),s("p",[s("img",{attrs:{src:a(375),alt:"Screenshot"}})]),e._v(" "),s("ul",[s("li",[e._v("Download one texture for the cube (save the image):")])]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Texture 1")]),e._v(" "),s("th",[e._v("Texture 2")]),e._v(" "),s("th",[e._v("Texture 3")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("img",{attrs:{src:a(376),alt:"Screenshot"}})]),e._v(" "),s("td",[s("img",{attrs:{src:a(377),alt:"Screenshot"}})]),e._v(" "),s("td",[s("img",{attrs:{src:a(378),alt:"Screenshot"}})])])])]),e._v(" "),s("ul",[s("li",[e._v("Create a new folder "),s("code",[e._v("Textures")]),e._v(":")])]),e._v(" "),s("p",[s("img",{attrs:{src:a(379),alt:"Screenshot"}})]),e._v(" "),s("ul",[s("li",[e._v("Drag the downloaded texture in the "),s("code",[e._v("Textures")]),e._v(" folder. A texture is an image straight out of an image processing program like Photoshop:")])]),e._v(" "),s("p",[s("img",{attrs:{src:a(380),alt:"Screenshot"}})]),e._v(" "),s("ul",[s("li",[e._v("Drag the texture from the folder on the cube:")])]),e._v(" "),s("p",[s("img",{attrs:{src:a(381),alt:"Screenshot"}})]),e._v(" "),s("p",[e._v("You see now that a new material is created automatically. A material is the details of what an object should look like including albedo, emission, reflections etc:")]),e._v(" "),s("p",[s("img",{attrs:{src:a(382),alt:"Screenshot"}})]),e._v(" "),s("ul",[s("li",[e._v("Press the play button and test the preview:")])]),e._v(" "),s("p",[s("img",{attrs:{src:a(383),alt:"Screenshot"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);