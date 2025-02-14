"use strict";

{
    const SDK = globalThis.SDK;
    const PLUGIN_CLASS = SDK.Plugins.EMI_INDO_Crashlytics;

    PLUGIN_CLASS.Instance = class EMI_INDO_CrashlyticsInstance extends SDK.IInstanceBase {
        constructor(sdkType, inst) {
            super(sdkType, inst);
        }
        Release() { }
        OnCreate() { }
        OnPropertyChanged(id, value) { }
        LoadC2Property(name, valueString) {
            return false; // not handled
        }
    };
}