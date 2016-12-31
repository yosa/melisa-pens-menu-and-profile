/**
 * inspirate by https://material.uplabs.com/posts/menu-and-profile
 */
Ext.application({
    name: 'Melisa.pens',
    
    paths: {
        'Melisa.pens': 'app'
    },
    
    requires: [
        'Melisa.pens.view.menuAndProfile.Wrapper'
    ],
    
    mainView: 'Melisa.pens.view.menuAndProfile.Wrapper'
});
