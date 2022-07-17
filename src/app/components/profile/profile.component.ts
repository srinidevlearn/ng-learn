import { Component, OnInit } from '@angular/core';
import { IProfile } from 'src/app/interfaces/profile.interface';
import { profile } from 'src/app/mock/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profileURL =
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';

  profileInfo: IProfile;

  gender: 'M' | 'F' = 'F';

  constructor() {
    this.profileInfo = profile;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.gender = 'M';
      setTimeout(() => {
        this.gender = 'F';
      }, 5 * 1000);
    }, 5 * 1000);
  }
}
