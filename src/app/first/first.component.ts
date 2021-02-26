import { Component, OnInit } from '@angular/core';
import { Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  template: `<h1>First Component</h1>`,
})
export class FirstComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
