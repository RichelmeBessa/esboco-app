import { OnInit, Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Company } from 'src/app/models/company.model';
import { CompaniesService } from 'src/app/services/companies.service';


const ELEMENT_DATA: Company[] = [
  { id: '1', registeredName: 'Apple', tradingName: 'Apple Inc', taxPayerRegistration: 'H', stateSubscription: '' },
  { id: '2', registeredName: 'Kodak', tradingName: 'Eastman Kodak Company', taxPayerRegistration: 'He', stateSubscription: '' },
  { id: '3', registeredName: 'Lithium', tradingName: '6.941', taxPayerRegistration: 'Li', stateSubscription: '' },
  { id: '4', registeredName: 'Beryllium', tradingName: '9.0122', taxPayerRegistration: 'Be', stateSubscription: '' },
  { id: '5', registeredName: 'Boron', tradingName: '0.811', taxPayerRegistration: 'B', stateSubscription: '' },
  { id: '6', registeredName: 'Carbon', tradingName: '12.0107', taxPayerRegistration: 'C', stateSubscription: '' },
  { id: '7', registeredName: 'Nitrogen', tradingName: '14.0067', taxPayerRegistration: 'N', stateSubscription: '' },
  { id: '8', registeredName: 'Oxygen', tradingName: '15.9994', taxPayerRegistration: 'O', stateSubscription: '' },
  { id: '9', registeredName: 'Fluorine', tradingName: '18.9984', taxPayerRegistration: 'F', stateSubscription: '' },
  { id: '10', registeredName: 'Neon', tradingName: '20.1797', taxPayerRegistration: 'Ne', stateSubscription: '' },
];

@Component({
  selector: 'app-companies',
  styleUrls: ['./companies.component.scss'],
  templateUrl: './companies.component.html'
})
export class CompaniesPage implements OnInit {
  displayedColumns: string[] = ['id', 'registeredName', 'tradingName', 'taxPayerRegistration', 'stateSubscription'];
  dataSource:MatTableDataSource<Company> ;
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private companyService: CompaniesService) { }
  
  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.companyService.fetchedCompanies().subscribe(data => {
      console.log(data);
      this.dataSource.data = data;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
}