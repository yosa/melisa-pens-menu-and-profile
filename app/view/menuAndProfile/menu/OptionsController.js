Ext.define('Melisa.pens.view.menuAndProfile.menu.OptionsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.options',
    
    control: {
        button: {
            tap: 'onTapButton'
        }
    },    
    
    onTapButton: function() {
        
        /* hide menu */
        this.getView().up().hide();
        
        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            message: 'Opening module...'
        });
        
        Ext.defer(function() {
            
            /* event that will be received by the master controller wrapper driver */
            Ext.GlobalEvents.fireEvent('activemodule', 1);
            Ext.Viewport.setMasked(false);
            
        }, 600);
        
    }
});
