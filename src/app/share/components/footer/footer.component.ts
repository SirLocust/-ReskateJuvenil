import { Component, OnInit } from '@angular/core';
import { FaIconLibrary} from '@fortawesome/angular-fontawesome';
import { faEnvelope, faMapMarker, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public iconLibrary: FaIconLibrary) { }
  ngOnInit(): void {
    this.iconLibrary.addIcons(
      faEnvelope,
      faMapMarker,
      faPhoneVolume,
    );
  }

}
