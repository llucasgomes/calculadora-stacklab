let index = 1;

const add = (number) => {
  let numero = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = numero + number;
};

const clean = () => {
  document.getElementById("resultado").innerHTML = "";
};

const back = () => {
  let res = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = res.substring(
    0,
    res.length - 1
  );
};

const calculation = () => {
  let res = document.getElementById("resultado").innerHTML;
  const teste = document.getElementsByClassName("line");

  if (res) {
    if (index <= teste.length) {
      history_calculation(res, index);
      document.getElementById("resultado").innerHTML = eval(res);
      index++;
    } else {
      index = 1;
      history_calculation(res, index);
      document.getElementById("resultado").innerHTML = eval(res);
      index++;
    }
  } else {
    document.getElementById("resultado").innerHTML = "Error";
  }
};

const date_time = () => {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  return `${date} ${time}`;
};

const history_calculation = (res, index) => {
  document.getElementById(`history-${index}`).value = date_time();
  document.getElementById(`calculation-${index}`).value = `${res} = ${eval(
    res
  )}`;
};

let number = 0;


function soma(x) {
 var nome = x
  console.log(nome + 3);
}

soma();
