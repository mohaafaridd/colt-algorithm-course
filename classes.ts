export class Student {
  private _tardies = 0

  constructor(public firstName: string,public  lastName: string, public year: number) {}
  
  
  public get fullName() : string {
    return `${this.firstName} ${this.lastName}`
  }
  
  
  
  public markLate() {
    this._tardies += 1;
    return `${this.firstName} ${this.lastName} has been late ${this._tardies}`
  }
  

}

const first = new Student('Mohammed', 'Farid', 4)
console.log(first.markLate())
console.log(first.markLate())
console.log(first.markLate())
console.log(first.markLate())
console.log(first.markLate())
