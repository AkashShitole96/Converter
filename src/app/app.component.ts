import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Converter';

  a:number=0;
  c:number=0;
  e:number=0;
  g:number=0;
  i:number=0;
  k:number=0;
  m:number=0;


  flag:boolean=false;
  cgpaflag:boolean=false;
  meterflag:boolean=false;
  hectareflag:boolean=false;
  literflag:boolean=false;
  newtonflag:boolean=false;




  //code of Kg To Pound Canverter
  onpound(){
    this.flag=true;

    this.cgpaflag=false;
    this.meterflag=false;
    this.hectareflag=false;
    this.literflag=false;
    this.newtonflag=false;
  }
  onkgtopound(kgvalue){
    let b=+kgvalue;
    this.a=2.205*b;

  }

  //code of CGPA To Percentage Canverter
  oncgpa(){
    this.cgpaflag=true;

    this.flag=false;
    this.meterflag=false;
    this.hectareflag=false;
    this.literflag=false;
    this.newtonflag=false;
  }

  oncgpatopercentage(cgpavalue){
    let d=+cgpavalue;
    this.c=9.5*d;
  }


  //code of Meter To Centimeter Canverter
  onmetocm(){
    this.meterflag=true;

    this.cgpaflag=false;
    this.flag=false;
    this.hectareflag=false;
    this.literflag=false;
    this.newtonflag=false;
  }

  onmeteretocm(meter){
    let f=+meter;
    this.e=100*f;
  }


  //code of Hectare To squareMeter Canverter
  onhectare(){
    this.hectareflag=true;

    this.flag=false;
    this.meterflag=false;
    this.cgpaflag=false;
    this.literflag=false;
    this.newtonflag=false;
  }

  onhectaretosqmeter(hectare){
    let h=+hectare;
    this.g=10000*h;
  }


  //code of Liter To Gallon Canverter
  onliter(){
    this.literflag=true;

    this.flag=false;
    this.meterflag=false;
    this.cgpaflag=false;
    this.hectareflag=false;
    this.newtonflag=false;
  }

  onlitertogallon(liter){
    let j=+liter;
    this.i=0.264172*j;
    
  }


  //code of Newton To Dynes Canverter
  onnewton(){
    this.newtonflag=true;

    this.flag=false;
    this.meterflag=false;
    this.cgpaflag=false;
    this.hectareflag=false;
    this.literflag=false;
  }

  onnewtontodyen(newton){
    let n=+newton;
    this.m=100000*n;
  }
}
