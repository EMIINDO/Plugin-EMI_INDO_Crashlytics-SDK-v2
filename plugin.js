//Converted with C2C3AddonConverter v1.0.1.1
"use strict";
// Porting BY EMI INDO with c3addon-ide-plus

{
    const PLUGIN_ID = "EMI_INDO_Crashlytics";
    // callMap Deprecated const PLUGIN_VERSION = "1.0.0.0";
    const PLUGIN_CATEGORY = "other";

    // callMap Deprecated let app = null;

    const SDK = globalThis.SDK;
    const PLUGIN_CLASS = SDK.Plugins.EMI_INDO_Crashlytics = class EMI_INDO_Crashlytics extends SDK.IPluginBase {
        constructor() {
            super(PLUGIN_ID);
            SDK.Lang.PushContext("plugins." + PLUGIN_ID.toLowerCase());
            this._info.SetIcon("icon.svg", "image/svg+xml");
            this._info.SetName(globalThis.lang(".name"));
            this._info.SetDescription(globalThis.lang(".description"));
            // callMap Deprecated this._info.SetVersion(PLUGIN_VERSION);
            this._info.SetCategory(PLUGIN_CATEGORY);
            this._info.SetAuthor("EMI INDO");
            this._info.SetHelpUrl(globalThis.lang(".help-url"));
            this._info.SetRuntimeModuleMainScript("c3runtime/main.js");
            this._info.SetIsSingleGlobal(true);
            this._info.SetIsDeprecated(false);
            this._info.SetSupportsEffects(false);
            this._info.SetMustPreDraw(false);
            this._info.SetCanBeBundled(false);

            this._info.SetSupportedRuntimes(["c3"]);

            SDK.Lang.PushContext(".properties");
            this._info.SetProperties([
                new SDK.PluginProperty("combo", "set-enabled",
                    {
                        "items": ["enabled", "disabled"],
                        "initialValue": "enabled"
                    })

            ]);
            SDK.Lang.PopContext(); // .properties
            SDK.Lang.PopContext();
        }
    };
    PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}