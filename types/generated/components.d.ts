import type { Schema, Struct } from '@strapi/strapi';

export interface NavNavGroup extends Struct.ComponentSchema {
  collectionName: 'components_nav_nav_groups';
  info: {
    displayName: 'nav-group';
  };
  attributes: {
    GroupTitle: Schema.Attribute.String;
    Links: Schema.Attribute.Component<'nav.nav-link', true>;
  };
}

export interface NavNavLink extends Struct.ComponentSchema {
  collectionName: 'components_nav_nav_links';
  info: {
    displayName: 'nav-link';
  };
  attributes: {
    IconName: Schema.Attribute.String;
    Label: Schema.Attribute.String;
    Path: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'nav.nav-group': NavNavGroup;
      'nav.nav-link': NavNavLink;
    }
  }
}
