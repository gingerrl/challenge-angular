import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {
  public form!: FormGroup

  constructor(
    private fb: FormBuilder
  ) { }


  ngOnInit(): void {
    this.form = this.fb.group({
      id: [''],
      name: [''],
      description: [''],
      logo: [''],
      date_release: [''],
      date_revision: ['']
    })
  }
}
