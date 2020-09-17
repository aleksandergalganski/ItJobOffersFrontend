import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../companies.service';
import { Company } from '../company.model';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss'],
})
export class CompaniesListComponent implements OnInit {
  cities = [
    'Warszawa',
    'Kraków',
    'Wrocław',
    'Gdańsk',
    'Katowice',
    'Poznan',
    'Łódź',
  ];
  selectedCity: string = '';
  isLoading: boolean = false;
  companies: Company[];

  constructor(private companiesService: CompaniesService) {}

  ngOnInit(): void {
    this.fetchAllCompanies();
  }

  onSelect(city: string) {
    this.selectedCity = city;
    this.isLoading = true;
    this.companiesService.getCompaniesByCity(city).subscribe((res) => {
      this.companies = res.data;
      this.isLoading = false;
    });
  }

  onResetCities() {
    this.fetchAllCompanies();
    this.selectedCity = '';
  }

  fetchAllCompanies() {
    this.isLoading = true;
    this.companiesService.getAllComapnies().subscribe((res) => {
      this.companies = res.data;
      this.isLoading = false;
    });
  }
}
