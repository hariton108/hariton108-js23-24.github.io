require.config({

	paths: {
		'jquery': 'libs/jquery',
		'template': 'libs/template',
		'model': 'app/model',
		'view': 'app/view',
		'controller': 'app/controller'
	}
});

require(
	['jquery', 'template', 'model', 'view', 'controller'],

	function($, template, model, view, controller) {

			var firstToDoList = ['Learn HTML', 'Learn CSS', 'Learn JS'];
			var model = new model(firstToDoList);
			var view = new view(model);
			var controller = new controller(model, view);
	}
);













