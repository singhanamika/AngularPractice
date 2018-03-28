import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyspipe'
})
export class KeyspipePipe implements PipeTransform {

 //transform(value: any, args: string[] = null): any {
     // return Object.keys(value);//.map(key => Object.assign({ key }, value[key]));
	 // return keyof value; 
	  //console.log (Object.keys(value));
	 // let keys = [];
   // for (let key in value) {
   //   keys.push(key);
    //}
  //  return keys;
  //  }
 /* transform(objArr) {
    console.log('obj array looks like this: ', objArr);
    let mappingObject = {};
    objArr.forEach((obj) => {
      for (let key in obj) {
        let value = obj[key];
        mappingObject[key] = value;
      }
    })
    return mappingObject;
  }*/
transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push(key);
    }
    return keys;
  }
}
