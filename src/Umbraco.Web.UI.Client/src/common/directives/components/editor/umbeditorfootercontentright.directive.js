/**
@ngdoc directive
@name umbraco.directives.directive:umbEditorFooterContentRight
@restrict E

@description
Use this directive to align content right inside the main editor footer.

<h3>Markup example</h3>
<pre>
    <div ng-controller="Umbraco.Controller as vm">

        <umb-editor-view>

            <umb-editor-footer>

                <umb-editor-footer-content-left>
                    // align content left
                </umb-editor-footer-content-left>

                <umb-editor-footer-content-right>
                    // align content right
                </umb-editor-footer-content-right>

            </umb-editor-footer>

        </umb-editor-view>

    </div>
</pre>

<h3>Use in combination with</h3>
<ul>
    <li>{@link umbraco.directives.directive:umbEditorView umbEditorView}</li>
    <li>{@link umbraco.directives.directive:umbEditorHeader umbEditorHeader}</li>
    <li>{@link umbraco.directives.directive:umbEditorContainer umbEditorContainer}</li>
    <li>{@link umbraco.directives.directive:umbEditorFooter umbEditorFooter}</li>
    <li>{@link umbraco.directives.directive:umbEditorFooterContentLeft umbEditorFooterContentLeft}</li>
</ul>
**/

(function() {
   'use strict';

   function EditorFooterContentRightDirective() {

      var directive = {
         transclude: true,
         restrict: 'E',
         replace: true,
         templateUrl: 'views/components/editor/umb-editor-footer-content-right.html'
      };

      return directive;
   }

   angular.module('umbraco.directives').directive('umbEditorFooterContentRight', EditorFooterContentRightDirective);

})();
