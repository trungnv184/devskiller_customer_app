import { Injectable, Pipe } from '@angular/core';
import { Gender} from "../customers/datatypes/gender";

@Pipe({
  name: 'genderFormat'
})

@Injectable()
export class GenderFormat {
  transform(value, args?) {   
    let newValue = "";
 
    switch(value) {
        case Gender.FEMALE:
          newValue = 'Female';
          break;

        case Gender.MALE:
          newValue = 'Male';
          break;

        case Gender.OTHER:
          newValue = 'Other';
          break;

        default :
          newValue = 'Female';
          break;
    }  
 
    return newValue;
  }  
}