app.directive("binding", function() {
	return {
        restrict: "A",
        require: "ngModel",
        link: function(scope, element, attrs, ngModel) {

            function read() {
                let html = element.html();
                html = html.replace(/&nbsp;/g, "\u00a0");
                ngModel.$setViewValue(html);
            }
            ngModel.$render = function() {
                element.html(ngModel.$viewValue || "");
            };

            element.bind("input", function() {
                scope.main.inputMesHeight = element[0].clientHeight;
                scope.$apply(read);
            });
            scope.main.inputMesHeight = element[0].clientHeight;
        }
	};
});