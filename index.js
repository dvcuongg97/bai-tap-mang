// ----------------
let numArr = [];
function themSo() {
  var number = document.getElementById("input-arr").value * 1;
  numArr.push(number);
  document.getElementById("output-array").innerHTML = numArr;
}
// tổng số dương
function tongSoDuong() {
  var tongSoDuong = 0;
  numArr.forEach(function (item) {
    if (item > 0) {
      tongSoDuong += item;
    }
  });
  document.getElementById(
    "output-1"
  ).innerHTML = ` Tổng các số dương : ${tongSoDuong}`;
}
// đếm số dương
function demSoDuong() {
  var soDuong = 0;
  numArr.forEach(function (item) {
    if (item > 0) {
      soDuong++;
    }
  });
  document.getElementById(
    "output-2"
  ).innerHTML = `Số dương trong mảng : ${soDuong}`;
}
// tìm số nhỏ nhất
function soNhoNhat() {
  var soNhoNhat = numArr[0];
  for (var i = 0; i < numArr.length; i++) {
    if (numArr[i] < soNhoNhat) {
      soNhoNhat = numArr[i];
    }
  }
  document.getElementById(
    "output-3"
  ).innerHTML = `Số nhỏ nhất trong mảng ${soNhoNhat}`;
}
// tìm số dương nhỏ nhất
function soDuongNhoNhat() {
  var soDuongNhoNhat = numArr[0];
  for (var i = 0; i < numArr.length; i++) {
    if (numArr[i] > 0 && numArr[i] < soDuongNhoNhat) {
      soDuongNhoNhat = numArr[i];
    }
  }
  document.getElementById(
    "output-4"
  ).innerHTML = `Số dương nhỏ nhất trong mảng : ${soDuongNhoNhat}`;
}
// tìm số chẵn cuối cùng
function soChanCuoiCung() {
  var arrSoChan = [];
  var soChanCuoiCung = 0;
  numArr.forEach(function (item) {
    if (item % 2 == 0) {
      arrSoChan.push(item);
    }
    soChanCuoiCung = arrSoChan[arrSoChan.length - 1];
  });
  document.getElementById(
    "output-5"
  ).innerHTML = `Số chẵn cuối cùng trong mảng : ${soChanCuoiCung}`;
}
// đổi chỗ
function doiViTRi() {
  var vitri1 = document.getElementById("vitri-1").value * 1;
  var vitri2 = document.getElementById("vitri-2").value * 1;
  var vitri1_value = numArr[vitri1];
  var vitri2_value = numArr[vitri2];
  var newArr = [];
  newArr = numArr;
  newArr[vitri1] = vitri2_value;
  newArr[vitri2] = vitri1_value;
  document.getElementById(
    "output-6"
  ).innerHTML = `Mảng sau khi đổi vị trí : ${newArr}`;
}
// từ bé đến lớn

function tuBeDenLon() {
  var sortedArr = numArr;
  sortedArr.sort(function (a, b) {
    return a - b;
  });
  document.getElementById(
    "output-7"
  ).innerHTML = `Mảng được sắp xếp tăng dần : ${sortedArr}`;
}
// tìm số nguyên tố đầu tiên
// hàm check số nguyên tố
function checkPrime(number) {
  if (number <= 1) {
    return false;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        return false;
      }
    }
    return true;
  }
}
/*/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
// let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log("🚀 ~ file: index.js:162 ~ array:", array);
// let ketQua = 0;
// for (var i = 0; i < array.length; i++) {
//   if (checkPrime(array[i]) == true) {
//     ketQua = array[i];
//     break;
//   }
// }
// ketQua;
// console.log("🚀 ~ file: index.js:170 ~ ketQua:", ketQua);
/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
// onlick
function soNguyenToDauTien() {
  var firstmatch = 0;
  for (var i = 0; i < numArr.length; i++) {
    if (checkPrime(numArr[i]) == true) {
      firstmatch = numArr[i];
      //   firstmatch;
      document.getElementById(
        "output-8"
      ).innerHTML = `Số nguyên tố đầu tiên trong mảng : ${firstmatch}`;
      break;
    } else {
      document.getElementById("output-8").innerHTML = `NOT FOUND`;
    }
  }
  //   document.getElementById(
  //     "output-8"
  //   ).innerHTML = `Số nguyên tố đầu tiên trong mảng : ${firstmatch}`;
}
// đếm số nguyên
var secondArr = [];
function themSoNguyen() {
  var numb = document.getElementById("input-them-so-nguyen").value * 1;
  secondArr.push(numb);
  document.getElementById("output-them-so-nguyen").innerHTML = secondArr;
}
function demSoNguyen() {
  var result = 0;
  secondArr.forEach(function (item) {
    if (Number.isInteger(item) == true) {
      result++;
    }
  });
  document.getElementById(
    "output-9"
  ).innerHTML = `Số lượng số nguyên trong mảng là ${result}`;
}
// so sánh số lượng số dương và số lượng số âm
function soSanh() {
  var slDuong = 0;
  var slAm = 0;
  for (var i = 0; i < numArr.length; i++) {
    if (numArr[i] > 0 && numArr[i] !== 0) {
      slDuong++;
    }
    if (numArr[i] < 0 && numArr[i] !== 0) {
      slAm++;
    }
  }
  document.getElementById(
    "output-10-1"
  ).innerHTML = `Số dương : ${slDuong} <br> Số âm : ${slAm}`;
  if (slDuong > slAm) {
    document.getElementById(
      "output-10"
    ).innerHTML = `<i class="fa fa-hand-point-right"></i> Số dương > Số Âm`;
  } else if (slAm > slDuong) {
    document.getElementById(
      "output-10"
    ).innerHTML = `<i class="fa fa-hand-point-right"></i> Số âm > Số dương`;
  } else {
    document.getElementById(
      "output-10"
    ).innerHTML = `<i class="fa fa-hand-point-right"></i> Số dương = Số âm`;
  }
}
