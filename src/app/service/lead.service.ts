import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Lead {
  name: string;
  email: string;
  whatsapp: string;
  business_type: string;
}

@Injectable({
  providedIn: 'root'
})
export class LeadService {
  private https = inject(HttpClient);

  createLead(lead: Lead): Observable<any> {
    console.log(`${environment.apiUrl}/leads`)
    return this.https.post<any>(`${environment.apiUrl}/leads`, lead);
  }

  listLead(): Observable<any> {
    return this.https.get(`${environment.apiUrl}/leads`);
  }
}
