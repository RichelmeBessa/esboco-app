import { OnInit, Component } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompaniesService } from 'src/app/services/companies.service';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.page.html',
  styleUrls: ['./company-form.page.scss']
})

export class CompanyFormPage implements OnInit {

  form: FormGroup;
  editMode = false;
  company: Company;
  isLoading = false;

  constructor(
    private companyService: CompaniesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      if (paramMap.has('id')) {
        this.editMode = true;
        this.isLoading = true;

        this.companyService.getCompany(paramMap.get('id')).subscribe(company => {
          this.company = company;
          this.initForm();
          this.isLoading = false;
        });
      } else {
        this.initForm();
      }
    })
  }

  initForm() {
    this.form = new FormGroup({
      registeredName: new FormControl(this.company ? this.company.registeredName : null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      taxPayerRegistration: new FormControl(this.company ? this.company.taxPayerRegistration : null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.pattern('^([0-9][0-9]*)$'), Validators.minLength(14), Validators.maxLength(14)]
      }),
      tradingName: new FormControl(this.company ? this.company.tradingName : null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      stateSubscription: new FormControl(this.company ? this.company.stateSubscription : null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.pattern('^([0-9][0-9]*)$'), Validators.minLength(6), Validators.maxLength(6)]
      })
    })
  }

  addCompany() {
    if (this.form.invalid) {
      return;
    }

    const value: Company = {
      id: this.company ? this.company.id : null,
      ...this.form.value
    };

    this.companyService.addCompany(value).subscribe(() => {
      this.router.navigate(['companies']);
    });
  }
}