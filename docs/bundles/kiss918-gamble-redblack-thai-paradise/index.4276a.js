window.__require=function e(t,a,i){function n(l,o){if(!a[l]){if(!t[l]){var r=l.split("/"),c=r,d=l;if(c=c[c.length-1],r.length>1&&(window.cachePath[c]=l),!t[c]){var u="function"==typeof __require&&__require;if(!o&&u)return u(c,!0);if(s)return s(c,!0);if("object"==typeof __quick_compile_project__&&__quick_compile_project__){var h=window.cachePath[c];h&&(d=h);for(var p=d.split("/"),g="",f=p.length;f>0;)p[f]&&".."!=p[f]&&(g="/"+p[f]+g),f--;return c="./assets"+g,__quick_compile_project__.require(c,"preview-scripts/__qc_index__.js")}throw new Error("Cannot find module '"+l+"'")}l=c}var m=a[l]={exports:{}};t[l][0].call(m.exports,function(e){return n(t[l][1][e]||e)},m,m.exports,e,t,a,i)}return a[l].exports}window.cachePath={};for(var s="function"==typeof __require&&__require,l=0;l<i.length;l++)n(i[l]);return n}({Kiss918RedBlackPanelEnum_TP:[function(e,t,a){"use strict";cc._RF.push(t,"8d703i14/RNIZ80x37YBql9","Kiss918RedBlackPanelEnum_TP"),Object.defineProperty(a,"__esModule",{value:!0}),a.Kiss918Choices_TP=void 0,function(e){e[e.Red=1]="Red",e[e.Black=2]="Black"}(a.Kiss918Choices_TP||(a.Kiss918Choices_TP={})),cc._RF.pop()},{}],Kiss918RedBlackPanelEvent_TP:[function(e,t){"use strict";cc._RF.push(t,"c899eKt6N5O8KBiuWUl08Qh","Kiss918RedBlackPanelEvent_TP"),cc._RF.pop()},{}],Kiss918RedBlackPanelModel_TP:[function(e,t,a){"use strict";cc._RF.push(t,"ae2e2g7yHBCZrFfUwDYVVz1","Kiss918RedBlackPanelModel_TP"),Object.defineProperty(a,"__esModule",{value:!0}),a.Kiss918RedBlackPanelModel_TP=void 0,a.Kiss918RedBlackPanelModel_TP=class{constructor(){this.redBlackActive=!1,this.redBlackResult=null,this.lastCardResults=[]}},cc._RF.pop()},{}],Kiss918RedBlackPanelModule_TP:[function(e,t,a){"use strict";cc._RF.push(t,"f03e0fqRUxAYqfIP7cGyHhk","Kiss918RedBlackPanelModule_TP");var i=this&&this.__awaiter||function(e,t,a,i){return new(a||(a=Promise))(function(n,s){function l(e){try{r(i.next(e))}catch(t){s(t)}}function o(e){try{r(i.throw(e))}catch(t){s(t)}}function r(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a(function(e){e(t)})).then(l,o)}r((i=i.apply(e,t||[])).next())})};Object.defineProperty(a,"__esModule",{value:!0});const n=e("../../../../../../scripts/HelperTools"),s=e("./Kiss918RedBlackPanelEnum_TP"),l=e("./Kiss918RedBlackPanelModel_TP");class o extends cc.Component{static init(){this.data=new l.Kiss918RedBlackPanelModel_TP}static getRedBlackPanelStatus(){return this.data.redBlackActive}static setRedBlackPanelStatus(e){this.data.redBlackActive=e}static setRedBlackResult(e){this.data.redBlackResult=e}static getLastCardsResults(){return this.data.lastCardResults}static clearRedBlackResult(){this.data.redBlackResult=null,this.data.lastCardResults=[]}static getRedBlackResult(e,t){return i(this,void 0,void 0,function*(){return new Promise(a=>{const i=n.GetRandomInterger(1,52),l=i<=26?s.Kiss918Choices_TP.Black:s.Kiss918Choices_TP.Red;let o=0;e===l&&(o=2*t);const r={cardResult:i,winAmount:o/2,playerBalance:o};this.setRedBlackResult(r),this.addLastCardResult(r.cardResult),a(r)})})}static addLastCardResult(e){this.data.lastCardResults.length>=7&&this.data.lastCardResults.shift(),this.data.lastCardResults.push(e)}}a.default=o,o.data=null,cc._RF.pop()},{"../../../../../../scripts/HelperTools":void 0,"./Kiss918RedBlackPanelEnum_TP":"Kiss918RedBlackPanelEnum_TP","./Kiss918RedBlackPanelModel_TP":"Kiss918RedBlackPanelModel_TP"}],Kiss918RedBlackPanelPrefab_TP:[function(e,t,a){"use strict";cc._RF.push(t,"c2c6eLCXDRPwYttgSlU60lY","Kiss918RedBlackPanelPrefab_TP");var i=this&&this.__decorate||function(e,t,a,i){var n,s=arguments.length,l=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,i);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(l=(s<3?n(l):s>3?n(t,a,l):n(t,a))||l);return s>3&&l&&Object.defineProperty(t,a,l),l},n=this&&this.__awaiter||function(e,t,a,i){return new(a||(a=Promise))(function(n,s){function l(e){try{r(i.next(e))}catch(t){s(t)}}function o(e){try{r(i.throw(e))}catch(t){s(t)}}function r(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a(function(e){e(t)})).then(l,o)}r((i=i.apply(e,t||[])).next())})},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const l=e("../../../../../../scripts/framework/gg"),o=e("../../../../../../scripts/HelperTools"),r=s(e("../../../../../../scripts/manager/AudioManager")),c=e("../../../../../../scripts/manager/CreditCoinConvertorManager"),d=s(e("../../../../../../scripts/manager/GameSystemManager")),u=e("../../../../standardized/gamble-button/scripts/GambleButtonEvent"),h=e("./Kiss918RedBlackPanelEnum_TP"),p=s(e("./Kiss918RedBlackPanelModule_TP")),{ccclass:g,property:f}=cc._decorator;let m=class extends cc.Component{constructor(){super(...arguments),this.redBlackGroup=null,this.btnCollect=null,this.btnRed=null,this.btnBlack=null,this.labelChooseRedOrBlack=null,this.labelYouWin=null,this.labelDealerWin=null,this.labelBank=null,this.labelDoubleTo=null,this.labelWinAmount=null,this.currentResult=null,this.lastResults=null,this.cardAtlas=null,this.hasLocalise=!0,this.mainSpriteAtlas=null,this.playerInfoManager={factorValue:0,played:!1},this.betInfoManager={win:0,bet:0,double:0},this.audioInfo={genClick:"Sfx_ButtonClicks",bgm:"Gamble_BGM",cardAnim:"",pick:"",win:"Gamble_WIN",lose:"Gamble_LOSE"}}onLoad(){this.registerEvent(),this.setupProperty()}start(){return n(this,void 0,void 0,function*(){this.setupRedBlackModule(),yield this.loadRedBlackAssets()})}activeGamblePanel(){this.clearUpPreviousPresentation(),p.default.setRedBlackPanelStatus(!0),this.redBlackGroup.active=!0,this.playAudio(this.audioInfo.bgm,!0),this.resetBettingUI(),this.HandleTargetNode(this.btnCollect,!0),this.updateLastCardsResult(),this.handleButtonsInteraction(!0)}inActiveRedBlackPanel(){this.stopCardResultAnimation(),this.handleButtonsInteraction(!1),this.stopAudio(this.audioInfo.bgm),l.gg.eventManager.emit(u.GamblePanelEvent.Complete,this.finalWinAmount),p.default.setRedBlackPanelStatus(!1),this.redBlackGroup.active=!1}pickedRed(){return n(this,void 0,void 0,function*(){this.playAudio(this.audioInfo.pick?this.audioInfo.pick:this.audioInfo.genClick),this.handleButtonsInteraction(!1),this.HandleTargetNode(this.btnCollect,!1);const e=yield this.getRedBlackResult(h.Kiss918Choices_TP.Red);this.showResult(e)})}pickedBlack(){return n(this,void 0,void 0,function*(){this.playAudio(this.audioInfo.pick?this.audioInfo.pick:this.audioInfo.genClick),this.handleButtonsInteraction(!1),this.HandleTargetNode(this.btnCollect,!1);const e=yield this.getRedBlackResult(h.Kiss918Choices_TP.Black);this.showResult(e)})}collectMoney(){this.playAudio(this.audioInfo.genClick),this.inActiveRedBlackPanel()}showResult(e){return n(this,void 0,void 0,function*(){const t=e.winAmount>0;this.updatePlayerInfoManager(e.winAmount),t&&this.updateBetInfoManager(e.winAmount,2*e.winAmount),this.updateBettingLabelResult(e),this.updateCurrentCardsResult(e.cardResult),this.updateLastCardsResult(),yield o.Delay(2),this.resetBettingUI(),t?(this.HandleTargetNode(this.btnCollect,!0),this.handleButtonsInteraction(!0)):(this.stopCardResultAnimation(),this.inActiveRedBlackPanel())})}getRedBlackResult(e){return p.default.getRedBlackResult(e,this.betAmount)}clearUpPreviousPresentation(){l.gg.eventManager.emit("HUDPrefab.onWiningLineAndSymbolClear"),r.default.getInstance().stopAll(),this.playAudio(this.audioInfo.genClick)}get factorValue(){return this.playerInfoManager.factorValue}get finalWinAmount(){let e=0;return e=this.playerInfoManager.played?this.betAmount*this.factorValue:0,console.warn("Gamble return: ",e),e}updatePlayerInfoManager(e){this.playerInfoManager.played=!0,this.playerInfoManager.factorValue=e>0?1:-1}resetPlayerInfoManager(){this.playerInfoManager={factorValue:1,played:!1}}get betWinAmount(){return this.betInfoManager.win}get betAmount(){return this.betInfoManager.bet}get doubleBetAmount(){return this.betInfoManager.double}updateBetInfoManager(e,t){this.betInfoManager.win+=e,this.betInfoManager.bet=t,this.betInfoManager.double=2*t}resetBetInfoManager(){this.betInfoManager={win:0,bet:0,double:0}}onReceiveWinAmountUpdateEvent(e){if(console.warn("Gamble receive: ",e),this.resetPlayerInfoManager(),this.resetBetInfoManager(),-1===e){const e=5;this.updateBetInfoManager(0,e)}else this.updateBetInfoManager(0,e)}hideGambleButton(){l.gg.eventManager.emit(u.GambleButtonEvent.Hide)}updateBettingLabelResult(e){e.winAmount>0?(this.updateBettingInfomation(),this.HandleTargetNode(this.labelChooseRedOrBlack,!0),this.HandleTargetNode(this.labelYouWin,!0),this.HandleTargetNode(this.labelDealerWin,!1),this.HandleTargetNode(this.labelWinAmount,!0),this.playAudio(this.audioInfo.win)):(this.HandleTargetNode(this.labelChooseRedOrBlack,!0),this.HandleTargetNode(this.labelYouWin,!1),this.HandleTargetNode(this.labelDealerWin,!0),this.HandleTargetNode(this.labelWinAmount,!1),this.playAudio(this.audioInfo.lose))}updateBettingInfomation(){this.labelWinAmount.string=c.CCConvertor(this.betWinAmount.toFixed(2)),this.labelBank.string=c.CCConvertor(this.betAmount.toFixed(2)),this.labelDoubleTo.string=c.CCConvertor(this.doubleBetAmount.toFixed(2))}resetBettingUI(){this.HandleTargetNode(this.labelChooseRedOrBlack,!0),this.HandleTargetNode(this.labelYouWin,!1),this.HandleTargetNode(this.labelDealerWin,!1),this.HandleTargetNode(this.labelWinAmount,!1),this.updateBettingInfomation(),this.playCardResultAnimation()}handleButtonsInteraction(e){this.btnRed.interactable=e,this.btnRed.enabled=e,this.btnBlack.interactable=e,this.btnBlack.enabled=e,this.btnCollect.interactable=e,this.btnCollect.enabled=e}HandleTargetNode(e,t){e&&(e.node.active=t)}updateLastCardsResult(){const e=p.default.getLastCardsResults();for(let t=0,a=e.length;t<a;t++){const a=this.lastResults.children[t],i=e[t],n=this.getCardSpriteFrame(i);a.active=!0,a.getComponent(cc.Sprite).spriteFrame=n.smallCard}}updateCurrentCardsResult(e){this.stopCardResultAnimation();const t=this.getCardSpriteFrame(e);this.currentResult.spriteFrame=t.bigCard}getCardSpriteFrame(e){return{smallCard:this.cardAtlas.getSpriteFrame("Small_"+o.Pad(e,2)),bigCard:this.cardAtlas.getSpriteFrame("Big_"+o.Pad(e,2))}}playCardResultAnimation(){this.currentResult.getComponent(cc.Animation).play(),this.playAudio(this.audioInfo.cardAnim,!0)}stopCardResultAnimation(){this.currentResult.getComponent(cc.Animation).stop(),this.stopAudio(this.audioInfo.cardAnim)}playAudio(e,t=!1){e&&r.default.getInstance().play(e,t)}stopAudio(e){e&&r.default.getInstance().stop(e)}registerEvent(){l.gg.eventManager.on("HUDPrefab.onWiningLineAndSymbolClear",this.hideGambleButton,this),l.gg.eventManager.on("SlotEnginePrefab.OnSpinStarted",this.hideGambleButton,this),l.gg.eventManager.on("SlotEnginePrefab.OnSpinStartedByReel",this.hideGambleButton,this),l.gg.eventManager.on(u.GamblePanelEvent.UpdateStartingAmount,this.onReceiveWinAmountUpdateEvent,this),l.gg.eventManager.on(u.GamblePanelEvent.Start,this.activeGamblePanel,this)}setupRedBlackModule(){p.default.init()}setupProperty(){this.registerButtonCallback(this.btnRed,()=>{this.pickedRed()}),this.registerButtonCallback(this.btnBlack,()=>{this.pickedBlack()}),this.registerButtonCallback(this.btnCollect,()=>{this.collectMoney()})}registerButtonCallback(e,t){e.node.on("click",t)}changeSpriteFrame(e,t){const a=this.mainSpriteAtlas.getSpriteFrame(t);e&&a&&(e.spriteFrame=a)}changeButtonSprite(e,t){e&&o.UItools.ChangeButtonSpriteFrame(e,this.mainSpriteAtlas,{normalSprite:t+"_01",pressedSprite:t+"_02",disabledSprite:t+"_03"})}getAllAudioPath(){const e=[];return this.audioInfo.bgm&&e.push("common/sounds/"+this.audioInfo.bgm),this.audioInfo.pick&&e.push("common/sounds/"+this.audioInfo.pick),this.audioInfo.cardAnim&&e.push("common/sounds/"+this.audioInfo.cardAnim),this.audioInfo.win&&e.push("common/sounds/"+this.audioInfo.win),this.audioInfo.lose&&e.push("common/sounds/"+this.audioInfo.lose),e}loadRedBlackAssets(){return n(this,void 0,void 0,function*(){return new Promise(e=>{cc.assetManager.loadBundle("kiss918-gamble-redblack-thai-paradise",(t,a)=>{if(t)return console.error(t);const i=d.default.getInstance().getLanguageCode(),s=o.AsyncTask(e=>n(this,void 0,void 0,function*(){if(this.hasLocalise){const e="textures/"+i+"/GambleUI";a.load(e,cc.SpriteAtlas,(e,t)=>{e&&console.error(e),this.mainSpriteAtlas=t,this.changeButtonSprite(this.btnRed,"Red"),this.changeButtonSprite(this.btnBlack,"Black"),this.changeButtonSprite(this.btnCollect,"Collect");const a=this.redBlackGroup.getChildByName("Backgroud").getComponent(cc.Sprite);this.changeSpriteFrame(a,"GambleBG"),this.changeSpriteFrame(this.labelDealerWin,"DealerWin"),this.changeSpriteFrame(this.labelYouWin,"Youwin")})}a.load(this.getAllAudioPath(),cc.AudioClip,(e,t)=>{e&&console.error(e);for(const a of t)r.default.getInstance().add(a.name,a)}),e()}));Promise.all([s]).then(()=>{e()})})})})}};i([f(cc.Node)],m.prototype,"redBlackGroup",void 0),i([f(cc.Button)],m.prototype,"btnCollect",void 0),i([f(cc.Button)],m.prototype,"btnRed",void 0),i([f(cc.Button)],m.prototype,"btnBlack",void 0),i([f(cc.Sprite)],m.prototype,"labelChooseRedOrBlack",void 0),i([f(cc.Sprite)],m.prototype,"labelYouWin",void 0),i([f(cc.Sprite)],m.prototype,"labelDealerWin",void 0),i([f(cc.Label)],m.prototype,"labelBank",void 0),i([f(cc.Label)],m.prototype,"labelDoubleTo",void 0),i([f(cc.Label)],m.prototype,"labelWinAmount",void 0),i([f(cc.Sprite)],m.prototype,"currentResult",void 0),i([f(cc.Node)],m.prototype,"lastResults",void 0),i([f(cc.SpriteAtlas)],m.prototype,"cardAtlas",void 0),i([f()],m.prototype,"hasLocalise",void 0),m=i([g],m),a.default=m,cc._RF.pop()},{"../../../../../../scripts/HelperTools":void 0,"../../../../../../scripts/framework/gg":void 0,"../../../../../../scripts/manager/AudioManager":void 0,"../../../../../../scripts/manager/CreditCoinConvertorManager":void 0,"../../../../../../scripts/manager/GameSystemManager":void 0,"../../../../standardized/gamble-button/scripts/GambleButtonEvent":void 0,"./Kiss918RedBlackPanelEnum_TP":"Kiss918RedBlackPanelEnum_TP","./Kiss918RedBlackPanelModule_TP":"Kiss918RedBlackPanelModule_TP"}]},{},["Kiss918RedBlackPanelEnum_TP","Kiss918RedBlackPanelEvent_TP","Kiss918RedBlackPanelModel_TP","Kiss918RedBlackPanelModule_TP","Kiss918RedBlackPanelPrefab_TP"]);