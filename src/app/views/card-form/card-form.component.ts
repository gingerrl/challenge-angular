import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardFormService } from '../../services/card-form.service';
import { ListCard } from '../../models/data-list.models';
import { formatDate } from '@angular/common';

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
  handleFormSend() {
    this.handleUpdateProduct()
    this.cardForm.verificationProduct(this.form.controls['id'].value).subscribe((data) => {
      this.handleAddProduct(data)
    });
  }

  handleAddProduct(exist: boolean) {
    if (!exist) {
      this.cardForm.addProduct(this.form.value).subscribe(() => {
        this.router.navigate([`/home`]);
      })
    } else {
      alert('El id ya existe')
    }
  }

  handleUpdateProduct() {
    if (!this.isCreate) {
      this.cardForm.updateProduct(this.form.value).subscribe(() => {
        this.router.navigate([`/home`]);
      })
      return
    }
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
      date_release: formatDate(item.date_release, 'YYYY-MM-dd', 'en', 'UTC'),
      date_revision: formatDate(item.date_revision, 'YYYY-MM-dd', 'en', 'UTC')
    })
  }
  goBack() {
    this.router.navigate(['/home'])
  }
}
