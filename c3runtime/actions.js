"use strict";
{
    globalThis.C3.Plugins.EMI_INDO_Crashlytics.Acts = {
        aa(log0)
        {
            if (typeof this.crash == "undefined")
            {
                return;
            }
            
            this.crash.log(log0);
        },

        bb(logerror0)
        {
            if (typeof this.crash == "undefined")
            {
                return;
            }
            
            this.crash.logError(logerror0);
        },

        cc(userid0)
        {
            if (typeof this.crash == "undefined")
            {
                return;
            }
            
            this.crash.setUserId(userid0);
        }
    };
}