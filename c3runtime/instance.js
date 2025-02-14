"use strict";
{
    globalThis.C3.Plugins.EMI_INDO_Crashlytics.Instance = class Firebase_CrashlyticsInstance extends globalThis.ISDKInstanceBase {
        constructor() {
            super();

            const properties = this._getInitProperties();

            this.test = "";

            if (properties) {

                this.test = properties[0] === 0 ? true : false;

            }
            if (typeof this.crash == "undefined") {
                return;
            }
            this.crash = cordova.plugins.firebase.crashlytics;
            this.crash.setEnabled(this.test);
        }

        _release() {
            super._release();
        }

        _saveToJson() {
            return {
                // data to be saved for savegames
            };
        }

        _loadFromJson(o) {
            // load state for savegames
        }

    };
}