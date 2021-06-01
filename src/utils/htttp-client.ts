import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import axios, { AxiosRequestConfig } from 'axios'

export class HttpClient {
    
    public static get<T>(url: string, config?: AxiosRequestConfig): Observable<T> {
        return from<T>(axios.get(url, config)).pipe(
            map((response: any) => {
                if (response.status === 200) {
                    return response.data;
                } else {
                    console.log(response);
                }
            })
        )
    }
    
    public static post<T>(url: string, data?: any, config?: AxiosRequestConfig): Observable<T> {
        return from<T>(axios.post(url, data, config)).pipe(
            map((response: any) => {
                if (response.status === 200) {
                    return response.data;
                } else {
                    console.log(response);
                }
            })
        )
    }
    
    public static put<T>(url: string, data?: any, config?: AxiosRequestConfig): Observable<T> {
        return from<T>(axios.put(url, data, config)).pipe(
            map((response: any) => {
                if (response.status === 200) {
                    return response.data;
                } else {
                    console.log(response);
                }
            })
        )
    }
    
    public static delete<T>(url: string, config?: AxiosRequestConfig): Observable<T> {
        return from<T>(axios.delete(url, config)).pipe(
            map((response: any) => {
                if (response.status === 200) {
                    return response.data;
                } else {
                    console.log(response);
                }
            })
        )
    }

}