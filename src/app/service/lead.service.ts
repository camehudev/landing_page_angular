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
  private http = inject(HttpClient);

  // Utiliza a URL de forma dinâmica com base no ambiente (dev ou prod)
  private apiUrl = `${environment.apiUrl}/leads`;

  createLead(lead: Lead): Observable<any> {
    return this.http.post<any>(this.apiUrl, lead);
  }
}
