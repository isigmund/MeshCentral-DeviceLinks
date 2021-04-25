/**
* @description MeshCentral device links plugin
* @author Ingo Sigmund
* @copyright
* @license Apache-2.0
*/

"use strict";

module.exports.devicelinks = function (parent) {
    var obj = {};

    obj.parent = parent;
    obj.meshServer = parent.parent;
    obj.db = null;

    // This should be updated to contain functions that need to be brought to the
    //   front end for processing. (If they need to be accessed in the GUI, they should be here)
    obj.exports = [
      'registerPluginTab',
      'on_device_page'
//      '_pluginPermissions',
    ];

//    obj._pluginPermissions = function() {
//        return {
//            "deviceLiveTab": "Event Log: Live Tab",
//            "deviceHistoryTab": "Event Log: History Tab"
//&        };
//    };

    obj.server_startup = function() {
        // obj.parent.parent.debug('plugin:eventlog', 'Starting eventlog plugin with server');
        //console.log(Object.keys(obj.meshServer.pluginHandler));
        // hack a persistent db here
        /////////////////////obj.meshServer.pluginHandler.eventlog_db = require (__dirname + '/db.js').CreateDB(obj.meshServer);
        /////////////////////obj.db = obj.meshServer.pluginHandler.eventlog_db;
    };

    // called to notify the web server that there is a new tab in town
    obj.registerPluginTab = function() {
      if (currentNode.osdesc.toLowerCase().indexOf('windows') === -1) return { tabId: null, tabTitle: null };

      return {
        tabTitle: "Device Links",
        tabId: "pluginDeviceLinks"
      };
    };

    // called to get the content for that tabs data
    obj.on_device_page = function() {
      return '<div id=pluginDeviceLinks>TEST</div>';
    };

    return obj;
};
