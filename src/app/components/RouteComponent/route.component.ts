import { Component, AfterViewInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { LoggerService } from '../../global-services/logger.service';
import { AppHelper } from '../../global-services/app.helper';
import { AppService } from '../../global-services/app.service';
import { LocalizeService } from '../../global-components/LocalizeComponent/localize.service';

@Component({
	template: require('./route.component.html'),
	styles: [require('./route.component.css').toString()],
})

export class RouteComponent implements AfterViewInit {
	category: string;
	categoryItems: any = [];
	categoryList: any = [];
	selected: any;
	templateInfo: any;

	constructor(private _loggerService: LoggerService, private _appHelper: AppHelper, private _appService: AppService, private _localizeService: LocalizeService, private _route: ActivatedRoute) { }

	ngOnInit(): void {
		this._route.data.subscribe(data => {
			this.templateInfo = data

			console.log(this.templateInfo.name + ": ngOnInit");
		});
	}

	ngAfterViewInit(): void {
		console.log(this.templateInfo.name + ": ngAfterViewInit");

		this.setCategories();
	}

	setCategories(): void {
		this._appHelper.getContent("content_tree").then((response) => {
			for (const key of Object.keys(response)) {
				if (response[key].name === this.templateInfo.name) {
					var childList = response[key].child_id_list;

					childList.map((item, index) => {
						if (response[item] != null) {
							this.categoryItems.push(response[item]);
						}
					});

					break;
				}
			}

			for (var item in this.categoryItems) {
				this.setMediaListByCategory(this.categoryItems[item].id, this.categoryItems[item].name, this.categoryItems[item].title);
			}
		});
	}

	setMediaListByCategory(categoryID: any, key: any, displayText: any): void {
		this._appService.getContentItems(categoryID).then((response) => {
			if (response.length > 0) {
				var category = {
					displayText: displayText,
					key: key
				}

				this._appHelper.setContent(category.key, response)

				let sequence = this.categoryItems.findIndex(function (item, i) {
					return item.id === categoryID
				});

				this.categoryList[sequence] = category;

				if (this.categoryList[0]) {
					this.changeCategory(this.categoryList[0]);
				}
			}
		});
	}

	changeCategory(item): void {
		this.category = item.key;
		this.selected = item;
	}

	ngOnDestroy(): void {
		console.log(this.templateInfo.name + ": ngOnDestroy");
	}
}