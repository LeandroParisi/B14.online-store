(this["webpackJsonpsd-0x-block15-project-frontend-online-store"]=this["webpackJsonpsd-0x-block15-project-frontend-online-store"]||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/addCart.bba0d047.svg"},27:function(e,t,a){e.exports=a(44)},32:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),i=a.n(c),s=(a(32),a(11)),l=a(13),o=a(1),u=a(2),d=a(5),m=a(4),h=a(3),p=a(12),v=a(6),b=(a(33),a(14)),f=a.n(b),g=a(17),y=a(18),j=a.n(y);a(35);function O(){return fetch("https://api.mercadolibre.com/sites/MLB/categories").then((function(e){return e.json()}))}function C(e,t){var a="https://api.mercadolibre.com/sites/MLB/search?category=".concat(e,"&q=").concat(t);return fetch(a).then((function(e){return e.json()}))}var E=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleclick=e.handleclick.bind(Object(d.a)(e)),e}return Object(u.a)(a,[{key:"handleclick",value:function(){var e=this.props,t=e.item.title;(0,e.addTocart)(t)}},{key:"render",value:function(){var e=this.props,t=e.item,a=t.id,n=t.title,c=t.thumbnail,i=t.price,s=e.query,l=e.addTocart,o=e.freeShipping;return r.a.createElement("div",{"data-testid":"product"},r.a.createElement("h2",null,n),r.a.createElement("img",{src:c,alt:"thumbnail"}),o?r.a.createElement("div",{"data-testid":"free-shipping"},"Frete Gr\xe1tis "):r.a.createElement("div",null),r.a.createElement("span",null,i),r.a.createElement("div",null,r.a.createElement(p.b,{"data-testid":"product-detail-link",to:{pathname:"/card/".concat(a),state:{data:s},teste:{addtoCart:l},shipping:{shipping:o}}},"Detalhes")),r.a.createElement("button",{type:"button","data-testid":"product-add-to-cart",onClick:this.handleclick},"Adicionar ao carrinho"))}}]),a}(n.Component),k=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.fetchSearchedItem;return r.a.createElement("div",null,r.a.createElement("button",{"data-testid":"query-button",type:"button",onClick:e},"Search"))}}]),a}(r.a.Component),S=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.onSearchTextChange;return r.a.createElement("div",{className:"search-container"},r.a.createElement("input",{name:"searchInput",className:"search-input",type:"text","data-testid":"query-input",onChange:e}))}}]),a}(r.a.Component),I=(a(41),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleClick=e.handleClick.bind(Object(d.a)(e)),e.state={apiCategories:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;O().then((function(t){return e.setState({apiCategories:t})}))}},{key:"handleClick",value:function(e){var t=e.target;(0,this.props.saveSelectedCategory)(t.id)}},{key:"render",value:function(){var e=this,t=this.state.apiCategories;return r.a.createElement("aside",{className:"side-bar"},r.a.createElement("h3",null,"Categories:"),t.map((function(t){return r.a.createElement("div",{key:t.id,className:"category-container"},r.a.createElement("input",{type:"radio",name:"categories",id:t.id,onClick:e.handleClick,"data-testid":"category"}),r.a.createElement("label",{htmlFor:t.id},t.name))})))}}]),a}(r.a.Component)),N=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).fetchSearchedItem=e.fetchSearchedItem.bind(Object(d.a)(e)),e.onSearchTextChange=e.onSearchTextChange.bind(Object(d.a)(e)),e.saveSelectedCategory=e.saveSelectedCategory.bind(Object(d.a)(e)),e.state={searchInput:"",spanMessage:"Digite algum termo de pesquisa ou escolha uma categoria.",searchedItems:void 0,selectedCategory:""},e}return Object(u.a)(a,[{key:"onSearchTextChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(s.a)({},a,n))}},{key:"saveSelectedCategory",value:function(e){var t=this;this.setState({selectedCategory:e},(function(){t.fetchSearchedItem()}))}},{key:"fetchSearchedItem",value:function(){var e=Object(g.a)(f.a.mark((function e(){var t,a,n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,a=t.searchInput,n=t.selectedCategory,e.next=3,C(n,a);case 3:r=e.sent,console.log(r),r.results.length>=1?this.setState({searchedItems:r.results,spanMessage:""}):this.setState({searchedItems:void 0,spanMessage:"Nenhum produto foi encontrado"});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.searchedItems,a=e.spanMessage,n=e.searchInput,c=this.props.addToCart;return r.a.createElement("div",{className:"home-page"},r.a.createElement(I,{saveSelectedCategory:this.saveSelectedCategory}),r.a.createElement("div",{className:"items-display"},r.a.createElement(S,{onSearchTextChange:this.onSearchTextChange}),r.a.createElement(k,{fetchSearchedItem:this.fetchSearchedItem}),void 0===t?r.a.createElement("span",{"data-testid":"home-initial-message"},a):t.map((function(e){return r.a.createElement(E,{addTocart:c,key:e.id,item:e,query:n,freeShipping:e.shipping.free_shipping})}))),r.a.createElement("div",null,r.a.createElement(p.b,{"data-testid":"shopping-cart-button",to:{pathname:"/cart"}},r.a.createElement("img",{src:j.a,alt:"button car shopping"}))))}}]),a}(n.Component),M=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{"data-testid":"404-error"},"P\xe1gina n\xe3o encontrada")}}]),a}(n.Component),x=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleClick=e.handleClick.bind(Object(d.a)(e)),e}return Object(u.a)(a,[{key:"handleClick",value:function(e){var t=e.target,a=this.props,n=a.title;(0,a.changeQuantity)(t.name,n)}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.quantity;return r.a.createElement("div",null,r.a.createElement("p",{"data-testid":"shopping-cart-product-name"},t),r.a.createElement("p",{"data-testid":"shopping-cart-product-quantity"},a),r.a.createElement("button",{name:"decrease","data-testid":"product-decrease-quantity",type:"button",onClick:this.handleClick},"-"),r.a.createElement("button",{name:"increase","data-testid":"product-increase-quantity",type:"button",onClick:this.handleClick},"+"))}}]),a}(n.Component),T=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;Object(o.a)(this,a),n=t.call(this);var r=e.productsAddToCart;return n.changeQuantity=n.changeQuantity.bind(Object(d.a)(n)),n.changeState=n.changeState.bind(Object(d.a)(n)),n.state={loadMessage:!0,cartItems:r},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.changeState()}},{key:"changeState",value:function(){var e=this.props.productsAddToCart;Object.keys(e).length>=1&&this.setState({loadMessage:!1})}},{key:"changeQuantity",value:function(e,t){"increase"===e?this.setState((function(e){return{cartItems:Object(l.a)(Object(l.a)({},e.cartItems),{},Object(s.a)({},t,e.cartItems[t]+1))}})):this.setState((function(e){return{cartItems:Object(l.a)(Object(l.a)({},e.cartItems),{},Object(s.a)({},t,0===e.cartItems[t]?0:e.cartItems[t]-1))}}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.loadMessage,n=t.cartItems,c=Object.entries(n);return r.a.createElement("div",null,!0===a?r.a.createElement("span",{"data-testid":"shopping-cart-empty-message"},"Seu carrinho est\xe1 vazio"):c.map((function(t){return r.a.createElement(x,{key:t[0],title:t[0],quantity:t[1],changeQuantity:e.changeQuantity})})),r.a.createElement("div",null,r.a.createElement(p.b,{to:"/"},"Voltar para home")))}}]),a}(r.a.Component),w=a(26),B=(a(42),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleStarClick=e.handleStarClick.bind(Object(d.a)(e)),e}return Object(u.a)(a,[{key:"handleStarClick",value:function(e){for(var t,a=e.target,n=this.props.saveRating,r=a.id-1,c=document.getElementsByClassName("fa-star"),i=t=0;i<5;i+=1)c[i].className="fa fa-star";for(;t<=r&&"fa fa-star"===a.className;){c[t].className="fa fa-star checked",t+=1}n(a.id)}},{key:"render",value:function(){return r.a.createElement("section",{className:"star-rating"},r.a.createElement("div",{className:"fa fa-star",onClick:this.handleStarClick,id:"1",onKeyDown:this.handleStarClick,role:"button","aria-label":"Mute volume",tabIndex:"0"}),r.a.createElement("div",{className:"fa fa-star",onClick:this.handleStarClick,id:"2",onKeyDown:this.handleStarClick,role:"button","aria-label":"Mute volume",tabIndex:"0"}),r.a.createElement("div",{className:"fa fa-star",onClick:this.handleStarClick,id:"3",onKeyDown:this.handleStarClick,role:"button","aria-label":"Mute volume",tabIndex:"0"}),r.a.createElement("div",{className:"fa fa-star",onClick:this.handleStarClick,id:"4",onKeyDown:this.handleStarClick,role:"button","aria-label":"Mute volume",tabIndex:"0"}),r.a.createElement("div",{className:"fa fa-star",onClick:this.handleStarClick,id:"5",onKeyDown:this.handleStarClick,role:"button","aria-label":"Mute volume",tabIndex:"0"}))}}]),a}(r.a.Component)),D=(a(43),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){for(var e=this.props.rating,t=[],a=0;a<e;a+=1)console.log(t);return r.a.createElement("section",{className:"star-rating"},r.a.createElement("div",{className:"fa fa-star"}),r.a.createElement("div",{className:"fa fa-star"}),r.a.createElement("div",{className:"fa fa-star"}),r.a.createElement("div",{className:"fa fa-star"}),r.a.createElement("div",{className:"fa fa-star"}))}}]),a}(r.a.Component)),q=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.email,a=e.message,n=e.rating;return r.a.createElement("section",{className:"rating-history"},r.a.createElement("div",{className:"rating-column"},r.a.createElement("p",null,t),r.a.createElement(D,{rating:n})),r.a.createElement("div",{className:"rating-column"},a))}}]),a}(r.a.Component),A=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).saveRating=e.saveRating.bind(Object(d.a)(e)),e.handleInputChange=e.handleInputChange.bind(Object(d.a)(e)),e.handleSubmitButton=e.handleSubmitButton.bind(Object(d.a)(e)),e.handlestoreMessagesubmitButton=e.storeMessages.bind(Object(d.a)(e)),e.state={email:"",message:"",rating:0,storedMessages:[],messageDisplayStyle:"none"},e}return Object(u.a)(a,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.id;this.setState(Object(s.a)({},a,t.value))}},{key:"storeMessages",value:function(){var e=this.state.storedMessages,t=JSON.stringify(e);localStorage.setItem("previousReviews",t)}},{key:"handleSubmitButton",value:function(){var e=this,t=this.state,a=t.email,n=t.message,r=t.rating;this.setState((function(e){return{email:"",message:"",rating:0,storedMessages:[].concat(Object(w.a)(e.storedMessages),[{email:a,message:n,rating:r}]),messageDisplayStyle:"inherit"}}),(function(){e.storeMessages()}))}},{key:"saveRating",value:function(e){this.setState({rating:e})}},{key:"render",value:function(){var e=this;setTimeout((function(){e.setState({messageDisplayStyle:"none"})}),5e3);var t=this.state,a=t.rating,n=t.message,c=t.email,i=t.messageDisplayStyle,s=[];if(null!==localStorage.getItem("previousReviews")){var l=localStorage.getItem("previousReviews");s=JSON.parse(l),console.log(s)}return r.a.createElement("section",null,r.a.createElement("form",null,r.a.createElement("h3",null,"Avalia\xe7\xf5es"),r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Avalie!"),r.a.createElement("section",{className:"form-input-section"},r.a.createElement("div",{className:"email-and-stars"},r.a.createElement("input",{id:"email",type:"text",placeholder:"E-mail",className:"form-inputs",onChange:this.handleInputChange,value:c}),r.a.createElement(B,{saveRating:this.saveRating,rateGiven:a})),r.a.createElement("textarea",{id:"message",placeholder:"Mensagem (opcional)",onChange:this.handleInputChange,value:n,"data-testid":"product-detail-evaluation"}),r.a.createElement("button",{type:"button",className:"form-button",onClick:this.handleSubmitButton},"Avaliar"),r.a.createElement("span",{style:{display:i}},"Obrigado pelo seu FeedBack")))),s.map((function(e){return r.a.createElement(q,{key:e.email,email:e.email,message:e.message,rating:e.rating})})))}}]),a}(r.a.Component),R=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleButtonClick=e.handleButtonClick.bind(Object(d.a)(e)),e}return Object(u.a)(a,[{key:"handleButtonClick",value:function(){var e=this.props;(0,e.addtoCart)(e.productName)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{"data-testid":"product-detail-add-to-cart",onClick:this.handleButtonClick,type:"button"},"Adicionar Bot\xe3o"))}}]),a}(r.a.Component),Q=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={product:{}},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){O(),this.loadApiDetails()}},{key:"loadApiDetails",value:function(){var e=Object(g.a)(f.a.mark((function e(){var t,a,n=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.location.state.data,a=this.props.match.params.id,this.setState(Object(g.a)(f.a.mark((function e(){var r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("",t);case 2:r=e.sent,c=r.results.find((function(e){return e.id===a})),n.setState({product:c});case 5:case"end":return e.stop()}}),e)}))));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.product,t=e.thumbnail,a=e.title,n=e.price,c=this.props.location,i=c.teste.addtoCart,s=c.shipping.shipping;return r.a.createElement("main",null,r.a.createElement("div",{"data-testid":"product-detail-name"},r.a.createElement("img",{src:t,alt:"product thumbnail"}),r.a.createElement("p",null,a),r.a.createElement("p",null,n),s?r.a.createElement("div",{"data-testid":"free-shipping"},"Frete Gr\xe1tis "):r.a.createElement("div",null),r.a.createElement(R,{addtoCart:i,productName:a}),r.a.createElement("div",null,r.a.createElement(p.b,{"data-testid":"shopping-cart-button",to:{pathname:"/cart"}},r.a.createElement("img",{src:j.a,alt:"button car shopping"})))),r.a.createElement(A,null))}}]),a}(r.a.Component),K=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).addTocart=e.addTocart.bind(Object(d.a)(e)),e.state={addToCart:{}},e}return Object(u.a)(a,[{key:"addTocart",value:function(e){this.setState((function(t){return{addToCart:Object(l.a)(Object(l.a)({},t.addToCart),{},Object(s.a)({},e,(t.addToCart[e]||0)+1))}}))}},{key:"render",value:function(){var e=this,t=this.state.addToCart;return r.a.createElement(p.a,null,r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(N,Object.assign({},t,{addToCart:e.addTocart}))}}),r.a.createElement(v.a,{path:"/card/:id",component:Q}),r.a.createElement(v.a,{exact:!0,path:"/cart",render:function(e){return r.a.createElement(T,Object.assign({},e,{productsAddToCart:t}))}}),r.a.createElement(v.a,{component:M})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.fd59fa01.chunk.js.map