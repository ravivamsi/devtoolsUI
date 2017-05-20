import { Component, Pipe, PipeTransform, OnInit, ViewEncapsulation } from '@angular/core';
import { ZipService } from './../services/zip.service';
import { isUrl } from './common/utils';

@Pipe({ name: 'ObjNgFor',  pure: false })
export class ObjNgFor implements PipeTransform {
    transform(value: any, args: any[] = null): any {
      let keys = [];
      for (let key in value) {
        keys.push(key);
      }
      return keys;
    }
}

@Component({
    pipes: [ObjNgFor],
    templateUrl: 'app/views/zip.html',
    selector: 'zip'
})

export class ZipComponent implements OnInit {

    countries = {};

    selectedCountry: any = null

    zipCode: string = null

    zipDetails = {}

    detailsField = [{
      label: "Country",
      key: "country"
    }, {
      label: "Abbreviation",
      key: "country abbreviation"
    }, {
      label: "State",
      key: "places",
      formatter: function(value) {
        return value && value.length > 0 ? value[0].state : "-";
      }
    }, {
      label: "Latitude",
      key: "places",
      formatter: function(value) {
        return value && value.length > 0 ? value[0].latitude : "-";
      }
    }, {
      label: "Longitude",
      key: "places",
      formatter: function(value) {
        return value && value.length > 0 ? value[0].longitude : "-";
      }
    }, {
      label: "Place",
      key: "places",
      formatter: function(value) {
        return value && value.length > 0 ? value[0]['place name'] : "-";
      }
    }];

    errorText = ''

		ngOnInit() {
        this.zipService.getCountriesList().subscribe(
          data => {
              this.countries = data;
          },
          error => {
              console.log("Exception");
              // this.countries = {
              //   "us": "Unites States",
              //   "au": "Australia",
              //   "de": "Germany"
              // };
          }
        );
    }

    constructor(private zipService: ZipService) {

    }

    showZipDetails() {
      if(!this.selectedCountry) {
        this.errorText = 'Please select country';
        return;
      }

      if(!this.zipCode) {
        this.errorText = 'Please enter zipcode';
        return;
      }

      this.errorText = '';
      this.zipService.getZipDetails(this.selectedCountry, this.zipCode).subscribe(
        data => {
          this.zipDetails = data;
        },
        error => {
          console.log("Exception");
          // this.zipDetails = {
          //    "post code":"96799",
          //    "country":"American Samoa",
          //    "country abbreviation":"AS",
          //    "places":[
          //       {
          //          "place name":"Pago Pago",
          //          "longitude":"-170",
          //          "state":"As",
          //          "state abbreviation":"60",
          //          "latitude":"-14.3333"
          //       }
          //    ]
          // };
				}
      );
    }

    getValue(field, zipDetails) {
      var value = zipDetails[field.key];
      if(value) {
        if(field.formatter) {
          return field.formatter(value);
        }
      }
      return value;
    }

  }
