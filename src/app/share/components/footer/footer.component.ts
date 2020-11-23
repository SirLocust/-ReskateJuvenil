import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faMapMarker, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public iconLibrary: FaIconLibrary) { }
  itemsList = [

    {
      data: 'reskatejuvenil@gmail.com',
      icon: ['fas', 'envelope']
    },
    {
      data: 'Cra. 71g #6D-44, Bogotá',
      icon: ['fas', 'map-marker']
    },
    {
      data: '311 8837156',
      icon: ['fas','phone-volume']
    }
  
  ]
  ngOnInit(): void {
    this.iconLibrary.addIcons(
      faEnvelope,
      faMapMarker,
      faPhoneVolume,
    );
  }

}
