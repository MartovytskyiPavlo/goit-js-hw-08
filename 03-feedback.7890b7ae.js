const e={},t=document.querySelector(".feedback-form");!function(){const e=localStorage.getItem("feedback-form-state");if(e){const a=JSON.parse(e);for(let e in a)t[e].value=a[e]}}(),t.addEventListener("input",(function(t){t.target.value;e[t.target.name]=t.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(e))})),t.addEventListener("submit",(function(a){a.preventDefault(),console.log(e);for(let a in e)delete e[a],t[a].value=""}));
//# sourceMappingURL=03-feedback.7890b7ae.js.map
