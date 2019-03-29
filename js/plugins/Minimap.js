//=============================================================================
// PluginName.js
//=============================================================================
/*:
 * @plugindesc Description of your plugin
 *
 * @author Your name
 *
 * @help
 *
 * Anything users might need to know about using your plugin.
 *
 * TERMS OF USE
 * What people who use your plugin are allowed to do with it.
 *
 * COMPATIBILITY
 * Any compatibility issues you know of or that have been brought to your attention, such as not being able to use this plugin with one of Galv's for example. This will be most common when you have a plugin that does the same or a similar thing to someone else's.
 */
 
 (function() {
    
    function Window_MyWindow() {
     this.initialize.apply(this, arguments);
    }
    
    Window_MyWindow.prototype = Object.create(Window_Base.prototype);
    Window_MyWindow.prototype.constructor = Window_MyWindow;
    
    Window_MyWindow.prototype.initialize = function(x, y, width, height) {
        Window_Base.prototype.initialize.call(this, x, y, width, height);
        this.refresh();
        
    };

    var _Scene_Map_createAllWindows = Scene_Map.prototype.createAllWindows;
    Scene_Map.prototype.createAllWindows = function() {
        _Scene_Map_createAllWindows.call(this);
        this.createMinimapWindow();
    };
    
    Scene_Map.prototype.createMinimapWindow = function() {
        this._minimapWindow = new Window_MyWindow(0, 0, 200, 200);
        this.addChild(this._minimapWindow);
    };
    
 })();