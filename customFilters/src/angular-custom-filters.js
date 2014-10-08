//function helloWorld() {
//	return "Hello World!";
//}

angular.module('customFilters', []).
filter('titlecase', function () {
	return function (input) {

		var i,
			words,
			output = '';

		if (angular.isString(input)) {

			output = input.toLowerCase();
			words = output.split(' ');
			for (i = 0; i < words.length; i = i + 1) {
				words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1, words[i].length);
			}
			output = words.join(' ');
			return output;
		} else {
			return input;
		}

	};
}).
filter('titlecasewithhyphen', function () {
	return function (input) {

		var i,
			words,
			output = '';

		if (angular.isString(input)) {

			output = input.toLowerCase();
			words = output.split('-');
			for (i = 0; i < words.length; i = i + 1) {
				words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1, words[i].length);
			}
			output = words.join('-');
			return output;
		} else {
			return input;
		}

	};
});