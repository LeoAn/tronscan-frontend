(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{1107:function(e,t,a){"use strict";a.d(t,"a",function(){return k});var n=a(1132),r=a.n(n),l=a(127),o=a.n(l),c=a(1104),s=a.n(c),i=a(1110),d=a.n(i),u=a(2),m=a.n(u),p=a(8),f=a(5),h=a(15),g=a(16),b=a(24),v=a(23),E=a(25),w=a(0),x=a.n(w),y=a(3),_=a(18),k=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(b.a)(this,Object(v.a)(t).call(this,e))).loadDatas=Object(f.a)(m.a.mark(function e(){var t,n,r,l,o=arguments;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:1,n=o.length>1&&void 0!==o[1]?o[1]:40,r=a.state.filter,e.next=5,_.a.getTokens(Object(p.a)({sort:"rank",limit:n,start:(t-1)*n},r));case 5:return l=e.sent,e.abrupt("return",l);case 7:case"end":return e.stop()}},e)})),a.handleTableChange=function(e,t,n){var r=Object(p.a)({},a.state.pagination);r.current=e.current,a.setState({pagination:r}),a.fetch(Object(p.a)({pageSize:e.pageSize,page:e.current,sortField:n.field,sortOrder:n.order},t))},a.fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.setState({loading:!0}),a.props.onPageChange?(a.props.onPageChange(e.page,e.pageSize),a.setState({loading:!1})):a.setState({loading:!1})},a.onInputChange=function(e){a.setState({searchText:e.target.value})},a.onReset=function(){a.setState({searchText:""},function(){a.onSearch()})},a.onSearch=function(){var e=a.props.tableData,t=a.state.searchText,n=new RegExp(t,"gi");a.setState({filterDropdownVisible:!1,filtered:!!t,data:e.map(function(e){return e.name.match(n)?Object(p.a)({},e,{name:x.a.createElement("span",null,e.name.split(new RegExp("(?<=".concat(t,")|(?=").concat(t,")"),"i")).map(function(e,a){return e.toLowerCase()===t.toLowerCase()?x.a.createElement("span",{key:a,className:"highlight"},e):e}))}):null}).filter(function(e){return!!e})})},a.setColumn=function(e){function t(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}}var n={filterDropdown:x.a.createElement("div",{className:"custom-filter-dropdown"},x.a.createElement(d.a,{ref:function(e){return a.searchInput=e},placeholder:"Search name",value:a.state.searchText,onChange:a.onInputChange,onPressEnter:a.onSearch}),x.a.createElement(s.a,{type:"primary",onClick:a.onSearch},Object(y.c)("search")),x.a.createElement(s.a,{className:"btn-secondary ml-1",onClick:a.onReset},Object(y.c)("reset"))),filterIcon:x.a.createElement(o.a,{type:"filter",style:{color:a.state.filtered?"#108ee9":"#aaa"}}),filterDropdownVisible:a.state.filterDropdownVisible,onFilterDropdownVisibleChange:function(e){a.setState({filterDropdownVisible:e},function(){a.searchInput&&a.searchInput.focus()})}},r=[],l=!0,c=!1,i=void 0;try{for(var u,m=e[Symbol.iterator]();!(l=(u=m.next()).done);l=!0){var f=u.value;if(f.sorter&&!f.filterDropdown){var h={sorter:t(f.key)};r.push(Object(p.a)({},f,h))}else if(!f.sorter&&f.filterDropdown){var g=Object(p.a)({},n);r.push(Object(p.a)({},f,g))}else if(f.sorter&&f.filterDropdown){var b=Object(p.a)({sorter:t(f.key)},n);r.push(Object(p.a)({},f,b))}else r.push(f)}}catch(v){c=!0,i=v}finally{try{l||null==m.return||m.return()}finally{if(c)throw i}}return r},a.state={filterDropdownVisible:!1,data:[],searchText:"",filtered:!1,pagination:{showQuickJumper:!0,position:"both",showSizeChanger:!0,defaultPageSize:20},loading:!1},a}return Object(E.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.total,a=e.loading,n=e.data,l=e.column,o=e.bordered,c=e.pagination,s=void 0===c||c,i=e.scroll,d=e.locale,u=e.addr,m=e.transfers,f=(e.contractAddress,this.setColumn(l)),h=s?Object(p.a)({total:t},this.state.pagination):s;return x.a.createElement("div",null,u?x.a.createElement("div",{className:"card table_pos table_pos_addr "+(0==n.length?"table_pos_addr_data":"")+("address"==m?" transfer-mt-100":" transfer-pt-100")},x.a.createElement(r.a,{bordered:o,columns:f,rowKey:function(e,t){return t},dataSource:n,locale:d,scroll:i,pagination:h,loading:a,onChange:this.handleTableChange})," "):x.a.createElement("div",{className:"card table_pos"},x.a.createElement(r.a,{bordered:o,columns:f,rowKey:function(e,t){return t},dataSource:n,locale:d,scroll:i,pagination:h,loading:a,onChange:this.handleTableChange})))}}]),t}(w.Component)},1236:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAQAAABvygHQAAAClUlEQVR4AcWXRXLkMBSGJ7uhdV8gN8pR+gKhU6gxzMzMzMzMKAX2+cbVdqlJ7nTANf43gqq/nt7/yD/+w/eUq/yyUg2rXfkqX9WuGrZ2/qfcT9K9+lSRXJe4YF0Vvfo+RMhflW9Zxjt4Vfn8zZJS5akbSXZQNyrvfRtzVL56k2QP9abyyclE+UvVST4OVccvdys15cdpXay1xOHzUPlmeRxfttHCCCsc8/Ax3+alB5FWfAHhIEgtPcyww3VWkcBf16ffEUYQYZ4VRmmlFGGhjDZrt8IJj9m54NWXHOr9lNNJgAVnf8020/RQQxBBiDr6ODGmQ0KWqeLky0MEe0wgGEyx64Fj5gkhiHJosrVIk6bneB09SNYJ08xt0s0ldUTZoo0Ie4aaoCtR2hULhGJkx5RTmfDUA0qp4Txmcychi1ymwKlgyp96YYs16/izkQibSAsrhGjTlt/RSJC1VAf47cdXmpTsp0b7sQ/BNKMIRrhgkym6qSaAsNCOTEalbemwvTWIpXezMYogkRhRhUU1xjJlFvVtqqXDNumuvTWKpdFGOQPMs6dpuolylq7/boxUx6iLWDZqGU26nSTAjjFWbdIXM+mtI5aNKPNIjQ2E3qfgxfB8s1h3CDb1+TFhBtxSddcglFmsYwTHOmnLaXKtAGrYPaS0J22xNhHcOQHWSAU3SDdUGoLfLNY8Ueekj4i22QTlT0lTs1hzSEapteNV+9YNT7mGgmIWqzuWOdsEmEJmwnq89BVJMovVwBCnRGwPZ4AqMhZps1iljFNFvblrmYt05k5qF+UI5Vx9rKPqxuciliDE4Ucbn27RLmIJVj/eojO74JCxjw8THo49ngxoHo2SHg29no3n+kei+OM/Ep7+8njw/QOnF3WHklwUswAAAABJRU5ErkJggg=="},1669:function(e,t,a){var n=a(84);e.exports=function(e){return n(e).toLowerCase()}},1760:function(e,t,a){"use strict";var n=a(1104),r=a.n(n),l=a(1110),o=a.n(l),c=a(15),s=a(16),i=a(24),d=a(23),u=a(25),m=a(0),p=a.n(m),f=a(3),h=a(73),g=a.n(h);p.a.Component},3232:function(e,t,a){"use strict";a.r(t);var n=a(1669),r=a.n(n),l=a(199),o=a.n(l),c=a(33),s=a.n(c),i=a(2),d=a.n(i),u=a(5),m=a(15),p=a(16),f=a(24),h=a(23),g=a(25),b=a(0),v=a.n(b),E=a(30),w=a(290),x=a(11),y=(a(53),a(3)),_=(a(18),a(19)),k=a(293),S=(a(1760),a(63),a(1107)),O=a(7),C=a(20),j=a(43),A=a(81),N=a(51),T=a(22),D=a.n(T),R=function(e){function t(e){var n;Object(m.a)(this,t),(n=Object(f.a)(this,Object(h.a)(t).call(this,e))).loadPage=Object(u.a)(d.a.mark(function e(){var t,a,r,l,o,c,s=arguments;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=s.length>0&&void 0!==s[0]?s[0]:1,a=s.length>1&&void 0!==s[1]?s[1]:20,r=n.state.filter,n.props.intl,n.setState({loading:!0}),!r.name){e.next=12;break}return e.next=8,D.a.get(O.e+"/api/token_trc20?sort=issue_time&limit="+a+"&start="+(t-1)*a+"&name="+r.name);case 8:l=e.sent,o=l.data.trc20_tokens.length,e.next=16;break;case 12:return e.next=14,D.a.get(O.e+"/api/token_trc20?sort=issue_time&limit="+a+"&start="+(t-1)*a);case 14:l=e.sent,o=l.data.total;case 16:return(c=l.data.trc20_tokens).map(function(e,n){e.index=n+1+(t-1)*a}),n.setState({loading:!1,tokens:c,total:o,page:t}),n.addIEOClass(),e.abrupt("return",o);case 21:case"end":return e.stop()}},e)})),n.setSearch=function(){var e=s()(Object(k.a)(n.props.location,"search"));e.length>0?n.setState({filter:{name:"%25".concat(e,"%25")}}):n.setState({filter:{}})},n.addIEOClass=function(){var e=n.state.page,t=document.querySelector(".ant-table-tbody").firstElementChild;1==e?t.classList.add("trc20-star-ad"):t.classList.remove("trc20-star-ad"),document.querySelector(".trc20-star-ad")&&document.querySelector(".trc20-star-ad").addEventListener("click",function(){window.open("http://www.tronace.com")})},n.onChange=function(e,t){n.loadPage(e,t)},n.customizedColumn=function(){var e=n.props.intl,t=n.state.contractAddress;return[{title:"#",dataIndex:"index",key:"index",width:"48px",align:"center",className:"ant_table _text_nowrap",render:function(e,a,n){return v.a.createElement("span",null,a.contract_address==t?v.a.createElement("div",null,v.a.createElement("span",{className:"starbeat"},v.a.createElement("i",{className:"fas fa-star"})," "),v.a.createElement("span",{className:"star-tip"})):v.a.createElement("span",null,e-1))}},{title:o()(e.formatMessage({id:"token"})),dataIndex:"name",key:"name",width:"50%",render:function(e,t,n){return v.a.createElement("div",{className:"table-imgtext"},t.icon_url?v.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},v.a.createElement("img",{style:{width:"42px",height:"42px"},src:t.icon_url})):v.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},v.a.createElement("img",{style:{width:"42px",height:"42px"},src:a(1236)})),v.a.createElement("div",null,v.a.createElement("h5",null,v.a.createElement(_.g,{name:t.name,namePlus:t.name+" ("+t.symbol+")",address:t.contract_address})),v.a.createElement("p",null,t.token_desc)))}},{title:e.formatMessage({id:"market_capitalization"}),align:"center",className:"ant_table d-none d-md-table-cell _text_nowrap",render:function(e,t,a){return v.a.createElement("div",null,t.price&&t.total_supply_with_decimals?v.a.createElement("div",null,v.a.createElement(x.c,{value:t.total_supply_with_decimals*t.price,maximumFractionDigits:1})," TRX"):v.a.createElement("span",{style:{color:"#666666"}},"-"))}},{title:e.formatMessage({id:"pice_per_onetrx"}),dataIndex:"pice_per_onetrx",key:"pice_per_onetrx",align:"center",className:"ant_table",render:function(e,t,a){r()(e);return v.a.createElement("div",null,t.price?v.a.createElement("div",null,v.a.createElement(x.c,{value:t.price,maximumFractionDigits:1})," TRX"):v.a.createElement("span",{style:{color:"#666666"}},"-"))}},{title:e.formatMessage({id:"total_tokens"}),dataIndex:"total_supply_with_decimals",key:"total_supply",render:function(e,t,a){return null===e&&(e=0),v.a.createElement("div",null,v.a.createElement(x.c,{value:t.total_supply_with_decimals/Math.pow(10,t.decimals),maximumFractionDigits:1}))},align:"center",className:"ant_table _text_nowrap"},{title:e.formatMessage({id:"contract_address"}),dataIndex:"contract_address",key:"contract_address",render:function(e,t,a){return v.a.createElement(_.a,{address:t.contract_address,isContract:!0})},align:"center",className:"ant_table"}]},n.state={tokens:[],buyAmount:0,loading:!1,total:0,filter:{},page:1,contractAddress:"TB2SqC48afC9FX36bPQQHatoKo5m79JXKL"};var l=s()(Object(k.a)(e.location,"search"));return l.length>0&&(n.state.filter.name="%25".concat(l,"%25")),n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.loadPage(),setTimeout(function(){e.addIEOClass()},1e3)}},{key:"componentDidUpdate",value:function(e,t){}},{key:"render",value:function(){var e=this,t=this.state,a=t.tokens,n=(t.alert,t.loading),r=t.total,l=t.contractAddress,o=this.props,c=(o.match,o.intl),s=this.customizedColumn(),i=c.formatMessage({id:"part_total"})+" "+r+" "+c.formatMessage({id:"part_pass"});return v.a.createElement("main",{className:"container header-overlap token_black trc20-ad-bg"},n&&v.a.createElement("div",{className:"loading-style"},v.a.createElement(A.b,null)),v.a.createElement("div",{className:"row"},v.a.createElement("div",{className:"col-md-12 table_pos"},r?v.a.createElement("div",{className:"table_pos_info d-none d-md-block d-flex",style:{left:"auto"}},i," \xa0\xa0",v.a.createElement(N.a,{to:"/exchange/trc20"},Object(y.b)("Trade_on_TRXMarket"),">")):"",v.a.createElement("a",{className:"apply-trc20",href:"https://goo.gl/forms/PiyLiDeaXv3uesSE3",target:"_blank",style:{color:"#C23631"}},v.a.createElement("button",{className:"btn btn-danger"},Object(y.c)("application_entry"))),v.a.createElement(S.a,{bordered:!0,loading:n,column:s,data:a,total:r,contractAddress:l,onPageChange:function(t,a){e.loadPage(t,a)}}))))}}]),t}(b.Component);var I={loadTokens:w.b,login:C.t,reloadWallet:j.c};t.default=Object(E.connect)(function(e){return{account:e.app.account,tokens:e.tokens.tokens,wallet:e.wallet,currentWallet:e.wallet.current}},I)(Object(x.h)(R))}}]);