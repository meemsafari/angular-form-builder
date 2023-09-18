import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
    selector: 'app-confirm-modal',
    templateUrl: './confirm-modal.component.html'
})

export class ConfirmModalComponent {
    @ViewChild('confirmModalOpener', {static: true}) public confirmModalOpener?: ElementRef;
    @ViewChild('confirmModalCloser', {static: true}) public confirmModalCloser?: ElementRef;

    @Input() elementId?: string;
    @Output() public confirm = new EventEmitter();

    item: any = null;

    public confirmOpenModal() {

        this.confirmModalOpener?.nativeElement.click();

    }

    public confirmCloseModal() {

        this.confirmModalCloser?.nativeElement.click();

    }

    public confirmAction() {

        this.confirm.emit(this.item);
        this.confirmCloseModal();

    }
}
