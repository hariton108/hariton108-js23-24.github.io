define (

	'controller',

	['model', 'view'],

	function() {

		function Controller(model, view) {

			var self = this;

			view.elements.addBtn.on('click', addItem);
			view.elements.listContainer.on('click', '.item-list__item-edit', editItem);
			view.elements.listContainer.on('click', '.item-list__item-delete', removeItem);

			function addItem() {
				var newItem = view.elements.input.val();

				model.addItem(newItem);
				view.renderList(model.data);
				view.elements.input.val('');
			};

			function removeItem() {
				var item = $(this).attr('data-value');

				model.removeItem(item);
				view.renderList(model.data);
			};

			function editItem() {
				var item = $(this).attr('data-value');
				var input = $(this).parent().find('input');

				input.removeAttr('disabled').val(item).focus();
				input.on('focusout', function() {

					var newValue = $(this).val();
					input.attr('disabled');

					model.updateItem(item, newValue);
					view.renderList(model.data);
				});
			};
		}

		return Controller;
	}
);