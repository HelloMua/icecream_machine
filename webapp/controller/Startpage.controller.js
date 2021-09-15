sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/format/NumberFormat",
	"sap/base/strings/formatMessage"
], function(
	Controller,
	NumberFormat,
	formatMessage
) {
	"use strict";

	return Controller.extend("icecreammachine.controller.Startpage", {
		onInit : function () {},

		formatMessage : formatMessage,

		getProgress : function (aNodes) {
			if (!aNodes || aNodes.length === 0) {
				return 0;
			}

			var iSum = 0;
			for (var i = 0; i < aNodes.length; i++) {
				iSum += aNodes[i].state === "Positive";
			}
			// return iSum;		// iSum = 7;

			var fPersent = (iSum / aNodes.length) * 100;
			return fPersent.toFixed(0);			// 소수점 0자리 표시 (defalut 0, 반올림 적용)
		},

		getEntityCount : function (entities) {
			// return entities && entities.length || 0;
			return entities.length;
		},

		formatNumber : function (value) {
			// var oFloatFormatter = NumberFormat.getFloatInstance({
			// 	style: "short",
			// 	// decimals: 0 		// short는 정수형이므로 decomals 0은 의미가 없음
			// });
			// return oFloatFormatter.format(value);

			var oCurrencyFormatter = NumberFormat.getCurrencyInstance({
				currencyCode: false,
				customCurrencies: {
					myCurrency: {
						isoCode: "KRW",
						decimals: 0
					}
				}
			});
			return oCurrencyFormatter.format(value, "myCurrency");
		}
	});
});