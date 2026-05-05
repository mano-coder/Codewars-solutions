function zero(fun) {
  if (fun) {
    return fun(0);
  }
  return 0;
}
function one(fun) {
  if (fun) {
    return fun(1);
  }
  return 1;
}
function two(fun) {
  if (fun) {
    return fun(2);
  }
  return 2;
}
function three(fun) {
  if (fun) {
    return fun(3);
  }
  return 3;
}
function four(fun) {
  if (fun) {
    return fun(4);
  }
  return 4;
}
function five(fun) {
  if (fun) {
    return fun(5);
  }
  return 5;
}
function six(fun) {
  if (fun) {
    return fun(6);
  }
  return 6;
}
function seven(fun) {
  if (fun) {
    return fun(7);
  }
  return 7;
}
function eight(fun) {
  if (fun) {
    return fun(8);
  }
  return 8;
}
function nine(fun) {
  if (fun) {
    return fun(9);
  }
  return 9;
}

function plus(num) {
  return (left) => left + num;
}
function minus(num) {
  return (left) => left - num;
}
function times(num) {
  return (left) => left * num;
}
function dividedBy(num) {
  return (left) => Math.floor(left / num);
}

//console.log(eight(plus(nine(fun)))); // 17
console.log(eight(dividedBy(three())));
