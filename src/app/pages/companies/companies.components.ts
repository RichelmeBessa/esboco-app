import { OnInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Company } from 'src/app/models/company.model';
import { CompaniesService } from 'src/app/services/companies.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorMessageComponent } from 'src/app/components/error-message.component';



@Component({
  selector: 'app-companies',
  styleUrls: ['./companies.component.scss'],
  templateUrl: './companies.component.html'
})
export class CompaniesPage implements OnInit {
  displayedColumns: string[] = [
    'id', 'registeredName', 'tradingName', 'taxPayerRegistration', 'stateSubscription', 'actions'
  ];
  dataSource: MatTableDataSource<Company>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(
    private companyService: CompaniesService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.companyService.fetchedCompanies().subscribe(data => {
      console.log(data);
      this.dataSource.data = data;
    }, err => {
      this.dialog.open(ErrorMessageComponent, {
        width: '300px',
        data: {
          title: 'Falha ao se comunicar com o servidor!',
          cause: err.message
        }
      });
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteCompany(id: string) {
    this.companyService.deleteCompany(id).subscribe(response => {
      this.dataSource.data = this.dataSource.data.filter(company => {
        return company.id !== response.id;
      });
    });
  }

}