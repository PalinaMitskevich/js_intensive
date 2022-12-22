const calculation = () => {
  const value1 = prompt("Введите первое значение")
  if(isNaN(+value1) || value1 === '' || value1 === null) {
    console.log("Некорректный ввод!")
    return
  }

  const value2 = prompt("Введите второе значение")
  if(isNaN(+value2) || value2 === '' || value2 === null) {
    console.log("Некорректный ввод!")
    return
  }

  console.log(`Ответ: ${+value1 + +value2}, ${+value1 / +value2}.`)
}

calculation()