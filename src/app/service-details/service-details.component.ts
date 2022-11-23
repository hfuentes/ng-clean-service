import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceDetails } from '../domain/service-details';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {
  services = [
    { id: 1, plan: 'HomeClean', unitValue: 3500 },
    { id: 2, plan: 'DepaClean', unitValue: 4500 },
    { id: 3, plan: 'SchoollClean', unitValue: 5500 },
    { id: 4, plan: 'OfficeClean', unitValue: 6500 }
  ]
  service: any
  model = new ServiceDetails(0, new Date())

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // obtiene parametro entrada id del servicio
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service = this.services.find(x => x.id == id);

    // si id no corresponde a nada se redirecciona a lista de servicios
    if (!this.service) this.router.navigate(['services']);
  }

  onSubmit(): void {
    this.router.navigate(['success'])
  }

}
