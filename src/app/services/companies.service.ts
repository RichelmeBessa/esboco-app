import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';


@Injectable({
  providedIn: 'root'
})
export class CompaniesService {


  private baseUrl = 'http://localhost:8080/companies';

  constructor(private http: HttpClient) { }

  fetchedCompanies(): Observable<any> {
    return this.http.get<Company[]>(this.baseUrl);
  }

  getCompany(id: string): Observable<Company> {
    return this.http.get<Company>(`${this.baseUrl}/${id}`);
  }

  addCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(this.baseUrl, company);
  }

  deleteCompany(id: string): Observable<Company> {
    return this.http.delete<Company>(`${this.baseUrl}/${id}`);
  }
}
