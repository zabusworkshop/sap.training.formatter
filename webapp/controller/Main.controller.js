sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(Controller, JSONModel, Device) {
	"use strict";

	return Controller.extend("sap.training.controller.Main", {

		onInit: function() {
			var oModel = new JSONModel();
			oModel.loadData("model/data.json");
			this.getView().setModel(oModel);

			// set device model
			var oDeviceModel = new JSONModel(Device);
			oDeviceModel.setDefaultBindingMode("OneWay");
			this.getView().setModel(oDeviceModel, "device");
		}

	});

});