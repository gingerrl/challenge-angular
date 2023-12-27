import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardFormService } from '../../services/card-form.service';
import { ListCard } from '../../models/data-list.models';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {
  isCreate = true;
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
  ) {
    const data = this.router.getCurrentNavigation()?.extras.state
    if (data) {
      this.isCreate = false
      this.handleItem(data['item'])
    }
  }

  ngOnInit(): void {
  }
  async handleSend() {
    if (!this.isCreate) {
     await this.cardForm.updateProduct(this.form.value)
      this.router.navigate([`/home`])
      return
    }
    const showResult = await this.cardForm.verificationProduct(this.form.controls['id'].value)
    if (!showResult) {
     await this.cardForm.addProduct(this.form.value)
    } else {
      alert('El id ya existe')
    }
    this.router.navigate([`/home`])

  }

  handleRestart() {
    if (!this.isCreate) {
      this.form.patchValue({
        name: '',
        description: '',
        logo: '',
        date_release: '',
        date_revision: ''
      })
    } else {
      this.form.reset('')

    }
  }

  handleItem(item: ListCard) {
    this.form.setValue({
      id: item.id,
      name: item.name,
      description: item.description,
      logo: item.logo,
      date_release: item.date_release,
      date_revision: item.date_revision
    })
  }
  handleBack() {
    this.router.navigate(['/home'])
  }
}
