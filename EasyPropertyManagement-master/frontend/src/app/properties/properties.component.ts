import { Component, OnInit } from '@angular/core';
import { Property, PropertyService } from '../api/client/properties/property.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  _id: any;
  sub: any;

  properties: Property[] = [];

  constructor(
    private propertyService: PropertyService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadProperties();
    this.sub = this.route.params.subscribe(params => {
      this._id = params['_id'];
    });
  }

  loadProperties() {
    this.propertyService.queryProperties()
      .subscribe(properties => {
        this.properties = properties;
      });
  }

}


// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-properties',
//   templateUrl: './properties.component.html',
//   styleUrls: ['./properties.component.css']
// })
// export class PropertiesComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
