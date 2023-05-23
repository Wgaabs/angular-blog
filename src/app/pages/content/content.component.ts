import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent{
  photoCover:string = "https://cdn-icons-png.flaticon.com/512/38/38401.png"
  contentTitle:string = "Meu github"
  contentDescription:string = ""
}
