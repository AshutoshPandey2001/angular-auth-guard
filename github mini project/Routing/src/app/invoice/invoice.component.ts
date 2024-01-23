import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  invoiceForm: FormGroup;
  term = '';
  billbutton = false;
  billList: any = [];
  selectedIndex: any;
  selectedObject: any;
  updateop = false;

  constructor(private FormBuilder: FormBuilder) {
    this.invoiceForm = this.FormBuilder.group({
      patName: ['', [Validators.required, Validators.minLength(4)]],
      bilDate: ['', [Validators.required]],
      bilAmount: ['', Validators.required]
    })


  }

  ngOnInit(): void {
  }
  addbill() {
    this.billbutton = true;
    if (this.invoiceForm.valid) {
      this.billList.push(this.invoiceForm.value);
      console.log('Bill / Invoice Details', this.billList)
      alert("Details Added Sussessfully");
      this.clear();
    } else {
      alert("Please enter Valid Details")
    }
  }


  updatebill() {
    this.billbutton = true;
    if (this.invoiceForm.valid) {
      this.updateop = false;
      this.billList[this.selectedIndex].patName = this.invoiceForm.value.patName;
      this.billList[this.selectedIndex].bilDate = this.invoiceForm.value.bilDate;
      this.billList[this.selectedIndex].bilAmount = this.invoiceForm.value.bilAmount;
      alert("Details Updated Successfully")
      this.clear()
    } else {
      alert("Please enter Valid Details")
    }
  }


  billEdit(index: any, obj: any) {
    this.updateop = true;
    this.selectedIndex = index;
    this.invoiceForm.patchValue({
      patName: obj.patName,
      bilDate: obj.bilDate,
      bilAmount: obj.bilAmount
    })
  }

  billDelete(index: any) {

    console.log('Deleted Bill', index)
    this.billList.splice(index, 1)

  }
  get f() {
    return this.invoiceForm.controls
  }
  clear() {
    this.invoiceForm.reset()
  }
}
