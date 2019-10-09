import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/master/blog/blog.service';
import { BlogMaster } from 'src/app/models/master/BlogMaster';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  blogDetail: BlogMaster;
  constructor(private service: BlogService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.service.GetById(param.get('id')).subscribe(blog => this.blogDetail = blog);
    });
  }

}
