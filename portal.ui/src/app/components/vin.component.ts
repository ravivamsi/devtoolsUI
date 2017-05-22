import { Component, Pipe, PipeTransform, OnInit, ViewEncapsulation } from '@angular/core';
import { VinService } from './../services/vin.service';

@Component({
    templateUrl: 'app/views/vin.html',
    selector: 'vin'
})

export class VinComponent implements OnInit {

    vin: string = null

    year: string = null

    vinDetails = {}

    detailsField = [{
      label: "Model",
      key: "Model"
    }, {
      label: "Body Class",
      key: "BodyClass"
    }, {
      label: "Make",
      key: "Make"
    }, {
      label: "Displacement CC",
      key: "DisplacementCC"
    }, {
      label: "Plant Company Name",
      key: "PlantCompanyName"
    }, {
      label: "Vehicle Type",
      key: "VehicleType"
    }, {
      label: "Plant City",
      key: "PlantCity"
    }, {
      label: "Plant Country",
      key: "PlantCountry"
    }];

    errorText = ''

		ngOnInit() {}

    constructor(private vinService: VinService) {

    }

    showVinDetails() {
      if(!this.vin) {
        this.errorText = 'Please enter VIN';
        return;
      }

      if(!this.year) {
        this.errorText = 'Please enter year';
        return;
      }

      this.errorText = '';
      this.vinService.getVinDetails(this.vin, this.year).subscribe(
        data => {
          if(data.Results && data.Results.length > 0) {
            var errorCode = data.Results[0].ErrorCode;
            if(errorCode[0] === 0) {
              this.vinDetails = data.Results[0];
            } else {
              this.errorText = errorCode;
            }
          } else {
            this.errorText = "Unknow error";
          }
        },
        error => {
          console.log("Exception");
				}
      );
    }

    getValue(field, vinDetails) {
      var value = vinDetails[field.key];
      if(value) {
        if(field.formatter) {
          return field.formatter(value);
        }
      }
      return value;
    }

  }
