import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Customer } from "../Models/Customer";

@Injectable()
export class customerService {
  constructor(private _http: HttpClient) {
    console.log("hi" + _http);
  }
  CUSTOMERS: Customer[] =[
      { Id: 1, First_Name: "Sara", Last_Name: "Cohen", Address: "Netivot Shalom 24", Phone: "0533182155", Email: "s0556774746r@gmail.com" },
      { Id: 2, First_Name: "David", Last_Name: "Levi", Address: "HaYarkon 32", Phone: "0542213456", Email: "davidl@gmail.com" },
      { Id: 3, First_Name: "Rachel", Last_Name: "Katz", Address: "Ben Yehuda 56", Phone: "0556677889", Email: "rachelk@gmail.com" },
      { Id: 4, First_Name: "Moshe", Last_Name: "Mizrachi", Address: "Dizengoff 104", Phone: "0523344556", Email: "moshem@gmail.com" },
      { Id: 5, First_Name: "Esther", Last_Name: "Ben David", Address: "Herzl 12", Phone: "0546677889", Email: "estherbd@gmail.com" },
      { Id: 6, First_Name: "Yossi", Last_Name: "Goldstein", Address: "Rothschild 76", Phone: "0532233445", Email: "yossig@gmail.com" },
      { Id: 7, First_Name: "Miriam", Last_Name: "Shapira", Address: "King George 19", Phone: "0526677889", Email: "miriams@gmail.com" },
      { Id: 8, First_Name: "Itzik", Last_Name: "Peretz", Address: "Allenby 45", Phone: "0503344556", Email: "itzikp@gmail.com" },
      { Id: 9, First_Name: "Yael", Last_Name: "Abramov", Address: "Ben Gurion 78", Phone: "0542233445", Email: "yaela@gmail.com" },
      { Id: 10, First_Name: "Haim", Last_Name: "Weinberg", Address: "Jabotinsky 23", Phone: "0536677889", Email: "haimw@gmail.com" },
      { Id: 11, First_Name: "Leah", Last_Name: "Rosen", Address: "Aza 34", Phone: "0541122334", Email: "lear@gmail.com" },
      { Id: 12, First_Name: "Eli", Last_Name: "Baruch", Address: "Frishman 12", Phone: "0524455667", Email: "elib@gmail.com" },
      { Id: 13, First_Name: "Shira", Last_Name: "Meir", Address: "Trumpeldor 9", Phone: "0545566778", Email: "shiram@gmail.com" },
      { Id: 14, First_Name: "Nadav", Last_Name: "Solomon", Address: "Arlozorov 54", Phone: "0506677889", Email: "nadavs@gmail.com" },
      { Id: 15, First_Name: "Yaakov", Last_Name: "Roth", Address: "Bialik 47", Phone: "0537788990", Email: "yaakovr@gmail.com" },
      { Id: 16, First_Name: "Tamar", Last_Name: "Eliyahu", Address: "Pinsker 31", Phone: "0528899001", Email: "tamare@gmail.com" },
      { Id: 17, First_Name: "Gila", Last_Name: "Avraham", Address: "Shenkin 2", Phone: "0549911223", Email: "gilaa@gmail.com" },
      { Id: 18, First_Name: "Daniel", Last_Name: "Simon", Address: "Bugrashov 3", Phone: "0501122334", Email: "daniels@gmail.com" },
      { Id: 19, First_Name: "Noa", Last_Name: "Aharoni", Address: "Bograshov 5", Phone: "0532233445", Email: "noaa@gmail.com" },
      { Id: 20, First_Name: "Oren", Last_Name: "Levin", Address: "Bar Ilan 10", Phone: "0543344556", Email: "orenl@gmail.com" },
      { Id: 21, First_Name: "Orly", Last_Name: "Azoulay", Address: "Gordon 23", Phone: "0524455667", Email: "orlya@gmail.com" },
      { Id: 22, First_Name: "Shmuel", Last_Name: "Kaplan", Address: "Trumpeldor 15", Phone: "0505566778", Email: "shmuelk@gmail.com" },
      { Id: 23, First_Name: "Alon", Last_Name: "Yosef", Address: "Rashi 8", Phone: "0536677889", Email: "alony@gmail.com" },
      { Id: 24, First_Name: "Dalia", Last_Name: "Malkin", Address: "Rambam 1", Phone: "0547788990", Email: "daliam@gmail.com" },
      { Id: 25, First_Name: "Ronen", Last_Name: "Cohen", Address: "Haneviim 19", Phone: "0528899001", Email: "ronenc@gmail.com" },
      { Id: 26, First_Name: "Sigal", Last_Name: "Birnbaum", Address: "Herzl 100", Phone: "0549911223", Email: "sigalb@gmail.com" },
      { Id: 27, First_Name: "Yoav", Last_Name: "Dahan", Address: "Frishman 11", Phone: "0501122334", Email: "yoavd@gmail.com" },
      { Id: 28, First_Name: "Tal", Last_Name: "Koren", Address: "Allenby 60", Phone: "0532233445", Email: "talk@gmail.com" },
      { Id: 29, First_Name: "Tzipi", Last_Name: "Hazan", Address: "Pinsker 22", Phone: "0543344556", Email: "tzipih@gmail.com" },
      { Id: 30, First_Name: "Eran", Last_Name: "Shalom", Address: "Dizengoff 101", Phone: "0524455667", Email: "erans@gmail.com" },
      { Id: 31, First_Name: "Yael", Last_Name: "Gavriel", Address: "HaYarkon 80", Phone: "0505566778", Email: "yaelg@gmail.com" },
      { Id: 32, First_Name: "Sharon", Last_Name: "Malka", Address: "Herzl 24", Phone: "0536677889", Email: "sharonm@gmail.com" },
      { Id: 33, First_Name: "Rami", Last_Name: "Weiss", Address: "King George 50", Phone: "0547788990", Email: "ramiw@gmail.com" },
      { Id: 34, First_Name: "Tova", Last_Name: "Baron", Address: "Ben Gurion 60", Phone: "0528899001", Email: "tovab@gmail.com" },
      { Id: 35, First_Name: "Avi", Last_Name: "Shwartz", Address: "Allenby 70", Phone: "0549911223", Email: "avish@gmail.com" },
      { Id: 36, First_Name: "Meirav", Last_Name: "Nissan", Address: "Ben Yehuda 90", Phone: "0501122334", Email: "meiravn@gmail.com" },
      { Id: 37, First_Name: "Noam", Last_Name: "Barak", Address: "Rothschild 88", Phone: "0532233445", Email: "noamb@gmail.com" },
      { Id: 38, First_Name: "Elad", Last_Name: "Zilberman", Address: "HaYarkon 22", Phone: "0543344556", Email: "eladz@gmail.com" },
      { Id: 39, First_Name: "Neta", Last_Name: "Carmel", Address: "Dizengoff 66", Phone: "0524455667", Email: "netac@gmail.com" },
      { Id: 40, First_Name: "Shani", Last_Name: "Paz", Address: "Jabotinsky 34", Phone: "0505566778", Email: "shanip@gmail.com" },
      { Id: 41, First_Name: "Gilad", Last_Name: "Eitan", Address: "Frishman 4", Phone: "0536677889", Email: "gilade@gmail.com" },
      { Id: 42, First_Name: "Or", Last_Name: "Levy", Address: "King George 9", Phone: "0547788990", Email: "orl@gmail.com" },    
    ];
    
    
  getCustomersFromServer = (): Observable<Customer[]> => {
    let list = this._http.get<Customer[]>("api/Customers");
    console.log(list);
    return list;
  }
  // postStudent = (s: ICustomer): Observable<ICustomer[]> => {
  //   console.log("in posttttttttttttttttttttttt");
  //   return this._http.post<ICustomer[]>('api/Customer/new', s);
  // }
  getAllCustomers = (): Customer[] => {
    return this.CUSTOMERS;
  }
  addCustomer(customer: Customer): void {
    this.CUSTOMERS.push(customer);
  }

  //שימוש בפונקציה בקומפוננטה:
  //THIS.Apiservice.postSrudents(data).subscribe(res=>{console.log('response from server',res);},error=>{console.error('Error',error);});
}
