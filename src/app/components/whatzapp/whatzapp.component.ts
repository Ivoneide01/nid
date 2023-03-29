import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-whatzapp',
  templateUrl: './whatzapp.component.html',
  styleUrls: ['./whatzapp.component.css']
})
export class WhatzappComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
    this.router.navigate(['home'])
  }

}

