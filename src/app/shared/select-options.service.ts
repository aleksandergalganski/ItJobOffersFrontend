import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SelectOptionsService {
  experienceLevels = ['Intern', 'Junior', 'Mid', 'Senior'];
  mustHave = [
    'Java',
    'JavaScript',
    'C#',
    'C++',
    'MongoDB',
    'Erlang',
    'Prolog',
    'Eclipse',
    'SCSS',
    'NodeJs',
  ];
  niceToHave = [
    'Java',
    'JavaScript',
    'C#',
    'C++',
    'MongoDB',
    'Erlang',
    'Prolog',
    'Eclipse',
    'SCSS',
    'NodeJs',
  ];
  category = ['Frontend', 'Backend', 'FullStack', 'DevOps', 'Testing'];
}
