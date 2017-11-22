/**
 * The controller doesn't do much more than setting the initial data model
 */
angular.module("demo").controller("NestedListsDemoController", function($scope) {

    $scope.models = {
        selected: null,
        templates: [
            { type: "button", text: "click" },
            { type: "checkbox", text: "check box item" },
            { type: "textinput", id: "text" },
            { type: "radio", id: "1", name: "rad", label: "first radio", value: "firstSelected" },
            { type: "item", id: "2" },
            { type: "container", id: 2, columns: [[], []] }
        ],
        dropzones: {
            "Page": [
                {
                    "type": "container",
                    "id": 1,
                    "columns": [
                        [
                            {
                                "type": "item",
                                "id": "1"
                            },
                            {
                                "type": "item",
                                "id": "2"
                            }
                        ],
                        [
                            {
                                "type": "item",
                                "id": "9"
                            },
                            {
                                "type": "item",
                                "id": "10"
                            },
                            {
                                "type": "item",
                                "id": "11"
                            }
                        ],
                        [
                            {
                                "type": "item",
                                "id": "3"
                            }
                        ]
                    ]
                },
                {
                    "type": "item",
                    "id": "4"
                },
                {
                    "type": "item",
                    "id": "5"
                },
                {
                    "type": "item",
                    "id": "6"
                }
            ],
            "Controls": [
                {
                    "type": "item",
                    "id": "Button"
                },
                {
                    "type": "item",
                    "id": "Checkbox"
                },
                {
                    "type": "item",
                    "id": "Text"
                }
            ]
        }
    };

    $scope.$watch('models.dropzones', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

});
