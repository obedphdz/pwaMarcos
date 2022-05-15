import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  videos=[
    {
      video:'9jZ01i92JI8'
    },
    {
      video:'atOgj_ZaO7M'
    },
    {
      video:'mv7ZLLRQkYg'
    },
    {
      video:'t2pooIWrbVk'
    },
    {
      video:'Zp5EqO6gPII'
    },
    {
      video:'Y6HKBuRxVPM'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
  }

}
