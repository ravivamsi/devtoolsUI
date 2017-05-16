import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NewsService } from './../services/news.service';
import { isUrl } from './common/utils';

@Component({
	 templateUrl: 'app/views/news.html',
   selector: 'news'
})

export class NewsComponent implements OnInit {

    countries = [{
      name: "Unites States",
      code: "us"
    }, {
      name: "Australia",
      code: "au"
    }, {
      name: "Germany",
      code: "de"
    }, {
      name: "India",
      code: "in"
    }, {
      name: "Unites Kingdom",
      code: "gb"
    }, {
      name: "Italy",
      code: "it"
    }]

    selectedCountry: any = null

    selectedSource:any = null

    selectedSorting:string = ''

    sources = []

    sortingOptions = []
    newsArticles = []

    errorText = ''

		ngOnInit() {}

    constructor(private newsService: NewsService) {
    }

    onCountrySelect() {
      if(this.selectedCountry) {
          this.selectedSource = null;
          this.selectedSorting = '';
          this.newsService.getSourcesByCountry(this.selectedCountry.code).subscribe(
            data => {
              this.sources = data.sources;
            },
            error => {
              console.log("Exception");
            });
      }
    }

    onSourceSelect() {
      if(this.selectedSource) {
        this.selectedSorting = '';
        this.sortingOptions = this.selectedSource.sortBysAvailable;
      }
    }

    showNews() {
      if(!this.selectedSource) {
        this.errorText = 'Please select source';
        return;
      }
      if(!this.selectedSorting) {
        this.errorText = 'Please select a sortBy option';
        return;
      }
      this.errorText = '';
      this.newsService.getNewsArticlesBySourceAndSortBy(this.selectedSource.id, this.selectedSorting).subscribe(
        data => {
          this.newsArticles = data.articles;
					this.newsArticles.forEach(function(obj) {
							if(isUrl(obj.author)) {
								obj.authorUrl = obj.author;
							}
					});
        },
        error => {
          console.log("Exception");
				}
      );
    }
