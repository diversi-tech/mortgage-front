import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { ICustomer } from "../Models/ICustomer";

@Injectable()
export class customerService {
  constructor(private _http: HttpClient) {
    console.log("hi" + _http);
  }
  CUSTOMERS: ICustomer[] =[
      { id: 1, first_name: "Sara", last_name: "Cohen", address: "Netivot Shalom 24", phone: "0533182155", email: "s0556774746r@gmail.com" },
      { id: 2, first_name: "David", last_name: "Levi", address: "HaYarkon 32", phone: "0542213456", email: "davidl@gmail.com" },
      { id: 3, first_name: "Rachel", last_name: "Katz", address: "Ben Yehuda 56", phone: "0556677889", email: "rachelk@gmail.com" },
      { id: 4, first_name: "Moshe", last_name: "Mizrachi", address: "Dizengoff 104", phone: "0523344556", email: "moshem@gmail.com" },
      { id: 5, first_name: "Esther", last_name: "Ben David", address: "Herzl 12", phone: "0546677889", email: "estherbd@gmail.com" },
      { id: 6, first_name: "Yossi", last_name: "Goldstein", address: "Rothschild 76", phone: "0532233445", email: "yossig@gmail.com" },
      { id: 7, first_name: "Miriam", last_name: "Shapira", address: "King George 19", phone: "0526677889", email: "miriams@gmail.com" },
      { id: 8, first_name: "Itzik", last_name: "Peretz", address: "Allenby 45", phone: "0503344556", email: "itzikp@gmail.com" },
      { id: 9, first_name: "Yael", last_name: "Abramov", address: "Ben Gurion 78", phone: "0542233445", email: "yaela@gmail.com" },
      { id: 10, first_name: "Haim", last_name: "Weinberg", address: "Jabotinsky 23", phone: "0536677889", email: "haimw@gmail.com" },
      { id: 11, first_name: "Leah", last_name: "Rosen", address: "Aza 34", phone: "0541122334", email: "lear@gmail.com" },
      { id: 12, first_name: "Eli", last_name: "Baruch", address: "Frishman 12", phone: "0524455667", email: "elib@gmail.com" },
      { id: 13, first_name: "Shira", last_name: "Meir", address: "Trumpeldor 9", phone: "0545566778", email: "shiram@gmail.com" },
      { id: 14, first_name: "Nadav", last_name: "Solomon", address: "Arlozorov 54", phone: "0506677889", email: "nadavs@gmail.com" },
      { id: 15, first_name: "Yaakov", last_name: "Roth", address: "Bialik 47", phone: "0537788990", email: "yaakovr@gmail.com" },
      { id: 16, first_name: "Tamar", last_name: "Eliyahu", address: "Pinsker 31", phone: "0528899001", email: "tamare@gmail.com" },
      { id: 17, first_name: "Gila", last_name: "Avraham", address: "Shenkin 2", phone: "0549911223", email: "gilaa@gmail.com" },
      { id: 18, first_name: "Daniel", last_name: "Simon", address: "Bugrashov 3", phone: "0501122334", email: "daniels@gmail.com" },
      { id: 19, first_name: "Noa", last_name: "Aharoni", address: "Bograshov 5", phone: "0532233445", email: "noaa@gmail.com" },
      { id: 20, first_name: "Oren", last_name: "Levin", address: "Bar Ilan 10", phone: "0543344556", email: "orenl@gmail.com" },
      { id: 21, first_name: "Orly", last_name: "Azoulay", address: "Gordon 23", phone: "0524455667", email: "orlya@gmail.com" },
      { id: 22, first_name: "Shmuel", last_name: "Kaplan", address: "Trumpeldor 15", phone: "0505566778", email: "shmuelk@gmail.com" },
      { id: 23, first_name: "Alon", last_name: "Yosef", address: "Rashi 8", phone: "0536677889", email: "alony@gmail.com" },
      { id: 24, first_name: "Dalia", last_name: "Malkin", address: "Rambam 1", phone: "0547788990", email: "daliam@gmail.com" },
      { id: 25, first_name: "Ronen", last_name: "Cohen", address: "Haneviim 19", phone: "0528899001", email: "ronenc@gmail.com" },
      { id: 26, first_name: "Sigal", last_name: "Birnbaum", address: "Herzl 100", phone: "0549911223", email: "sigalb@gmail.com" },
      { id: 27, first_name: "Yoav", last_name: "Dahan", address: "Frishman 11", phone: "0501122334", email: "yoavd@gmail.com" },
      { id: 28, first_name: "Tal", last_name: "Koren", address: "Allenby 60", phone: "0532233445", email: "talk@gmail.com" },
      { id: 29, first_name: "Tzipi", last_name: "Hazan", address: "Pinsker 22", phone: "0543344556", email: "tzipih@gmail.com" },
      { id: 30, first_name: "Eran", last_name: "Shalom", address: "Dizengoff 101", phone: "0524455667", email: "erans@gmail.com" },
      { id: 31, first_name: "Yael", last_name: "Gavriel", address: "HaYarkon 80", phone: "0505566778", email: "yaelg@gmail.com" },
      { id: 32, first_name: "Sharon", last_name: "Malka", address: "Herzl 24", phone: "0536677889", email: "sharonm@gmail.com" },
      { id: 33, first_name: "Rami", last_name: "Weiss", address: "King George 50", phone: "0547788990", email: "ramiw@gmail.com" },
      { id: 34, first_name: "Tova", last_name: "Baron", address: "Ben Gurion 60", phone: "0528899001", email: "tovab@gmail.com" },
      { id: 35, first_name: "Avi", last_name: "Shwartz", address: "Allenby 70", phone: "0549911223", email: "avish@gmail.com" },
      { id: 36, first_name: "Meirav", last_name: "Nissan", address: "Ben Yehuda 90", phone: "0501122334", email: "meiravn@gmail.com" },
      { id: 37, first_name: "Noam", last_name: "Barak", address: "Rothschild 88", phone: "0532233445", email: "noamb@gmail.com" },
      { id: 38, first_name: "Elad", last_name: "Zilberman", address: "HaYarkon 22", phone: "0543344556", email: "eladz@gmail.com" },
      { id: 39, first_name: "Neta", last_name: "Carmel", address: "Dizengoff 66", phone: "0524455667", email: "netac@gmail.com" },
      { id: 40, first_name: "Shani", last_name: "Paz", address: "Jabotinsky 34", phone: "0505566778", email: "shanip@gmail.com" },
      { id: 41, first_name: "Gilad", last_name: "Eitan", address: "Frishman 4", phone: "0536677889", email: "gilade@gmail.com" },
      { id: 42, first_name: "Or", last_name: "Levy", address: "King George 9", phone: "0547788990", email: "orl@gmail.com" },    
    ];
    
    
  getCustomersFromServer = (): Observable<ICustomer[]> => {
    let list = this._http.get<ICustomer[]>("api/Customers");
    console.log(list);
    return list;
  }
  // postStudent = (s: ICustomer): Observable<ICustomer[]> => {
  //   console.log("in posttttttttttttttttttttttt");
  //   return this._http.post<ICustomer[]>('api/Customer/new', s);
  // }
  getAllCustomers = (): ICustomer[] => {
    return this.CUSTOMERS;
  }
  addCustomer(customer: ICustomer): void {
    this.CUSTOMERS.push(customer);
  }
  //שימוש בפונקציה בקומפוננטה:
  //THIS.Apiservice.postSrudents(data).subscribe(res=>{console.log('response from server',res);},error=>{console.error('Error',error);});
}
