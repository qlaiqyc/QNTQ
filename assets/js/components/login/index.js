PageInfo.register({
	"type": "Obj",
	"info": function() {

		var PageObj = {};

		PageObj.require = {
			"$": "jquery",
			"layui": "layui",
			"api": "/assets/js/components/common/data-api"
		};

		PageObj.page = function() {

			var FunUtil = {};
			var HtmUtil = {};
			var Page = {};

			Page.show = function() {

				var request = this.api.rq();

  	};

			return Page;

		};

		return PageObj;
	}
});