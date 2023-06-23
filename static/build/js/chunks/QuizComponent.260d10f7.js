import{defineAsyncComponent as w,openBlock as o,createBlock as v,resolveDynamicComponent as k,unref as I,resolveComponent as p,createElementBlock as s,createElementVNode as c,normalizeClass as f,createCommentVNode as Q,createTextVNode as h,toDisplayString as m,normalizeStyle as C,renderList as z,Fragment as D,createVNode as d,withCtx as b,Transition as y}from"./vue.runtime.esm-bundler.4a69af4e.js";const N=[{id:"1",question:"Who is your furry?",variants:[{bgImage:"https://i.ibb.co/7nmg5xM/cat-quiz.png",icon:"cat",title:"Cat"},{bgImage:"https://i.ibb.co/zWvdFwd/dog-quiz.png",icon:"dog",title:"Dog"}],answear:"",type:"double"},{id:"2",question:"Current Weight",subtitle:"Write the weight of your pet",answear:"",type:"input"},{id:"3",question:"How old is your pet?",variants:[{title:"Up to 8 months"},{title:"8-12 months"},{title:"More than 12 months"}],answear:"",type:"triple"},{id:"4",question:"Body condition",variants:[{title:"Underweight"},{title:"Just Right"},{title:"Overweight"}],answear:"",type:"triple"},{id:"5",question:"Daily Activity",variants:[{title:"Low"},{title:"Average"},{title:"High"}],answear:"",type:"triple"},{id:"6",question:"What food is your pet currently eating?",variants:[{title:"Kibble"},{title:"Wet / canned"},{title:"Cooked"},{title:"Raw"}],answear:"",type:"quarter"},{id:"7",question:"What proteins does your pet not like?",variants:[{title:"Chicken"},{title:"Fish"},{title:"Beef"},{title:"Turkey"},{title:"Pork"},{title:"Duck"},{title:"Quail"}],answear:"",type:"multiple"}],j=(n,i)=>{const t=n[i];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((u,e)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+i)))})},B={__name:"Icon",props:{name:{type:String,required:!0}},setup(n){const i=n,t=w(()=>j(Object.assign({"../../../../icons/account.svg":()=>import("./account.71d3378a.js"),"../../../../icons/angle-pagination-left.svg":()=>import("./angle-pagination-left.faaabc12.js"),"../../../../icons/angle-pagination-right.svg":()=>import("./angle-pagination-right.5f176ce2.js"),"../../../../icons/angle.svg":()=>import("./angle.8d886593.js"),"../../../../icons/arrow-lg.svg":()=>import("./arrow-lg.ed08402b.js"),"../../../../icons/arrow-sm.svg":()=>import("./arrow-sm.2c143b5a.js"),"../../../../icons/arrow.svg":()=>import("./arrow.50983da8.js"),"../../../../icons/bag.svg":()=>import("./bag.abc4c6dd.js"),"../../../../icons/blog.svg":()=>import("./blog.da00fef4.js"),"../../../../icons/box.svg":()=>import("./box.8fb8c390.js"),"../../../../icons/calories.svg":()=>import("./calories.77751231.js"),"../../../../icons/carousel-icon-1.svg":()=>import("./carousel-icon-1.47546dbc.js"),"../../../../icons/carousel-icon-2.svg":()=>import("./carousel-icon-2.1a928e57.js"),"../../../../icons/carousel-icon-3.svg":()=>import("./carousel-icon-3.d00dbf48.js"),"../../../../icons/cart.svg":()=>import("./cart.34fc828a.js"),"../../../../icons/cat.svg":()=>import("./cat.f85d66c9.js"),"../../../../icons/close.svg":()=>import("./close.ed0a0f36.js"),"../../../../icons/cormDog.svg":()=>import("./cormDog.01e48955.js"),"../../../../icons/cormdogg.svg":()=>import("./cormdogg.213af5c5.js"),"../../../../icons/dog.svg":()=>import("./dog.d9488463.js"),"../../../../icons/frost.svg":()=>import("./frost.f5fb3ebb.js"),"../../../../icons/handDog.svg":()=>import("./handDog.a8a24d45.js"),"../../../../icons/lettuce.svg":()=>import("./lettuce.19bfe04d.js"),"../../../../icons/mark.svg":()=>import("./mark.02457f3c.js"),"../../../../icons/no-preservatives.svg":()=>import("./no-preservatives.0586fd3d.js"),"../../../../icons/salt-and-pepper.svg":()=>import("./salt-and-pepper.da1f7485.js"),"../../../../icons/shopping-list.svg":()=>import("./shopping-list.66d97d2e.js"),"../../../../icons/star.svg":()=>import("./star.3d705709.js"),"../../../../icons/works.svg":()=>import("./works.a950f746.js")}),`../../../../icons/${i.name}.svg`));return(u,e)=>(o(),v(k(I(t))))}},g=(n,i)=>{const t=n.__vccOpts||n;for(const[u,e]of i)t[u]=e;return t},S={components:{Icon:B},props:{bgImage:{type:String},icon:{type:String},title:{type:String}}},W=["src"],H={class:"relative z-10 flex items-center justify-center h-full"};function O(n,i,t,u,e,r){const l=p("Icon");return o(),s("button",{class:f(["bg-local hover:opacity-80 p-4",{"c-gradient bg-no-repeat bg-center bg-cover":t.bgImage}]),style:C({backgroundImage:t.bgImage&&`url(${t.bgImage})`})},[c("img",{src:"@img/"+t.bgImage,alt:""},null,8,W),c("div",H,[c("span",{class:f(["font-semibold text-primary flex items-center gap-3 text-5.5",{"text-white":t.bgImage}])},[t.icon?(o(),v(l,{key:0,name:t.icon},null,8,["name"])):Q("",!0),h(" "+m(t.title),1)],2)])],6)}const P=g(S,[["render",O]]),V={props:{question:Object},components:{BoxIcon:P},computed:{className(){return this.question.type=="multiple"?"min-w-[150px] max-h-[90px] rounded-[22px] flex-grow":"md:min-h-[196px] rounded-[22px] sm:rounded-[32px]"}},mounted(){console.log(this.question.type)}};function A(n,i,t,u,e,r){const l=p("BoxIcon");return o(!0),s(D,null,z(t.question.variants,a=>(o(),v(l,{key:a.id,bgImage:a.bgImage,icon:a.icon,title:a.title,class:f(r.className)},null,8,["bgImage","icon","title","class"]))),128)}const F=g(V,[["render",A]]),L={mounted(){this.$refs.input.focus()}},M={class:"bg-local rounded-[32px] w-full flex items-center justify-center p-4"},T={ref:"input",type:"text",class:"w-full outline-none border-0 text-primary font-bold text-10 lg:text-12 bg-transparent text-center placeholder:text-primary placeholder:opacity-50",placeholder:"999lb"};function E(n,i,t,u,e,r){return o(),s("div",M,[c("input",T,null,512)])}const R=g(L,[["render",E]]),U={components:{DoubleQuestion:F,InputQuestion:R},props:{question:{type:Object}}};function $(n,i,t,u,e,r){const l=p("InputQuestion"),a=p("DoubleQuestion");return o(),s("div",{class:f(["gap-5 h-full",{"grid grid-cols-2":t.question.type=="double","grid sm:grid-cols-3":t.question.type=="triple","grid sm:grid-cols-2 md:grid-cols-4":t.question.type=="quarter","flex flex-wrap":t.question.type=="multiple",grid:t.question.type=="input"}])},[t.question.type==="input"?(o(),v(l,{key:0,question:t.question},null,8,["question"])):(o(),v(a,{key:1,question:t.question},null,8,["question"]))],2)}const J=g(U,[["render",$]]),K={props:{questions:{type:Array},activeQuestion:{type:Number}},computed:{activeQuestionComputed(){const n=this.activeQuestion+1;return n>=10?n.toString():"0"+n},questionsLength(){return this.questions.length>=10?this.questions.length:"0"+this.questions.length}}},G={class:"sm-max:flex-col w-full pb-2 md:pb-5 md:border-b-2 md:border-primary flex sm:items-center justify-between gap-5 h-fit"},X={class:"text-primary font-bold font-manrope text-xs md:text-[24px]"},Y={class:"inline-flex justify-between text-6 md:text-[34px]"},Z={class:"c-quiz__nav sm:w-1/2 flex sm:justify-end gap-1.5 md:gap-3"},tt=["disabled"];function et(n,i,t,u,e,r){return o(),s("div",G,[c("div",X,[c("span",Y,[d(y,{mode:"out-in"},{default:b(()=>[(o(),s("span",{class:"min-w-[32px] md:min-w-[42px]",key:r.activeQuestionComputed},m(r.activeQuestionComputed),1))]),_:1}),h(" / ")]),h(" "+m(r.questionsLength),1)]),c("div",Z,[c("button",{class:"f-btn f-btn--primary-ghost h-fit",disabled:t.activeQuestion==0,onClick:i[0]||(i[0]=l=>n.$emit("previousQuestion"))}," Previous ",8,tt),d(y,{mode:"out-in"},{default:b(()=>[(o(),s("button",{key:t.activeQuestion==t.questions.length-1,class:"f-btn f-btn--primary-ghost h-fit",onClick:i[1]||(i[1]=l=>n.$emit("nextQuestion"))},m(t.activeQuestion==t.questions.length-1?"Finish":"Next"),1))]),_:1})])])}const it=g(K,[["render",et]]),nt={data(){return{activeQuestion:0,questions:N}},components:{QuestionsController:J,QuizHeader:it},methods:{nextQuestion(){this.activeQuestion===this.questions.length-1?this.finishQuiz():this.activeQuestion++},finishQuiz(){console.log("Quiz finished!")}}},ot={class:"c-quiz"},st={class:"min-h-[320px] md:min-h-[475px] w-full flex flex-col bg-white p-4 md:p-[32px]"},rt={class:"flex w-full flex-col justify-between"};function ct(n,i,t,u,e,r){const l=p("QuizHeader"),a=p("QuestionsController");return o(),s("div",ot,[c("div",st,[d(l,{questions:e.questions,activeQuestion:e.activeQuestion,onPreviousQuestion:i[0]||(i[0]=_=>e.activeQuestion--),onNextQuestion:i[1]||(i[1]=_=>r.nextQuestion())},null,8,["questions","activeQuestion"]),d(y,{mode:"out-in"},{default:b(()=>{var _,x,q;return[(o(),s("div",{key:e.questions[e.activeQuestion].id,class:"flex flex-grow pt-2 md:pt-[32px]"},[c("div",rt,[(o(),s("h3",{key:e.questions[e.activeQuestion].question,class:f(["font-semibold md:text-9 mb-4",{"md:mb-4":(_=e.questions[e.activeQuestion])==null?void 0:_.subtitle,"md:mb-12":!((x=e.questions[e.activeQuestion])!=null&&x.subtitle)}])},m(e.questions[e.activeQuestion].question),3)),e.questions[e.activeQuestion].subtitle?(o(),s("p",{key:e.questions[e.activeQuestion].subtitle,class:"color-primary opacity-30 font-medium mb-4"},m((q=e.questions[e.activeQuestion])==null?void 0:q.subtitle),1)):Q("",!0),d(a,{question:e.questions[e.activeQuestion]},null,8,["question"])])]))]}),_:1})])])}const lt=g(nt,[["render",ct]]);export{lt as default};
//# sourceMappingURL=QuizComponent.260d10f7.js.map
