import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardListService } from 'src/app/services/card-list.service';
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
  handleclose() {
    this.closeModal.emit()
  }
  async handleConfirm() {
    await this.deleteService.delete(this.item.id)
    this.buttonConfirm.emit()
  }
}
