import { Component } from '@angular/core';
import { AnalyticsService } from '../analytics/analytics.service';
import { ArmorMaterialService } from '../armor/armor-material.service';
import { ArmorFilterService } from '../armor/armor-filter/armor-filter.service';
import { ImportService } from '../shared/export/import.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [AnalyticsService, ArmorMaterialService, ArmorFilterService, ImportService]
})
export class AppComponent {
}
