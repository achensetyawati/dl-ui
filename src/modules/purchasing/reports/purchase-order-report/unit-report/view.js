import {inject, Lazy} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Service} from './service';


@inject(Router, Service)
export class View {
    constructor(router, service) {
        this.router = router;
        this.service = service;
    }

    async activate(params) {
        var id = params.id;
        var divisi = params.division;
        var dateFrom = params.sdate;
        var dateTo = params.edate;
        // this.data = await this.service.getDetailUnit(dateFrom,dateTo,id);
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        var pricetotals = 0;
        var percentage = [];
        var percentagetotal = 0;
        var persen = 0;
        var data = [];
        var amounts = [];
        var uri = "";
        if (this.dateFrom == undefined && this.dateTo == undefined)
            uri = this.service.getDetailUnitnoDate(id);
        else
            uri = this.service.getDetailUnit(dateFrom, dateTo, id);

        uri.then(data => {
            this.data = data;
            for (var price of data) {
                pricetotals += price.pricetotal;
            }
            this.pricetotals = pricetotals;

            for (var item of data) {
                if (item.pricetotal != 0 && this.pricetotals != 0) {
                    this.persen = ((item.pricetotal * 100) / this.pricetotals).toFixed(2);
                }
                else {
                    this.persen = 0;
                }
                percentage.push(this.persen);
                var x = item.pricetotal.toFixed(2).toString().split('.');
                var x1 = x[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                var amount = x1 + '.' + x[1];
                amounts.push(amount);
            }
            for (var p of percentage) {
                percentagetotal += parseFloat(p);
            }
            this.percentage = percentage;
            this.percentagetotal = Math.round(percentagetotal).toFixed(2);
            this.dateFrom = dateFrom;
            this.dateTo = dateTo;
            this.divisi = divisi;
            this.amounts = amounts;
            var y = this.pricetotals.toFixed(2).toString().split('.');
            var y1 = y[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            this.pricetotals = y1 + '.' + y[1];
        })
    }

    list(sdate, edate) {
        this.router.navigateToRoute('list', { sdate: this.dateFrom, edate: this.dateTo });
    }

}
