import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ElementType } from '../common/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-element-setup',
  standalone: true,
  imports: [MatCardModule, ReactiveFormsModule, CommonModule, MatInputModule, MatSelectModule],
  templateUrl: './element-setup.component.html',
  styleUrl: './element-setup.component.less'
})
export class ElementSetupComponent implements OnInit {
  elementId: string = "NONE";
  private routeSub!: Subscription;
  formData: FormGroup;
  elementTypes = Object.values(ElementType);

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.formData = this.formBuilder.group({
      name: [''],
      selectedType: ['']
    })
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.elementId = params['elementId']; // same name as in the route path

      const newName = {
        name: this.elementId
      };

      this.formData.patchValue(newName);

    });

    this.formData.valueChanges.subscribe((formData) => {
      // This code block will execute whenever any form control value changes.
      console.log('Form data changed:', formData);
      // You can perform actions here based on the form data changes.
    });
  }

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe(); // It's good practice to unsubscribe
    }
  }


}