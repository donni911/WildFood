class s{constructor(t,e){this.container=document.querySelector(t),this.table=this.container.querySelector(".js-expand-table"),this.btn=this.container.querySelector(".js-btn-expand"),this.tableBody=this.table.querySelector("tbody"),this.tableRows=this.tableBody.querySelectorAll("tr"),this.isOpen=!1,this.expandableIndex=e,this.setActiveRow(this.tableRows[this.expandableIndex-1]),this.btn.addEventListener("click",this.toggleExpand.bind(this))}setActiveRow(t){this.tableRows.forEach(e=>{e.classList.remove("el-active")}),t.classList.add("el-active")}toggleExpand(){this.isOpen=!this.isOpen,this.isOpen?(this.btn.textContent="HIDE",this.setActiveRow(this.tableRows[this.tableRows.length-1])):(this.setActiveRow(this.tableRows[this.expandableIndex-1]),this.btn.textContent="SHOW MORE"),this.tableRows.forEach(t=>{t.classList.contains("el-hidden")&&t.classList.toggle("active")})}}new s(".js-expand",6);
