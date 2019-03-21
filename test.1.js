var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];
  
  // ?sắp xếp theo value (giá trị)
//   items.sort(function (a, b) {
//     return a.value - b.value;
//   });
  
  // sắp xếp theo name (tên)
  items.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // bỏ qua hoa thường
    var nameB = b.name.toUpperCase(); // bỏ qua hoa thường
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // name trùng nhau
    return 0;
  });