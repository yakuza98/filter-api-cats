import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient
  ) {
  }

  get(url: string, params?: {[key: string]: string}) {
    return this.http.get(url, {
      headers: {
        'x-api-key': 'live_YZzNArGnU19uo4ElpXryCFbQlenDkxNHViruUd9hy2oYf3ShUZPE22X78hK2P9El'
      },
      params
    })
  }
}
