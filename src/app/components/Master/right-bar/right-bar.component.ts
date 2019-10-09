import { Component, OnInit } from '@angular/core';
import { BlogMaster } from 'src/app/models/master/BlogMaster';
import { BlogService } from 'src/app/services/master/blog/blog.service';

@Component({
  selector: 'app-right-bar',
  templateUrl: './right-bar.component.html',
  styleUrls: ['./right-bar.component.scss']
})
export class RightBarComponent implements OnInit {
  blogs: BlogMaster[];
  constructor(private service: BlogService) { }

  ngOnInit() {
    this.service.GetRecentPost().subscribe(post => {
      this.blogs = post;
      console.log(this.blogs);
    });
  }

}
