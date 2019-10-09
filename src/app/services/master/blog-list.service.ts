import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { BlogMaster } from 'src/app/models/master/BlogMaster';
import { blogMasterData } from 'src/app/data/data';

@Injectable({
  providedIn: 'root'
})
export class BlogListService {

  constructor() { }

  GetList(): Observable<BlogMaster[]> {
    return of(blogMasterData);
  }
}
