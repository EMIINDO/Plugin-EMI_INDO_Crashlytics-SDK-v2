"use strict";

{
    const SDK = globalThis.SDK;
    const PLUGIN_CLASS = SDK.Plugins.EMI_INDO_Crashlytics;

    PLUGIN_CLASS.Type = class EMI_INDO_CrashlyticsType extends SDK.ITypeBase {
        constructor(sdkPlugin, iObjectType) {
            super(sdkPlugin, iObjectType);
        }
    };
}