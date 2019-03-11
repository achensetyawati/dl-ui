import { inject, Lazy } from "aurelia-framework";
import { Router } from "aurelia-router";
import { Service } from "./service";

@inject(Router, Service)
export class Edit {
  onViewEdit = true;
  constructor(router, service) {
    this.router = router;
    this.service = service;
    // this.data = {};
    this.error = {};
  }

  async activate(params) {
    var Id = params.Id;
    this.data = await this.service.getById(Id);
    // console.log("edit", this.data);
  }

  cancelCallback(event) {
    this.router.navigateToRoute("view", { Id: this.data.Id });
  }

  saveCallback(event) {
    console.log(this.data);
    // this.data.MaterialTypeId = this.data.MaterialTypeId.Id;
    debugger;
    this.service
      .update(this.data)
      .then(result => {
        this.router.navigateToRoute("view", { Id: this.data.Id });
      })
      .catch(e => {
        this.error = e;
      });
  }
}
