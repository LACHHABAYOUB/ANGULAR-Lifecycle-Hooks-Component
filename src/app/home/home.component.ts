import { Component, OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewChecked,AfterViewInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewChecked,
AfterViewInit,OnDestroy {



  ngOnInit(): void {
    console.log('ngOnInit')
  }

  ngOnChanges(): void {
    console.log('ngOnChanges')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck')
  }
  
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }
  
  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }

  constructor() {
    console.log('Constructor')
   }


}
