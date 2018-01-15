 String.prototype.insert = function (index, item) {
     var temp = [];
     for (var i = 0; i < this.length; i++) {
         temp.push(this[i]);
     }
     temp.splice(index, 0, item);
     return temp.join("");
 };

 function isDate(datetime) {
     var reg = /^(\d{4})-(\d{2})-(\d{2})$/;
     var str = datetime;
     var arr = reg.exec(str);
     if (str == "")
         return true;
     if (!reg.test(str) && RegExp.$2 <= 12 && RegExp.$3 <= 31) {
         return false;
     }
     return true;
 }

 function checkIdNum(idnum) {
     var n = 0;
     var s = idnum.replace('x', '0').replace('X', '0');
     n = idnum.substring(0, 17);
     if (idnum.length != 18) {
         return false;
     }
     if (isNaN(n) || n < Math.pow(10, 16) || isNaN(s)) {
         return false;
     }

     var address = "11x22x35x44x53x12x23x36x45x54x13x31x37x46x61x14x32x41x50x62x15x33x42x51x63x21x34x43x52x64x65x71x81x82x91";
     if (address.indexOf(address.slice(0, 2)) == -1) {
         return false;
     }

     var birth = idnum.substr(6, 8).insert(6, '-').insert(4, '-');
     if (!isDate(birth)) {
         return false;
     }

     var arrVarifyCode = ("1,0,x,9,8,7,6,5,4,3,2").split(',');
     var wiArr = ("7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2").split(',');
     var aiArr = idnum.substring(0, 17).split("");

     var sum = 0;
     for (var i = 0; i < 17; i++) {
         sum += parseInt(wiArr[i]) * parseInt(aiArr[i]);

     }

     var y = -1;
     y = sum % 11;
     if (arrVarifyCode[y] != idnum.substr(17, 1).toLowerCase()) {
         return false;

     }
     return true;


 }

