"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[798],{798:function(a,b,c){c.r(b),c.d(b,{PhaserGame:function(){return ah},default:function(){return ai}});var d,e,f,g,h,i,j,k=c(5893),l=c(2260);function m(a,b){if(!(a instanceof b))throw TypeError("Cannot call a class as a function")}function n(a,b){return(n=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a})(a,b)}function o(a,b){if("function"!=typeof b&&null!==b)throw TypeError("Super expression must either be null or a function");if(a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b){var c,d;c=a,n(c,d=b)}}function p(a){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)})(a)}function q(a){if(void 0===a)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function r(a){var b=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}();return function(){var c,d,e,f,g,h=p(f=a);if(b){var i,j=(i=this,p(i)).constructor;g=Reflect.construct(h,arguments,j)}else g=h.apply(this,arguments);return c=this,(d=g)&&("object"==((e=d)&&e.constructor===Symbol?"symbol":typeof e)||"function"==typeof d)?d:q(c)}}var s,t,u=function(a){o(c,a);var b=r(c);function c(){return m(this,c),b.call(this,"loading-scene")}var d=c.prototype;return d.preload=function(){this.load.setBaseURL("assets/"),this.load.image("king","sprites/king.png"),this.load.atlas("a-king","spritesheets/a-king.png","spritesheets/a-king_atlas.json"),this.load.image({key:"tiles",url:"tilemaps/tiles/dungeon-16-16.png"}),this.load.tilemapTiledJSON("dungeon","tilemaps/json/dungeon.json"),this.load.spritesheet("tiles_spr","tilemaps/tiles/dungeon-16-16.png",{frameWidth:16,frameHeight:16})},d.create=function(){this.scene.start("level-1-scene"),this.scene.start("ui-scene")},c}(l.Scene);(s=g||(g={})).chestLoot="chest-loot",s.attack="attack",s.gameEnd="game-end",s.btnUpDown="btn-up-down",s.btnUpUp="btn-up-up",s.btnDownDown="btn-down-down",s.btnDownUp="btn-down-up",s.btnRightDown="btn-right-down",s.btnRightUp="btn-right-up",s.btnLeftDown="btn-left-down",s.btnLeftUp="btn-left-up",s.btnAttack="btn-attack",(t=h||(h={}))[t.WIN=0]="WIN",t[t.LOSE=1]="LOSE";var v=function(a){o(c,a);var b=r(c);function c(a,d,e,f,g){var h;return m(this,c),(h=b.call(this,a,d,e,f,g)).hp=100,a.add.existing(q(h)),a.physics.add.existing(q(h)),h.getBody().setCollideWorldBounds(!0),h}var d=c.prototype;return d.getDamage=function(a){var b=this;this.scene.tweens.add({targets:this,duration:100,repeat:3,yoyo:!0,alpha:.5,onStart:function(){a&&(b.hp=b.hp-a)},onComplete:function(){b.setAlpha(1)}})},d.getHPValue=function(){return this.hp},d.checkFlip=function(){this.body.velocity.x<0?this.scaleX=-1:this.scaleX=1},d.getBody=function(){return this.body},c}(l.Physics.Arcade.Sprite),w=function(a){o(c,a);var b=r(c);function c(a,d,e,f,h,i){var j;return m(this,c),(j=b.call(this,a,d,e,f,i)).AGRESSOR_RADIUS=100,j.target=h,a.add.existing(q(j)),a.physics.add.existing(q(j)),j.getBody().setSize(16,16),j.getBody().setOffset(0,0),j.attackHandler=function(){Phaser.Math.Distance.BetweenPoints({x:j.x,y:j.y},{x:j.target.x,y:j.target.y})<j.target.width&&(j.getDamage(),j.disableBody(!0,!1),j.scene.time.delayedCall(300,function(){j.destroy()}))},j.scene.game.events.on(g.attack,j.attackHandler,q(j)),j.on("destroy",function(){j.scene.game.events.removeListener(g.attack,j.attackHandler)}),j}var d=c.prototype;return d.preUpdate=function(){Phaser.Math.Distance.BetweenPoints({x:this.x,y:this.y},{x:this.target.x,y:this.target.y})<this.AGRESSOR_RADIUS?(this.getBody().setVelocityX(this.target.x-this.x),this.getBody().setVelocityY(this.target.y-this.y)):this.getBody().setVelocity(0)},d.setTarget=function(a){this.target=a},c}(v);function x(a,b,c){return(x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(a,b,c){var d=function(a,b){for(;!Object.prototype.hasOwnProperty.call(a,b);){var c;if(null===(a=p(c=a)))break}return a}(a,b);if(d){var e=Object.getOwnPropertyDescriptor(d,b);return e.get?e.get.call(c||a):e.value}})(a,b,c)}var y=function(a){o(c,a);var b=r(c);function c(a,d,e,f){var g;return m(this,c),(g=b.call(this,a,d,e,f,{fontSize:"calc(100vw / 25)",color:"#fff",stroke:"#000",strokeThickness:4})).setOrigin(0,0),a.add.existing(q(g)),g}return c}(l.GameObjects.Text),z=function(a){o(c,a);var b=r(c);function c(a,d,e){var f;return m(this,c),(f=b.call(this,a,d,e,"king")).keyW=f.scene.input.keyboard.addKey("W"),f.keyA=f.scene.input.keyboard.addKey("A"),f.keyS=f.scene.input.keyboard.addKey("S"),f.keyD=f.scene.input.keyboard.addKey("D"),f.keySpace=f.scene.input.keyboard.addKey(32),f.getBody().setSize(30,30),f.getBody().setOffset(8,0),f.hpValue=new y(f.scene,f.x,f.y-f.height,f.hp.toString()).setFontSize(12).setOrigin(.8,.5),f.initAnimations(),f.on("destroy",function(){f.keySpace.removeAllListeners()}),f}var d=c.prototype;return d.btnUpDownHandler=function(){window.dispatchEvent(new KeyboardEvent("keydown",{key:"w",keyCode:87,which:87}))},d.btnUpUpHandler=function(){window.dispatchEvent(new KeyboardEvent("keyup",{key:"w",keyCode:87,which:87}))},d.btnDownDownHandler=function(){window.dispatchEvent(new KeyboardEvent("keydown",{key:"s",keyCode:83,which:83}))},d.btnDownUpHandler=function(){window.dispatchEvent(new KeyboardEvent("keyup",{key:"s",keyCode:83,which:83}))},d.btnRightDownHandler=function(){window.dispatchEvent(new KeyboardEvent("keydown",{key:"d",keyCode:68,which:68}))},d.btnRightUpHandler=function(){window.dispatchEvent(new KeyboardEvent("keyup",{key:"d",keyCode:68,which:68}))},d.btnLeftDownHandler=function(){window.dispatchEvent(new KeyboardEvent("keydown",{key:"a",keyCode:65,which:65}))},d.btnLeftUpHandler=function(){window.dispatchEvent(new KeyboardEvent("keyup",{key:"a",keyCode:65,which:65}))},d.btnAttackHandler=function(){window.dispatchEvent(new KeyboardEvent("keydown",{key:" ",keyCode:32,which:32})),setTimeout(function(){window.dispatchEvent(new KeyboardEvent("keyup",{key:" ",keyCode:32,which:32}))},20)},d.initAnimations=function(){this.scene.anims.create({key:"run",frames:this.scene.anims.generateFrameNames("a-king",{prefix:"run-",end:7}),frameRate:8}),this.scene.anims.create({key:"attack",frames:this.scene.anims.generateFrameNames("a-king",{prefix:"attack-",end:2}),frameRate:8})},d.update=function(){var a,b,c,d,e;this.getBody().setVelocity(0),(null===(a=this.keyW)|| void 0===a?void 0:a.isDown)&&(this.body.velocity.y=-110,this.anims.isPlaying||this.anims.play("run",!0)),(null===(b=this.keyA)|| void 0===b?void 0:b.isDown)&&(this.body.velocity.x=-110,this.checkFlip(),this.getBody().setOffset(48,15),this.anims.isPlaying||this.anims.play("run",!0)),(null===(c=this.keyS)|| void 0===c?void 0:c.isDown)&&(this.body.velocity.y=110,this.anims.isPlaying||this.anims.play("run",!0)),(null===(d=this.keyD)|| void 0===d?void 0:d.isDown)&&(this.body.velocity.x=110,this.checkFlip(),this.getBody().setOffset(15,15),this.anims.isPlaying||this.anims.play("run",!0)),(null===(e=this.keySpace)|| void 0===e?void 0:e.isDown)&&(this.anims.play("attack",!0),this.scene.game.events.emit(g.attack)),this.hpValue.setPosition(this.x,this.y-.4*this.height),this.hpValue.setOrigin(.8,.5)},d.getDamage=function(a){var b,d,e,f;(d=p(b=c.prototype),e="getDamage",f=this,x(d,e,f)).call(this,a),this.hpValue.setText(this.hp.toString()),this.hp<=0&&this.scene.game.events.emit(g.gameEnd,h.LOSE)},c}(v),A=function(a){return a.map(function(a){return a})},B=function(a){o(c,a);var b=r(c);function c(){return m(this,c),b.call(this,"level-1-scene")}var d=c.prototype;return d.showDebugWalls=function(){var a=this.add.graphics().setAlpha(.7);this.wallsLayer.renderDebug(a,{tileColor:null,collidingTileColor:new Phaser.Display.Color(243,234,48,255)})},d.initListeners=function(){this.game.events.on(g.btnUpDown,this.player.btnUpDownHandler,this),this.game.events.on(g.btnUpUp,this.player.btnUpUpHandler,this),this.game.events.on(g.btnDownDown,this.player.btnDownDownHandler,this),this.game.events.on(g.btnDownUp,this.player.btnDownUpHandler,this),this.game.events.on(g.btnRightDown,this.player.btnRightDownHandler,this),this.game.events.on(g.btnRightUp,this.player.btnRightUpHandler,this),this.game.events.on(g.btnLeftDown,this.player.btnLeftDownHandler,this),this.game.events.on(g.btnLeftUp,this.player.btnLeftUpHandler,this),this.game.events.on(g.btnAttack,this.player.btnAttackHandler,this)},d.initMap=function(){this.map=this.make.tilemap({key:"dungeon",tileWidth:16,tileHeight:16}),this.tileset=this.map.addTilesetImage("dungeon","tiles"),this.groundLayer=this.map.createLayer("Ground",this.tileset,0,0),this.wallsLayer=this.map.createLayer("Walls",this.tileset,0,0),this.wallsLayer.setCollisionByProperty({collides:!0}),this.physics.world.setBounds(0,0,this.wallsLayer.width,this.wallsLayer.height),this.showDebugWalls()},d.initChests=function(){var a,b=this,c=A(null===(a=this.map)|| void 0===a?void 0:a.filterObjects("Chests",function(a){return"ChestPoint"===a.name}));this.chests=c.map(function(a){return b.physics.add.sprite(a.x,a.y,"tiles_spr",595).setScale(1.5)}),this.chests.forEach(function(a){b.physics.add.overlap(b.player,a,function(a,c){b.game.events.emit(g.chestLoot),c.destroy(),b.cameras.main.flash()})})},d.initCamera=function(){this.cameras.main.setSize(this.game.scale.width,this.game.scale.height),this.cameras.main.startFollow(this.player,!0,.09,.09),this.cameras.main.setZoom(3)},d.initEnemies=function(){var a=this,b=A(this.map.filterObjects("Enemies",function(a){return"EnemyPoint"===a.name}));this.enemies=b.map(function(b){return new w(a,b.x,b.y,"tiles_spr",a.player,503).setName(b.id.toString()).setScale(1.5)}),this.physics.add.collider(this.enemies,this.wallsLayer),this.physics.add.collider(this.enemies,this.enemies),this.physics.add.collider(this.player,this.enemies,function(a,b){a.getDamage(10)})},d.initPlayer=function(){this.player=new z(this,150,150),this.physics.add.collider(this.player,this.wallsLayer)},d.create=function(){this.initMap(),this.initPlayer(),this.initEnemies(),this.initChests(),this.initCamera(),this.initListeners()},d.update=function(){this.player.update()},c}(l.Scene);function C(a,b,c){return(C=!function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}()?function(a,b,c){var d,e,f=[null];f.push.apply(f,b);var g=new(Function.bind.apply(a,f));return c&&(d=g,n(d,e=c.prototype)),g}:Reflect.construct).apply(null,arguments)}function D(a){var b="function"==typeof Map?new Map:void 0;return(D=function(a){var c,d,e;if(null===a||(c=a,-1===Function.toString.call(c).indexOf("[native code]")))return a;if("function"!=typeof a)throw TypeError("Super expression must either be null or a function");if(void 0!==b){if(b.has(a))return b.get(a);b.set(a,f)}function f(){var b;return function(a,b,c){return C.apply(null,arguments)}(a,arguments,(b=this,p(b)).constructor)}return f.prototype=Object.create(a.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),d=f,n(d,e=a)})(a)}(d=i||(i={}))[d.INCREASE=0]="INCREASE",d[d.DECREASE=1]="DECREASE",d[d.SET_VALUE=2]="SET_VALUE";var E=function(a){o(c,a);var b=r(c);function c(a,d,e){var f,g=arguments.length>3&& void 0!==arguments[3]?arguments[3]:0;return m(this,c),f=b.call(this,a,d,e,"Score: ".concat(g)),a.add.existing(q(f)),f.scoreValue=g,f}var d=c.prototype;return d.changeValue=function(a,b){switch(a){case i.INCREASE:this.scoreValue+=b;break;case i.DECREASE:this.scoreValue-=b;break;case i.SET_VALUE:this.scoreValue=b}this.setText("Score: ".concat(this.scoreValue))},d.getValue=function(){return this.scoreValue},c}(D(e=y));let F=Object.keys;function G(a){return"string"==typeof a}function H(a){return"number"==typeof a}function I(a){return"object"==typeof a?null!==a:J(a)}function J(a){return"function"==typeof a}function K(a,b){if(a)for(let c of F(a))b(a[c],c)}let L={animationIterationCount:0,borderImageOutset:0,borderImageSlice:0,borderImageWidth:0,boxFlex:0,boxFlexGroup:0,boxOrdinalGroup:0,columnCount:0,columns:0,flex:0,flexGrow:0,flexPositive:0,flexShrink:0,flexNegative:0,flexOrder:0,gridArea:0,gridRow:0,gridRowEnd:0,gridRowSpan:0,gridRowStart:0,gridColumn:0,gridColumnEnd:0,gridColumnSpan:0,gridColumnStart:0,fontWeight:0,lineClamp:0,lineHeight:0,opacity:0,order:0,orphans:0,tabSize:0,widows:0,zIndex:0,zoom:0,fillOpacity:0,floodOpacity:0,stopOpacity:0,strokeDasharray:0,strokeDashoffset:0,strokeMiterlimit:0,strokeOpacity:0,strokeWidth:0},M=["Webkit","ms","Moz","O"];F(L).forEach(a=>{M.forEach(b=>{var c,d;L[c=b,c+(d=a).charAt(0).toUpperCase()+d.substring(1)]=0})});let N=Symbol.for("jsx-dom:type");function O(a){var b;return"boolean"!=typeof(b=a)&&null!=a}function P(a){return Array.isArray(a)?a.map(P).filter(Boolean).join(" "):I(a)?F(a).filter(b=>a[b]).join(" "):O(a)?""+a:""}(f=j||(j={})).ShadowRoot="ShadowRoot";let Q={animate:0,circle:0,clipPath:0,defs:0,desc:0,ellipse:0,feBlend:0,feColorMatrix:0,feComponentTransfer:0,feComposite:0,feConvolveMatrix:0,feDiffuseLighting:0,feDisplacementMap:0,feDistantLight:0,feFlood:0,feFuncA:0,feFuncB:0,feFuncG:0,feFuncR:0,feGaussianBlur:0,feImage:0,feMerge:0,feMergeNode:0,feMorphology:0,feOffset:0,fePointLight:0,feSpecularLighting:0,feSpotLight:0,feTile:0,feTurbulence:0,filter:0,foreignObject:0,g:0,image:0,line:0,linearGradient:0,marker:0,mask:0,metadata:0,path:0,pattern:0,polygon:0,polyline:0,radialGradient:0,rect:0,stop:0,svg:0,switch:0,symbol:0,text:0,textPath:0,tspan:0,use:0,view:0},R=/^(a(ll|t|u)|base[FP]|c(al|lipPathU|on)|di|ed|ex|filter[RU]|g(lyphR|r)|ke|l(en|im)|ma(rker[HUW]|s)|n|pat|pr|point[^e]|re[^n]|s[puy]|st[^or]|ta|textL|vi|xC|y|z)/;Object.defineProperties((class a{constructor(a){this.props=a}render(){return null}}).prototype,{isReactComponent:{value:!0}});function S(a,b){var c;I(c=a)&&"current"in c?a.current=b:J(a)&&a(b)}function T(a,b){var c,d,e;if(I(c=a)&&"number"==typeof c.length&&"number"!=typeof c.nodeType)U(a,b);else if(G(a)||H(a))V(document.createTextNode(a),b);else if(null===a)V(document.createComment(""),b);else if((d=a)&&"number"==typeof d.nodeType)V(a,b);else if(null!=(e=a)&&e[N]===j.ShadowRoot){let f=b.attachShadow(a.attr);T(a.children,f),S(a.ref,f)}}function U(a,b){for(let c of[...a])T(c,b);return b}function V(a,b){b instanceof window.HTMLTemplateElement?b.content.appendChild(a):b.appendChild(a)}function W(a,b){return a.replace(/[A-Z]/g,a=>b+a.toLowerCase())}function X(a,b){null==b|| !1===b||(Array.isArray(b)?b.forEach(b=>X(a,b)):G(b)?a.setAttribute("style",b):I(b)&&K(b,(b,c)=>{H(b)&&0!==L[c]?a.style[c]=b+"px":a.style[c]=b}))}function Y(a,b,c){switch(a){case"xlinkActuate":case"xlinkArcrole":case"xlinkHref":case"xlinkRole":case"xlinkShow":case"xlinkTitle":case"xlinkType":$(c,"http://www.w3.org/1999/xlink",W(a,":"),b);return;case"xmlnsXlink":Z(c,W(a,":"),b);return;case"xmlBase":case"xmlLang":case"xmlSpace":$(c,"http://www.w3.org/XML/1998/namespace",W(a,":"),b);return}switch(a){case"htmlFor":Z(c,"for",b);return;case"dataset":K(b,(a,b)=>{null!=a&&(c.dataset[b]=a)});return;case"innerHTML":case"innerText":case"textContent":O(b)&&(c[a]=b);return;case"dangerouslySetInnerHTML":I(b)&&(c.innerHTML=b["__html"]);return;case"value":if(null==b||c instanceof window.HTMLSelectElement)return;if(c instanceof window.HTMLTextAreaElement){c.value=b;return}break;case"spellCheck":c.spellcheck=b;return;case"class":case"className":J(b)?b(c):Z(c,"class",P(b));return;case"ref":case"namespaceURI":return;case"style":X(c,b);return}if(J(b)){if("o"===a[0]&&"n"===a[1]){let d=a.toLowerCase();null==c[d]?c[d]=b:c.addEventListener(a,b)}}else I(b)?c[a]=b:!0===b?Z(c,a,""):!1!==b&&null!=b&&(c instanceof SVGElement&&!R.test(a)?Z(c,W(a,"-"),b):Z(c,a,b))}function Z(a,b,c){a.setAttribute(b,c)}function $(a,b,c,d){a.setAttributeNS(b,c,d)}function _(a,b){for(let c of F(a))Y(c,a[c],b);return b}let aa=new Map,ab=a=>(b,...c)=>({style:d,...e})=>{let f=b.length-1,g=b.slice(0,f).reduce((a,b,d)=>a+b+c[d](e),"")+b[f];return function a(b,c,...d){return(G(c)||Array.isArray(c))&&(d.unshift(c),c={}),null==(c=c||{}).children||d.length||({children:d,...c}=c),function(a,{children:b,...c}){c.namespaceURI||0!==Q[a]||(c={...c,namespaceURI:"http://www.w3.org/2000/svg"});let d;if(G(a)){if(d=c.namespaceURI?document.createElementNS(c.namespaceURI,a):document.createElement(a),_(c,d),T(b,d),d instanceof window.HTMLSelectElement&&null!=c.value){if(!0===c.multiple&&Array.isArray(c.value)){let e=c.value.map(a=>String(a));d.querySelectorAll("option").forEach(a=>a.selected=e.includes(a.value))}else d.value=c.value}S(c.ref,d)}else if(J(a))I(a.defaultProps)&&(c={...a.defaultProps,...c}),d=!function(a){let{prototype:b}=a;return!!(b&&b.isReactComponent)}(a)?a({...c,children:b}):function(a,b,c){b={...b,children:c};let d=new a(b);return d.render()}(a,c,b);else throw TypeError(`Invalid JSX element type: ${a}`);return d}(b,{...c,children:d},c.key)}(a,{style:[g,d],...e})},ac=a=>ab(a);new Proxy(ac,{get(a,b){return function a(b,c,d){if(b.has(c))return b.get(c);{let e=d(c);return b.set(c,e),e}}(aa,b,()=>ab(b))}});var ad=function(a){var b=document.createElement("button");for(var c in a.style)b.style[c]=a.style[c];return b.innerText=a.text,b},ae=function(a){o(c,a);var b=r(c);function c(){var a;return m(this,c),(a=b.call(this,"ui-scene")).chestLootHandler=function(){a.score.changeValue(i.INCREASE,5),a.score.getValue()===ag.winScore&&a.game.events.emit(g.gameEnd,"win")},a.gameEndHandler=function(b){a.cameras.main.setBackgroundColor("rgba(0,0,0,0.6)"),a.game.scene.pause("level-1-scene"),a.gameEndPhrase=new y(a,a.game.scale.width/2,.4*a.game.scale.height,b===h.LOSE?"WASTED!\nTOUCH TO RESTART":"YOU ARE ROCK!\nTOUCH TO RESTART").setAlign("center").setColor(b===h.LOSE?"#ff0000":"#ffffff"),a.gameEndPhrase.setPosition(a.game.scale.width/2-a.gameEndPhrase.width/2,.4*a.game.scale.height),a.input.on("pointerdown",function(){a.game.events.off(g.chestLoot,a.chestLootHandler),a.game.events.off(g.gameEnd,a.gameEndHandler),a.scene.get("level-1-scene").scene.restart(),a.scene.restart()})},a}var d=c.prototype;return d.initListeners=function(){this.game.events.on(g.chestLoot,this.chestLootHandler,this),this.game.events.once(g.gameEnd,this.gameEndHandler,this)},d.initButton=function(){var a=this,b=ad({style:{width:"30px",height:"30px",color:"red",background:"url(assets/ui/up.png)",backgroundSize:"50% 50%",backgroundRepeat:"no-repeat",backgroundPosition:"center"},text:""}),c=ad({style:{width:"30px",height:"30px",color:"red",background:"url(assets/ui/down.png)",backgroundSize:"50% 50%",backgroundRepeat:"no-repeat",backgroundPosition:"center"},text:""}),d=ad({style:{width:"30px",height:"30px",color:"red",background:"url(assets/ui/right.png)",backgroundSize:"50% 50%",backgroundRepeat:"no-repeat",backgroundPosition:"center"},text:""}),e=ad({style:{width:"30px",height:"30px",color:"red",background:"url(assets/ui/left.png)",backgroundSize:"50% 50%",backgroundRepeat:"no-repeat",backgroundPosition:"center"},text:""}),f=ad({style:{width:"30px",height:"30px",color:"red",background:"url(assets/ui/attack.png)",backgroundSize:"50% 50%",backgroundRepeat:"no-repeat",backgroundPosition:"center"},text:""});this.btnUp=this.add.dom(100,window.innerHeight-150,b).addListener("touchstart"),this.btnUp.addListener("touchstart"),this.btnUp.addListener("touchend"),this.btnUp.on("touchstart",function(){a.game.events.emit(g.btnUpDown)}),this.btnUp.on("touchend",function(){a.game.events.emit(g.btnUpUp)}),this.btnDown=this.add.dom(100,window.innerHeight-50,c).addListener("touchstart"),this.btnDown.addListener("touchstart"),this.btnDown.addListener("touchend"),this.btnDown.on("touchstart",function(){a.game.events.emit(g.btnDownDown)}),this.btnDown.on("touchend",function(){a.game.events.emit(g.btnDownUp)}),this.btnRight=this.add.dom(150,window.innerHeight-100,d),this.btnRight.addListener("touchstart"),this.btnRight.addListener("touchend"),this.btnRight.on("touchstart",function(){a.game.events.emit(g.btnRightDown)}),this.btnRight.on("touchend",function(){a.game.events.emit(g.btnRightUp)}),this.btnLeft=this.add.dom(50,window.innerHeight-100,e),this.btnLeft.addListener("touchstart"),this.btnLeft.addListener("touchend"),this.btnLeft.on("touchstart",function(){a.game.events.emit(g.btnLeftDown)}),this.btnLeft.on("touchend",function(){a.game.events.emit(g.btnLeftUp)}),this.add.dom(window.innerWidth-50,window.innerHeight-50,f).addListener("touchstart").on("touchstart",function(){a.game.events.emit(g.btnAttack)})},d.create=function(){this.score=new E(this,20,20,0),this.initButton(),this.initListeners()},c}(l.Scene),af=function(a){o(c,a);var b=r(c);function c(){return m(this,c),b.call(this,"test-scene")}return c.prototype.create=function(){var a=ad({style:{width:"30px",height:"30px",color:"red"},text:"zero"});this.background=this.add.tileSprite(0,0,800,600,"background"),this.add.dom(300,400,a).addListener("click").on("click",function(){console.log("zero")})},c}(l.Scene),ag={winScore:40,dom:{createContainer:!0},title:"Zero First Game",type:Phaser.CANVAS,parent:"game",backgroundColor:"#351f1b",scale:{mode:Phaser.Scale.ScaleModes.NONE,width:window.innerWidth,height:window.innerHeight},physics:{default:"arcade",arcade:{debug:!1}},render:{antialiasGL:!1,pixelArt:!0},callbacks:{postBoot:function(){window.sizeChanged()}},canvasStyle:"display: block; width: 100%; height: 100%;",autoFocus:!0,audio:{disableWebAudio:!1},scene:[u,af,B,ae]};!function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:ag;window.sizeChanged=function(){window.game.isBooted&&setTimeout(function(){window.game.scale.resize(window.innerWidth,window.innerHeight),window.game.canvas.setAttribute("style","display: block; width: ".concat(window.innerWidth,"px; height: ").concat(window.innerHeight,"px;"))},100)};var b=new l.Game(a);return window.onresize=function(){return window.sizeChanged()},window.game=b,b}();var ah=function(a){var a=null!==a?a:function(a){throw a}(TypeError("Cannot destructure undefined"));return(0,k.jsx)(k.Fragment,{})},ai=ah}}])