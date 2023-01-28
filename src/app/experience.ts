import { Pipe, PipeTransform } from '@angular/core';  
@Pipe({name: 'dateConvert'}) 

export class DateConvertPipe implements PipeTransform { 
    transform(olddate,newDate): any { 
        var date = new Date();
        let obj = olddate.split('-');
        let objnew = newDate.split('-');
        let yearsExp = (Number(objnew[0])-Number(obj[0]));
        let monthsExp = 0;
        let oldmonth = Number(obj[1])
        let newMonth = Number(objnew[1])
        if(oldmonth>newMonth){
          monthsExp = 12 + (newMonth-oldmonth)
          yearsExp = yearsExp - 1;
        }else{
          monthsExp = newMonth-oldmonth;
        }
        let totalExp = yearsExp+'.'+monthsExp;
        return totalExp;
     } 
} 