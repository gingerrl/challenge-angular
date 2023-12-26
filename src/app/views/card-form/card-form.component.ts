import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardFormService } from '../../services/card-form.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {
  // public form!: FormGroup
  form: FormGroup = this.fb.group({
    id: ['',
      [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10)
      ]
    ],
    name: ['',
      [Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100)]
    ],
    description: ['',
      [Validators.required,
      Validators.minLength(10),
      Validators.maxLength(200)]

    ],
    logo: ['',
      [Validators.required
      ]],
    date_release: ['',
      [Validators.required
      ]],
    date_revision: ['',
      [Validators.required
      ]]
  })



  constructor(
    private fb: FormBuilder,
    private cardForm: CardFormService,
    private router: Router,
  ) { }


  ngOnInit(): void {

  }
  async handleSend() {
    const showResult = await this.cardForm.verificationProduct(this.form.controls['id'].value)
    if (!showResult) {
      this.cardForm.addProduct(this.form.value)
    }
  }

  handleRestart() {
    this.form.reset('')
    this.router.navigate(['/home'])
  }
}
