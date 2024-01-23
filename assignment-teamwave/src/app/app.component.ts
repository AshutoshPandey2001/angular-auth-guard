import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment-teamwave';
  dataList:any=[];
  baseUrl="https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=activity&site=stackoverflow"

  constructor(private httpClient:HttpClient
    ){

  }
  ngOnInit(): void {
this.getallData()
  }
  getallData(){
    this.httpClient.get(this.baseUrl).subscribe(
      (response:any)=>{
        console.log(response)
        this.dataList = response['items']
      },
      (error)=>{
        console.log('error', error)


      }
    )
  }
}
