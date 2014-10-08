describe('titlecase filter', function () {
	beforeEach(angular.mock.module('customFilters'));
	it('should convert words separated by a space to titlecase', function () {
		angular.mock.inject(function (titlecaseFilter) {
			expect(titlecaseFilter('hello woRld from tom')).toEqual('Hello World From Tom');
		});
	});
	it('should convert words separated by a hyphen to titlecase', function () {
		angular.mock.inject(function (titlecasewithhyphenFilter) {
			expect(titlecasewithhyphenFilter('mary-lo')).toEqual('Mary-Lo');
		});
	});
});