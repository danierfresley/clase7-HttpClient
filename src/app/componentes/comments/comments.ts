import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../servicios/comments';

@Component({
  selector: 'app-comments',
  imports: [],
  templateUrl: './comments.html',
  styleUrl: './comments.css',
})
export class Comments implements OnInit {

  public comentarios: any[] = [];

  constructor(private commentsService: CommentsService) { }

  ngOnInit(): void {
    this.getComments();
  }

  public getComments(): void {
    this.commentsService.getComments().subscribe((data) => {
      console.log(data);
      this.comentarios = data;
    });
  }

}
