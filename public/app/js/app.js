/*!
 * 
 * Angle - Bootstrap Admin App + AngularJS Material
 * 
 * Version: 3.1.0
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: https://wrapbootstrap.com/help/licenses
 * 
 */

// APP START
// ----------------------------------- 

(function () {
    'use strict';

    angular
        .module('angle', [
            'app.core',
            'app.routes',
            'app.sidebar',
            'app.navsearch',
            'app.preloader',
            'app.loadingbar',
            'app.translate',
            'app.settings',
            'app.dashboard',
            'app.icons',
            'app.flatdoc',
            'app.notify',
            'app.bootstrapui',
            'app.elements',
            'app.panels',
            'app.charts',
            'app.forms',
            'app.locale',
            'app.maps',
            'app.pages',
            'app.tables',
            'app.extras',
            'app.mailbox',
            'app.utils',
            'app.material',
            'app.pushes',
            'app.activities',
            'app.interviews',
            'app.welcomes',
            'app.polls',
            'app.match-moderation-soccer',
            'app.teams',
            "app.schedule",
            "app.players",
            "app.data",
            "app.publications",
            "app.leaderboards",
            "app.competitions",
            "app.standings",
            "app.sponsors",
            "angular-ladda"
        ]);
})();

(function () {
    'use strict';

    angular
        .module('app.pushes', []);
})();

(function () {
    'use strict';

    angular
        .module('BedbugDirectives', []);
})();

(function () {
    'use strict';

    angular
        .module('app.polls', []);
})();

(function () {
    'use strict';

    angular
        .module('app.welcomes', []);
})();

(function () {
    'use strict';

    angular
        .module('app.match-moderation-soccer', ['ngDialog', 'angular-ladda']);
})();

(function () {
    'use strict';

    angular
        .module('app.teams', []);
})();

(function () {
    'use strict';

    angular
        .module('app.publications', ['angular-ladda']);
})();

(function () {
    'use strict';

    angular
        .module('app.leaderboards', ['angular-ladda']);
})();

(function () {
    'use strict';

    angular
        .module('app.competitions', ['angular-ladda']);
})();

(function () {
    'use strict';

    angular
        .module('app.standings', ['angular-ladda']);
})();


(function () {
    'use strict';

    angular
        .module('app.sponsors', ['angular-ladda']);
})();


(function () {
    'use strict';

    angular
        .module('app.players', []);
})();

(function () {
    'use strict';

    angular
        .module('app.data', []);
})();

(function () {
    'use strict';

    angular
        .module('app.schedule', ['ngDialog', 'ui.bootstrap.datetimepicker', 'ui.dateTimeInput']);
})();

(function () {
    'use strict';

    angular
        .module('app.activities', []);
})();

(function () {
    'use strict';

    angular
        .module('app.interviews', []);
})();

(function () {
    'use strict';

    angular
        .module('app.bootstrapui', []);
})();
(function () {
    'use strict';

    angular
        .module('app.charts', []);
})();

(function () {
    'use strict';

    angular
        .module('app.colors', []);
})();


(function () {
    'use strict';

    angular
        .module('app.JWT', ['angular-jwt']);
})();





(function () {
    'use strict';

    angular
        .module('app.core', [
            'ngRoute',
            'ngAnimate',
            'ngStorage',
            'ngCookies',
            'pascalprecht.translate',
            'ui.bootstrap',
            'ui.router',
            'oc.lazyLoad',
            'cfp.loadingBar',
            'ngSanitize',
            'ngResource',
            'tmh.dynamicLocale',
            'ui.utils',
            'ngAria',
            'ngMessages',
            'ngWebSocket',
            'ngTouch',
            'ngStorage',
            'restangular',
            'angular-jwt'
        ]);
})();
(function () {
    'use strict';

    angular
        .module('app.dashboard', []);
})();
(function () {
    'use strict';

    angular
        .module('app.elements', []);
})();
(function () {
    'use strict';

    angular
        .module('app.extras', []);
})();
(function () {
    'use strict';

    angular
        .module('app.flatdoc', []);
})();
(function () {
    'use strict';

    angular
        .module('app.forms', []);
})();
(function () {
    'use strict';

    angular
        .module('app.icons', []);
})();
(function () {
    'use strict';

    angular
        .module('app.lazyload', []);
})();
(function () {
    'use strict';

    angular
        .module('app.loadingbar', []);
})();
(function () {
    'use strict';

    angular
        .module('app.locale', []);
})();
(function () {
    'use strict';

    angular
        .module('app.mailbox', []);
})();
(function () {
    'use strict';

    angular
        .module('app.maps', []);
})();
(function () {
    'use strict';

    angular
        .module('app.material', [
            'ngMaterial'
        ]);
})();
(function () {
    'use strict';

    angular
        .module('app.navsearch', []);
})();
(function () {
    'use strict';

    angular
        .module('app.notify', []);
})();
(function () {
    'use strict';

    angular
        .module('app.pages', []);
})();
(function () {
    'use strict';

    angular
        .module('app.panels', []);
})();
(function () {
    'use strict';

    angular
        .module('app.preloader', []);
})();


(function () {
    'use strict';

    angular
        .module('app.routes', [
            'app.lazyload'
        ]);
})();
(function () {
    'use strict';

    angular
        .module('app.settings', []);
})();
(function () {
    'use strict';

    angular
        .module('app.sidebar', []);
})();
(function () {
    'use strict';

    angular
        .module('app.tables', []);
})();
(function () {
    'use strict';

    angular
        .module('app.translate', []);
})();
(function () {
    'use strict';

    angular
        .module('app.utils', [
            'app.colors',
            'app.JWT',
            'angular-jwt'
        ]);
})();

/**=========================================================
 * Module: demo-alerts.js
 * Provides a simple demo for pagination
 =========================================================*/
(function () {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('AlertDemoCtrl', AlertDemoCtrl);

    function AlertDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.alerts = [
                {
                    type: 'danger',
                    msg: 'Oh snap! Change a few things up and try submitting again.'
                },
                {
                    type: 'warning',
                    msg: 'Well done! You successfully read this important alert message.'
                }
            ];

            vm.addAlert = function () {
                vm.alerts.push({
                    msg: 'Another alert!'
                });
            };

            vm.closeAlert = function (index) {
                vm.alerts.splice(index, 1);
            };
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.bootstrapui')
        .config(bootstrapuiConfig);

    function bootstrapuiConfig() {
        //        $tooltipProvider.options({
        //            appendToBody: true
        //        });
    }
    //    bootstrapuiConfig.$inject = ['$tooltipProvider'];

    //    function bootstrapuiConfig($tooltipProvider) {
    //        $tooltipProvider.options({
    //            appendToBody: true
    //        });
    //    }
})();
/**=========================================================
 * Module: demo-buttons.js
 * Provides a simple demo for buttons actions
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('ButtonsCtrl', ButtonsCtrl);

    function ButtonsCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.singleModel = 1;

            vm.radioModel = 'Middle';

            vm.checkModel = {
                left: false,
                middle: true,
                right: false
            };
        }
    }
})();

/**=========================================================
 * Module: demo-carousel.js
 * Provides a simple demo for bootstrap ui carousel
 =========================================================*/
(function () {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('CarouselDemoCtrl', CarouselDemoCtrl);

    function CarouselDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.myInterval = 5000;

            var slides = vm.slides = [];
            vm.addSlide = function () {
                var newWidth = 800 + slides.length;
                slides.push({
                    image: '//placekitten.com/' + newWidth + '/300',
                    text: ['More', 'Extra', 'Lots of', 'Surplus'][slides.length % 2] + ' ' + ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 2]
                });
            };

            for (var i = 0; i < 2; i++) {
                vm.addSlide();
            }

        }
    }
})();

/**=========================================================
 * Module: demo-datepicker.js
 * Provides a simple demo for bootstrap datepicker
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('DatepickerDemoCtrl', DatepickerDemoCtrl);

    function DatepickerDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.today = function () {
                vm.dt = new Date();
            };
            vm.today();

            vm.clear = function () {
                vm.dt = null;
            };

            // Disable weekend selection
            vm.disabled = function (date, mode) {
                return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
            };

            vm.toggleMin = function () {
                vm.minDate = vm.minDate ? null : new Date();
            };
            vm.toggleMin();

            vm.open = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();
                vm.opened = true;
            };

            vm.dateOptions = {
                formatYear: 'yy',
                startingDay: 1
            };

            vm.initDate = new Date('2019-10-20');
            vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
            vm.format = vm.formats[0];
        }
    }
})();


/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function () {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('ModalController', ModalController);

    ModalController.$inject = ['$modal'];

    function ModalController($modal) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.open = function (size) {

                var modalInstance = $modal.open({
                    templateUrl: '/myModalContent.html',
                    controller: ModalInstanceCtrl,
                    size: size
                });

                var state = $('#modal-state');
                modalInstance.result.then(function () {
                    state.text('Modal dismissed with OK status');
                }, function () {
                    state.text('Modal dismissed with Cancel status');
                });
            };

            // Please note that $modalInstance represents a modal window (instance) dependency.
            // It is not the same as the $modal service used above.

            ModalInstanceCtrl.$inject = ['$scope', '$modalInstance'];

            function ModalInstanceCtrl($scope, $modalInstance) {

                $scope.ok = function () {
                    $modalInstance.close('closed');
                };

                $scope.cancel = function () {
                    $modalInstance.dismiss('cancel');
                };
            }
        }
    }

})();

/**=========================================================
 * Module: demo-pagination.js
 * Provides a simple demo for pagination
 =========================================================*/
(function () {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('PaginationDemoCtrl', PaginationDemoCtrl);

    function PaginationDemoCtrl() {
        var vm = this;


        activate();

        ////////////////

        function activate() {
            vm.totalItems = 64;
            vm.currentPage = 4;

            vm.setPage = function (pageNo) {
                vm.currentPage = pageNo;
            };

            vm.pageChanged = function () {
                console.log('Page changed to: ' + vm.currentPage);
            };

            vm.maxSize = 5;
            vm.bigTotalItems = 175;
            vm.bigCurrentPage = 1;
        }
    }
})();

/**=========================================================
 * Module: demo-popover.js
 * Provides a simple demo for popovers
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('PopoverDemoCtrl', PopoverDemoCtrl);

    function PopoverDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.dynamicPopover = 'Hello, World!';
            vm.dynamicPopoverTitle = 'Title';
        }
    }
})();

/**=========================================================
 * Module: demo-progress.js
 * Provides a simple demo to animate progress bar
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('ProgressDemoCtrl', ProgressDemoCtrl);

    function ProgressDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.max = 200;

            vm.random = function () {
                var value = Math.floor((Math.random() * 100) + 1);
                var type;

                if (value < 25) {
                    type = 'success';
                } else if (value < 50) {
                    type = 'info';
                } else if (value < 75) {
                    type = 'warning';
                } else {
                    type = 'danger';
                }

                vm.showWarning = (type === 'danger' || type === 'warning');

                vm.dynamic = value;
                vm.type = type;
            };
            vm.random();

            vm.randomStacked = function () {
                vm.stacked = [];
                var types = ['success', 'info', 'warning', 'danger'];

                for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
                    var index = Math.floor((Math.random() * 4));
                    vm.stacked.push({
                        value: Math.floor((Math.random() * 30) + 1),
                        type: types[index]
                    });
                }
            };
            vm.randomStacked();
        }
    }
})();

/**=========================================================
 * Module: demo-rating.js
 * Provides a demo for ratings UI
 =========================================================*/
(function () {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('RatingDemoCtrl', RatingDemoCtrl);

    function RatingDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.rate = 7;
            vm.max = 10;
            vm.isReadonly = false;

            vm.hoveringOver = function (value) {
                vm.overStar = value;
                vm.percent = 100 * (value / vm.max);
            };

            vm.ratingStates = [
                {
                    stateOn: 'fa fa-check',
                    stateOff: 'fa fa-check-circle'
                },
                {
                    stateOn: 'fa fa-star',
                    stateOff: 'fa fa-star-o'
                },
                {
                    stateOn: 'fa fa-heart',
                    stateOff: 'fa fa-ban'
                },
                {
                    stateOn: 'fa fa-heart'
                },
                {
                    stateOff: 'fa fa-power-off'
                }
            ];
        }
    }
})();

/**=========================================================
 * Module: demo-timepicker.js
 * Provides a simple demo for bootstrap ui timepicker
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('TimepickerDemoCtrl', TimepickerDemoCtrl);

    function TimepickerDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.mytime = new Date();

            vm.hstep = 1;
            vm.mstep = 15;

            vm.options = {
                hstep: [1, 2, 3],
                mstep: [1, 5, 10, 15, 25, 30]
            };

            vm.ismeridian = true;
            vm.toggleMode = function () {
                vm.ismeridian = !vm.ismeridian;
            };

            vm.update = function () {
                var d = new Date();
                d.setHours(14);
                d.setMinutes(0);
                vm.mytime = d;
            };

            vm.changed = function () {
                console.log('Time changed to: ' + vm.mytime);
            };

            vm.clear = function () {
                vm.mytime = null;
            };
        }
    }
})();

/**=========================================================
 * Module: demo-tooltip.js
 * Provides a simple demo for tooltip
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('TooltipDemoCtrl', TooltipDemoCtrl);

    function TooltipDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.dynamicTooltip = 'Hello, World!';
            vm.dynamicTooltipText = 'dynamic';
            vm.htmlTooltip = 'I\'ve been made <b>bold</b>!';

            vm.autoplace = function (context, source) {
                //return (predictTooltipTop(source) < 0) ?  "bottom": "top";
                var pos = 'top';
                if (predictTooltipTop(source) < 0)
                    pos = 'bottom';
                if (predictTooltipLeft(source) < 0)
                    pos = 'right';
                return pos;
            };

            // Predicts tooltip top position 
            // based on the trigger element
            function predictTooltipTop(el) {
                var top = el.offsetTop;
                var height = 40; // asumes ~40px tooltip height

                while (el.offsetParent) {
                    el = el.offsetParent;
                    top += el.offsetTop;
                }
                return (top - height) - (window.pageYOffset);
            }

            // Predicts tooltip top position 
            // based on the trigger element
            function predictTooltipLeft(el) {
                var left = el.offsetLeft;
                var width = el.offsetWidth;

                while (el.offsetParent) {
                    el = el.offsetParent;
                    left += el.offsetLeft;
                }
                return (left - width) - (window.pageXOffset);
            }
        }
    }
})();

/**=========================================================
 * Module: demo-typeahead.js
 * Provides a simple demo for typeahead
 =========================================================*/
(function () {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('TypeaheadCtrl', TypeaheadCtrl);

    TypeaheadCtrl.$inject = ['$http'];

    function TypeaheadCtrl($http) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.selected = undefined;
            vm.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

            // Any function returning a promise object can be used to load values asynchronously
            vm.getLocation = function (val) {
                return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
                    params: {
                        address: val,
                        sensor: false
                    }
                }).then(function (res) {
                    var addresses = [];
                    angular.forEach(res.data.results, function (item) {
                        /*jshint -W106*/
                        addresses.push(item.formatted_address);
                    });
                    return addresses;
                });
            };

            vm.statesWithFlags = [{
                'name': 'Alabama',
                'flag': '5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png'
            }, {
                    'name': 'Alaska',
                    'flag': 'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png'
                }, {
                    'name': 'Arizona',
                    'flag': '9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png'
                }, {
                    'name': 'Arkansas',
                    'flag': '9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png'
                }, {
                    'name': 'California',
                    'flag': '0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png'
                }, {
                    'name': 'Colorado',
                    'flag': '4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png'
                }, {
                    'name': 'Connecticut',
                    'flag': '9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png'
                }, {
                    'name': 'Delaware',
                    'flag': 'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png'
                }, {
                    'name': 'Florida',
                    'flag': 'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png'
                }, {
                    'name': 'Georgia',
                    'flag': '5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png'
                }, {
                    'name': 'Hawaii',
                    'flag': 'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png'
                }, {
                    'name': 'Idaho',
                    'flag': 'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png'
                }, {
                    'name': 'Illinois',
                    'flag': '0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png'
                }, {
                    'name': 'Indiana',
                    'flag': 'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png'
                }, {
                    'name': 'Iowa',
                    'flag': 'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png'
                }, {
                    'name': 'Kansas',
                    'flag': 'd/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png'
                }, {
                    'name': 'Kentucky',
                    'flag': '8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png'
                }, {
                    'name': 'Louisiana',
                    'flag': 'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png'
                }, {
                    'name': 'Maine',
                    'flag': '3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png'
                }, {
                    'name': 'Maryland',
                    'flag': 'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png'
                }, {
                    'name': 'Massachusetts',
                    'flag': 'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png'
                }, {
                    'name': 'Michigan',
                    'flag': 'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png'
                }, {
                    'name': 'Minnesota',
                    'flag': 'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png'
                }, {
                    'name': 'Mississippi',
                    'flag': '4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png'
                }, {
                    'name': 'Missouri',
                    'flag': '5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png'
                }, {
                    'name': 'Montana',
                    'flag': 'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png'
                }, {
                    'name': 'Nebraska',
                    'flag': '4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png'
                }, {
                    'name': 'Nevada',
                    'flag': 'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png'
                }, {
                    'name': 'New Hampshire',
                    'flag': '2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png'
                }, {
                    'name': 'New Jersey',
                    'flag': '9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png'
                }, {
                    'name': 'New Mexico',
                    'flag': 'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png'
                }, {
                    'name': 'New York',
                    'flag': '1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png'
                }, {
                    'name': 'North Carolina',
                    'flag': 'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png'
                }, {
                    'name': 'North Dakota',
                    'flag': 'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png'
                }, {
                    'name': 'Ohio',
                    'flag': '4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png'
                }, {
                    'name': 'Oklahoma',
                    'flag': '6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png'
                }, {
                    'name': 'Oregon',
                    'flag': 'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png'
                }, {
                    'name': 'Pennsylvania',
                    'flag': 'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png'
                }, {
                    'name': 'Rhode Island',
                    'flag': 'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png'
                }, {
                    'name': 'South Carolina',
                    'flag': '6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png'
                }, {
                    'name': 'South Dakota',
                    'flag': '1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png'
                }, {
                    'name': 'Tennessee',
                    'flag': '9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png'
                }, {
                    'name': 'Texas',
                    'flag': 'f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png'
                }, {
                    'name': 'Utah',
                    'flag': 'f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png'
                }, {
                    'name': 'Vermont',
                    'flag': '4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png'
                }, {
                    'name': 'Virginia',
                    'flag': '4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png'
                }, {
                    'name': 'Washington',
                    'flag': '5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png'
                }, {
                    'name': 'West Virginia',
                    'flag': '2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png'
                }, {
                    'name': 'Wisconsin',
                    'flag': '2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png'
                }, {
                    'name': 'Wyoming',
                    'flag': 'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png'
                }];

        }
    }
})();

/**=========================================================
 * Module: chartist.js
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.charts')
        .controller('ChartistController', ChartistController);

    function ChartistController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            // Line chart
            // ----------------------------------- 

            vm.lineData = {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                series: [
                    [12, 9, 7, 8, 5],
                    [2, 1, 3.5, 7, 3],
                    [1, 3, 4, 5, 6]
                ]
            };

            vm.lineOptions = {
                fullWidth: true,
                height: 220,
                chartPadding: {
                    right: 40
                }
            };

            // Bar bipolar
            // ----------------------------------- 

            vm.barBipolarOptions = {
                high: 10,
                low: -10,
                height: 220,
                axisX: {
                    labelInterpolationFnc: function (value, index) {
                        return index % 2 === 0 ? value : null;
                    }
                }
            };

            vm.barBipolarData = {
                labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
                series: [
                    [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
                ]
            };


            // Bar horizontal
            // ----------------------------------- 

            vm.barHorizontalData = {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                series: [
                    [5, 4, 3, 7, 5, 10, 3],
                    [3, 2, 9, 5, 4, 6, 4]
                ]
            };

            vm.barHorizontalOptions = {
                seriesBarDistance: 10,
                reverseData: true,
                horizontalBars: true,
                height: 220,
                axisY: {
                    offset: 70
                }
            };

            // Smil Animations
            // ----------------------------------- 

            // Let's put a sequence number aside so we can use it in the event callbacks
            var seq = 0,
                delays = 80,
                durations = 500;

            vm.smilData = {
                labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                series: [
                    [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
                    [4, 5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
                    [5, 3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
                    [3, 4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]
                ]
            };

            vm.smilOptions = {
                low: 0,
                height: 260
            };

            vm.smilEvents = {
                created: function () {
                    seq = 0;
                },
                draw: function (data) {
                    seq++;

                    if (data.type === 'line') {
                        // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
                        data.element.animate({
                            opacity: {
                                // The delay when we like to start the animation
                                begin: seq * delays + 1000,
                                // Duration of the animation
                                dur: durations,
                                // The value where the animation should start
                                from: 0,
                                // The value where it should end
                                to: 1
                            }
                        });
                    } else if (data.type === 'label' && data.axis === 'x') {
                        data.element.animate({
                            y: {
                                begin: seq * delays,
                                dur: durations,
                                from: data.y + 100,
                                to: data.y,
                                // We can specify an easing function from Chartist.Svg.Easing
                                easing: 'easeOutQuart'
                            }
                        });
                    } else if (data.type === 'label' && data.axis === 'y') {
                        data.element.animate({
                            x: {
                                begin: seq * delays,
                                dur: durations,
                                from: data.x - 100,
                                to: data.x,
                                easing: 'easeOutQuart'
                            }
                        });
                    } else if (data.type === 'point') {
                        data.element.animate({
                            x1: {
                                begin: seq * delays,
                                dur: durations,
                                from: data.x - 10,
                                to: data.x,
                                easing: 'easeOutQuart'
                            },
                            x2: {
                                begin: seq * delays,
                                dur: durations,
                                from: data.x - 10,
                                to: data.x,
                                easing: 'easeOutQuart'
                            },
                            opacity: {
                                begin: seq * delays,
                                dur: durations,
                                from: 0,
                                to: 1,
                                easing: 'easeOutQuart'
                            }
                        });
                    }
                }
            };


            // SVG PATH animation
            // ----------------------------------- 

            vm.pathData = {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                series: [
                    [1, 5, 2, 5, 4, 3],
                    [2, 3, 4, 8, 1, 2],
                    [5, 4, 3, 2, 1, 0.5]
                ]
            };

            vm.pathOptions = {
                low: 0,
                showArea: true,
                showPoint: false,
                fullWidth: true,
                height: 260
            };

            vm.pathEvents = {
                draw: function (data) {
                    if (data.type === 'line' || data.type === 'area') {
                        data.element.animate({
                            d: {
                                begin: 2000 * data.index,
                                dur: 2000,
                                from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                                to: data.path.clone().stringify(),
                                easing: Chartist.Svg.Easing.easeOutQuint
                            }
                        });
                    }
                }
            };

        }
    }
})();


/**=========================================================
 * Module: chart.controller.js
 * Controller for ChartJs
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.charts')
        .controller('ChartJSController', ChartJSController);

    ChartJSController.$inject = ['Colors'];

    function ChartJSController(Colors) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            // random values for demo
            var rFactor = function () {
                return Math.round(Math.random() * 100);
            };

            // Line chart
            // ----------------------------------- 

            vm.lineData = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'My First dataset',
                        fillColor: 'rgba(114,102,186,0.2)',
                        strokeColor: 'rgba(114,102,186,1)',
                        pointColor: 'rgba(114,102,186,1)',
                        pointStrokeColor: '#fff',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(114,102,186,1)',
                        data: [rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor()]
                    },
                    {
                        label: 'My Second dataset',
                        fillColor: 'rgba(35,183,229,0.2)',
                        strokeColor: 'rgba(35,183,229,1)',
                        pointColor: 'rgba(35,183,229,1)',
                        pointStrokeColor: '#fff',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(35,183,229,1)',
                        data: [rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor()]
                    }
                ]
            };


            vm.lineOptions = {
                scaleShowGridLines: true,
                scaleGridLineColor: 'rgba(0,0,0,.05)',
                scaleGridLineWidth: 1,
                bezierCurve: true,
                bezierCurveTension: 0.4,
                pointDot: true,
                pointDotRadius: 4,
                pointDotStrokeWidth: 1,
                pointHitDetectionRadius: 20,
                datasetStroke: true,
                datasetStrokeWidth: 2,
                datasetFill: true,
            };


            // Bar chart
            // ----------------------------------- 

            vm.barData = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        fillColor: Colors.byName('info'),
                        strokeColor: Colors.byName('info'),
                        highlightFill: Colors.byName('info'),
                        highlightStroke: Colors.byName('info'),
                        data: [rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor()]
                    },
                    {
                        fillColor: Colors.byName('primary'),
                        strokeColor: Colors.byName('primary'),
                        highlightFill: Colors.byName('primary'),
                        highlightStroke: Colors.byName('primary'),
                        data: [rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor()]
                    }
                ]
            };

            vm.barOptions = {
                scaleBeginAtZero: true,
                scaleShowGridLines: true,
                scaleGridLineColor: 'rgba(0,0,0,.05)',
                scaleGridLineWidth: 1,
                barShowStroke: true,
                barStrokeWidth: 2,
                barValueSpacing: 5,
                barDatasetSpacing: 1,
            };


            //  Doughnut chart
            // ----------------------------------- 

            vm.doughnutData = [
                {
                    value: 300,
                    color: Colors.byName('purple'),
                    highlight: Colors.byName('purple'),
                    label: 'Purple'
                },
                {
                    value: 50,
                    color: Colors.byName('info'),
                    highlight: Colors.byName('info'),
                    label: 'Info'
                },
                {
                    value: 100,
                    color: Colors.byName('yellow'),
                    highlight: Colors.byName('yellow'),
                    label: 'Yellow'
                }
            ];

            vm.doughnutOptions = {
                segmentShowStroke: true,
                segmentStrokeColor: '#fff',
                segmentStrokeWidth: 2,
                percentageInnerCutout: 85,
                animationSteps: 100,
                animationEasing: 'easeOutBounce',
                animateRotate: true,
                animateScale: false
            };

            // Pie chart
            // ----------------------------------- 

            vm.pieData = [
                {
                    value: 300,
                    color: Colors.byName('purple'),
                    highlight: Colors.byName('purple'),
                    label: 'Purple'
                },
                {
                    value: 40,
                    color: Colors.byName('yellow'),
                    highlight: Colors.byName('yellow'),
                    label: 'Yellow'
                },
                {
                    value: 120,
                    color: Colors.byName('info'),
                    highlight: Colors.byName('info'),
                    label: 'Info'
                }
            ];

            vm.pieOptions = {
                segmentShowStroke: true,
                segmentStrokeColor: '#fff',
                segmentStrokeWidth: 2,
                percentageInnerCutout: 0, // Setting this to zero convert a doughnut into a Pie
                animationSteps: 100,
                animationEasing: 'easeOutBounce',
                animateRotate: true,
                animateScale: false
            };

            // Polar chart
            // ----------------------------------- 

            vm.polarData = [
                {
                    value: 300,
                    color: Colors.byName('pink'),
                    highlight: Colors.byName('pink'),
                    label: 'Red'
                },
                {
                    value: 50,
                    color: Colors.byName('purple'),
                    highlight: Colors.byName('purple'),
                    label: 'Green'
                },
                {
                    value: 100,
                    color: Colors.byName('pink'),
                    highlight: Colors.byName('pink'),
                    label: 'Yellow'
                },
                {
                    value: 140,
                    color: Colors.byName('purple'),
                    highlight: Colors.byName('purple'),
                    label: 'Grey'
                },
            ];

            vm.polarOptions = {
                scaleShowLabelBackdrop: true,
                scaleBackdropColor: 'rgba(255,255,255,0.75)',
                scaleBeginAtZero: true,
                scaleBackdropPaddingY: 1,
                scaleBackdropPaddingX: 1,
                scaleShowLine: true,
                segmentShowStroke: true,
                segmentStrokeColor: '#fff',
                segmentStrokeWidth: 2,
                animationSteps: 100,
                animationEasing: 'easeOutBounce',
                animateRotate: true,
                animateScale: false
            };


            // Radar chart
            // ----------------------------------- 

            vm.radarData = {
                labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
                datasets: [
                    {
                        label: 'My First dataset',
                        fillColor: 'rgba(114,102,186,0.2)',
                        strokeColor: 'rgba(114,102,186,1)',
                        pointColor: 'rgba(114,102,186,1)',
                        pointStrokeColor: '#fff',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(114,102,186,1)',
                        data: [65, 59, 90, 81, 56, 55, 40]
                    },
                    {
                        label: 'My Second dataset',
                        fillColor: 'rgba(151,187,205,0.2)',
                        strokeColor: 'rgba(151,187,205,1)',
                        pointColor: 'rgba(151,187,205,1)',
                        pointStrokeColor: '#fff',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(151,187,205,1)',
                        data: [28, 48, 40, 19, 96, 27, 100]
                    }
                ]
            };

            vm.radarOptions = {
                scaleShowLine: true,
                angleShowLineOut: true,
                scaleShowLabels: false,
                scaleBeginAtZero: true,
                angleLineColor: 'rgba(0,0,0,.1)',
                angleLineWidth: 1,
                /*jshint -W109*/
                pointLabelFontFamily: "'Arial'",
                pointLabelFontStyle: 'bold',
                pointLabelFontSize: 10,
                pointLabelFontColor: '#565656',
                pointDot: true,
                pointDotRadius: 3,
                pointDotStrokeWidth: 1,
                pointHitDetectionRadius: 20,
                datasetStroke: true,
                datasetStrokeWidth: 2,
                datasetFill: true
            };
        }
    }
})();

/**=========================================================
 * Module: chart.js
 * Wrapper directive for chartJS.
 * Based on https://gist.github.com/AndreasHeiberg/9837868
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.charts')
        /* Aliases for various chart types */
        .directive('linechart', chartJS('Line'))
        .directive('barchart', chartJS('Bar'))
        .directive('radarchart', chartJS('Radar'))
        .directive('polarchart', chartJS('PolarArea'))
        .directive('piechart', chartJS('Pie'))
        .directive('doughnutchart', chartJS('Doughnut'))
        .directive('donutchart', chartJS('Doughnut'));

    function chartJS(type) {
        return function () {
            return {
                restrict: 'A',
                scope: {
                    data: '=',
                    options: '=',
                    id: '@',
                    width: '=',
                    height: '=',
                    resize: '=',
                    chart: '@',
                    segments: '@',
                    responsive: '=',
                    tooltip: '=',
                    legend: '='
                },
                link: function ($scope, $elem) {
                    var ctx = $elem[0].getContext('2d');
                    var autosize = false;

                    $scope.size = function () {
                        if ($scope.width <= 0) {
                            $elem.width($elem.parent().width());
                            ctx.canvas.width = $elem.width();
                        } else {
                            ctx.canvas.width = $scope.width || ctx.canvas.width;
                            autosize = true;
                        }

                        if ($scope.height <= 0) {
                            $elem.height($elem.parent().height());
                            ctx.canvas.height = ctx.canvas.width / 2;
                        } else {
                            ctx.canvas.height = $scope.height || ctx.canvas.height;
                            autosize = true;
                        }
                    };

                    $scope.$watch('data', function (newVal) {
                        if (chartCreated)
                            chartCreated.destroy();

                        // if data not defined, exit
                        if (!newVal) {
                            return;
                        }
                        if ($scope.chart) {
                            type = $scope.chart;
                        }

                        if (autosize) {
                            $scope.size();
                            chart = new Chart(ctx);
                        }

                        if ($scope.responsive || $scope.resize)
                            $scope.options.responsive = true;

                        if ($scope.responsive !== undefined)
                            $scope.options.responsive = $scope.responsive;

                        chartCreated = chart[type]($scope.data, $scope.options);
                        chartCreated.update();
                        if ($scope.legend)
                            angular.element($elem[0]).parent().after(chartCreated.generateLegend());
                    }, true);

                    $scope.$watch('tooltip', function (newVal) {
                        if (chartCreated)
                            chartCreated.draw();
                        if (newVal === undefined || !chartCreated.segments)
                            return;
                        if (!isFinite(newVal) || newVal >= chartCreated.segments.length || newVal < 0)
                            return;
                        var activeSegment = chartCreated.segments[newVal];
                        activeSegment.save();
                        activeSegment.fillColor = activeSegment.highlightColor;
                        chartCreated.showTooltip([activeSegment]);
                        activeSegment.restore();
                    }, true);

                    $scope.size();
                    var chart = new Chart(ctx);
                    var chartCreated;
                }
            };
        };
    }
})();


/**=========================================================
 * Module: classy-loader.js
 * Enable use of classyloader directly from data attributes
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.charts')
        .directive('classyloader', classyloader);

    classyloader.$inject = ['$timeout', 'Utils', '$window'];

    function classyloader($timeout, Utils, $window) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
            var $scroller = $($window),
                inViewFlagClass = 'js-is-in-view'; // a classname to detect when a chart has been triggered after scroll

            // run after interpolation  
            $timeout(function () {

                var $element = $(element),
                    options = $element.data();

                // At lease we need a data-percentage attribute
                if (options) {
                    if (options.triggerInView) {

                        $scroller.scroll(function () {
                            checkLoaderInVIew($element, options);
                        });
                        // if the element starts already in view
                        checkLoaderInVIew($element, options);
                    } else
                        startLoader($element, options);
                }

            }, 0);

            function checkLoaderInVIew(element, options) {
                var offset = -20;
                if (!element.hasClass(inViewFlagClass) &&
                    Utils.isInView(element, {
                        topoffset: offset
                    })) {
                    startLoader(element, options);
                }
            }

            function startLoader(element, options) {
                element.ClassyLoader(options).addClass(inViewFlagClass);
            }
        }
    }

})();

(function () {
    'use strict';

    angular
        .module('app.charts')
        .service('ChartData', ChartData);

    ChartData.$inject = ['$resource'];

    function ChartData($resource) {
        this.load = load;

        ////////////////

        var opts = {
            get: {
                method: 'GET',
                isArray: true
            }
        };

        function load(source) {
            return $resource(source, {}, opts).get();
        }
    }
})();

/**=========================================================
 * Module: flot-chart.js
 * Setup options and data for flot chart directive
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.charts')
        .controller('FlotChartController', FlotChartController);

    FlotChartController.$inject = ['$scope', 'ChartData', '$timeout'];

    function FlotChartController($scope, ChartData, $timeout) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            // BAR
            // ----------------------------------- 
            vm.barData = ChartData.load('server/chart/bar.json');
            vm.barOptions = {
                series: {
                    bars: {
                        align: 'center',
                        lineWidth: 0,
                        show: true,
                        barWidth: 0.6,
                        fill: 0.9
                    }
                },
                grid: {
                    borderColor: '#eee',
                    borderWidth: 1,
                    hoverable: true,
                    backgroundColor: '#fcfcfc'
                },
                tooltip: true,
                tooltipOpts: {
                    content: function (label, x, y) {
                        return x + ' : ' + y;
                    }
                },
                xaxis: {
                    tickColor: '#fcfcfc',
                    mode: 'categories'
                },
                yaxis: {
                    position: ($scope.app.layout.isRTL ? 'right' : 'left'),
                    tickColor: '#eee'
                },
                shadowSize: 0
            };

            // BAR STACKED
            // ----------------------------------- 
            vm.barStackeData = ChartData.load('server/chart/barstacked.json');
            vm.barStackedOptions = {
                series: {
                    stack: true,
                    bars: {
                        align: 'center',
                        lineWidth: 0,
                        show: true,
                        barWidth: 0.6,
                        fill: 0.9
                    }
                },
                grid: {
                    borderColor: '#eee',
                    borderWidth: 1,
                    hoverable: true,
                    backgroundColor: '#fcfcfc'
                },
                tooltip: true,
                tooltipOpts: {
                    content: function (label, x, y) {
                        return x + ' : ' + y;
                    }
                },
                xaxis: {
                    tickColor: '#fcfcfc',
                    mode: 'categories'
                },
                yaxis: {
                    min: 0,
                    max: 200, // optional: use it for a clear represetation
                    position: ($scope.app.layout.isRTL ? 'right' : 'left'),
                    tickColor: '#eee'
                },
                shadowSize: 0
            };

            // SPLINE
            // ----------------------------------- 
            vm.splineData = ChartData.load('server/chart/spline.json');
            vm.splineOptions = {
                series: {
                    lines: {
                        show: false
                    },
                    points: {
                        show: true,
                        radius: 4
                    },
                    splines: {
                        show: true,
                        tension: 0.4,
                        lineWidth: 1,
                        fill: 0.5
                    }
                },
                grid: {
                    borderColor: '#eee',
                    borderWidth: 1,
                    hoverable: true,
                    backgroundColor: '#fcfcfc'
                },
                tooltip: true,
                tooltipOpts: {
                    content: function (label, x, y) {
                        return x + ' : ' + y;
                    }
                },
                xaxis: {
                    tickColor: '#fcfcfc',
                    mode: 'categories'
                },
                yaxis: {
                    min: 0,
                    max: 150, // optional: use it for a clear represetation
                    tickColor: '#eee',
                    position: ($scope.app.layout.isRTL ? 'right' : 'left'),
                    tickFormatter: function (v) {
                        return v /* + ' visitors'*/;
                    }
                },
                shadowSize: 0
            };

            // AREA
            // ----------------------------------- 
            vm.areaData = ChartData.load('server/chart/area.json');
            vm.areaOptions = {
                series: {
                    lines: {
                        show: true,
                        fill: 0.8
                    },
                    points: {
                        show: true,
                        radius: 4
                    }
                },
                grid: {
                    borderColor: '#eee',
                    borderWidth: 1,
                    hoverable: true,
                    backgroundColor: '#fcfcfc'
                },
                tooltip: true,
                tooltipOpts: {
                    content: function (label, x, y) {
                        return x + ' : ' + y;
                    }
                },
                xaxis: {
                    tickColor: '#fcfcfc',
                    mode: 'categories'
                },
                yaxis: {
                    min: 0,
                    tickColor: '#eee',
                    position: ($scope.app.layout.isRTL ? 'right' : 'left'),
                    tickFormatter: function (v) {
                        return v + ' visitors';
                    }
                },
                shadowSize: 0
            };

            // LINE
            // ----------------------------------- 
            vm.lineData = ChartData.load('server/chart/line.json');
            vm.lineOptions = {
                series: {
                    lines: {
                        show: true,
                        fill: 0.01
                    },
                    points: {
                        show: true,
                        radius: 4
                    }
                },
                grid: {
                    borderColor: '#eee',
                    borderWidth: 1,
                    hoverable: true,
                    backgroundColor: '#fcfcfc'
                },
                tooltip: true,
                tooltipOpts: {
                    content: function (label, x, y) {
                        return x + ' : ' + y;
                    }
                },
                xaxis: {
                    tickColor: '#eee',
                    mode: 'categories'
                },
                yaxis: {
                    position: ($scope.app.layout.isRTL ? 'right' : 'left'),
                    tickColor: '#eee'
                },
                shadowSize: 0
            };

            // PIE
            // ----------------------------------- 
            vm.pieData = ChartData.load('server/chart/pie.json');
            vm.pieOptions = {
                series: {
                    pie: {
                        show: true,
                        innerRadius: 0,
                        label: {
                            show: true,
                            radius: 0.8,
                            formatter: function (label, series) {
                                return '<div class="flot-pie-label">' +
                                    //label + ' : ' +
                                    Math.round(series.percent) +
                                    '%</div>';
                            },
                            background: {
                                opacity: 0.8,
                                color: '#222'
                            }
                        }
                    }
                }
            };

            // DONUT
            // ----------------------------------- 
            vm.donutData = ChartData.load('server/chart/donut.json');
            vm.donutOptions = {
                series: {
                    pie: {
                        show: true,
                        innerRadius: 0.5 // This makes the donut shape
                    }
                }
            };

            // REALTIME
            // ----------------------------------- 
            vm.realTimeOptions = {
                series: {
                    lines: {
                        show: true,
                        fill: true,
                        fillColor: {
                            colors: ['#a0e0f3', '#23b7e5']
                        }
                    },
                    shadowSize: 0 // Drawing is faster without shadows
                },
                grid: {
                    show: false,
                    borderWidth: 0,
                    minBorderMargin: 20,
                    labelMargin: 10
                },
                xaxis: {
                    tickFormatter: function () {
                        return '';
                    }
                },
                yaxis: {
                    min: 0,
                    max: 110
                },
                legend: {
                    show: true
                },
                colors: ['#23b7e5']
            };

            // Generate random data for realtime demo
            var data = [],
                totalPoints = 300;

            update();

            function getRandomData() {
                if (data.length > 0)
                    data = data.slice(1);
                // Do a random walk
                while (data.length < totalPoints) {
                    var prev = data.length > 0 ? data[data.length - 1] : 50,
                        y = prev + Math.random() * 10 - 5;
                    if (y < 0) {
                        y = 0;
                    } else if (y > 100) {
                        y = 100;
                    }
                    data.push(y);
                }
                // Zip the generated y values with the x values
                var res = [];
                for (var i = 0; i < data.length; ++i) {
                    res.push([i, data[i]]);
                }
                return [res];
            }

            function update() {
                vm.realTimeData = getRandomData();
                $timeout(update, 30);
            }

            // end random data generation


            // PANEL REFRESH EVENTS
            // ----------------------------------- 

            $scope.$on('panel-refresh', function (event, id) {

                console.log('Simulating chart refresh during 3s on #' + id);

                // Instead of timeout you can request a chart data
                $timeout(function () {

                    // directive listen for to remove the spinner 
                    // after we end up to perform own operations
                    $scope.$broadcast('removeSpinner', id);

                    console.log('Refreshed #' + id);

                }, 3000);

            });


            // PANEL DISMISS EVENTS
            // ----------------------------------- 

            // Before remove panel
            $scope.$on('panel-remove', function (event, id, deferred) {

                console.log('Panel #' + id + ' removing');

                // Here is obligatory to call the resolve() if we pretend to remove the panel finally
                // Not calling resolve() will NOT remove the panel
                // It's up to your app to decide if panel should be removed or not
                deferred.resolve();

            });

            // Panel removed ( only if above was resolved() )
            $scope.$on('panel-removed', function (event, id) {

                console.log('Panel #' + id + ' removed');

            });

        }
    }
})();

/**=========================================================
 * Module: flot.js
 * Initializes the Flot chart plugin and handles data refresh
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.charts')
        .directive('flot', flot);

    flot.$inject = ['$http', '$timeout'];

    function flot($http, $timeout) {

        var directive = {
            restrict: 'EA',
            template: '<div></div>',
            scope: {
                dataset: '=?',
                options: '=',
                series: '=',
                callback: '=',
                src: '='
            },
            link: link
        };
        return directive;

        function link(scope, element, attrs) {
            var height, plot, plotArea, width;
            var heightDefault = 220;

            plot = null;

            width = attrs.width || '100%';
            height = attrs.height || heightDefault;

            plotArea = $(element.children()[0]);
            plotArea.css({
                width: width,
                height: height
            });

            function init() {
                var plotObj;
                if (!scope.dataset || !scope.options) return;
                plotObj = $.plot(plotArea, scope.dataset, scope.options);
                scope.$emit('plotReady', plotObj);
                if (scope.callback) {
                    scope.callback(plotObj, scope);
                }

                return plotObj;
            }

            function onDatasetChanged(dataset) {
                if (plot) {
                    plot.setData(dataset);
                    plot.setupGrid();
                    return plot.draw();
                } else {
                    plot = init();
                    onSerieToggled(scope.series);
                    return plot;
                }
            }

            scope.$watchCollection('dataset', onDatasetChanged, true);

            function onSerieToggled(series) {
                if (!plot || !series) return;
                var someData = plot.getData();
                for (var sName in series) {
                    angular.forEach(series[sName], toggleFor(sName));
                }

                plot.setData(someData);
                plot.draw();

                function toggleFor(sName) {
                    return function (s, i) {
                        if (someData[i] && someData[i][sName])
                            someData[i][sName].show = s;
                    };
                }
            }

            scope.$watch('series', onSerieToggled, true);

            function onSrcChanged(src) {

                if (src) {

                    $http.get(src)
                        .success(function (data) {

                            $timeout(function () {
                                scope.dataset = data;
                            });

                        }).error(function () {
                            $.error('Flot chart: Bad request.');
                        });

                }
            }

            scope.$watch('src', onSrcChanged);

        }
    }


})();

/**=========================================================
 * Module: morris.js
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.charts')
        .controller('ChartMorrisController', ChartMorrisController);

    ChartMorrisController.$inject = ['$timeout', 'Colors'];

    function ChartMorrisController($timeout, Colors) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.chartdata = [
                {
                    y: '2006',
                    a: 100,
                    b: 90
                },
                {
                    y: '2007',
                    a: 75,
                    b: 65
                },
                {
                    y: '2008',
                    a: 50,
                    b: 40
                },
                {
                    y: '2009',
                    a: 75,
                    b: 65
                },
                {
                    y: '2010',
                    a: 50,
                    b: 40
                },
                {
                    y: '2011',
                    a: 75,
                    b: 65
                },
                {
                    y: '2012',
                    a: 100,
                    b: 90
                }
            ];

            /* test data update
             $timeout(function(){
             vm.chartdata[0].a = 50;
             vm.chartdata[0].b = 50;
             }, 3000); */

            vm.donutdata = [
                {
                    label: 'Download Sales',
                    value: 12
                },
                {
                    label: 'In-Store Sales',
                    value: 30
                },
                {
                    label: 'Mail-Order Sales',
                    value: 20
                }
            ];

            vm.donutOptions = {
                Colors: [Colors.byName('danger'), Colors.byName('yellow'), Colors.byName('warning')],
                resize: true
            };

            vm.barOptions = {
                xkey: 'y',
                ykeys: ['a', 'b'],
                labels: ['Series A', 'Series B'],
                xLabelMargin: 2,
                barColors: [Colors.byName('info'), Colors.byName('danger')],
                resize: true
            };

            vm.lineOptions = {
                xkey: 'y',
                ykeys: ['a', 'b'],
                labels: ['Serie A', 'Serie B'],
                lineColors: ['#31C0BE', '#7a92a3'],
                resize: true
            };

            vm.areaOptions = {
                xkey: 'y',
                ykeys: ['a', 'b'],
                labels: ['Serie A', 'Serie B'],
                lineColors: [Colors.byName('purple'), Colors.byName('info')],
                resize: true
            };

        }
    }
})();

/**=========================================================
 * Module: morris.js
 * AngularJS Directives for Morris Charts
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.charts')
        .directive('morrisBar', morrisChart('Bar'))
        .directive('morrisDonut', morrisChart('Donut'))
        .directive('morrisLine', morrisChart('Line'))
        .directive('morrisArea', morrisChart('Area'));

    function morrisChart(type) {
        return function () {
            return {
                restrict: 'EA',
                scope: {
                    morrisData: '=',
                    morrisOptions: '='
                },
                link: function ($scope, element) {
                    // start ready to watch for changes in data
                    $scope.$watch('morrisData', function (newVal) {
                        if (newVal) {
                            $scope.morrisInstance.setData(newVal);
                            $scope.morrisInstance.redraw();
                        }
                    }, true);
                    // the element that contains the chart
                    $scope.morrisOptions.element = element;
                    // If data defined copy to options
                    if ($scope.morrisData)
                        $scope.morrisOptions.data = $scope.morrisData;
                    // Init chart
                    $scope.morrisInstance = new Morris[type]($scope.morrisOptions);

                }
            };
        };
    }

})();

/**=========================================================
 * Module: PieChartsController.js
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.charts')
        .controller('PieChartsController', PieChartsController);

    /*jshint -W069*/
    PieChartsController.$inject = ['Colors'];

    function PieChartsController(Colors) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            // KNOB Charts

            vm.knobLoaderData1 = 80;
            vm.knobLoaderOptions1 = {
                width: '50%', // responsive
                displayInput: true,
                fgColor: Colors.byName('info')
            };

            vm.knobLoaderData2 = 45;
            vm.knobLoaderOptions2 = {
                width: '50%', // responsive
                displayInput: true,
                fgColor: Colors.byName('purple'),
                readOnly: true
            };

            vm.knobLoaderData3 = 30;
            vm.knobLoaderOptions3 = {
                width: '50%', // responsive
                displayInput: true,
                fgColor: Colors.byName('pink'),
                displayPrevious: true,
                thickness: 0.1,
                lineCap: 'round'
            };

            vm.knobLoaderData4 = 20;
            vm.knobLoaderOptions4 = {
                width: '50%', // responsive
                displayInput: true,
                fgColor: Colors.byName('info'),
                bgColor: Colors.byName('gray'),
                angleOffset: -125,
                angleArc: 250
            };

            // Easy Pie Charts

            vm.piePercent1 = 85;
            vm.piePercent2 = 45;
            vm.piePercent3 = 25;
            vm.piePercent4 = 60;

            vm.pieOptions1 = {
                animate: {
                    duration: 800,
                    enabled: true
                },
                barColor: Colors.byName('success'),
                trackColor: false,
                scaleColor: false,
                lineWidth: 10,
                lineCap: 'circle'
            };

            vm.pieOptions2 = {
                animate: {
                    duration: 800,
                    enabled: true
                },
                barColor: Colors.byName('warning'),
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                lineCap: 'circle'
            };

            vm.pieOptions3 = {
                animate: {
                    duration: 800,
                    enabled: true
                },
                barColor: Colors.byName('danger'),
                trackColor: false,
                scaleColor: Colors.byName('gray'),
                lineWidth: 15,
                lineCap: 'circle'
            };

            vm.pieOptions4 = {
                animate: {
                    duration: 800,
                    enabled: true
                },
                barColor: Colors.byName('danger'),
                trackColor: Colors.byName('yellow'),
                scaleColor: Colors.byName('gray-dark'),
                lineWidth: 15,
                lineCap: 'circle'
            };

            vm.randomize = function (type) {
                if (type === 'easy') {
                    vm.piePercent1 = random();
                    vm.piePercent2 = random();
                    vm.piePercent3 = random();
                    vm.piePercent4 = random();
                }
                if (type === 'knob') {
                    vm.knobLoaderData1 = random();
                    vm.knobLoaderData2 = random();
                    vm.knobLoaderData3 = random();
                    vm.knobLoaderData4 = random();
                }
            };

            function random() {
                return Math.floor((Math.random() * 100) + 1);
            }

        }
    }
})();

/**=========================================================
 * Module: rickshaw.js
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.charts')
        .controller('ChartRickshawController', ChartRickshawController);

    function ChartRickshawController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.renderers = [{
                id: 'area',
                name: 'Area'
            }, {
                    id: 'line',
                    name: 'Line'
                }, {
                    id: 'bar',
                    name: 'Bar'
                }, {
                    id: 'scatterplot',
                    name: 'Scatterplot'
                }];

            vm.palettes = [
                'spectrum14',
                'spectrum2000',
                'spectrum2001',
                'colorwheel',
                'cool',
                'classic9',
                'munin'
            ];

            vm.rendererChanged = function (id) {
                vm['options' + id] = {
                    renderer: vm['renderer' + id].id
                };
            };

            vm.paletteChanged = function (id) {
                vm['features' + id] = {
                    palette: vm['palette' + id]
                };
            };

            vm.changeSeriesData = function (id) {
                var seriesList = [];
                for (var i = 0; i < 3; i++) {
                    var series = {
                        name: 'Series ' + (i + 1),
                        data: []
                    };
                    for (var j = 0; j < 10; j++) {
                        series.data.push({
                            x: j,
                            y: Math.random() * 20
                        });
                    }
                    seriesList.push(series);
                    vm['series' + id][i] = series;
                }
                //vm['series' + id] = seriesList;
            };

            vm.series0 = [];

            vm.options0 = {
                renderer: 'area'
            };

            vm.renderer0 = vm.renderers[0];
            vm.palette0 = vm.palettes[0];

            vm.rendererChanged(0);
            vm.paletteChanged(0);
            vm.changeSeriesData(0);

            // Graph 2

            var seriesData = [[], [], []];
            var random = new Rickshaw.Fixtures.RandomData(150);

            for (var i = 0; i < 150; i++) {
                random.addData(seriesData);
            }

            vm.series2 = [
                {
                    color: '#c05020',
                    data: seriesData[0],
                    name: 'New York'
                }, {
                    color: '#30c020',
                    data: seriesData[1],
                    name: 'London'
                }, {
                    color: '#6060c0',
                    data: seriesData[2],
                    name: 'Tokyo'
                }
            ];

            vm.options2 = {
                renderer: 'area'
            };

        }
    }
})();

/**=========================================================
 * Module: sparkline.js
 * SparkLines Mini Charts
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.charts')
        .directive('sparkline', sparkline);

    function sparkline() {
        var directive = {
            restrict: 'EA',
            scope: {
                'sparkline': '='
            },
            controller: Controller
        };
        return directive;

    }

    Controller.$inject = ['$scope', '$element', '$timeout', '$window'];

    function Controller($scope, $element, $timeout, $window) {
        var runSL = function () {
            initSparLine();
        };

        $timeout(runSL);

        function initSparLine() {
            var options = $scope.sparkline,
                data = $element.data();

            if (!options) // if no scope options, try with data attributes
                options = data;
            else if (data) // data attributes overrides scope options
                options = angular.extend({}, options, data);

            options.type = options.type || 'bar'; // default chart is bar
            options.disableHiddenCheck = true;

            $element.sparkline('html', options);

            if (options.resize) {
                $($window).resize(function () {
                    $element.sparkline('html', options);
                });
            }
        }

    }


})();

(function () {
    'use strict';

    angular
        .module('app.colors')
        .constant('APP_COLORS', {
            'primary': '#5d9cec',
            'success': '#4CAF50',
            'info': '#2196F3',
            'warning': '#FF9800',
            'danger': '#F44336',
            'inverse': '#607D8B',
            'green': '#009688',
            'pink': '#E91E63',
            'purple': '#673AB7',
            'dark': '#263238',
            'yellow': '#FFEB3B',
            'gray-darker': '#232735',
            'gray-dark': '#3a3f51',
            'gray': '#dde6e9',
            'gray-light': '#e4eaec',
            'gray-lighter': '#edf1f2'
        });
})();
/**=========================================================
 * Module: colors.js
 * Services to retrieve global colors
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.colors')
        .service('Colors', Colors);

    Colors.$inject = ['APP_COLORS'];

    function Colors(APP_COLORS) {
        this.byName = byName;
        this.byIndex = byIndex;
        ////////////////

        function byName(name) {
            return (APP_COLORS[name] || '#fff');
        }

        function byIndex(indx) {
            var count = 0;
            for (var color in APP_COLORS) {
                if (count == indx)
                    return APP_COLORS[color];
                count++;
            }
        }


    }

})();

// (function() {
//     'use strict';

//     angular
//         .module('app.JWT')
//         .service('JWT', JWT);

//     JWT.$inject = ['jwtHelper'];

//     function JWT(jwtHelper) {

//         this.isTokenExpired  = isTokenExpired ;

//         ////////////////

//         function isTokenExpired (token) {

//                 return true;
//              //jwtHelper.isTokenExpired(token);
//         }
//     }

// })();

(function () {
    'use strict';

    angular
        .module('app.core')
        .config(coreConfig);

    coreConfig.$inject = ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide'];

    function coreConfig($controllerProvider, $compileProvider, $filterProvider, $provide) {

        var core = angular.module('app.core');
        // registering components after bootstrap
        core.controller = $controllerProvider.register;
        core.directive = $compileProvider.directive;
        core.filter = $filterProvider.register;
        core.factory = $provide.factory;
        core.service = $provide.service;
        core.constant = $provide.constant;
        core.value = $provide.value;


    }

})();
/**=========================================================
 * Module: constants.js
 * Define constants to inject across the application
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.core')
        .constant('APP_MEDIAQUERY', {
            'desktopLG': 1200,
            'desktop': 992,
            'tablet': 768,
            'mobile': 480
        });

})();
(function () {
    'use strict';

    angular
        .module('app.core')
        .service('StatsService', StatsService)
        .run(appRun);


    StatsService.$inject = ['$rootScope'];
    function StatsService($rootScope) {
        var statsTransalations = {
            g: 'Goals',
            rc: 'Red Cards',
            yc: 'Yellow Cards',
            fc: 'Fouls',
            c: 'Corners',
            of: 'Offsides',
            events_sent: 'Events Sent'
        }

        $rootScope.SocketInstances = [];
        var messageCount = 0;
        $rootScope.dataset = [{
            data: [],
            yaxis: 1,
            label: 'Users',
            color: "#1ba3cd"
        }];

        $rootScope.usersCount = 0;
        var upsert = function (arr, key, newval) {
            var match = _.find(arr, key);
            if (match) {
                var index = _.indexOf(arr, _.find(arr, key));
                arr.splice(index, 1, newval);
            } else {
                arr.push(newval);
            }
        };
        return {
            transStat: function (stat) {
                var trStat = statsTransalations[stat];
                if (trStat)
                    return statsTransalations[stat];
                else
                    return stat;
            },
            ParseStats: function (payload) {

                // console.log(payload);
                messageCount++;

                switch (payload.type) {
                    case "socket_stats":
                        upsert($rootScope.SocketInstances, { instance: payload.data.instance }, payload.data);
                        break;
                }

                // Total User Counts
                $rootScope.administratorsCount = 0;
                $rootScope.usersCount = _.reduce($rootScope.SocketInstances, function (sum, n) {
                    var minus = 0;
                    var Administrators = _.find(n.rooms, { 'room': 'Administration' });
                    if (Administrators) {
                        minus = Administrators.count;
                        $rootScope.administratorsCount += minus;
                    }
                    return sum + n.connections - minus;
                }, 0);



                // if (wsData.users) {

                //     //$scope.dataset = [{"yaxis":1,"label":"Users","data":[["4:19:32",1],["4:19:42",10],["4:19:52",1],["4:20:02",1],["4:20:12",1],["4:20:22",6],["4:20:32",1],["4:20:42",4],["4:20:52",1]],"color":"#1ba3cd"}];
                //     $rootScope.usersCount = wsData.users;
                //     $rootScope.dataset[0].data.push([moment().format("h:mm:ss"), wsData.users]);

                //     if ($rootScope.dataset[0].data.length > 14) $rootScope.dataset[0].data.shift();
                // }
            }
        }
    }


    appRun.$inject = ['$rootScope', '$state', '$stateParams', '$window', '$templateCache', 'Colors', 'jwtHelper', '$location', '$cookieStore', '$http', '$websocket', '$mdToast', '$timeout', 'StatsService'];

    function appRun($rootScope, $state, $stateParams, $window, $templateCache, Colors, jwtHelper, $location, $cookieStore, $http, $websocket, $mdToast, $timeout, StatsService) {

        // Set reference to access them from any scope
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.$storage = $window.localStorage;

        $rootScope.toggleEnvironment = function () {
            if ($rootScope.serverEnvironment == 'production')
                $rootScope.serverEnvironment = $rootScope.$storage.environment = 'development';
            else
                $rootScope.serverEnvironment = $rootScope.$storage.environment = 'production';

            toast('Environment: ' + $rootScope.serverEnvironment);

            $timeout(function () {
                $window.location.reload()
            }, 2000);

        };


        $rootScope.toast = function (message) {
            toast(message);
        }

        function toast(message) {
            $mdToast.show({
                template: '<md-toast class="sportimo-toast" style="z-index: 130; position: fixed;">' +
                '<div class="sportimo-toast-heading text-center">' +
                '<img src="app/img/sportimo/icon_sportimo-white_64.png" alt="App Logo" class="pull-left">' +
                '</div>' +
                '<div>' + message +
                '</div>' +
                '</md-toast>',
                hideDelay: 5000,
                position: 'top right'
            });
        }

        $rootScope.servers = {
            production: {
                data_server: '',
                game_server: 'http://gameserverv2-56657.onmodulus.net/',
                sockets: 'wss://socketserverv2-56658.onmodulus.net/'
            },
            development: {
                data_server: '',
                game_server: 'http://localhost:3030/',
                sockets: 'wss://socketserverv2-56658.onmodulus.net/'
                // sockets: 'ws://localhost:8080/'
            }
        };

        $rootScope.serverEnvironment = $rootScope.$storage.environment || 'production';

        $rootScope.reconnectSocket = function () {
            $rootScope.dataStream = $websocket($rootScope.servers[$rootScope.serverEnvironment].sockets);
        };


        $rootScope.dataStream = $websocket($rootScope.servers[$rootScope.serverEnvironment].sockets);

        $rootScope.socketConnection = false;
        $rootScope.dataStream.onOpen(function () {
            console.log("SOCKET: Opened");
            $rootScope.socketConnection = true;
            var user = JSON.parse($rootScope.$storage.currentUser);
            console.log(user);
            // Register to socket with ID
            $rootScope.dataStream.send(JSON.stringify({ "register": { "uid": user._id, "uname": user.name, "admin": true } }));
        });
        $rootScope.dataStream.onClose(function () {
            $rootScope.socketConnection = false;
        });
        $rootScope.dataStream.onError(function () {
            $rootScope.socketConnection = false;
        });

        $rootScope.dataStream.onMessage(function (message) {
            var wsData = JSON.parse(message.data);

            if (wsData.type.indexOf('stats'))
                StatsService.ParseStats(wsData);


            //activate();
        });


        // Uncomment this to disable template cache
        /*$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
         if (typeof(toState) !== 'undefined'){
         $templateCache.remove(toState.templateUrl);
         }
         });*/

        // Allows to use branding color with interpolation
        // {{ colorByName('primary') }}
        $rootScope.colorByName = Colors.byName;

        // cancel click event easily
        $rootScope.cancel = function ($event) {
            $event.stopPropagation();
        };

        // Hooks Example
        // ----------------------------------- 

        // Hook not found
        $rootScope.$on('$stateNotFound',
            function (event, unfoundState /*, fromState, fromParams*/) {
                console.log(unfoundState.to); // "lazy.state"
                console.log(unfoundState.toParams); // {a:1, b:2}
                console.log(unfoundState.options); // {inherit:false} + default options
            });
        // Hook error
        $rootScope.$on('$stateChangeError',
            function (event, toState, toParams, fromState, fromParams, error) {
                console.log(error);
            });
        // Hook success
        $rootScope.$on('$stateChangeSuccess',
            function ( /*event, toState, toParams, fromState, fromParams*/) {
                // display new view from top
                $window.scrollTo(0, 0);
                // Save the route title
                $rootScope.currTitle = $state.current.title;
            });

        // Load a title dynamically
        $rootScope.currTitle = $state.current.title;
        $rootScope.pageTitle = function () {
            var title = $rootScope.app.name + ' - ' + ($rootScope.currTitle || $rootScope.app.description);
            document.title = title;
            return title;
        };

        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};

        $rootScope.user = null;

        // if ($rootScope.globals.currentUser) {
        //     $rootScope.user = JSON.parse($rootScope.globals.currentUser);
        //     //$http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        // }

        // if ($rootScope.$storage.currentUser){
        //     $rootScope.user = JSON.parse($rootScope.$storage.currentUser);

        //     if($rootScope.user)
        //         $http.defaults.headers.common['X-Access-Token'] = $rootScope.user.token // jshint ignore:line
        // }



        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            //var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser || $rootScope.$storage.currentUser;
            if (loggedIn && $rootScope.user && $rootScope.user.token) {
                var tokenHasExpired = jwtHelper.isTokenExpired($rootScope.user.token);
                //    var tokenPayload = jwtHelper.decodeToken($rootScope.user.token);
                var tokenExpirationDate = jwtHelper.getTokenExpirationDate($rootScope.user.token);
                //    console.log(tokenHasExpired);
                console.log("Login expires at: " + tokenExpirationDate);
                //      console.log(tokenPayload);
            }
            if (!loggedIn || tokenHasExpired) {
                $location.path('/page/login');
            }
        });

    }

})();


(function () {
    'use strict';

    angular
        .module('app.polls')
        .controller('SportimoPollsController', SportimoPollsController)
        .filter('reverse', function () {
            return function (items) {
                return items.slice().reverse();
            };
        });


    SportimoPollsController.$inject = ['$scope', 'Restangular', 'toaster', '$state',];

    function SportimoPollsController($scope, Restangular, toaster, $state) {

        'use strict';

        $scope.getPercentFor = function (results, index) {
            var sum = 0;
            for (var i in results) {
                sum += results[i];
            }

            var percentage = Math.round(((results[index] / sum) * 10000) / 100);

            return percentage;
        };

        //$scope.knobLoaderData1 = 80;
        $scope.knobLoaderOptions1 = {
            width: '100', // responsive
            height: '100',
            displayInput: true,
            fgColor: '#2196f3',
            readOnly: true
        };

        $scope.allItems = [];

        var Items = Restangular.all('v1/polls');


        Restangular.setBaseUrl($rootScope.servers[$rootScope.serverEnvironment].game_server);
        //        Restangular.setBaseUrl('http://sportimo_api.mod.bz/api/');
        //Restangular.setBaseUrl('http://127.0.0.1:8080/api/');

        Restangular.setRestangularFields({
            id: "_id"
        });
        //Restangular.setDefaultRequestParams({ apiKey: '4f847ad3e4b08a2eed5f3b54' })


        function loadItems() {
            Items.getList().then(function (data) {
                $scope.allItems = data;
            });
        }

        loadItems();


        $scope.composeItem = false;
        $scope.activeItem;

        $scope.newPoll = function () {
            $scope.composeItem = true;
        };

        $scope.updateItem = function (item) {
            item.save().then(function (res) {
                toaster.pop("success", "Task Completed", res);
            })
        };

        $scope.pushPoll = function (poll) {

            console.log(poll);
            var newquest = angular.copy(poll);

            if (newquest.matchid == undefined) {
                toaster.pop("toast-error", "Task Error", "The id of the match is required in order to post a poll");
                return;
            }


            Items.post(newquest).then(function (poll) {
                $scope.allItems.push(newquest);
                $scope.activeItem = null;
                $scope.composeItem = false;
                toaster.pop("success", "Success", "Successfuly added a new poll");

            });
        };

        $scope.delete = function (item) {
            $scope.loading = true;

            console.log(item);
            item.remove().then(function (res, err) {
                console.log(res);
                console.log(err);
                $scope.loading = false;
                // Remove the deleted question from the array
                //  var index = $scope.Users.indexOf(item);
                // if (index > -1) $scope.Users.splice(index, 1);
                toaster.pop("success", "Task Completed", "Poll deleted succsesfuly");
                $scope.activeItem = null;
                $state.go($state.current, {}, {
                    reload: true
                });

                //    var message = JSON.stringify({screen:"users",method:"update"});
                //   ws.send(message);
                //    });
                //}, function (reason) {
                //    //console.log('Modal promise rejected. Reason: ', reason);
            });

        }


    }
})();

(function () {
    'use strict';

    angular
        .module('app.welcomes')
        .controller('SportimoWelcomesController', SportimoWelcomesController)
        .filter('reverse', function () {
            return function (items) {
                return items.slice().reverse();
            };
        });


    SportimoWelcomesController.$inject = ['$scope', 'Restangular', 'toaster'];

    function SportimoWelcomesController($scope, Restangular, toaster) {


        'use strict';


        $scope.allItems = [];

        var Items = Restangular.all('v1/welcomepanels');


        Restangular.setBaseUrl($rootScope.servers[$rootScope.serverEnvironment].game_server);
        //        Restangular.setBaseUrl('http://sportimo_api.mod.bz/api/');
        //Restangular.setBaseUrl('http://127.0.0.1:4242/api/');
        //
        Restangular.setRestangularFields({
            id: "_id"
        });
        //Restangular.setDefaultRequestParams({ apiKey: '4f847ad3e4b08a2eed5f3b54' })


        function loadItems() {
            Items.getList().then(function (data) {
                $scope.allItems = data;
            });
        }

        loadItems();


        $scope.composeItem = false;
        $scope.activeItem;

        $scope.newPoll = function () {


            $scope.composeItem = true;
            setnow();
        };

        $scope.updateItem = function (item) {

            var newquest = angular.copy(item);

            newquest.save().then(function (res) {
                toaster.pop("success", "Task Completed", res);
            })
        };

        $scope.pushItem = function (item) {


            var newquest = angular.copy(item);

            if (newquest.matchid == undefined) {
                toaster.pop("toast-error", "Task Error", "The id of the match is required in order to post a new item");
                return;
            }

            console.log(newquest);

            Items.post(newquest).then(function (poll) {
                $scope.allItems.push(newquest);
                $scope.activeItem = null;
                $scope.composeItem = false;
                toaster.pop("success", "Success", "Successfuly added a new item");

            });
        };

        $scope.delete = function (item) {
            $scope.loading = true;

            item.remove().then(function (res, err) {
                console.log(res);
                console.log(err);
                $scope.loading = false;
                // Remove the deleted question from the array
                //  var index = $scope.Users.indexOf(item);
                // if (index > -1) $scope.Users.splice(index, 1);
                toaster.pop("success", "Task Completed", "Poll deleted succsesfuly");
                $scope.activeItem = null;
                $state.go($state.current, {}, {
                    reload: true
                });

                //    var message = JSON.stringify({screen:"users",method:"update"});
                //   ws.send(message);
                //    });
                //}, function (reason) {
                //    //console.log('Modal promise rejected. Reason: ', reason);
            });

        };

        function setnow() {
            var now = new Date();
            $scope.activeItem = {
                date: Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
                    now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds())
            };

        }


        $scope.today = function () {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function () {
            $scope.dt = null;
        };

        // Disable weekend selection
        $scope.disabled = function (date, mode) {
            return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
        };

        $scope.toggleMin = function () {
            $scope.minDate = $scope.minDate ? null : new Date();
        };
        $scope.toggleMin();

        $scope.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened = true;
        };

        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };

        $scope.initDate = new Date('2016-15-20');
        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];


    }
})();


(function () {
    'use strict';

    angular
        .module('app.core')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'AuthenticationService'];

    function LoginController($location, AuthenticationService) {
        var vm = this;

        vm.login = login;
        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {

            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {

                if (response.success && response.admin) {
                    AuthenticationService.SetCredentials(response._id, vm.username, vm.password, response.name, response.admin, response.pic, response.token);
                    $location.path('/');
                } else {
                    console.log(response.message);
                    vm.dataLoading = false;
                }
            })
        }
    }

})();

//(function () {
//    'use strict';
//
//    angular
//        .module('app.core')
//        .factory('wsData', wsData);
//
//    wsData.$inject = ['ngWebSocket'];
//
//    function wsData($websocket) {
//            //// Open a WebSocket connection
//            //var dataStream = $websocket('wss://website.com/data');
//            //
//            //var collection = [];
//            //
//            //dataStream.onMessage(function (message) {
//            //    collection.push(JSON.parse(message.data));
//            //});
//            //
//            //var methods = {
//            //    collection: collection,
//            //    get: function () {
//            //        dataStream.send(JSON.stringify({action: 'get'}));
//            //    }
//            //};
//            //
//            //return methods;
//
//
//
//        };
//})();

(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('UserService', UserService);

    UserService.$inject = ['$timeout', '$filter', '$q'];

    function UserService($timeout, $filter, $q) {


        var service = {};

        service.GetAll = GetAll;
        service.GetById = GetById;
        service.GetByUsername = GetByUsername;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;

        return service;





        return {
            getSchedule: function () {
                var Defer = $q.defer();
                Schedule.getList().then(function (schedule) {
                    Defer.resolve(schedule);
                });
                return Defer.promise;
            },

            addMatch: function (newMatch) {
                var Defer = $q.defer();
                Schedule.post(newMatch).then(function (match) {
                    console.log(match);
                    Defer.resolve(match);
                }, function () {
                    console.log("There was an error saving");
                });
                return Defer.promise;
            },

            updateMatch: function (updatedMatch) {
                var Defer = $q.defer();
                var match = _.cloneDeep(updatedMatch);
                updatedMatch.home_team = updatedMatch.home_team._id.$oid;
                updatedMatch.away_team = updatedMatch.away_team._id.$oid;
                updatedMatch.save().then(function (res) {
                    updatedMatch.home_team = match.home_team;
                    updatedMatch.away_team = match.away_team
                    Defer.resolve(res);
                })
                return Defer.promise;
            },


            deleteMatch: function (match) {
                var Defer = $q.defer();
                match.remove().then(function (res) {
                    Defer.resolve(res);
                })
                return Defer.promise;
            }
        }



        function GetAll() {
            var deferred = $q.defer();
            deferred.resolve(getUsers());
            return deferred.promise;
        }

        function GetById(id) {
            var deferred = $q.defer();
            var filtered = $filter('filter')(getUsers(), {
                id: id
            });
            var user = filtered.length ? filtered[0] : null;
            deferred.resolve(user);
            return deferred.promise;
        }

        function GetByUsername(username) {

            var deferred = $q.defer();
            var filtered = $filter('filter')(getUsers(), {
                username: username
            });
            var user = filtered.length ? filtered[0] : null;
            deferred.resolve(user);
            return deferred.promise;
        }


        function Create(user) {
            var deferred = $q.defer();

            // simulate api call with $timeout
            $timeout(function () {
                GetByUsername(user.username)
                    .then(function (duplicateUser) {
                        if (duplicateUser !== null) {
                            deferred.resolve({
                                success: false,
                                message: 'Username "' + user.username + '" is already taken'
                            });
                        } else {
                            var users = getUsers();

                            // assign id
                            var lastUser = users[users.length - 1] || {
                                id: 0
                            };
                            user.id = lastUser.id + 1;

                            // save to local storage
                            users.push(user);
                            setUsers(users);

                            deferred.resolve({
                                success: true
                            });
                        }
                    });
            }, 1000);

            return deferred.promise;
        }

        function Update(user) {
            var deferred = $q.defer();

            var users = getUsers();
            for (var i = 0; i < users.length; i++) {
                if (users[i].id === user.id) {
                    users[i] = user;
                    break;
                }
            }
            setUsers(users);
            deferred.resolve();

            return deferred.promise;
        }

        function Delete(id) {
            var deferred = $q.defer();

            var users = getUsers();
            for (var i = 0; i < users.length; i++) {
                var user = users[i];
                if (user.id === id) {
                    users.splice(i, 1);
                    break;
                }
            }
            setUsers(users);
            deferred.resolve();

            return deferred.promise;
        }

        // private functions

        function getUsers() {


            //if(!localStorage.users){
            localStorage.users = JSON.stringify(
                [
                    {
                        username: "harris",
                        password: "GoingUp123!",
                        name: 'Harris',
                        job: 'Project manager',
                        picture: 'app/img/sportimo/user2.jpg'
                    },
                    {
                        username: "aris",
                        password: ",",
                        name: 'Aris',
                        job: 'Bedbug CTO',
                        picture: 'app/img/sportimo/user1.jpg'

                    }
                ]);
            //}
            //console.log(localStorage.users);
            return JSON.parse(localStorage.users);
        }

        function setUsers(users) {
            localStorage.users = JSON.stringify(users);
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('AuthenticationService', AuthenticationService);

    AuthenticationService.$inject = ['$http', '$cookieStore', '$rootScope', '$timeout', 'UserService', 'Restangular'];

    function AuthenticationService($http, $cookieStore, $rootScope, $timeout, UserService, Restangular) {
        var service = {};
        var ServerUsers = Restangular.all('v1/users/authenticate');
        // Restangular.setBaseUrl($rootScope.servers['development'].game_server);
        Restangular.setBaseUrl($rootScope.servers[$rootScope.serverEnvironment].game_server);
        Restangular.setRestangularFields({
            id: "_id"
        });


        service.Login = Login;
        service.SetCredentials = SetCredentials;
        service.ClearCredentials = ClearCredentials;

        return service;

        function Login(username, password, callback) {



            /* Dummy authentication for testing, uses $timeout to simulate api call
             ----------------------------------------------*/
            // $timeout(function() {
            //     var response;
            //     UserService.GetByUsername(username)
            //         .then(function(user) {

            //             if (user !== null && user.password === password) {
            //                 $rootScope.user = {
            //                     name: user.name,
            //                     job: user.job,
            //                     picture: user.picture
            //                 };
            //                 response = {
            //                     success: true
            //                 };
            //             } else {
            //                 response = {
            //                     success: false,
            //                     message: 'Username or password is incorrect'
            //                 };
            //             }
            //             callback(response, user.name, user.job, user.picture);
            //         });
            // }, 1000);

            /* Use this for real authentication
             ----------------------------------------------*/
            ServerUsers.post({
                username: username,
                password: password
            }).then(function (responseUser) {
                callback(responseUser);
            }, function () {
                console.log("There was an error saving");
            });


            // $http.post('/api/authenticate', { username: username, password: password })
            //    .success(function (response) {
            //        callback(response);
            //    });

        }

        function SetCredentials(_id, username, password, name, admin, picture, token) {
            var authdata = Base64.encode(username + ':' + password);

            var currentUser = {
                _id: _id,
                username: username,
                authdata: authdata,
                name: name,
                admin: admin,
                picture: picture,
                token: token
            };
            console.log("-------------------------");
            console.log(currentUser);
            $rootScope.$storage.currentUser = JSON.stringify(currentUser);
            $rootScope.user = JSON.parse($rootScope.$storage.currentUser);
            $rootScope.globals.currentUser = JSON.stringify(currentUser);

            $http.defaults.headers.common['X-Access-Token'] = token // jshint ignore:line
            $cookieStore.put('globals', $rootScope.globals);

        }

        function ClearCredentials() {
            $rootScope.globals = {};
            $cookieStore.remove('globals');
            //$http.defaults.headers.common.Authorization = 'Basic ';
        }
    }

    // Base64 encoding service used by AuthenticationService
    var Base64 = {

        keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',

        encode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;

            do {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);

                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;

                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }

                output = output +
                    this.keyStr.charAt(enc1) +
                    this.keyStr.charAt(enc2) +
                    this.keyStr.charAt(enc3) +
                    this.keyStr.charAt(enc4);
                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";
            } while (i < input.length);

            return output;
        },

        decode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;

            // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
            var base64test = /[^A-Za-z0-9\+\/\=]/g;
            if (base64test.exec(input)) {
                window.alert("There were invalid base64 characters in the input text.\n" +
                    "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                    "Expect errors in decoding.");
            }
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

            do {
                enc1 = this.keyStr.indexOf(input.charAt(i++));
                enc2 = this.keyStr.indexOf(input.charAt(i++));
                enc3 = this.keyStr.indexOf(input.charAt(i++));
                enc4 = this.keyStr.indexOf(input.charAt(i++));

                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;

                output = output + String.fromCharCode(chr1);

                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }

                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";

            } while (i < input.length);

            return output;
        }
    };

})();


(function () {
    'use strict';

    angular
        .module('app.pushes')
        .filter('filterLastAction', function () {
            return function (items, coddition) {

                if (!coddition) return items;

                var df = new Date();
                df.setMinutes(df.getMinutes() - 20);
                //console.log(df);
                var result = [];
                for (var i = 0; i < items.length; i++) {

                    var tf = new Date(items[i].last_action_time);

                    if (tf > df) {
                        result.push(items[i]);
                        //console.log(tf);
                    }
                }

                return result;
            };
        })
        .controller('SportimoPushesController', SportimoPushesController);


    SportimoPushesController.$inject = ['$scope', 'Restangular', 'toaster'];


    function SportimoPushesController($scope, Restangular, toaster) {

        $scope.pushLoading = false;
        $scope.reloadingServer = false;
        $scope.allItems = [];
        $scope.push = {};

        var Items = Restangular.all('users');
        var Push = Restangular.all('push');

        Restangular.setBaseUrl($rootScope.servers[$rootScope.serverEnvironment].game_server + 'v1/notifications/');
        //        Restangular.setBaseUrl('http://sportimo_cardsserver.mod.bz/v1/notifications/');
        //Restangular.setBaseUrl('http://localhost:3030/v1/notifications/');
        Restangular.setRestangularFields({
            id: "_id"
        });


        function loadItems() {
            Items.getList().then(function (data) {
                $scope.allItems = data;
            });
        }

        loadItems();

        //$scope.RefreshUsers = function(){
        //    console.log("refresh");
        //}


        $scope.$on('panel-refresh', function (event, id) {
            $scope.pushLoading = true;
            console.log('Simulating chart refresh during 3s on #' + id);
            Items.getList().then(function (data, err) {
                if (!err)
                    $scope.allItems = data;
                $scope.$broadcast('removeSpinner', id);
                $scope.pushLoading = false;

            });

            //// Instead of timeout you can request a chart data
            //$timeout(function () {
            //
            //    // directive listen for to remove the spinner
            //    // after we end up to perform own operations
            //    $scope.$broadcast('removeSpinner', id);
            //
            //    console.log('Refreshed #' + id);
            //
            //}, 3000);

        });

        $scope.FormatDate = function (date) {

            var d = new Date(date);
            var d_string = ("0" + d.getDate()).slice(-2) + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" +
                d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);

            return d_string;
        };


        $scope.pushRequest = function (Users, message, data) {
            $scope.pushLoading = true;

            if (message == undefined) {
                toaster.pop("error", "Error", "Message cannot be empty");
                $scope.pushLoading = false;
                return;
            }

            var Request = {
                application: $scope.pushService.selected.id,
                tokens: _.pluck(Users, 'pushtoken'),
                message: JSON.parse(message),
                data: data != undefined ? JSON.parse(JSON.stringify(data)) : data
            };

            Push.post(Request).then(function (res) {
                $scope.pushLoading = false;
                toaster.pop("success", "Success", "Successfuly sent Push Request");
                console.log(res);
            }, function () {
                $scope.pushLoading = false;
                console.log("There was an error saving");
            });

        };

        $scope.demomessage = "Message can be multilingual. You can send them as objects like the Data format. \n ex. \n";
        $scope.demomessage += JSON.stringify({
            "en": "English",
            "ru": "Русский",
            "de": "Deutsch"
        }, null, 4);

        $scope.demodata = JSON.stringify({
            "match_id": "435",
            "screen": "match"
        }, null, 4);


        // SELECTION

        $scope.onServiceSelected = function (item, model) {

            $scope.selectedService = item.id;


        };

        $scope.onSelected = function (item, model) {

            $scope.push.message = JSON.stringify(item.message, null, 4);

        };

        $scope.onDataSelected = function (item) {

            item.message.match_id = $scope.matchIdFilter;
            $scope.push.data = JSON.stringify(item.message, null, 4);

        };

        ////////////////
        $scope.selectedService = "";
        $scope.pushService = {};
        $scope.pushServices = [
            {
                name: 'Production',
                id: "F18C2-2FBDB"
            },
            {
                name: 'Development',
                id: "CDE00-B154C"
            }
        ];

        $scope.pushService.selected = $scope.pushServices[0];


        $scope.disabled = undefined;

        $scope.enable = function () {
            $scope.disabled = false;
        };

        $scope.disable = function () {
            vm.disabled = true;
        };

        $scope.clear = function () {
            vm.template.selected = undefined;
        };

        $scope.template = {};
        $scope.templates = [
            {
                name: 'Blank',
                message: {
                    "en": "_message_",
                    "ru": "_message_"
                }
            },
            {
                name: 'New question',
                message: {
                    "en": "Question coming in about a minute! Don't miss it...",
                    "ru": "Мы зададим следующий вопрос через минуту"
                }
            }
        ];

        $scope.templateData = {};
        $scope.templatesData = [
            {
                name: 'Blank Key/Value',
                message: {
                    "_key_": "_value_"
                }
            },
            {
                name: 'Set Match Screen',
                message: {
                    "screen": "match",
                    "match_id": "_message_"
                }
            }
        ];


        // Multiple
        $scope.someGroupFn = function (item) {

            if (item.name[0] >= 'A' && item.name[0] <= 'M')
                return 'From A - M';

            if (item.name[0] >= 'N' && item.name[0] <= 'Z')
                return 'From N - Z';

        };

        $scope.counter = 0;
        $scope.someFunction = function (item, model) {
            $scope.counter++;
            $scope.eventResult = {
                item: item,
                model: model
            };
        };

        $scope.availableColors = ['Red', 'Green', 'Blue', 'Yellow', 'Magenta', 'Maroon', 'Umbra', 'Turquoise'];

        $scope.multipleDemo = {};
        $scope.multipleDemo.colors = ['Blue', 'Red'];
        $scope.multipleDemo.selectedPeople = [$scope.templates[5], $scope.templates[4]];
        $scope.multipleDemo.selectedPeopleWithGroupBy = [$scope.templates[8], $scope.templates[6]];
        $scope.multipleDemo.selectedPeopleSimple = ['samantha@email.com', 'wladimir@email.com'];


    }
})();


(function () {
    'use strict';

    angular
        .module('app.activities')
        .controller('SportimoActivitiesController', SportimoActivitiesController)
        .filter('reverse', function () {
            return function (items) {
                return items.slice().reverse();
            };
        });
    SportimoActivitiesController.$inject = ['$scope', 'Restangular', 'toaster'];

    function SportimoActivitiesController($scope, Restangular, toaster) {


        'use strict';

        $scope.allItems = [];

        var Items = Restangular.all('v1/activities');


        Restangular.setBaseUrl($rootScope.servers[$rootScope.serverEnvironment].game_server);
        //        Restangular.setBaseUrl('http://sportimo_api.mod.bz/api/');
        //Restangular.setBaseUrl('http://127.0.0.1:4242/api/');
        //
        Restangular.setRestangularFields({
            id: "_id"
        });
        //Restangular.setDefaultRequestParams({ apiKey: '4f847ad3e4b08a2eed5f3b54' })


        function loadItems() {
            Items.getList().then(function (data) {
                $scope.allItems = data;
            });
        }

        loadItems();


        $scope.composeItem = false;
        $scope.activeItem;

        $scope.newPoll = function () {


            $scope.composeItem = true;
            setnow();
        };

        $scope.updateItem = function (item) {
            item.save().then(function (res) {
                toaster.pop("success", "Task Completed", res);
            })
        };

        $scope.pushItem = function (item) {


            var newquest = angular.copy(item);

            if (newquest.matchid == undefined) {
                toaster.pop("toast-error", "Task Error", "The id of the match is required in order to post a new item");
                return;
            }


            Items.post(newquest).then(function (poll) {
                $scope.allItems.push(newquest);
                $scope.activeItem = null;
                $scope.composeItem = false;
                toaster.pop("success", "Success", "Successfuly added a new item");

            });
        };

        $scope.delete = function (item) {
            $scope.loading = true;

            item.remove().then(function (res, err) {
                console.log(res);
                console.log(err);
                $scope.loading = false;
                // Remove the deleted question from the array
                //  var index = $scope.Users.indexOf(item);
                // if (index > -1) $scope.Users.splice(index, 1);
                toaster.pop("success", "Task Completed", "Poll deleted succsesfuly");
                $scope.activeItem = null;
                $state.go($state.current, {}, {
                    reload: true
                });

                //    var message = JSON.stringify({screen:"users",method:"update"});
                //   ws.send(message);
                //    });
                //}, function (reason) {
                //    //console.log('Modal promise rejected. Reason: ', reason);
            });

        };

        function setnow() {
            var now = new Date();
            $scope.activeItem = {
                date: Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
                    now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds())
            };

        }


        $scope.today = function () {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function () {
            $scope.dt = null;
        };

        // Disable weekend selection
        $scope.disabled = function (date, mode) {
            return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
        };

        $scope.toggleMin = function () {
            $scope.minDate = $scope.minDate ? null : new Date();
        };
        $scope.toggleMin();

        $scope.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened = true;
        };

        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };

        $scope.initDate = new Date('2016-15-20');
        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];

    }

})();

(function () {
    'use strict';

    angular
        .module('app.interviews')
        .controller('SportimoInterviewsController', SportimoInterviewsController)
        .filter('reverse', function () {
            return function (items) {
                return items.slice().reverse();
            };
        })
        //.filter('dateToISO', function() {
        //    return function(input) {
        //        if (input[0]) {
        //            input[0].date = moment(new Date(input[0].date)).toISOString();
        //        }
        //        return input;
        //    };
        //});
        ;

    SportimoInterviewsController.$inject = ['$scope', 'Restangular', 'toaster', '$state'];

    function SportimoInterviewsController($scope, Restangular, toaster, $state) {


        'use strict';

        $scope.allItems = [];

        var Items = Restangular.all('v1/interviews');


        Restangular.setBaseUrl($rootScope.servers[$rootScope.serverEnvironment].game_server);
        //        Restangular.setBaseUrl('http://sportimo_api.mod.bz/api/');
        //Restangular.setBaseUrl('http://127.0.0.1:4242/api/');
        //
        Restangular.setRestangularFields({
            id: "_id"
        });
        //Restangular.setDefaultRequestParams({ apiKey: '4f847ad3e4b08a2eed5f3b54' })


        function loadItems() {
            Items.getList().then(function (data) {
                $scope.allItems = data;
            });
        }

        loadItems();


        $scope.composeItem = false;
        $scope.activeItem;

        $scope.newPoll = function () {


            $scope.composeItem = true;
            setnow();
        };

        $scope.updateItem = function (item) {
            console.log(item.date);
            item.save().then(function (res) {
                toaster.pop("success", "Task Completed", res);
            })
        };

        $scope.pushItem = function (item) {


            var newquest = angular.copy(item);

            console.log(moment(newquest.date).format());

            console.log(moment.utc(newquest.date).format());

            if (newquest.matchid == undefined) {
                toaster.pop("toast-error", "Task Error", "The id of the match is required in order to post a new item");
                return;
            }


            Items.post(newquest).then(function (poll) {
                $scope.allItems.push(newquest);
                $scope.activeItem = null;
                $scope.composeItem = false;
                toaster.pop("success", "Success", "Successfuly added a new item");

            });
        };

        $scope.delete = function (item) {
            $scope.loading = true;

            item.remove().then(function (res, err) {
                console.log(res);
                console.log(err);
                $scope.loading = false;
                // Remove the deleted question from the array
                //  var index = $scope.Users.indexOf(item);
                // if (index > -1) $scope.Users.splice(index, 1);
                toaster.pop("success", "Task Completed", "Poll deleted succsesfuly");
                $scope.activeItem = null;
                $state.go($state.current, {}, {
                    reload: true
                });

                //    var message = JSON.stringify({screen:"users",method:"update"});
                //   ws.send(message);
                //    });
                //}, function (reason) {
                //    //console.log('Modal promise rejected. Reason: ', reason);
            });

        };

        function setnow() {
            var now = new Date();
            $scope.activeItem = {
                date: Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
                    now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds())
            };

        }


        $scope.today = function () {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function () {
            $scope.dt = null;
        };

        // Disable weekend selection
        $scope.disabled = function (date, mode) {
            return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
        };

        $scope.toggleMin = function () {
            $scope.minDate = $scope.minDate ? null : new Date();
        };
        $scope.toggleMin();

        $scope.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened = true;
        };

        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };

        $scope.initDate = new Date('2016-15-20');
        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];

    }

})();

/*************************************************
 * ***********************************************
 * ***********************************************
 */
/**=========================================================
 * Module: calendar-ui.js
 * This script handle the calendar demo with draggable
 * events and events creations
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.extras')
        .directive('calendar', calendar);

    calendar.$inject = ['$rootScope',];

    function calendar($rootScope) {
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element) {

            if (!$.fn.fullCalendar) return;

            // The element that will display the calendar
            var calendar = element;

            scope.myCalendar = calendar;

            initCalendar(calendar, $rootScope.app.layout.isRTL, scope);

            scope.startRange = calendar.fullCalendar('getView').start;
            scope.endRange = calendar.fullCalendar('getView').end;
        }
    }


    // global shared var to know what we are dragging
    var draggingEvent = null;

    /**
     * Invoke full calendar plugin and attach behavior
     * @param  jQuery [calElement] The calendar dom element wrapped into jQuery
     * @param  EventObject [events] An object with the event list to load when the calendar displays
     */
    function initCalendar(calElement, isRTL, scope) {

        // check to remove elements from the list
        var removeAfterDrop = $('#remove-after-drop');

        calElement.fullCalendar({
            isRTL: isRTL,
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            buttonIcons: { // note the space at the beginning
                prev: ' fa fa-caret-left',
                next: ' fa fa-caret-right'
            },
            buttonText: {
                today: 'today',
                month: 'month',
                week: 'week',
                day: 'day'
            },
            viewRender: function (view, element) {
                scope.startRange = view.start;
                scope.endRange = view.end;

                if (scope.LoadedDT) {
                    scope.LoadedDT.DataTable.search('');
                    scope.LoadedDT.rerender();

                }
                if (!scope.$$phase)
                    scope.$apply();
            },
            eventStartEditable: true,
            eventDrop: function (event, delta, revertFunc) {


                var hookedEvent = _.findWhere(scope.events, {
                    "_id": event._id
                });

                if (hookedEvent) {
                    console.log(hookedEvent);
                    hookedEvent.start = event.start.format();
                    hookedEvent.save();
                    scope.LoadedDT.rerender();
                }


            },
            droppable: false, // this allows things to be dropped onto the calendar 
            drop: function (date, allDay) { // this function is called when something is dropped

                var $this = $(this),
                    // retrieve the dropped element's stored Event Object
                    originalEventObject = $this.data('calendarEventObject');

                // if something went wrong, abort
                if (!originalEventObject) return;

                // clone the object to avoid multiple events with reference to the same object
                var clonedEventObject = $.extend({}, originalEventObject);

                // assign the reported date
                clonedEventObject.start = date;
                clonedEventObject.allDay = allDay;
                clonedEventObject.backgroundColor = $this.css('background-color');
                clonedEventObject.borderColor = $this.css('border-color');

                // render the event on the calendar
                // the last `true` argument determines if the event "sticks" 
                // (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                calElement.fullCalendar('renderEvent', clonedEventObject, true);

                // if necessary remove the element from the list
                if (removeAfterDrop.is(':checked')) {
                    $this.remove();
                }
            },
            dayClick: function (date, jsEvent, view) {
                scope.showDaySchedule(date, calElement);
            },
            eventColor: '#2196f3',
            eventBorderColor: '#3c8dbc',
            eventRender: function (event, element) {

                element.find(".fc-title").remove();
                element.find(".fc-time").remove();
                var new_description =
                    '<div style="height:30px; text-align: center; line-height: 30px;">' +
                    '<img style="padding-top:2px;" class="pull-left" src="http://ep7t6ae.cloudimg.io/s/height/25/' + event.home_team.logo + '">' +
                    '<img style="padding-top:2px;" class="pull-right" src="http://ep7t6ae.cloudimg.io/s/height/25/' + event.away_team.logo + '">' +
                    moment(event.start).format("H:mm a") +
                    +'</div>';
                element.append(new_description);
            },

            eventClick: function (calEvent, jsEvent, view) {

                var tableFilter = calEvent.start.format("DD") + "/" + calEvent.start.format("MM") + " " + calEvent.home_team.name_en + " " + calEvent.away_team.name_en;
                scope.LoadedDT.DataTable.search(tableFilter).draw();

                var hookedEvent = _.find(scope.events, {
                    "_id": calEvent._id
                });

                if (hookedEvent)
                    scope.selectedMatch = hookedEvent;

                scope.$apply();
                //                    alert('Event: ' + calEvent.title);
                //                    alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
                //                    alert('View: ' + view.name);
                //
                //                    // change the border color just for fun
                //                    $(this).css('border-color', 'red');

            },
            eventDragStart: function (event /*, js, ui*/) {
                draggingEvent = event;
            },
            // This array is the events sources
            // events: scope.events
        });
    }



})();

(function () {
    'use strict';

    angular
        .module('app.schedule')
        .service('ScheduleService', ScheduleService)
        .service('StatsComService', StatsComService)
        .controller('ScheduleController', ScheduleController);


    ScheduleService.$inject = ['$resource', 'Restangular', '$rootScope', '$q'];
    StatsComService.$inject = ['$resource', 'Restangular', '$rootScope', '$q', 'TagsService'];

    ScheduleController.$inject = ['$rootScope', '$scope', 'TeamsService', 'PlayersService', 'ScheduleService', 'DTOptionsBuilder', 'DTColumnDefBuilder', '$state', 'CompetitionsService', 'StatsComService'];

    function StatsComService($resource, Restangular, $rootScope, $q, TagsService) {

        var fixtures = Restangular.all('offline_data/fixtures');
        Restangular.setBaseUrl($rootScope.servers[$rootScope.serverEnvironment].game_server);
        Restangular.setRestangularFields({
            id: "_id"
        });
        var upfixtures = null;

        return {
            GetFixtures: function (id) {
                var Defer = $q.defer();
                if (upfixtures)
                    Defer.resolve(upfixtures)
                else
                    fixtures.get(id).then(function (result) {
                        upfixtures = result.parsers.Stats.comingFixtures;
                        console.log(upfixtures);
                        TagsService.getAllTags().then(function () {

                            _.each(upfixtures, function (fix) {
                                fix.home_team = TagsService.getTagById(fix.home_team);
                                fix.away_team = TagsService.getTagById(fix.away_team);
                            })

                            Defer.resolve(upfixtures);
                        })

                    });
                return Defer.promise;
            }
        }
    }

    function ScheduleController($rootScope, $scope, TeamsService, PlayersService, ScheduleService, DTOptionsBuilder, DTColumnDefBuilder, $state, CompetitionsService, StatsComService) {

        var vm = $scope;

        if ($rootScope.upcomingDrawer == null)
            $rootScope.upcomingDrawer = true;
            
        vm.toggleUpcomming = function(){
           $rootScope.upcomingDrawer = !$rootScope.upcomingDrawer; 
        }

        vm.view = {
            inspectorPanel: true,
            addPanel: false
        };

        vm.scheduledMatch = {};
        vm.statsSearch = { message: "First select competition" };
        // message:"Select upcoming event from Stats.com"
        vm.StatsUpcomingEvents = [];
        vm.onStatsCompetition = function () {
            StatsComService.GetFixtures(vm.statsSearch.competition).then(function (result) {
                console.log(result[0]);
                vm.StatsUpcomingEvents = result;
            })
        }

        vm.OnEventSelection = function (selection) {
            console.log(selection);
            vm.scheduledMatch = selection;
            vm.scheduledMatch.competition = vm.statsSearch.competition;
            vm.scheduledMatch.finalized = true;

        }

        $scope.formDate = function (date, style, inUTC) {
            //  console.log(date);
            //   console.log(new Date(date));
            var d = new Date(date);

            if (inUTC)
                return moment(d).utc().format(style);
            else
                return moment(d).format(style) + " (local time)";
        }


        vm.Teams = [];

        vm.OnSet = function (newDate, oldDate) {
            vm.openedCalendar = 0;

            if (vm.scheduledMatch.home_team != undefined && vm.scheduledMatch.away_team != undefined && vm.scheduledMatch.start != undefined && vm.scheduledMatch.competition != undefined)
                vm.scheduledMatch.finalized = true;

            console.log("finialized:" + vm.scheduledMatch.competition);

            //vm.scheduledMatch.title = vm.scheduledMatch.home_team.name_en + " - " + vm.scheduledMatch.away_team.name_en;
        }

        CompetitionsService.All().then(function (all) {
            vm.competitions = all;
        })


        TeamsService.getAllTeams().then(function (teams) {
            vm.Teams = teams;
        }, function (error) { });

        vm.dtOptions = DTOptionsBuilder.newOptions()
            .withPaginationType('full_numbers');

        vm.dtColumnDefs = [
            DTColumnDefBuilder.newColumnDef(4).notSortable()
        ];

        ScheduleService.getSchedule().then(function (schedule) {
            $scope.events = schedule;
            RefreshCalendar();
        }, function (error) { });

        vm.LoadedDT = null;

        vm.CreateMatchEvent = function () {
            vm.view.busy = true;
            var match = _.cloneDeep(vm.scheduledMatch);
            if (vm.scheduledMatch.home_team._id.$oid) {
                match.home_team = vm.scheduledMatch.home_team._id.$oid;
                match.away_team = vm.scheduledMatch.away_team._id.$oid;
            } else {
                match.home_team = vm.scheduledMatch.home_team._id;
                match.away_team = vm.scheduledMatch.away_team._id;
            }
            // match.competition = vm.scheduledMatch.competition;
            // match.start = vm.scheduledMatch.start;
            delete match.color;

            if (match.parserids && match.parserids.Stats) {
                match.moderation = [{
                    "type": "rss-feed",
                    "parserid": match.parserids.Stats,
                    "parsername": "Stats",
                    "active": false
                }];
            }

            ScheduleService.addMatch(match).then(function (res) {
                res.home_team = vm.scheduledMatch.home_team;
                res.away_team = vm.scheduledMatch.away_team;

                $scope.events.push(res);
                vm.scheduledMatch = {};
                RefreshCalendar();
                vm.LoadedDT.DataTable.draw();
                vm.view.busy = false;
            })
        }

        vm.UpdateMatchEvent = function (event) {
            vm.view.busy = true;
            ScheduleService.updateMatch(event).then(function (res) {
                RefreshCalendar();
                vm.view.busy = false;
            })
        }

        vm.DeleteMatchEvent = function (event) {
            vm.view.busy = true;
            ScheduleService.deleteMatch(event).then(function (res) {
                vm.events = _.without(vm.events, event);
                RefreshCalendar();
                vm.selectedMatch = null;
                vm.view.busy = false;
            })
        }

        $scope.showDaySchedule = function (newdate, calendar) {
            var tableFilter = vm.formatDate(newdate, "DD") + "/" + vm.formatDate(newdate, "MM");
            vm.LoadedDT.DataTable.search(tableFilter).draw();
        }

        $scope.formatDate = function (date, style) {
            return moment(date).utc().format(style);
        }

        vm.startRange = null;
        vm.endRange = null;

        //Filter Function
        $scope.inRange = function (start, end) {
            return function (item) {

                if (moment(item['start']) > vm.startRange && moment(item['start']) < vm.endRange) {
                    return true;
                } else {
                    return false;
                }
            }
        };

        function RefreshCalendar(calendar) {
            $scope.myCalendar.fullCalendar('removeEvents');
            $scope.myCalendar.fullCalendar('addEventSource', $scope.events);
            $scope.myCalendar.fullCalendar('rerenderEvents');
        }

        /* START of Match Context menu*/
        /* Moderate */
        $scope.ModerateMatch = function (matchid, sport) {

            $state.go("app.match-moderation-" + (sport || 'soccer'), {
                id: (matchid || "565c4af6e4b030fba33dd459")
            });
        }
        /* Edit */
        $scope.EditMatch = function (match) {
            //                console.log(match);
            vm.selectedMatch = match;
            vm.view.inspectorPanel = true;
            vm.inspectorPanel = false;
        }
        /* Change Color */
        $scope.setColor = function (color) {
            vm.selectedMatch.color = color;
            RefreshCalendar();
        }
        /* Delete */
        $scope.DeleteMatch = function (match) {
            vm.DeleteMatchEvent(match);
        }
        // Before remove panel
        $scope.$on('panel-remove', function (event, id, deferred) {

            console.log('Panel #' + id + ' removing');
            vm.view[id] = false;

        });



    }



    function ScheduleService($resource, Restangular, $rootScope, $q) {

        var mock = false;

        if (mock) {
            /* MOCK */
            var schedule = $resource('server/mockdata/schedule.json');

            return {
                getSchedule: function () {
                    return schedule.query({}, function (res) {
                        return res;
                    });
                }
            }
        } else {


            var Schedule = Restangular.all('v1/data/schedule');

            Restangular.setBaseUrl($rootScope.servers[$rootScope.serverEnvironment].game_server);
            Restangular.setRestangularFields({
                id: "_id"
            });

            return {
                getSchedule: function () {
                    var Defer = $q.defer();
                    Schedule.getList().then(function (schedule) {
                        Defer.resolve(schedule);
                    });
                    return Defer.promise;
                },

                addMatch: function (newMatch) {
                    var Defer = $q.defer();
                    Schedule.post(newMatch).then(function (match) {
                        console.log(match);
                        Defer.resolve(match);
                    }, function () {
                        console.log("There was an error saving");
                    });
                    return Defer.promise;
                },

                updateMatch: function (updatedMatch) {
                    var Defer = $q.defer();
                    var match = _.cloneDeep(updatedMatch);
                    updatedMatch.home_team = updatedMatch.home_team._id.$oid;
                    updatedMatch.away_team = updatedMatch.away_team._id.$oid;
                    updatedMatch.save().then(function (res) {
                        updatedMatch.home_team = match.home_team;
                        updatedMatch.away_team = match.away_team
                        Defer.resolve(res);
                    })
                    return Defer.promise;
                },


                deleteMatch: function (match) {
                    var Defer = $q.defer();
                    match.remove().then(function (res) {
                        Defer.resolve(res);
                    })
                    return Defer.promise;
                }
            }

        }
    }


})();

(function () {
    'use strict';

    angular.module('app.data')
        .controller('EditorController', EditorController);

    EditorController.$inject = ['$window', '$scope', '$stateParams', 'PlayersService'];

    function EditorController($window, $scope, $stateParams, PlayersService) {
        console.log($stateParams.type);
        console.log($stateParams.id);
        $scope.view = {
            selectedLoading: true
        }

        PlayersService.getPlayer($stateParams.id).then(function (player) {

            if (player)
                $scope.selectedItem = player;

            $scope.view.selectedLoading = false;
        })

    }
})();


(function () {
    'use strict';

    angular.module('app.standings')
        .service('StandingsService', StandingsService)
        .controller('StandingsController', StandingsController);

    StandingsController.$inject = ['$window', '$scope', '$stateParams', 'StandingsService'];

    function StandingsController($window, $scope, $stateParams, StandingsService) {

        var vm = $scope;
        vm.selectedCompetition = $stateParams.competition;
        vm.Standings = null;
        vm.loadedData = null;

        vm.selectedSeason = null;

        $scope.view = {
            selectedLoading: true
        }

        vm.formatDate = function (date) {
            // console.log(date);
            // console.log(moment(date).format('MMMM Do YYYY, h:mm:ss a'));
            return moment(date).utc().format('MMMM Do YYYY, h:mm:ss a');
        }

        StandingsService.All().then(function (all) {
            vm.loadedData = all;
            vm.Standings = _.uniq(vm.loadedData, 'name.en');

            if (vm.selectedCompetition) {
                vm.Seasons = _.map(_.filter(vm.loadedData, { competitionid: vm.selectedCompetition }), 'season');
                vm.selectedSeason = vm.Seasons[0];
                findStanding();
            }
            $scope.view.selectedLoading = false;
        })

        $scope.onSelectedCompetition = function (selectedItem) {
            vm.Seasons = _.map(_.filter(vm.loadedData, { competitionid: selectedItem.competitionid }), 'season');
            vm.selectedCompetition = selectedItem.competitionid;
            vm.selectedSeason = vm.Seasons[0];
            findStanding();
        }

        $scope.onSelectedSeason = function (selectedItem) {
            vm.selectedSeason = selectedItem;
            findStanding();
        }

        function findStanding() {
            vm.standing = _.filter(vm.loadedData, { competitionid: vm.selectedCompetition, season: vm.selectedSeason })[0];
        }

    }

    StandingsService.$inject = ['Restangular', '$q', '$rootScope'];

    function StandingsService(Restangular, $q, $rootScope) {

        var Standings;
        var Data = Restangular.all('v1/data/standings');

        Restangular.setBaseUrl($rootScope.servers[$rootScope.serverEnvironment].game_server);
        Restangular.setRestangularFields({
            id: "_id"
        });

        return {
            All: function () {
                var Defer = $q.defer();
                //                 Defer.resolve([{
                //     "_id": "56f51c5718e865c81b46476f",
                //     "season": 2015,
                //     "identity": "Stats",
                //     "name": {
                //         "en": "English Premier League"
                //     },
                //     "competitionid": "56f4800fe4b02f2226646297",
                //     "lastupdate": "2016-03-25T11:09:11.836Z",
                //     "created": "2016-03-25T11:09:11.836Z",
                //     "parserids": [],
                //     "visiblein": [],
                //     "teams": [
                //         {
                //             "rank": 1,
                //             "teamName": {
                //                 "ru": "Leicester City",
                //                 "ar": "ليستر سيتي",
                //                 "en": "Leicester City"
                //             },
                //             "teamId": "56e81b7c30345c282c01b2d1",
                //             "points": 66,
                //             "pointsPerGame": "2.13",
                //             "penaltyPoints": 0,
                //             "wins": 19,
                //             "losses": 3,
                //             "ties": 9,
                //             "gamesPlayed": 9,
                //             "goalsFor": 54,
                //             "goalsAgainst": 31
                //         },
                //         {
                //             "rank": 2,
                //             "teamName": {
                //                 "ru": "Тоттенхэм Хотспур",
                //                 "ar": "توتنهام هوتسبر",
                //                 "en": "Tottenham Hotspur"
                //             },
                //             "teamId": "56e81b7c30345c282c01b2d3",
                //             "points": 61,
                //             "pointsPerGame": "1.97",
                //             "penaltyPoints": 0,
                //             "wins": 17,
                //             "losses": 4,
                //             "ties": 10,
                //             "gamesPlayed": 10,
                //             "goalsFor": 56,
                //             "goalsAgainst": 24
                //         },
                //         {
                //             "rank": 3,
                //             "teamName": {
                //                 "ru": "Arsenal",
                //                 "ar": "آرسنال",
                //                 "en": "Arsenal"
                //             },
                //             "teamId": "56e81b7c30345c282c01b2e8",
                //             "points": 55,
                //             "pointsPerGame": "1.83",
                //             "penaltyPoints": 0,
                //             "wins": 16,
                //             "losses": 7,
                //             "ties": 7,
                //             "gamesPlayed": 7,
                //             "goalsFor": 48,
                //             "goalsAgainst": 30
                //         },
                //         {
                //             "rank": 4,
                //             "teamName": {
                //                 "ru": "Manchester City",
                //                 "ar": "مانشستر سيتي",
                //                 "en": "Manchester City"
                //             },
                //             "teamId": "56e81b7c30345c282c01b2c2",
                //             "points": 51,
                //             "pointsPerGame": "1.70",
                //             "penaltyPoints": 0,
                //             "wins": 15,
                //             "losses": 9,
                //             "ties": 6,
                //             "gamesPlayed": 6,
                //             "goalsFor": 52,
                //             "goalsAgainst": 32
                //         },
                //         {
                //             "rank": 5,
                //             "teamName": {
                //                 "ru": "West Ham United",
                //                 "ar": "وست هام يونايتد",
                //                 "en": "West Ham United"
                //             },
                //             "teamId": "56e81b7c30345c282c01b2c6",
                //             "points": 50,
                //             "pointsPerGame": "1.67",
                //             "penaltyPoints": 0,
                //             "wins": 13,
                //             "losses": 6,
                //             "ties": 11,
                //             "gamesPlayed": 11,
                //             "goalsFor": 47,
                //             "goalsAgainst": 35
                //         },
                //         {
                //             "rank": 6,
                //             "teamName": {
                //                 "ru": "Manchester United",
                //                 "ar": "مانشستر يونايتد",
                //                 "en": "Manchester United"
                //             },
                //             "teamId": "56e81b7c30345c282c01b309",
                //             "points": 50,
                //             "pointsPerGame": "1.67",
                //             "penaltyPoints": 0,
                //             "wins": 14,
                //             "losses": 8,
                //             "ties": 8,
                //             "gamesPlayed": 8,
                //             "goalsFor": 38,
                //             "goalsAgainst": 27
                //         },
                //         {
                //             "rank": 7,
                //             "teamName": {
                //                 "ru": "Southampton",
                //                 "ar": "ساوثمبتون",
                //                 "en": "Southampton"
                //             },
                //             "teamId": "56e81b7c30345c282c01b2ea",
                //             "points": 47,
                //             "pointsPerGame": "1.52",
                //             "penaltyPoints": 0,
                //             "wins": 13,
                //             "losses": 10,
                //             "ties": 8,
                //             "gamesPlayed": 8,
                //             "goalsFor": 41,
                //             "goalsAgainst": 32
                //         },
                //         {
                //             "rank": 8,
                //             "teamName": {
                //                 "ru": "Stoke City",
                //                 "ar": "ستوك سيتي",
                //                 "en": "Stoke City"
                //             },
                //             "teamId": "56e81b7c30345c282c01b2c0",
                //             "points": 46,
                //             "pointsPerGame": "1.48",
                //             "penaltyPoints": 0,
                //             "wins": 13,
                //             "losses": 11,
                //             "ties": 7,
                //             "gamesPlayed": 7,
                //             "goalsFor": 34,
                //             "goalsAgainst": 37
                //         },
                //         {
                //             "rank": 9,
                //             "teamName": {
                //                 "ru": "Liverpool",
                //                 "ar": "ليفربول",
                //                 "en": "Liverpool"
                //             },
                //             "teamId": "56e81b7c30345c282c01b2d5",
                //             "points": 44,
                //             "pointsPerGame": "1.52",
                //             "penaltyPoints": 0,
                //             "wins": 12,
                //             "losses": 9,
                //             "ties": 8,
                //             "gamesPlayed": 8,
                //             "goalsFor": 45,
                //             "goalsAgainst": 40
                //         },
                //         {
                //             "rank": 10,
                //             "teamName": {
                //                 "ru": "Chelsea",
                //                 "ar": "تشيلسي",
                //                 "en": "Chelsea"
                //             },
                //             "teamId": "56e81b7c30345c282c01b2ce",
                //             "points": 41,
                //             "pointsPerGame": "1.37",
                //             "penaltyPoints": 0,
                //             "wins": 10,
                //             "losses": 9,
                //             "ties": 11,
                //             "gamesPlayed": 11,
                //             "goalsFor": 45,
                //             "goalsAgainst": 41
                //         },
                //         {
                //             "rank": 11,
                //             "teamName": {
                //                 "ru": "West Bromwich Albion",
                //                 "ar": "وست بروميتش البيون",
                //                 "en": "West Bromwich Albion"
                //             },
                //             "teamId": "56e81b7c30345c282c01b2e1",
                //             "points": 39,
                //             "pointsPerGame": "1.30",
                //             "penaltyPoints": 0,
                //             "wins": 10,
                //             "losses": 11,
                //             "ties": 9,
                //             "gamesPlayed": 9,
                //             "goalsFor": 30,
                //             "goalsAgainst": 37
                //         },
                //         {
                //             "rank": 12,
                //             "teamName": {
                //                 "ru": "Everton",
                //                 "ar": "ايفرتون",
                //                 "en": "Everton"
                //             },
                //             "teamId": "56e81b7c30345c282c01b2f0",
                //             "points": 38,
                //             "pointsPerGame": "1.31",
                //             "penaltyPoints": 0,
                //             "wins": 9,
                //             "losses": 9,
                //             "ties": 11,
                //             "gamesPlayed": 11,
                //             "goalsFor": 51,
                //             "goalsAgainst": 41
                //         },
                //         {
                //             "rank": 13,
                //             "teamName": {
                //                 "ru": "Bournemouth",
                //                 "ar": "بورنموث ",
                //                 "en": "Bournemouth"
                //             },
                //             "teamId": "56e81b7c30345c282c01b2c9",
                //             "points": 38,
                //             "pointsPerGame": "1.23",
                //             "penaltyPoints": 0,
                //             "wins": 10,
                //             "losses": 13,
                //             "ties": 8,
                //             "gamesPlayed": 8,
                //             "goalsFor": 38,
                //             "goalsAgainst": 50
                //         },
                //         {
                //             "rank": 14,
                //             "teamName": {
                //                 "ru": "Watford",
                //                 "ar": "واتفورد",
                //                 "en": "Watford"
                //             },
                //             "teamId": "56e81b7c30345c282c01b2be",
                //             "points": 37,
                //             "pointsPerGame": "1.23",
                //             "penaltyPoints": 0,
                //             "wins": 10,
                //             "losses": 13,
                //             "ties": 7,
                //             "gamesPlayed": 7,
                //             "goalsFor": 30,
                //             "goalsAgainst": 32
                //         },
                //         {
                //             "rank": 15,
                //             "teamName": {
                //                 "ru": "Swansea City",
                //                 "ar": "سوانسي سيتي",
                //                 "en": "Swansea City"
                //             },
                //             "teamId": "56e81b7c30345c282c01b2d9",
                //             "points": 36,
                //             "pointsPerGame": "1.16",
                //             "penaltyPoints": 0,
                //             "wins": 9,
                //             "losses": 13,
                //             "ties": 9,
                //             "gamesPlayed": 9,
                //             "goalsFor": 31,
                //             "goalsAgainst": 40
                //         },
                //         {
                //             "rank": 16,
                //             "teamName": {
                //                 "ru": "Crystal Palace",
                //                 "ar": "كريستال بالاس",
                //                 "en": "Crystal Palace"
                //             },
                //             "teamId": "56e81b7c30345c282c01b2c4",
                //             "points": 33,
                //             "pointsPerGame": "1.10",
                //             "penaltyPoints": 0,
                //             "wins": 9,
                //             "losses": 15,
                //             "ties": 6,
                //             "gamesPlayed": 6,
                //             "goalsFor": 32,
                //             "goalsAgainst": 40
                //         },
                //         {
                //             "rank": 17,
                //             "teamName": {
                //                 "ru": "Norwich City",
                //                 "ar": "نوريتش سيتي",
                //                 "en": "Norwich City"
                //             },
                //             "teamId": "56e81b7c30345c282c01b2de",
                //             "points": 28,
                //             "pointsPerGame": "0.90",
                //             "penaltyPoints": 0,
                //             "wins": 7,
                //             "losses": 17,
                //             "ties": 7,
                //             "gamesPlayed": 7,
                //             "goalsFor": 32,
                //             "goalsAgainst": 54
                //         },
                //         {
                //             "rank": 18,
                //             "teamName": {
                //                 "ru": "Sunderland",
                //                 "ar": "سندرلاند",
                //                 "en": "Sunderland"
                //             },
                //             "teamId": "56e81b7c30345c282c01b2fb",
                //             "points": 26,
                //             "pointsPerGame": "0.87",
                //             "penaltyPoints": 0,
                //             "wins": 6,
                //             "losses": 16,
                //             "ties": 8,
                //             "gamesPlayed": 8,
                //             "goalsFor": 36,
                //             "goalsAgainst": 55
                //         },
                //         {
                //             "rank": 19,
                //             "teamName": {
                //                 "ru": "Newcastle United",
                //                 "ar": "نيوكاسل يونايتد",
                //                 "en": "Newcastle United"
                //             },
                //             "teamId": "56e81b7c30345c282c01b2bc",
                //             "points": 25,
                //             "pointsPerGame": "0.83",
                //             "penaltyPoints": 0,
                //             "wins": 6,
                //             "losses": 17,
                //             "ties": 7,
                //             "gamesPlayed": 7,
                //             "goalsFor": 29,
                //             "goalsAgainst": 55
                //         },
                //         {
                //             "rank": 20,
                //             "teamName": {
                //                 "ru": "Aston Villa",
                //                 "ar": "استون فيلا",
                //                 "en": "Aston Villa"
                //             },
                //             "teamId": "56e81b7c30345c282c01b2cb",
                //             "points": 16,
                //             "pointsPerGame": "0.52",
                //             "penaltyPoints": 0,
                //             "wins": 3,
                //             "losses": 21,
                //             "ties": 7,
                //             "gamesPlayed": 7,
                //             "goalsFor": 22,
                //             "goalsAgainst": 58
                //         }
                //     ]
                // }])

                if (Standings)
                    Defer.resolve(Standings);
                else
                    Data.getList().then(function (all) {
                        Standings = all;
                        Defer.resolve(all);
                    });
                return Defer.promise;
            }
        }
    }

})();

(function () {
    'use strict';

    angular
        .module('app.players')
        .directive('playerEdit', playerEdit)
        .directive('teamEdit', teamEdit)
        .directive('imageUpload', imageUpload)
        .controller('PlayersController', PlayersController);

    imageUpload.$inject = ['$window', 'Upload']

    function imageUpload($window, Upload) {
        return {
            restrict: 'E',
            templateUrl: './app/views/directives/imageUpload.html',
            scope: {
                filename: '=filename',
                folder: '@folder',
                shouldUpdate: '@shouldUpdate',
                ngModel: '=ngModel',
                search: '@search',
                picKey: '@picKey'
            },
            controller: ['$scope', function ($scope) {
                var vm = $scope;

                vm.searchFor = function (forQuery) {
                    $window.open('https://www.google.gr/search?q=' + forQuery +'%20'+vm.search+'+logo&tbm=isch', '_blank');
                };



                var bucket = 'https://s3-eu-west-1.amazonaws.com/sportimo-media/';

                vm.uploadFile = function (file, player) {
                    console.log(file.name.substr(file.name.lastIndexOf('.') + 1));
                    // console.log(file);
                    Upload.upload({
                        url: 'https://s3-eu-west-1.amazonaws.com/sportimo-media', //S3 upload url including bucket name
                        method: 'POST',
                        data: {
                            key: vm.folder + '/' + vm.filename + '.' + file.name.substr(file.name.lastIndexOf('.') + 1), // the key to store the file on S3, could be file name or customized
                            AWSAccessKeyId: "AKIAJHAZLDHNWH7S45CQ",
                            acl: 'public-read', // sets the access to the uploaded file in the bucket: private, public-read, ...
                            policy: "ewogICJleHBpcmF0aW9uIjogIjIwMjAtMDEtMDFUMDA6MDA6MDBaIiwKICAiY29uZGl0aW9ucyI6IFsKICAgIHsiYnVja2V0IjogInNwb3J0aW1vLW1lZGlhIn0sCiAgICBbInN0YXJ0cy13aXRoIiwgIiRrZXkiLCAiIl0sCiAgICB7ImFjbCI6ICJwdWJsaWMtcmVhZCJ9LAogICAgWyJzdGFydHMtd2l0aCIsICIkQ29udGVudC1UeXBlIiwgIiJdLAogICAgWyJzdGFydHMtd2l0aCIsICIkZmlsZW5hbWUiLCAiIl0sCiAgICBbImNvbnRlbnQtbGVuZ3RoLXJhbmdlIiwgMCwgNTI0Mjg4MDAwXQogIF0KfQ==", // base64-encoded json policy (see article below)
                            signature: "22lwJf8Yl4B8qoOT6OrtHqIH6qs=", // base64-encoded signature based on policy string (see article below)
                            "Content-Type": file.type != '' ? file.type : 'application/octet-stream', // content type of the file (NotEmpty)
                            filename: file.name, // this is needed for Flash polyfill IE8-9
                            file: file
                        }
                    }).then(function (resp) {
                        console.log(vm);
                        vm.ngModel[vm.picKey] = bucket + vm.folder + '/' + vm.filename + "." + file.name.substr(file.name.lastIndexOf('.') + 1);


                        if (vm.shouldUpdate) {
                            vm.ngModel.save();
                        }
                        console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
                    }, function (resp) {
                        console.log('Error status: ' + resp.status);

                    }, function (evt) {
                        //                        var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                        // console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
                    });
                }

            }]
        };
    }

    playerEdit.$inject = ['$timeout', 'TagsService'];

    function playerEdit($timeout, TagsService) {
        return {
            restrict: 'E',
            templateUrl: './app/views/directives/playerEdit.html',
            scope: {
                positions: '=positions',
                reload: '=reload',
                loading: '=loader',
                selectedItem: '=ngModel',
                onCancel: '@onCancel',
                type: '@type'
            },
            controller: ['$scope', '$window', function ($scope, $window) {

                $scope.loading = true;
                $scope.$watch('reload', function (newValue, oldValue) {
                    if (newValue) {
                        $timeout(function () {
                            $scope.loading = false;
                            $scope.reload = false;
                        }, 600);
                    }
                });

                TagsService.getAllTags().then(function (tags) {
                    $scope.Tags = tags;
                });

                console.log("tags:" + $scope.Tags)
                $scope.updateByFeedParser = function (item, parserid) {
                    console.log("ID: " + parserid);
                }

                $scope.openedCal = {};

                $scope.openCal = function ($event, whichCal) {
                    $event.preventDefault();
                    $event.stopPropagation();
                    $scope.openedCal[whichCal] = true;
                };

                $scope.cancel = function () {

                    console.log($scope.onCancel)
                    if ($scope.onCancel == 'back') {
                        $window.history.back();
                    } else
                        $scope.selectedItem = null;
                }

                $scope.$watch('selectedItem.personalData.birth.birthDate.full', function (newValue, oldValue) {
                    var date = new Date(newValue);
                    if (!newValue) return;
                    $scope.selectedItem.personalData.birth.birthDate.year = date.getYear();
                    $scope.selectedItem.personalData.birth.birthDate.month = date.getMonth();
                    $scope.selectedItem.personalData.birth.birthDate.date = date.getDate();
                });

            }]
        };
    };

    teamEdit.$inject = ['$timeout', 'TagsService', 'TeamsService'];

    function teamEdit($timeout, TagsService, TeamsService) {
        return {
            restrict: 'E',
            templateUrl: './app/views/directives/teamEdit.html',
            scope: {
                positions: '=positions',
                reload: '=reload',
                loading: '=loader',
                selectedItem: '=ngModel',
                type: '@type'
            },
            controller: ['$scope', function ($scope) {

                $scope.loading = true;
                $scope.$watch('reload', function (newValue, oldValue) {
                    if (newValue) {
                        $timeout(function () {
                            $scope.loading = false;
                            $scope.reload = false;
                        }, 600);
                    }
                });

                TagsService.getAllTags().then(function (tags) {
                    $scope.Tags = tags;
                });

                console.log("tags:" + $scope.Tags)
                $scope.updateByFeedParser = function (item, parserid) {
                    console.log("ID: " + parserid);
                }

                $scope.updateItem = function (item) {
                    console.log(item);
                    item.save().then(function (res) {
                        toaster.pop("success", "Task Completed", res);
                    })
                };

                $scope.openedCal = {};

                $scope.openCal = function ($event, whichCal) {
                    $event.preventDefault();
                    $event.stopPropagation();
                    $scope.openedCal[whichCal] = true;
                };



                $scope.$watch('selectedItem.personalData.birth.birthDate.full', function (newValue, oldValue) {
                    var date = new Date(newValue);
                    if (!newValue) return;
                    $scope.selectedItem.personalData.birth.birthDate.year = date.getYear();
                    $scope.selectedItem.personalData.birth.birthDate.month = date.getMonth();
                    $scope.selectedItem.personalData.birth.birthDate.date = date.getDate();
                });

                $scope.view = {
                    editItem: 0,
                    loadingPlayers: 0
                }

                /* Players */
                $scope.LoadPlayers = function () {
                    $scope.view.loadingPlayers = 1;
                    TeamsService.getFullTeam($scope.selectedItem._id).then(function (fullTeam) {
                        $scope.selectedItem.players = fullTeam.players;
                        $scope.selectedItem.playersLoaded = true;

                        $scope.view.loadingPlayers = 0;
                    })
                }
                $scope.pushPlayer = function (player) {
                    if (player) {
                        player.team = $scope.selectedTeam._id;
                        player.save().then(function () {
                            $scope.selectedItem.players.push(player);
                            $scope.selectedItem.save().then(function () {
                                console.log("All OK!");
                            })
                        });
                    }
                }

            }]
        };
    };

    PlayersController.$inject = ['$scope', 'TagsService', 'TeamsService', 'PlayersService', 'DTOptionsBuilder', 'DTColumnDefBuilder', '$window', '$filter', '$timeout', '$state'];



    function PlayersController($scope, TagsService, TeamsService, PlayersService, DTOptionsBuilder, DTColumnDefBuilder, $window, $filter, $timeout, $state) {


        var vm = $scope;
        vm.Players = [];
        vm.Teams = [];
        vm.loading = {};
        vm.selectedItem = null;
        vm.Tags = null;

        vm.itemClicked = function (action, type, item) {
            $state.go("app.data", {
                action: action,
                type: type,
                id: item._id
            });
        }

        // ******* LOADING DATA ********** //
        TagsService.getAllTags().then(function (tags) {
            vm.Tags = tags;

            // Populate Players
            PlayersService.getAllPlayers().then(function (players) {
                vm.Players = players;
                _.forEach(vm.Players, function (player) {
                    player.team = TagsService.getTeamNameById(player.teamId);
                })
                vm.gridOptions.data = players;
                vm.positions = _.pluck(_.uniq(vm.Players, 'position'), 'position');
                vm.loading.players = false;
            }, function (error) { });
        })



        var data = [];
        vm.filterOptions = {
            filterText: "",
            useExternalFilter: true
        };

        $scope.$watch('filterOptions', function () {
            //Call an async function to fetch data here.
            vm.gridOptions.data = $filter('filter')(vm.Players, vm.filterOptions.filterText);

        }, true);

        vm.gridOptions = {
            enableRowSelection: true,
            enableRowHeaderSelection: false,
            multiSelect: false,
            //            enableFiltering: true,
            filterOptions: vm.filterOptions,
            enableColumnResizing: true,
            columnDefs: [
                {
                    name: 'Name',
                    field: 'name.en'
                },
                {
                    name: 'Position',
                    field: 'position'
                },
                {
                    name: 'Team',
                    field: 'team',

                }
            ],
            data: data,
            onRegisterApi: function (gridApi) {
                vm.gridApi = gridApi;
                gridApi.selection.on.rowSelectionChanged($scope, function (row) {

                    //                    vm.itemClicked('edit','player', row.entity);
                    if (vm.selectedItem) {
                        vm.view.selectedLoading = true;
                        $timeout(function () {
                            vm.selectedItem = row.entity;
                            vm.view.selectedLoading = false;
                            $scope.gridApi.core.handleWindowResize();
                        }, 400)
                    } else {
                        vm.reload = true;
                        vm.selectedItem = row.entity;
                        $scope.gridApi.core.handleWindowResize();
                    }
                });
            }
        };

        vm.createNew = function () {
            vm.createdReload = true;
            vm.newItem = {};

        }



        function rowClicked(params) {
            vm.selectedItem = params.data;
        }






        /* Scope Methods */
        vm.editItem = function (player) {

            vm.selectedItem = player;

            if (!vm.selectedItem.name.en) {
                vm.selectedItem.name.en = "";
                vm.selectedItem.selected = "en";
            } else {
                vm.selectedItem.selected = "en";
            }
            vm.view.editItem = 1;
        }

        vm.updatePlayer = function () {
            console.log(vm.selectedItem);
            vm.selectedItem.save().then(function (res, err) {
                vm.selectedItem = null;
                vm.view.editItem = 0;
            })
        }


        vm.isSelected = function (player) {
            if (player.isSelected) {
                player.isSelected = false;
                return false;
            } else {
                player.isSelected = true;
                return true;
            }
        }


        vm.getTeam = function (id) {
            return _.findWhere(vm.Teams, {
                "_id": id
            });
        }
    }

})();


(function () {
    'use strict';
    angular
        .module('app.publications')
        .controller('PublicationsController', PublicationsController)
        .service('PublicationsService', PublicationsService);

    PublicationsController.$inject = ['$scope', 'PublicationsService', 'TagsService', 'RouteHelpers', 'Upload'];


    function PublicationsController($scope, PublicationsService, TagsService, RouteHelpers, Upload) {
        var vm = $scope;
        vm.Tags = null;
        vm.Articles = null;
        vm.view = {};

        vm.onChangeCallback = function (article) {
            article.put().then(function (res) {
                console.log(res);
            });
        }

        vm.onAddtag = function (article, item, model) {
            var newTag = {
                name: item.name,
                _id: item._id
            };

            var index = _.findIndex(article.tags, {
                "_id": item._id
            });
            article.tags[index] = newTag;

            article.put().then(function (res) {
                console.log(res);
            });
        }

        /**
         * SEARCH */
        vm.opened = {};
        vm.open = function ($event, whichCal) {
            $event.preventDefault();
            $event.stopPropagation();
            vm.opened[whichCal] = true;
        };

        vm.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };

        vm.initDate = new Date('2019-10-20');
        vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        vm.format = vm.formats[0];
        vm.searchObj = {};

        vm.searchArticles = function (searchObj) {
            vm.view.searchBusy = true;
            if (searchObj.tags == "") {
                searchObj.tags = null;
            }
            PublicationsService.getArticles(searchObj).then(function (articles) {
                vm.Articles = articles;
                vm.view.searchBusy = false;
            })
        }

        /* NEW ITEM */
        vm.newItem = null;

        vm.createNew = function () {
            // vm.view.busy = true;
            vm.newItem = {
                "publication": {
                    "title": {
                        "en": ""
                    },
                    "text": {
                        "en": ""
                    }
                }
            };
        }

        vm.artTypes = ["Interview", "News", "Welcome", "Activity"];

        vm.SetToNow = function () {
            vm.newItem.publishDate = new Date(moment.utc());
        }

        vm.SaveNewItem = function (newItem) {
            vm.view.busy = true;
            PublicationsService.postItem(newItem).then(function (returnedItem) {
                vm.Articles.push(returnedItem);
                vm.newItem = null;
                vm.view.busy = false;
            })
        }
        /* END OF NEW ITEM*/

        vm.UpdateItem = function (item) {
            vm.view.busy = true;
            item.put().then(function (res) {
                console.log(res);
                vm.editItem = null;
                vm.view.busy = false;
            });

        }

        PublicationsService.getArticles({
            limit: 30
        }).then(function (articles) {
            vm.Articles = articles;
        })



        vm.basepath = RouteHelpers.basepath;

        TagsService.getAllTags().then(function (tags) {
            vm.Tags = tags;
        })

        /* UPLOAD MECHANICS */
        var bucket = 'https://s3-eu-west-1.amazonaws.com/sportimo-media/';
        vm.uploadFile = function (file, item) {

            Upload.upload({
                url: 'https://s3-eu-west-1.amazonaws.com/sportimo-media', //S3 upload url including bucket name
                method: 'POST',
                data: {
                    key: 'articles/' + item._id + '.' + file.name.substr(file.name.lastIndexOf('.') + 1), // the key to store the file on S3, could be file name or customized
                    AWSAccessKeyId: "AKIAJHAZLDHNWH7S45CQ",
                    acl: 'public-read', // sets the access to the uploaded file in the bucket: private, public-read, ...
                    policy: "ewogICJleHBpcmF0aW9uIjogIjIwMjAtMDEtMDFUMDA6MDA6MDBaIiwKICAiY29uZGl0aW9ucyI6IFsKICAgIHsiYnVja2V0IjogInNwb3J0aW1vLW1lZGlhIn0sCiAgICBbInN0YXJ0cy13aXRoIiwgIiRrZXkiLCAiIl0sCiAgICB7ImFjbCI6ICJwdWJsaWMtcmVhZCJ9LAogICAgWyJzdGFydHMtd2l0aCIsICIkQ29udGVudC1UeXBlIiwgIiJdLAogICAgWyJzdGFydHMtd2l0aCIsICIkZmlsZW5hbWUiLCAiIl0sCiAgICBbImNvbnRlbnQtbGVuZ3RoLXJhbmdlIiwgMCwgNTI0Mjg4MDAwXQogIF0KfQ==", // base64-encoded json policy (see article below)
                    signature: "22lwJf8Yl4B8qoOT6OrtHqIH6qs=", // base64-encoded signature based on policy string (see article below)
                    "Content-Type": file.type != '' ? file.type : 'application/octet-stream', // content type of the file (NotEmpty)
                    filename: file.name, // this is needed for Flash polyfill IE8-9
                    file: file
                }
            }).then(function (resp) {
                item.photo = bucket + 'articles/' + item._id + "." + file.name.substr(file.name.lastIndexOf('.') + 1);
                console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
                item.put();
            }, function (resp) {
                console.log('Error status: ' + resp.status);

            }, function (evt) {
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                // console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            });
        }

        /* END OF UPLOAD MECHANICS */
    };

    PublicationsService.$inject = ['$resource', 'Restangular', '$q', '$rootScope'];

    function PublicationsService($resource, Restangular, $q, $rootScope) {
        var articlesSearch = Restangular.all('v1/data/articles/search');
        var articles = Restangular.all('v1/data/articles');
        Restangular.setBaseUrl($rootScope.servers[$rootScope.serverEnvironment].game_server);
        Restangular.setRestangularFields({
            id: "_id"
        });

        return {
            getArticles: function (conditions) {
                var Defer = $q.defer();
                articlesSearch.post(conditions).then(function (articles) {
                    articles = Restangular.restangularizeCollection(null, articles, 'v1/data/articles');
                    Defer.resolve(articles);
                });
                return Defer.promise;
            },
            postItem: function (item) {
                var Defer = $q.defer();
                articles.post(item).then(function (returnItem) {
                    Defer.resolve(returnItem);
                });
                return Defer.promise;
            },
        }

    };
})();

(function () {
    'use strict';

    angular
        .module('app.teams')
        .service('TeamsService', TeamsService)
        .service('PlayersService', PlayersService)
        .service('TagsService', TagsService)
        .controller('TeamsController', TeamsController)
        .directive('multiLangText', MultiLangText)
        .directive('multiLangTextArea', MultiLangTextArea);

    PlayersService.$inject = ['$resource', 'Restangular', '$q', '$rootScope'];
    TeamsService.$inject = ['$resource', 'Restangular', '$q', '$rootScope'];
    TeamsController.$inject = ['$stateParams', '$scope', 'TeamsService', 'PlayersService', 'TagsService', 'DTOptionsBuilder', 'DTColumnDefBuilder', 'Upload', '$window', '$filter', '$timeout'];

    function MultiLangText() {
        return {
            restrict: 'E',
            templateUrl: './app/views/directives/multiLangInput.html',
            scope: {
                selected: '@default',
                label: '@label',
                lObject: '=languageObject',
                ngModel: '=ngModel',
                placeholder: '@placeholder'
            },
            controller: ['$scope', function ($scope) {

                $scope.$watch('lObject', function (newValue, oldValue) {
                    if ($scope.lObject && $scope.lObject.en)
                        $scope.selected = 'en';

                    $scope.showChange();
                });

                $scope.showChange = function () {
                    if ($scope.lObject)
                        $scope.ngModel = {
                            key: $scope.selected,
                            value: $scope.lObject[$scope.selected]
                        };

                }

                $scope.pushLangKey = function () {
                    $scope.lObject[$scope.newLangKey] = "";
                    $scope.selected = $scope.newLangKey;
                    $scope.newLangKey = null;
                };

                $scope.delete = function () {
                    delete $scope.lObject[$scope.selected];
                }
            }]
        };
    };

    function MultiLangTextArea() {
        return {
            restrict: 'E',
            templateUrl: './app/views/directives/multiLangTextArea.html',
            scope: {
                selected: '@default',
                lObject: '=languageObject',
                placeholder: '@placeholder'
            },
            controller: ['$scope', function ($scope) {


                // console.log( $scope.placeholder);

                $scope.$watch('lObject', function (newValue, oldValue) {
                    if ($scope.lObject && $scope.lObject.en)
                        $scope.selected = 'en';
                });

                $scope.pushLangKey = function () {
                    $scope.lObject[$scope.newLangKey] = "";
                    $scope.selected = $scope.newLangKey;
                    $scope.newLangKey = null;
                };

                $scope.delete = function () {
                    delete $scope.lObject[$scope.selected];
                }
            }]
        };
    };

    function TeamsController($stateParams, $scope, TeamsService, PlayersService, TagsService, DTOptionsBuilder, DTColumnDefBuilder, Upload, $window, $filter, $timeout) {


        var vm = $scope;
        vm.Players = [];
        vm.Teams = [];
        vm.loading = {};
        vm.selectedItem = null;
        vm.Tags = null;

        var preselected = $stateParams.id;

        TagsService.getAllTags().then(function (tags) {
            vm.loading.teams = true;
            vm.Tags = tags;

            TeamsService.getAllTeams().then(function (teams) {
                vm.Teams = teams;
                vm.gridOptions.data = teams;
                vm.leagues = _.map(_.uniq(vm.Teams, 'league'), 'league');
                vm.loading.teams = false;

                if (preselected) {
                    vm.selectedItem = _.find(vm.Teams, function (o) {
                        return o._id == preselected;
                    });
                    vm.view.selectedLoading = false;
                }
            }, function (error) { });
        })



        var data = [];
        vm.filterOptions = {
            filterText: "",
            useExternalFilter: true
        };

        $scope.$watch('filterOptions', function () {
            //Call an async function to fetch data here.
            vm.gridOptions.data = $filter('filter')(vm.Teams, vm.filterOptions.filterText);

        }, true);

        vm.gridOptions = {
            enableRowSelection: true,
            enableRowHeaderSelection: false,
            multiSelect: false,
            //            enableFiltering: true,
            filterOptions: vm.filterOptions,
            enableColumnResizing: true,
            columnDefs: [
                {
                    name: 'Name',
                    field: 'name.en'
                },
                {
                    name: 'League',
                    field: 'league'
                }
            ],
            data: data,
            onRegisterApi: function (gridApi) {
                vm.gridApi = gridApi;
                gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                    if (vm.selectedItem) {
                        vm.view.selectedLoading = true;
                        // $timeout(function () {
                        vm.selectedItem = row.entity;
                        vm.view.selectedLoading = false;
                        $scope.gridApi.core.handleWindowResize();
                        // }, 400)
                    } else {
                        vm.reload = true;
                        vm.selectedItem = row.entity;
                        $scope.gridApi.core.handleWindowResize();
                    }

                });
            }
        };

        vm.createNew = function () {
            vm.createdReload = true;
            vm.newItem = {};

        }



        function rowClicked(params) {
            vm.selectedItem = params.data;
        }


        vm.view = {
            editItem: 0,
            loadingPlayers: 0
        }



        /* Scope Methods */
        vm.editItem = function (player) {

            vm.selectedItem = player;
            if (!vm.selectedItem.name.en) {
                vm.selectedItem.name.en = "";
                vm.selectedItem.selected = "en";
            } else {
                vm.selectedItem.selected = "en";
            }
            vm.view.editItem = 1;
        }

        vm.updatePlayer = function () {
            console.log(vm.selectedItem);
            vm.selectedItem.save().then(function (res, err) {
                vm.selectedItem = null;
                vm.view.editItem = 0;
            })
        }


        vm.isSelected = function (player) {
            if (player.isSelected) {
                player.isSelected = false;
                return false;
            } else {
                player.isSelected = true;
                return true;
            }
        }


        vm.getTeam = function (id) {
            return _.findWhere(vm.Teams, {
                "_id": id
            });
        }



        ///////// ****************************************************


        ///////// ****************************************************

        //        var vm = $scope;
        //        vm.Players = [];
        //        vm.Teams = [];
        //        vm.Tags = [];


        vm.view = {
            editTeam: 0,
            loadingPlayers: 0
        }

        //        var bucket = 'https://s3-eu-west-1.amazonaws.com/sportimo-media/';
        //        vm.uploadFile = function (file, team) {
        //            console.log(file.name.substr(file.name.lastIndexOf('.') + 1));
        //            // console.log(file);
        //            Upload.upload({
        //                url: 'https://s3-eu-west-1.amazonaws.com/sportimo-media', //S3 upload url including bucket name
        //                method: 'POST',
        //                data: {
        //                    key: 'teams/' + team._id + '.' + file.name.substr(file.name.lastIndexOf('.') + 1), // the key to store the file on S3, could be file name or customized
        //                    AWSAccessKeyId: "AKIAJHAZLDHNWH7S45CQ",
        //                    acl: 'public-read', // sets the access to the uploaded file in the bucket: private, public-read, ...
        //                    policy: "ewogICJleHBpcmF0aW9uIjogIjIwMjAtMDEtMDFUMDA6MDA6MDBaIiwKICAiY29uZGl0aW9ucyI6IFsKICAgIHsiYnVja2V0IjogInNwb3J0aW1vLW1lZGlhIn0sCiAgICBbInN0YXJ0cy13aXRoIiwgIiRrZXkiLCAiIl0sCiAgICB7ImFjbCI6ICJwdWJsaWMtcmVhZCJ9LAogICAgWyJzdGFydHMtd2l0aCIsICIkQ29udGVudC1UeXBlIiwgIiJdLAogICAgWyJzdGFydHMtd2l0aCIsICIkZmlsZW5hbWUiLCAiIl0sCiAgICBbImNvbnRlbnQtbGVuZ3RoLXJhbmdlIiwgMCwgNTI0Mjg4MDAwXQogIF0KfQ==", // base64-encoded json policy (see article below)
        //                    signature: "22lwJf8Yl4B8qoOT6OrtHqIH6qs=", // base64-encoded signature based on policy string (see article below)
        //                    "Content-Type": file.type != '' ? file.type : 'application/octet-stream', // content type of the file (NotEmpty)
        //                    filename: file.name, // this is needed for Flash polyfill IE8-9
        //                    file: file
        //                }
        //            }).then(function (resp) {
        //                team.logo = bucket + 'teams/' + team._id + "." + file.name.substr(file.name.lastIndexOf('.') + 1);
        //                console.log(team.logo);
        //                team.save();
        //                console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        //            }, function (resp) {
        //                console.log('Error status: ' + resp.status);
        //
        //            }, function (evt) {
        //                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
        //                // console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        //            });
        //        }

        /* Scope Methods */
        vm.editTeam = function (team) {
            console.log(team);
            vm.selectedTeam = team;
            if (!vm.selectedTeam.name.en) {
                vm.selectedTeam.name.en = "";
                vm.selectedTeam.selected = "en";
            } else {
                vm.selectedTeam.selected = "en";
            }
            vm.view.editTeam = 1;
        }

        vm.updateTeam = function () {
            console.log(vm.selectedTeam);
            vm.selectedTeam.save().then(function (res, err) {
                vm.selectedTeam = null;
                vm.view.editTeam = 0;
            })
        }

        vm.delete = function () {
            delete vm.selectedTeam.name[vm.selectedTeam.selected];
        }

        vm.Getlang = function (array, lang) {
            return _.findWhere(array, {
                lang: lang
            }).text;
        };

        vm.pushLang = function (team) {
            vm.selectedTeam.name[vm.newLangKey] = "";
            vm.selectedTeam.selected = vm.newLangKey;
            vm.newLangKey = null;
        }
        vm.isSelected = function (team) {
            if (team.isSelected) {
                team.isSelected = false;
                return false;
            } else {
                team.isSelected = true;
                return true;
            }
        }

        vm.MassUpdateObjects = [];
        vm.MassUpdateChanges = {};
        vm.allSelected = null;
        vm.dtInstance = null;

        vm.pushMassUpdate = function (event, team) {
            if (vm.isSelected(team))
                vm.MassUpdateObjects.push(team);
            else
                vm.MassUpdateObjects = _.without(vm.MassUpdateObjects, team);

            console.log(vm.MassUpdateObjects.length);
        }
        vm.selectAll = function () {
            console.log(vm.dtInstance);
            //  console.log(vm.dtInstance.dataTable._('tr', {"filter":"applied"})[0]);

            vm.allSelected = true;
        }
        vm.selectNone = function () {
            vm.allSelected = false;
            vm.MassUpdateObjects = [];
        }

        vm.massUpdate = function () {
            vm.MassUpdateObjects.forEach(function (item) {
                if (vm.MassUpdateChanges.league != null) {
                    item.league = vm.MassUpdateChanges.league;
                    item.save();
                }
            })
        }







        //        PlayersService.getAllPlayers().then(function (players) {
        //            vm.Players = players;
        //        }, function (error) {});
        //
        //        TagsService.getAllTags().then(function (tags) {
        //            vm.Tags = tags;
        //        }, function (error) {
        //            console.log("Error loading tags")
        //        });

    }

    function TeamsService($resource, Restangular, $q, $rootScope) {
        var mock = false;

        if (mock) {
            var teams = $resource('server/mockdata/teams.json');
            return {
                getAllTeams: function () {
                    return teams.query({}, function (res) {
                        return res;
                    });
                }
            }
        } else {
            var teams = Restangular.all('v1/data/teams');
            Restangular.setBaseUrl($rootScope.servers[$rootScope.serverEnvironment].game_server);
            Restangular.setRestangularFields({
                id: "_id"
            });

            return {
                getAllTeams: function () {
                    var Defer = $q.defer();
                    teams.getList().then(function (teams) {
                        Defer.resolve(teams);
                    });
                    return Defer.promise;
                },

                getFullTeam: function (id) {
                    var Defer = $q.defer();
                    Restangular.one('v1/data/teams', id).one('full').get().then(function (team) {
                        Defer.resolve(team);
                    });
                    return Defer.promise;
                }
            }
        }
    }

    function TagsService($resource, Restangular, $q, $rootScope) {

        var tags = null;
        var teamTags = null;
        var tagsRoute = Restangular.all('v1/data/tags');

        Restangular.setBaseUrl($rootScope.servers[$rootScope.serverEnvironment].game_server);
        Restangular.setRestangularFields({
            id: "_id"
        });

        return {
            Tags: tags,
            getAllTags: function () {
                var Defer = $q.defer();
                if (tags) Defer.resolve(tags);
                else
                    tagsRoute.getList().then(function (receivedTags) {
                        tags = receivedTags;
                        Defer.resolve(tags);
                    });
                return Defer.promise;
            },
            getAllTeamTags: function () {
                var Defer = $q.defer();

                if (teamTags) Defer.resolve(teamTags)
                else
                    this.getAllTags().then(function (tags) {
                        teamTags = _.findWhere(tags, {
                            type: 'Team'
                        });
                        Defer.resolve(teamTags);
                    })
                return Defer.promise;
            },
            getTagById: function (ID) {
                return _.find(tags, {
                    _id: ID
                });
            },
            getTeamNameById: function (ID) {
                return _.get(_.find(tags, {
                    _id: ID
                }), 'name.en');
            },
            getNameById: function (ID) {
                return _.get(_.find(tags, {
                    _id: ID
                }), 'name.en');
            }
        }

    }

    function PlayersService($resource, Restangular, $q, $rootScope) {
        var mock = false;

        if (mock) {
            var players = $resource('server/mockdata/players.json');
            return {
                getAllPlayers: function () {
                    return players.query({}, function (res) {
                        return res;
                    });
                }
            }
        } else {
            var players = Restangular.all('v1/data/players');
            Restangular.setBaseUrl($rootScope.servers[$rootScope.serverEnvironment].game_server);
            Restangular.setRestangularFields({
                id: "_id"
            });

            return {
                getAllPlayers: function () {
                    var Defer = $q.defer();
                    players.getList().then(function (schedule) {
                        Defer.resolve(schedule);
                    });
                    return Defer.promise;
                },

                getPlayer: function (id) {
                    var Defer = $q.defer();
                    players.get(id).then(function (player) {
                        if (player.player)
                            Defer.resolve(player.player);
                    });
                    return Defer.promise;
                }
            }
        }
    }

})();

(function () {
    'use strict';

    angular.module('app.sponsors')
        .controller('SponsorsController', SponsorsController);

    SponsorsController.$inject = ['$scope'];

    function SponsorsController($scope) {

        var vm = $scope;
        vm.loading = {};

        vm.editItem = function (item) {
            if (item != null)
                vm.selectedItem = item;
            else
                vm.selectedItem = {
                    name: { en: "" }
                };
        }

        $scope.save = function (item) {

            if (!item._id) {
                console.log("saving it");
            }
            else {
                vm.loading.updating = true;
                item.save().then(function () {
                    vm.loading.updating = false;
                    item = null;
                })
            }
        }

    }

})();

(function () {
    'use strict';

    angular.module('app.competitions')
        .service('CompetitionsService', CompetitionsService)
        .controller('CompetitionsController', CompetitionsController);

    CompetitionsController.$inject = ['CompetitionsService', 'PrizesService', '$scope', 'CountriesService', '$state'];

    function CompetitionsController(CompetitionsService, PrizesService, $scope, CountriesService, $state) {

        var vm = $scope;
        vm.loading = {};
        vm.selectedItem = null;

        // *** Load all countries *** //
        vm.countries = CountriesService.getCountries();

        // *** Load all registered competitions *** //
        CompetitionsService.All().then(function (all) {
            vm.Competitions = all;
        });

        vm.editItem = function (item) {
            if (item != null)
                vm.selectedItem = item;
            else
                vm.selectedItem = {
                    name: { en: "" }
                };
        }

        $scope.showStandings = function (id) {
            $state.go('app.standings', {
                competition: id
            })
        }

        $scope.save = function (item) {
            if (!item._id) {
                console.log("saving it");
            }
            else {
                vm.loading.updating = true;
                console.log("updating it");
                item.save().then(function () {
                    vm.loading.updating = false;
                    vm.selectedItem = null;
                    console.log(item);
                })
            }
        }

    }


    CompetitionsService.$inject = ['$resource', 'Restangular', '$rootScope', '$q'];
    function CompetitionsService($resource, Restangular, $rootScope, $q) {

        var Competitions;

        var Data = Restangular.all('v1/data/competitions');

        Restangular.setBaseUrl($rootScope.servers[$rootScope.serverEnvironment].game_server);
        Restangular.setRestangularFields({
            id: "_id"
        });

        return {
            All: function () {
                var Defer = $q.defer();

                if (Competitions)
                    Defer.resolve(Competitions);
                else
                    Data.getList().then(function (all) {
                        Competitions = all;
                        Defer.resolve(all);
                    });
                return Defer.promise;
            }
        }
    }


})();

(function () {
    'use strict';

    angular
        .module('app.leaderboards')
        .service('LeaderboardsService', LeaderboardsService)
        .controller('LeaderboardsController', LeaderboardsController);

    LeaderboardsService.$inject = ['$rootScope', '$q', 'Restangular'];

    function LeaderboardsService($rootScope, $q, Restangular) {
        var LeaderboardsAPI = Restangular.all('leaderpay/v1/leaderboards');

        Restangular.setBaseUrl($rootScope.servers[$rootScope.serverEnvironment].game_server);
        Restangular.setRestangularFields({
            id: "_id"
        });

        return {
            getLeaderboard: function (pool) {
                var Defer = $q.defer();

                LeaderboardsAPI.post(pool).then(function (data) {
                    Defer.resolve(data);
                });

                return Defer.promise;
            }
        }
    };

    LeaderboardsController.$inject = ['LeaderboardsService', 'CountriesService', 'PrizesService', 'SponsorsService', 'PoolsService', '$scope', 'ngDialog', '$stateParams', '$http', '$rootScope', '$timeout', '$interval', '$mdToast', '$mdBottomSheet', '$window'];

    function LeaderboardsController(LeaderboardsService, CountriesService, PrizesService, SponsorsService, PoolsService, $scope, ngDialog, $stateParams, $http, $rootScope, $timeout, $interval, $mdToast, $mdBottomSheet, $window) {

        var vm = $scope;
        vm.loading = {};

        //-----------------------------
        // Get the data from SERVER
        //-----------------------------

        // Basic
        var columnDefs = [
            {
                displayName: 'Nickname',
                field: 'name',
                width: 100
            },
            {
                displayName: 'Score',
                field: 'score',
                width: 100
            },
            {
                displayName: 'Country',
                field: 'country',
                width: 100
            },
            {
                displayName: 'ID',
                field: '_id',
                width: 100
            }
        ];

        // LeaderBoards Grid
        vm.gridOptions = {
            columnDefs: columnDefs,
            rowSelection: 'single',
            rowData: null,
            ready: function (api) {
                api.sizeColumnsToFit();
            },
            rowClicked: rowClicked
        };

        vm.userSelected = null;

        function rowClicked(params) {
            vm.userSelected = params.data;
        }

        vm.showLeaderboard = function (pool) {
            vm.loading.leaderboard = true;
            vm.selectedPool = pool;
            LeaderboardsService
                .getLeaderboard(pool)
                .then(function (data) {
                    // pinning
                    vm.gridOptions.rowData = data;
                    vm.gridOptions.api.onNewRows();
                    vm.gridOptions.api.sizeColumnsToFit();
                    vm.loading.leaderboard = false;
                });
        }


        // 
        // PoolRooms
        vm.PoolRooms = null;

        $scope.sortableCallbackNew = function (sourceModel, destModel, start, end) {
            vm.updatePrizePositions(vm.NewPool, vm.prizePositions);
        };
        $scope.sortableCallbackEdit = function (sourceModel, destModel, start, end) {
            vm.updatePrizePositions(vm.EditPool, vm.prizePositions);
        };

        $scope.sortableOptions = {
            placeholder: '<div class="box-placeholder p0 m0"><div></div></div>',
            forcePlaceholderSize: true
        };


        PoolsService.getNonGamePools().then(function (pools) {
            vm.PoolRooms = pools;
        });

        vm.setDefault = function (pool) {
            vm.PoolRooms.forEach(function (eachpool) {
                eachpool.isdefault = false;
                eachpool.save();
            })
            console.log(pool);
            pool.isdefault = true;
            pool.save();
        }
        vm.editPool = function (pool) {
            vm.prizePositions = [];
            var $index = 1;
            _.forEach(pool.prizes, function (prize) {
                var pos = {};

                if (prize.positions && prize.positions.to)
                    pos.to = prize.positions.to;
                if (prize.positions && prize.positions.from)
                    pos.from = prize.positions.from;
                else
                    pos = {
                        from: $index,
                        to: $index
                    };

                $index++;
                vm.prizePositions.push(pos);
            })
            vm.EditPool = pool;
        }

        vm.RemoveNewPool = function () {
            vm.NewPool = null;
        }
        vm.AddNewPool = function () {
            vm.NewPool = {

                title: {
                    en: ""
                },
                // roomtype: Season, Week, Game, Custom
                // Season And Week should always have Starting and Ending Dates, Game
                // must have a gameid and Custom must have at least one.
                roomtype: "Game",

                // The atatched game id
                gameid: vm.matchid,

                // Starting and Ending Dates of the pool
                starts: null,
                ends: null,

                // A sponsor object containing all sponsor's information and resources
                sponsor: null,

                isdefault: vm.PoolRooms.length == 0 ? true : false,

                // Status: Open, Closed
                status: "Active",

                // prizetype: "Prizetype.Gift | Prizetype.Pool"
                prizetype: "Prizetype.Gift",

                // Entry fee is in USD currency. Only applicable if Prizetype.Pool 
                // Used in Pool calculations
                // hasentryfee: Number,

                // Only applicable to Prizetype.Gift 
                // prizes: [{rank:1, img:"http:imagesomewhere.png, title: {en:"Hurray!"}, text:{en:"Reward text. Yay!"}"}]
                prizes: [],

                // conditions:  "Country", value:["GR","UK","SA"]}
                country: []
            };
        }

        vm.removePool = function (pool) {
            pool.remove().then(function () {
                vm.PoolRooms = _.without(vm.PoolRooms, pool);
            });
        }

        SponsorsService.All().then(function (sponsors) {
            vm.sponsors = sponsors;
        });

        PrizesService.getAllPlain().then(function (prizes) {
            vm.prizes = prizes;
        });

        vm.addPrize = function (prize, pool) {
            var positions = {
                from: vm.prizePositions.length > 0 ? vm.prizePositions[vm.prizePositions.length - 1].to + 1 : 1,
                to: vm.prizePositions.length > 0 ? vm.prizePositions[vm.prizePositions.length - 1].to + 1 : 1
            };

            console.log(prize);
            var newprize = {
                name: prize.name,
                text: prize.text,
                picture: prize.picture,
                positions: positions
            }
            vm.prizePositions.push(positions);
            pool.prizes.push(newprize);
        }

        vm.removePrize = function (pool, prize) {
            pool.prizes = _.without(pool.prizes, prize);
            vm.editPrizePos = -1;
            vm.updatePrizePositions(pool, vm.prizePositions);
        }

        vm.CreateLeaderboard = function (pool) {
            PoolsService.addPool(pool).then(function (newPool) {
                vm.PoolRooms.push(newPool);
                vm.NewPool = null;
                vm.prizePositions = [];
            });
        }

        vm.UpdateLeaderboard = function (pool) {

            pool.save().then(function (newPool) {
                vm.EditPool = null;
                vm.prizePositions = [];
            });
        }

        vm.RemoveEditPool = function () {
            vm.EditPool = null;
            vm.prizePositions = [];
        }

        vm.opened = {};
        vm.open = function ($event, whichCal) {
            $event.preventDefault();
            $event.stopPropagation();
            vm.opened[whichCal] = true;
        };

        vm.countries = CountriesService.getCountries();

        // Holds prize positions in order to pass it along the pool
        vm.prizePositions = [];

        vm.updatePrizePositions = function (pool, prizePositions) {
            var $index = 0;
            var lastPos = 0;

            _.forEach(prizePositions, function (pos) {
                if (lastPos >= pos.from) pos.from = lastPos + 1;
                lastPos = pos.to;

            });

            pool.prizes.forEach(function (prize) {
                prize.positions = prizePositions[$index];
                $index++;
            });

            while (prizePositions.length > $index) {
                prizePositions.pop();
            }
        }

        vm.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };

        vm.initDate = new Date('2019-10-20');
        vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        vm.format = vm.formats[0];
        vm.searchObj = {};


    };

})();

(function () {
    'use strict';

    angular
        .module('app.match-moderation-soccer')
        .service('PrizesService', PrizesService)
        .service('PoolsService', PoolsService)
        .service('SponsorsService', SponsorsService)
        .service('QuestionsService', QuestionsService)
        .service('CountriesService', CountriesService)
        .controller('SportimoModerationSoccerController', SportimoModerationSoccerController)
        .factory('ngClipboard', function ($compile, $rootScope, $document) {
            return {
                toClipboard: function (element) {

                    var copyElement = angular.element('<span id="ngClipboardCopyId">' + element + '</span>');
                    var body = $document.find('body').eq(0);
                    body.append($compile(copyElement)($rootScope));

                    var ngClipboardElement = angular.element(document.getElementById('ngClipboardCopyId'));
                    console.log(ngClipboardElement);
                    var range = document.createRange();

                    range.selectNode(ngClipboardElement[0]);

                    window.getSelection().removeAllRanges();
                    window.getSelection().addRange(range);

                    var successful = document.execCommand('copy');

                    var msg = successful ? 'successful' : 'unsuccessful';
                    console.log('Copying text command was ' + msg);
                    window.getSelection().removeAllRanges();

                    copyElement.remove();
                }
            }
        })

        .directive('disableAnimation', function ($animate) {
            return {
                restrict: 'A',
                link: function ($scope, $element) {
                    $animate.enabled($element, false);
                }
            };
        }).directive('noSwipeClick', function () {
            return function (scope, elm) {
                var el = angular.element(elm);
                el.bind('click', function (e) {
                    if (scope.swipe.swiping === true) {
                        e.stopPropagation();
                        e.preventDefault();
                    }
                });
            };
        })

        .filter('reverse', function () {
            return function (items) {

                if (!angular.isArray(items)) {
                    return items;
                }
                return items.slice().reverse();
            };
        });

    PrizesService.$inject = ['$rootScope', '$q', 'Restangular'];
    PoolsService.$inject = ['$rootScope', '$q', 'Restangular'];


    QuestionsService.$inject = ['$rootScope', '$q', 'Restangular'];

    function QuestionsService($rootScope, $q, Restangular) {
        var API = Restangular.all('v1/questions');

        Restangular.setBaseUrl($rootScope.servers[$rootScope.serverEnvironment].game_server);
        Restangular.setRestangularFields({
            id: "_id"
        });

        var favoriteQuestions = [
            {

                "text": {
                    "en": "#home is playing quite offensive but which team will win in the end?"
                },
                "type": "reward",
                "status": 0,
                "answers": [
                    {

                        "text": {
                            "en": "#home"
                        },
                        "img": null,
                        "points": 0,
                        "answered": 0
                    },
                    {

                        "text": {
                            "en": "#away"
                        },

                        "points": 0,
                        "answered": 0
                    },
                    {

                        "text": {
                            "en": "None"
                        },
                        "points": 0,
                        "answered": 0
                    }
                ]
            }
        ];


        return {
            AllByMatch: function (matchid) {
                var Defer = $q.defer();
                API.one('match/').getList(matchid).then(function (items) {
                    items = Restangular.restangularizeCollection(null, items, 'v1/questions');
                    items = _.forEach(items, function (item) {
                        item.fromServer = true;
                    });
                    Defer.resolve(items);
                });
                return Defer.promise;
            },
            AllFavorites: function () {
                var Defer = $q.defer();
                if (favoriteQuestions)
                    Defer.resolve(favoriteQuestions);
                else
                    API.getList('favorites/').then(function (items) {
                        favoriteQuestions = items;
                        Defer.resolve(items);
                    });
                return Defer.promise;
            },
            saveToFavorites: function (question, matchData) {
                var Defer = $q.defer();
                // TODO: SCAN for match data and replace with vars
                if (!matchData) {
                    question.status = 0;
                    // var favorite = _.cloneDeep(question);
                    var favorite = _.omit(question, ['_id', 'correct']);

                    favorite = Restangular.restangularizeElement(null, favorite, 'v1/questions/favorites');
                    favorite.save().then(function (res, err) {
                        favoriteQuestions.push(res);
                        Defer.resolve();
                    })
                }
                return Defer.promise;
            },
            parseFavorites: function (matchData) {
                var parsedFavoriteQuestions = _.cloneDeep(favoriteQuestions);
                console.log(parsedFavoriteQuestions);
                var subs = [
                    {
                        name: "#home",
                        langs: matchData.home_team.name
                    },
                    {
                        name: "#away",
                        langs: matchData.away_team.name
                    }
                ]

                // For each question
                _.each(parsedFavoriteQuestions, function (favoriteQuestion) {
                    // Change vars in "question.text"
                    _.forOwn(favoriteQuestion.text, function (answerText, languageKey) {
                        // For each variable sub
                        _.each(subs, function (sub) {
                            favoriteQuestion.text[languageKey] = _.replace(favoriteQuestion.text[languageKey], sub.name, sub.langs[languageKey]);;
                        })
                    });

                    // For each answer
                    _.each(favoriteQuestion.answers, function (answer) {
                        // For each language in answer's text
                        _.forOwn(answer.text, function (answerText, languageKey) {
                            // For each variable sub
                            _.each(subs, function (sub) {
                                answer.text[languageKey] = _.replace(answer.text[languageKey], sub.name, sub.langs[languageKey]);;
                            })
                        });
                    })
                });

                return parsedFavoriteQuestions;
            },
            Save: function (question) {
                var Defer = $q.defer();
                question = Restangular.restangularizeElement(null, question, 'v1/questions');
                question.save().then(function (res, err) {
                    console.log(res);
                    console.log(err);
                    Defer.resolve(res);
                })

                return Defer.promise;
            }
        }
    };


    SponsorsService.$inject = ['$rootScope', '$q', 'Restangular'];

    function SponsorsService($rootScope, $q, Restangular) {
        var SponsorsAPI = Restangular.all('leaderpay/v1/sponsors');

        Restangular.setBaseUrl($rootScope.servers[$rootScope.serverEnvironment].game_server);
        Restangular.setRestangularFields({
            id: "_id"
        });

        return {

            All: function () {
                var Defer = $q.defer();

                Defer.resolve([{
                    "company": "Coca Cola",
                    "name": "Sponsored by Coca Cola",
                    "banner": "http://static.wixstatic.com/media/86524a_8e7cf46163d10eb8ccb2ceb407085a97.jpg_1024",
                    "video": ""
                },
                    {
                        "company": "Amstel",
                        "name": "Seeing you later - Amstel",
                        "banner": "http://2.bp.blogspot.com/-KQ4Ze7kZoEM/UYlG1Lcp9nI/AAAAAAAAH1I/dhuMMd8EFGU/s1600/amstel-lager.jpg"
                    },
                    {
                        "company": "Vodagone",
                        "name": "Vodafone",
                        "banner": "http://www.vodafone.gr/portal/resources/media/Vodafone_Elladas/network/network-banner-inner-en--.jpg",
                        "video": ""
                    }
                ]);

                // SponsorsAPI.getList().then(function(sponsors) {
                //     Defer.resolve(sponsors);
                // });
                return Defer.promise;
            }
        }
    };

    function PrizesService($rootScope, $q, Restangular) {
        var PrizesAPI = Restangular.all('leaderpay/v1/prizes');

        Restangular.setBaseUrl($rootScope.servers[$rootScope.serverEnvironment].game_server);
        Restangular.setRestangularFields({
            id: "_id"
        });

        return {

            getAllPlain: function () {
                var Defer = $q.defer();

                PrizesAPI.getList().then(function (prizes) {
                    prizes = _.forEach(prizes, function (prize) {
                        prize = prize.plain();
                    });
                    Defer.resolve(prizes);
                });
                return Defer.promise;
            }
        }
    };

    function PoolsService($rootScope, $q, Restangular) {


        var PoolsAPI = Restangular.all('leaderpay/v1/pools');

        Restangular.setBaseUrl($rootScope.servers[$rootScope.serverEnvironment].game_server);
        Restangular.setRestangularFields({
            id: "_id"
        });

        return {

            getPoolsFor: function (id) {
                // Get Pool for game
                // https://sportimo.mod.bz/leaderpay/v1/pools/forgame/
                var Defer = $q.defer();
                PoolsAPI.one('forgame/').getList(id).then(function (pools) {
                    pools = Restangular.restangularizeCollection(null, pools, 'leaderpay/v1/pools');
                    pools = _.forEach(pools, function (pool) {
                        pool.fromServer = true
                    });
                    Defer.resolve(pools);
                });
                return Defer.promise;
            },
            getNonGamePools: function (id) {
                // Get Pool for game
                // https://sportimo.mod.bz/leaderpay/v1/pools/forgame/
                var Defer = $q.defer();
                PoolsAPI.one('').getList('timed').then(function (pools) {
                    pools = Restangular.restangularizeCollection(null, pools, 'leaderpay/v1/pools');
                    pools = _.forEach(pools, function (pool) {
                        pool.fromServer = true
                    });
                    Defer.resolve(pools);
                });
                return Defer.promise;
            },


            // getSchedule: function() {
            //     var Defer = $q.defer();
            //     Schedule.getList().then(function(schedule) {
            //         Defer.resolve(schedule);
            //     });
            //     return Defer.promise;
            // },

            addPool: function (newPool) {
                var Defer = $q.defer();
                PoolsAPI.post(newPool).then(function (pool) {
                    Defer.resolve(pool);
                }, function (err) {
                    console.log(err);
                });
                return Defer.promise;
            },

            // updateMatch: function(updatedMatch) {
            //     var Defer = $q.defer();
            //     var match = _.cloneDeep(updatedMatch);
            //     updatedMatch.home_team = updatedMatch.home_team._id.$oid;
            //     updatedMatch.away_team = updatedMatch.away_team._id.$oid;
            //     updatedMatch.save().then(function(res) {
            //         updatedMatch.home_team = match.home_team;
            //         updatedMatch.away_team = match.away_team
            //         Defer.resolve(res);
            //     })
            //     return Defer.promise;
            // },


            // deleteMatch: function(match) {
            //     var Defer = $q.defer();
            //     match.remove().then(function(res) {
            //         Defer.resolve(res);
            //     })
            //     return Defer.promise;
            // }
        }

    }


    SportimoModerationSoccerController.$inject = ['StatsComService', 'CompetitionsService', 'StatsService', 'TagsService', 'ngClipboard', '$location', '$anchorScroll', 'QuestionsService', 'LeaderboardsService', 'CountriesService', 'PrizesService', 'SponsorsService', 'PoolsService', '$scope', 'ngDialog', '$stateParams', '$http', '$rootScope', '$timeout', '$interval', '$mdToast', '$mdBottomSheet', '$window'];

    function SportimoModerationSoccerController(StatsComService, CompetitionsService, StatsService, TagsService, ngClipboard, $location, $anchorScroll, QuestionsService, LeaderboardsService, CountriesService, PrizesService, SponsorsService, PoolsService, $scope, ngDialog, $stateParams, $http, $rootScope, $timeout, $interval, $mdToast, $mdBottomSheet, $window) {


        var vm = $scope;

        $scope.items = ["one", "two", "three"];

        vm.PoolRooms = null;

        vm.matchid = $stateParams.id;

        vm.loading = {};

        vm.clipboard = function (tocopy) {
            ngClipboard.toClipboard(tocopy);
        }

        //-----------------------------
        // Get the data from SERVER
        //-----------------------------

        // Basic
        var columnDefs = [
            {
                displayName: 'Nickname',
                field: 'name',
                width: 100
            },
            {
                displayName: 'Score',
                field: 'score',
                width: 100
            },
            {
                displayName: 'Country',
                field: 'country',
                width: 100
            },
            {
                displayName: 'ID',
                field: '_id',
                width: 100
            }
        ];

        // LeaderBoards Grid
        vm.gridOptions = {
            columnDefs: columnDefs,
            rowData: null,
            rowSelection: 'single',
            ready: function (api) {
                api.sizeColumnsToFit();
            },
            rowClicked: rowClicked
        };

        vm.userSelected = null;

        function rowClicked(params) {
            vm.userSelected = params.data;
        }


        vm.showLeaderboard = function (pool) {
            vm.loading.leaderboard = true;
            vm.selectedPool = pool;
            LeaderboardsService
                .getLeaderboard(pool)
                .then(function (data) {
                    console.log(data);
                    // pinning
                    vm.gridOptions.rowData = data;
                    vm.gridOptions.api.onNewRows();
                    vm.gridOptions.api.sizeColumnsToFit();

                    $timeout(function () {
                        vm.gridOptions.api.sizeColumnsToFit();
                        console.log("now");
                        vm.loading.leaderboard = false;
                    }, 100);
                });
        }


        // $rootScope.toggleEnvironment = function () {
        //     if ($rootScope.serverEnvironment == 'production')
        //         $rootScope.serverEnvironment = $rootScope.$storage.environment = 'development';
        //     else
        //         $rootScope.serverEnvironment = $rootScope.$storage.environment = 'production';

        //     toast('Environment: ' + $rootScope.serverEnvironment);

        //     $timeout(function () {
        //         $window.location.reload()
        //     }, 2000);

        // };

        // function toast(message) {
        //     $mdToast.show({
        //         template: '<md-toast class="sportimo-toast">' +
        //             '<div class="sportimo-toast-heading text-center">' +
        //             '<img src="app/img/sportimo/icon_sportimo-white_64.png" alt="App Logo" class="pull-left">' +
        //             '</div>' +
        //             '<div>' + message +
        //             '</div>' +
        //             '</md-toast>',
        //         hideDelay: 3000,
        //         position: 'top right'
        //     });
        // }

        $scope.showGridBottomSheet = function ($event) {
            $scope.alert = '';
            $mdBottomSheet.show({
                templateUrl: 'bottom-sheet-grid-template.html',
                controller: 'GridBottomSheetCtrl',

                targetEvent: $event
            }).then(function (clickedItem) {
                $scope.alert = clickedItem.name + ' clicked!';
            });
        };

        $scope.filterTeamPlayers = true;

        // Load tags
        TagsService.getAllTags().then(function (tags) {
            $scope.Tags = tags;
        })
        $scope.getTagById = function (id) {
            // console.log("Getting tag for: "+id);
            var tag = TagsService.getTagById(id);
            return tag;
        }

        $scope.event = {};
        $rootScope.dataStream.onMessage(function (message) {

            var evt = JSON.parse(message.data);
            if (evt.room != vm.matchid) return;

            if (!evt.type.indexOf("Event") > -1)
                console.log(evt);

            switch (evt.type) {
                case "Stats_changed":
                    $scope.match.data.stats = evt.data;
                    $scope.stats = ParseMatchStats(evt.data);
                    break;
                case "Event_added":
                    if (evt.data.timeline_event && evt.data.type.indexOf("Starts") < 0 && evt.data.type.indexOf("Ends") < 0)
                        $scope.match.data.timeline[evt.data.state].events.push(evt.data);
                    break;
                case "Event_updated":
                    var indx = _.findIndex($scope.match.data.timeline[evt.data.state].events, function (o) {
                        return o._id == evt.data._id;
                    });
                    $scope.match.data.timeline[evt.data.state].events[indx] = evt.data;
                    break;
                case "Event_deleted":
                    _.find($scope.match.data.timeline[evt.data.state].events, function (o) {
                        return o._id == evt.data._id;
                    }).status = "removed";
                    $timeout(function () {
                        $scope.loadMatchData(evt.match_id);
                    }, 1500);
                    break;
            }

        });


        // if (evt.match_id == $scope.match.id) {
        //     console.log("Event is for this match");
        //     if (evt.type == "Add" && evt.data.timeline_event) {
        //         console.log("Adding Event");
        //         $scope.match.data.timeline[evt.data.state].events.push(evt.data);
        //     }


        //     if (evt.type == "Delete") {
        //         console.log("Removing Event");
        //         _.findWhere($scope.match.data.timeline[evt.data.state].events, {
        //             id: evt.data.id,
        //             match_id: evt.match_id
        //         }).status = "removed";
        //     }

        //     $timeout(function () {
        //         $scope.loadMatchData(evt.match_id)
        //     }, 1500)

        // }
        // });


        $scope.readable = function (obj) {

            return JSON.stringify(obj, null, 4);
        };



        $scope.loadMatchData = function (id) {

            $http({
                method: 'GET',
                url: $rootScope.servers[$rootScope.serverEnvironment].game_server + 'v1/live/match/' + id

            }).then(function successCallback(response) {
                console.log(response);
                $scope.match = AddHooks(response.data);
                vm.match.data.automoderation = vm.match.data.moderation[0] ? true : false;
                $scope.stats = ParseMatchStats(response.data.data.stats);
                QuestionsService.AllByMatch(vm.matchid).then(function (questions) {
                    vm.questions = questions;
                    vm.ClosedQuestions = _.filter(questions, { status: 1 }).length;
                    vm.parseFavoriteQuestions();

                })

                vm.pushLoading = false;
            }, function errorCallback(response) {
                vm.pushLoading = false;
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        };

        function ParseMatchStats(data) {
            var clonedStats = _.cloneDeep(data);
            var stats = {
                match: {
                    id: null,
                    stats: []
                },
                teams: [],
                players: [],
                system: { stats: [] }
            }

            var system = _.remove(clonedStats, { 'name': 'system' });
            _.forOwn(system[0], function (value, key) {
                if (key != 'name' && key != 'id')
                    stats.system.stats.push({ key: key, value: value });
            })


            var match = _.remove(clonedStats, { 'name': 'match' });
            if (match[0])
                stats.match.id = match[0].id;
            _.forOwn(match[0], function (value, key) {
                console.log(key + ":" + value);
                if (key != 'name' && key != 'id')
                    stats.match.stats.push({ key: key, value: value });
            })

            var teams = _.remove(clonedStats, function (o) {
                return o.name.indexOf('team') > -1;
            })

            _.each(teams, function (team) {
                var newTeam = { id: null, name: null, stats: [] };
                _.forOwn(team, function (value, key) {
                    if (key == 'name')
                        newTeam.name = value;
                    else if (key == 'id')
                        newTeam.id = value;
                    else
                        newTeam.stats.push({ key: key, value: value });
                })
                stats.teams.push(newTeam);
            });

            _.each(clonedStats, function (player) {
                var newPlayer = { id: null, name: null, stats: [] };
                _.forOwn(player, function (value, key) {
                    if (key == 'name')
                        newPlayer.name = value;
                    else if (key == 'id')
                        newPlayer.id = value;
                    else
                        newPlayer.stats.push({ key: key, value: value });
                })
                stats.players.push(newPlayer);
            });

            return stats;
        }

        vm.transStat = function (stat) {
            return StatsService.transStat(stat);
        }
        // $scope.players = [
        //     {
        //         id: "565c4",
        //         team: "home_team",
        //         name: "marco"
        //     },
        //     {
        //         id: "565c4a",
        //         team: "home_team",
        //         name: "polo"
        //     },
        //     {
        //         id: "565c4af",
        //         team: "home_team",
        //         name: "christopher"
        //     },
        //     {
        //         id: "565c4af6",
        //         team: "away_team",
        //         name: "colombo"
        //     },
        //     {
        //         id: "565c4af6e",
        //         team: "away_team",
        //         name: "jekhis"
        //     },
        //     {
        //         id: "565c4af6e4",
        //         team: "home_team",
        //         name: "marlon"
        //     },
        //     {
        //         id: "565c4af6e4b",
        //         team: "home_team",
        //         name: "jones"
        //     },
        //     {
        //         id: "565c4af6e4b0",
        //         team: "away_team",
        //         name: "indiana"
        //     },
        //     {
        //         id: "565c4af6e4b0a",
        //         team: "home_team",
        //         name: "brando"
        //     },
        //     {
        //         id: "565c4af6e4b0a3",
        //         team: "away_team",
        //         name: "han"
        //     },
        //     {
        //         id: "565c4af6e4b0ba33",
        //         team: "home_team",
        //         name: "indiana"
        //     },
        //     {
        //         id: "565c4af6e4b0a33dd",
        //         team: "home_team",
        //         name: "chackie"
        //     }
        // ];


        $scope.checkSelection = function ($item, $model) {

        };

        $scope.advanceSegment = function () {

            ngDialog.openConfirm({
                template: 'deleteEventDialog',
                data: {
                    title: 'Warning',
                    message: 'This action will advance the match to its next segment as it is defined in the sports atributes.<br/><br/> <p>Do you still want to continue?</p><br/>'
                }
            }).then(function (value) {
                var EventData = {
                    type: "AdvanceSegment",
                    match_id: $scope.match.id,
                };

                EventData.created = moment().utc();


                $http({
                    method: 'POST',
                    url: $rootScope.servers[$rootScope.serverEnvironment].game_server + 'v1/moderation/' + $stateParams.id + '/event',
                    data: EventData
                }).then(function successCallback(response) {
                    $scope.match = AddHooks(response.data);
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });

            }, function (reason) {

                console.log('Modal promise rejected. Reason: ', reason);
            });

        };

        $scope.removeSegment = function (index) {

            if (index != $scope.match.data.state) {
                ngDialog.open({
                    template: 'firstDialogId',
                    data: {
                        title: 'Warning',
                        message: 'You can only remove the last segment of the match.'
                    }
                });

                return;
            } else {
                ngDialog.openConfirm({
                    template: 'deleteEventDialog',
                    data: {
                        title: 'Warning',
                        message: 'This action will destroy the current segment. It is here for testing purposes or extreme conditions. It will not affect stats or anything else apart remove the segment from the timeline.<br/><br/> <p>Do you still want to continue?</p><br/>'
                    }
                }).then(function (value) {
                    var EventData = {
                        type: "DeleteSegment",
                        id: $scope.match.id,
                        index: index
                    };

                    $http({
                        method: 'POST',
                        url: $rootScope.servers[$rootScope.serverEnvironment].game_server + 'v1/live/match/time/remove',
                        data: EventData
                    }).then(function successCallback(response) {
                        console.log(response);
                        $scope.match = AddHooks(response.data);
                        $rootScope.toast("Removal succesful.");
                    }, function errorCallback(response) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                    });

                }, function (reason) {

                    console.log('Modal promise rejected. Reason: ', reason);
                });
            }




        };

        // Edit Time segments
        $scope.editingSegmentTime = {
            index: null,
            edited: false
        };

        $scope.EditSegmentTimes = function (index) {
            if ($scope.editingSegmentTime.index == index) {

                if ($scope.editingSegmentTime.edited) {

                    console.log("We need to update.")
                    $http({
                        method: 'POST',
                        url: $rootScope.servers[$rootScope.serverEnvironment].game_server + 'v1/live/match/time',
                        data: {
                            id: $stateParams.id,
                            index: index,
                            data: $scope.match.data.timeline[index]
                        }
                    }).then(function successCallback(response) {
                        $rootScope.toast("Segment time updated on server.");

                    }, function errorCallback(response) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                    });

                }
                $scope.editingSegmentTime.index = null;
                $scope.editingSegmentTime.edited = false;
            } else {
                $scope.editingSegmentTime.index = index;
                $scope.editingSegmentTime.edited = false;
            }

        };


        $scope.changed = function () {
            $scope.editingSegmentTime.edited = true;
        };

        $scope.selectedEvent = {};
        $scope.editEvent = function (event) {
            $scope.selectedEvent = event;
            $scope.eventDrawer = 3;
        };

        $scope.clickedEvent = -1;

        $scope.addEvent = function (event) {

            var addEventData = {
                type: "Add",
                match_id: event.match_id,
                data: event
            };

            $scope.sendEvent(addEventData);
        };


        $scope.updateEvent = function (event) {

            delete (event.clicked);

            ngDialog.openConfirm({
                template: 'deleteEventDialog',
                data: {
                    title: 'DANGER',
                    message: 'This action will destroy the selected event. It will remove points from users and re-calculate new points and leaderboards.<br/> Will also cause floods and earthquakes in a poor distant country.<br/> There is also a high probability that it kill a few unborn babies somewhere too.<p>Do you still want to continue?</p>'
                }
            }).then(function (value) {
                //console.log('Modal promise resolved. Value: ', value);
                var updateEventData = {
                    type: "Update",
                    match_id: event.match_id,
                    data: event
                };

                $scope.sendEvent(updateEventData);

            }, function (reason) {

                console.log('Modal promise rejected. Reason: ', reason);
            });
        };

        $scope.removeEvent = function (event) {
            ngDialog.openConfirm({
                template: 'deleteEventDialog',
                data: {
                    title: 'DANGER',
                    message: 'This action will destroy the selected event. It will remove points from users and re-calculate new points and leaderboards.<br/> Will also cause floods and earthquakes in a poor distant country.<br/> There is also a high probability that it kill a few unborn babies somewhere too.<p>Do you still want to continue?</p>'
                }
            }).then(function (value) {
                //console.log('Modal promise resolved. Value: ', value);
                var removeEventData = {
                    type: "Delete",
                    match_id: event.match_id,
                    data: event
                };

                $scope.sendEvent(removeEventData);

            }, function (reason) {

                console.log('Modal promise rejected. Reason: ', reason);
            });
        };

        $scope.GetStat = function (statId, statkey) {
            return _.result(_.find($scope.match.data.stats, {
                id: statId
            }), statkey);
        };

        $scope.UpperCase = function (str) {
            if (str)
                return str.toUpperCase();
        }
        $scope.InNeedUpdateEvents = [];

        $scope.createEmptyEventForTeam = function (team, id) {
            if ($scope.newEvent) {
                $scope.newEvent.team = team;
            } else {
                $scope.eventDrawer = 1;

                var event_id = $scope.GetStat($scope.match.id, 'events_sent') || 0;

                var event = {
                    id: event_id,
                    match_id: $scope.match.id,
                    type: null,
                    stats: null,
                    playerscount: 1,
                    status: "active",
                    timeline_event: true,
                    state: $scope.match.data.state,
                    sender: "Moderator",
                    time: $scope.match.data.time,
                    team: team,
                    team_id: id,
                    complete: false,
                    playerSelected: ""
                };

                $scope.InNeedUpdateEvents.push(event);

                $scope.newEvent = _.last($scope.InNeedUpdateEvents);
            }
            setTimeout(function () {
                $anchorScroll.yOffset = 100;
                $anchorScroll('eventsPanel');
            }, 100)
        };

        $scope.sendCancel = function () {

            $scope.InNeedUpdateEvents = _.without($scope.InNeedUpdateEvents, $scope.newEvent);
            $scope.newEvent = null;
            $scope.eventDrawer = 0;
        }

        $scope.createEvent = function (eventType, stats) {

            $scope.newEvent.type = eventType;
            $scope.newEvent.stats = stats;
            $scope.eventDrawer = 2;
            if (eventType == "substitution") $scope.event.playerscount = 2;

            setTimeout(function () {
                $anchorScroll.yOffset = 100;
                $anchorScroll('eventsPanel');
            }, 100)
        };

        $scope.openDrawer = function (drawer) {
            $scope.eventDrawer = drawer;
        };
        $scope.closeDrawer = function () {
            $scope.eventDrawer = 0;
        };

        function validateEvent(event) {

            if (event.timeline_event && $scope.match.sport.segments[$scope.match.data.state].timed) return false;

            return true;
        }

        $scope.sendEvent = function (event) {

            // console.log(event);
            if (!validateEvent(event)) {

                ngDialog.open({
                    template: 'firstDialogId',
                    data: {
                        title: 'Warning',
                        message: 'You can only play timeline events while the match is in session.'
                    }
                });
                return;
            }

            // Close the drawer
            $scope.eventDrawer = 0;

            $http({
                method: 'POST',
                url: $rootScope.servers[$rootScope.serverEnvironment].game_server + 'v1/moderation/' + $stateParams.id + '/event',
                data: event
            }).then(function successCallback(response) {
                console.log(response);


                if (response.data.playerscount == response.data.players.length) {
                    $scope.InNeedUpdateEvents.pop();
                    console.log($scope.InNeedUpdateEvents.length);
                }
                else {
                    var last = _.last($scope.InNeedUpdateEvents);
                    last._id = response.data._id;

                }
                $scope.newEvent = null;
                // last = response.data.data;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        };

        $scope.capitalize = function (str) {
            if (str)
                return str.replace(/(?:^|\s)\S/g, function (a) {
                    return a.toUpperCase();
                });
            else return null;
        };

        $scope.getEventNameFromStat = function (stats) {

            return _.keys(stats)[0];
        }

        //{"id":43,"data":"{"event":"message","data":{"message":".","match_id":421}}"}
        $scope.complete = false;
        $scope.humanizedEvent = "";

        $scope.$watch('event', function (now, then) {

            $scope.humanizedEvent = "";


            if (!now) return;
            if (!now.players) return;

            var teamlogo = "<img class='ui-select-match-img' alt='" + now.team + "' src='" + $scope.match.data[now.team].logo + "'>";

            switch (now.type) {
                case "substitution":

                    if (now.team && now.players.length == 2) {
                        $scope.complete = true;
                        $scope.humanizedEvent = "<strong>" + now.data.time + "'</strong> " + teamlogo + $scope.capitalize(now.type) + ": <strong>Out:</strong> " + $scope.capitalize(now.players[0].name) + " <strong>In:</strong> " + $scope.capitalize(now.players[1].name);
                    }
                    break;
                default:
                    if (now.team && now.players.length == 1) {
                        $scope.complete = true;
                        $scope.humanizedEvent = "<strong>" + now.time + "'</strong> " + teamlogo + $scope.capitalize(now.type) + " - " + $scope.capitalize(now.players[0].name);
                    }
                    break;
            }

        }, true);


        $scope.sendMessage = function (matchid, message) {
            console.log(matchid + ": " + message);
            var data = {
                match_id: matchid,
                type: "message",
                timeline_event: true,
                state: $scope.match.data.state,
                data: {
                    sender: "Moderator",
                    time: $scope.match.data.time,
                    message: message,
                    match_id: matchid,
                }

            };

            $http({
                method: 'POST',
                url: $rootScope.servers[$rootScope.serverEnvironment].game_server + 'v1/moderation/' + $stateParams.id + '/event',
                data: data
            }).then(function successCallback(response) {
                console.log(response.data);
                $scope.match = AddHooks(response.data);
                vm.match.data.automoderation = vm.match.data.moderation[0] ? true : false;
                QuestionsService.AllByMatch(vm.matchid).then(function (questions) {
                    vm.questions = questions;
                    vm.ClosedQuestions = _.filter(questions, { status: 1 }).length;
                    vm.parseFavoriteQuestions();

                })
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        };

        'use strict';
        var match_timer;

        function AddHooks(match) {

            if (angular.isDefined(match_timer)) {
                $interval.cancel(match_timer);
                match_timer = undefined;
            }

            match.data.state = match.data.state || 0;

            match.GetCurrentSegment = function () {
                // We assign the name of the segment to the currentSegment var
                if (match.sport.segments[match.data.state])
                    return match.sport.segments[match.data.state].name;
                else
                    return "Unknown State";
            };

            // Adding Timer hooks
            if (match.sport.segments[match.data.state]) {
                if (match.sport.segments[match.data.state].timed) {

                    if (!match.sport.time_dependant) { //  Is Time controlled?
                        match_timer = $interval(function () {
                            var now = moment().utc();
                            var then = moment(match.data.timeline[match.data.state].start);
                            var ms = moment(now, "DD/MM/YYYY HH:mm:ss").diff(moment(then, "DD/MM/YYYY HH:mm:ss"));
                            var d = moment.duration(ms);
                            match.Match_timer = d.format("mm:ss", {
                                trim: false
                            });
                            //console.log(d.minutes());
                            //console.log(d.format());
                            match.data.time = (match.sport.segments[match.data.state].initialTime || 0) + parseInt(d.add(1, "minute").format("m")) + "";
                        }, 1000);
                    }
                } else {
                    match.Match_timer = "00:00";
                }
            }


            return match;
        }

        $scope.reloadMatch = function () {
            $scope.reloadingServer = true;
            $http({
                method: 'POST',
                url: $rootScope.servers[$rootScope.serverEnvironment].game_server + 'v1/live/match/reload',
                data: {
                    id: $stateParams.id
                }
            }).then(function successCallback(response) {
                $scope.reloadingServer = false;
                console.log("[Reloaded Match]");
                $scope.match = AddHooks(response.data);
                vm.match.data.automoderation = vm.match.data.moderation[0] ? true : false;

            }, function errorCallback(response) {
                $scope.reloadingServer = false;
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        };



        /** Replacing with this  */
        $scope.loadMatchData($stateParams.id);

        /** No need for Post method to load match  */

        // $http({
        //     method: 'POST',
        //     url: $rootScope.servers[$rootScope.serverEnvironment].game_server + 'live/match',
        //     data: {id: $stateParams.id}
        // }).then(function successCallback(response) {
        //     console.log(response);
        //     $scope.match = AddHooks(response.data);

        // }, function errorCallback(response) {
        //     // called asynchronously if an error occurs
        //     // or server returns response with an error status.
        // });

        $scope.formatDate = function (stringDate) {
            return moment(stringDate).calendar(); //format("dddd, MMMM Do YYYY, h:mm:ss a");
        };

        // Moderation-PoolRooms
        $scope.sortableCallbackNew = function (sourceModel, destModel, start, end) {
            vm.updatePrizePositions(vm.NewPool, vm.prizePositions);
        };
        $scope.sortableCallbackEdit = function (sourceModel, destModel, start, end) {
            vm.updatePrizePositions(vm.EditPool, vm.prizePositions);
        };

        $scope.sortableOptions = {
            placeholder: '<div class="box-placeholder p0 m0"><div></div></div>',
            forcePlaceholderSize: true
        };

        vm.PoolRooms = null;
        PoolsService.getPoolsFor(vm.matchid).then(function (pools) {
            vm.PoolRooms = pools;
        });
        vm.setDefault = function (pool) {
            vm.PoolRooms.forEach(function (eachpool) {
                eachpool.isdefault = false;
                eachpool.save();
            })
            console.log(pool);
            pool.isdefault = true;
            pool.save();
        }
        vm.editPool = function (pool) {
            vm.prizePositions = [];
            var $index = 1;
            _.forEach(pool.prizes, function (prize) {
                var pos = {};
                console.log(prize.positions);
                if (prize.positions.to)
                    pos.to = prize.positions.to;
                if (prize.positions.from)
                    pos.from = prize.positions.from;
                else
                    pos = {
                        from: $index,
                        to: $index
                    };

                $index++;
                vm.prizePositions.push(pos);
            })
            vm.EditPool = pool;
        }

        vm.RemoveNewPool = function () {
            vm.NewPool = null;
        }
        vm.AddNewPool = function () {
            console.log(vm.NewPool);
            vm.NewPool = {

                title: {
                    en: ""
                },
                // roomtype: Season, Week, Game, Custom
                // Season And Week should always have Starting and Ending Dates, Game
                // must have a gameid and Custom must have at least one.
                roomtype: "Game",

                // The atatched game id
                gameid: vm.matchid,

                // Starting and Ending Dates of the pool
                starts: null,
                ends: null,

                // A sponsor object containing all sponsor's information and resources
                sponsor: null,

                isdefault: vm.PoolRooms.length == 0 ? true : false,

                // Status: Open, Closed
                status: "Active",

                // prizetype: "Prizetype.Gift | Prizetype.Pool"
                prizetype: "Prizetype.Gift",

                // Entry fee is in USD currency. Only applicable if Prizetype.Pool 
                // Used in Pool calculations
                // hasentryfee: Number,

                // Only applicable to Prizetype.Gift 
                // prizes: [{rank:1, img:"http:imagesomewhere.png, title: {en:"Hurray!"}, text:{en:"Reward text. Yay!"}"}]
                prizes: [],

                // conditions:  "Country", value:["GR","UK","SA"]}
                country: []
            };
        }

        vm.removePool = function (pool) {
            pool.remove().then(function () {
                vm.PoolRooms = _.without(vm.PoolRooms, pool);
            });
        }


        SponsorsService.All().then(function (sponsors) {
            vm.sponsors = sponsors;
        });

        PrizesService.getAllPlain().then(function (prizes) {
            vm.prizes = prizes;
        });

        vm.addPrize = function (prize, pool) {
            var positions = {
                from: vm.prizePositions.length > 0 ? vm.prizePositions[vm.prizePositions.length - 1].to + 1 : 1,
                to: vm.prizePositions.length > 0 ? vm.prizePositions[vm.prizePositions.length - 1].to + 1 : 1
            };
            var newprize = {
                name: prize.name,
                text: prize.text,
                picture: prize.picture,
                positions: positions
            }
            vm.prizePositions.push(positions);
            pool.prizes.push(newprize);
        }

        vm.removePrize = function (pool, prize) {
            pool.prizes = _.without(pool.prizes, prize);
            vm.editPrizePos = -1;
            vm.updatePrizePositions(pool, vm.prizePositions);
        }

        vm.CreateLeaderboard = function (pool) {
            PoolsService.addPool(pool).then(function (newPool) {
                vm.PoolRooms.push(newPool);
                vm.NewPool = null;
                vm.prizePositions = [];
            });
        }

        vm.UpdateLeaderboard = function (pool) {

            pool.save().then(function (newPool) {
                vm.EditPool = null;
                vm.prizePositions = [];
            });
        }

        vm.RemoveEditPool = function () {
            vm.EditPool = null;
            vm.prizePositions = [];
        }

        vm.opened = {};
        vm.open = function ($event, whichCal) {
            $event.preventDefault();
            $event.stopPropagation();
            vm.opened[whichCal] = true;
        };

        vm.countries = CountriesService.getCountries();

        // Holds prize positions in order to pass it along the pool
        vm.prizePositions = [];

        vm.updatePrizePositions = function (pool, prizePositions) {
            var $index = 0;
            var lastPos = 0;

            _.forEach(prizePositions, function (pos) {
                if (lastPos >= pos.from) pos.from = lastPos + 1;
                lastPos = pos.to;

            });

            pool.prizes.forEach(function (prize) {
                prize.positions = prizePositions[$index];
                $index++;
            });

            while (prizePositions.length > $index) {
                prizePositions.pop();
            }
        }

        vm.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };

        vm.initDate = new Date('2019-10-20');
        vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        vm.format = vm.formats[0];
        vm.searchObj = {};

        /* ========================================================================
          Questions Administration
        ========================================================================== */
        vm.questions = null;
        vm.ClosedQuestions;
        vm.SelectedQuestion = null;


        vm.saveToFavorites = function (question) {
            QuestionsService.saveToFavorites(question).then(function () {
                vm.parseFavoriteQuestions();
                $rootScope.toast("Question saved to favorites.");
            })
        }

        vm.selectedSaved = {};
        vm.parsedFavoriteQuestions = [];
        vm.parseFavoriteQuestions = function () {
            if (vm.match.data)
                vm.parsedFavoriteQuestions = QuestionsService.parseFavorites(vm.match.data);
        }

        vm.setSavedQuestion = function (question) {
            vm.SelectedQuestion = _.cloneDeep(question);
            vm.SelectedQuestion.matchid = vm.matchid;
        }

        vm.addNewQuestion = function () {

            vm.parseFavoriteQuestions();

            vm.SelectedQuestion = {
                matchid: vm.matchid,
                type: "reward",
                text: {
                    en: ""
                }
            }
        }

        vm.showFavoritesInfo = function () {
            $rootScope.toast("You can use variables before you save to custom questions.</br></br> Vars:</br> #home - home_team</br> #away - away_team");
        }

        vm.addAnswer = function () {
            vm.SelectedQuestion.answers.push({
                "text": {
                    "en": ""
                },
                "img": null,
                "points": 0,
                "answered": 0

            })
        }

        vm.deleteAnswer = function (answer) {
            vm.SelectedQuestion.answers = _.without(vm.SelectedQuestion.answers, answer);
        }

        vm.cancelEditQuestion = function () {
            vm.SelectedQuestion = null;
        }

        vm.editQuestion = function (question) {
            vm.SelectedQuestion = question;
        }

        vm.UpdateQuestion = function (question) {
            question.save().then(function (err, data) {
                console.log(err);
                console.log(data);
                vm.SelectedQuestion = null;
            })
        }

        // We request this after loading match now
        //
        // QuestionsService.AllByMatch(vm.matchid).then(function (questions) {
        //     vm.questions = questions;
        //     vm.ClosedQuestions = _.filter(questions, { status: 1 }).length;
        //     vm.parseFavoriteQuestions();

        // })

        vm.CreateSendQuestion = function (question) {
            QuestionsService.Save(question).then(function (res) {
                vm.questions.push(res);
                vm.SelectedQuestion = null;
                question = null;
            })
        }

        // -----------------------------
        // Stats Auto Moderation
        // -----------------------------
        vm.moderationError = "";
        vm.UpdateModeration = function (modObject) {
            if (!modObject.parserid) {
                vm.moderationError = "Match ParserID is mandatory";
                return;
            }

            $http({
                method: 'POST',
                url: $rootScope.servers[$rootScope.serverEnvironment].game_server + 'v1/moderation/' + vm.matchid + '/service/add',
                data: modObject
            }).then(function successCallback(response) {
                console.log(repsonse);
            }, function errorCallback(response) {
                console.log(repsonse);
            });

        }

        vm.view = {};

        vm.updateModerationStatus = function (modObject) {
            vm.view.busy = true;

            $http({
                method: 'PUT',
                url: $rootScope.servers[$rootScope.serverEnvironment].game_server + 'v1/moderation/' + vm.matchid + '/service/' + (vm.match.data.moderation[0].active ? 'resume' : 'pause'),
                data: modObject
            }).then(function successCallback(response) {
                vm.view.busy = false;
            }, function errorCallback(response) {
                console.log(repsonse);
            });
        }

        var storedModObject = null;
        vm.toggleNewModeration = function (form) {

            form.$dirty = true;

            if (vm.match.data.automoderation) {

                if (storedModObject)
                    vm.match.data.moderation[0] = storedModObject;
                else
                    vm.match.data.moderation[0] = {
                        "type": "rss-feed",
                        "parserid": (vm.match.data.parserids && vm.match.data.parserids["Stats"]) ? vm.match.data.parserids["Stats"] : null,
                        "parsername": "Stats",
                        "active": true
                    }
            }
            else {

                if (vm.match.data.moderation[0])
                    storedModObject = vm.match.data.moderation[0];
                vm.match.data.moderation[0] = null;

            }
            //  ng-true-value='{
            //     "type": "rss-feed",
            //     "parserid": "{{match.data.parseids[stats]}}",
            //     "parsername": "Stats",
            //     "active": true
            // }' ng-false-value="null">    
        }

        vm.findID = null;
        vm.loadingCompetitions = false;
        vm.openFindID = function () {
            vm.findID = 1;
            CompetitionsService.All().then(function (all) {
                vm.competitions = all;
            })
        }
        vm.statsSearch = { message: "Select event" };
        // message:"Select upcoming event from Stats.com"
        vm.StatsUpcomingEvents = [];
        vm.onStatsCompetition = function () {
            vm.loadingCompetitions = true;
            StatsComService.GetFixtures(vm.statsSearch.competition).then(function (result) {
                console.log(result[0]);
                vm.StatsUpcomingEvents = result;
            })
        }

        vm.OnEventSelection = function (selection) {
            console.log(selection);
            vm.match.data.moderation[0].parserid = selection.parserids["Stats"] || "No id found";
            vm.findID = null;
            vm.loadingCompetitions = false;
        }

        $scope.formDate = function (date, style, inUTC) {
            //  console.log(date);
            //   console.log(new Date(date));
            var d = new Date(date);

            if (inUTC)
                return moment(d).utc().format(style);
            else
                return moment(d).format(style) + " (local time)";
        }

    }

    function CountriesService() {
        return {
            getCountries: function () {
                return [ // Taken from https://gist.github.com/unceus/6501985
                    {
                        name: 'Afghanistan',
                        code: 'AF'
                    },
                    {
                        name: 'Åland Islands',
                        code: 'AX'
                    },
                    {
                        name: 'Albania',
                        code: 'AL'
                    },
                    {
                        name: 'Algeria',
                        code: 'DZ'
                    },
                    {
                        name: 'American Samoa',
                        code: 'AS'
                    },
                    {
                        name: 'Andorra',
                        code: 'AD'
                    },
                    {
                        name: 'Angola',
                        code: 'AO'
                    },
                    {
                        name: 'Anguilla',
                        code: 'AI'
                    },
                    {
                        name: 'Antarctica',
                        code: 'AQ'
                    },
                    {
                        name: 'Antigua and Barbuda',
                        code: 'AG'
                    },
                    {
                        name: 'Argentina',
                        code: 'AR'
                    },
                    {
                        name: 'Armenia',
                        code: 'AM'
                    },
                    {
                        name: 'Aruba',
                        code: 'AW'
                    },
                    {
                        name: 'Australia',
                        code: 'AU'
                    },
                    {
                        name: 'Austria',
                        code: 'AT'
                    },
                    {
                        name: 'Azerbaijan',
                        code: 'AZ'
                    },
                    {
                        name: 'Bahamas',
                        code: 'BS'
                    },
                    {
                        name: 'Bahrain',
                        code: 'BH'
                    },
                    {
                        name: 'Bangladesh',
                        code: 'BD'
                    },
                    {
                        name: 'Barbados',
                        code: 'BB'
                    },
                    {
                        name: 'Belarus',
                        code: 'BY'
                    },
                    {
                        name: 'Belgium',
                        code: 'BE'
                    },
                    {
                        name: 'Belize',
                        code: 'BZ'
                    },
                    {
                        name: 'Benin',
                        code: 'BJ'
                    },
                    {
                        name: 'Bermuda',
                        code: 'BM'
                    },
                    {
                        name: 'Bhutan',
                        code: 'BT'
                    },
                    {
                        name: 'Bolivia',
                        code: 'BO'
                    },
                    {
                        name: 'Bosnia and Herzegovina',
                        code: 'BA'
                    },
                    {
                        name: 'Botswana',
                        code: 'BW'
                    },
                    {
                        name: 'Bouvet Island',
                        code: 'BV'
                    },
                    {
                        name: 'Brazil',
                        code: 'BR'
                    },
                    {
                        name: 'British Indian Ocean Territory',
                        code: 'IO'
                    },
                    {
                        name: 'Brunei Darussalam',
                        code: 'BN'
                    },
                    {
                        name: 'Bulgaria',
                        code: 'BG'
                    },
                    {
                        name: 'Burkina Faso',
                        code: 'BF'
                    },
                    {
                        name: 'Burundi',
                        code: 'BI'
                    },
                    {
                        name: 'Cambodia',
                        code: 'KH'
                    },
                    {
                        name: 'Cameroon',
                        code: 'CM'
                    },
                    {
                        name: 'Canada',
                        code: 'CA'
                    },
                    {
                        name: 'Cape Verde',
                        code: 'CV'
                    },
                    {
                        name: 'Cayman Islands',
                        code: 'KY'
                    },
                    {
                        name: 'Central African Republic',
                        code: 'CF'
                    },
                    {
                        name: 'Chad',
                        code: 'TD'
                    },
                    {
                        name: 'Chile',
                        code: 'CL'
                    },
                    {
                        name: 'China',
                        code: 'CN'
                    },
                    {
                        name: 'Christmas Island',
                        code: 'CX'
                    },
                    {
                        name: 'Cocos (Keeling) Islands',
                        code: 'CC'
                    },
                    {
                        name: 'Colombia',
                        code: 'CO'
                    },
                    {
                        name: 'Comoros',
                        code: 'KM'
                    },
                    {
                        name: 'Congo',
                        code: 'CG'
                    },
                    {
                        name: 'Congo, The Democratic Republic of the',
                        code: 'CD'
                    },
                    {
                        name: 'Cook Islands',
                        code: 'CK'
                    },
                    {
                        name: 'Costa Rica',
                        code: 'CR'
                    },
                    {
                        name: 'Cote D\'Ivoire',
                        code: 'CI'
                    },
                    {
                        name: 'Croatia',
                        code: 'HR'
                    },
                    {
                        name: 'Cuba',
                        code: 'CU'
                    },
                    {
                        name: 'Cyprus',
                        code: 'CY'
                    },
                    {
                        name: 'Czech Republic',
                        code: 'CZ'
                    },
                    {
                        name: 'Denmark',
                        code: 'DK'
                    },
                    {
                        name: 'Djibouti',
                        code: 'DJ'
                    },
                    {
                        name: 'Dominica',
                        code: 'DM'
                    },
                    {
                        name: 'Dominican Republic',
                        code: 'DO'
                    },
                    {
                        name: 'Ecuador',
                        code: 'EC'
                    },
                    {
                        name: 'Egypt',
                        code: 'EG'
                    },
                    {
                        name: 'El Salvador',
                        code: 'SV'
                    },
                    {
                        name: 'Equatorial Guinea',
                        code: 'GQ'
                    },
                    {
                        name: 'Eritrea',
                        code: 'ER'
                    },
                    {
                        name: 'Estonia',
                        code: 'EE'
                    },
                    {
                        name: 'Ethiopia',
                        code: 'ET'
                    },
                    {
                        name: 'Falkland Islands (Malvinas)',
                        code: 'FK'
                    },
                    {
                        name: 'Faroe Islands',
                        code: 'FO'
                    },
                    {
                        name: 'Fiji',
                        code: 'FJ'
                    },
                    {
                        name: 'Finland',
                        code: 'FI'
                    },
                    {
                        name: 'France',
                        code: 'FR'
                    },
                    {
                        name: 'French Guiana',
                        code: 'GF'
                    },
                    {
                        name: 'French Polynesia',
                        code: 'PF'
                    },
                    {
                        name: 'French Southern Territories',
                        code: 'TF'
                    },
                    {
                        name: 'Gabon',
                        code: 'GA'
                    },
                    {
                        name: 'Gambia',
                        code: 'GM'
                    },
                    {
                        name: 'Georgia',
                        code: 'GE'
                    },
                    {
                        name: 'Germany',
                        code: 'DE'
                    },
                    {
                        name: 'Ghana',
                        code: 'GH'
                    },
                    {
                        name: 'Gibraltar',
                        code: 'GI'
                    },
                    {
                        name: 'Greece',
                        code: 'GR'
                    },
                    {
                        name: 'Greenland',
                        code: 'GL'
                    },
                    {
                        name: 'Grenada',
                        code: 'GD'
                    },
                    {
                        name: 'Guadeloupe',
                        code: 'GP'
                    },
                    {
                        name: 'Guam',
                        code: 'GU'
                    },
                    {
                        name: 'Guatemala',
                        code: 'GT'
                    },
                    {
                        name: 'Guernsey',
                        code: 'GG'
                    },
                    {
                        name: 'Guinea',
                        code: 'GN'
                    },
                    {
                        name: 'Guinea-Bissau',
                        code: 'GW'
                    },
                    {
                        name: 'Guyana',
                        code: 'GY'
                    },
                    {
                        name: 'Haiti',
                        code: 'HT'
                    },
                    {
                        name: 'Heard Island and Mcdonald Islands',
                        code: 'HM'
                    },
                    {
                        name: 'Holy See (Vatican City State)',
                        code: 'VA'
                    },
                    {
                        name: 'Honduras',
                        code: 'HN'
                    },
                    {
                        name: 'Hong Kong',
                        code: 'HK'
                    },
                    {
                        name: 'Hungary',
                        code: 'HU'
                    },
                    {
                        name: 'Iceland',
                        code: 'IS'
                    },
                    {
                        name: 'India',
                        code: 'IN'
                    },
                    {
                        name: 'Indonesia',
                        code: 'ID'
                    },
                    {
                        name: 'Iran, Islamic Republic Of',
                        code: 'IR'
                    },
                    {
                        name: 'Iraq',
                        code: 'IQ'
                    },
                    {
                        name: 'Ireland',
                        code: 'IE'
                    },
                    {
                        name: 'Isle of Man',
                        code: 'IM'
                    },
                    {
                        name: 'Israel',
                        code: 'IL'
                    },
                    {
                        name: 'Italy',
                        code: 'IT'
                    },
                    {
                        name: 'Jamaica',
                        code: 'JM'
                    },
                    {
                        name: 'Japan',
                        code: 'JP'
                    },
                    {
                        name: 'Jersey',
                        code: 'JE'
                    },
                    {
                        name: 'Jordan',
                        code: 'JO'
                    },
                    {
                        name: 'Kazakhstan',
                        code: 'KZ'
                    },
                    {
                        name: 'Kenya',
                        code: 'KE'
                    },
                    {
                        name: 'Kiribati',
                        code: 'KI'
                    },
                    {
                        name: 'Korea, Democratic People\'s Republic of',
                        code: 'KP'
                    },
                    {
                        name: 'Korea, Republic of',
                        code: 'KR'
                    },
                    {
                        name: 'Kuwait',
                        code: 'KW'
                    },
                    {
                        name: 'Kyrgyzstan',
                        code: 'KG'
                    },
                    {
                        name: 'Lao People\'s Democratic Republic',
                        code: 'LA'
                    },
                    {
                        name: 'Latvia',
                        code: 'LV'
                    },
                    {
                        name: 'Lebanon',
                        code: 'LB'
                    },
                    {
                        name: 'Lesotho',
                        code: 'LS'
                    },
                    {
                        name: 'Liberia',
                        code: 'LR'
                    },
                    {
                        name: 'Libyan Arab Jamahiriya',
                        code: 'LY'
                    },
                    {
                        name: 'Liechtenstein',
                        code: 'LI'
                    },
                    {
                        name: 'Lithuania',
                        code: 'LT'
                    },
                    {
                        name: 'Luxembourg',
                        code: 'LU'
                    },
                    {
                        name: 'Macao',
                        code: 'MO'
                    },
                    {
                        name: 'Macedonia, The Former Yugoslav Republic of',
                        code: 'MK'
                    },
                    {
                        name: 'Madagascar',
                        code: 'MG'
                    },
                    {
                        name: 'Malawi',
                        code: 'MW'
                    },
                    {
                        name: 'Malaysia',
                        code: 'MY'
                    },
                    {
                        name: 'Maldives',
                        code: 'MV'
                    },
                    {
                        name: 'Mali',
                        code: 'ML'
                    },
                    {
                        name: 'Malta',
                        code: 'MT'
                    },
                    {
                        name: 'Marshall Islands',
                        code: 'MH'
                    },
                    {
                        name: 'Martinique',
                        code: 'MQ'
                    },
                    {
                        name: 'Mauritania',
                        code: 'MR'
                    },
                    {
                        name: 'Mauritius',
                        code: 'MU'
                    },
                    {
                        name: 'Mayotte',
                        code: 'YT'
                    },
                    {
                        name: 'Mexico',
                        code: 'MX'
                    },
                    {
                        name: 'Micronesia, Federated States of',
                        code: 'FM'
                    },
                    {
                        name: 'Moldova, Republic of',
                        code: 'MD'
                    },
                    {
                        name: 'Monaco',
                        code: 'MC'
                    },
                    {
                        name: 'Mongolia',
                        code: 'MN'
                    },
                    {
                        name: 'Montserrat',
                        code: 'MS'
                    },
                    {
                        name: 'Morocco',
                        code: 'MA'
                    },
                    {
                        name: 'Mozambique',
                        code: 'MZ'
                    },
                    {
                        name: 'Myanmar',
                        code: 'MM'
                    },
                    {
                        name: 'Namibia',
                        code: 'NA'
                    },
                    {
                        name: 'Nauru',
                        code: 'NR'
                    },
                    {
                        name: 'Nepal',
                        code: 'NP'
                    },
                    {
                        name: 'Netherlands',
                        code: 'NL'
                    },
                    {
                        name: 'Netherlands Antilles',
                        code: 'AN'
                    },
                    {
                        name: 'New Caledonia',
                        code: 'NC'
                    },
                    {
                        name: 'New Zealand',
                        code: 'NZ'
                    },
                    {
                        name: 'Nicaragua',
                        code: 'NI'
                    },
                    {
                        name: 'Niger',
                        code: 'NE'
                    },
                    {
                        name: 'Nigeria',
                        code: 'NG'
                    },
                    {
                        name: 'Niue',
                        code: 'NU'
                    },
                    {
                        name: 'Norfolk Island',
                        code: 'NF'
                    },
                    {
                        name: 'Northern Mariana Islands',
                        code: 'MP'
                    },
                    {
                        name: 'Norway',
                        code: 'NO'
                    },
                    {
                        name: 'Oman',
                        code: 'OM'
                    },
                    {
                        name: 'Pakistan',
                        code: 'PK'
                    },
                    {
                        name: 'Palau',
                        code: 'PW'
                    },
                    {
                        name: 'Palestinian Territory, Occupied',
                        code: 'PS'
                    },
                    {
                        name: 'Panama',
                        code: 'PA'
                    },
                    {
                        name: 'Papua New Guinea',
                        code: 'PG'
                    },
                    {
                        name: 'Paraguay',
                        code: 'PY'
                    },
                    {
                        name: 'Peru',
                        code: 'PE'
                    },
                    {
                        name: 'Philippines',
                        code: 'PH'
                    },
                    {
                        name: 'Pitcairn',
                        code: 'PN'
                    },
                    {
                        name: 'Poland',
                        code: 'PL'
                    },
                    {
                        name: 'Portugal',
                        code: 'PT'
                    },
                    {
                        name: 'Puerto Rico',
                        code: 'PR'
                    },
                    {
                        name: 'Qatar',
                        code: 'QA'
                    },
                    {
                        name: 'Reunion',
                        code: 'RE'
                    },
                    {
                        name: 'Romania',
                        code: 'RO'
                    },
                    {
                        name: 'Russian Federation',
                        code: 'RU'
                    },
                    {
                        name: 'Rwanda',
                        code: 'RW'
                    },
                    {
                        name: 'Saint Helena',
                        code: 'SH'
                    },
                    {
                        name: 'Saint Kitts and Nevis',
                        code: 'KN'
                    },
                    {
                        name: 'Saint Lucia',
                        code: 'LC'
                    },
                    {
                        name: 'Saint Pierre and Miquelon',
                        code: 'PM'
                    },
                    {
                        name: 'Saint Vincent and the Grenadines',
                        code: 'VC'
                    },
                    {
                        name: 'Samoa',
                        code: 'WS'
                    },
                    {
                        name: 'San Marino',
                        code: 'SM'
                    },
                    {
                        name: 'Sao Tome and Principe',
                        code: 'ST'
                    },
                    {
                        name: 'Saudi Arabia',
                        code: 'SA'
                    },
                    {
                        name: 'Senegal',
                        code: 'SN'
                    },
                    {
                        name: 'Serbia and Montenegro',
                        code: 'CS'
                    },
                    {
                        name: 'Seychelles',
                        code: 'SC'
                    },
                    {
                        name: 'Sierra Leone',
                        code: 'SL'
                    },
                    {
                        name: 'Singapore',
                        code: 'SG'
                    },
                    {
                        name: 'Slovakia',
                        code: 'SK'
                    },
                    {
                        name: 'Slovenia',
                        code: 'SI'
                    },
                    {
                        name: 'Solomon Islands',
                        code: 'SB'
                    },
                    {
                        name: 'Somalia',
                        code: 'SO'
                    },
                    {
                        name: 'South Africa',
                        code: 'ZA'
                    },
                    {
                        name: 'South Georgia and the South Sandwich Islands',
                        code: 'GS'
                    },
                    {
                        name: 'Spain',
                        code: 'ES'
                    },
                    {
                        name: 'Sri Lanka',
                        code: 'LK'
                    },
                    {
                        name: 'Sudan',
                        code: 'SD'
                    },
                    {
                        name: 'Suriname',
                        code: 'SR'
                    },
                    {
                        name: 'Svalbard and Jan Mayen',
                        code: 'SJ'
                    },
                    {
                        name: 'Swaziland',
                        code: 'SZ'
                    },
                    {
                        name: 'Sweden',
                        code: 'SE'
                    },
                    {
                        name: 'Switzerland',
                        code: 'CH'
                    },
                    {
                        name: 'Syrian Arab Republic',
                        code: 'SY'
                    },
                    {
                        name: 'Taiwan, Province of China',
                        code: 'TW'
                    },
                    {
                        name: 'Tajikistan',
                        code: 'TJ'
                    },
                    {
                        name: 'Tanzania, United Republic of',
                        code: 'TZ'
                    },
                    {
                        name: 'Thailand',
                        code: 'TH'
                    },
                    {
                        name: 'Timor-Leste',
                        code: 'TL'
                    },
                    {
                        name: 'Togo',
                        code: 'TG'
                    },
                    {
                        name: 'Tokelau',
                        code: 'TK'
                    },
                    {
                        name: 'Tonga',
                        code: 'TO'
                    },
                    {
                        name: 'Trinidad and Tobago',
                        code: 'TT'
                    },
                    {
                        name: 'Tunisia',
                        code: 'TN'
                    },
                    {
                        name: 'Turkey',
                        code: 'TR'
                    },
                    {
                        name: 'Turkmenistan',
                        code: 'TM'
                    },
                    {
                        name: 'Turks and Caicos Islands',
                        code: 'TC'
                    },
                    {
                        name: 'Tuvalu',
                        code: 'TV'
                    },
                    {
                        name: 'Uganda',
                        code: 'UG'
                    },
                    {
                        name: 'Ukraine',
                        code: 'UA'
                    },
                    {
                        name: 'United Arab Emirates',
                        code: 'AE'
                    },
                    {
                        name: 'United Kingdom',
                        code: 'GB'
                    },
                    {
                        name: 'United States',
                        code: 'US'
                    },
                    {
                        name: 'United States Minor Outlying Islands',
                        code: 'UM'
                    },
                    {
                        name: 'Uruguay',
                        code: 'UY'
                    },
                    {
                        name: 'Uzbekistan',
                        code: 'UZ'
                    },
                    {
                        name: 'Vanuatu',
                        code: 'VU'
                    },
                    {
                        name: 'Venezuela',
                        code: 'VE'
                    },
                    {
                        name: 'Vietnam',
                        code: 'VN'
                    },
                    {
                        name: 'Virgin Islands, British',
                        code: 'VG'
                    },
                    {
                        name: 'Virgin Islands, U.S.',
                        code: 'VI'
                    },
                    {
                        name: 'Wallis and Futuna',
                        code: 'WF'
                    },
                    {
                        name: 'Western Sahara',
                        code: 'EH'
                    },
                    {
                        name: 'Yemen',
                        code: 'YE'
                    },
                    {
                        name: 'Zambia',
                        code: 'ZM'
                    },
                    {
                        name: 'Zimbabwe',
                        code: 'ZW'
                    }
                ];
            }
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .directive('matchPanels', matchPanels)
        .directive('matchMiniPanels', matchMiniPanels)
        .controller('DashboardController', DashboardController);

    matchPanels.$inject = ['$timeout', 'TagsService'];

    function matchPanels($timeout, TagsService) {
        return {
            restrict: 'E',
            templateUrl: './app/views/directives/matchPanels.html',
            scope: {
                ngModel: '=ngModel',
            },
            controller: ['$scope', '$state', function ($scope, $state) {
                console.log("Directive Matches-List Loaded");

                $scope.formatDate = function (stringDate) {
                    return moment(stringDate).calendar(); //format("dddd, MMMM Do YYYY, h:mm:ss a");
                };

                $scope.moderateMatch = function (matchid, sport) {
                    $state.go("app.match-moderation-" + (sport || 'soccer'), {
                        id: (matchid)
                    });
                };

                $scope.getMatchStatus = function (status) {

                    if (status == "0") return "Pre Game";
                };

            }]
        };
    };

    matchMiniPanels.$inject = ['$timeout', 'TagsService'];

    function matchMiniPanels($timeout, TagsService) {
        return {
            restrict: 'E',
            templateUrl: './app/views/directives/matchMiniPanels.html',
            scope: {
                ngModel: '=ngModel',
            },
            controller: ['$scope', '$state', function ($scope, $state) {
                console.log("Directive Matches-List Loaded");

                $scope.formatDate = function (stringDate) {
                    return moment(stringDate).calendar(); //format("dddd, MMMM Do YYYY, h:mm:ss a");
                };

                $scope.moderateMatch = function (matchid, sport) {
                    $state.go("app.match-moderation-" + (sport || 'soccer'), {
                        id: (matchid)
                    });
                };

                $scope.getMatchStatus = function (status) {

                    if (status == "0") return "Pre Game";
                };

            }]
        };
    };

    DashboardController.$inject = ['$rootScope', '$scope', 'ChartData', '$timeout', '$websocket', '$http', '$state', 'Colors', 'TagsService'];

    function DashboardController($rootScope, $scope, ChartData, $timeout, $websocket, $http, $state, Colors, TagsService) {

        $scope.getMatchStatus = function (status) {

            if (status == "0") return "Pre Game";
        };

        $scope.formatDate = function (stringDate) {
            return moment(stringDate).calendar(); //format("dddd, MMMM Do YYYY, h:mm:ss a");
        };

        $scope.ModerateMatch = function (matchid, sport) {

            $state.go("app.match-moderation-" + (sport || 'soccer'), {
                id: (matchid || "565c4af6e4b030fba33dd459")
            });

        };



        var vm = $scope;

        activate();

        clearInterval($rootScope.DataUpdate);

        $rootScope.DataUpdate = setInterval(function () {
            vm.splineData = angular.copy($rootScope.dataset);
        }, 5000);

        //  Doughnut chart
        // ----------------------------------- 

        vm.SocketData = [[{ "value": 1, "color": "#3F51B5", "highlight": "#3F51B5", "label": "Administration" }]];

        // vm.SocketInstance = [{
        //     instance: '12344',
        //     connections: 1,
        //     rooms: [{
        //         room: 'Adminitstration',
        //         count: 1
        //     }]
        // }];
        TagsService.getAllTags();
        vm.getNameById = function (id) {
            // console.log("getting name for: "+id);
            var name = TagsService.getTeamNameById(id);
            if (!name) name = id;
            return name;
        }

        vm.$watchCollection('SocketInstances', function (newValue, oldValue) {
            var count = 0;
            _.each(newValue, function (instance) {

                var roomCount = 0;
                vm.SocketData[count] = [];

                _.each(instance.rooms, function (room) {

                    var roomData = {
                        value: room.count,
                        color: Colors.byIndex(roomCount),
                        highlight: Colors.byIndex(roomCount),
                        label: vm.getNameById(room.room)
                    }
                    // console.log(roomData);
                    roomCount++;
                    vm.SocketData[count].push(roomData);
                })

                count++;
            })
        });

        vm.doughnutOptions = {
            segmentShowStroke: true,
            segmentStrokeColor: '#fff',
            segmentStrokeWidth: 2,
            percentageInnerCutout: 50,
            animationSteps: 100,
            animationEasing: 'easeOutBounce',
            animateRotate: false,
            animateScale: false
        };

        {
            // //Boolean - Whether we should show a stroke on each segment
            // segmentShowStroke : true,

            // //String - The colour of each segment stroke
            // segmentStrokeColor : "#fff",

            // //Number - The width of each segment stroke
            // segmentStrokeWidth : 2,

            // //Number - The percentage of the chart that we cut out of the middle
            // percentageInnerCutout : 50, // This is 0 for Pie charts

            // //Number - Amount of animation steps
            // animationSteps : 100,

            // //String - Animation easing effect
            // animationEasing : "easeOutBounce",

            // //Boolean - Whether we animate the rotation of the Doughnut
            // animateRotate : true,

            // //Boolean - Whether we animate scaling the Doughnut from the centre
            // animateScale : false,

            // //String - A legend template
            // legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

        }

        ////////////////

        function activate() {


            // LOAD LIVE MATCHES
            // ----------------------------------
            $http({
                method: 'GET',
                url: 'http://162.13.157.7/soccerapp/client/fetch_live_matches.php'
            }).then(function successCallback(response) {

                $scope.livematches = response.data;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });

            // SPLINE
            // -----------------------------------
            //vm.splineData = ChartData.load('server/chart/spline.json');
            vm.splineData = angular.copy($rootScope.dataset);

            vm.splineOptions = {
                series: {
                    lines: {
                        show: false
                    },
                    points: {
                        show: true,
                        radius: 4
                    },
                    splines: {
                        show: true,
                        tension: 0.4,
                        lineWidth: 1,
                        fill: 0.5
                    }
                },
                grid: {
                    borderColor: '#eee',
                    borderWidth: 1,
                    hoverable: true,
                    backgroundColor: '#fcfcfc'
                },
                tooltip: true,
                tooltipOpts: {
                    content: function (label, x, y) {
                        return x + ' : ' + y;
                    }
                },
                xaxis: {
                    tickColor: '#fcfcfc',
                    mode: 'categories'
                },
                yaxis: {
                    min: 0,
                    max: 300, // optional: use it for a clear represetation
                    tickColor: '#eee',
                    position: ($scope.app.layout.isRTL ? 'right' : 'left'),
                    tickFormatter: function (v) {
                        return v /* + ' visitors'*/;
                    }
                },
                shadowSize: 0
            };


            // PANEL REFRESH EVENTS
            // -----------------------------------

            $scope.$on('panel-refresh', function (event, id) {

                //console.log('Simulating chart refresh during 3s on #' + id);

                // Instead of timeout you can request a chart data
                $timeout(function () {
                    vm.splineData = angular.copy($rootScope.dataset);
                    // directive listen for to remove the spinner
                    // after we end up to perform own operations
                    $scope.$broadcast('removeSpinner', id);

                    //console.log('Refreshed #' + id);

                }, 3000);

            });


            // PANEL DISMISS EVENTS
            // -----------------------------------

            // Before remove panel
            $scope.$on('panel-remove', function (event, id, deferred) {

                console.log('Panel #' + id + ' removing');

                // Here is obligatory to call the resolve() if we pretend to remove the panel finally
                // Not calling resolve() will NOT remove the panel
                // It's up to your app to decide if panel should be removed or not
                deferred.resolve();

            });

            // Panel removed ( only if above was resolved() )
            $scope.$on('panel-removed', function (event, id) {

                console.log('Panel #' + id + ' removed');

            });

        }
    }
})();


(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardV2Controller', DashboardV2Controller);


    DashboardV2Controller.$inject = ['$rootScope', '$scope', '$state'];

    function DashboardV2Controller($rootScope, $scope, $state, wsData) {
        var vm = this;

        activate();

        ////////////////

        function activate() {



            // Change layout mode
            if ($state.includes('app-h')) {
                // Setup layout horizontal for demo
                $rootScope.app.layout.horizontal = true;
                $scope.$on('$destroy', function () {
                    $rootScope.app.layout.horizontal = false;
                });
            } else {
                $rootScope.app.layout.isCollapsed = true;
            }

            // BAR STACKED
            // ----------------------------------- 
            vm.barStackedOptions = {
                series: {
                    stack: true,
                    bars: {
                        align: 'center',
                        lineWidth: 0,
                        show: true,
                        barWidth: 0.6,
                        fill: 0.9
                    }
                },
                grid: {
                    borderColor: '#eee',
                    borderWidth: 1,
                    hoverable: true,
                    backgroundColor: '#fcfcfc'
                },
                tooltip: true,
                tooltipOpts: {
                    content: function (label, x, y) {
                        return x + ' : ' + y;
                    }
                },
                xaxis: {
                    tickColor: '#fcfcfc',
                    mode: 'categories'
                },
                yaxis: {
                    min: 0,
                    max: 200, // optional: use it for a clear represetation
                    position: ($rootScope.app.layout.isRTL ? 'right' : 'left'),
                    tickColor: '#eee'
                },
                shadowSize: 0
            };

            // SPLINE
            // ----------------------------------- 

            vm.splineOptions = {
                series: {
                    lines: {
                        show: false
                    },
                    points: {
                        show: true,
                        radius: 4
                    },
                    splines: {
                        show: true,
                        tension: 0.4,
                        lineWidth: 1,
                        fill: 0.5
                    }
                },
                grid: {
                    borderColor: '#eee',
                    borderWidth: 1,
                    hoverable: true,
                    backgroundColor: '#fcfcfc'
                },
                tooltip: true,
                tooltipOpts: {
                    content: function (label, x, y) {
                        return x + ' : ' + y;
                    }
                },
                xaxis: {
                    tickColor: '#fcfcfc',
                    mode: 'categories'
                },
                yaxis: {
                    min: 0,
                    max: 150, // optional: use it for a clear represetation
                    tickColor: '#eee',
                    position: ($rootScope.app.layout.isRTL ? 'right' : 'left'),
                    tickFormatter: function (v) {
                        return v /* + ' visitors'*/;
                    }
                },
                shadowSize: 0
            };
        }
    }
})();
(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardV3Controller', DashboardV3Controller);

    DashboardV3Controller.$inject = ['$rootScope'];

    function DashboardV3Controller($rootScope) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            // SPLINE
            // ----------------------------------- 

            vm.splineOptions = {
                series: {
                    lines: {
                        show: false
                    },
                    points: {
                        show: true,
                        radius: 4
                    },
                    splines: {
                        show: true,
                        tension: 0.4,
                        lineWidth: 1,
                        fill: 0.5
                    }
                },
                grid: {
                    borderColor: '#eee',
                    borderWidth: 1,
                    hoverable: true,
                    backgroundColor: '#fcfcfc'
                },
                tooltip: true,
                tooltipOpts: {
                    content: function (label, x, y) {
                        return x + ' : ' + y;
                    }
                },
                xaxis: {
                    tickColor: '#fcfcfc',
                    mode: 'categories'
                },
                yaxis: {
                    min: 0,
                    max: 150, // optional: use it for a clear represetation
                    tickColor: '#eee',
                    position: ($rootScope.app.layout.isRTL ? 'right' : 'left'),
                    tickFormatter: function (v) {
                        return v /* + ' visitors'*/;
                    }
                },
                shadowSize: 0
            };


            vm.seriesData = {
                'CA': 11100, // Canada
                'DE': 2510, // Germany
                'FR': 3710, // France
                'AU': 5710, // Australia
                'GB': 8310, // Great Britain
                'RU': 9310, // Russia
                'BR': 6610, // Brazil
                'IN': 7810, // India
                'CN': 4310, // China
                'US': 839, // USA
                'SA': 410 // Saudi Arabia
            };

            vm.markersData = [
                {
                    latLng: [41.90, 12.45],
                    name: 'Vatican City'
                },
                {
                    latLng: [43.73, 7.41],
                    name: 'Monaco'
                },
                {
                    latLng: [-0.52, 166.93],
                    name: 'Nauru'
                },
                {
                    latLng: [-8.51, 179.21],
                    name: 'Tuvalu'
                },
                {
                    latLng: [7.11, 171.06],
                    name: 'Marshall Islands'
                },
                {
                    latLng: [17.3, -62.73],
                    name: 'Saint Kitts and Nevis'
                },
                {
                    latLng: [3.2, 73.22],
                    name: 'Maldives'
                },
                {
                    latLng: [35.88, 14.5],
                    name: 'Malta'
                },
                {
                    latLng: [41.0, -71.06],
                    name: 'New England'
                },
                {
                    latLng: [12.05, -61.75],
                    name: 'Grenada'
                },
                {
                    latLng: [13.16, -59.55],
                    name: 'Barbados'
                },
                {
                    latLng: [17.11, -61.85],
                    name: 'Antigua and Barbuda'
                },
                {
                    latLng: [-4.61, 55.45],
                    name: 'Seychelles'
                },
                {
                    latLng: [7.35, 134.46],
                    name: 'Palau'
                },
                {
                    latLng: [42.5, 1.51],
                    name: 'Andorra'
                }
            ];
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.elements')
        .controller('AngularCarouselController', AngularCarouselController);

    function AngularCarouselController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.colors = ['#fc0003', '#f70008', '#f2000d', '#ed0012', '#e80017', '#e3001c', '#de0021', '#d90026', '#d4002b', '#cf0030', '#c90036', '#c4003b', '#bf0040', '#ba0045', '#b5004a', '#b0004f', '#ab0054', '#a60059', '#a1005e', '#9c0063', '#960069', '#91006e', '#8c0073', '#870078', '#82007d', '#7d0082', '#780087', '#73008c', '#6e0091', '#690096', '#63009c', '#5e00a1', '#5900a6', '#5400ab', '#4f00b0', '#4a00b5', '#4500ba', '#4000bf', '#3b00c4', '#3600c9', '#3000cf', '#2b00d4', '#2600d9', '#2100de', '#1c00e3', '#1700e8', '#1200ed', '#0d00f2', '#0800f7', '#0300fc'];

            function getSlide(target, style) {
                var i = target.length;
                return {
                    id: (i + 1),
                    label: 'slide #' + (i + 1),
                    img: 'http://lorempixel.com/1200/500/' + style + '/' + ((i + 1) % 10),
                    color: vm.colors[(i * 10) % vm.colors.length],
                    odd: (i % 2 === 0)
                };
            }

            function addSlide(target, style) {
                target.push(getSlide(target, style));
            }

            vm.carouselIndex = 3;
            vm.carouselIndex2 = 0;
            vm.carouselIndex2 = 1;
            vm.carouselIndex3 = 5;
            vm.carouselIndex4 = 5;

            function addSlides(target, style, qty) {
                for (var i = 0; i < qty; i++) {
                    addSlide(target, style);
                }
            }

            // 1st ngRepeat demo
            vm.slides = [];
            addSlides(vm.slides, 'sports', 50);

            // 2nd ngRepeat demo
            vm.slides2 = [];
            addSlides(vm.slides2, 'sports', 10);

            // 3rd ngRepeat demo
            vm.slides3 = [];
            addSlides(vm.slides3, 'people', 50);

            // 4th ngRepeat demo
            vm.slides4 = [];
            addSlides(vm.slides4, 'city', 50);


            // 5th ngRepeat demo
            vm.slides6 = [];
            vm.carouselIndex6 = 0;
            addSlides(vm.slides6, 'sports', 10);
            vm.addSlide = function (at) {
                if (at === 'head') {
                    vm.slides6.unshift(getSlide(vm.slides6, 'people'));
                } else {
                    vm.slides6.push(getSlide(vm.slides6, 'people'));
                }
            };
        }
    }
})();

/**=========================================================
 * Module: demo-dialog.js
 * Demo for multiple ngDialog Usage
 * - ngDialogProvider for default values not supported
 *   using lazy loader. Include plugin in base.js instead.
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.elements')
        .controller('DialogIntroCtrl', DialogIntroCtrl)
        .controller('DialogMainCtrl', DialogMainCtrl)
        .controller('InsideCtrl', InsideCtrl)
        .controller('SecondModalCtrl', SecondModalCtrl);

    DialogIntroCtrl.$inject = ['$scope', 'ngDialog', 'tpl'];
    // Called from the route state. 'tpl' is resolved before
    function DialogIntroCtrl($scope, ngDialog, tpl) {

        activate();

        ////////////////

        function activate() {
            // share with other controllers
            $scope.tpl = tpl;
            // open dialog window
            ngDialog.open({
                template: tpl.path,
                // plain: true,
                className: 'ngdialog-theme-default'
            });
        }
    }

    DialogMainCtrl.$inject = ['$scope', '$rootScope', 'ngDialog'];
    // Loads from view
    function DialogMainCtrl($scope, $rootScope, ngDialog) {

        activate();

        ////////////////

        function activate() {
            $rootScope.jsonData = '{"foo": "bar"}';
            $rootScope.theme = 'ngdialog-theme-default';

            $scope.directivePreCloseCallback = function (value) {
                if (confirm('Close it? MainCtrl.Directive. (Value = ' + value + ')')) {
                    return true;
                }
                return false;
            };

            $scope.preCloseCallbackOnScope = function (value) {
                if (confirm('Close it? MainCtrl.OnScope (Value = ' + value + ')')) {
                    return true;
                }
                return false;
            };

            $scope.open = function () {
                ngDialog.open({
                    template: 'firstDialogId',
                    controller: 'InsideCtrl',
                    data: {
                        foo: 'some data'
                    }
                });
            };

            $scope.openDefault = function () {
                ngDialog.open({
                    template: 'firstDialogId',
                    controller: 'InsideCtrl',
                    className: 'ngdialog-theme-default'
                });
            };

            $scope.openDefaultWithPreCloseCallbackInlined = function () {
                ngDialog.open({
                    template: 'firstDialogId',
                    controller: 'InsideCtrl',
                    className: 'ngdialog-theme-default',
                    preCloseCallback: function (value) {
                        if (confirm('Close it?  (Value = ' + value + ')')) {
                            return true;
                        }
                        return false;
                    }
                });
            };

            $scope.openConfirm = function () {
                ngDialog.openConfirm({
                    template: 'modalDialogId',
                    className: 'ngdialog-theme-default'
                }).then(function (value) {
                    console.log('Modal promise resolved. Value: ', value);
                }, function (reason) {
                    console.log('Modal promise rejected. Reason: ', reason);
                });
            };

            $scope.openConfirmWithPreCloseCallbackOnScope = function () {
                ngDialog.openConfirm({
                    template: 'modalDialogId',
                    className: 'ngdialog-theme-default',
                    preCloseCallback: 'preCloseCallbackOnScope',
                    scope: $scope
                }).then(function (value) {
                    console.log('Modal promise resolved. Value: ', value);
                }, function (reason) {
                    console.log('Modal promise rejected. Reason: ', reason);
                });
            };

            $scope.openConfirmWithPreCloseCallbackInlinedWithNestedConfirm = function () {
                ngDialog.openConfirm({
                    template: 'dialogWithNestedConfirmDialogId',
                    className: 'ngdialog-theme-default',
                    preCloseCallback: function ( /*value*/) {

                        var nestedConfirmDialog = ngDialog.openConfirm({
                            template: '<p>Are you sure you want to close the parent dialog?</p>' +
                            '<div>' +
                            '<button type="button" class="btn btn-default" ng-click="closeThisDialog(0)">No' +
                            '<button type="button" class="btn btn-primary" ng-click="confirm(1)">Yes' +
                            '</button></div>',
                            plain: true,
                            className: 'ngdialog-theme-default'
                        });

                        return nestedConfirmDialog;
                    },
                    scope: $scope
                })
                    .then(function (value) {
                        console.log('resolved:' + value);
                        // Perform the save here
                    }, function (value) {
                        console.log('rejected:' + value);

                    });
            };

            $scope.openInlineController = function () {
                $rootScope.theme = 'ngdialog-theme-default';

                ngDialog.open({
                    template: 'withInlineController',
                    controller: ['$scope', '$timeout', function ($scope, $timeout) {
                        var counter = 0;
                        var timeout;

                        function count() {
                            $scope.exampleExternalData = 'Counter ' + (counter++);
                            timeout = $timeout(count, 450);
                        }

                        count();
                        $scope.$on('$destroy', function () {
                            $timeout.cancel(timeout);
                        });
                    }],
                    className: 'ngdialog-theme-default'
                });
            };

            $scope.openTemplate = function () {
                $scope.value = true;

                ngDialog.open({
                    template: $scope.tpl.path,
                    className: 'ngdialog-theme-default',
                    scope: $scope
                });
            };

            $scope.openTemplateNoCache = function () {
                $scope.value = true;

                ngDialog.open({
                    template: $scope.tpl.path,
                    className: 'ngdialog-theme-default',
                    scope: $scope,
                    cache: false
                });
            };

            $scope.openTimed = function () {
                var dialog = ngDialog.open({
                    template: '<p>Just passing through!</p>',
                    plain: true,
                    closeByDocument: false,
                    closeByEscape: false
                });
                setTimeout(function () {
                    dialog.close();
                }, 2000);
            };

            $scope.openNotify = function () {
                var dialog = ngDialog.open({
                    template: '<p>You can do whatever you want when I close, however that happens.</p>' +
                    '<div><button type="button" class="btn btn-primary" ng-click="closeThisDialog(1)">Close Me</button></div>',
                    plain: true
                });
                dialog.closePromise.then(function (data) {
                    console.log('ngDialog closed' + (data.value === 1 ? ' using the button' : '') + ' and notified by promise: ' + data.id);
                });
            };

            $scope.openWithoutOverlay = function () {
                ngDialog.open({
                    template: '<h2>Notice that there is no overlay!</h2>',
                    className: 'ngdialog-theme-default',
                    plain: true,
                    overlay: false
                });
            };

            $rootScope.$on('ngDialog.opened', function (e, $dialog) {
                console.log('ngDialog opened: ' + $dialog.attr('id'));
            });

            $rootScope.$on('ngDialog.closed', function (e, $dialog) {
                console.log('ngDialog closed: ' + $dialog.attr('id'));
            });

            $rootScope.$on('ngDialog.closing', function (e, $dialog) {
                console.log('ngDialog closing: ' + $dialog.attr('id'));
            });
        }

    } // DialogMainCtrl


    InsideCtrl.$inject = ['$scope', 'ngDialog'];

    function InsideCtrl($scope, ngDialog) {

        activate();

        ////////////////

        function activate() {
            $scope.dialogModel = {
                message: 'message from passed scope'
            };
            $scope.openSecond = function () {
                ngDialog.open({
                    template: '<p class="lead m0"><a href="" ng-click="closeSecond()">Close all by click here!</a></h3>',
                    plain: true,
                    closeByEscape: false,
                    controller: 'SecondModalCtrl'
                });
            };
        }
    }

    SecondModalCtrl.$inject = ['$scope', 'ngDialog'];

    function SecondModalCtrl($scope, ngDialog) {

        activate();

        ////////////////

        function activate() {
            $scope.closeSecond = function () {
                ngDialog.close();
            };
        }

    }


})();


/**=========================================================
 * Module: calendar-ui.js
 * This script handle the calendar demo with draggable
 * events and events creations
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.elements')
        .controller('InfiniteScrollController', InfiniteScrollController)
        .factory('datasource', datasource);

    function InfiniteScrollController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

            vm.loadMore = function () {
                var last = vm.images[vm.images.length - 1];
                for (var i = 1; i <= 10; i++) {
                    vm.images.push(last + i);
                }
            };
        }
    }

    datasource.$inject = ['$log', '$timeout'];

    function datasource(console, $timeout) {

        var get = function (index, count, success) {
            return $timeout(function () {
                var i, result, _i, _ref;
                result = [];
                for (i = _i = index, _ref = index + count - 1; index <= _ref ? _i <= _ref : _i >= _ref; i = index <= _ref ? ++_i : --_i) {
                    result.push('item #' + i);
                }
                return success(result);
            }, 100);
        };
        return {
            get: get
        };
    }

})();

/**=========================================================
 * Module: masonry-deck.js
 * Demo for Angular Deck
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.elements')
        .controller('MasonryDeckController', MasonryDeckController)
        .directive('imageloaded', imageloaded); // required by demo

    MasonryDeckController.$inejct = ['RouteHelpers'];

    function MasonryDeckController(RouteHelpers) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.basepath = RouteHelpers.basepath;

            vm.photos = [
                {
                    id: 'photo-1',
                    name: 'Awesome photo',
                    src: 'http://lorempixel.com/400/300/abstract'
                },
                {
                    id: 'photo-2',
                    name: 'Great photo',
                    src: 'http://lorempixel.com/450/400/city'
                },
                {
                    id: 'photo-3',
                    name: 'Strange photo',
                    src: 'http://lorempixel.com/400/300/people'
                },
                {
                    id: 'photo-4',
                    name: 'A photo?',
                    src: 'http://lorempixel.com/400/300/transport'
                },
                {
                    id: 'photo-5',
                    name: 'What a photo',
                    src: 'http://lorempixel.com/450/300/fashion'
                },
                {
                    id: 'photo-6',
                    name: 'Silly photo',
                    src: 'http://lorempixel.com/400/300/technics'
                },
                {
                    id: 'photo-7',
                    name: 'Weird photo',
                    src: 'http://lorempixel.com/410/350/sports'
                },
                {
                    id: 'photo-8',
                    name: 'Modern photo',
                    src: 'http://lorempixel.com/400/300/nightlife'
                },
                {
                    id: 'photo-9',
                    name: 'Classical photo',
                    src: 'http://lorempixel.com/400/300/nature'
                },
                {
                    id: 'photo-10',
                    name: 'Dynamic photo',
                    src: 'http://lorempixel.com/420/300/abstract'
                },
                {
                    id: 'photo-11',
                    name: 'Neat photo',
                    src: 'http://lorempixel.com/400/300/sports'
                },
                {
                    id: 'photo-12',
                    name: 'Bumpy photo',
                    src: 'http://lorempixel.com/400/300/nightlife'
                },
                {
                    id: 'photo-13',
                    name: 'Brilliant photo',
                    src: 'http://lorempixel.com/400/380/nature'
                },
                {
                    id: 'photo-14',
                    name: 'Excellent photo',
                    src: 'http://lorempixel.com/480/300/technics'
                },
                {
                    id: 'photo-15',
                    name: 'Gorgeous photo',
                    src: 'http://lorempixel.com/400/300/sports'
                },
                {
                    id: 'photo-16',
                    name: 'Lovely photo',
                    src: 'http://lorempixel.com/400/300/nightlife'
                },
                {
                    id: 'photo-17',
                    name: 'A "wow" photo',
                    src: 'http://lorempixel.com/400/300/nature'
                },
                {
                    id: 'photo-18',
                    name: 'Bodacious photo',
                    src: 'http://lorempixel.com/400/300/abstract'
                }
            ];
        }
    }

    MasonryDeckController.$inject = ["RouteHelpers"];

    // Add class to img element when source is loaded
    function imageloaded() {
        // Copyright(c) 2013 André König <akoenig@posteo.de>
        // MIT Licensed
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            var cssClass = attrs.loadedclass;

            element.bind('load', function () {
                angular.element(element).addClass(cssClass);
            });
        }
    }

})();


/**=========================================================
 * Module: access-login.js
 * Demo for login api
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.elements')
        .controller('AbnTestController', AbnTestController);

    AbnTestController.$inject = ['$timeout', '$resource'];

    function AbnTestController($timeout, $resource) {
        var vm = this;

        activate();

        ////////////////

        /*jshint -W106*/
        function activate() {
            vm.my_tree_handler = function (branch) {

                vm.output = 'You selected: ' + branch.label;

                if (branch.data && branch.data.description) {
                    vm.output += '(' + branch.data.description + ')';
                    return vm.output;
                }
            };

            // onSelect event handlers
            var apple_selected = function (branch) {
                vm.output = 'APPLE! : ' + branch.label;
                return vm.output;
            };

            var treedata_avm = [
                {
                    label: 'Animal',
                    children: [
                        {
                            label: 'Dog',
                            data: {
                                description: 'man\'s best friend'
                            }
                        }, {
                            label: 'Cat',
                            data: {
                                description: 'Felis catus'
                            }
                        }, {
                            label: 'Hippopotamus',
                            data: {
                                description: 'hungry, hungry'
                            }
                        }, {
                            label: 'Chicken',
                            children: ['White Leghorn', 'Rhode Island Red', 'Jersey Giant']
                        }
                    ]
                }, {
                    label: 'Vegetable',
                    data: {
                        definition: 'A plant or part of a plant used as food, typically as accompaniment to meat or fish, such as a cabbage, potato, carrot, or bean.',
                        data_can_contain_anything: true
                    },
                    onSelect: function (branch) {
                        vm.output = 'Vegetable: ' + branch.data.definition;
                        return vm.output;
                    },
                    children: [
                        {
                            label: 'Oranges'
                        }, {
                            label: 'Apples',
                            children: [
                                {
                                    label: 'Granny Smith',
                                    onSelect: apple_selected
                                }, {
                                    label: 'Red Delicous',
                                    onSelect: apple_selected
                                }, {
                                    label: 'Fuji',
                                    onSelect: apple_selected
                                }
                            ]
                        }
                    ]
                }, {
                    label: 'Mineral',
                    children: [
                        {
                            label: 'Rock',
                            children: ['Igneous', 'Sedimentary', 'Metamorphic']
                        }, {
                            label: 'Metal',
                            children: ['Aluminum', 'Steel', 'Copper']
                        }, {
                            label: 'Plastic',
                            children: [
                                {
                                    label: 'Thermoplastic',
                                    children: ['polyethylene', 'polypropylene', 'polystyrene', ' polyvinyl chloride']
                                }, {
                                    label: 'Thermosetting Polymer',
                                    children: ['polyester', 'polyurethane', 'vulcanized rubber', 'bakelite', 'urea-formaldehyde']
                                }
                            ]
                        }
                    ]
                }
            ];

            var treedata_geography = [
                {
                    label: 'North America',
                    children: [
                        {
                            label: 'Canada',
                            children: ['Toronto', 'Vancouver']
                        }, {
                            label: 'USA',
                            children: ['New York', 'Los Angeles']
                        }, {
                            label: 'Mexico',
                            children: ['Mexico City', 'Guadalajara']
                        }
                    ]
                }, {
                    label: 'South America',
                    children: [
                        {
                            label: 'Venezuela',
                            children: ['Caracas', 'Maracaibo']
                        }, {
                            label: 'Brazil',
                            children: ['Sao Paulo', 'Rio de Janeiro']
                        }, {
                            label: 'Argentina',
                            children: ['Buenos Aires', 'Cordoba']
                        }
                    ]
                }
            ];

            vm.my_data = treedata_avm;
            vm.try_changing_the_tree_data = function () {
                if (vm.my_data === treedata_avm) {
                    vm.my_data = treedata_geography;
                } else {
                    vm.my_data = treedata_avm;
                }
                return vm.my_data;
            };

            var tree;
            // This is our API control variable
            vm.my_tree = tree = {};
            vm.try_async_load = function () {

                vm.my_data = [];
                vm.doing_async = true;

                // Request tree data via $resource
                var remoteTree = $resource('server/treedata.json');

                return remoteTree.get(function (res) {

                    vm.my_data = res.data;

                    vm.doing_async = false;

                    return tree.expand_all();

                    // we must return a promise so the plugin 
                    // can watch when it's resolved
                }).$promise;
            };

            // Adds a new branch to the tree
            vm.try_adding_a_branch = function () {
                var b;
                b = tree.get_selected_branch();
                return tree.add_branch(b, {
                    label: 'New Branch',
                    data: {
                        something: 42,
                        'else': 43
                    }
                });
            };

        }
    }
})();


/**=========================================================
 * Module: nestable.js
 * Nestable controller
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.elements')
        .controller('NestableController', NestableController);

    function NestableController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.items = [
                {
                    item: {
                        text: 'a'
                    },
                    children: []
                },
                {
                    item: {
                        text: 'b'
                    },
                    children: [
                        {
                            item: {
                                text: 'c'
                            },
                            children: []
                        },
                        {
                            item: {
                                text: 'd'
                            },
                            children: []
                        }
                    ]
                },
                {
                    item: {
                        text: 'e'
                    },
                    children: []
                },
                {
                    item: {
                        text: 'f'
                    },
                    children: []
                }
            ];

            vm.items2 = [
                {
                    item: {
                        text: '1'
                    },
                    children: []
                },
                {
                    item: {
                        text: '2'
                    },
                    children: [
                        {
                            item: {
                                text: '3'
                            },
                            children: []
                        },
                        {
                            item: {
                                text: '4'
                            },
                            children: []
                        }
                    ]
                },
                {
                    item: {
                        text: '5'
                    },
                    children: []
                },
                {
                    item: {
                        text: '6'
                    },
                    children: []
                }
            ];

        }
    }
})();

/**=========================================================
 * Module: scroll.js
 * Make a content box scrollable
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.elements')
        .directive('scrollable', scrollable);

    function scrollable() {
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
            var defaultHeight = 250;
            element.slimScroll({
                height: (attrs.height || defaultHeight)
            });
        }
    }

})();

/**=========================================================
 * Module: sortable.js
 * Sortable controller
 =========================================================*/
(function () {
    'use strict';

    angular
        .module('app.elements')
        .controller('SortableController', SortableController);

    SortableController.$inject = ['$scope'];

    function SortableController($scope) {
        // doesn't support controllerAs syntax https://github.com/voidberg/html5sortable/issues/86

        activate();

        ////////////////

        function activate() {
            // Single List
            $scope.data1 = [
                {
                    id: 1,
                    name: 'Donald Hoffman'
                },
                {
                    id: 2,
                    name: 'Wallace Barrett'
                },
                {
                    id: 3,
                    name: 'Marsha Hicks'
                },
                {
                    id: 4,
                    name: 'Roland Brown'
                }
            ];

            $scope.add = function () {
                $scope.data1.push({
                    id: $scope.data1.length + 1,
                    name: 'Earl Knight'
                });
            };

            $scope.sortableCallback = function (sourceModel, destModel, start, end) {
                console.log(start + ' -> ' + end);
            };

            $scope.sortableOptions = {
                placeholder: '<div class="box-placeholder p0 m0"><div></div></div>',
                forcePlaceholderSize: true
            };
        }
    }

})();

/**=========================================================
 * Module: sweetalert.js
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.elements')
        .controller('SweetAlertController', SweetAlertController);

    SweetAlertController.$inject = ['SweetAlert'];

    function SweetAlertController(SweetAlert) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.demo1 = function () {
                SweetAlert.swal('Here\'s a message');
            };

            vm.demo2 = function () {
                SweetAlert.swal('Here\'s a message!', 'It\'s pretty, isn\'t it?');
            };

            vm.demo3 = function () {
                SweetAlert.swal('Good job!', 'You clicked the button!', 'success');
            };

            vm.demo4 = function () {
                SweetAlert.swal({
                    title: 'Are you sure?',
                    text: 'Your will not be able to recover this imaginary file!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#DD6B55',
                    confirmButtonText: 'Yes, delete it!',
                    closeOnConfirm: false
                }, function () {
                    SweetAlert.swal('Booyah!');
                });
            };

            vm.demo5 = function () {
                SweetAlert.swal({
                    title: 'Are you sure?',
                    text: 'Your will not be able to recover this imaginary file!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#DD6B55',
                    confirmButtonText: 'Yes, delete it!',
                    cancelButtonText: 'No, cancel plx!',
                    closeOnConfirm: false,
                    closeOnCancel: false
                }, function (isConfirm) {
                    if (isConfirm) {
                        SweetAlert.swal('Deleted!', 'Your imaginary file has been deleted.', 'success');
                    } else {
                        SweetAlert.swal('Cancelled', 'Your imaginary file is safe :)', 'error');
                    }
                });
            };

            vm.demo6 = function () {
                SweetAlert.swal({
                    title: 'Sweet!',
                    text: 'Here\'s a custom image.',
                    imageUrl: 'http://oitozero.com/img/avatar.jpg'
                });
            };
        }
    }
})();

/**=========================================================
 * Module: demo-toaster.js
 * Demos for toaster notifications
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.elements')
        .controller('ToasterDemoCtrl', ToasterDemoCtrl);

    ToasterDemoCtrl.$inject = ['toaster'];

    function ToasterDemoCtrl(toaster) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.toaster = {
                type: 'success',
                title: 'Title',
                text: 'Message'
            };

            vm.pop = function () {
                toaster.pop(vm.toaster.type, vm.toaster.title, vm.toaster.text);
            };
        }
    }
})();

/**=========================================================
 * Module: tour.js
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.elements')
        .controller('TourCtrl', TourCtrl);

    TourCtrl.$inject = ['$scope'];

    function TourCtrl($scope) {

        activate();

        ////////////////

        function activate() {
            // BootstrapTour is not compatible with z-index based layout
            // so adding position:static for this case makes the browser
            // to ignore the property
            var section = angular.element('.wrapper > section');
            section.css({
                'position': 'static'
            });
            // finally restore on destroy and reuse the value declared in stylesheet
            $scope.$on('$destroy', function () {
                section.css({
                    'position': ''
                });
            });
        }
    }
})();

/**=========================================================
 * Module: article.js
 =========================================================*/
(function () {
    'use strict';

    angular
        .module('app.extras')
        .controller('ArticleController', ArticleController);

    function ArticleController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.htmlContent = 'Article content...';

            vm.postDemo = {};
            vm.postDemo.tags = ['coding', 'less'];
            vm.availableTags = ['coding', 'less', 'sass', 'angularjs', 'node', 'expressJS'];
            vm.postDemo.categories = ['JAVASCRIPT', 'WEB'];
            vm.availableCategories = ['JAVASCRIPT', 'WEB', 'BOOTSTRAP', 'SERVER', 'HTML5', 'CSS'];

            vm.reviewers = [
                {
                    name: 'Adam',
                    email: 'adam@email.com',
                    age: 10
                },
                {
                    name: 'Amalie',
                    email: 'amalie@email.com',
                    age: 12
                },
                {
                    name: 'Wladimir',
                    email: 'wladimir@email.com',
                    age: 30
                },
                {
                    name: 'Samantha',
                    email: 'samantha@email.com',
                    age: 31
                },
                {
                    name: 'Estefanía',
                    email: 'estefanía@email.com',
                    age: 16
                },
                {
                    name: 'Natasha',
                    email: 'natasha@email.com',
                    age: 54
                },
                {
                    name: 'Nicole',
                    email: 'nicole@email.com',
                    age: 43
                },
                {
                    name: 'Adrian',
                    email: 'adrian@email.com',
                    age: 21
                }
            ];


            vm.alerts = [
                {
                    type: 'info',
                    msg: 'There is an autosaved version of this article that is more recent than the version below. <a href="#" class="text-white">Restore</a>'
                }
            ];

            vm.closeAlert = function (index) {
                vm.alerts.splice(index, 1);
            };
        }
    }
})();



(function () {
    'use strict';

    angular
        .module('app.extras')
        .service('LoadTreeService', LoadTreeService);

    LoadTreeService.$inject = ['$resource'];

    function LoadTreeService($resource) {
        // Loads the list of files to populate the treeview
        return $resource('server/editor/filetree.json');
    }

})();
/**=========================================================
 * Module: code-editor.js
 * Codemirror code editor controller
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.extras')
        .controller('CodeEditorController', CodeEditorController);

    CodeEditorController.$inject = ['$rootScope', '$scope', '$http', '$ocLazyLoad', 'filetree'];

    function CodeEditorController($rootScope, $scope, $http, $ocLazyLoad, filetree) {
        var vm = this;

        layout();
        activate();

        ////////////////
        /*jshint -W106*/
        function layout() {
            // Setup the layout mode 
            $rootScope.app.useFullLayout = true;
            $rootScope.app.hiddenFooter = true;
            $rootScope.app.layout.isCollapsed = true;

            // Restore layout for demo
            $scope.$on('$destroy', function () {
                $rootScope.app.useFullLayout = false;
                $rootScope.app.hiddenFooter = false;
            });

        }

        function activate() {

            // Set the tree data into the scope
            vm.filetree_data = filetree;

            // Available themes
            vm.editorThemes = ['3024-day', '3024-night', 'ambiance-mobile', 'ambiance', 'base16-dark', 'base16-light', 'blackboard', 'cobalt', 'eclipse', 'elegant', 'erlang-dark', 'lesser-dark', 'mbo', 'mdn-like', 'midnight', 'monokai', 'neat', 'neo', 'night', 'paraiso-dark', 'paraiso-light', 'pastel-on-dark', 'rubyblue', 'solarized', 'the-matrix', 'tomorrow-night-eighties', 'twilight', 'vibrant-ink', 'xq-dark', 'xq-light'];

            vm.editorOpts = {
                mode: 'javascript',
                lineNumbers: true,
                matchBrackets: true,
                theme: 'mbo',
                viewportMargin: Infinity
            };

            vm.refreshEditor = 0;

            // Load dinamically the stylesheet for the selected theme
            // You can use ozLazyLoad to load also the mode js based 
            // on the file extension that is loaded (see handle_filetree)
            vm.loadTheme = function () {
                var BASE = 'vendor/codemirror/theme/';
                $ocLazyLoad.load(BASE + vm.editorOpts.theme + '.css');
                vm.refreshEditor = !vm.refreshEditor;
            };
            // load default theme
            vm.loadTheme(vm.editorOpts.theme);
            // Add some initial text
            vm.code = '// Open a file from the left menu \n' +
                '// It will be requested to the server and loaded into the editor\n' +
                '// Also try adding a New File from the toolbar\n';


            // Tree

            var selectedBranch;
            vm.handle_filetree = function (branch) {

                selectedBranch = branch;

                var basePath = 'server/editor/';
                var isFolder = !!branch.children.length;

                console.log('You selected: ' + branch.label + ' - isFolder? ' + isFolder);

                if (!isFolder) {

                    $http
                        .get(basePath + branch.path)
                        .success(function (response) {

                            console.log('Loaded.. ' + branch.path);
                            // set the new code into the editor
                            vm.code = response;

                            vm.editorOpts.mode = detectMode(branch.path);
                            console.log('Mode is: ' + vm.editorOpts.mode);

                        });
                }
            };

            function detectMode(file) {
                var ext = file.split('.');
                ext = ext ? ext[ext.length - 1] : '';
                switch (ext) {
                    case 'html':
                        return 'htmlmixed';
                    case 'css':
                        return 'css';
                    default:
                        return 'javascript';
                }
            }

            var tree;
            tree = vm.filetree = {};

            // Adds a new branch to the tree
            vm.new_filetree = function () {
                var b;
                b = tree.get_selected_branch();

                // if we select a leaf -> select the parent folder
                if (b && b.children.length === 0) {
                    b = tree.get_parent_branch(b);
                }

                return tree.add_branch(b, {
                    'label': 'another.html',
                    'path': 'source/another.html'
                });
            };
        }
    }
})();


(function () {
    'use strict';

    angular
        .module('app.extras')
        .controller('TodoController', TodoController);

    TodoController.$inject = ['$filter'];

    function TodoController($filter) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.items = [
                {
                    todo: {
                        title: 'Meeting with Mark at 7am.',
                        description: 'Pellentesque convallis mauris eu elit imperdiet quis eleifend quam aliquet. '
                    },
                    complete: true
                },
                {
                    todo: {
                        title: 'Call Sonya. Talk about the new project.',
                        description: ''
                    },
                    complete: false
                },
                {
                    todo: {
                        title: 'Find a new place for vacations',
                        description: ''
                    },
                    complete: false
                }
            ];

            vm.editingTodo = false;
            vm.todo = {};

            vm.addTodo = function () {

                if (vm.todo.title === '') return;
                if (!vm.todo.description) vm.todo.description = '';

                if (vm.editingTodo) {
                    vm.todo = {};
                    vm.editingTodo = false;
                } else {
                    vm.items.push({
                        todo: angular.copy(vm.todo),
                        complete: false
                    });
                    vm.todo.title = '';
                    vm.todo.description = '';
                }
            };

            vm.editTodo = function (index, $event) {
                $event.preventDefault();
                $event.stopPropagation();
                vm.todo = vm.items[index].todo;
                vm.editingTodo = true;
            };

            vm.removeTodo = function (index /*, $event*/) {
                vm.items.splice(index, 1);
            };

            vm.clearAll = function () {
                vm.items = [];
            };

            vm.totalCompleted = function () {
                return $filter('filter')(vm.items, function (item) {
                    return item.complete;
                }).length;
            };

            vm.totalPending = function () {
                return $filter('filter')(vm.items, function (item) {
                    return !item.complete;
                }).length;
            };

        }
    }
})();

/**=========================================================
 * Module: word-cloud.js
 * Controller for jqCloud
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.extras')
        .controller('WordCloudController', WordCloudController);

    function WordCloudController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.words = [
                {
                    text: 'Lorem',
                    weight: 13
                    //link: 'http://themicon.co'
                }, {
                    text: 'Ipsum',
                    weight: 10.5
                }, {
                    text: 'Dolor',
                    weight: 9.4
                }, {
                    text: 'Sit',
                    weight: 8
                }, {
                    text: 'Amet',
                    weight: 6.2
                }, {
                    text: 'Consectetur',
                    weight: 5
                }, {
                    text: 'Adipiscing',
                    weight: 5
                }, {
                    text: 'Sit',
                    weight: 8
                }, {
                    text: 'Amet',
                    weight: 6.2
                }, {
                    text: 'Consectetur',
                    weight: 5
                }, {
                    text: 'Adipiscing',
                    weight: 5
                }
            ];
        }
    }
})();

/**=========================================================
 * Module: flatdoc.js
 * Creates the flatdoc markup and initializes the plugin
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.flatdoc')
        .directive('flatdoc', flatdoc);

    function flatdoc() {

        var directive = {
            template: '<div role="flatdoc"><div role="flatdoc-menu"></div><div role="flatdoc-content"></div></div>',
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
            Flatdoc.run({
                fetcher: Flatdoc.file(attrs.src)
            });

            var $root = $('html, body');
            $(document).on('flatdoc:ready', function () {
                var docMenu = $('[role="flatdoc-menu"]');
                docMenu.find('a').on('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();

                    var $this = $(this);

                    docMenu.find('a.active').removeClass('active');
                    $this.addClass('active');

                    $root.animate({
                        scrollTop: $(this.getAttribute('href')).offset().top - ($('.topnavbar').height() + 10)
                    }, 800);
                });

            });
        }
    }


})();

(function () {
    'use strict';

    angular
        .module('app.forms')
        .controller('ColorPickerController', ColorPickerController);

    function ColorPickerController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.hexPicker = {
                color: ''
            };

            vm.rgbPicker = {
                color: ''
            };

            vm.rgbaPicker = {
                color: ''
            };

            vm.nonInput = {
                color: ''
            };

            vm.resetColor = function () {
                vm.hexPicker = {
                    color: '#ff0000'
                };
            };

            vm.resetRBGColor = function () {
                vm.rgbPicker = {
                    color: 'rgb(255,255,255)'
                };
            };

            vm.resetRBGAColor = function () {
                vm.rgbaPicker = {
                    color: 'rgb(255,255,255, 0.25)'
                };
            };

            vm.resetNonInputColor = function () {
                vm.nonInput = {
                    color: '#ffffff'
                };
            };
        }
    }
})();
/**=========================================================
 * Module: filestyle.js
 * Initializes the fielstyle plugin
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.forms')
        .directive('filestyle', filestyle);

    function filestyle() {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
            var options = element.data();

            // old usage support
            options.classInput = element.data('classinput') || options.classInput;

            element.filestyle(options);
        }
    }

})();

/**=========================================================
 * Module: form-imgcrop.js
 * Image crop controller
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.forms')
        .controller('ImageCropController', ImageCropController);

    ImageCropController.$inject = ['$scope'];

    function ImageCropController($scope) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.reset = function () {
                vm.myImage = '';
                vm.myCroppedImage = '';
                vm.imgcropType = 'square';
            };

            vm.reset();

            var handleFileSelect = function (evt) {
                var file = evt.currentTarget.files[0];
                var reader = new FileReader();
                reader.onload = function (evt) {
                    $scope.$apply(function ( /*$scope*/) {
                        vm.myImage = evt.target.result;
                    });
                };
                if (file)
                    reader.readAsDataURL(file);
            };

            angular.element(document.querySelector('#fileInput')).on('change', handleFileSelect);
        }
    }
})();

/**=========================================================
 * Module: FormValidationController
 * Input validation with UI Validate
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.forms')
        .controller('FormValidationController', FormValidationController);

    function FormValidationController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.notBlackListed = function (value) {
                var blacklist = ['some@mail.com', 'another@email.com'];
                return blacklist.indexOf(value) === -1;
            };

            vm.words = function (value) {
                return value && value.split(' ').length;
            };

            vm.submitted = false;
            vm.validateInput = function (name, type) {
                var input = vm.formValidate[name];
                return (input.$dirty || vm.submitted) && input.$error[type];
            };

            // Submit form
            vm.submitForm = function () {
                vm.submitted = true;
                if (vm.formValidate.$valid) {
                    console.log('Submitted!!');
                } else {
                    console.log('Not valid!!');
                    return false;
                }
            };
        }
    }
})();

/**=========================================================
 * Module: form-wizard.js
 * Handles form wizard plugin and validation
 =========================================================*/


(function () {
    'use strict';

    angular
        .module('app.forms')
        .directive('formWizard', formWizard);

    formWizard.$inject = ['$parse'];

    function formWizard($parse) {
        var directive = {
            link: link,
            restrict: 'A',
            scope: true
        };
        return directive;

        function link(scope, element, attrs) {
            var validate = $parse(attrs.validateSteps)(scope),
                wiz = new Wizard(attrs.steps, !!validate, element);
            scope.wizard = wiz.init();
        }

        function Wizard(quantity, validate, element) {

            var self = this;
            self.quantity = parseInt(quantity, 10);
            self.validate = validate;
            self.element = element;

            self.init = function () {
                self.createsteps(self.quantity);
                self.go(1); // always start at fist step
                return self;
            };

            self.go = function (step) {

                if (angular.isDefined(self.steps[step])) {

                    if (self.validate && step !== 1) {
                        var form = $(self.element),
                            group = form.children().children('div').get(step - 2);

                        if (false === form.parsley().validate(group.id)) {
                            return false;
                        }
                    }

                    self.cleanall();
                    self.steps[step] = true;
                }
            };

            self.active = function (step) {
                return !!self.steps[step];
            };

            self.cleanall = function () {
                for (var i in self.steps) {
                    self.steps[i] = false;
                }
            };

            self.createsteps = function (q) {
                self.steps = [];
                for (var i = 1; i <= q; i++) self.steps[i] = false;
            };

        }
    }


})();

/**=========================================================
 * Module: form-xeditable.js
 * Form xEditable controller
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.forms')
        .controller('FormxEditableController', FormxEditableController);

    FormxEditableController.$inject = ['$scope', 'editableOptions', 'editableThemes', '$filter', '$http'];

    function FormxEditableController($scope, editableOptions, editableThemes, $filter, $http) {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {

            editableOptions.theme = 'bs3';

            editableThemes.bs3.inputClass = 'input-sm';
            editableThemes.bs3.buttonsClass = 'btn-sm';
            editableThemes.bs3.submitTpl = '<button type="submit" class="btn btn-success"><span class="fa fa-check"></span></button>';
            editableThemes.bs3.cancelTpl = '<button type="button" class="btn btn-default" ng-click="$form.$cancel()">' +
                '<span class="fa fa-times text-muted"></span>' +
                '</button>';

            vm.user = {
                email: 'email@example.com',
                tel: '123-45-67',
                number: 29,
                range: 10,
                url: 'http://example.com',
                search: 'blabla',
                color: '#6a4415',
                date: null,
                time: new Date(),
                datetime: null,
                month: null,
                week: null,
                desc: 'Sed pharetra euismod dolor, id feugiat ante volutpat eget. '
            };

            // Local select
            // ----------------------------------- 

            vm.user2 = {
                status: 2
            };

            vm.statuses = [
                {
                    value: 1,
                    text: 'status1'
                },
                {
                    value: 2,
                    text: 'status2'
                },
                {
                    value: 3,
                    text: 'status3'
                },
                {
                    value: 4,
                    text: 'status4'
                }
            ];

            vm.showStatus = function () {
                var selected = $filter('filter')(vm.statuses, {
                    value: vm.user2.status
                });
                return (vm.user2.status && selected.length) ? selected[0].text : 'Not set';
            };

            // select remote
            // ----------------------------------- 

            vm.user3 = {
                id: 4,
                text: 'admin' // original value
            };

            vm.groups = [];

            vm.loadGroups = function () {
                return vm.groups.length ? null : $http.get('server/xeditable-groups.json').success(function (data) {
                    vm.groups = data;
                });
            };

            $scope.$watch('user3.id', function (newVal, oldVal) {
                if (newVal !== oldVal) {
                    var selected = $filter('filter')(vm.groups, {
                        id: vm.user3.id
                    });
                    vm.user3.text = selected.length ? selected[0].text : null;
                }
            });

            // Typeahead
            // ----------------------------------- 

            vm.user4 = {
                state: 'Arizona'
            };

            vm.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

        }
    }
})();


(function () {
    'use strict';

    angular
        .module('app.forms')
        .controller('FormDemoCtrl', FormDemoCtrl);

    FormDemoCtrl.$inject = ['$resource'];

    function FormDemoCtrl($resource) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            // the following allow to request array $resource instead of object (default)
            var actions = {
                'get': {
                    method: 'GET',
                    isArray: true
                }
            };

            // Tags inputs
            // ----------------------------------- 
            var Cities = $resource('server/cities.json', {}, actions);

            Cities.get(function (data) {

                vm.cities = data;

            });
            // for non ajax form just fill the scope variable
            // vm.cities = ['Amsterdam','Washington','Sydney','Beijing','Cairo'];

            // Slider demo values
            vm.slider1 = 5;
            vm.slider2 = 10;
            vm.slider3 = 15;
            vm.slider4 = 20;
            vm.slider5 = 25;
            vm.slider6 = 30;
            vm.slider7 = 10;
            vm.slider8 = [250, 750];

            // Chosen data
            // ----------------------------------- 

            var States = $resource('server/chosen-states.json', {}, {
                'query': {
                    method: 'GET',
                    isArray: true
                }
            });

            vm.states = States.query();


            vm.alertSubmit = function () {
                alert('Form submitted!');
                return false;
            };

            // Angular wysiwyg 
            // ----------------------------------- 

            vm.wysiwygContent = '<p> Write something here.. </p>';

            // Text Angular (wysiwyg)
            // ----------------------------------- 

            vm.htmlContent = '<h2>Try me!</h2><p>textAngular is a super cool WYSIWYG Text Editor directive for AngularJS</p><p><b>Features:</b></p><ol><li>Automatic Seamless Two-Way-Binding</li><li style="color: blue;">Super Easy <b>Theming</b> Options</li><li>Simple Editor Instance Creation</li><li>Safely Parses Html for Custom Toolbar Icons</li><li>Doesn&apos;t Use an iFrame</li><li>Works with Firefox, Chrome, and IE8+</li></ol><p><a href="https://github.com/fraywing/textAngular">Source</a> </p>';

        }
    }
})();

/**=========================================================
 * Module: masked,js
 * Initializes the masked inputs
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.forms')
        .directive('masked', masked);

    function masked() {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
            var $elem = $(element);
            if ($.fn.inputmask)
                $elem.inputmask();
        }
    }

})();

/**
 * AngularJS default filter with the following expression:
 * "person in people | filter: {name: $select.search, age: $select.search}"
 * performs a AND between 'name: $select.search' and 'age: $select.search'.
 * We want to perform a OR.
 */

(function () {
    'use strict';

    angular
        .module('app.forms')
        .filter('propsFilter', propsFilter);

    function propsFilter() {
        return filterFilter;

        ////////////////
        function filterFilter(items, props) {
            var out = [];

            if (angular.isArray(items)) {
                items.forEach(function (item) {
                    var itemMatches = false;

                    var keys = Object.keys(props);
                    for (var i = 0; i < keys.length; i++) {
                        var prop = keys[i];
                        var text = props[prop].toLowerCase();
                        if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                            itemMatches = true;
                            break;
                        }
                    }

                    if (itemMatches) {
                        out.push(item);
                    }
                });
            } else {
                // Let the output be the input untouched
                out = items;
            }

            return out;
        }
    }

})();
/**=========================================================
 * Module: tags-input.js
 * Initializes the tag inputs plugin
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.forms')
        .directive('tagsinput', tagsinput);

    tagsinput.$inject = ['$timeout'];

    function tagsinput($timeout) {
        var directive = {
            link: link,
            require: 'ngModel',
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs, ngModel) {
            element.on('itemAdded itemRemoved', function () {
                // check if view value is not empty and is a string
                // and update the view from string to an array of tags
                if (ngModel.$viewValue && ngModel.$viewValue.split) {
                    ngModel.$setViewValue(ngModel.$viewValue.split(','));
                    ngModel.$render();
                }
            });

            $timeout(function () {
                element.tagsinput();
            });
        }
    }

})();

/**=========================================================
 * Module: uiselect.js
 * uiSelect controller
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.forms')
        .controller('uiSelectController', uiSelectController);

    uiSelectController.$inject = ['$scope', '$http'];

    function uiSelectController($scope, $http) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.disabled = undefined;

            vm.enable = function () {
                vm.disabled = false;
            };

            vm.disable = function () {
                vm.disabled = true;
            };

            vm.clear = function () {
                vm.person.selected = undefined;
                vm.address.selected = undefined;
                vm.country.selected = undefined;
            };

            vm.person = {};
            vm.people = [
                {
                    name: 'Adam',
                    email: 'adam@email.com',
                    age: 10
                },
                {
                    name: 'Amalie',
                    email: 'amalie@email.com',
                    age: 12
                },
                {
                    name: 'Wladimir',
                    email: 'wladimir@email.com',
                    age: 30
                },
                {
                    name: 'Samantha',
                    email: 'samantha@email.com',
                    age: 31
                },
                {
                    name: 'Estefanía',
                    email: 'estefanía@email.com',
                    age: 16
                },
                {
                    name: 'Natasha',
                    email: 'natasha@email.com',
                    age: 54
                },
                {
                    name: 'Nicole',
                    email: 'nicole@email.com',
                    age: 43
                },
                {
                    name: 'Adrian',
                    email: 'adrian@email.com',
                    age: 21
                }
            ];

            vm.address = {};
            vm.refreshAddresses = function (address) {
                var params = {
                    address: address,
                    sensor: false
                };
                return $http.get(
                    '//maps.googleapis.com/maps/api/geocode/json', {
                        params: params
                    }
                ).then(function (response) {
                    vm.addresses = response.data.results;
                });
            };

            vm.country = {};
            vm.countries = [ // Taken from https://gist.github.com/unceus/6501985
                {
                    name: 'Afghanistan',
                    code: 'AF'
                },
                {
                    name: 'Åland Islands',
                    code: 'AX'
                },
                {
                    name: 'Albania',
                    code: 'AL'
                },
                {
                    name: 'Algeria',
                    code: 'DZ'
                },
                {
                    name: 'American Samoa',
                    code: 'AS'
                },
                {
                    name: 'Andorra',
                    code: 'AD'
                },
                {
                    name: 'Angola',
                    code: 'AO'
                },
                {
                    name: 'Anguilla',
                    code: 'AI'
                },
                {
                    name: 'Antarctica',
                    code: 'AQ'
                },
                {
                    name: 'Antigua and Barbuda',
                    code: 'AG'
                },
                {
                    name: 'Argentina',
                    code: 'AR'
                },
                {
                    name: 'Armenia',
                    code: 'AM'
                },
                {
                    name: 'Aruba',
                    code: 'AW'
                },
                {
                    name: 'Australia',
                    code: 'AU'
                },
                {
                    name: 'Austria',
                    code: 'AT'
                },
                {
                    name: 'Azerbaijan',
                    code: 'AZ'
                },
                {
                    name: 'Bahamas',
                    code: 'BS'
                },
                {
                    name: 'Bahrain',
                    code: 'BH'
                },
                {
                    name: 'Bangladesh',
                    code: 'BD'
                },
                {
                    name: 'Barbados',
                    code: 'BB'
                },
                {
                    name: 'Belarus',
                    code: 'BY'
                },
                {
                    name: 'Belgium',
                    code: 'BE'
                },
                {
                    name: 'Belize',
                    code: 'BZ'
                },
                {
                    name: 'Benin',
                    code: 'BJ'
                },
                {
                    name: 'Bermuda',
                    code: 'BM'
                },
                {
                    name: 'Bhutan',
                    code: 'BT'
                },
                {
                    name: 'Bolivia',
                    code: 'BO'
                },
                {
                    name: 'Bosnia and Herzegovina',
                    code: 'BA'
                },
                {
                    name: 'Botswana',
                    code: 'BW'
                },
                {
                    name: 'Bouvet Island',
                    code: 'BV'
                },
                {
                    name: 'Brazil',
                    code: 'BR'
                },
                {
                    name: 'British Indian Ocean Territory',
                    code: 'IO'
                },
                {
                    name: 'Brunei Darussalam',
                    code: 'BN'
                },
                {
                    name: 'Bulgaria',
                    code: 'BG'
                },
                {
                    name: 'Burkina Faso',
                    code: 'BF'
                },
                {
                    name: 'Burundi',
                    code: 'BI'
                },
                {
                    name: 'Cambodia',
                    code: 'KH'
                },
                {
                    name: 'Cameroon',
                    code: 'CM'
                },
                {
                    name: 'Canada',
                    code: 'CA'
                },
                {
                    name: 'Cape Verde',
                    code: 'CV'
                },
                {
                    name: 'Cayman Islands',
                    code: 'KY'
                },
                {
                    name: 'Central African Republic',
                    code: 'CF'
                },
                {
                    name: 'Chad',
                    code: 'TD'
                },
                {
                    name: 'Chile',
                    code: 'CL'
                },
                {
                    name: 'China',
                    code: 'CN'
                },
                {
                    name: 'Christmas Island',
                    code: 'CX'
                },
                {
                    name: 'Cocos (Keeling) Islands',
                    code: 'CC'
                },
                {
                    name: 'Colombia',
                    code: 'CO'
                },
                {
                    name: 'Comoros',
                    code: 'KM'
                },
                {
                    name: 'Congo',
                    code: 'CG'
                },
                {
                    name: 'Congo, The Democratic Republic of the',
                    code: 'CD'
                },
                {
                    name: 'Cook Islands',
                    code: 'CK'
                },
                {
                    name: 'Costa Rica',
                    code: 'CR'
                },
                {
                    name: 'Cote D\'Ivoire',
                    code: 'CI'
                },
                {
                    name: 'Croatia',
                    code: 'HR'
                },
                {
                    name: 'Cuba',
                    code: 'CU'
                },
                {
                    name: 'Cyprus',
                    code: 'CY'
                },
                {
                    name: 'Czech Republic',
                    code: 'CZ'
                },
                {
                    name: 'Denmark',
                    code: 'DK'
                },
                {
                    name: 'Djibouti',
                    code: 'DJ'
                },
                {
                    name: 'Dominica',
                    code: 'DM'
                },
                {
                    name: 'Dominican Republic',
                    code: 'DO'
                },
                {
                    name: 'Ecuador',
                    code: 'EC'
                },
                {
                    name: 'Egypt',
                    code: 'EG'
                },
                {
                    name: 'El Salvador',
                    code: 'SV'
                },
                {
                    name: 'Equatorial Guinea',
                    code: 'GQ'
                },
                {
                    name: 'Eritrea',
                    code: 'ER'
                },
                {
                    name: 'Estonia',
                    code: 'EE'
                },
                {
                    name: 'Ethiopia',
                    code: 'ET'
                },
                {
                    name: 'Falkland Islands (Malvinas)',
                    code: 'FK'
                },
                {
                    name: 'Faroe Islands',
                    code: 'FO'
                },
                {
                    name: 'Fiji',
                    code: 'FJ'
                },
                {
                    name: 'Finland',
                    code: 'FI'
                },
                {
                    name: 'France',
                    code: 'FR'
                },
                {
                    name: 'French Guiana',
                    code: 'GF'
                },
                {
                    name: 'French Polynesia',
                    code: 'PF'
                },
                {
                    name: 'French Southern Territories',
                    code: 'TF'
                },
                {
                    name: 'Gabon',
                    code: 'GA'
                },
                {
                    name: 'Gambia',
                    code: 'GM'
                },
                {
                    name: 'Georgia',
                    code: 'GE'
                },
                {
                    name: 'Germany',
                    code: 'DE'
                },
                {
                    name: 'Ghana',
                    code: 'GH'
                },
                {
                    name: 'Gibraltar',
                    code: 'GI'
                },
                {
                    name: 'Greece',
                    code: 'GR'
                },
                {
                    name: 'Greenland',
                    code: 'GL'
                },
                {
                    name: 'Grenada',
                    code: 'GD'
                },
                {
                    name: 'Guadeloupe',
                    code: 'GP'
                },
                {
                    name: 'Guam',
                    code: 'GU'
                },
                {
                    name: 'Guatemala',
                    code: 'GT'
                },
                {
                    name: 'Guernsey',
                    code: 'GG'
                },
                {
                    name: 'Guinea',
                    code: 'GN'
                },
                {
                    name: 'Guinea-Bissau',
                    code: 'GW'
                },
                {
                    name: 'Guyana',
                    code: 'GY'
                },
                {
                    name: 'Haiti',
                    code: 'HT'
                },
                {
                    name: 'Heard Island and Mcdonald Islands',
                    code: 'HM'
                },
                {
                    name: 'Holy See (Vatican City State)',
                    code: 'VA'
                },
                {
                    name: 'Honduras',
                    code: 'HN'
                },
                {
                    name: 'Hong Kong',
                    code: 'HK'
                },
                {
                    name: 'Hungary',
                    code: 'HU'
                },
                {
                    name: 'Iceland',
                    code: 'IS'
                },
                {
                    name: 'India',
                    code: 'IN'
                },
                {
                    name: 'Indonesia',
                    code: 'ID'
                },
                {
                    name: 'Iran, Islamic Republic Of',
                    code: 'IR'
                },
                {
                    name: 'Iraq',
                    code: 'IQ'
                },
                {
                    name: 'Ireland',
                    code: 'IE'
                },
                {
                    name: 'Isle of Man',
                    code: 'IM'
                },
                {
                    name: 'Israel',
                    code: 'IL'
                },
                {
                    name: 'Italy',
                    code: 'IT'
                },
                {
                    name: 'Jamaica',
                    code: 'JM'
                },
                {
                    name: 'Japan',
                    code: 'JP'
                },
                {
                    name: 'Jersey',
                    code: 'JE'
                },
                {
                    name: 'Jordan',
                    code: 'JO'
                },
                {
                    name: 'Kazakhstan',
                    code: 'KZ'
                },
                {
                    name: 'Kenya',
                    code: 'KE'
                },
                {
                    name: 'Kiribati',
                    code: 'KI'
                },
                {
                    name: 'Korea, Democratic People\'s Republic of',
                    code: 'KP'
                },
                {
                    name: 'Korea, Republic of',
                    code: 'KR'
                },
                {
                    name: 'Kuwait',
                    code: 'KW'
                },
                {
                    name: 'Kyrgyzstan',
                    code: 'KG'
                },
                {
                    name: 'Lao People\'s Democratic Republic',
                    code: 'LA'
                },
                {
                    name: 'Latvia',
                    code: 'LV'
                },
                {
                    name: 'Lebanon',
                    code: 'LB'
                },
                {
                    name: 'Lesotho',
                    code: 'LS'
                },
                {
                    name: 'Liberia',
                    code: 'LR'
                },
                {
                    name: 'Libyan Arab Jamahiriya',
                    code: 'LY'
                },
                {
                    name: 'Liechtenstein',
                    code: 'LI'
                },
                {
                    name: 'Lithuania',
                    code: 'LT'
                },
                {
                    name: 'Luxembourg',
                    code: 'LU'
                },
                {
                    name: 'Macao',
                    code: 'MO'
                },
                {
                    name: 'Macedonia, The Former Yugoslav Republic of',
                    code: 'MK'
                },
                {
                    name: 'Madagascar',
                    code: 'MG'
                },
                {
                    name: 'Malawi',
                    code: 'MW'
                },
                {
                    name: 'Malaysia',
                    code: 'MY'
                },
                {
                    name: 'Maldives',
                    code: 'MV'
                },
                {
                    name: 'Mali',
                    code: 'ML'
                },
                {
                    name: 'Malta',
                    code: 'MT'
                },
                {
                    name: 'Marshall Islands',
                    code: 'MH'
                },
                {
                    name: 'Martinique',
                    code: 'MQ'
                },
                {
                    name: 'Mauritania',
                    code: 'MR'
                },
                {
                    name: 'Mauritius',
                    code: 'MU'
                },
                {
                    name: 'Mayotte',
                    code: 'YT'
                },
                {
                    name: 'Mexico',
                    code: 'MX'
                },
                {
                    name: 'Micronesia, Federated States of',
                    code: 'FM'
                },
                {
                    name: 'Moldova, Republic of',
                    code: 'MD'
                },
                {
                    name: 'Monaco',
                    code: 'MC'
                },
                {
                    name: 'Mongolia',
                    code: 'MN'
                },
                {
                    name: 'Montserrat',
                    code: 'MS'
                },
                {
                    name: 'Morocco',
                    code: 'MA'
                },
                {
                    name: 'Mozambique',
                    code: 'MZ'
                },
                {
                    name: 'Myanmar',
                    code: 'MM'
                },
                {
                    name: 'Namibia',
                    code: 'NA'
                },
                {
                    name: 'Nauru',
                    code: 'NR'
                },
                {
                    name: 'Nepal',
                    code: 'NP'
                },
                {
                    name: 'Netherlands',
                    code: 'NL'
                },
                {
                    name: 'Netherlands Antilles',
                    code: 'AN'
                },
                {
                    name: 'New Caledonia',
                    code: 'NC'
                },
                {
                    name: 'New Zealand',
                    code: 'NZ'
                },
                {
                    name: 'Nicaragua',
                    code: 'NI'
                },
                {
                    name: 'Niger',
                    code: 'NE'
                },
                {
                    name: 'Nigeria',
                    code: 'NG'
                },
                {
                    name: 'Niue',
                    code: 'NU'
                },
                {
                    name: 'Norfolk Island',
                    code: 'NF'
                },
                {
                    name: 'Northern Mariana Islands',
                    code: 'MP'
                },
                {
                    name: 'Norway',
                    code: 'NO'
                },
                {
                    name: 'Oman',
                    code: 'OM'
                },
                {
                    name: 'Pakistan',
                    code: 'PK'
                },
                {
                    name: 'Palau',
                    code: 'PW'
                },
                {
                    name: 'Palestinian Territory, Occupied',
                    code: 'PS'
                },
                {
                    name: 'Panama',
                    code: 'PA'
                },
                {
                    name: 'Papua New Guinea',
                    code: 'PG'
                },
                {
                    name: 'Paraguay',
                    code: 'PY'
                },
                {
                    name: 'Peru',
                    code: 'PE'
                },
                {
                    name: 'Philippines',
                    code: 'PH'
                },
                {
                    name: 'Pitcairn',
                    code: 'PN'
                },
                {
                    name: 'Poland',
                    code: 'PL'
                },
                {
                    name: 'Portugal',
                    code: 'PT'
                },
                {
                    name: 'Puerto Rico',
                    code: 'PR'
                },
                {
                    name: 'Qatar',
                    code: 'QA'
                },
                {
                    name: 'Reunion',
                    code: 'RE'
                },
                {
                    name: 'Romania',
                    code: 'RO'
                },
                {
                    name: 'Russian Federation',
                    code: 'RU'
                },
                {
                    name: 'Rwanda',
                    code: 'RW'
                },
                {
                    name: 'Saint Helena',
                    code: 'SH'
                },
                {
                    name: 'Saint Kitts and Nevis',
                    code: 'KN'
                },
                {
                    name: 'Saint Lucia',
                    code: 'LC'
                },
                {
                    name: 'Saint Pierre and Miquelon',
                    code: 'PM'
                },
                {
                    name: 'Saint Vincent and the Grenadines',
                    code: 'VC'
                },
                {
                    name: 'Samoa',
                    code: 'WS'
                },
                {
                    name: 'San Marino',
                    code: 'SM'
                },
                {
                    name: 'Sao Tome and Principe',
                    code: 'ST'
                },
                {
                    name: 'Saudi Arabia',
                    code: 'SA'
                },
                {
                    name: 'Senegal',
                    code: 'SN'
                },
                {
                    name: 'Serbia and Montenegro',
                    code: 'CS'
                },
                {
                    name: 'Seychelles',
                    code: 'SC'
                },
                {
                    name: 'Sierra Leone',
                    code: 'SL'
                },
                {
                    name: 'Singapore',
                    code: 'SG'
                },
                {
                    name: 'Slovakia',
                    code: 'SK'
                },
                {
                    name: 'Slovenia',
                    code: 'SI'
                },
                {
                    name: 'Solomon Islands',
                    code: 'SB'
                },
                {
                    name: 'Somalia',
                    code: 'SO'
                },
                {
                    name: 'South Africa',
                    code: 'ZA'
                },
                {
                    name: 'South Georgia and the South Sandwich Islands',
                    code: 'GS'
                },
                {
                    name: 'Spain',
                    code: 'ES'
                },
                {
                    name: 'Sri Lanka',
                    code: 'LK'
                },
                {
                    name: 'Sudan',
                    code: 'SD'
                },
                {
                    name: 'Suriname',
                    code: 'SR'
                },
                {
                    name: 'Svalbard and Jan Mayen',
                    code: 'SJ'
                },
                {
                    name: 'Swaziland',
                    code: 'SZ'
                },
                {
                    name: 'Sweden',
                    code: 'SE'
                },
                {
                    name: 'Switzerland',
                    code: 'CH'
                },
                {
                    name: 'Syrian Arab Republic',
                    code: 'SY'
                },
                {
                    name: 'Taiwan, Province of China',
                    code: 'TW'
                },
                {
                    name: 'Tajikistan',
                    code: 'TJ'
                },
                {
                    name: 'Tanzania, United Republic of',
                    code: 'TZ'
                },
                {
                    name: 'Thailand',
                    code: 'TH'
                },
                {
                    name: 'Timor-Leste',
                    code: 'TL'
                },
                {
                    name: 'Togo',
                    code: 'TG'
                },
                {
                    name: 'Tokelau',
                    code: 'TK'
                },
                {
                    name: 'Tonga',
                    code: 'TO'
                },
                {
                    name: 'Trinidad and Tobago',
                    code: 'TT'
                },
                {
                    name: 'Tunisia',
                    code: 'TN'
                },
                {
                    name: 'Turkey',
                    code: 'TR'
                },
                {
                    name: 'Turkmenistan',
                    code: 'TM'
                },
                {
                    name: 'Turks and Caicos Islands',
                    code: 'TC'
                },
                {
                    name: 'Tuvalu',
                    code: 'TV'
                },
                {
                    name: 'Uganda',
                    code: 'UG'
                },
                {
                    name: 'Ukraine',
                    code: 'UA'
                },
                {
                    name: 'United Arab Emirates',
                    code: 'AE'
                },
                {
                    name: 'United Kingdom',
                    code: 'GB'
                },
                {
                    name: 'United States',
                    code: 'US'
                },
                {
                    name: 'United States Minor Outlying Islands',
                    code: 'UM'
                },
                {
                    name: 'Uruguay',
                    code: 'UY'
                },
                {
                    name: 'Uzbekistan',
                    code: 'UZ'
                },
                {
                    name: 'Vanuatu',
                    code: 'VU'
                },
                {
                    name: 'Venezuela',
                    code: 'VE'
                },
                {
                    name: 'Vietnam',
                    code: 'VN'
                },
                {
                    name: 'Virgin Islands, British',
                    code: 'VG'
                },
                {
                    name: 'Virgin Islands, U.S.',
                    code: 'VI'
                },
                {
                    name: 'Wallis and Futuna',
                    code: 'WF'
                },
                {
                    name: 'Western Sahara',
                    code: 'EH'
                },
                {
                    name: 'Yemen',
                    code: 'YE'
                },
                {
                    name: 'Zambia',
                    code: 'ZM'
                },
                {
                    name: 'Zimbabwe',
                    code: 'ZW'
                }
            ];


            // Multiple
            vm.someGroupFn = function (item) {

                if (item.name[0] >= 'A' && item.name[0] <= 'M')
                    return 'From A - M';

                if (item.name[0] >= 'N' && item.name[0] <= 'Z')
                    return 'From N - Z';

            };

            vm.counter = 0;
            vm.someFunction = function (item, model) {
                vm.counter++;
                vm.eventResult = {
                    item: item,
                    model: model
                };
            };

            vm.availableColors = ['Red', 'Green', 'Blue', 'Yellow', 'Magenta', 'Maroon', 'Umbra', 'Turquoise'];

            vm.multipleDemo = {};
            vm.multipleDemo.colors = ['Blue', 'Red'];
            vm.multipleDemo.selectedPeople = [vm.people[5], vm.people[4]];
            vm.multipleDemo.selectedPeopleWithGroupBy = [vm.people[8], vm.people[6]];
            vm.multipleDemo.selectedPeopleSimple = ['samantha@email.com', 'wladimir@email.com'];
        }
    }

})();

/**=========================================================
 * Module: upload.js
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.forms')
        .controller('FileUploadController', FileUploadController);

    FileUploadController.$inject = ['FileUploader'];

    function FileUploadController(FileUploader) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            var uploader = vm.uploader = new FileUploader({
                url: 'server/upload.php'
            });

            // FILTERS

            uploader.filters.push({
                name: 'customFilter',
                fn: function ( /*item, options*/) {
                    return this.queue.length < 10;
                }
            });

            // CALLBACKS

            uploader.onWhenAddingFileFailed = function (item /*{File|FileLikeObject}*/, filter, options) {
                console.info('onWhenAddingFileFailed', item, filter, options);
            };
            uploader.onAfterAddingFile = function (fileItem) {
                console.info('onAfterAddingFile', fileItem);
            };
            uploader.onAfterAddingAll = function (addedFileItems) {
                console.info('onAfterAddingAll', addedFileItems);
            };
            uploader.onBeforeUploadItem = function (item) {
                console.info('onBeforeUploadItem', item);
            };
            uploader.onProgressItem = function (fileItem, progress) {
                console.info('onProgressItem', fileItem, progress);
            };
            uploader.onProgressAll = function (progress) {
                console.info('onProgressAll', progress);
            };
            uploader.onSuccessItem = function (fileItem, response, status, headers) {
                console.info('onSuccessItem', fileItem, response, status, headers);
            };
            uploader.onErrorItem = function (fileItem, response, status, headers) {
                console.info('onErrorItem', fileItem, response, status, headers);
            };
            uploader.onCancelItem = function (fileItem, response, status, headers) {
                console.info('onCancelItem', fileItem, response, status, headers);
            };
            uploader.onCompleteItem = function (fileItem, response, status, headers) {
                console.info('onCompleteItem', fileItem, response, status, headers);
            };
            uploader.onCompleteAll = function () {
                console.info('onCompleteAll');
            };

            console.info('uploader', uploader);
        }
    }
})();

/**=========================================================
 * Module: validate-form.js
 * Initializes the validation plugin Parsley
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.forms')
        .directive('validateForm', validateForm);

    function validateForm() {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
            var $elem = $(element);
            if ($.fn.parsley)
                $elem.parsley();
        }
    }

})();

/**=========================================================
 * Module: skycons.js
 * Include any animated weather icon from Skycons
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.icons')
        .directive('skycon', skycon);

    function skycon() {

        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            var skycons = new Skycons({
                'color': (attrs.color || 'white')
            });

            element.html('<canvas width="' + attrs.width + '" height="' + attrs.height + '"></canvas>');

            skycons.add(element.children()[0], attrs.skycon);

            skycons.play();
        }
    }

})();

(function () {
    'use strict';

    angular
        .module('app.lazyload')
        .config(lazyloadConfig);

    lazyloadConfig.$inject = ['$ocLazyLoadProvider', 'APP_REQUIRES'];

    function lazyloadConfig($ocLazyLoadProvider, APP_REQUIRES) {

        // Lazy Load modules configuration
        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
            modules: APP_REQUIRES.modules
        });

    }
})();
(function () {
    'use strict';

    angular
        .module('app.lazyload')
        .constant('APP_REQUIRES', {
            // jQuery based and standalone scripts
            scripts: {
                'whirl': ['vendor/whirl/dist/whirl.css'],
                'classyloader': ['vendor/jquery-classyloader/js/jquery.classyloader.min.js'],
                'animo': ['vendor/animo.js/animo.js'],
                'fastclick': ['vendor/fastclick/lib/fastclick.js'],
                'modernizr': ['vendor/modernizr/modernizr.js'],
                'animate': ['vendor/animate.css/animate.min.css'],
                'skycons': ['vendor/skycons/skycons.js'],
                'icons': ['vendor/fontawesome/css/font-awesome.min.css',
                    'vendor/simple-line-icons/css/simple-line-icons.css'],
                'weather-icons': ['vendor/weather-icons/css/weather-icons.min.css'],
                'sparklines': ['app/vendor/sparklines/jquery.sparkline.min.js'],
                'wysiwyg': ['vendor/bootstrap-wysiwyg/bootstrap-wysiwyg.js',
                    'vendor/bootstrap-wysiwyg/external/jquery.hotkeys.js'],
                'slimscroll': ['vendor/slimScroll/jquery.slimscroll.min.js'],
                'screenfull': ['vendor/screenfull/dist/screenfull.js'],
                'vector-map': ['vendor/ika.jvectormap/jquery-jvectormap-1.2.2.min.js',
                    'vendor/ika.jvectormap/jquery-jvectormap-1.2.2.css'],
                'vector-map-maps': ['vendor/ika.jvectormap/jquery-jvectormap-world-mill-en.js',
                    'vendor/ika.jvectormap/jquery-jvectormap-us-mill-en.js'],
                'loadGoogleMapsJS': ['app/vendor/gmap/load-google-maps.js'],
                'flot-chart': ['vendor/Flot/jquery.flot.js'],
                'flot-chart-plugins': ['vendor/flot.tooltip/js/jquery.flot.tooltip.min.js',
                    'vendor/Flot/jquery.flot.resize.js',
                    'vendor/Flot/jquery.flot.pie.js',
                    'vendor/Flot/jquery.flot.time.js',
                    'vendor/Flot/jquery.flot.categories.js',
                    'vendor/flot-spline/js/jquery.flot.spline.min.js'],
                // jquery core and widgets
                'jquery-ui': ['vendor/jquery-ui/ui/core.js',
                    'vendor/jquery-ui/ui/widget.js'],
                // loads only jquery required modules and touch support
                'jquery-ui-widgets': ['vendor/jquery-ui/ui/core.js',
                    'vendor/jquery-ui/ui/widget.js',
                    'vendor/jquery-ui/ui/mouse.js',
                    'vendor/jquery-ui/ui/draggable.js',
                    'vendor/jquery-ui/ui/droppable.js',
                    'vendor/jquery-ui/ui/sortable.js',
                    'vendor/jqueryui-touch-punch/jquery.ui.touch-punch.min.js'],
                'moment': ['vendor/moment/min/moment-with-locales.min.js'],
                'moment-format': ['app/js/moment-duration-format.js'],
                'inputmask': ['vendor/jquery.inputmask/dist/jquery.inputmask.bundle.min.js'],
                'flatdoc': ['vendor/flatdoc/flatdoc.js'],
                'codemirror': ['vendor/codemirror/lib/codemirror.js',
                    'vendor/codemirror/lib/codemirror.css'],
                // modes for common web files
                'codemirror-modes-web': ['vendor/codemirror/mode/javascript/javascript.js',
                    'vendor/codemirror/mode/xml/xml.js',
                    'vendor/codemirror/mode/htmlmixed/htmlmixed.js',
                    'vendor/codemirror/mode/css/css.js'],
                'taginput': ['vendor/bootstrap-tagsinput/dist/bootstrap-tagsinput.css',
                    'vendor/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js'],
                'filestyle': ['vendor/bootstrap-filestyle/src/bootstrap-filestyle.js'],
                'parsley': ['vendor/parsleyjs/dist/parsley.min.js'],
                'fullcalendar': ['vendor/fullcalendar/dist/fullcalendar.min.js',
                    'vendor/fullcalendar/dist/fullcalendar.css'],
                'gcal': ['vendor/fullcalendar/dist/gcal.js'],
                'chartjs': ['vendor/Chart.js/Chart.js'],
                'morris': ['vendor/raphael/raphael.js',
                    'vendor/morris.js/morris.js',
                    'vendor/morris.js/morris.css'],
                'loaders.css': ['vendor/loaders.css/loaders.css'],
                'spinkit': ['vendor/spinkit/css/spinkit.css']
            },
            // Angular based script (use the right module name)
            modules: [
                {
                    name: 'truncate',
                    files: [
                        "vendor/angular-truncate/src/truncate.js"
                    ]
                },
                {
                    name: 'ngFileUpload',
                    files: [
                        "vendor/ng-file-upload/dist/ng-file-upload.min.js"
                    ]
                },
                // {
                //     name: 'angular-ladda',
                //     files: [
                //         "vendor/ladda/dist/ladda-themeless.min.css",
                //         "vendor/ladda/js/spin.js",
                //         "vendor/ladda/js/ladda.js",
                //         "vendor/angular-ladda/dist/angular-ladda.min.js"]
                // },
                {
                    name: 'ngWebSocket',
                    files: ['vendor/angular-websocket/angular-websocket.min.js']
                },
                {
                    name: 'dirPagination',
                    files: ['vendor/pagination/dirPagination.js']
                },
                {
                    name: 'restangular',
                    files: ['vendor/restangular/dist/restangular.min.js']
                },

                {
                    name: 'toaster',
                    files: ['vendor/angularjs-toaster/toaster.js',
                        'vendor/angularjs-toaster/toaster.css']
                },
                {
                    name: 'localytics.directives',
                    files: ['vendor/chosen_v1.2.0/chosen.jquery.min.js',
                        'vendor/chosen_v1.2.0/chosen.min.css',
                        'vendor/angular-chosen-localytics/chosen.js']
                },
                {
                    name: 'ngDialog',
                    files: ['vendor/ngDialog/js/ngDialog.min.js',
                        'vendor/ngDialog/css/ngDialog.min.css',
                        'vendor/ngDialog/css/ngDialog-theme-default.min.css']
                },
                {
                    name: 'ngWig',
                    files: ['vendor/ngWig/dist/ng-wig.min.js']
                },
                {
                    name: 'ngTable',
                    files: ['vendor/ng-table/dist/ng-table.min.js',
                        'vendor/ng-table/dist/ng-table.min.css']
                },
                {
                    name: 'ngTableExport',
                    files: ['vendor/ng-table-export/ng-table-export.js']
                },
                {
                    name: 'angularBootstrapNavTree',
                    files: ['vendor/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
                        'vendor/angular-bootstrap-nav-tree/dist/abn_tree.css']
                },
                {
                    name: 'htmlSortable',
                    files: ['vendor/html.sortable/dist/html.sortable.js',
                        'vendor/html.sortable/dist/html.sortable.angular.js']
                },
                {
                    name: 'xeditable',
                    files: ['vendor/angular-xeditable/dist/js/xeditable.js',
                        'vendor/angular-xeditable/dist/css/xeditable.css']
                },
                {
                    name: 'angularFileUpload',
                    files: ['vendor/angular-file-upload/angular-file-upload.js']
                },
                {
                    name: 'ngImgCrop',
                    files: ['vendor/ng-img-crop/compile/unminified/ng-img-crop.js',
                        'vendor/ng-img-crop/compile/unminified/ng-img-crop.css']
                },
                {
                    name: 'ui.select',
                    files: ['vendor/angular-ui-select/dist/select.js',
                        'vendor/angular-ui-select/dist/select.css']
                },
                {
                    name: 'ui.codemirror',
                    files: ['vendor/angular-ui-codemirror/ui-codemirror.js']
                },
                {
                    name: 'angular-carousel',
                    files: ['vendor/angular-carousel/dist/angular-carousel.css',
                        'vendor/angular-carousel/dist/angular-carousel.js']
                },
                {
                    name: 'ngGrid',
                    files: ['vendor/ng-grid/build/ng-grid.min.js',
                        'vendor/ng-grid/ng-grid.css']
                },
                {
                    name: 'infinite-scroll',
                    files: ['vendor/ngInfiniteScroll/build/ng-infinite-scroll.js']
                },
                {
                    name: 'ui.bootstrap-slider',
                    files: ['vendor/seiyria-bootstrap-slider/dist/bootstrap-slider.min.js',
                        'vendor/seiyria-bootstrap-slider/dist/css/bootstrap-slider.min.css',
                        'vendor/angular-bootstrap-slider/slider.js']
                },
                {
                    name: 'ui.grid',
                    files: ['vendor/angular-ui-grid/ui-grid.min.css',
                        'vendor/angular-ui-grid/ui-grid.min.js']
                },
                {
                    name: 'textAngular',
                    files: ['vendor/textAngular/dist/textAngular.css',
                        'vendor/textAngular/dist/textAngular-rangy.min.js',
                        'vendor/textAngular/dist/textAngular-sanitize.js',
                        'vendor/textAngular/src/globals.js',
                        'vendor/textAngular/src/factories.js',
                        'vendor/textAngular/src/DOM.js',
                        'vendor/textAngular/src/validators.js',
                        'vendor/textAngular/src/taBind.js',
                        'vendor/textAngular/src/main.js',
                        'vendor/textAngular/dist/textAngularSetup.js'
                    ],
                    serie: true
                },
                {
                    name: 'angular-rickshaw',
                    files: ['vendor/d3/d3.min.js',
                        'vendor/rickshaw/rickshaw.js',
                        'vendor/rickshaw/rickshaw.min.css',
                        'vendor/angular-rickshaw/rickshaw.js'],
                    serie: true
                },
                {
                    name: 'angular-chartist',
                    files: ['vendor/chartist/dist/chartist.min.css',
                        'vendor/chartist/dist/chartist.js',
                        'vendor/angular-chartist.js/dist/angular-chartist.js'],
                    serie: true
                },
                {
                    name: 'ui.map',
                    files: ['vendor/angular-ui-map/ui-map.js']
                },
                {
                    name: 'datatables',
                    files: ['vendor/datatables/media/css/jquery.dataTables.css',
                        'vendor/datatables/media/js/jquery.dataTables.js',
                        'vendor/angular-datatables/dist/angular-datatables.js'],
                    serie: true
                },
                {
                    name: 'angular-jqcloud',
                    files: ['vendor/jqcloud2/dist/jqcloud.css',
                        'vendor/jqcloud2/dist/jqcloud.js',
                        'vendor/angular-jqcloud/angular-jqcloud.js']
                },
                {
                    name: 'angularGrid',
                    files: ['vendor/ag-grid/dist/angular-grid.css',
                        'vendor/ag-grid/dist/angular-grid.js',
                        'vendor/ag-grid/dist/theme-dark.css',
                        'vendor/ag-grid/dist/theme-fresh.css']
                },
                {
                    name: 'ng-nestable',
                    files: ['vendor/ng-nestable/src/angular-nestable.js',
                        'vendor/nestable/jquery.nestable.js']
                },
                {
                    name: 'akoenig.deckgrid',
                    files: ['vendor/angular-deckgrid/angular-deckgrid.js']
                },
                {
                    name: 'oitozero.ngSweetAlert',
                    files: ['vendor/sweetalert/dist/sweetalert.css',
                        'vendor/sweetalert/dist/sweetalert.min.js',
                        'vendor/angular-sweetalert/SweetAlert.js']
                },
                {
                    name: 'bm.bsTour',
                    files: ['vendor/bootstrap-tour/build/css/bootstrap-tour.css',
                        'vendor/bootstrap-tour/build/js/bootstrap-tour-standalone.js',
                        'vendor/angular-bootstrap-tour/dist/angular-bootstrap-tour.js'],
                    serie: true
                },
                {
                    name: 'ui.knob',
                    files: ['vendor/angular-knob/src/angular-knob.js',
                        'vendor/jquery-knob/dist/jquery.knob.min.js']
                },
                {
                    name: 'easypiechart',
                    files: ['vendor/jquery.easy-pie-chart/dist/angular.easypiechart.min.js']
                },
                {
                    name: 'colorpicker.module',
                    files: ['vendor/angular-bootstrap-colorpicker/css/colorpicker.css',
                        'vendor/angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module.js']
                }
            ]
        });

})();

(function () {
    'use strict';

    angular
        .module('app.loadingbar')
        .config(loadingbarConfig);
    loadingbarConfig.$inject = ['cfpLoadingBarProvider'];

    function loadingbarConfig(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeBar = true;
        cfpLoadingBarProvider.includeSpinner = false;
        cfpLoadingBarProvider.latencyThreshold = 500;
        cfpLoadingBarProvider.parentSelector = '.wrapper > section';
    }
})();
(function () {
    'use strict';

    angular
        .module('app.loadingbar')
        .run(loadingbarRun);
    loadingbarRun.$inject = ['$rootScope', '$timeout', 'cfpLoadingBar'];

    function loadingbarRun($rootScope, $timeout, cfpLoadingBar) {

        // Loading bar transition
        // ----------------------------------- 
        var thBar;
        $rootScope.$on('$stateChangeStart', function () {
            if ($('.wrapper > section').length) // check if bar container exists
                thBar = $timeout(function () {
                    cfpLoadingBar.start();
                }, 0); // sets a latency Threshold
        });
        $rootScope.$on('$stateChangeSuccess', function (event) {
            event.targetScope.$watch('$viewContentLoaded', function () {
                $timeout.cancel(thBar);
                cfpLoadingBar.complete();
            });
        });

    }

})();
(function () {
    'use strict';

    angular
        .module('app.locale')
        .config(localeConfig);
    localeConfig.$inject = ['tmhDynamicLocaleProvider'];

    function localeConfig(tmhDynamicLocaleProvider) {

        tmhDynamicLocaleProvider.localeLocationPattern('vendor/angular-i18n/angular-locale_{{locale}}.js');
        // tmhDynamicLocaleProvider.useStorage('$cookieStore');

    }
})();
/**=========================================================
 * Module: locale.js
 * Demo for locale settings
 =========================================================*/
(function () {
    'use strict';

    angular
        .module('app.locale')
        .controller('LocalizationController', LocalizationController);

    LocalizationController.$inject = ['$rootScope', 'tmhDynamicLocale', '$locale'];

    function LocalizationController($rootScope, tmhDynamicLocale, $locale) {

        activate();

        ////////////////

        function activate() {
            $rootScope.availableLocales = {
                'en': 'English',
                'es': 'Spanish',
                'de': 'German',
                'fr': 'French',
                'ar': 'Arabic',
                'ja': 'Japanese',
                'ko': 'Korean',
                'zh': 'Chinese'
            };

            $rootScope.model = {
                selectedLocale: 'en'
            };

            $rootScope.$locale = $locale;

            $rootScope.changeLocale = tmhDynamicLocale.set;
        }
    }
})();

/**=========================================================
 * Module: demo-pagination.js
 * Provides a simple demo for pagination
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.mailbox')
        .controller('MailboxController', MailboxController);

    function MailboxController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.folders = [
                {
                    name: 'Inbox',
                    folder: 'inbox',
                    alert: 42,
                    icon: 'fa-inbox'
                },
                {
                    name: 'Starred',
                    folder: 'starred',
                    alert: 10,
                    icon: 'fa-star'
                },
                {
                    name: 'Sent',
                    folder: 'sent',
                    alert: 0,
                    icon: 'fa-paper-plane-o'
                },
                {
                    name: 'Draft',
                    folder: 'draft',
                    alert: 5,
                    icon: 'fa-edit'
                },
                {
                    name: 'Trash',
                    folder: 'trash',
                    alert: 0,
                    icon: 'fa-trash'
                }
            ];

            vm.labels = [
                {
                    name: 'Red',
                    color: 'danger'
                },
                {
                    name: 'Pink',
                    color: 'pink'
                },
                {
                    name: 'Blue',
                    color: 'info'
                },
                {
                    name: 'Yellow',
                    color: 'warning'
                }
            ];

            vm.mail = {
                cc: false,
                bcc: false
            };
            // Mailbox editr initial content
            vm.content = '<p>Type something..</p>';
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.mailbox')
        .controller('MailFolderController', MailFolderController);

    MailFolderController.$inject = ['mails', '$stateParams'];

    function MailFolderController(mails, $stateParams) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.folder = {};
            // no filter for inbox
            vm.folder.folder = $stateParams.folder === 'inbox' ? '' : $stateParams.folder;

            mails.all().then(function (mails) {
                vm.mails = mails;
            });
        }
    }
})();

// A RESTful factory for retrieving mails from json file

(function () {
    'use strict';

    angular
        .module('app.mailbox')
        .factory('mails', mails);

    mails.$inject = ['$http'];

    function mails($http) {
        var service = {
            all: all,
            get: get
        };
        return service;

        ////////////////

        function readMails() {
            var path = 'server/mails.json';
            return $http.get(path).then(function (resp) {
                return resp.data.mails;
            });
        }

        function all() {
            return readMails();
        }

        function get(id) {
            return readMails().then(function (mails) {
                for (var i = 0; i < mails.length; i++) {
                    if (+mails[i].id === +id) return mails[i];
                }
                return null;
            });
        }
    }
})();


(function () {
    'use strict';

    angular
        .module('app.mailbox')
        .controller('MailViewController', MailViewController);

    MailViewController.$inject = ['mails', '$stateParams'];

    function MailViewController(mails, $stateParams) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            mails.get($stateParams.mid).then(function (mail) {
                vm.mail = mail;
            });
        }
    }
})();

/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.maps')
        .controller('ModalGmapController', ModalGmapController);

    ModalGmapController.$inject = ['$modal'];

    function ModalGmapController($modal) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.open = function (size) {

                //var modalInstance = 
                $modal.open({
                    templateUrl: '/myModalContent.html',
                    controller: ModalInstanceCtrl,
                    size: size
                });
            };

            // Please note that $modalInstance represents a modal window (instance) dependency.
            // It is not the same as the $modal service used above.

            ModalInstanceCtrl.$inject = ['$scope', '$modalInstance', '$timeout'];

            function ModalInstanceCtrl($scope, $modalInstance, $timeout) {

                $modalInstance.opened.then(function () {
                    var position = new google.maps.LatLng(33.790807, -117.835734);

                    $scope.mapOptionsModal = {
                        zoom: 14,
                        center: position,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };

                    // we use timeout to wait maps to be ready before add a markers
                    $timeout(function () {
                        // 1. Add a marker at the position it was initialized
                        new google.maps.Marker({
                            map: $scope.myMapModal,
                            position: position
                        });
                        // 2. Trigger a resize so the map is redrawed 
                        google.maps.event.trigger($scope.myMapModal, 'resize');
                        // 3. Move to the center if it is misaligned
                        $scope.myMapModal.panTo(position);
                    });

                });

                $scope.ok = function () {
                    $modalInstance.close('closed');
                };

                $scope.cancel = function () {
                    $modalInstance.dismiss('cancel');
                };

            }

        }
    }

})();


(function () {
    'use strict';

    angular
        .module('app.maps')
        .controller('GMapController', GMapController);

    GMapController.$inject = ['$timeout'];

    function GMapController($timeout) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            var position = [
                new google.maps.LatLng(33.790807, -117.835734),
                new google.maps.LatLng(33.790807, -117.835734),
                new google.maps.LatLng(33.790807, -117.835734),
                new google.maps.LatLng(33.790807, -117.835734),
                new google.maps.LatLng(33.787453, -117.835858)
            ];

            vm.addMarker = addMarker;
            // we use timeout to wait maps to be ready before add a markers
            $timeout(function () {
                addMarker(vm.myMap1, position[0]);
                addMarker(vm.myMap2, position[1]);
                addMarker(vm.myMap3, position[2]);
                addMarker(vm.myMap5, position[3]);
            });

            vm.mapOptions1 = {
                zoom: 14,
                center: position[0],
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false
            };

            vm.mapOptions2 = {
                zoom: 19,
                center: position[1],
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            vm.mapOptions3 = {
                zoom: 14,
                center: position[2],
                mapTypeId: google.maps.MapTypeId.SATELLITE
            };

            vm.mapOptions4 = {
                zoom: 14,
                center: position[3],
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            // for multiple markers
            $timeout(function () {
                addMarker(vm.myMap4, position[3]);
                addMarker(vm.myMap4, position[4]);
            });

            // custom map style
            var MapStyles = [{
                'featureType': 'water',
                'stylers': [{
                    'visibility': 'on'
                }, {
                        'color': '#bdd1f9'
                    }]
            }, {
                    'featureType': 'all',
                    'elementType': 'labels.text.fill',
                    'stylers': [{
                        'color': '#334165'
                    }]
                }, {
                    featureType: 'landscape',
                    stylers: [{
                        color: '#e9ebf1'
                    }]
                }, {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#c5c6c6'
                    }]
                }, {
                    featureType: 'road.arterial',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#fff'
                    }]
                }, {
                    featureType: 'road.local',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#fff'
                    }]
                }, {
                    featureType: 'transit',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#d8dbe0'
                    }]
                }, {
                    featureType: 'poi',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#cfd5e0'
                    }]
                }, {
                    featureType: 'administrative',
                    stylers: [{
                        visibility: 'on'
                    }, {
                            lightness: 33
                        }]
                }, {
                    featureType: 'poi.park',
                    elementType: 'labels',
                    stylers: [{
                        visibility: 'on'
                    }, {
                            lightness: 20
                        }]
                }, {
                    featureType: 'road',
                    stylers: [{
                        color: '#d8dbe0',
                        lightness: 20
                    }]
                }];
            vm.mapOptions5 = {
                zoom: 14,
                center: position[3],
                styles: MapStyles,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false
            };

            ///////////////

            function addMarker(map, position) {
                return new google.maps.Marker({
                    map: map,
                    position: position
                });
            }

        }
    }
})();

/**=========================================================
 * Module: vector-map.js.js
 * Init jQuery Vector Map plugin
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.maps')
        .directive('vectorMap', vectorMap);

    vectorMap.$inject = ['VectorMap'];

    function vectorMap(VectorMap) {
        var directive = {
            link: link,
            restrict: 'EA',
            scope: {
                seriesData: '=',
                markersData: '='
            }
        };
        return directive;

        function link(scope, element, attrs) {

            var defaultColors = {
                markerColor: '#23b7e5', // the marker points
                bgColor: 'transparent', // the background
                scaleColors: ['#878c9a'], // the color of the region in the serie
                regionFill: '#bbbec6' // the base region color
            };

            var mapHeight = attrs.height || '300',
                options = {
                    markerColor: attrs.markerColor || defaultColors.markerColor,
                    bgColor: attrs.bgColor || defaultColors.bgColor,
                    scale: attrs.scale || 1,
                    scaleColors: attrs.scaleColors || defaultColors.scaleColors,
                    regionFill: attrs.regionFill || defaultColors.regionFill,
                    mapName: attrs.mapName || 'world_mill_en'
                };

            element.css('height', mapHeight);

            VectorMap.init(element, options, scope.seriesData, scope.markersData);
        }
    }

})();

/**=========================================================
 * Module: vector-map.js
 * Services to initialize vector map plugin
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.maps')
        .service('VectorMap', VectorMap);

    function VectorMap() {
        this.init = init;

        ////////////////

        function init($element, opts, series, markers) {
            $element.vectorMap({
                map: opts.mapName,
                backgroundColor: opts.bgColor,
                zoomMin: 1,
                zoomMax: 8,
                zoomOnScroll: false,
                regionStyle: {
                    initial: {
                        'fill': opts.regionFill,
                        'fill-opacity': 1,
                        'stroke': 'none',
                        'stroke-width': 1.5,
                        'stroke-opacity': 1
                    },
                    hover: {
                        'fill-opacity': 0.8
                    },
                    selected: {
                        fill: 'blue'
                    },
                    selectedHover: {}
                },
                focusOn: {
                    x: 0.4,
                    y: 0.6,
                    scale: opts.scale
                },
                markerStyle: {
                    initial: {
                        fill: opts.markerColor,
                        stroke: opts.markerColor
                    }
                },
                onRegionLabelShow: function (e, el, code) {
                    if (series && series[code])
                        el.html(el.html() + ': ' + series[code] + ' visitors');
                },
                markers: markers,
                series: {
                    regions: [{
                        values: series,
                        scale: opts.scaleColors,
                        normalizeFunction: 'polynomial'
                    }]
                },
            });
        }
    }
})();

/**=========================================================
 * Module: vmaps,js
 * jVector Maps support
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.maps')
        .controller('VectorMapController', VectorMapController);

    function VectorMapController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.seriesData = {
                'CA': 11100, // Canada
                'DE': 2510, // Germany
                'FR': 3710, // France
                'AU': 5710, // Australia
                'GB': 8310, // Great Britain
                'RU': 9310, // Russia
                'BR': 6610, // Brazil
                'IN': 7810, // India
                'CN': 4310, // China
                'US': 839, // USA
                'SA': 410 // Saudi Arabia
            };

            vm.markersData = [
                {
                    latLng: [41.90, 12.45],
                    name: 'Vatican City'
                },
                {
                    latLng: [43.73, 7.41],
                    name: 'Monaco'
                },
                {
                    latLng: [-0.52, 166.93],
                    name: 'Nauru'
                },
                {
                    latLng: [-8.51, 179.21],
                    name: 'Tuvalu'
                },
                {
                    latLng: [7.11, 171.06],
                    name: 'Marshall Islands'
                },
                {
                    latLng: [17.3, -62.73],
                    name: 'Saint Kitts and Nevis'
                },
                {
                    latLng: [3.2, 73.22],
                    name: 'Maldives'
                },
                {
                    latLng: [35.88, 14.5],
                    name: 'Malta'
                },
                {
                    latLng: [41.0, -71.06],
                    name: 'New England'
                },
                {
                    latLng: [12.05, -61.75],
                    name: 'Grenada'
                },
                {
                    latLng: [13.16, -59.55],
                    name: 'Barbados'
                },
                {
                    latLng: [17.11, -61.85],
                    name: 'Antigua and Barbuda'
                },
                {
                    latLng: [-4.61, 55.45],
                    name: 'Seychelles'
                },
                {
                    latLng: [7.35, 134.46],
                    name: 'Palau'
                },
                {
                    latLng: [42.5, 1.51],
                    name: 'Andorra'
                }
            ];
        }
    }
})();


(function () {
    'use strict';
    // Used only for the BottomSheetExample
    angular
        .module('app.material')
        .config(materialConfig);
    materialConfig.$inject = ['$mdIconProvider'];

    function materialConfig($mdIconProvider) {
        $mdIconProvider
            .icon('share-arrow', 'app/img/icons/share-arrow.svg', 24)
            .icon('upload', 'app/img/icons/upload.svg', 24)
            .icon('copy', 'app/img/icons/copy.svg', 24)
            .icon('print', 'app/img/icons/print.svg', 24)
            .icon('hangout', 'app/img/icons/hangout.svg', 24)
            .icon('mail', 'app/img/icons/mail.svg', 24)
            .icon('message', 'app/img/icons/message.svg', 24)
            .icon('copy2', 'app/img/icons/copy2.svg', 24)
            .icon('facebook', 'app/img/icons/facebook.svg', 24)
            .icon('twitter', 'app/img/icons/twitter.svg', 24);
    }
})();


(function () {
    'use strict';

    angular
        .module('app.material')
        .controller('MDAutocompleteCtrl', MDAutocompleteCtrl)
        .controller('MDBottomSheetCtrl', MDBottomSheetCtrl)
        .controller('MDListBottomSheetCtrl', MDListBottomSheetCtrl)
        .controller('MDGridBottomSheetCtrl', MDGridBottomSheetCtrl)
        .controller('MDCheckboxCtrl', MDCheckboxCtrl)
        .controller('MDRadioCtrl', MDRadioCtrl)
        .controller('MDSwitchCtrl', MDSwitchCtrl)
        .controller('MDDialogCtrl', MDDialogCtrl)
        .controller('MDSliderCtrl', MDSliderCtrl)
        .controller('MDSelectCtrl', MDSelectCtrl)
        .controller('MDInputCtrl', MDInputCtrl)
        .controller('MDProgressCtrl', MDProgressCtrl)
        .controller('MDSidenavCtrl', MDSidenavCtrl)
        .controller('MDSubheaderCtrl', MDSubheaderCtrl)
        .controller('MDToastCtrl', MDToastCtrl)
        .controller('ToastCtrl', ToastCtrl)
        .controller('MDTooltipCtrl', MDTooltipCtrl)
        .controller('BottomSheetExample', BottomSheetExample)
        .controller('ListBottomSheetCtrl', ListBottomSheetCtrl)
        .controller('GridBottomSheetCtrl', GridBottomSheetCtrl);

    /*
     MDAutocompleteCtrl
     */
    MDAutocompleteCtrl.$inject = ['$scope', '$timeout', '$q'];

    function MDAutocompleteCtrl($scope, $timeout, $q) {
        var self = this;

        self.states = loadAll();
        self.selectedItem = null;
        self.searchText = null;
        self.querySearch = querySearch;
        self.simulateQuery = false;
        self.isDisabled = false;

        // use $timeout to simulate remote dataservice call
        function querySearch(query) {
            var results = query ? self.states.filter(createFilterFor(query)) : [],
                deferred;
            if (self.simulateQuery) {
                deferred = $q.defer();
                $timeout(function () {
                    deferred.resolve(results);
                }, Math.random() * 1000, false);
                return deferred.promise;
            } else {
                return results;
            }
        }

        function loadAll() {
            var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware, Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana, Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina, North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina, South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia, Wisconsin, Wyoming';

            return allStates.split(/, +/g).map(function (state) {
                return {
                    value: state.toLowerCase(),
                    display: state
                };
            });
        }

        /**
         * Create filter function for a query string
         */
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);

            return function filterFn(state) {
                return (state.value.indexOf(lowercaseQuery) === 0);
            };

        }
    }

    /*
     MDBottomSheetCtrl
     */
    MDBottomSheetCtrl.$inject = ['$scope', '$timeout', '$mdBottomSheet'];

    function MDBottomSheetCtrl($scope, $timeout, $mdBottomSheet) {
        $scope.alert = '';

        $scope.showListBottomSheet = function ($event) {
            $scope.alert = '';
            $mdBottomSheet.show({
                templateUrl: 'bottom-sheet-list-template.html',
                controller: 'ListBottomSheetCtrl',
                targetEvent: $event
            }).then(function (clickedItem) {
                $scope.alert = clickedItem.name + ' clicked!';
            });
        };

        $scope.showGridBottomSheet = function ($event) {
            $scope.alert = '';
            $mdBottomSheet.show({
                templateUrl: 'bottom-sheet-grid-template.html',
                controller: 'GridBottomSheetCtrl',
                targetEvent: $event
            }).then(function (clickedItem) {
                $scope.alert = clickedItem.name + ' clicked!';
            });
        };
    }

    /*
     MDListBottomSheetCtrl
     */
    MDListBottomSheetCtrl.$inject = ['$scope', '$mdBottomSheet'];

    function MDListBottomSheetCtrl($scope, $mdBottomSheet) {

        $scope.items = [
            {
                name: 'Share',
                icon: 'share'
            },
            {
                name: 'Upload',
                icon: 'upload'
            },
            {
                name: 'Copy',
                icon: 'copy'
            },
            {
                name: 'Print this page',
                icon: 'print'
            },
        ];

        $scope.listItemClick = function ($index) {
            var clickedItem = $scope.items[$index];
            $mdBottomSheet.hide(clickedItem);
        };
    }

    /*
     MDGridBottomSheetCtrl
     */
    MDGridBottomSheetCtrl.$inject = ['$scope', '$mdBottomSheet'];

    function MDGridBottomSheetCtrl($scope, $mdBottomSheet) {

        $scope.items = [
            {
                name: 'Hangout',
                icon: 'hangout'
            },
            {
                name: 'Mail',
                icon: 'mail'
            },
            {
                name: 'Message',
                icon: 'message'
            },
            {
                name: 'Copy',
                icon: 'copy'
            },
            {
                name: 'Facebook',
                icon: 'facebook'
            },
            {
                name: 'Twitter',
                icon: 'twitter'
            },
        ];

        $scope.listItemClick = function ($index) {
            var clickedItem = $scope.items[$index];
            $mdBottomSheet.hide(clickedItem);
        };
    }

    /*
     MDCheckboxCtrl
     */
    MDCheckboxCtrl.$inject = ['$scope'];

    function MDCheckboxCtrl($scope) {

        $scope.data = {};
        $scope.data.cb1 = true;
        $scope.data.cb2 = false;
        $scope.data.cb3 = false;
        $scope.data.cb4 = false;
        $scope.data.cb5 = false;
    }

    /*
     MDRadioCtrl
     */
    MDRadioCtrl.$inject = ['$scope'];

    function MDRadioCtrl($scope) {

        $scope.data = {
            group1: 'Banana',
            group2: '2',
            group3: 'avatar-1'
        };

        $scope.avatarData = [{
            id: 'svg-1',
            title: 'avatar 1',
            value: 'avatar-1'
        }, {
                id: 'svg-2',
                title: 'avatar 2',
                value: 'avatar-2'
            }, {
                id: 'svg-3',
                title: 'avatar 3',
                value: 'avatar-3'
            }];

        $scope.radioData = [
            {
                label: 'Apple',
                value: 1
            },
            {
                label: 'Banana',
                value: 2
            },
            {
                label: 'Mango',
                value: '3',
                isDisabled: true
            }
        ];


        $scope.submit = function () {
            alert('submit');
        };

        var vals = ['Apple', 'Banana', 'Mango', 'Grape', 'Melon', 'Strawberry', 'Kiwi'];
        $scope.addItem = function () {
            var rval = vals[Math.floor(Math.random() * vals.length)];
            $scope.radioData.push({
                label: rval,
                value: rval
            });
        };

        $scope.removeItem = function () {
            $scope.radioData.pop();
        };
    }

    /*
     MDSwitchCtrl
     */
    MDSwitchCtrl.$inject = ['$scope'];

    function MDSwitchCtrl($scope) {
        $scope.data = {
            cb1: true,
            cb4: true
        };

        $scope.onChange = function (cbState) {
            $scope.message = 'The switch is now: ' + cbState;
        };
    }

    /*
     MDDialogCtrl
     */
    MDDialogCtrl.$inject = ['$scope', '$mdDialog'];

    function MDDialogCtrl($scope, $mdDialog) {
        $scope.alert = '';

        $scope.showAlert = function (ev) {
            $mdDialog.show(
                $mdDialog.alert()
                    .title('This is an alert title')
                    .content('You can specify some description text in here.')
                    .ariaLabel('Password notification')
                    .ok('Got it!')
                    .targetEvent(ev)
            );
        };

        $scope.showConfirm = function (ev) {
            var confirm = $mdDialog.confirm()
                .title('Would you like to delete your debt?')
                .content('All of the banks have agreed to forgive you your debts.')
                .ariaLabel('Lucky day')
                .ok('Please do it!')
                .cancel('Sounds like a scam')
                .targetEvent(ev);

            $mdDialog.show(confirm).then(function () {
                $scope.alert = 'You decided to get rid of your debt.';
            }, function () {
                $scope.alert = 'You decided to keep your debt.';
            });
        };

        $scope.showAdvanced = function (ev) {
            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'dialog1.tmpl.html',
                targetEvent: ev,
            })
                .then(function (answer) {
                    $scope.alert = 'You said the information was \'' + answer + '\'.';
                }, function () {
                    $scope.alert = 'You cancelled the dialog.';
                });
        };
        DialogController.$inject = ['$scope', '$mdDialog'];

        function DialogController($scope, $mdDialog) {
            $scope.hide = function () {
                $mdDialog.hide();
            };

            $scope.cancel = function () {
                $mdDialog.cancel();
            };

            $scope.answer = function (answer) {
                $mdDialog.hide(answer);
            };
        }
    }

    /*
     MDSliderCtrl
     */
    MDSliderCtrl.$inject = ['$scope'];

    function MDSliderCtrl($scope) {

        $scope.color = {
            red: Math.floor(Math.random() * 255),
            green: Math.floor(Math.random() * 255),
            blue: Math.floor(Math.random() * 255)
        };

        $scope.rating1 = 3;
        $scope.rating2 = 2;
        $scope.rating3 = 4;

        $scope.disabled1 = 0;
        $scope.disabled2 = 70;
    }

    /*
     MDSelectCtrl
     */
    function MDSelectCtrl() {

        var vm = this;

        vm.userState = '';
        vm.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
            'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
            'WY').split(' ').map(function (state) {
                return {
                    abbrev: state
                };
            });

        vm.sizes = [
            'small (12-inch)',
            'medium (14-inch)',
            'large (16-inch)',
            'insane (42-inch)'
        ];
        vm.toppings = [
            {
                category: 'meat',
                name: 'Pepperoni'
            },
            {
                category: 'meat',
                name: 'Sausage'
            },
            {
                category: 'meat',
                name: 'Ground Beef'
            },
            {
                category: 'meat',
                name: 'Bacon'
            },
            {
                category: 'veg',
                name: 'Mushrooms'
            },
            {
                category: 'veg',
                name: 'Onion'
            },
            {
                category: 'veg',
                name: 'Green Pepper'
            },
            {
                category: 'veg',
                name: 'Green Olives'
            }
        ];
    }

    /*
     MDInputCtrl
     */
    MDInputCtrl.$inject = ['$scope'];

    function MDInputCtrl($scope) {
        $scope.user = {
            title: 'Developer',
            email: 'ipsum@lorem.com',
            firstName: '',
            lastName: '',
            company: 'Google',
            address: '1600 Amphitheatre Pkwy',
            city: 'Mountain View',
            state: 'CA',
            biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
            postalCode: '94043'
        };
        $scope.project = {
            description: 'Nuclear Missile Defense System',
            clientName: 'Bill Clinton',
            rate: 500
        };
    }

    /*
     MDProgressCtrl
     */
    MDProgressCtrl.$inject = ['$scope', '$interval'];

    function MDProgressCtrl($scope, $interval) {
        $scope.mode = 'query';
        $scope.determinateValue = 30;
        $scope.determinateValue2 = 30;

        $interval(function () {
            $scope.determinateValue += 1;
            $scope.determinateValue2 += 1.5;
            if ($scope.determinateValue > 100) {
                $scope.determinateValue = 30;
                $scope.determinateValue2 = 30;
            }
        }, 100, 0, true);

        $interval(function () {
            $scope.mode = ($scope.mode === 'query' ? 'determinate' : 'query');
        }, 7200, 0, true);
    }

    /*
     MDSidenavCtrl
     */
    MDSidenavCtrl.$inject = ['$scope', '$timeout', '$mdSidenav', '$log'];

    function MDSidenavCtrl($scope, $timeout, $mdSidenav, $log) {
        $scope.toggleLeft = function () {
            $mdSidenav('left').toggle()
                .then(function () {
                    $log.debug('toggle left is done');
                });
        };
        $scope.toggleRight = function () {
            $mdSidenav('right').toggle()
                .then(function () {
                    $log.debug('toggle RIGHT is done');
                });
        };
        $scope.closeLeft = function () {
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug('close LEFT is done');
                });

        };
        $scope.closeRight = function () {
            $mdSidenav('right').close()
                .then(function () {
                    $log.debug('close RIGHT is done');
                });
        };
    }

    /*
     MDSubheaderCtrl
     */
    MDSubheaderCtrl.$inject = ['$scope'];

    function MDSubheaderCtrl($scope) {
        $scope.messages = [
            {
                face: 'app/img/user/10.jpg',
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: 'I\'ll be in your neighborhood doing errands'
            },
            {
                face: 'app/img/user/01.jpg',
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: 'I\'ll be in your neighborhood doing errands'
            },
            {
                face: 'app/img/user/02.jpg',
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: 'I\'ll be in your neighborhood doing errands'
            },
            {
                face: 'app/img/user/03.jpg',
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: 'I\'ll be in your neighborhood doing errands'
            },
            {
                face: 'app/img/user/04.jpg',
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: 'I\'ll be in your neighborhood doing errands'
            },
            {
                face: 'app/img/user/05.jpg',
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: 'I\'ll be in your neighborhood doing errands'
            },
            {
                face: 'app/img/user/06.jpg',
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: 'I\'ll be in your neighborhood doing errands'
            },
            {
                face: 'app/img/user/07.jpg',
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: 'I\'ll be in your neighborhood doing errands'
            },
            {
                face: 'app/img/user/08.jpg',
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: 'I\'ll be in your neighborhood doing errands'
            },
            {
                face: 'app/img/user/09.jpg',
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: 'I\'ll be in your neighborhood doing errands'
            },
            {
                face: 'app/img/user/11.jpg',
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: 'I\'ll be in your neighborhood doing errands'
            },
        ];
    }

    /*
     MDToastCtrl
     */
    MDToastCtrl.$inject = ['$scope', '$mdToast'];

    function MDToastCtrl($scope, $mdToast) {

        $scope.toastPosition = {
            bottom: false,
            top: true,
            left: false,
            right: true
        };

        $scope.getToastPosition = function () {
            return Object.keys($scope.toastPosition)
                .filter(function (pos) {
                    return $scope.toastPosition[pos];
                })
                .join(' ');
        };

        $scope.showCustomToast = function () {
            $mdToast.show({
                controller: 'ToastCtrl',
                templateUrl: 'toast-template.html',
                hideDelay: 60000,
                parent: '#toastcontainer',
                position: $scope.getToastPosition()
            });
        };

        $scope.showSimpleToast = function () {
            $mdToast.show(
                $mdToast.simple()
                    .content('Simple Toast!')
                    .position($scope.getToastPosition())
                    .hideDelay(30000)
            );
        };

        $scope.showActionToast = function () {
            var toast = $mdToast.simple()
                .content('Action Toast!')
                .action('OK')
                .highlightAction(false)
                .position($scope.getToastPosition());

            $mdToast.show(toast).then(function () {
                alert('You clicked \'OK\'.');
            });
        };
    }

    /*
     ToastCtrl
     */
    ToastCtrl.$inject = ['$scope', '$mdToast'];

    function ToastCtrl($scope, $mdToast) {
        $scope.closeToast = function () {
            $mdToast.hide();
        };
    }

    /*
     MDTooltipCtrl
     */
    MDTooltipCtrl.$inject = ['$scope'];

    function MDTooltipCtrl($scope) {
        $scope.demo = {};
    }

    /*
     BottomSheetExample
     */
    BottomSheetExample.$inject = ['$scope', '$timeout', '$mdBottomSheet'];

    function BottomSheetExample($scope, $timeout, $mdBottomSheet) {
        $scope.alert = '';

        $scope.showListBottomSheet = function ($event) {
            $scope.alert = '';
            $mdBottomSheet.show({
                templateUrl: 'bottom-sheet-list-template.html',
                controller: 'ListBottomSheetCtrl',
                targetEvent: $event,
                parent: '#bottomsheetcontainer'
            }).then(function (clickedItem) {
                $scope.alert = clickedItem.name + ' clicked!';
            });
        };

        $scope.showGridBottomSheet = function ($event) {
            $scope.alert = '';
            $mdBottomSheet.show({
                templateUrl: 'bottom-sheet-grid-template.html',
                controller: 'GridBottomSheetCtrl',
                targetEvent: $event,
                parent: '#bottomsheetcontainer'
            }).then(function (clickedItem) {
                $scope.alert = clickedItem.name + ' clicked!';
            });
        };
    }

    /*
     ListBottomSheetCtrl
     */
    ListBottomSheetCtrl.$inject = ['$scope', '$mdBottomSheet'];

    function ListBottomSheetCtrl($scope, $mdBottomSheet) {

        $scope.items = [
            {
                name: 'Share',
                icon: 'share-arrow'
            },
            {
                name: 'Upload',
                icon: 'upload'
            },
            {
                name: 'Copy',
                icon: 'copy'
            },
            {
                name: 'Print this page',
                icon: 'print'
            },
        ];

        $scope.listItemClick = function ($index) {
            var clickedItem = $scope.items[$index];
            $mdBottomSheet.hide(clickedItem);
        };
    }

    /*
     GridBottomSheetCtrl
     */
    GridBottomSheetCtrl.$inject = ['$scope', '$mdBottomSheet'];

    function GridBottomSheetCtrl($scope, $mdBottomSheet) {
        $scope.items = [
            {
                name: 'Hangout',
                icon: 'hangout'
            },
            {
                name: 'Mail',
                icon: 'mail'
            },
            {
                name: 'Message',
                icon: 'message'
            },
            {
                name: 'Copy',
                icon: 'copy2'
            },
            {
                name: 'Facebook',
                icon: 'facebook'
            },
            {
                name: 'Twitter',
                icon: 'twitter'
            },
        ];

        $scope.listItemClick = function ($index) {
            var clickedItem = $scope.items[$index];
            $mdBottomSheet.hide(clickedItem);
        };
    }


})();

(function () {
    'use strict';
    // Used only for the BottomSheetExample
    angular
        .module('app.material')
        .run(materialRun);
    materialRun.$inject = ['$http', '$templateCache'];

    function materialRun($http, $templateCache) {
        var urls = [
            'app/img/icons/share-arrow.svg',
            'app/img/icons/upload.svg',
            'app/img/icons/copy.svg',
            'app/img/icons/print.svg',
            'app/img/icons/hangout.svg',
            'app/img/icons/mail.svg',
            'app/img/icons/message.svg',
            'app/img/icons/copy2.svg',
            'app/img/icons/facebook.svg',
            'app/img/icons/twitter.svg'
        ];

        angular.forEach(urls, function (url) {
            $http.get(url, {
                cache: $templateCache
            });
        });

    }

})();

(function () {
    'use strict';

    angular
        .module('app.material')
        .controller('MaterialWidgetsController', MaterialWidgetsController);

    MaterialWidgetsController.$inject = ['Colors'];

    function MaterialWidgetsController(Colors) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.sparkOption1 = {
                type: 'line',
                width: '100%',
                height: '140px',
                tooltipOffsetX: -20,
                tooltipOffsetY: 20,
                lineColor: Colors.byName('success'),
                fillColor: Colors.byName('success'),
                spotColor: 'rgba(0,0,0,.26)',
                minSpotColor: 'rgba(0,0,0,.26)',
                maxSpotColor: 'rgba(0,0,0,.26)',
                highlightSpotColor: 'rgba(0,0,0,.26)',
                highlightLineColor: 'rgba(0,0,0,.26)',
                spotRadius: 2,
                tooltipPrefix: '',
                tooltipSuffix: ' Visits',
                tooltipFormat: '{{prefix}}{{y}}{{suffix}}',
                chartRangeMin: 0,
                resize: true
            };

            vm.sparkOptionPie = {
                type: 'pie',
                width: '2em',
                height: '2em',
                sliceColors: [Colors.byName('success'), Colors.byName('gray-light')]
            };

        }
    }
})();
/**=========================================================
 * Module: navbar-search.js
 * Navbar search toggler * Auto dismiss on ESC key
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.navsearch')
        .directive('searchOpen', searchOpen)
        .directive('searchDismiss', searchDismiss);

    //
    // directives definition
    // 

    function searchOpen() {
        var directive = {
            controller: searchOpenController,
            restrict: 'A'
        };
        return directive;

    }

    function searchDismiss() {
        var directive = {
            controller: searchDismissController,
            restrict: 'A'
        };
        return directive;

    }

    //
    // Contrller definition
    // 

    searchOpenController.$inject = ['$scope', '$element', 'NavSearch'];

    function searchOpenController($scope, $element, NavSearch) {
        $element
            .on('click', function (e) {
                e.stopPropagation();
            })
            .on('click', NavSearch.toggle);
    }

    searchDismissController.$inject = ['$scope', '$element', 'NavSearch'];

    function searchDismissController($scope, $element, NavSearch) {

        var inputSelector = '.navbar-form input[type="text"]';

        $(inputSelector)
            .on('click', function (e) {
                e.stopPropagation();
            })
            .on('keyup', function (e) {
                if (e.keyCode === 27) // ESC
                    NavSearch.dismiss();
            });

        // click anywhere closes the search
        $(document).on('click', NavSearch.dismiss);
        // dismissable options
        $element
            .on('click', function (e) {
                e.stopPropagation();
            })
            .on('click', NavSearch.dismiss);
    }

})();


/**=========================================================
 * Module: nav-search.js
 * Services to share navbar search functions
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.navsearch')
        .service('NavSearch', NavSearch);

    function NavSearch() {
        this.toggle = toggle;
        this.dismiss = dismiss;

        ////////////////

        var navbarFormSelector = 'form.navbar-form';

        function toggle() {
            var navbarForm = $(navbarFormSelector);

            navbarForm.toggleClass('open');

            var isOpen = navbarForm.hasClass('open');

            navbarForm.find('input')[isOpen ? 'focus' : 'blur']();
        }

        function dismiss() {
            $(navbarFormSelector)
                .removeClass('open') // Close control
                .find('input[type="text"]').blur() // remove focus
                .val('') // Empty input
                ;
        }
    }
})();

/**=========================================================
 * Module: demo-notify.js
 * Provides a simple demo for notify
 =========================================================*/
(function () {
    'use strict';

    angular
        .module('app.notify')
        .controller('NotifyDemoCtrl', NotifyDemoCtrl);

    NotifyDemoCtrl.$inject = ['Notify', '$timeout'];

    function NotifyDemoCtrl(Notify, $timeout) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.msgHtml = '<em class="fa fa-check"></em> Message with icon..';

            vm.notifyMsg = 'Some messages here..';
            vm.notifyOpts = {
                status: 'danger',
                pos: 'bottom-center'
            };

            // Service usage example
            $timeout(function () {

                Notify.alert(
                    'This is a custom message from notify..', {
                        status: 'success'
                    }
                );

            }, 500);
        }
    }
})();

/**=========================================================
 * Module: notify.js
 * Directive for notify plugin
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.notify')
        .directive('notify', notify);

    notify.$inject = ['$window', 'Notify'];

    function notify($window, Notify) {

        var directive = {
            link: link,
            restrict: 'A',
            scope: {
                options: '=',
                message: '='
            }
        };
        return directive;

        function link(scope, element) {

            element.on('click', function (e) {
                e.preventDefault();
                Notify.alert(scope.message, scope.options);
            });
        }

    }

})();


/**=========================================================
 * Module: notify.js
 * Create a notifications that fade out automatically.
 * Based on Notify addon from UIKit (http://getuikit.com/docs/addons_notify.html)
 =========================================================*/

(function () {
    'use strict';
    angular
        .module('app.notify')
        .service('Notify', Notify);

    Notify.$inject = ['$timeout'];

    function Notify($timeout) {

        this.alert = notifyAlert;

        ////////////////

        function notifyAlert(msg, opts) {
            if (msg) {
                $timeout(function () {
                    $.notify(msg, opts || {});
                });
            }
        }
    }

})();

/**
 * Notify Addon definition as jQuery plugin
 * Adapted version to work with Bootstrap classes
 * More information http://getuikit.com/docs/addons_notify.html
 */
(function ($) {
    'use strict';
    var containers = {},
        messages = {},
        notify = function (options) {
            if ($.type(options) === 'string') {
                options = {
                    message: options
                };
            }
            if (arguments[1]) {
                options = $.extend(options, $.type(arguments[1]) === 'string' ? {
                    status: arguments[1]
                } : arguments[1]);
            }
            return (new Message(options)).show();
        },
        closeAll = function (group, instantly) {
            var id;
            if (group) {
                for (id in messages) {
                    if (group === messages[id].group) messages[id].close(instantly);
                }
            } else {
                for (id in messages) {
                    messages[id].close(instantly);
                }
            }
        };
    var Message = function (options) {
        // var $this = this;
        this.options = $.extend({}, Message.defaults, options);
        this.uuid = 'ID' + (new Date().getTime()) + 'RAND' + (Math.ceil(Math.random() * 100000));
        this.element = $([
            // @geedmo: alert-dismissable enables bs close icon
            '<div class="uk-notify-message alert-dismissable">',
            '<a class="close">&times;</a>',
            '<div>' + this.options.message + '</div>',
            '</div>'
        ].join('')).data('notifyMessage', this);
        // status
        if (this.options.status) {
            this.element.addClass('alert alert-' + this.options.status);
            this.currentstatus = this.options.status;
        }
        this.group = this.options.group;
        messages[this.uuid] = this;
        if (!containers[this.options.pos]) {
            containers[this.options.pos] = $('<div class="uk-notify uk-notify-' + this.options.pos + '"></div>').appendTo('body').on('click', '.uk-notify-message', function () {
                $(this).data('notifyMessage').close();
            });
        }
    };
    $.extend(Message.prototype, {
        uuid: false,
        element: false,
        timout: false,
        currentstatus: '',
        group: false,
        show: function () {
            if (this.element.is(':visible')) return;
            var $this = this;
            containers[this.options.pos].show().prepend(this.element);
            var marginbottom = parseInt(this.element.css('margin-bottom'), 10);
            this.element.css({
                'opacity': 0,
                'margin-top': -1 * this.element.outerHeight(),
                'margin-bottom': 0
            }).animate({
                'opacity': 1,
                'margin-top': 0,
                'margin-bottom': marginbottom
            }, function () {
                if ($this.options.timeout) {
                    var closefn = function () {
                        $this.close();
                    };
                    $this.timeout = setTimeout(closefn, $this.options.timeout);
                    $this.element.hover(
                        function () {
                            clearTimeout($this.timeout);
                        },
                        function () {
                            $this.timeout = setTimeout(closefn, $this.options.timeout);
                        }
                    );
                }
            });
            return this;
        },
        close: function (instantly) {
            var $this = this,
                finalize = function () {
                    $this.element.remove();
                    if (!containers[$this.options.pos].children().length) {
                        containers[$this.options.pos].hide();
                    }
                    delete messages[$this.uuid];
                };
            if (this.timeout) clearTimeout(this.timeout);
            if (instantly) {
                finalize();
            } else {
                this.element.animate({
                    'opacity': 0,
                    'margin-top': -1 * this.element.outerHeight(),
                    'margin-bottom': 0
                }, function () {
                    finalize();
                });
            }
        },
        content: function (html) {
            var container = this.element.find('>div');
            if (!html) {
                return container.html();
            }
            container.html(html);
            return this;
        },
        status: function (status) {
            if (!status) {
                return this.currentstatus;
            }
            this.element.removeClass('alert alert-' + this.currentstatus).addClass('alert alert-' + status);
            this.currentstatus = status;
            return this;
        }
    });
    Message.defaults = {
        message: '',
        status: 'normal',
        timeout: 5000,
        group: null,
        pos: 'top-center'
    };

    $.notify = notify;
    $.notify.message = Message;
    $.notify.closeAll = closeAll;

    return notify;
} (jQuery));

/**=========================================================
 * Module: access-login.js
 * Demo for login api
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.pages')
        .controller('LoginFormController', LoginFormController);

    LoginFormController.$inject = ['$http', '$state'];

    function LoginFormController($http, $state) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            // bind here all data from the form
            vm.account = {};
            // place the message if something goes wrong
            vm.authMsg = '';

            vm.login = function () {
                vm.authMsg = '';

                if (vm.loginForm.$valid) {

                    $http
                        .post('api/account/login', {
                            email: vm.account.email,
                            password: vm.account.password
                        })
                        .then(function (response) {
                            // assumes if ok, response is an object with some data, if not, a string with error
                            // customize according to your api
                            if (!response.account) {
                                vm.authMsg = 'Incorrect credentials.';
                            } else {
                                $state.go('app.dashboard');
                            }
                        }, function () {
                            vm.authMsg = 'Server Request Error';
                        });
                } else {
                    // set as dirty if the user click directly to login so we show the validation messages
                    /*jshint -W106*/
                    vm.loginForm.account_email.$dirty = true;
                    vm.loginForm.account_password.$dirty = true;
                }
            };
        }
    }
})();

/**=========================================================
 * Module: access-register.js
 * Demo for register account api
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.pages')
        .controller('RegisterFormController', RegisterFormController);

    RegisterFormController.$inject = ['$http', '$state'];

    function RegisterFormController($http, $state) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            // bind here all data from the form
            vm.account = {};
            // place the message if something goes wrong
            vm.authMsg = '';

            vm.register = function () {
                vm.authMsg = '';

                if (vm.registerForm.$valid) {

                    $http
                        .post('api/account/register', {
                            email: vm.account.email,
                            password: vm.account.password
                        })
                        .then(function (response) {
                            // assumes if ok, response is an object with some data, if not, a string with error
                            // customize according to your api
                            if (!response.account) {
                                vm.authMsg = response;
                            } else {
                                $state.go('app.dashboard');
                            }
                        }, function () {
                            vm.authMsg = 'Server Request Error';
                        });
                } else {
                    // set as dirty if the user click directly to login so we show the validation messages
                    /*jshint -W106*/
                    vm.registerForm.account_email.$dirty = true;
                    vm.registerForm.account_password.$dirty = true;
                    vm.registerForm.account_agreed.$dirty = true;

                }
            };
        }
    }
})();

/**=========================================================
 * Collapse panels * [panel-collapse]
 =========================================================*/
(function () {
    'use strict';

    angular
        .module('app.panels')
        .directive('panelCollapse', panelCollapse);

    function panelCollapse() {
        var directive = {
            controller: Controller,
            restrict: 'A',
            scope: false
        };
        return directive;
    }

    Controller.$inject = ['$scope', '$element', '$timeout', '$localStorage'];

    function Controller($scope, $element, $timeout, $localStorage) {
        var storageKeyName = 'panelState';

        // Prepare the panel to be collapsible
        var $elem = $($element),
            parent = $elem.closest('.panel'), // find the first parent panel
            panelId = parent.attr('id');

        // Load the saved state if exists
        var currentState = loadPanelState(panelId);
        if (typeof currentState !== 'undefined') {
            $timeout(function () {
                $scope[panelId] = currentState;
            },
                10);
        }

        // bind events to switch icons
        $element.bind('click', function (e) {
            e.preventDefault();
            savePanelState(panelId, !$scope[panelId]);

        });

        // Controller helpers
        function savePanelState(id, state) {
            if (!id) return false;
            var data = angular.fromJson($localStorage[storageKeyName]);
            if (!data) {
                data = {};
            }
            data[id] = state;
            $localStorage[storageKeyName] = angular.toJson(data);
        }

        function loadPanelState(id) {
            if (!id) return false;
            var data = angular.fromJson($localStorage[storageKeyName]);
            if (data) {
                return data[id];
            }
        }
    }

})();

/**=========================================================
 * Dismiss panels * [panel-dismiss]
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.panels')
        .directive('panelDismiss', panelDismiss);

    function panelDismiss() {

        var directive = {
            controller: Controller,
            restrict: 'A'
        };
        return directive;

    }

    Controller.$inject = ['$scope', '$element', '$q', 'Utils'];

    function Controller($scope, $element, $q, Utils) {
        var removeEvent = 'panel-remove',
            removedEvent = 'panel-removed';

        $element.on('click', function (e) {
            e.preventDefault();

            // find the first parent panel
            var parent = $(this).closest('.panel');

            removeElement();

            function removeElement() {
                var deferred = $q.defer();
                var promise = deferred.promise;

                // Communicate event destroying panel
                $scope.$emit(removeEvent, parent.attr('id'), deferred);
                promise.then(destroyMiddleware);
            }

            // Run the animation before destroy the panel
            function destroyMiddleware() {
                if (Utils.support.animation) {
                    parent.animo({
                        animation: 'bounceOut'
                    }, destroyPanel);
                } else destroyPanel();
            }

            function destroyPanel() {

                var col = parent.parent();
                parent.remove();
                // remove the parent if it is a row and is empty and not a sortable (portlet)
                col
                    .filter(function () {
                        var el = $(this);
                        return (el.is('[class*="col-"]:not(.sortable)') && el.children('*').length === 0);
                    }).remove();

                // Communicate event destroyed panel
                $scope.$emit(removedEvent, parent.attr('id'));

            }

        });
    }
})();


/**=========================================================
 * Refresh panels
 * [panel-refresh] * [data-spinner="standard"]
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.panels')
        .directive('panelRefresh', panelRefresh);

    function panelRefresh() {
        var directive = {
            controller: Controller,
            restrict: 'A',
            scope: false
        };
        return directive;

    }

    Controller.$inject = ['$scope', '$element'];

    function Controller($scope, $element) {
        var refreshEvent = 'panel-refresh',
            whirlClass = 'whirl',
            defaultSpinner = 'standard';

        // catch clicks to toggle panel refresh
        $element.on('click', function (e) {
            e.preventDefault();

            var $this = $(this),
                panel = $this.parents('.panel').eq(0),
                spinner = $this.data('spinner') || defaultSpinner;

            // start showing the spinner
            panel.addClass(whirlClass + ' ' + spinner);

            // Emit event when refresh clicked
            $scope.$emit(refreshEvent, panel.attr('id'));

        });

        // listen to remove spinner
        $scope.$on('removeSpinner', removeSpinner);

        // method to clear the spinner when done
        function removeSpinner(ev, id) {
            if (!id) return;
            var newid = id.charAt(0) === '#' ? id : ('#' + id);
            angular
                .element(newid)
                .removeClass(whirlClass);
        }
    }
})();


/**=========================================================
 * Module panel-tools.js
 * Directive tools to control panels.
 * Allows collapse, refresh and dismiss (remove)
 * Saves panel state in browser storage
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.panels')
        .directive('paneltool', paneltool);

    paneltool.$inject = ['$compile', '$timeout'];

    function paneltool($compile, $timeout) {
        var directive = {
            link: link,
            restrict: 'E',
            scope: false
        };
        return directive;

        function link(scope, element, attrs) {

            var templates = {
                /* jshint multistr: true */
                collapse: '<a href="#" panel-collapse="" tooltip="Collapse Panel" ng-click="{{panelId}} = !{{panelId}}"> \
                        <em ng-show="{{panelId}}" class="fa fa-plus"></em> \
                        <em ng-show="!{{panelId}}" class="fa fa-minus"></em> \
                      </a>',
                dismiss: '<a href="#" panel-dismiss="" tooltip="Close Panel">\
                       <em class="fa fa-times"></em>\
                     </a>',
                refresh: '<a href="#" panel-refresh="" data-spinner="{{spinner}}" tooltip="Refresh Panel">\
                       <em class="fa fa-refresh"></em>\
                     </a>'
            };

            var tools = scope.panelTools || attrs;

            $timeout(function () {
                element.html(getTemplate(element, tools)).show();
                $compile(element.contents())(scope);

                element.addClass('pull-right');
            });

            function getTemplate(elem, attrs) {
                var temp = '';
                attrs = attrs || {};
                if (attrs.toolCollapse)
                    temp += templates.collapse.replace(/{{panelId}}/g, (elem.parent().parent().attr('id'))).replace(/{{conditions}}/g, (attrs.toolColapseConditions));
                if (attrs.toolDismiss)
                    temp += templates.dismiss;
                if (attrs.toolRefresh)
                    temp += templates.refresh.replace(/{{spinner}}/g, attrs.toolRefresh);
                return temp;
            }
        } // link
    }

})();

/**=========================================================
 * Module: demo-panels.js
 * Provides a simple demo for panel actions
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.panels')
        .controller('PanelsCtrl', PanelsCtrl);

    PanelsCtrl.$inject = ['$scope', '$timeout'];

    function PanelsCtrl($scope, $timeout) {

        activate();

        ////////////////

        function activate() {

            // PANEL COLLAPSE EVENTS
            // ----------------------------------- 

            // We can use panel id name for the boolean flag to [un]collapse the panel
            $scope.$watch('panelDemo1', function (newVal) {

                console.log('panelDemo1 collapsed: ' + newVal);

            });


            // PANEL DISMISS EVENTS
            // ----------------------------------- 

            // Before remove panel
            $scope.$on('panel-remove', function (event, id, deferred) {

                console.log('Panel #' + id + ' removing');

                // Here is obligatory to call the resolve() if we pretend to remove the panel finally
                // Not calling resolve() will NOT remove the panel
                // It's up to your app to decide if panel should be removed or not
                deferred.resolve();

            });

            // Panel removed ( only if above was resolved() )
            $scope.$on('panel-removed', function (event, id) {

                console.log('Panel #' + id + ' removed');

            });


            // PANEL REFRESH EVENTS
            // ----------------------------------- 

            $scope.$on('panel-refresh', function (event, id) {
                var secs = 3;

                console.log('Refreshing during ' + secs + 's #' + id);

                $timeout(function () {
                    // directive listen for to remove the spinner 
                    // after we end up to perform own operations
                    $scope.$broadcast('removeSpinner', id);

                    console.log('Refreshed #' + id);

                }, 3000);

            });

            // PANELS VIA NG-REPEAT
            // ----------------------------------- 

            $scope.panels = [
                {
                    id: 'panelRepeat1',
                    title: 'Panel Title 1',
                    body: 'Nulla eget lorem leo, sit amet elementum lorem. '
                },
                {
                    id: 'panelRepeat2',
                    title: 'Panel Title 2',
                    body: 'Nulla eget lorem leo, sit amet elementum lorem. '
                },
                {
                    id: 'panelRepeat3',
                    title: 'Panel Title 3',
                    body: 'Nulla eget lorem leo, sit amet elementum lorem. '
                }
            ];
        }

    } //PanelsCtrl

})();


/**=========================================================
 * Drag and drop any panel based on jQueryUI portlets
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.panels')
        .directive('portlet', portlet);

    portlet.$inject = ['$timeout', '$localStorage'];

    function portlet($timeout, $localStorage) {
        var storageKeyName = 'portletState';

        return {
            restrict: 'A',
            link: link
        };

        /////////////

        function link(scope, element) {

            // not compatible with jquery sortable
            if (!$.fn.sortable) return;

            element.sortable({
                connectWith: '[portlet]', // same like directive 
                items: 'div.panel',
                handle: '.portlet-handler',
                opacity: 0.7,
                placeholder: 'portlet box-placeholder',
                cancel: '.portlet-cancel',
                forcePlaceholderSize: true,
                iframeFix: false,
                tolerance: 'pointer',
                helper: 'original',
                revert: 200,
                forceHelperSize: true,
                update: savePortletOrder,
                create: loadPortletOrder
            });

        }


        function savePortletOrder(event /*, ui*/) {
            var self = event.target;
            var data = angular.fromJson($localStorage[storageKeyName]);

            if (!data) {
                data = {};
            }

            data[self.id] = $(self).sortable('toArray');

            if (data) {
                $timeout(function () {
                    $localStorage[storageKeyName] = angular.toJson(data);
                });
            }
        }

        function loadPortletOrder(event) {
            var self = event.target;
            var data = angular.fromJson($localStorage[storageKeyName]);

            if (data) {

                var porletId = self.id,
                    panels = data[porletId];

                if (panels) {
                    var portlet = $('#' + porletId);

                    $.each(panels, function (index, value) {
                        $('#' + value).appendTo(portlet);
                    });
                }

            }
        }

    }

})();

(function () {
    'use strict';

    angular
        .module('app.preloader')
        .directive('preloader', preloader);

    preloader.$inject = ['$animate', '$timeout', '$q', '$rootScope'];

    function preloader($animate, $timeout, $q, $rootScope) {

        var directive = {
            restrict: 'EAC',
            template: '<div class="preloader-progress">' +
            '<div class="preloader-progress-bar" ' +
            'ng-style="{width: loadCounter + \'%\'}"></div>' +
            '</div>',
            link: link
        };
        return directive;

        ///////

        function link(scope, el) {

            scope.loadCounter = 0;

            var counter = 0,
                timeout;

            // disables scrollbar
            angular.element('body').css('overflow', 'hidden');
            // ensure class is present for styling
            el.addClass('preloader');

            appReady().then(endCounter);

            timeout = $timeout(startCounter);

            ///////

            function startCounter() {

                var remaining = 100 - counter;
                counter = counter + (0.015 * Math.pow(1 - Math.sqrt(remaining), 2));

                scope.loadCounter = parseInt(counter, 10);

                timeout = $timeout(startCounter, 20);
            }

            function endCounter() {

                $timeout.cancel(timeout);

                scope.loadCounter = 100;

                $timeout(function () {
                    // animate preloader hiding
                    $animate.addClass(el, 'preloader-hidden');
                    // retore scrollbar
                    angular.element('body').css('overflow', '');
                }, 300);
            }

            function appReady() {
                var deferred = $q.defer();
                var viewsLoaded = 0;
                // if this doesn't sync with the real app ready
                // a custom event must be used instead
                var off = scope.$on('$viewContentLoaded', function () {

                    viewsLoaded++;


                    // we know there are at least two views to be loaded 
                    // before the app is ready (1-index.html 2-app*.html)
                    if (viewsLoaded === 1 && (!$rootScope.globals.currentUser || !$rootScope.$storage.currentUser)) {
                        // with resolve this fires only once
                        $timeout(function () {
                            deferred.resolve();
                        }, 3000);

                        off();
                    } else if (viewsLoaded === 2) {
                        // with resolve this fires only once
                        $timeout(function () {
                            deferred.resolve();
                        }, 3000);

                        off();
                    }

                });

                return deferred.promise;
            }

        } //link
    }

})();
/**=========================================================
 * Module: helpers.js
 * Provides helper functions for routes definition
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.routes')
        .provider('RouteHelpers', RouteHelpersProvider);

    RouteHelpersProvider.$inject = ['APP_REQUIRES'];

    function RouteHelpersProvider(APP_REQUIRES) {

        /* jshint validthis:true */
        return {
            // provider access level
            basepath: basepath,
            resolveFor: resolveFor,
            // controller access level
            $get: function () {
                return {
                    basepath: basepath,
                    resolveFor: resolveFor
                };
            }
        };

        // Set here the base of the relative path
        // for all app views
        function basepath(uri) {
            return 'app/views/' + uri;
        }

        // Generates a resolve object by passing script names
        // previously configured in constant.APP_REQUIRES
        function resolveFor() {
            var _args = arguments;
            return {
                deps: ['$ocLazyLoad', '$q', function ($ocLL, $q) {
                    // Creates a promise chain for each argument
                    var promise = $q.when(1); // empty promise
                    for (var i = 0, len = _args.length; i < len; i++) {
                        promise = andThen(_args[i]);
                    }
                    return promise;

                    // creates promise to chain dynamically
                    function andThen(_arg) {
                        // also support a function that returns a promise
                        if (typeof _arg === 'function')
                            return promise.then(_arg);
                        else
                            return promise.then(function () {
                                // if is a module, pass the name. If not, pass the array
                                var whatToLoad = getRequired(_arg);
                                // simple error check
                                if (!whatToLoad) return $.error('Route resolve: Bad resource name [' + _arg + ']');
                                // finally, return a promise
                                return $ocLL.load(whatToLoad);
                            });
                    }

                    // check and returns required data
                    // analyze module items with the form [name: '', files: []]
                    // and also simple array of script files (for not angular js)
                    function getRequired(name) {
                        if (APP_REQUIRES.modules)
                            for (var m in APP_REQUIRES.modules)
                                if (APP_REQUIRES.modules[m].name && APP_REQUIRES.modules[m].name === name)
                                    return APP_REQUIRES.modules[m];
                        return APP_REQUIRES.scripts && APP_REQUIRES.scripts[name];
                    }

                }]
            };
        } // resolveFor

    }


})();


/**=========================================================
 * Module: config.js
 * App routes and resources configuration
 =========================================================*/


(function () {
    'use strict';

    angular
        .module('app.routes')
        .config(routesConfig);

    routesConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelpersProvider'];

    function routesConfig($stateProvider, $locationProvider, $urlRouterProvider, helper) {

        // Set the following to true to enable the HTML5 Mode
        // You may have to set <base> tag in index and a routing configuration in your server
        $locationProvider.html5Mode(false);

        // defaults to dashboard
        $urlRouterProvider.otherwise('/app/welcome');

        // 
        // Application Routes
        // -----------------------------------   
        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: helper.basepath('app.html'),
                resolve: helper.resolveFor('fastclick', 'modernizr', 'icons', 'screenfull', 'animo', 'sparklines', 'slimscroll', 'classyloader', 'toaster', 'whirl')
            })
            .state('app.welcome', {
                url: '/welcome',
                title: 'Welcome',
                templateUrl: helper.basepath('welcome.html')
            })
            .state('app.dashboard', {
                url: '/dashboard',
                title: 'Dashboard',
                templateUrl: helper.basepath('sportimo-dashboard.html'),
                resolve: helper.resolveFor('flot-chart', 'flot-chart-plugins', 'weather-icons', 'ngWebSocket', 'moment', 'moment-format', 'chartjs')
            })

            /* START MATCHES SCHEDULE */
            .state('app.schedule', {
                url: '/schedule',
                title: 'Schedule',
                templateUrl: helper.basepath('database/schedule.html'),
                resolve: helper.resolveFor('restangular', 'toaster', 'dirPagination', 'moment', 'datatables', 'fullcalendar', 'jquery-ui', 'jquery-ui-widgets', 'ui.select', 'localytics.directives'),
                controller: 'ScheduleController'
            })
            /* END MATCHES SCHEDULE */
            .state('app.teams', {
                url: '/teams/:id',
                title: 'Teams',
                templateUrl: helper.basepath('database/teams.html'),
                resolve: helper.resolveFor('restangular', 'toaster', 'dirPagination', 'moment', 'datatables', 'ngFileUpload', 'localytics.directives', 'ui.select', 'ui.grid'),
                controller: 'TeamsController'
            })
            .state('app.players', {
                url: '/players',
                title: 'players',
                resolve: helper.resolveFor('restangular', 'toaster', 'dirPagination', 'moment', 'datatables', 'ngFileUpload', 'localytics.directives', 'ui.select', 'ui.grid'),
                templateUrl: helper.basepath('database/players.html'),
                controller: 'PlayersController',
                controllerAs: 'vm'
            })
            .state('app.publications', {
                url: '/publications',
                title: 'Publications',
                templateUrl: helper.basepath('database/publications.html'),
                resolve: helper.resolveFor('akoenig.deckgrid', 'restangular', 'toaster', 'dirPagination', 'moment', 'datatables', 'ngFileUpload', 'localytics.directives', 'ui.select', 'truncate'),
                controller: 'PublicationsController'
            })
            .state('app.standings', {
                url: '/standings/:competition',
                title: 'Standings',
                templateUrl: helper.basepath('database/standings.html'),
                resolve: helper.resolveFor('restangular', 'toaster', 'dirPagination', 'moment', 'datatables', 'ngFileUpload', 'localytics.directives', 'ui.select', 'ui.grid'),
                controller: 'StandingsController'
            })
            .state('app.competitions', {
                url: '/competitions',
                title: 'Competitions',
                templateUrl: helper.basepath('database/competitions.html'),
                resolve: helper.resolveFor('ui.select', 'ngFileUpload'),
                controller: 'CompetitionsController'
            })
            .state('app.sponsors', {
                url: '/sponsors',
                title: 'Sponsors',
                templateUrl: helper.basepath('database/sponsors.html'),
                resolve: helper.resolveFor('ui.select', 'ngFileUpload'),
                controller: 'SponsorsController'
            })
            .state('app.leaderboards', {
                url: '/leaderboards',
                title: 'Leaderboards',
                templateUrl: helper.basepath('database/leaderboards.html'),
                resolve: helper.resolveFor('toaster', 'dirPagination', 'moment', 'moment-format', 'ui.select', 'ngDialog', 'htmlSortable', 'angularGrid'),
                controller: 'LeaderboardsController',
                controllerAs: 'vm'
            })
            .state('app.data', {
                url: '/data/:action/:type/:id',
                title: 'Editor',
                templateUrl: helper.basepath('database/editors.html'),
                resolve: helper.resolveFor('restangular', 'toaster', 'dirPagination', 'moment', 'datatables', 'ngFileUpload', 'localytics.directives', 'ui.select', 'ui.grid'),
                controller: 'EditorController'
            })
            .state('app.match-moderation-soccer', {
                url: '/match-moderation/soccer/:id',
                title: 'Match Moderation',
                templateUrl: helper.basepath('sportimo/moderation/sportimo_moderation_soccer.html'),
                resolve: helper.resolveFor('toaster', 'dirPagination', 'moment', 'moment-format', 'ui.select', 'ngDialog', 'htmlSortable', 'angularGrid', 'ngFileUpload'),
                controller: 'SportimoModerationSoccerController',
                controllerAs: 'modCtrl',
            })
            .state('app.welcomes', {
                url: '/welcomes',
                title: 'Mathces Welcomes',
                templateUrl: helper.basepath('sportimo_welcomes.html'),
                resolve: helper.resolveFor('restangular', 'toaster', 'dirPagination', 'moment'),
                controller: 'SportimoWelcomesController'
            })
            .state('app.pushes', {
                url: '/pushes',
                title: 'Push Notifications Management',
                templateUrl: helper.basepath('sportimo_pushes.html'),
                controller: 'SportimoPushesController',
                resolve: helper.resolveFor('restangular', 'toaster', 'dirPagination', 'ui.select')
            })
            .state('app.polls', {
                url: '/polls',
                title: 'Polls Management',
                templateUrl: helper.basepath('sportimo_polls.html'),
                controller: 'SportimoPollsController',
                resolve: helper.resolveFor('restangular', 'toaster', 'dirPagination', 'ui.knob')
            })
            .state('app.activities', {
                url: '/activities',
                title: 'Activities Management',
                templateUrl: helper.basepath('sportimo_activities.html'),
                controller: 'SportimoActivitiesController',
                resolve: helper.resolveFor('restangular', 'toaster', 'dirPagination', 'moment')
            })
            .state('app.interviews', {
                url: '/interviews',
                title: 'Interviews Management',
                templateUrl: helper.basepath('sportimo_interviews.html'),
                controller: 'SportimoInterviewsController',
                resolve: helper.resolveFor('restangular', 'toaster', 'dirPagination', 'moment')
            })
            .state('app.dashboard_v2', {
                url: '/dashboard_v2',
                title: 'Dashboard v2',
                templateUrl: helper.basepath('dashboard_v2.html'),
                controller: 'DashboardV2Controller',
                controllerAs: 'dash2',

            })
            .state('app.dashboard_v3', {
                url: '/dashboard_v3',
                title: 'Dashboard v3',
                controller: 'DashboardV3Controller',
                controllerAs: 'dash3',
                templateUrl: helper.basepath('dashboard_v3.html'),
                resolve: helper.resolveFor('flot-chart', 'flot-chart-plugins', 'vector-map', 'vector-map-maps')
            })
            .state('app.widgets', {
                url: '/widgets',
                title: 'Widgets',
                templateUrl: helper.basepath('widgets.html'),
                resolve: helper.resolveFor('loadGoogleMapsJS', function () {
                    return loadGoogleMaps();
                }, 'ui.map')
            })
            .state('app.buttons', {
                url: '/buttons',
                title: 'Buttons',
                templateUrl: helper.basepath('buttons.html')
            })
            .state('app.colors', {
                url: '/colors',
                title: 'Colors',
                templateUrl: helper.basepath('colors.html')
            })
            .state('app.localization', {
                url: '/localization',
                title: 'Localization',
                templateUrl: helper.basepath('localization.html')
            })
            .state('app.infinite-scroll', {
                url: '/infinite-scroll',
                title: 'Infinite Scroll',
                templateUrl: helper.basepath('infinite-scroll.html'),
                resolve: helper.resolveFor('infinite-scroll')
            })
            .state('app.navtree', {
                url: '/navtree',
                title: 'Nav Tree',
                templateUrl: helper.basepath('nav-tree.html'),
                resolve: helper.resolveFor('angularBootstrapNavTree')
            })
            .state('app.nestable', {
                url: '/nestable',
                title: 'Nestable',
                templateUrl: helper.basepath('nestable.html'),
                resolve: helper.resolveFor('ng-nestable')
            })
            .state('app.sortable', {
                url: '/sortable',
                title: 'Sortable',
                templateUrl: helper.basepath('sortable.html'),
                resolve: helper.resolveFor('htmlSortable')
            })
            .state('app.notifications', {
                url: '/notifications',
                title: 'Notifications',
                templateUrl: helper.basepath('notifications.html')
            })
            .state('app.carousel', {
                url: '/carousel',
                title: 'Carousel',
                templateUrl: helper.basepath('carousel.html'),
                resolve: helper.resolveFor('angular-carousel')
            })
            .state('app.ngdialog', {
                url: '/ngdialog',
                title: 'ngDialog',
                templateUrl: helper.basepath('ngdialog.html'),
                resolve: angular.extend(helper.resolveFor('ngDialog'), {
                    tpl: function () {
                        return {
                            path: helper.basepath('ngdialog-template.html')
                        };
                    }
                }),
                controller: 'DialogIntroCtrl'
            })
            .state('app.sweetalert', {
                url: '/sweetalert',
                title: 'SweetAlert',
                templateUrl: helper.basepath('sweetalert.html'),
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            .state('app.tour', {
                url: '/tour',
                title: 'Tour',
                templateUrl: helper.basepath('tour.html'),
                resolve: helper.resolveFor('bm.bsTour')
            })
            .state('app.interaction', {
                url: '/interaction',
                title: 'Interaction',
                templateUrl: helper.basepath('interaction.html')
            })
            .state('app.spinners', {
                url: '/spinners',
                title: 'Spinners',
                templateUrl: helper.basepath('spinners.html'),
                resolve: helper.resolveFor('loaders.css', 'spinkit')
            })
            .state('app.dropdown-animations', {
                url: '/dropdown-animations',
                title: 'Dropdown Animations',
                templateUrl: helper.basepath('dropdown-animations.html')
            })
            .state('app.panels', {
                url: '/panels',
                title: 'Panels',
                templateUrl: helper.basepath('panels.html')
            })
            .state('app.portlets', {
                url: '/portlets',
                title: 'Portlets',
                templateUrl: helper.basepath('portlets.html'),
                resolve: helper.resolveFor('jquery-ui', 'jquery-ui-widgets')
            })
            .state('app.maps-google', {
                url: '/maps-google',
                title: 'Maps Google',
                templateUrl: helper.basepath('maps-google.html'),
                resolve: helper.resolveFor('loadGoogleMapsJS', function () {
                    return loadGoogleMaps();
                }, 'ui.map')
            })
            .state('app.maps-vector', {
                url: '/maps-vector',
                title: 'Maps Vector',
                templateUrl: helper.basepath('maps-vector.html'),
                controller: 'VectorMapController',
                controllerAs: 'vmap',
                resolve: helper.resolveFor('vector-map', 'vector-map-maps')
            })
            .state('app.grid', {
                url: '/grid',
                title: 'Grid',
                templateUrl: helper.basepath('grid.html')
            })
            .state('app.grid-masonry', {
                url: '/grid-masonry',
                title: 'Grid Masonry',
                templateUrl: helper.basepath('grid-masonry.html')
            })
            .state('app.grid-masonry-deck', {
                url: '/grid-masonry-deck',
                title: 'Grid Masonry',
                templateUrl: helper.basepath('grid-masonry-deck.html'),
                resolve: helper.resolveFor('spinkit', 'akoenig.deckgrid')
            })
            .state('app.typo', {
                url: '/typo',
                title: 'Typo',
                templateUrl: helper.basepath('typo.html')
            })
            .state('app.icons-font', {
                url: '/icons-font',
                title: 'Icons Font',
                templateUrl: helper.basepath('icons-font.html'),
                resolve: helper.resolveFor('icons')
            })
            .state('app.icons-weather', {
                url: '/icons-weather',
                title: 'Icons Weather',
                templateUrl: helper.basepath('icons-weather.html'),
                resolve: helper.resolveFor('weather-icons', 'skycons')
            })
            .state('app.form-standard', {
                url: '/form-standard',
                title: 'Form Standard',
                templateUrl: helper.basepath('form-standard.html')
            })
            .state('app.form-extended', {
                url: '/form-extended',
                title: 'Form Extended',
                templateUrl: helper.basepath('form-extended.html'),
                resolve: helper.resolveFor('colorpicker.module', 'codemirror', 'moment', 'taginput', 'inputmask', 'localytics.directives', 'ui.bootstrap-slider', 'ngWig', 'filestyle', 'textAngular')
            })
            .state('app.form-validation', {
                url: '/form-validation',
                title: 'Form Validation',
                templateUrl: helper.basepath('form-validation.html'),
                resolve: helper.resolveFor('ui.select', 'taginput', 'inputmask', 'localytics.directives')
            })
            .state('app.form-parsley', {
                url: '/form-parsley',
                title: 'Form Validation - Parsley',
                templateUrl: helper.basepath('form-parsley.html'),
                resolve: helper.resolveFor('parsley')
            })
            .state('app.form-wizard', {
                url: '/form-wizard',
                title: 'Form Wizard',
                templateUrl: helper.basepath('form-wizard.html'),
                resolve: helper.resolveFor('parsley')
            })
            .state('app.form-upload', {
                url: '/form-upload',
                title: 'Form upload',
                templateUrl: helper.basepath('form-upload.html'),
                resolve: helper.resolveFor('angularFileUpload', 'filestyle')
            })
            .state('app.form-xeditable', {
                url: '/form-xeditable',
                templateUrl: helper.basepath('form-xeditable.html'),
                resolve: helper.resolveFor('xeditable')
            })
            .state('app.form-imagecrop', {
                url: '/form-imagecrop',
                templateUrl: helper.basepath('form-imagecrop.html'),
                resolve: helper.resolveFor('ngImgCrop', 'filestyle')
            })
            .state('app.form-uiselect', {
                url: '/form-uiselect',
                templateUrl: helper.basepath('form-uiselect.html'),
                controller: 'uiSelectController',
                controllerAs: 'uisel',
                resolve: helper.resolveFor('ui.select')
            })
            .state('app.chart-flot', {
                url: '/chart-flot',
                title: 'Chart Flot',
                templateUrl: helper.basepath('chart-flot.html'),
                resolve: helper.resolveFor('flot-chart', 'flot-chart-plugins')
            })
            .state('app.chart-radial', {
                url: '/chart-radial',
                title: 'Chart Radial',
                templateUrl: helper.basepath('chart-radial.html'),
                resolve: helper.resolveFor('classyloader', 'ui.knob', 'easypiechart')
            })
            .state('app.chart-js', {
                url: '/chart-js',
                title: 'Chart JS',
                templateUrl: helper.basepath('chart-js.html'),
                resolve: helper.resolveFor('chartjs')
            })
            .state('app.chart-rickshaw', {
                url: '/chart-rickshaw',
                title: 'Chart Rickshaw',
                templateUrl: helper.basepath('chart-rickshaw.html'),
                resolve: helper.resolveFor('angular-rickshaw')
            })
            .state('app.chart-morris', {
                url: '/chart-morris',
                title: 'Chart Morris',
                templateUrl: helper.basepath('chart-morris.html'),
                resolve: helper.resolveFor('morris')
            })
            .state('app.chart-chartist', {
                url: '/chart-chartist',
                title: 'Chart Chartist',
                templateUrl: helper.basepath('chart-chartist.html'),
                resolve: helper.resolveFor('angular-chartist')
            })
            .state('app.table-standard', {
                url: '/table-standard',
                title: 'Table Standard',
                templateUrl: helper.basepath('table-standard.html')
            })
            .state('app.table-extended', {
                url: '/table-extended',
                title: 'Table Extended',
                templateUrl: helper.basepath('table-extended.html')
            })
            .state('app.table-datatable', {
                url: '/table-datatable',
                title: 'Table Datatable',
                templateUrl: helper.basepath('table-datatable.html'),
                resolve: helper.resolveFor('datatables')
            })
            .state('app.table-xeditable', {
                url: '/table-xeditable',
                templateUrl: helper.basepath('table-xeditable.html'),
                resolve: helper.resolveFor('xeditable')
            })
            .state('app.table-ngtable', {
                url: '/table-ngtable',
                templateUrl: helper.basepath('table-ngtable.html'),
                resolve: helper.resolveFor('ngTable', 'ngTableExport')
            })
            .state('app.table-nggrid', {
                url: '/table-nggrid',
                templateUrl: helper.basepath('table-ng-grid.html'),
                resolve: helper.resolveFor('ngGrid')
            })
            .state('app.table-uigrid', {
                url: '/table-uigrid',
                templateUrl: helper.basepath('table-uigrid.html'),
                resolve: helper.resolveFor('ui.grid')
            })
            .state('app.table-angulargrid', {
                url: '/table-angulargrid',
                templateUrl: helper.basepath('table-angulargrid.html'),
                resolve: helper.resolveFor('angularGrid')
            })
            .state('app.timeline', {
                url: '/timeline',
                title: 'Timeline',
                templateUrl: helper.basepath('timeline.html')
            })
            .state('app.calendar', {
                url: '/calendar',
                title: 'Calendar',
                templateUrl: helper.basepath('calendar.html'),
                resolve: helper.resolveFor('jquery-ui', 'jquery-ui-widgets', 'moment', 'fullcalendar')
            })
            .state('app.invoice', {
                url: '/invoice',
                title: 'Invoice',
                templateUrl: helper.basepath('invoice.html')
            })
            .state('app.search', {
                url: '/search',
                title: 'Search',
                templateUrl: helper.basepath('search.html'),
                resolve: helper.resolveFor('moment', 'localytics.directives', 'ui.bootstrap-slider')
            })
            .state('app.todo', {
                url: '/todo',
                title: 'Todo List',
                templateUrl: helper.basepath('todo.html'),
                controller: 'TodoController',
                controllerAs: 'todo'
            })
            .state('app.profile', {
                url: '/profile',
                title: 'Profile',
                templateUrl: helper.basepath('profile.html'),
                resolve: helper.resolveFor('loadGoogleMapsJS', function () {
                    return loadGoogleMaps();
                }, 'ui.map')
            })
            .state('app.code-editor', {
                url: '/code-editor',
                templateUrl: helper.basepath('code-editor.html'),
                controller: 'CodeEditorController',
                controllerAs: 'coder',
                resolve: {
                    deps: helper.resolveFor('codemirror', 'ui.codemirror', 'codemirror-modes-web', 'angularBootstrapNavTree').deps,
                    filetree: ['LoadTreeService', function (LoadTreeService) {
                        return LoadTreeService.get().$promise.then(function (res) {
                            return res.data;
                        });
                    }]
                }
            })
            .state('app.template', {
                url: '/template',
                title: 'Blank Template',
                templateUrl: helper.basepath('template.html')
            })
            .state('app.documentation', {
                url: '/documentation',
                title: 'Documentation',
                templateUrl: helper.basepath('documentation.html'),
                resolve: helper.resolveFor('flatdoc')
            })
            // Forum
            // -----------------------------------
            .state('app.forum', {
                url: '/forum',
                title: 'Forum',
                templateUrl: helper.basepath('forum.html')
            })
            .state('app.forum-topics', {
                url: '/forum/topics/:catid',
                title: 'Forum Topics',
                templateUrl: helper.basepath('forum-topics.html')
            })
            .state('app.forum-discussion', {
                url: '/forum/discussion/:topid',
                title: 'Forum Discussion',
                templateUrl: helper.basepath('forum-discussion.html')
            })
            // Blog
            // -----------------------------------
            .state('app.blog', {
                url: '/blog',
                title: 'Blog',
                templateUrl: helper.basepath('blog.html'),
                resolve: helper.resolveFor('angular-jqcloud')
            })
            .state('app.blog-post', {
                url: '/post',
                title: 'Post',
                templateUrl: helper.basepath('blog-post.html'),
                resolve: helper.resolveFor('angular-jqcloud')
            })
            .state('app.articles', {
                url: '/articles',
                title: 'Articles',
                templateUrl: helper.basepath('blog-articles.html'),
                resolve: helper.resolveFor('datatables')
            })
            .state('app.article-view', {
                url: '/article/:id',
                title: 'Article View',
                templateUrl: helper.basepath('blog-article-view.html'),
                resolve: helper.resolveFor('ui.select', 'textAngular')
            })
            // eCommerce
            // -----------------------------------
            .state('app.orders', {
                url: '/orders',
                title: 'Orders',
                templateUrl: helper.basepath('ecommerce-orders.html'),
                resolve: helper.resolveFor('datatables')
            })
            .state('app.order-view', {
                url: '/order-view',
                title: 'Order View',
                templateUrl: helper.basepath('ecommerce-order-view.html')
            })
            .state('app.products', {
                url: '/products',
                title: 'Products',
                templateUrl: helper.basepath('ecommerce-products.html'),
                resolve: helper.resolveFor('datatables')
            })
            .state('app.product-view', {
                url: '/product/:id',
                title: 'Product View',
                templateUrl: helper.basepath('ecommerce-product-view.html')
            })
            // Mailbox
            // -----------------------------------
            .state('app.mailbox', {
                url: '/mailbox',
                title: 'Mailbox',
                abstract: true,
                templateUrl: helper.basepath('mailbox.html')
            })
            .state('app.mailbox.folder', {
                url: '/folder/:folder',
                title: 'Mailbox',
                templateUrl: helper.basepath('mailbox-inbox.html')
            })
            .state('app.mailbox.view', {
                url: '/{mid:[0-9]{1,4}}',
                title: 'View mail',
                templateUrl: helper.basepath('mailbox-view.html'),
                resolve: helper.resolveFor('ngWig')
            })
            .state('app.mailbox.compose', {
                url: '/compose',
                title: 'Mailbox',
                templateUrl: helper.basepath('mailbox-compose.html'),
                resolve: helper.resolveFor('ngWig')
            })
            //
            // Multiple level example
            // -----------------------------------
            .state('app.multilevel', {
                url: '/multilevel',
                title: 'Multilevel',
                template: '<h3>Multilevel Views</h3>' + '<div class="lead ba p">View @ Top Level ' + '<div ui-view=""></div> </div>'
            })
            .state('app.multilevel.level1', {
                url: '/level1',
                title: 'Multilevel - Level1',
                template: '<div class="lead ba p">View @ Level 1' + '<div ui-view=""></div> </div>'
            })
            .state('app.multilevel.level1.item', {
                url: '/item',
                title: 'Multilevel - Level1',
                template: '<div class="lead ba p"> Menu item @ Level 1</div>'
            })
            .state('app.multilevel.level1.level2', {
                url: '/level2',
                title: 'Multilevel - Level2',
                template: '<div class="lead ba p">View @ Level 2' + '<div ui-view=""></div> </div>'
            })
            .state('app.multilevel.level1.level2.level3', {
                url: '/level3',
                title: 'Multilevel - Level3',
                template: '<div class="lead ba p">View @ Level 3' + '<div ui-view=""></div> </div>'
            })
            .state('app.multilevel.level1.level2.level3.item', {
                url: '/item',
                title: 'Multilevel - Level3 Item',
                template: '<div class="lead ba p"> Menu item @ Level 3</div>'
            })
            //
            // Single Page Routes
            // -----------------------------------
            .state('page', {
                url: '/page',
                templateUrl: 'app/pages/page.html',
                resolve: helper.resolveFor('modernizr', 'icons'),
                controller: ['$rootScope', function ($rootScope) {
                    $rootScope.app.layout.isBoxed = false;
                }]
            })
            .state('page.login', {
                url: '/login',
                title: 'Login',
                templateUrl: 'app/pages/login.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            })
            .state('page.register', {
                url: '/register',
                title: 'Register',
                templateUrl: 'app/pages/register.html'
            })
            .state('page.recover', {
                url: '/recover',
                title: 'Recover',
                templateUrl: 'app/pages/recover.html'
            })
            .state('page.lock', {
                url: '/lock',
                title: 'Lock',
                templateUrl: 'app/pages/lock.html'
            })
            .state('page.404', {
                url: '/404',
                title: 'Not Found',
                templateUrl: 'app/pages/404.html'
            })
            //
            // Horizontal layout
            // -----------------------------------
            .state('app-h', {
                url: '/app-h',
                abstract: true,
                templateUrl: helper.basepath('app-h.html'),
                resolve: helper.resolveFor('fastclick', 'modernizr', 'icons', 'screenfull', 'animo', 'sparklines', 'slimscroll', 'classyloader', 'toaster', 'whirl')
            })
            .state('app-h.dashboard_v2', {
                url: '/dashboard_v2',
                title: 'Dashboard v2',
                templateUrl: helper.basepath('dashboard_v2.html'),
                controller: 'DashboardV2Controller',
                controllerAs: 'dash2',
                resolve: helper.resolveFor('flot-chart', 'flot-chart-plugins')
            })
            //
            // Material
            // -----------------------------------
            .state('app.cards', {
                url: '/cards',
                title: 'Material Cards',
                templateUrl: helper.basepath('material.cards.html')
            })
            .state('app.forms', {
                url: '/forms',
                title: 'Material Forms',
                templateUrl: helper.basepath('material.forms.html')
            })
            .state('app.whiteframe', {
                url: '/whiteframe',
                title: 'Material Whiteframe',
                templateUrl: helper.basepath('material.whiteframe.html')
            })
            .state('app.matcolors', {
                url: '/matcolors',
                title: 'Material Colors',
                templateUrl: helper.basepath('material.colors.html')
            })
            .state('app.lists', {
                url: '/lists',
                title: 'Material Lists',
                templateUrl: helper.basepath('material.lists.html')
            })
            .state('app.inputs', {
                url: '/inputs',
                title: 'Material Inputs',
                templateUrl: helper.basepath('material.inputs.html')
            })
            .state('app.matwidgets', {
                url: '/matwidgets',
                title: 'Material Widgets',
                templateUrl: helper.basepath('material.widgets.html'),
                resolve: helper.resolveFor('weather-icons', 'loadGoogleMapsJS', function () {
                    return loadGoogleMaps();
                }, 'ui.map')
            })
            .state('app.ngmaterial', {
                url: '/ngmaterial',
                title: 'ngMaterial',
                templateUrl: helper.basepath('material.ngmaterial.html')
            })
            //
            // CUSTOM RESOLVES
            //   Add your own resolves properties
            //   following this object extend
            //   method
            // -----------------------------------
            // .state('app.someroute', {
            //   url: '/some_url',
            //   templateUrl: 'path_to_template.html',
            //   controller: 'someController',
            //   resolve: angular.extend(
            //     helper.resolveFor(), {
            //     // YOUR RESOLVES GO HERE
            //     }
            //   )
            // })
            ;

    } // routesConfig

})();


(function () {
    'use strict';

    angular
        .module('app.settings')
        .run(settingsRun);

    settingsRun.$inject = ['$rootScope', '$localStorage'];

    function settingsRun($rootScope, $localStorage) {

        // Global Settings
        // ----------------------------------- 
        $rootScope.app = {
            name: 'Sportimo',
            description: 'Sportimo Dashboard by Bedbug',
            year: ((new Date()).getFullYear()),
            layout: {
                isFixed: true,
                isCollapsed: false,
                isBoxed: true,
                isRTL: false,
                horizontal: false,
                isFloat: false,
                asideHover: false,
                theme: null
            },
            useFullLayout: false,
            hiddenFooter: false,
            offsidebarOpen: false,
            asideToggled: false,
            viewAnimation: 'ng-fadeInUp'
        };

        // Setup the layout mode
        $rootScope.app.layout.horizontal = ($rootScope.$stateParams.layout === 'app-h');

        // Restore layout settings
        if (angular.isDefined($localStorage.layout))
            $rootScope.app.layout = $localStorage.layout;
        else
            $localStorage.layout = $rootScope.app.layout;

        $rootScope.$watch('app.layout', function () {
            $localStorage.layout = $rootScope.app.layout;
        }, true);

        // Close submenu when sidebar change from collapsed to normal
        $rootScope.$watch('app.layout.isCollapsed', function (newValue) {
            if (newValue === false)
                $rootScope.$broadcast('closeSidebarMenu');
        });

    }

})();

/**=========================================================
 * Module: sidebar-menu.js
 * Handle sidebar collapsible elements
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.sidebar')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['$rootScope', '$scope', '$state', 'SidebarLoader', 'Utils'];

    function SidebarController($rootScope, $scope, $state, SidebarLoader, Utils) {

        activate();

        ////////////////

        function activate() {
            var collapseList = [];

            // demo: when switch from collapse to hover, close all items
            $rootScope.$watch('app.layout.asideHover', function (oldVal, newVal) {
                if (newVal === false && oldVal === true) {
                    closeAllBut(-1);
                }
            });


            // Load menu from json file
            // ----------------------------------- 

            SidebarLoader.getMenu(sidebarReady);

            function sidebarReady(items) {
                $scope.menuItems = items;
            }

            // Handle sidebar and collapse items
            // ----------------------------------

            $scope.getMenuItemPropClasses = function (item) {
                return (item.heading ? 'nav-heading' : '') +
                    (isActive(item) ? ' active' : '');
            };

            $scope.addCollapse = function ($index, item) {
                collapseList[$index] = $rootScope.app.layout.asideHover ? true : !isActive(item);
            };

            $scope.isCollapse = function ($index) {
                return (collapseList[$index]);
            };

            $scope.toggleCollapse = function ($index, isParentItem) {

                // collapsed sidebar doesn't toggle drodopwn
                if (Utils.isSidebarCollapsed() || $rootScope.app.layout.asideHover) return true;

                // make sure the item index exists
                if (angular.isDefined(collapseList[$index])) {
                    if (!$scope.lastEventFromChild) {
                        collapseList[$index] = !collapseList[$index];
                        closeAllBut($index);
                    }
                } else if (isParentItem) {
                    closeAllBut(-1);
                }

                $scope.lastEventFromChild = isChild($index);

                return true;

            };

            // Controller helpers
            // ----------------------------------- 

            // Check item and children active state
            function isActive(item) {

                if (!item) return;

                if (!item.sref || item.sref === '#') {
                    var foundActive = false;
                    angular.forEach(item.submenu, function (value) {
                        if (isActive(value)) foundActive = true;
                    });
                    return foundActive;
                } else
                    return $state.is(item.sref) || $state.includes(item.sref);
            }

            function closeAllBut(index) {
                index += '';
                for (var i in collapseList) {
                    if (index < 0 || index.indexOf(i) < 0)
                        collapseList[i] = true;
                }
            }

            function isChild($index) {
                /*jshint -W018*/
                return (typeof $index === 'string') && !($index.indexOf('-') < 0);
            }

        } // activate
    }

})();

/**=========================================================
 * Module: sidebar.js
 * Wraps the sidebar and handles collapsed state
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.sidebar')
        .directive('sidebar', sidebar);

    sidebar.$inject = ['$rootScope', '$timeout', '$window', 'Utils'];

    function sidebar($rootScope, $timeout, $window, Utils) {
        var $win = angular.element($window);
        var directive = {
            // bindToController: true,
            // controller: Controller,
            // controllerAs: 'vm',
            link: link,
            restrict: 'EA',
            template: '<nav class="sidebar" ng-transclude></nav>',
            transclude: true,
            replace: true
            // scope: {}
        };
        return directive;

        function link(scope, element, attrs) {

            var currentState = $rootScope.$state.current.name;
            var $sidebar = element;

            var eventName = Utils.isTouch() ? 'click' : 'mouseenter';
            var subNav = $();

            $sidebar.on(eventName, '.nav > li', function () {

                if (Utils.isSidebarCollapsed() || $rootScope.app.layout.asideHover) {

                    subNav.trigger('mouseleave');
                    subNav = toggleMenuItem($(this), $sidebar);

                    // Used to detect click and touch events outside the sidebar          
                    sidebarAddBackdrop();

                }

            });

            scope.$on('closeSidebarMenu', function () {
                removeFloatingNav();
            });

            // Normalize state when resize to mobile
            $win.on('resize', function () {
                if (!Utils.isMobile())
                    asideToggleOff();
            });

            // Adjustment on route changes
            $rootScope.$on('$stateChangeStart', function (event, toState) {
                currentState = toState.name;
                // Hide sidebar automatically on mobile
                asideToggleOff();

                $rootScope.$broadcast('closeSidebarMenu');
            });

            // Autoclose when click outside the sidebar
            if (angular.isDefined(attrs.sidebarAnyclickClose)) {

                var wrapper = $('.wrapper');
                var sbclickEvent = 'click.sidebar';

                $rootScope.$watch('app.asideToggled', watchExternalClicks);

            }

            //////

            function watchExternalClicks(newVal) {
                // if sidebar becomes visible
                if (newVal === true) {
                    $timeout(function () { // render after current digest cycle
                        wrapper.on(sbclickEvent, function (e) {
                            // if not child of sidebar
                            if (!$(e.target).parents('.aside').length) {
                                asideToggleOff();
                            }
                        });
                    });
                } else {
                    // dettach event
                    wrapper.off(sbclickEvent);
                }
            }

            function asideToggleOff() {
                $rootScope.app.asideToggled = false;
                if (!scope.$$phase) scope.$apply(); // anti-pattern but sometimes necessary
            }
        }

        ///////

        function sidebarAddBackdrop() {
            var $backdrop = $('<div/>', {
                'class': 'dropdown-backdrop'
            });
            $backdrop.insertAfter('.aside-inner').on('click mouseenter', function () {
                removeFloatingNav();
            });
        }

        // Open the collapse sidebar submenu items when on touch devices 
        // - desktop only opens on hover
        function toggleTouchItem($element) {
            $element
                .siblings('li')
                .removeClass('open')
                .end()
                .toggleClass('open');
        }

        // Handles hover to open items under collapsed menu
        // ----------------------------------- 
        function toggleMenuItem($listItem, $sidebar) {

            removeFloatingNav();

            var ul = $listItem.children('ul');

            if (!ul.length) return $();
            if ($listItem.hasClass('open')) {
                toggleTouchItem($listItem);
                return $();
            }

            var $aside = $('.aside');
            var $asideInner = $('.aside-inner'); // for top offset calculation
            // float aside uses extra padding on aside
            var mar = parseInt($asideInner.css('padding-top'), 0) + parseInt($aside.css('padding-top'), 0);
            var subNav = ul.clone().appendTo($aside);

            toggleTouchItem($listItem);

            var itemTop = ($listItem.position().top + mar) - $sidebar.scrollTop();
            var vwHeight = $win.height();

            subNav
                .addClass('nav-floating')
                .css({
                    position: $rootScope.app.layout.isFixed ? 'fixed' : 'absolute',
                    top: itemTop,
                    bottom: (subNav.outerHeight(true) + itemTop > vwHeight) ? 0 : 'auto'
                });

            subNav.on('mouseleave', function () {
                toggleTouchItem($listItem);
                subNav.remove();
            });

            return subNav;
        }

        function removeFloatingNav() {
            $('.dropdown-backdrop').remove();
            $('.sidebar-subnav.nav-floating').remove();
            $('.sidebar li.open').removeClass('open');
        }
    }


})();


(function () {
    'use strict';

    angular
        .module('app.sidebar')
        .service('SidebarLoader', SidebarLoader);

    SidebarLoader.$inject = ['$http'];

    function SidebarLoader($http) {
        this.getMenu = getMenu;

        ////////////////

        function getMenu(onReady, onError) {
            var menuJson = 'server/sidebar-menu.json',
                menuURL = menuJson + '?v=' + (new Date().getTime()); // jumps cache

            onError = onError || function () {
                alert('Failure loading menu');
            };

            $http
                .get(menuURL)
                .success(onReady)
                .error(onError);
        }
    }
})();
(function () {
    'use strict';

    angular
        .module('app.sidebar')
        .controller('UserBlockController', UserBlockController);

    UserBlockController.$inject = ['$rootScope', '$location'];

    function UserBlockController($rootScope, $location) {

        activate();

        ////////////////

        function activate() {
            // console.log($rootScope.user);


            // Hides/show user avatar on sidebar
            $rootScope.toggleUserBlock = function () {
                console.log("toggle");
                $rootScope.$broadcast('toggleUserBlock');
            };

            $rootScope.logout = function () {
                console.log("logout");
                $rootScope.$storage.currentUser = null;
                $rootScope.user = null;
                $location.path('/page/login');

            };

            $rootScope.userBlockVisible = true;

            $rootScope.$on('toggleUserBlock', function ( /*event, args*/) {

                $rootScope.userBlockVisible = !$rootScope.userBlockVisible;

            });
        }
    }
})();

/**=========================================================
 * Module: angular-grid.js
 * Example for Angular Grid
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.tables')
        .controller('AngularGridController', AngularGridController);

    AngularGridController.$inject = ['$http'];

    function AngularGridController($http) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            // Basic
            var columnDefs = [
                {
                    displayName: 'Athlete',
                    field: 'athlete',
                    width: 150
                },
                {
                    displayName: 'Age',
                    field: 'age',
                    width: 90
                },
                {
                    displayName: 'Country',
                    field: 'country',
                    width: 120
                },
                {
                    displayName: 'Year',
                    field: 'year',
                    width: 90
                },
                {
                    displayName: 'Date',
                    field: 'date',
                    width: 110
                },
                {
                    displayName: 'Sport',
                    field: 'sport',
                    width: 110
                },
                {
                    displayName: 'Gold',
                    field: 'gold',
                    width: 100
                },
                {
                    displayName: 'Silver',
                    field: 'silver',
                    width: 100
                },
                {
                    displayName: 'Bronze',
                    field: 'bronze',
                    width: 100
                },
                {
                    displayName: 'Total',
                    field: 'total',
                    width: 100
                }
            ];

            vm.gridOptions = {
                columnDefs: columnDefs,
                rowData: null,
                rowSelection: 'single',
                ready: function (api) {
                    api.sizeColumnsToFit();
                }
            };

            // Filter Example
            var irishAthletes = ['John Joe Nevin', 'Katie Taylor', 'Paddy Barnes', 'Kenny Egan', 'Darren Sutherland', 'Margaret Thatcher', 'Tony Blair', 'Ronald Regan', 'Barack Obama'];

            var columnDefsFilter = [
                {
                    displayName: 'Athlete',
                    field: 'athlete',
                    width: 150,
                    filter: 'set',
                    filterParams: {
                        cellHeight: 20,
                        values: irishAthletes
                    }
                },
                {
                    displayName: 'Age',
                    field: 'age',
                    width: 90,
                    filter: 'number'
                },
                {
                    displayName: 'Country',
                    field: 'country',
                    width: 120
                },
                {
                    displayName: 'Year',
                    field: 'year',
                    width: 90
                },
                {
                    displayName: 'Date',
                    field: 'date',
                    width: 110
                },
                {
                    displayName: 'Sport',
                    field: 'sport',
                    width: 110
                },
                {
                    displayName: 'Gold',
                    field: 'gold',
                    width: 100,
                    filter: 'number'
                },
                {
                    displayName: 'Silver',
                    field: 'silver',
                    width: 100,
                    filter: 'number'
                },
                {
                    displayName: 'Bronze',
                    field: 'bronze',
                    width: 100,
                    filter: 'number'
                },
                {
                    displayName: 'Total',
                    field: 'total',
                    width: 100,
                    filter: 'number'
                }
            ];

            vm.gridOptions1 = {
                columnDefs: columnDefsFilter,
                rowData: null,
                enableFilter: true,
                ready: function (api) {
                    api.sizeColumnsToFit();
                }

            };


            // Pinning Example

            vm.gridOptions2 = {
                columnDefs: columnDefs,
                rowData: null,
                pinnedColumnCount: 2,
                ready: function (api) {
                    api.sizeColumnsToFit();
                }
            };

            //-----------------------------
            // Get the data from SERVER
            //-----------------------------

            $http.get('server/ag-owinners.json')
                .then(function (res) {
                    // basic
                    vm.gridOptions.rowData = res.data;
                    vm.gridOptions.api.onNewRows();
                    // filter
                    vm.gridOptions1.rowData = res.data;
                    vm.gridOptions1.api.onNewRows();
                    // pinning
                    vm.gridOptions2.rowData = res.data;
                    vm.gridOptions2.api.onNewRows();
                });

        }
    }
})();

/**=========================================================
 * Module: datatable,js
 * Angular Datatable controller
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.tables')
        .controller('DataTableController', DataTableController);

    DataTableController.$inject = ['$resource', 'DTOptionsBuilder', 'DTColumnDefBuilder'];

    function DataTableController($resource, DTOptionsBuilder, DTColumnDefBuilder) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            // Ajax

            $resource('server/datatable.json').query().$promise.then(function (persons) {
                vm.persons = persons;
            });

            // Changing data

            vm.heroes = [{
                'id': 860,
                'firstName': 'Superman',
                'lastName': 'Yoda'
            }, {
                    'id': 870,
                    'firstName': 'Ace',
                    'lastName': 'Ventura'
                }, {
                    'id': 590,
                    'firstName': 'Flash',
                    'lastName': 'Gordon'
                }, {
                    'id': 803,
                    'firstName': 'Luke',
                    'lastName': 'Skywalker'
                }
            ];

            vm.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers');
            vm.dtColumnDefs = [
                DTColumnDefBuilder.newColumnDef(0),
                DTColumnDefBuilder.newColumnDef(1),
                DTColumnDefBuilder.newColumnDef(2),
                DTColumnDefBuilder.newColumnDef(3).notSortable()
            ];
            vm.person2Add = _buildPerson2Add(1);
            vm.addPerson = addPerson;
            vm.modifyPerson = modifyPerson;
            vm.removePerson = removePerson;

            function _buildPerson2Add(id) {
                return {
                    id: id,
                    firstName: 'Foo' + id,
                    lastName: 'Bar' + id
                };
            }

            function addPerson() {
                vm.heroes.push(angular.copy(vm.person2Add));
                vm.person2Add = _buildPerson2Add(vm.person2Add.id + 1);
            }

            function modifyPerson(index) {
                vm.heroes.splice(index, 1, angular.copy(vm.person2Add));
                vm.person2Add = _buildPerson2Add(vm.person2Add.id + 1);
            }

            function removePerson(index) {
                vm.heroes.splice(index, 1);
            }

        }
    }
})();

/**=========================================================
 * Module: ng-grid.js
 * ngGrid demo
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.tables')
        .controller('NGGridController', NGGridController);

    NGGridController.$inject = ['$scope', '$http', '$timeout'];

    function NGGridController($scope, $http, $timeout) {

        activate();

        ////////////////

        function activate() {

            $scope.filterOptions = {
                filterText: '',
                useExternalFilter: true
            };
            $scope.totalServerItems = 0;
            $scope.pagingOptions = {
                pageSizes: [250, 500, 1000], // page size options
                pageSize: 250, // default page size
                currentPage: 1 // initial page
            };

            $scope.gridOptions = {
                data: 'myData',
                enablePaging: true,
                showFooter: true,
                rowHeight: 36,
                headerRowHeight: 38,
                totalServerItems: 'totalServerItems',
                pagingOptions: $scope.pagingOptions,
                filterOptions: $scope.filterOptions
            };

            $scope.setPagingData = function (data, page, pageSize) {
                // calc for pager
                var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
                // Store data from server
                $scope.myData = pagedData;
                // Update server side data length
                $scope.totalServerItems = data.length;

                if (!$scope.$$phase) {
                    $scope.$apply();
                }

            };

            $scope.getPagedDataAsync = function (pageSize, page, searchText) {
                var ngGridResourcePath = 'server/ng-grid-data.json';

                $timeout(function () {

                    if (searchText) {
                        var ft = searchText.toLowerCase();
                        $http.get(ngGridResourcePath).success(function (largeLoad) {
                            var data = largeLoad.filter(function (item) {
                                return JSON.stringify(item).toLowerCase().indexOf(ft) !== -1;
                            });
                            $scope.setPagingData(data, page, pageSize);
                        });
                    } else {
                        $http.get(ngGridResourcePath).success(function (largeLoad) {
                            $scope.setPagingData(largeLoad, page, pageSize);
                        });
                    }
                }, 100);
            };


            $scope.$watch('pagingOptions', function (newVal, oldVal) {
                if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
                    $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
                }
            }, true);
            $scope.$watch('filterOptions', function (newVal, oldVal) {
                if (newVal !== oldVal) {
                    $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
                }
            }, true);

            $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.tables')
        .service('ngTableDataService', ngTableDataService);

    function ngTableDataService() {
        /* jshint validthis:true */
        var self = this;
        this.cache = null;
        this.getData = getData;

        ////////////////

        function getData($defer, params, api) {
            // if no cache, request data and filter
            if (!self.cache) {
                if (api) {
                    api.get(function (data) {
                        self.cache = data;
                        filterdata($defer, params);
                    });
                }
            } else {
                filterdata($defer, params);
            }

            function filterdata($defer, params) {
                var from = (params.page() - 1) * params.count();
                var to = params.page() * params.count();
                var filteredData = self.cache.result.slice(from, to);

                params.total(self.cache.total);
                $defer.resolve(filteredData);
            }

        }
    }
})();

/**=========================================================
 * Module: NGTableCtrl.js
 * Controller for ngTables
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.tables')
        .controller('NGTableCtrl', NGTableCtrl);
    /*jshint -W055 */
    NGTableCtrl.$inject = ['$filter', 'ngTableParams', '$resource', '$timeout', 'ngTableDataService'];

    function NGTableCtrl($filter, ngTableParams, $resource, $timeout, ngTableDataService) {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {
            var data = [
                {
                    name: 'Moroni',
                    age: 50,
                    money: -10
                },
                {
                    name: 'Tiancum',
                    age: 43,
                    money: 120
                },
                {
                    name: 'Jacob',
                    age: 27,
                    money: 5.5
                },
                {
                    name: 'Nephi',
                    age: 29,
                    money: -54
                },
                {
                    name: 'Enos',
                    age: 34,
                    money: 110
                },
                {
                    name: 'Tiancum',
                    age: 43,
                    money: 1000
                },
                {
                    name: 'Jacob',
                    age: 27,
                    money: -201
                },
                {
                    name: 'Nephi',
                    age: 29,
                    money: 100
                },
                {
                    name: 'Enos',
                    age: 34,
                    money: -52.5
                },
                {
                    name: 'Tiancum',
                    age: 43,
                    money: 52.1
                },
                {
                    name: 'Jacob',
                    age: 27,
                    money: 110
                },
                {
                    name: 'Nephi',
                    age: 29,
                    money: -55
                },
                {
                    name: 'Enos',
                    age: 34,
                    money: 551
                },
                {
                    name: 'Tiancum',
                    age: 43,
                    money: -1410
                },
                {
                    name: 'Jacob',
                    age: 27,
                    money: 410
                },
                {
                    name: 'Nephi',
                    age: 29,
                    money: 100
                },
                {
                    name: 'Enos',
                    age: 34,
                    money: -100
                }
            ];

            // SELECT ROWS
            // ----------------------------------- 

            vm.data = data;

            vm.tableParams3 = new ngTableParams({
                page: 1, // show first page
                count: 10 // count per page
            }, {
                    total: data.length, // length of data
                    getData: function ($defer, params) {
                        // use build-in angular filter
                        var filteredData = params.filter() ?
                            $filter('filter')(data, params.filter()) :
                            data;
                        var orderedData = params.sorting() ?
                            $filter('orderBy')(filteredData, params.orderBy()) :
                            data;

                        params.total(orderedData.length); // set total for recalc pagination
                        $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                    }
                });

            vm.changeSelection = function (user) {
                console.info(user);
            };

            // EXPORT CSV
            // -----------------------------------  

            var data4 = [{
                name: 'Moroni',
                age: 50
            },
                {
                    name: 'Tiancum',
                    age: 43
                },
                {
                    name: 'Jacob',
                    age: 27
                },
                {
                    name: 'Nephi',
                    age: 29
                },
                {
                    name: 'Enos',
                    age: 34
                },
                {
                    name: 'Tiancum',
                    age: 43
                },
                {
                    name: 'Jacob',
                    age: 27
                },
                {
                    name: 'Nephi',
                    age: 29
                },
                {
                    name: 'Enos',
                    age: 34
                },
                {
                    name: 'Tiancum',
                    age: 43
                },
                {
                    name: 'Jacob',
                    age: 27
                },
                {
                    name: 'Nephi',
                    age: 29
                },
                {
                    name: 'Enos',
                    age: 34
                },
                {
                    name: 'Tiancum',
                    age: 43
                },
                {
                    name: 'Jacob',
                    age: 27
                },
                {
                    name: 'Nephi',
                    age: 29
                },
                {
                    name: 'Enos',
                    age: 34
                }];

            vm.tableParams4 = new ngTableParams({
                page: 1, // show first page
                count: 10 // count per page
            }, {
                    total: data4.length, // length of data4
                    getData: function ($defer, params) {
                        $defer.resolve(data4.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                    }
                });


            // SORTING
            // ----------------------------------- 


            vm.tableParams = new ngTableParams({
                page: 1, // show first page
                count: 10, // count per page
                sorting: {
                    name: 'asc' // initial sorting
                }
            }, {
                    total: data.length, // length of data
                    getData: function ($defer, params) {
                        // use build-in angular filter
                        var orderedData = params.sorting() ?
                            $filter('orderBy')(data, params.orderBy()) :
                            data;

                        $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                    }
                });

            // FILTERS
            // ----------------------------------- 

            vm.tableParams2 = new ngTableParams({
                page: 1, // show first page
                count: 10, // count per page
                filter: {
                    name: '',
                    age: ''
                    // name: 'M'       // initial filter
                }
            }, {
                    total: data.length, // length of data
                    getData: function ($defer, params) {
                        // use build-in angular filter
                        var orderedData = params.filter() ?
                            $filter('filter')(data, params.filter()) :
                            data;

                        vm.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

                        params.total(orderedData.length); // set total for recalc pagination
                        $defer.resolve(vm.users);
                    }
                });

            // AJAX

            var Api = $resource('server/table-data.json');

            vm.tableParams5 = new ngTableParams({
                page: 1, // show first page
                count: 10 // count per page
            }, {
                    total: 0, // length of data
                    counts: [], // hide page counts control
                    getData: function ($defer, params) {

                        // Service using cache to avoid mutiple requests
                        ngTableDataService.getData($defer, params, Api);

                        /* direct ajax request to api (perform result pagination on the server)
                         Api.get(params.url(), function(data) {
                         $timeout(function() {
                         // update table params
                         params.total(data.total);
                         // set new data
                         $defer.resolve(data.result);
                         }, 500);
                         });
                         */
                    }
                });
        }
    }
})();


/**=========================================================
 * Module: demo-buttons.js
 * Provides a simple demo for buttons actions
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.tables')
        .controller('TablexEditableController', TablexEditableController);

    TablexEditableController.$inject = ['$filter', '$http', 'editableOptions', 'editableThemes', '$q'];

    function TablexEditableController($filter, $http, editableOptions, editableThemes, $q) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            // editable row
            // ----------------------------------- 
            vm.users = [
                {
                    id: 1,
                    name: 'awesome user1',
                    status: 2,
                    group: 4,
                    groupName: 'admin'
                },
                {
                    id: 2,
                    name: 'awesome user2',
                    status: undefined,
                    group: 3,
                    groupName: 'vip'
                },
                {
                    id: 3,
                    name: 'awesome user3',
                    status: 2,
                    group: null
                }
            ];

            vm.statuses = [
                {
                    value: 1,
                    text: 'status1'
                },
                {
                    value: 2,
                    text: 'status2'
                },
                {
                    value: 3,
                    text: 'status3'
                },
                {
                    value: 4,
                    text: 'status4'
                }
            ];

            vm.groups = [];
            vm.loadGroups = function () {
                return vm.groups.length ? null : $http.get('server/xeditable-groups.json').success(function (data) {
                    vm.groups = data;
                });
            };

            vm.showGroup = function (user) {
                if (user.group && vm.groups.length) {
                    var selected = $filter('filter')(vm.groups, {
                        id: user.group
                    });
                    return selected.length ? selected[0].text : 'Not set';
                } else {
                    return user.groupName || 'Not set';
                }
            };

            vm.showStatus = function (user) {
                var selected = [];
                if (user.status) {
                    selected = $filter('filter')(vm.statuses, {
                        value: user.status
                    });
                }
                return selected.length ? selected[0].text : 'Not set';
            };

            vm.checkName = function (data, id) {
                if (id === 2 && data !== 'awesome') {
                    return 'Username 2 should be `awesome`';
                }
            };

            vm.saveUser = function (data, id) {
                //vm.user not updated yet
                angular.extend(data, {
                    id: id
                });
                console.log('Saving user: ' + id);
                // return $http.post('/saveUser', data);
            };

            // remove user
            vm.removeUser = function (index) {
                vm.users.splice(index, 1);
            };

            // add user
            vm.addUser = function () {
                vm.inserted = {
                    id: vm.users.length + 1,
                    name: '',
                    status: null,
                    group: null,
                    isNew: true
                };
                vm.users.push(vm.inserted);
            };

            // editable column
            // ----------------------------------- 


            vm.saveColumn = function (column) {
                var results = [];
                angular.forEach(vm.users, function ( /*user*/) {
                    // results.push($http.post('/saveColumn', {column: column, value: user[column], id: user.id}));
                    console.log('Saving column: ' + column);
                });
                return $q.all(results);
            };

            // editable table
            // ----------------------------------- 

            // filter users to show
            vm.filterUser = function (user) {
                return user.isDeleted !== true;
            };

            // mark user as deleted
            vm.deleteUser = function (id) {
                var filtered = $filter('filter')(vm.users, {
                    id: id
                });
                if (filtered.length) {
                    filtered[0].isDeleted = true;
                }
            };

            // cancel all changes
            vm.cancel = function () {
                for (var i = vm.users.length; i--;) {
                    var user = vm.users[i];
                    // undelete
                    if (user.isDeleted) {
                        delete user.isDeleted;
                    }
                    // remove new 
                    if (user.isNew) {
                        vm.users.splice(i, 1);
                    }
                }
            };

            // save edits
            vm.saveTable = function () {
                var results = [];
                for (var i = vm.users.length; i--;) {
                    var user = vm.users[i];
                    // actually delete user
                    if (user.isDeleted) {
                        vm.users.splice(i, 1);
                    }
                    // mark as not new 
                    if (user.isNew) {
                        user.isNew = false;
                    }

                    // send on server
                    // results.push($http.post('/saveUser', user));
                    console.log('Saving Table...');
                }

                return $q.all(results);
            };

        }
    }
})();

/**=========================================================
 * Module: UIGridController
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.tables')
        .controller('UIGridController', UIGridController);

    UIGridController.$inject = ['uiGridConstants', '$http'];

    function UIGridController(uiGridConstants, $http) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            // Basic example
            // ----------------------------------- 

            vm.gridOptions = {
                rowHeight: 34,
                data: [
                    {
                        'name': 'Wilder Gonzales',
                        'gender': 'male',
                        'company': 'Geekko'
                    },
                    {
                        'name': 'Georgina Schultz',
                        'gender': 'female',
                        'company': 'Suretech'
                    },
                    {
                        'name': 'Carroll Buchanan',
                        'gender': 'male',
                        'company': 'Ecosys'
                    },
                    {
                        'name': 'Valarie Atkinson',
                        'gender': 'female',
                        'company': 'Hopeli'
                    },
                    {
                        'name': 'Schroeder Mathews',
                        'gender': 'male',
                        'company': 'Polarium'
                    },
                    {
                        'name': 'Ethel Price',
                        'gender': 'female',
                        'company': 'Enersol'
                    },
                    {
                        'name': 'Claudine Neal',
                        'gender': 'female',
                        'company': 'Sealoud'
                    },
                    {
                        'name': 'Beryl Rice',
                        'gender': 'female',
                        'company': 'Velity'
                    },
                    {
                        'name': 'Lynda Mendoza',
                        'gender': 'female',
                        'company': 'Dogspa'
                    },
                    {
                        'name': 'Sarah Massey',
                        'gender': 'female',
                        'company': 'Bisba'
                    },
                    {
                        'name': 'Robles Boyle',
                        'gender': 'male',
                        'company': 'Comtract'
                    },
                    {
                        'name': 'Evans Hickman',
                        'gender': 'male',
                        'company': 'Parleynet'
                    },
                    {
                        'name': 'Dawson Barber',
                        'gender': 'male',
                        'company': 'Dymi'
                    },
                    {
                        'name': 'Bruce Strong',
                        'gender': 'male',
                        'company': 'Xyqag'
                    },
                    {
                        'name': 'Nellie Whitfield',
                        'gender': 'female',
                        'company': 'Exospace'
                    },
                    {
                        'name': 'Jackson Macias',
                        'gender': 'male',
                        'company': 'Aquamate'
                    },
                    {
                        'name': 'Pena Pena',
                        'gender': 'male',
                        'company': 'Quarx'
                    },
                    {
                        'name': 'Lelia Gates',
                        'gender': 'female',
                        'company': 'Proxsoft'
                    },
                    {
                        'name': 'Letitia Vasquez',
                        'gender': 'female',
                        'company': 'Slumberia'
                    },
                    {
                        'name': 'Trevino Moreno',
                        'gender': 'male',
                        'company': 'Conjurica'
                    }
                ]
            };

            // Complex example
            // ----------------------------------- 

            var data = [];

            vm.gridOptionsComplex = {
                showGridFooter: true,
                showColumnFooter: true,
                enableFiltering: true,
                columnDefs: [
                    {
                        field: 'name',
                        width: '13%'
                    },
                    {
                        field: 'address.street',
                        aggregationType: uiGridConstants.aggregationTypes.sum,
                        width: '13%'
                    },
                    {
                        field: 'age',
                        aggregationType: uiGridConstants.aggregationTypes.avg,
                        aggregationHideLabel: true,
                        width: '13%'
                    },
                    {
                        name: 'ageMin',
                        field: 'age',
                        aggregationType: uiGridConstants.aggregationTypes.min,
                        width: '13%',
                        displayName: 'Age for min'
                    },
                    {
                        name: 'ageMax',
                        field: 'age',
                        aggregationType: uiGridConstants.aggregationTypes.max,
                        width: '13%',
                        displayName: 'Age for max'
                    },
                    {
                        name: 'customCellTemplate',
                        field: 'age',
                        width: '14%',
                        footerCellTemplate: '<div class="ui-grid-cell-contents bg-info text-center">Custom HTML</div>'
                    },
                    {
                        name: 'registered',
                        field: 'registered',
                        width: '20%',
                        cellFilter: 'date',
                        footerCellFilter: 'date',
                        aggregationType: uiGridConstants.aggregationTypes.max
                    }
                ],
                data: data,
                onRegisterApi: function (gridApi) {
                    vm.gridApi = gridApi;
                }
            };

            $http.get('server/uigrid-complex.json')
                .success(function (data) {
                    data.forEach(function (row) {
                        row.registered = Date.parse(row.registered);
                    });
                    vm.gridOptionsComplex.data = data;
                });


            vm.gridOptions1 = {
                paginationPageSizes: [25, 50, 75],
                paginationPageSize: 25,
                columnDefs: [
                    {
                        name: 'name'
                    },
                    {
                        name: 'gender'
                    },
                    {
                        name: 'company'
                    }
                ]
            };

            $http.get('server/uigrid-100.json')
                .success(function (data) {
                    vm.gridOptions1.data = data;
                });

        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.translate')
        .config(translateConfig);
    translateConfig.$inject = ['$translateProvider'];

    function translateConfig($translateProvider) {

        $translateProvider.useStaticFilesLoader({
            prefix: 'app/i18n/',
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('en');
        $translateProvider.useLocalStorage();
        $translateProvider.usePostCompiling(true);
        $translateProvider.useSanitizeValueStrategy('sanitizeParameters');

    }
})();
(function () {
    'use strict';

    angular
        .module('app.translate')
        .run(translateRun);
    translateRun.$inject = ['$rootScope', '$translate'];

    function translateRun($rootScope, $translate) {

        // Internationalization
        // ----------------------

        $rootScope.language = {
            // Handles language dropdown
            listIsOpen: false,
            // list of available languages
            available: {
                'en': 'English',
                'es_AR': 'Español'
            },
            // display always the current ui language
            init: function () {
                var proposedLanguage = $translate.proposedLanguage() || $translate.use();
                var preferredLanguage = $translate.preferredLanguage(); // we know we have set a preferred one in app.config
                $rootScope.language.selected = $rootScope.language.available[(proposedLanguage || preferredLanguage)];
            },
            set: function (localeId) {
                // Set the new idiom
                $translate.use(localeId);
                // save a reference for the current language
                $rootScope.language.selected = $rootScope.language.available[localeId];
                // finally toggle dropdown
                $rootScope.language.listIsOpen = !$rootScope.language.listIsOpen;
            }
        };

        $rootScope.language.init();

    }
})();

/**=========================================================
 * Module: animate-enabled.js
 * Enable or disables ngAnimate for element with directive
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.utils')
        .directive('animateEnabled', animateEnabled);

    animateEnabled.$inject = ['$animate'];

    function animateEnabled($animate) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            scope.$watch(function () {
                return scope.$eval(attrs.animateEnabled, scope);
            }, function (newValue) {
                $animate.enabled(!!newValue, element);
            });
        }
    }

})();

/**=========================================================
 * Module: browser.js
 * Browser detection
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.utils')
        .service('Browser', Browser);

    Browser.$inject = ['$window'];

    function Browser($window) {
        return $window.jQBrowser;
    }

})();

/**=========================================================
 * Module: clear-storage.js
 * Removes a key from the browser storage via element click
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.utils')
        .directive('resetKey', resetKey);

    resetKey.$inject = ['$state', '$localStorage'];

    function resetKey($state, $localStorage) {
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
                resetKey: '@'
            }
        };
        return directive;

        function link(scope, element) {
            element.on('click', function (e) {
                e.preventDefault();

                if (scope.resetKey) {
                    delete $localStorage[scope.resetKey];
                    $state.go($state.current, {}, {
                        reload: true
                    });
                } else {
                    $.error('No storage key specified for reset.');
                }
            });
        }
    }

})();

/**=========================================================
 * Module: fullscreen.js
 * Toggle the fullscreen mode on/off
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.utils')
        .directive('toggleFullscreen', toggleFullscreen);

    toggleFullscreen.$inject = ['Browser'];

    function toggleFullscreen(Browser) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
            // Not supported under IE
            if (Browser.msie) {
                element.addClass('hide');
            } else {
                element.on('click', function (e) {
                    e.preventDefault();

                    if (screenfull.enabled) {

                        screenfull.toggle();

                        // Switch icon indicator
                        if (screenfull.isFullscreen)
                            $(this).children('em').removeClass('fa-expand').addClass('fa-compress');
                        else
                            $(this).children('em').removeClass('fa-compress').addClass('fa-expand');

                    } else {
                        $.error('Fullscreen not enabled');
                    }

                });
            }
        }
    }


})();

/**=========================================================
 * Module: load-css.js
 * Request and load into the current page a css file
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.utils')
        .directive('loadCss', loadCss);

    function loadCss() {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            element.on('click', function (e) {
                if (element.is('a')) e.preventDefault();
                var uri = attrs.loadCss,
                    link;

                if (uri) {
                    link = createLink(uri);
                    if (!link) {
                        $.error('Error creating stylesheet link element.');
                    }
                } else {
                    $.error('No stylesheet location defined.');
                }

            });
        }

        function createLink(uri) {
            var linkId = 'autoloaded-stylesheet',
                oldLink = $('#' + linkId).attr('id', linkId + '-old');

            $('head').append($('<link/>').attr({
                'id': linkId,
                'rel': 'stylesheet',
                'href': uri
            }));

            if (oldLink.length) {
                oldLink.remove();
            }

            return $('#' + linkId);
        }
    }

})();

/**=========================================================
 * Module: now.js
 * Provides a simple way to display the current time formatted
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.utils')
        .directive('now', now);

    now.$inject = ['dateFilter', '$interval'];

    function now(dateFilter, $interval) {
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
            var format = attrs.format;

            function updateTime() {
                var dt = dateFilter(new Date(), format);
                element.text(dt);
            }

            updateTime();
            var intervalPromise = $interval(updateTime, 1000);

            scope.$on('$destroy', function () {
                $interval.cancel(intervalPromise);
            });

        }
    }

})();

/**=========================================================
 * Module: table-checkall.js
 * Tables check all checkbox
 =========================================================*/
(function () {
    'use strict';

    angular
        .module('app.utils')
        .directive('checkAll', checkAll);

    function checkAll() {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
            element.on('change', function () {
                var $this = $(this),
                    index = $this.index() + 1,
                    checkbox = $this.find('input[type="checkbox"]'),
                    table = $this.parents('table');
                // Make sure to affect only the correct checkbox column
                table.find('tbody > tr > td:nth-child(' + index + ') input[type="checkbox"]')
                    .prop('checked', checkbox[0].checked);

            });
        }
    }

})();

/**=========================================================
 * Module: trigger-resize.js
 * Triggers a window resize event from any element
 =========================================================*/
(function () {
    'use strict';

    angular
        .module('app.utils')
        .directive('triggerResize', triggerResize);

    triggerResize.$inject = ['$window', '$timeout'];

    function triggerResize($window, $timeout) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
            element.on('click', function () {
                $timeout(function () {
                    $window.dispatchEvent(new Event('resize'));
                });
            });
        }
    }

})();

/**=========================================================
 * Module: utils.js
 * Utility library to use across the theme
 =========================================================*/

(function () {
    'use strict';

    angular
        .module('app.utils')
        .service('Utils', Utils);

    Utils.$inject = ['$window', 'APP_MEDIAQUERY'];

    function Utils($window, APP_MEDIAQUERY) {

        var $html = angular.element('html'),
            $win = angular.element($window),
            $body = angular.element('body');

        return {
            // DETECTION
            support: {
                transition: (function () {
                    var transitionEnd = (function () {

                        var element = document.body || document.documentElement,
                            transEndEventNames = {
                                WebkitTransition: 'webkitTransitionEnd',
                                MozTransition: 'transitionend',
                                OTransition: 'oTransitionEnd otransitionend',
                                transition: 'transitionend'
                            },
                            name;

                        for (name in transEndEventNames) {
                            if (element.style[name] !== undefined) return transEndEventNames[name];
                        }
                    } ());

                    return transitionEnd && {
                        end: transitionEnd
                    };
                })(),
                animation: (function () {

                    var animationEnd = (function () {

                        var element = document.body || document.documentElement,
                            animEndEventNames = {
                                WebkitAnimation: 'webkitAnimationEnd',
                                MozAnimation: 'animationend',
                                OAnimation: 'oAnimationEnd oanimationend',
                                animation: 'animationend'
                            },
                            name;

                        for (name in animEndEventNames) {
                            if (element.style[name] !== undefined) return animEndEventNames[name];
                        }
                    } ());

                    return animationEnd && {
                        end: animationEnd
                    };
                })(),
                requestAnimationFrame: window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                },
                /*jshint -W069*/
                touch: (
                    ('ontouchstart' in window && navigator.userAgent.toLowerCase().match(/mobile|tablet/)) ||
                    (window.DocumentTouch && document instanceof window.DocumentTouch) ||
                    (window.navigator['msPointerEnabled'] && window.navigator['msMaxTouchPoints'] > 0) || //IE 10
                    (window.navigator['pointerEnabled'] && window.navigator['maxTouchPoints'] > 0) || //IE >=11
                    false
                ),
                mutationobserver: (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || null)
            },
            // UTILITIES
            isInView: function (element, options) {
                /*jshint -W106*/
                var $element = $(element);

                if (!$element.is(':visible')) {
                    return false;
                }

                var window_left = $win.scrollLeft(),
                    window_top = $win.scrollTop(),
                    offset = $element.offset(),
                    left = offset.left,
                    top = offset.top;

                options = $.extend({
                    topoffset: 0,
                    leftoffset: 0
                }, options);

                if (top + $element.height() >= window_top && top - options.topoffset <= window_top + $win.height() &&
                    left + $element.width() >= window_left && left - options.leftoffset <= window_left + $win.width()) {
                    return true;
                } else {
                    return false;
                }
            },

            langdirection: $html.attr('dir') === 'rtl' ? 'right' : 'left',

            isTouch: function () {
                return $html.hasClass('touch');
            },

            isSidebarCollapsed: function () {
                return $body.hasClass('aside-collapsed');
            },

            isSidebarToggled: function () {
                return $body.hasClass('aside-toggled');
            },

            isMobile: function () {
                return $win.width() < APP_MEDIAQUERY.tablet;
            }

        };
    }
})();

(function () {
    'use strict';

    angular
        .module('custom', [
            // request the the entire framework
            'angle',
            // or just modules
            'app.core',
            'app.sidebar'
            /*...*/
        ]);
})();

// To run this code, edit file index.html or index.jade and change
// html data-ng-app attribute from angle to myAppName
// ----------------------------------------------------------------------

(function () {
    'use strict';

    angular
        .module('custom')
        .controller('Controller', Controller);

    Controller.$inject = ['$log'];

    function Controller($log) {
        // for controllerAs syntax
        // var vm = this;

        activate();

        ////////////////

        function activate() {
            $log.log('I\'m a line from custom.js');
        }
    }
})();
