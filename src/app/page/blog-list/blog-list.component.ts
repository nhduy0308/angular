import { Component, OnInit } from '@angular/core';
import { Pagination } from 'src/app/models/pagination';
import { BlogMaster } from 'src/app/models/master/BlogMaster';
import { BlogListService } from 'src/app/services/master/blog-list.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogs: BlogMaster[];
  paging: Pagination[] = [];
  currentPage = 1;
  totalPage: number;
  constructor(private service: BlogListService) { }


  private GeneratePaging(totalRecord: number, pageSize: number, itemPaging: number): void {
    this.totalPage = totalRecord / pageSize;
    if (totalRecord % pageSize !== 0) {
      this.totalPage += 1;
    }
    for (let i = 1; i <= this.totalPage; i++) {
      // tslint:disable-next-line:prefer-const
      let page: Pagination = new Pagination();
      page.active = i === this.currentPage;
      page.text = i;
      if (Math.abs(this.currentPage - i) <= itemPaging) {
        this.paging.push(page);
      }
    }
  }


  ngOnInit() {
    this.service.GetList().subscribe(blog => {
      this.blogs = blog;
      this.currentPage = 4;
      this.GeneratePaging(100, 10, 3);
    });
  }

}
