(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],[,,function(e,a,t){e.exports={chart_label:"horizontal-bar-chart_chart_label__1FHf4",content:"horizontal-bar-chart_content__26kee",no_data:"horizontal-bar-chart_no_data__3Yjjw",bar:"horizontal-bar-chart_bar__2I-Iz",bar_margin:"horizontal-bar-chart_bar_margin__3lgdk",progress:"horizontal-bar-chart_progress__1gGoj",x_asis_label:"horizontal-bar-chart_x_asis_label__1ivlt",x_axis_no_lable:"horizontal-bar-chart_x_axis_no_lable__14iI0",y_asis:"horizontal-bar-chart_y_asis__1xp6O",y_asis_label:"horizontal-bar-chart_y_asis_label__1VEpX"}},function(e,a,t){e.exports={chart_label:"bar-chart_chart_label__Ap5Vn",content:"bar-chart_content__wr9_t",no_data:"bar-chart_no_data__2eeWJ",h_176:"bar-chart_h_176__22AF9",mt_27:"bar-chart_mt_27__A4SuT",bar_content:"bar-chart_bar_content__1pQer",bar_value:"bar-chart_bar_value__3z3ag",bar_label:"bar-chart_bar_label__1UI7R",bar:"bar-chart_bar__12x3w",x_asis_label:"bar-chart_x_asis_label__iUg-R"}},function(e,a,t){e.exports={snackbar:"toast_snackbar__Vm-t8",show:"toast_show__1wlTJ",button:"toast_button__1OXJo",middle_inline:"toast_middle_inline__33IHX",assign_button:"toast_assign_button__15msz",delete_button:"toast_delete_button__2Az-e",fs_18:"toast_fs_18__2nrov",pointer_cursor:"toast_pointer_cursor__29Z0O",fadein:"toast_fadein__3FF0j",fadeout:"toast_fadeout__2WZp5"}},function(e,a,t){e.exports={table_title_checkbox:"table_table_title_checkbox__tGYB_",no_data:"table_no_data__Vf2Th",table_title:"table_table_title__2xC23",table_title_content:"table_table_title_content__16v6l",table_body_checkbox:"table_table_body_checkbox__13gZZ",table_body:"table_table_body__3kdyi",table_body_content:"table_table_body_content__2zq3Q"}},,function(e,a,t){e.exports={title_dashboard:"app_title_dashboard__cfQ7_",right_to_left:"app_right_to_left__yntv3",rightleft:"app_rightleft__Af45v",from_bottom:"app_from_bottom__3X2yB",frombottom:"app_frombottom__H7OvR"}},function(e,a,t){e.exports={toast_extend:"toast-extends_toast_extend__3xdJL",toast_overlay:"toast-extends_toast_overlay__3q2CM"}},,,function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(10),r=t.n(c),o=(t(16),t(6)),i=t(1),s=t(3),_=t.n(s);function d(e){var a=e.label,t=void 0===a?"":a,c=e.pattern,r=void 0===c?[{background:"#DAD7FE",label:"default 1"},{background:"#4339F2",label:"default 2"}]:c,o=e.data,s=void 0===o?[]:o,d=e.errorDataChart,m=void 0!==d&&d,b=Object(n.useState)(0),u=Object(i.a)(b,2),h=u[0],v=u[1];Object(n.useEffect)((function(){!function(e){var a=[];e.map((function(e){a.push(e.value)})),v(Math.max.apply(Math,a))}(s)}),[s]);var f=_.a.chart_label,p=_.a.content,g=_.a.bar,k=_.a.h_176,C=_.a.mt_27,E=_.a.bar_content,y=_.a.bar_label,x=_.a.bar_value,N=_.a.no_data;return l.a.createElement("div",{className:p},s.length?l.a.createElement("div",null,l.a.createElement("div",{className:f},t),l.a.createElement("div",{className:k},h&&s.map((function(e,a){return l.a.createElement("div",{className:g,key:a,style:{height:"".concat(e.value/h*100,"%"),background:"".concat(r[e.label].background)}})}))),l.a.createElement("div",{className:C},r.map((function(e,a){return l.a.createElement("div",{className:E,key:a},l.a.createElement("div",{className:x,style:{background:e.background}}),l.a.createElement("div",{className:y},e.label))})))):l.a.createElement("div",{className:N},m?"Please check your internet connection and reload":"No Data"))}var m=t(2),b=t.n(m);function u(e){var a=e.label,t=void 0===a?"":a,n=e.pattern,c=void 0===n?[]:n,r=e.data,o=void 0===r?[]:r,i=e.errorDataChart,s=void 0!==i&&i,_=b.a.chart_label,d=b.a.content,m=b.a.bar,u=b.a.bar_margin,h=b.a.progress,v=b.a.x_asis_label,f=b.a.x_axis_no_lable,p=b.a.y_asis,g=b.a.y_asis_label,k=b.a.no_data;return l.a.createElement("div",{className:d},o.length?l.a.createElement("div",null,l.a.createElement("div",{className:_},t),o.map((function(e,a){return l.a.createElement("div",{className:u,key:a},l.a.createElement("div",{className:v},e.label),0===c.indexOf(e.value)?l.a.createElement("div",{className:m},l.a.createElement("div",{className:h,style:{width:"".concat(10/(c.length-1),"%")}})):c.indexOf(e.value)===c.length-1?l.a.createElement("div",{className:m},l.a.createElement("div",{className:h,style:{width:"".concat(100,"%")}})):l.a.createElement("div",{className:m},l.a.createElement("div",{className:h,style:{width:"".concat(100*c.indexOf(e.value)/(c.length-1),"%")}})))})),l.a.createElement("div",null,l.a.createElement("div",{className:f}),l.a.createElement("div",{className:p},l.a.createElement("div",{className:g},c.map((function(e,a){return l.a.createElement("div",{key:a},e)})))))):l.a.createElement("div",{className:k},s?"Please check your internet connection and reload":"No Data"))}var h=t(5),v=t.n(h);function f(e){var a=e.cols,t=void 0===a?[]:a,n=e.list,c=void 0===n?[]:n,r=e.useCheckbox,o=void 0===r||r,i=e.selectAll,s=e.selecOne,_=e.checkedAll,d=void 0!==_&&_,m=e.errorDataTable,b=void 0!==m&&m,u=v.a.table_title,h=v.a.table_title_checkbox,f=v.a.table_body_checkbox,p=v.a.table_body,g=v.a.table_body_content,k=v.a.table_title_content,C=v.a.no_data;return l.a.createElement("div",null,l.a.createElement("div",{className:k},o?l.a.createElement("div",{className:h},l.a.createElement("label",{className:"checkbox-container"},l.a.createElement("input",{type:"checkbox",onChange:i,checked:d}),l.a.createElement("span",{className:"checkmark"}))):l.a.createElement("div",{className:h},l.a.createElement("label",{className:"checkbox-container"})),t.map((function(e,a){return l.a.createElement("div",{className:u,key:a},e.title)}))),c.length?c.map((function(e,a){return l.a.createElement("div",{className:g,key:a},l.a.createElement("div",{className:f},l.a.createElement("label",{className:"checkbox-container"},l.a.createElement("input",{type:"checkbox",checked:e.checked,onChange:function(){return s(a)}}),l.a.createElement("span",{className:"checkmark"}))),t.map((function(a,t){return l.a.createElement("div",{className:p,key:t},a.render(e))})))})):l.a.createElement("div",{className:"".concat(g," ").concat(C)},b?"Please check your internet connection and reload":"No Data"))}var p=t(4),g=t.n(p);function k(e){var a=e.showToast,t=e.list,c=void 0===t?[]:t,r=e.unSelectAll,o=e.doDelete,s=e.openToastExtend,_=g.a.snackbar,d=g.a.show,m=g.a.button,b=g.a.assign_button,u=g.a.delete_button,h=g.a.middle_inline,v=g.a.fs_18,f=g.a.pointer_cursor,p=Object(n.useState)(0),k=Object(i.a)(p,2),C=k[0],E=k[1];return Object(n.useEffect)((function(){var e=0;c.map((function(a){!0===a.checked&&e++})),E(e)}),[c]),l.a.createElement("div",{className:"".concat(_," ").concat(a?d:"")},l.a.createElement("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"".concat(h," ").concat(f),onClick:r},l.a.createElement("path",{d:"M13.3064 11.1789L9.12475 6.99964L13.3032 2.81801C13.7851 2.33774 13.7851 1.56529 13.3048 1.08341L12.9166 0.694383C12.6884 0.460648 12.3762 0.333374 12.048 0.333374C12.0464 0.333374 12.0464 0.333374 12.0464 0.333374C11.7183 0.333374 11.4101 0.462249 11.1795 0.693583L6.99952 4.87681L2.81789 0.698386C2.33842 0.218107 1.56677 0.215705 1.08489 0.695984L0.695862 1.08101C0.461326 1.31074 0.333252 1.62292 0.333252 1.95031C0.333252 2.2793 0.462127 2.58908 0.693461 2.81962L4.87669 6.99964L0.697463 11.1813C0.215584 11.6615 0.215584 12.434 0.695862 12.9175L1.08409 13.3057C1.31382 13.5394 1.6252 13.6667 1.95339 13.6667C2.27998 13.6667 2.59216 13.5362 2.8219 13.3065L7.00112 9.12407L11.1811 13.3017C11.4181 13.541 11.7335 13.6619 12.0497 13.6619C12.3626 13.6619 12.6764 13.5426 12.9158 13.3041L13.304 12.9167C13.5393 12.6885 13.6666 12.3764 13.6666 12.0482C13.6682 11.72 13.5393 11.4102 13.308 11.1789H13.3064Z",fill:"white"}))," ",l.a.createElement("div",{className:"".concat(h," ").concat(v)},C," Table Selected"),l.a.createElement("div",{className:"".concat(m," ").concat(b),onClick:s},l.a.createElement("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:h},l.a.createElement("path",{d:"M11.2815 0.571477H7.24432C6.96599 0.559064 6.6886 0.611898 6.43432 0.725763C6.16005 0.837341 5.91409 1.00864 5.71432 1.22719L1.21432 5.79148C1.0049 5.98362 0.842185 6.2211 0.738608 6.48576C0.628227 6.74154 0.571289 7.01718 0.571289 7.29576C0.571289 7.57434 0.628227 7.84998 0.738608 8.10576C0.8486 8.36698 1.01043 8.60317 1.21432 8.80005L5.23861 12.85C5.64613 13.2223 6.17811 13.4286 6.73004 13.4286C7.30339 13.4411 7.85986 13.2341 8.28575 12.85L12.7729 8.28576C13.184 7.88698 13.4198 7.34127 13.4286 6.76862V2.71862C13.4158 2.15317 13.1856 1.61441 12.7858 1.21433C12.3786 0.82506 11.8442 0.596651 11.2815 0.571477ZM11.7958 6.76862C11.7983 6.83017 11.7883 6.8916 11.7662 6.9491C11.744 7.00661 11.7104 7.05895 11.6672 7.10291L7.11575 11.6672C7.07554 11.7159 7.02188 11.7517 6.96146 11.77C6.8977 11.7816 6.83237 11.7816 6.76861 11.77C6.705 11.7832 6.63936 11.7832 6.57575 11.77C6.51315 11.7485 6.45608 11.7134 6.40861 11.6672L2.38432 7.61719C2.33981 7.5763 2.30426 7.52663 2.27991 7.4713C2.25557 7.41598 2.24296 7.35621 2.24289 7.29576C2.25458 7.18385 2.30453 7.07939 2.38432 7.00005L6.92289 2.39719C7.01481 2.32323 7.12675 2.27846 7.24432 2.26862H11.4743C11.5408 2.28999 11.6021 2.32503 11.6543 2.37148C11.6987 2.41544 11.7337 2.46792 11.7572 2.52576C11.7693 2.58947 11.7693 2.65491 11.7572 2.71862L11.7958 6.76862Z",fill:"#9D97FF"}),l.a.createElement("path",{d:"M7.00004 5.47005C6.59425 5.47005 6.20509 5.63124 5.91816 5.91818C5.63123 6.20511 5.47004 6.59427 5.47004 7.00005C5.47004 7.40583 5.63123 7.79499 5.91816 8.08192C6.20509 8.36885 6.59425 8.53005 7.00004 8.53005C7.40174 8.51718 7.78347 8.35186 8.06766 8.06767C8.35185 7.78348 8.51717 7.40175 8.53004 7.00005C8.52668 6.59531 8.3644 6.20809 8.0782 5.92189C7.79199 5.63568 7.40478 5.47341 7.00004 5.47005Z",fill:"#9D97FF"}))," ",l.a.createElement("div",{className:h},"Assign Category")),l.a.createElement("div",{className:"".concat(m," ").concat(u),onClick:o},l.a.createElement("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:h},l.a.createElement("path",{d:"M6.99999 13.4286C5.72853 13.4286 4.48564 13.0515 3.42846 12.3451C2.37129 11.6388 1.54732 10.6348 1.06076 9.46009C0.574197 8.28543 0.446889 6.99285 0.694937 5.74583C0.942985 4.49881 1.55525 3.35335 2.4543 2.4543C3.35335 1.55525 4.49881 0.942985 5.74583 0.694937C6.99285 0.446889 8.28543 0.574197 9.46009 1.06076C10.6348 1.54732 11.6388 2.37129 12.3451 3.42846C13.0515 4.48564 13.4286 5.72853 13.4286 6.99999C13.4286 7.8442 13.2623 8.68014 12.9392 9.46009C12.6161 10.24 12.1426 10.9487 11.5457 11.5457C10.9487 12.1426 10.24 12.6161 9.46009 12.9392C8.68014 13.2623 7.8442 13.4286 6.99999 13.4286ZM6.99999 1.99856C6.0108 1.99856 5.04382 2.29189 4.22134 2.84145C3.39886 3.39101 2.75781 4.17213 2.37927 5.08602C2.00072 5.99991 1.90168 7.00553 2.09466 7.97572C2.28764 8.9459 2.76398 9.83707 3.46344 10.5365C4.1629 11.236 5.05407 11.7123 6.02426 11.9053C6.99444 12.0983 8.00006 11.9992 8.91395 11.6207C9.82784 11.2422 10.609 10.6011 11.1585 9.77863C11.7081 8.95615 12.0014 7.98917 12.0014 6.99999C11.998 5.67457 11.47 4.40441 10.5328 3.46719C9.59556 2.52998 8.3254 2.00195 6.99999 1.99856Z",fill:"#FF9A9A"}),l.a.createElement("path",{d:"M4.85284 6.04856H9.14713C9.53284 6.04856 9.85427 6.47284 9.85427 6.99999C9.85427 7.52713 9.53284 7.95141 9.14713 7.95141H4.85284C4.46713 7.95141 4.1457 7.52713 4.1457 6.99999C4.1457 6.47284 4.42856 6.04856 4.85284 6.04856Z",fill:"#FF9A9A"})),"  ",l.a.createElement("div",{className:h},"Delete Table")))}var C=t(8),E=t.n(C);function y(e){e.showToast,e.list,e.unSelectAll,e.doDelete;var a=e.closeToastExtend,t=e.updateCategory,n=E.a.toast_extend,c=E.a.toast_overlay;return l.a.createElement("div",null,l.a.createElement("div",{className:c,onClick:a}),l.a.createElement("div",{className:n},l.a.createElement("input",{type:"text",style:{border:"none",height:"30px",outline:"none",borderBottom:"2px solid #4339F2",width:"100%",fontWeight:800},placeholder:"Type & Enter to Submit",onKeyUp:function(e){13===e.keyCode&&(e.preventDefault(),t(e.target.value))}})))}var x=t(7),N=t.n(x);var O=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)([]),s=Object(i.a)(r,2),_=s[0],m=s[1],b=Object(n.useState)([]),h=Object(i.a)(b,2),v=h[0],p=h[1],g=Object(n.useState)(!1),C=Object(i.a)(g,2),E=C[0],x=C[1],O=Object(n.useState)(!1),j=Object(i.a)(O,2),w=j[0],A=j[1],L=Object(n.useState)(!1),M=Object(i.a)(L,2),D=M[0],F=M[1],S=N.a.title_dashboard,z=N.a.right_to_left,T=N.a.from_bottom;function Z(){A(!1),x(!1);var e=[];v.map((function(a){e.push(Object(o.a)(Object(o.a)({},a),{},{checked:!1}))})),e.map((function(e){e.checked=!1})),p(e)}Object(n.useEffect)((function(){!function(){var e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=[];[{month:6,totalOrder:3},{month:5,totalOrder:6},{month:4,totalOrder:2},{month:3,totalOrder:4},{month:2,totalOrder:5}].map((function(t){a.push({label:e[t.month-1],value:"O"+t.totalOrder})})),c(a)}(),function(){var e=[];[{total:400,category:"kemeja"},{total:500,category:"kemeja"},{total:100,category:"kaos"},{total:100,category:"kaos"},{total:100,category:"kemeja"},{total:400,category:"kemeja"},{total:500,category:"kemeja"},{total:100,category:"kaos"},{total:100,category:"kemeja"},{total:400,category:"kemeja"},{total:500,category:"kaos"},{total:500,category:"kaos"},{total:600,category:"kaos"},{total:200,category:"kemeja"},{total:100,category:"kemeja"},{total:200,category:"kaos"}].map((function(a){e.push({value:a.total,label:"kaos"===a.category?0:1})})),m(e)}(),function(e){var a=[];[{_id:"5f1cf7dacd5e2832e8ab1027",name:"M2",category:"kemeja",available:1,arrival:1},{_id:"5f1cf7dacd5e2832e8ab1028",name:"M2",category:"kemeja",available:0,arrival:1},{_id:"5f1cf7dacd5e2832e8ab1029",name:"Polo",category:"kaos",available:1,arrival:0},{_id:"5f1cf7dacd5e2832e8ab1021",name:"Polo",category:"kaos",available:0,arrival:1},{_id:"5f1cf7dacd5e2832e8ab1022",name:"M2",category:"kemeja",available:1,arrival:0},{_id:"5f1cf7dacd5e2832e8ab1023",name:"M2",category:"kemeja",available:1,arrival:0},{_id:"5f1cf7dacd5e2832e8ab1024",name:"M2",category:"kemeja",available:0,arrival:1},{_id:"5f1cf7dacd5e2832e8ab1025",name:"Polo",category:"kaos",available:1,arrival:0},{_id:"5f1cf7dacd5e2832e8ab1026",name:"M2",category:"kemeja",available:0,arrival:1},{_id:"5f1cf7dacd5e2832e8ab101f",name:"M2",category:"kemeja",available:0,arrival:0}].map((function(e){a.push(Object(o.a)(Object(o.a)({},e),{},{checked:!1,availability:e.available?"Available":"FULL",arrival:e.arrival?"Arrived":"Hast'n arrived"}))})),p(a)}()}),[]);var H=[{title:"Name",render:function(e){return l.a.createElement("span",null,e.name)}},{title:"Category",render:function(e){return l.a.createElement("span",null,e.category)}},{title:"Availability",render:function(e){return l.a.createElement("span",null,e.availability)}},{title:"Arrival",render:function(e){return l.a.createElement("span",null,e.arrival)}}];return l.a.createElement("div",null,l.a.createElement("div",{className:z},l.a.createElement("div",{className:S},"Charts Visualization"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{style:{width:"590px",display:"inline-block"}},l.a.createElement(u,{label:"Chart 1",data:t,pattern:["O1","O2","O3","O4","O5","O6","O7","O8","O9"]})),l.a.createElement("div",{style:{width:"590px",display:"inline-block",marginLeft:"20px",verticalAlign:"top",height:"100%"}},l.a.createElement(d,{label:"Chart 2",data:_,pattern:[{background:"#DAD7FE",label:"Kaos"},{background:"#4339F2",label:"Kemeja"}]})))),l.a.createElement("div",{className:"container ".concat(T)},l.a.createElement(f,{cols:H,list:v,selecOne:function(e){var a=[],t=!1,n=!1;v.map((function(e){a.push(e)})),a[e].checked=!a[e].checked,a.map((function(e,a){e.checked?n=!0:t=!0})),A(n),x(!t),p(a)},checkedAll:E,selectAll:function(){var e=!1,a=[];v.map((function(t,n){a.push(t),t.checked||(e=!0)})),A(e),x(e),a.map((function(a){a.checked=e})),p(a),(new Date).toISOString()}})),l.a.createElement(k,{showToast:w,list:v,unSelectAll:Z,doDelete:function(){var e=[];v.map((function(a){!a.checked&&e.push(a)})),A(!1),Z(),p(e)},openToastExtend:function(){F(!0)}}),D&&l.a.createElement(y,{closeToastExtend:function(){F(!1)},updateCategory:function(e){var a=[];v.map((function(t){t.checked?a.push(Object(o.a)(Object(o.a)({},t),{},{category:e})):a.push(t)})),A(!1),F(!1),Z(),p(a)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.ef52e1ca.chunk.js.map