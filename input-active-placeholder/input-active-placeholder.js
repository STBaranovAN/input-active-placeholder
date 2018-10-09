(function($) {
	var methods = {
		init: function(options) {
			var $element = $(this).last();
			options = $.extend({}, options);
			$element.addClass('text_input');
			var placeholder = $element.attr('placeholder');
			if (placeholder) {
				$('<span>' + placeholder + '</span>').attr('class', 'placeholder').insertAfter($element);
				$element.removeAttr('placeholder');
			}
			if (!isEmptyInput($element)) {
				$element.addClass('input_full');
			} else {
				$element.removeClass('input_full');
			}

			var funcInputValueChanged = function(e) {
				if (!isEmptyInput($element)) {
					$element.addClass('input_full');
				} else {
					$element.removeClass('input_full');
				}
			};

			if (!options.isCurrencyInput) {
				$element.on('blur change viewModelUpdated', funcInputValueChanged);
			}
		},

	};

	function isEmptyInput($input) {
		if ($input.val() == '')
			return true;

		return false;
	};

	var biaActivePlaceholder = function(method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + ' does not exist on bia.jquery.input-active-placeholder');
		}
	};

	$.fn.biaActivePlaceholder = biaActivePlaceholder;
})(jQuery);
