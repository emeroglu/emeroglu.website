$js.compile("UIModule", Module, function ($public, $private, $protected, $self) {

    $protected.override.func.on_key = function () { return "ui"; };

    $protected.override.func.on_types = function () { return [AbsoluteLayout, RelativeLayout]; };

});