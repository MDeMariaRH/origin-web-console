'use strict';

angular.module('openshiftConsole')
  .run(function(extensionRegistry) {
    extensionRegistry
      .add('nav-dropdown-mobile', _.spread(function(user) {
        return [{
          type: 'dom',
          node: [
            '<li>',
              '<a href="{{\'default\' | helpLink}}">',
                '<span class="fa fa-book fa-fw" aria-hidden="true"></span> Documentation',
              '</a>',
            '</li>'
          ].join('')
        }, {
          type: 'dom',
          node: [
            '<li>',
              '<a href="command-line">',
                '<span class="fa fa-terminal" aria-hidden="true"></span> Command Line Tools',
              '</a>',
            '</li>'
          ].join('')
        }, {
          type: 'dom',
          node: [
            '<li>',
              '<a href="about">',
                '<span class="pficon pficon-info fa-fw" aria-hidden="true"></span> About',
              '</a>',
            '</li>'
          ].join('')
        }, {
          type: 'dom',
          node: _.template([
            '<li>',
              '<a href="logout">',
                '<span class="pficon pficon-user fa-fw" aria-hidden="true"></span>',
                'Log out <span class="username"><%= userName %></span>',
              '</a>',
            '</li>'
          ].join(''))({userName: (user ? (user.fullName || user.metadata.name) : "") })
        }];
      }));
  });
