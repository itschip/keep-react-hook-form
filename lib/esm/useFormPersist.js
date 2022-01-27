import { useEffect } from 'react';
export var usePersistForm = function (settings) {
    var watch = settings.watch, setValue = settings.setValue, formName = settings.formName, _a = settings.shouldDirty, shouldDirty = _a === void 0 ? false : _a, _b = settings.shouldValidate, shouldValidate = _b === void 0 ? false : _b, onRestored = settings.onRestored;
    var currentValue = watch();
    var getSessionStorage = function () { return window.sessionStorage; };
    useEffect(function () {
        var storage = getSessionStorage().getItem(formName);
        var restoredData = {};
        if (storage) {
            var storedValues = JSON.parse(storage);
            for (var _i = 0, _a = Object.entries(storedValues); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                setValue(key, value, { shouldValidate: shouldValidate, shouldDirty: shouldDirty });
                restoredData[key] = value;
            }
            if (onRestored)
                onRestored(restoredData);
        }
    }, [formName, setValue, shouldValidate, shouldDirty]);
    useEffect(function () {
        getSessionStorage().setItem(formName, JSON.stringify(currentValue));
    });
};
