'use strict';

define('meetingroom-finder-frontend/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('meetingroom-finder-frontend/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('meetingroom-finder-frontend/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('meetingroom-finder-frontend/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'meetingroom-finder-frontend/tests/helpers/start-app', 'meetingroom-finder-frontend/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _meetingroomFinderFrontendTestsHelpersStartApp, _meetingroomFinderFrontendTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _meetingroomFinderFrontendTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _meetingroomFinderFrontendTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('meetingroom-finder-frontend/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('meetingroom-finder-frontend/tests/helpers/resolver', ['exports', 'meetingroom-finder-frontend/resolver', 'meetingroom-finder-frontend/config/environment'], function (exports, _meetingroomFinderFrontendResolver, _meetingroomFinderFrontendConfigEnvironment) {

  var resolver = _meetingroomFinderFrontendResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _meetingroomFinderFrontendConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _meetingroomFinderFrontendConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('meetingroom-finder-frontend/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('meetingroom-finder-frontend/tests/helpers/start-app', ['exports', 'ember', 'meetingroom-finder-frontend/app', 'meetingroom-finder-frontend/config/environment'], function (exports, _ember, _meetingroomFinderFrontendApp, _meetingroomFinderFrontendConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _meetingroomFinderFrontendConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _meetingroomFinderFrontendApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('meetingroom-finder-frontend/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('meetingroom-finder-frontend/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('meetingroom-finder-frontend/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('meetingroom-finder-frontend/tests/test-helper', ['exports', 'meetingroom-finder-frontend/tests/helpers/resolver', 'ember-qunit'], function (exports, _meetingroomFinderFrontendTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_meetingroomFinderFrontendTestsHelpersResolver['default']);
});
define('meetingroom-finder-frontend/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('meetingroom-finder-frontend/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
