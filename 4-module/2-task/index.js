function makeDiagonalRed(table) {
  for (let rowElement of table.rows) {
    for (let cellElement of rowElement.cells) {
      if (rowElement.rowIndex === cellElement.cellIndex) {
        cellElement.style.backgroundColor = 'red';
      }
    }
  }
}
