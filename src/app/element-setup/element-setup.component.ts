import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription, debounceTime, distinctUntilChanged, skip, skipWhile } from 'rxjs';
import { ElementSetup, ElementType } from '../common/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { ChangeServiceService } from '../../services/change-service.service';

@Component({
  selector: 'app-element-setup',
  standalone: true,
  imports: [MatCardModule, ReactiveFormsModule, CommonModule, MatInputModule, MatSelectModule],
  templateUrl: './element-setup.component.html',
  styleUrl: './element-setup.component.less'
})
export class ElementSetupComponent implements OnInit, AfterContentInit {
  elementId: string = "NONE";
  private routeSub!: Subscription;
  formData: FormGroup;
  elementTypes = Object.values(ElementType);

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private changeService: ChangeServiceService) {

    this.formData = this.formBuilder.group({
      id: [''],
      name: [''],
      selectedType: ['']
    })
  }

  ngAfterContentInit(): void {
    this.formData.valueChanges.pipe(
      skipWhile(() => this.formData.disabled),
      debounceTime(500), // Wait for 500ms pause in events
      distinctUntilChanged())// Only if the value has changed
      .subscribe((formData: ElementSetup) => {
        // This code block will execute whenever any form control value changes.
        console.log('Form data changed:', formData);
        // You can perform actions here based on the form data changes.

        this.changeService.updateElement(formData);
      });
  }

  ngOnInit() {

    this.formData.disable();

    this.routeSub = this.route.params.subscribe(params => {

      this.elementId = params['elementId']; // same name as in the route path

      const setup = this.changeService.getElementSetup(this.elementId);

      this.formData.setValue(setup);

      // TODO this doesnt work as expecte
      this.formData.enable();
    });
  }


  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe(); // It's good practice to unsubscribe
    }
  }


}