import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardListService } from '../../services/card-list.service';
import { ListCard } from '../../models/data-list.models';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent {
  @Input() item: ListCard = {
    id: '',
    name: '',
    description: '',
    logo: '',
    date_release: '',
    date_revision: '',
  }
  @Output() closeModal = new EventEmitter()
  @Output() buttonConfirm = new EventEmitter()


  constructor(
    private deleteService: CardListService
  ) {

  }
  onButtonCancel(): void {
    this.closeModal.emit()
  }
  onButtonConfirm(): void {
    this.deleteService.delete(this.item.id).subscribe(() => {
      this.buttonConfirm.emit()
    })

  }
}
