function highlight(table) {
  let genderCellIndex;
  let statusCellIndex;
  let ageCellIndex;
  for (let td of table.getElementsByTagName('thead').item(0).getElementsByTagName('tr').item(0).getElementsByTagName('td')) {
    if (td.innerText === 'Gender') genderCellIndex = td.cellIndex;
    if (td.innerText === 'Status') statusCellIndex = td.cellIndex;
    if (td.innerText === 'Age') ageCellIndex = td.cellIndex;
  }
  for (let tr of table.getElementsByTagName('tbody').item(0).getElementsByTagName('tr')) {
    for (let td of tr.getElementsByTagName('td')) {

      if (td.cellIndex === statusCellIndex) {
        if (td.hasAttribute('data-available')) {
          let className;
          if ('true' === td.getAttribute('data-available')) {
            className = 'available';
          }
          if ('false' === td.getAttribute('data-available')) {
            className = 'unavailable';
          }
          tr.classList.add(className);
        } else {
          tr.setAttribute('hidden',true);
        }
      }

      if (td.cellIndex === genderCellIndex) {
        if (td.innerText.match('m')) {
          tr.classList.add('male');
        }
        if (td.innerText.match('f')) {
          tr.classList.add('female');
        }
      }

      if (td.cellIndex === ageCellIndex) {
        if ('number' === typeof (td.innerText - 0)) {
          let val = td.innerText - 0;
          if (val < 18) {
            tr.style="text-decoration: line-through";
          }
        }
      }

    }
  }
}
