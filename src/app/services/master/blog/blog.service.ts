import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { blogDetailData, recentPostData } from 'src/app/data/data';
import { BlogMaster } from 'src/app/models/master/BlogMaster';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  GetById(id: string): Observable<BlogMaster> {
    return of(blogDetailData);
  }

  GetRecentPost(): Observable<BlogMaster[]> {
    return of(recentPostData);
  }
}
