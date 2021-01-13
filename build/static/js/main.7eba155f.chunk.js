(this["webpackJsonpswipe-labeler"]=this["webpackJsonpswipe-labeler"]||[]).push([[0],{104:function(e,t,i){},105:function(e,t,i){},141:function(e,t,i){"use strict";i.r(t);var n=i(1),c=i(0),s=i.n(c),a=i(6),o=i.n(a),l=(i(104),i(15)),r=i(16),u=i(8),h=i(19),j=i(18),p=(i(105),i.p+"static/media/moonlanding.816821ea.jpg"),d=i(23),b=i.n(d),k=i(145),m=(i(110),i(111),i(112),function(e){Object(h.a)(i,e);var t=Object(j.a)(i);function i(e){var n;return Object(l.a)(this,i),(n=t.call(this,e)).state={view:"tutorial",index:0,images:null,batch_size:null},n.fetchImages=n.fetchImages.bind(Object(u.a)(n)),n.sendSelection=n.sendSelection.bind(Object(u.a)(n)),n.onAcceptClick=n.onAcceptClick.bind(Object(u.a)(n)),n.onRejectClick=n.onRejectClick.bind(Object(u.a)(n)),n.endTutorial=n.endTutorial.bind(Object(u.a)(n)),n}return Object(r.a)(i,[{key:"componentDidUpdate",value:function(e,t){t.index!==this.state.index&&this.state.index===this.state.batch_size&&this.fetchImages()}},{key:"componentDidMount",value:function(){this.fetchImages()}},{key:"fetchImages",value:function(){var e=this;fetch("/images").then((function(e){return e.json()})).then((function(t){e.setState({images:t.images,batch_size:t.images.length})}))}},{key:"sendSelection",value:function(e){fetch("/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({image_url:this.state.images[this.state.index],value:e})})}},{key:"onAcceptClick",value:function(){this.sendSelection(1),this.setState({index:this.state.index+1})}},{key:"onRejectClick",value:function(){this.sendSelection(0),this.setState({index:this.state.index+1})}},{key:"endTutorial",value:function(){this.setState({view:"active"})}},{key:"render",value:function(){var e=null;return"tutorial"===this.state.view?e=Object(n.jsx)(O,{end:this.endTutorial}):"active"===this.state.view&&(e=this.state.images?Object(n.jsx)(v,{index:this.state.index,image:this.state.images[this.state.index],onAcceptClick:this.onAcceptClick,onRejectClick:this.onRejectClick}):Object(n.jsx)(k.a,{loading:!0})),Object(n.jsx)("div",{className:"App",children:e})}}]),i}(s.a.Component)),v=function(e){Object(h.a)(i,e);var t=Object(j.a)(i);function i(e){var n;return Object(l.a)(this,i),(n=t.call(this,e)).onSwipe=function(e){"right"===e?n.props.onAcceptClick():"left"===e&&n.props.onRejectClick()},n.onKeyPress=function(e){"ArrowRight"===e.key?n.props.onAcceptClick():"ArrowLeft"===e.key&&n.props.onRejectClick()},n.state={},n.onSwipe=n.onSwipe.bind(Object(u.a)(n)),n.onKeyPress=n.onKeyPress.bind(Object(u.a)(n)),n}return Object(r.a)(i,[{key:"componentWillMount",value:function(){document.addEventListener("keyup",this.onKeyPress,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.onKeyPress)}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"SwipeScreen",children:Object(n.jsxs)("div",{className:"Question",children:[Object(n.jsx)("div",{className:"Image_wrapper",children:Object(n.jsx)(b.a,{onSwipe:this.onSwipe,preventSwipe:["right","left"],children:Object(n.jsx)("img",{src:this.props.image,alt:""})})}),Object(n.jsx)(k.a,{icon:"small-cross",className:"AcceptRejectButton",intent:"primary",onClick:this.props.onRejectClick,children:"Reject"}),Object(n.jsx)(k.a,{icon:"tick",className:"AcceptRejectButton",intent:"success",onClick:this.props.onAcceptClick,children:"Accept"})]})})}}]),i}(s.a.Component),O=function(e){Object(h.a)(i,e);var t=Object(j.a)(i);function i(e){var n;return Object(l.a)(this,i),(n=t.call(this,e)).state={prevLabel:null,tutorialIndex:0,acceptMessages:["Great! You believe in science."],rejectMessages:["Oh! I see you're a conspiracy theorist."]},n.onTutorialAcceptClick=n.onTutorialAcceptClick.bind(Object(u.a)(n)),n.onTutorialRejectClick=n.onTutorialRejectClick.bind(Object(u.a)(n)),n.onTutorialSwipe=n.onTutorialSwipe.bind(Object(u.a)(n)),n}return Object(r.a)(i,[{key:"onTutorialAcceptClick",value:function(){alert(this.state.acceptMessages[this.state.tutorialIndex]),this.setState({prevLabel:"accept",tutorialIndex:this.state.tutorialIndex+1})}},{key:"onTutorialRejectClick",value:function(){this.setState({prevLabel:"reject",tutorialIndex:this.state.tutorialIndex+1})}},{key:"onTutorialSwipe",value:function(e){"right"===e?this.onTutorialAcceptClick():"left"===e&&this.onTutorialRejectClick()}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"TutorialScreen",children:Object(n.jsxs)("div",{className:"Question",children:[Object(n.jsx)("div",{className:"Image_wrapper",children:Object(n.jsx)(b.a,{onSwipe:this.onTutorialSwipe,preventSwipe:["right","left"],children:Object(n.jsx)("img",{src:p,alt:""})})}),Object(n.jsx)(k.a,{icon:"small-cross",className:"AcceptRejectButton",intent:"primary",onClick:this.onTutorialRejectClick,children:"Reject"}),Object(n.jsx)(k.a,{icon:"tick",className:"AcceptRejectButton",intent:"success",onClick:this.onTutorialAcceptClick,children:"Accept"})]})})}}]),i}(s.a.Component),f=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,146)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;i(e),n(e),c(e),s(e),a(e)}))};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root")),f()}},[[141,1,2]]]);
//# sourceMappingURL=main.7eba155f.chunk.js.map