export class User {

    name: string;
    firstName: string;
    age: number;
    quote: string;
    photo: string;
    showUserAge : boolean;
  
    constructor(name : string, firstName : string, age : number,quote : string, photo : string, showUserAge : boolean) {
      this.name = name;
      this.firstName = firstName;
      this.age = age;
      this.quote = quote;
      this.photo = photo;
      this.showUserAge = showUserAge;
    }

    hiddenAge(){
        this.showUserAge = !this.showUserAge;
    }
  }