class ExpandableTable {
  constructor(containerSelector, expandableIndex) {
    this.container = containerSelector;
    this.table = this.container.querySelector(".js-expand-table");
    this.btn = this.container.querySelector(".js-btn-expand");
    this.tableBody = this.table.querySelector("tbody");
    this.tableRows = this.tableBody.querySelectorAll("tr");

    this.isOpen = false;
    this.expandableIndex = expandableIndex;

    this.setActiveRow(this.tableRows[this.expandableIndex - 1]);

    this.btn.addEventListener("click", this.toggleExpand.bind(this));
  }

  setActiveRow(row) {
    this.tableRows.forEach((el) => {
      el.classList.remove("el-active");
    });

    row.classList.add("el-active");
  }

  toggleExpand() {
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.btn.textContent = "HIDE";
      this.setActiveRow(this.tableRows[this.tableRows.length - 1]);
    } else {
      this.setActiveRow(this.tableRows[this.expandableIndex - 1]);
      this.btn.textContent = "SHOW MORE";
    }

    this.tableRows.forEach((row) => {
      if (row.classList.contains("el-hidden")) {
        row.classList.toggle("active");
      }
    });
  }
}

const container = document.querySelector(".js-expand");

if (container) {
  const expandableTable = new ExpandableTable(container, 6);
}
