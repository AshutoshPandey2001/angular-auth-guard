import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CURD-Templete-driven-form';
  customerName = '';
  billDate = '';
  amount = '';
  billList: any = [];
  editButton = false;

  selectIndex: any;
  constructor() {

  }

  ngOnInit(): void {
  }
  addBill() {
    let bill = {
      customerName: this.customerName,
      billDate: this.billDate,
      amount: this.amount
    }
    this.billList.push(bill);

    console.log('Bills/Invoice Details', this.billList);
    alert("Invoice aadded Successfully");
    this.clear();
  }
  updateBill() {
    this.editButton = false;
    this.billList[this.selectIndex].customerName = this.customerName;
    this.billList[this.selectIndex].billDate = this.billDate;
    this.billList[this.selectIndex].amount = this.amount;
    alert("Invoice Updated Successfully");


    this.clear();
  }
  updateOn(index: any, obj: any) {
    this.editButton = true;
    this.selectIndex = index;
    this.customerName = obj.customerName;
    this.billDate = obj.billDate;
    this.amount = obj.amount;
  }
  onDel(index: any) {

    console.log('Deleted Bill', index)
    this.billList.splice(index, 1);

  }

  clear() {
    this.customerName = '';
    this.billDate = '';
    this.amount = '';

  }
}
