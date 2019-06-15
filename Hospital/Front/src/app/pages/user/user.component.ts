import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Rating } from 'src/app/models/rating';
import { Reg_Comments } from 'src/app/models/comments'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any = [{
    _id: '',
    id_department: '',
    doctor: '',
    name: '',
    surname: '',
    login: '',
    password: '',
    experiens: '',
    description: '',
    phone: '',
    email: '',
    floor: '',
    office: '',
    deyOfwork: '',
    rating: ''
  }];

  doctorId: any = '';
  Authorized: boolean = false;
  isVote: boolean = false;
  newNewRating: any;

  comments: any = [];
  newComments: Reg_Comments = {
    _id: '',
    text: '',
    data: '',
    author: '',
    doctor: '',
    replyCommentId: null
  };

  path: String = '';

  commentEditing: any = '';
  commentReplying: any = '';

  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) { 
      
    this.path = location.pathname;

    this.route.params.subscribe(params => {
      this.doctorId = params['uuid'];
    });
  }
  
  editProfile(){
    this.router.navigate(['edit']);
  }

  newRating(){
    
    this.user.rating = this.newNewRating;
    this.http.put('http://localhost:3000/api/user/' + this.doctorId + '/rating', this.user).subscribe((data:Rating) => {
      this.user.rating = data.rating;
      localStorage.setItem(this.user._id, '1');

    });
  }

  sendComment(){
    this.newComments.doctor = this.doctorId
    this.newComments.data = (new Date()).toString();

    let json = localStorage.getItem('user');
    let obj = JSON.parse(json);
    this.newComments.author = obj.id;

    this.http.post('http://localhost:3000/api/coment', this.newComments).subscribe((data:Reg_Comments) => {
      this.newComments = {
        _id: '',
        text: '',
        data: '',
        author: '',
        doctor: '',
        replyCommentId: null
      };
      this.comments.push(data);
    });
  }

  reply(id){
    this.newComments.replyCommentId = id;
    this.sendComment();
    this.commentReplying = '';
  }
  replyComment(id){
    this.commentReplying = id;
  }


  getCommentById (id) {
    const comment = this.comments.find(comment => comment._id === id)
      if(comment) {
       return comment.text
      } else{
        return ''
      }
  }

  doEditComment(text){
    this.http.put('http://localhost:3000/api/coment/' + this.commentEditing, {text}).subscribe((data: Reg_Comments) => {
      let curentComment = this.comments.find(comment => comment._id === this.commentEditing)
      curentComment = data;
      this.commentEditing = '';
    });
  }

  onEditClick(_id){
    this.commentEditing = _id;    
  }
  
  onDeleteClick(id){
    this.http.delete('http://localhost:3000/api/coment/' + id).subscribe((data): any => {
      console.log(data);
      this.comments = this.comments.filter(comment => comment._id !== id)
    });
  }


  ngOnInit() {
    this.http.get('http://localhost:3000/api/user/' + this.doctorId).subscribe((data): any => {
      this.user = data;
    });

    this.http.get('http://localhost:3000/api/coments/doctor/' + this.doctorId).subscribe((data): any => {
      this.comments = data;
    });

    
  }

  ngDoCheck(){
    this.Authorized = !!localStorage.getItem('IsAuthorized');  
    this.isVote = !!localStorage.getItem(this.user._id);    
  }

}
