//console.log('DTi.......');
console.log(111);
console.log(222);
console.log(333); console.log(444);  console.log(555);

var a = 100;
let b = 200;
console.log(a+b);


{
    {

    var c = 300;
    let d = 400;
    //console.log(e)
    
    
     }
     console.log(a);
     console.log(b);
     console.log(c);
    // console.log(e); //error
    
     
}
// const (มาตราฐานตัวใหญ่หมด)
const DATA_A1 = 52
const INFO01 = "wow"
const INFO02 = "wooo"
// INFO = "wee" error
console.log(INFO01 + 'aaa' + INFO02)

console.log('SAU\nDTI\t\t2023')
console.log('I LOVE "SAU"')
console.log("I LOVE 'SAU'")
console.log('สวัสดี %s %d' ,INFO01  ,DATA_A1)

{
    {
        const INFO03 = 'wee'
        console.log( INFO03 );

    }
    //console.log( INFO03 ); Error
}
//console.log( INFO03 ); Error
console.log(`Welcome.....`)
let yourname = "สมชาย"
let year = 2000
let age = 15

console.log('สวัสดี'+ yourname + ' คุณเกิดปี' + year + ' อายุ ' + age + 'ปี' + (20*5))
console.log('สวัสดี $(yourname) คุณเกิดปี $(year) อายุ $(age) ปึ $(20*5) ')

//string met
let data = 'southeast Asia University'

console.log(data)
console.log(data.length)
console.log(data.trim())
console.log(data.trim().length)
console.log(data.toUpperCase())
console.log(data.toLowerCase())
console.log(data.substring(10))

let data2 = 'Welcome..To'
console.log(data2.substring(5))
console.log(data2.substring(3, 9))
console.log(data2.repeat(5))
console.log(data2.replace('to', 'to Thailand'))
console.log(data2.replace('e', 'XXX'))
console.log(data2.replaceAll('e', 'XXX'))