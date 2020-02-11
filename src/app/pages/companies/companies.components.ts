import { OnInit, Component } from '@angular/core';


export interface CompaniesList {
  id: number;
  registeredName: String;
  tradingName: String;
  taxPayerRegistration: String;
  stateSubscription: String;
}

const ELEMENT_DATA: CompaniesList[] = [
  { id: 1, registeredName: 'Hydrogen', tradingName: '', taxPayerRegistration: 'H', stateSubscription: '' },
  { id: 2, registeredName: 'Helium', tradingName: '4.0026', taxPayerRegistration: 'He', stateSubscription: '' },
  { id: 3, registeredName: 'Lithium', tradingName: '6.941', taxPayerRegistration: 'Li', stateSubscription: '' },
  { id: 4, registeredName: 'Beryllium', tradingName: '9.0122', taxPayerRegistration: 'Be', stateSubscription: '' },
  { id: 5, registeredName: 'Boron', tradingName: '0.811', taxPayerRegistration: 'B', stateSubscription: '' },
  { id: 6, registeredName: 'Carbon', tradingName: '12.0107', taxPayerRegistration: 'C', stateSubscription: '' },
  { id: 7, registeredName: 'Nitrogen', tradingName: '14.0067', taxPayerRegistration: 'N', stateSubscription: '' },
  { id: 8, registeredName: 'Oxygen', tradingName: '15.9994', taxPayerRegistration: 'O', stateSubscription: '' },
  { id: 9, registeredName: 'Fluorine', tradingName: '18.9984', taxPayerRegistration: 'F', stateSubscription: '' },
  { id: 10, registeredName: 'Neon', tradingName: '20.1797', taxPayerRegistration: 'Ne', stateSubscription: '' },
];

@Component({
  selector: 'app-companies',
  styleUrls: ['./companies.component.scss'],
  templateUrl: './companies.component.html'
})
export class CompaniesPage implements OnInit {
  displayedColumns: string[] = ['id', 'registeredName', 'tradingName', 'taxPayerRegistration', 'stateSubscription'];
  dataSource = ELEMENT_DATA;

  ngOnInit() { }

}