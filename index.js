const notation = () => {
  const value1 = prompt("Введите первое число")
  if(isNaN(+value1) || value1 === '' || value1 === null) {
    console.log("Некорректный ввод!")
    return
  }

  const value2 = prompt("Введите второе число")
  if(isNaN(+value2) || value2 === '' || value2 === null || +value2 > 36 || +value2 < 2) {
    console.log("Некорректный ввод!")
    return
  }

  console.log(parseInt(value1, +value2))
}

notation()